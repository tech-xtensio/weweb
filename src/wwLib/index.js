import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_29809245_a5ea_4687_af79_952998abab22 from '@/components/plugins/plugin-29809245-a5ea-4687-af79-952998abab22/src/wwPlugin.js';
import plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/src/wwPlugin.js';
import plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7 from '@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/src/wwPlugin.js';
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
import plugin_f5856798_485d_47be_b433_d43d771c64e1 from '@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-29809245-a5ea-4687-af79-952998abab22', plugin_29809245_a5ea_4687_af79_952998abab22);
wwLib.wwPluginHelper.registerPlugin('plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811', plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811);
wwLib.wwPluginHelper.registerPlugin('plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7', plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7);
wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
wwLib.wwPluginHelper.registerPlugin('plugin-f5856798-485d-47be-b433-d43d771c64e1', plugin_f5856798_485d_47be_b433_d43d771c64e1);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"b367991c-e687-4858-a20b-091d0c270091":"#F8F8F8","65ffcd27-ddc2-41f8-9ed5-efda74eb7bc3":"#6A7282","c5f4fa25-fdfa-4f4c-bf4f-c0de2b4404d4":"#094A3D","e3403f23-55c4-4473-a8f6-edc7c3a626c6":"#1DAE86","2dd92f86-fef2-45bb-89d9-38315d7620c2":"#0F8D6D","95b1e5b7-8d41-42b4-be24-6474bd4a9402":"#0B715A","2bebae03-758e-40ed-8c99-ac67d1003ab8":"#4DCDA5","d3bfb37e-df99-43ea-9ce9-9b5aca52920f":"#76DEBB","38226f13-1970-4ff1-b142-39feee1b0a1f":"#0D5948","b968b12b-5ba3-4ca4-9277-f4d1383f6b91":"#ACEED4","d39ca723-9656-49a8-b32b-df261723e719":"#EDFCF6","647b2861-26b1-4d80-890b-ce33e36ff0a0":"#052923","f3cfa2ed-81de-4c67-84fd-be55580770c4":"#525252","5b0a1b5c-66be-4b25-9ad4-18288a1e81cd":"#09090B","75550db6-f4b6-47e8-ab48-73708679219e":"#27272A","5e1e49a0-8932-4a90-be1f-8809a23da761":"#A1A1AA","1ef1dff8-6bbc-42c0-844a-4294eca713d5":"#09090B","d5d557fa-f54f-46b4-b295-1620ea2c5526":"#FAFAFA","7643d5a2-e221-4cda-9dc2-b75abcfc4891":"#09090B","6170a477-ebf9-4fbc-91e4-5c88a8dc9832":"#FAFAFA","98e2e14c-fb9f-40cd-bd7e-c6f7a1120d8d":"#27272A","10649cc6-1d38-490a-9c32-88d42b04a707":"#27272A","74e6b135-e90a-4ec5-8e89-63613a610189":"#FAFAFA","8f2a6c87-357b-4e3b-941f-30716fe225a9":"#0D5948","ff13160f-8f8d-4519-820f-847f959ce53b":"#18181B","18d39b60-741a-4264-81e7-d205283e8bd1":"#27272A","a38d478f-eaed-410f-9dcd-bc2c18a15ba4":"#FAFAFA","afc6bfd6-55f5-4d83-a136-be7d100c6c98":"#811D1D","0ca00001-caa0-4db0-bedd-a8ed3abf1267":"#FAFAFA","8166f363-9baf-4d8e-bb0e-4b54915c6548":"#D4D4D8","87e06e4f-e31c-4067-855a-d6723e70e500":"#FAFAFA","bcf33cfb-1512-43da-933a-743cb794eef4":"#27272A","2a9ae6c5-df21-4348-bbed-1b25f847258c":"#FFFFFF","8aa75c20-95e7-40a7-9624-7b3e0c949774":"#000000","d6f83ff5-f3d8-4d7d-9c1a-564a5797971d":"#52C41A","ab627c37-ad19-4e03-b628-a4b3e3a8d315":"#1B9D57","b08f614e-eaf6-4f41-b637-e2682d29bd86":"#DA5D5D","946a4412-3373-4c09-8430-d66842783c20":"#4367CB","78f768f9-2eae-4fa8-b982-37f2c8fe19ab":"#E1DFDF","1cf1ade0-8f2c-4638-9b7e-00b9530c4ef9":"#8C8787","94b844be-ba11-4811-a82f-7eb3c1c98e36":"#DCDCDC","3e982f67-31fe-4f8a-8bda-702b367a55fd":"#D1D5DC","649ade27-8d46-4cb7-9229-75ad4ac6ef6e":"#666666","69c2a3ab-3d1a-4620-8baf-36e5f3181299":"#F6F5F6","109702b2-909d-4bf8-b646-3214b760225f":"#D4F7E7","6e22a1f5-ea7c-4611-90b3-731c8a61ecf9":"#A1A1A1"} : {"b367991c-e687-4858-a20b-091d0c270091":"#F8F8F8","65ffcd27-ddc2-41f8-9ed5-efda74eb7bc3":"#6A7282","c5f4fa25-fdfa-4f4c-bf4f-c0de2b4404d4":"#094A3D","e3403f23-55c4-4473-a8f6-edc7c3a626c6":"#1DAE86","2dd92f86-fef2-45bb-89d9-38315d7620c2":"#0F8D6D","95b1e5b7-8d41-42b4-be24-6474bd4a9402":"#0B715A","2bebae03-758e-40ed-8c99-ac67d1003ab8":"#4DCDA5","d3bfb37e-df99-43ea-9ce9-9b5aca52920f":"#76DEBB","38226f13-1970-4ff1-b142-39feee1b0a1f":"#0D5948","b968b12b-5ba3-4ca4-9277-f4d1383f6b91":"#ACEED4","d39ca723-9656-49a8-b32b-df261723e719":"#EDFCF6","647b2861-26b1-4d80-890b-ce33e36ff0a0":"#052923","f3cfa2ed-81de-4c67-84fd-be55580770c4":"#525252","5b0a1b5c-66be-4b25-9ad4-18288a1e81cd":"#ffffff","75550db6-f4b6-47e8-ab48-73708679219e":"#f4f4f5","5e1e49a0-8932-4a90-be1f-8809a23da761":"#71717a","1ef1dff8-6bbc-42c0-844a-4294eca713d5":"#ffffff","d5d557fa-f54f-46b4-b295-1620ea2c5526":"#08080a","7643d5a2-e221-4cda-9dc2-b75abcfc4891":"#ffffff","6170a477-ebf9-4fbc-91e4-5c88a8dc9832":"#08080a","98e2e14c-fb9f-40cd-bd7e-c6f7a1120d8d":"#e3e3e7","10649cc6-1d38-490a-9c32-88d42b04a707":"#f4f4f5","74e6b135-e90a-4ec5-8e89-63613a610189":"#17171b","8f2a6c87-357b-4e3b-941f-30716fe225a9":"#0D5948","ff13160f-8f8d-4519-820f-847f959ce53b":"#FAFAFA","18d39b60-741a-4264-81e7-d205283e8bd1":"#f4f4f5","a38d478f-eaed-410f-9dcd-bc2c18a15ba4":"#17171b","afc6bfd6-55f5-4d83-a136-be7d100c6c98":"#ee4444","0ca00001-caa0-4db0-bedd-a8ed3abf1267":"#f9f9f9","8166f363-9baf-4d8e-bb0e-4b54915c6548":"#08080a","87e06e4f-e31c-4067-855a-d6723e70e500":"#18181A","bcf33cfb-1512-43da-933a-743cb794eef4":"#e3e3e7","2a9ae6c5-df21-4348-bbed-1b25f847258c":"#FFFFFF","8aa75c20-95e7-40a7-9624-7b3e0c949774":"#000000","d6f83ff5-f3d8-4d7d-9c1a-564a5797971d":"#52C41A","ab627c37-ad19-4e03-b628-a4b3e3a8d315":"#1B9D57","b08f614e-eaf6-4f41-b637-e2682d29bd86":"#DA5D5D","946a4412-3373-4c09-8430-d66842783c20":"#4367CB","78f768f9-2eae-4fa8-b982-37f2c8fe19ab":"#E1DFDF","1cf1ade0-8f2c-4638-9b7e-00b9530c4ef9":"#8C8787","94b844be-ba11-4811-a82f-7eb3c1c98e36":"#DCDCDC","3e982f67-31fe-4f8a-8bda-702b367a55fd":"#D1D5DC","649ade27-8d46-4cb7-9229-75ad4ac6ef6e":"#666666","69c2a3ab-3d1a-4620-8baf-36e5f3181299":"#F6F5F6","109702b2-909d-4bf8-b646-3214b760225f":"#D4F7E7","6e22a1f5-ea7c-4611-90b3-731c8a61ecf9":"#A1A1A1"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"cf13f591-8085-469d-9898-4e530f2d2411":"999px","352cb7c6-9033-4ee6-ae99-529eebcdad9f":"8px","b830228b-b58f-4731-b8ca-cbc81fb872d4":"12px","2d895af4-a3b2-4726-ba10-f61867078b00":"14px"},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"461b97af-af48-48fb-b5f6-4d4c2d9b682c":"400 16px/normal 'Instrument Sans', sans-serif","8dcc18d1-6302-4e4c-8e4b-12c2e790ff1e":"400 14px/normal 'Instrument Sans', sans-serif","cc12c4d2-a0dc-4274-b342-fe7ffc653ea2":"400 12px/normal 'Instrument Sans', sans-serif","ea3a6f26-836f-4a93-a230-aaf671170b7a":"600 10px/normal 'Instrument Sans', sans-serif","fb657eb4-c027-4273-8006-d01fef6f8f14":"500 16px/normal var(--ww-default-font-family, sans-serif)","a9f924ab-609a-48e0-a4f2-b22b14026b45":"500 18px/normal 'Instrument Sans', sans-serif","7636648f-40e5-4c0b-b9ec-4ad7d9ff0564":"800 48px/normal var(--ww-default-font-family, sans-serif)","b7d8dae6-13c5-4f3a-9eaa-6db536a8abaf":"600 30px/36px var(--ww-default-font-family, sans-serif)","2396207c-9ad0-4121-8c74-6286cfd9742e":"600 24px/32px var(--ww-default-font-family, sans-serif)","a5075fd4-05fc-4fd5-b545-60237d29c7d2":"600 20px/28px var(--ww-default-font-family, sans-serif)","ebc61a94-ac2b-4278-b580-bfa666871977":"500 16px/normal var(--ww-default-font-family, sans-serif)","431a50a6-8364-4a1c-bf5c-fcb47382f242":"400 10px/normal var(--ww-default-font-family, sans-serif)","88a03f9f-d774-47ae-8c73-9c5aa72e6aa2":"400 12px/normal 'Instrument Sans', sans-serif","90624035-fc03-468b-ae31-c4a13e2199b3":"500 14px/normal var(--ww-default-font-family, sans-serif)","dc2fbc78-9059-4e83-8766-05d711ff0d97":"500 12px/normal var(--ww-default-font-family, sans-serif)","f3edba10-a401-41b7-987d-1782a3af7ed0":"500 10px/normal var(--ww-default-font-family, sans-serif)","e601b940-b5d8-4481-9d3e-c3ef5da5f713":"400 18px/normal var(--ww-default-font-family, sans-serif)","6108b1cd-c424-4cc9-9f2a-b01341027787":"500 18px/normal var(--ww-default-font-family, sans-serif)","79c15343-9dd7-4787-aa8a-8b6bf7230080":"500 16px/normal var(--ww-default-font-family, sans-serif)","d1c0c711-a24f-47f4-8c60-16401e663d6d":"700 14px/14px var(--ww-default-font-family, sans-serif)"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  // TODO: add staging2 ?
                  '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
