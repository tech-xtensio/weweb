import { createApp, createSSRApp } from 'vue';
import axios from 'axios';
import { VueCookieNext } from 'vue-cookie-next';
import { isEqual, isEmpty, cloneDeep, get, set, merge } from 'lodash';


/* wwFront:start */
import { createHead } from '@vueuse/head';
/* wwFront:end */

import App from '@/_front/App.vue';
import router from '@/_front/router.js';

let store;
let pinia;
/* wwFront:start */
// Set theme class before first global context computation to avoid flickering and wrong computed colors
if (window.localStorage?.getItem('ww-app-theme') === 'dark')
    document.documentElement.classList.add('ww-app-theme-dark');
else if (window.localStorage?.getItem('ww-app-theme') === 'light')
    document.documentElement.classList.remove('ww-app-theme-dark');

import storeImport from '@/store';
import wwLibImport from '@/wwLib';
import { createPinia } from 'pinia';
store = storeImport;
pinia = createPinia();
window.wwLib = wwLibImport;

if ('serviceWorker' in navigator) {
    if (window.wwg_disableManifest) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
            for (const registration of registrations) {
                registration.unregister();
            }
        });
    } else {
        const baseTag = window.wwg_designInfo?.baseTag;
        let href = baseTag?.href || null;
        if (href) {
            if (!href.startsWith('/')) href = `/${href}`;
            if (!href.endsWith('/')) href = `${href}/`;
        }
        navigator.serviceWorker
            .register(`${href ?? '/'}serviceworker.js?_wwcv=${window.wwg_cacheVersion}`)
            .catch(error => {
                console.error('Service worker registration failed:', error);
            });
    }
}
/* wwFront:end */

import wwElements from '@/_front/components/index.js';
import { addMediaQueriesListener } from '../helpers/mediaQueriesListener.js';
import globalServices from '@/_common/plugins/globalServices.js';


import '@/assets/css';

//Set window libraries
window._ = {
    isEqual,
    isEmpty,
    cloneDeep,
    get,
    set,
    merge,
};
window.axios = axios.create({});


const app = createApp(App);

const init = async function () {
    window.vm = app;
    app.use(pinia);
    app.use(store);
    app.use(VueCookieNext);
    app.use(wwElements);
    app.use(globalServices);
    app.config.unwrapInjectedRef = true;
    /* wwFront:start */
    app.use(createHead());
    /* wwFront:end */



    await wwLib.initFront({ store, router });

    app.use(router);

    addMediaQueriesListener(wwLib.$store.getters['front/getScreenSizes'], (screenSize, isActive) => {
        wwLib.$store.dispatch('front/setIsScreenSizeActive', { screenSize, isActive });
    });

    await router.isReady();

    // We select ourself app element, because Vue does not know how to do it properly (Editor + Front Iframe)
    const el = document.getElementById('app');
    app.mount(el);

    /* wwFront:start */
    // Needed or reactivity is not working in deployed app
    wwLib.scrollStore.setValues();
    /* wwFront:end */

    wwLib.$emit('wwLib:isMounted');
    wwLib.isMounted = true;
};


init();

// Wrap Mapbox to prevent "Container not found" errors
if (typeof window.mapboxgl !== 'undefined') {
    const OriginalMap = window.mapboxgl.Map;
    window.mapboxgl.Map = function (options) {
        // Check if container exists before creating map
        const container = typeof options.container === 'string'
            ? document.getElementById(options.container)
            : options.container;

        if (!container) {
            console.warn(`[Mapbox] Skipping map initialization - container '${options.container}' not found`);
            // Return a comprehensive mock object to prevent further errors
            const mockMap = {
                on: () => mockMap,
                off: () => mockMap,
                once: () => mockMap,
                remove: () => { },
                resize: () => { },
                getBounds: () => ({}),
                getCenter: () => ({ lng: 0, lat: 0 }),
                getZoom: () => 0,
                setCenter: () => mockMap,
                setZoom: () => mockMap,
                addControl: () => mockMap,
                removeControl: () => mockMap,
                addLayer: () => mockMap,
                removeLayer: () => mockMap,
                addSource: () => mockMap,
                removeSource: () => mockMap,
                getLayer: () => null,
                getSource: () => null,
                flyTo: () => mockMap,
                jumpTo: () => mockMap,
                easeTo: () => mockMap,
                setStyle: () => mockMap,
                getStyle: () => ({}),
                isStyleLoaded: () => true,
                loaded: () => true,
                fire: () => mockMap,
                getCanvas: () => document.createElement('canvas'),
                getCanvasContainer: () => document.createElement('div')
            };
            return mockMap;
        }

        // Container exists, create map normally
        return new OriginalMap(options);
    };

    // Copy static methods
    Object.setPrototypeOf(window.mapboxgl.Map, OriginalMap);
    Object.keys(OriginalMap).forEach(key => {
        window.mapboxgl.Map[key] = OriginalMap[key];
    });
}

/* wwFront:start */
wwLib.getFrontWindow().addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    wwLib.installPwaPrompt = e;
});
/* wwFront:end */

export default app;

