import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"c3cba612-1031-4cce-960a-78d54826c711","homePageId":"54c8452f-dc3a-4beb-a8b9-cb297aa4a177","authPluginId":"f5856798-485d-47be-b433-d43d771c64e1","baseTag":{},"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"fr","default":true}],"background":{"backgroundColor":"var(--5b0a1b5c-66be-4b25-9ad4-18288a1e81cd,#ffffff)","backgroundOrder":"col,grad,img"},"workflows":[{"id":"72649b3b-3605-4aca-bbd3-ba21af5385fb","name":"charge script","actions":{"0c225c42-8697-42db-83c2-25b1a9c5d927":{"id":"0c225c42-8697-42db-83c2-25b1a9c5d927","code":"window.$crisp = [];\nwindow.CRISP_TOKEN_ID = \"0c1f7a1a-90e6-4376-9bd2-3f0d17d3c4b2\";\nwindow.CRISP_WEBSITE_ID = \"f904a00b-29cb-4d8f-a5a1-88158766cf04\";\n\n(function() {\n  const d = document;\n  const s = d.createElement(\"script\");\n  s.src = \"https://client.crisp.chat/l.js\";\n  s.async = true;\n  d.getElementsByTagName(\"head\")[0].appendChild(s);\n})();\n","name":"Load Crisp chat","type":"custom-js","disabled":true}},"trigger":"onload-app","firstAction":"0c225c42-8697-42db-83c2-25b1a9c5d927"}],"pages":[{"id":"6c064260-c6be-49d5-b0a8-9570ddb0d2bc","linkId":"6c064260-c6be-49d5-b0a8-9570ddb0d2bc","name":"reset password","folder":"Authent/","paths":{"fr":"reset-password","default":"reset-password"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"d7018e86-e56d-4c00-9d20-3376d8af4754","sectionTitle":"Sign up","linkId":"a4cbddcb-7a65-4372-9145-32a5ea54342f"},{"uid":"90cdccb7-c12d-4851-92a9-2af4802242e6","sectionTitle":"Toast","linkId":"019f2c9f-ed6c-4489-a945-89dd006d1fd0"},{"uid":"72c32854-9e70-4556-976e-2f3baf5adca2","sectionTitle":"Toast V2","linkId":"c58883eb-3ad8-49ef-adfe-dc1eae585d20"},{"uid":"860e1571-1cf2-4f9f-9c33-57be44ccb5ed","sectionTitle":"Loader Page","linkId":"5169d35c-f13f-4360-86ab-e85f24215155"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"58d10c8a-b8a9-4b5b-ad4e-93631602c2f7","linkId":"58d10c8a-b8a9-4b5b-ad4e-93631602c2f7","name":"change password","folder":"Authent/","paths":{"fr":"change-password","default":"change-password"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"80fbca4e-b3be-4719-a74a-bf248150acc9","sectionTitle":"Sign up","linkId":"1ec2905a-01fa-469f-9d42-76729efd7051"},{"uid":"90cdccb7-c12d-4851-92a9-2af4802242e6","sectionTitle":"Toast","linkId":"019f2c9f-ed6c-4489-a945-89dd006d1fd0"},{"uid":"72c32854-9e70-4556-976e-2f3baf5adca2","sectionTitle":"Toast V2","linkId":"c58883eb-3ad8-49ef-adfe-dc1eae585d20"},{"uid":"860e1571-1cf2-4f9f-9c33-57be44ccb5ed","sectionTitle":"Loader Page","linkId":"5169d35c-f13f-4360-86ab-e85f24215155"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c8b28865-aaab-4024-bb50-6cd51bff578f","linkId":"c8b28865-aaab-4024-bb50-6cd51bff578f","name":"testt","folder":"Examples/","paths":{"fr":"testt","default":"testt"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"051bb0da-1be3-4717-a38c-677b45b2f1bc","sectionTitle":"Section","linkId":"18210689-58c8-4d65-b0b5-b8371668d758"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d2fc81e8-bdcf-487e-a571-5044776aaf99","linkId":"d2fc81e8-bdcf-487e-a571-5044776aaf99","name":"composants page starter","folder":"Examples/","paths":{"fr":"composants-page-starter","default":"composants-page-starter"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"8280a160-202d-4012-a2f0-c8ad9c23872c","sectionTitle":"Sidebar","linkId":"9f55428b-aed1-41ca-ae3e-f8b99904f61d"},{"uid":"7fd60fff-582f-4703-8752-12700a8ff89b","sectionTitle":"Signup and login","linkId":"d6c67537-792b-4654-9f90-616476399a44"},{"uid":"5cf35058-646a-414c-9434-5562060e4d84","sectionTitle":"Password reset","linkId":"47277f7f-2a42-4f9c-a523-c77b6c052084"},{"uid":"671045fc-fefd-4c69-b944-f312e772cc77","sectionTitle":"Password forgotten","linkId":"a66a1e41-d8f5-49e0-b1d5-c03cbb536f00"},{"uid":"227cb5f1-c9cb-47db-a48b-4c52d58ebdaa","sectionTitle":"Password code validation","linkId":"52dc0cb9-70fc-48f0-a585-b0b88c00197f"},{"uid":"a2d60fee-c7b3-4120-9d4c-78026d6f70d9","sectionTitle":"Mail verification","linkId":"c8eb806a-b16f-4385-9bb8-6feb26cdb7af"},{"uid":"76a2dc0b-63cf-4e12-92f3-051fc5390e71","sectionTitle":"Sidebar","linkId":"d2b05eb1-cc98-4797-9cca-b4d0fd2dce4e"},{"uid":"c40659e4-9a0d-4c3b-8a2c-0eb04172fa1c","sectionTitle":"Profile","linkId":"c169d74e-7715-4a1f-9310-ba01ca707948"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"54c8452f-dc3a-4beb-a8b9-cb297aa4a177","linkId":"54c8452f-dc3a-4beb-a8b9-cb297aa4a177","name":"login","folder":"Authent/","paths":{"fr":"login","default":"login"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"0bfee6f5-6968-4af3-956a-84b63ba30287","sectionTitle":"Sign up","linkId":"87b901d7-e066-469b-94be-80cf5d3adcd7"},{"uid":"72c32854-9e70-4556-976e-2f3baf5adca2","sectionTitle":"Toast V2","linkId":"c58883eb-3ad8-49ef-adfe-dc1eae585d20"}],"pageUserGroups":[],"title":{"fr":"Xtensio - Login"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/Webclip.png?_wwcv=108"},{"id":"40548dbc-68b5-4eb3-9a19-728ad2255301","linkId":"40548dbc-68b5-4eb3-9a19-728ad2255301","name":"Simulation","folder":"App/","paths":{"fr":"simulation-single","default":"simulation-single"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"8280a160-202d-4012-a2f0-c8ad9c23872c","sectionTitle":"Sidebar","linkId":"9f55428b-aed1-41ca-ae3e-f8b99904f61d"},{"uid":"94c02962-bd5a-4127-8be3-9c0e87908c58","sectionTitle":"Modal - Confirmation","linkId":"80cc87fd-c13e-41ce-8a04-8877ef77062c"},{"uid":"0d55f744-5486-4e23-94ad-862241d3b525","sectionTitle":"Body","linkId":"4764f5e5-de99-4022-9fad-ebf93be3beda"},{"uid":"90cdccb7-c12d-4851-92a9-2af4802242e6","sectionTitle":"Toast","linkId":"019f2c9f-ed6c-4489-a945-89dd006d1fd0"},{"uid":"72c32854-9e70-4556-976e-2f3baf5adca2","sectionTitle":"Toast V2","linkId":"c58883eb-3ad8-49ef-adfe-dc1eae585d20"},{"uid":"860e1571-1cf2-4f9f-9c33-57be44ccb5ed","sectionTitle":"Loader Page","linkId":"5169d35c-f13f-4360-86ab-e85f24215155"}],"pageUserGroups":[{}],"title":{"fr":"Xtensio - Simulation"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/Webclip.png?_wwcv=108"},{"id":"5b902218-8695-4c7a-91a1-ad4f834edf02","linkId":"5b902218-8695-4c7a-91a1-ad4f834edf02","name":"Simulations","folder":"App/","paths":{"fr":"simulations","default":"simulations"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"8280a160-202d-4012-a2f0-c8ad9c23872c","sectionTitle":"Sidebar","linkId":"9f55428b-aed1-41ca-ae3e-f8b99904f61d"},{"uid":"0d52f356-da67-4eed-9b48-97ad1292158d","sectionTitle":"Modal - Confirmation","linkId":"b226c7e7-1493-49a2-9e82-99acbf3c2ee0"},{"uid":"09726840-86f8-4845-90fd-58b80656a163","sectionTitle":"Body","linkId":"fb976b4a-656c-4604-b36e-cb31817335a5"},{"uid":"90cdccb7-c12d-4851-92a9-2af4802242e6","sectionTitle":"Toast","linkId":"019f2c9f-ed6c-4489-a945-89dd006d1fd0"},{"uid":"72c32854-9e70-4556-976e-2f3baf5adca2","sectionTitle":"Toast V2","linkId":"c58883eb-3ad8-49ef-adfe-dc1eae585d20"},{"uid":"860e1571-1cf2-4f9f-9c33-57be44ccb5ed","sectionTitle":"Loader Page","linkId":"5169d35c-f13f-4360-86ab-e85f24215155"}],"pageUserGroups":[{}],"title":{"fr":"Xtensio - Mes Simulations"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/Webclip.png?_wwcv=108"},{"id":"5da9d338-7509-4500-8bd5-87dcb1074990","linkId":"5da9d338-7509-4500-8bd5-87dcb1074990","name":"test authent","folder":"Examples/","paths":{"fr":"test-authent","default":"test-authent"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"031d4221-8db5-451f-856c-d36f86604d75","sectionTitle":"Section","linkId":"3f32df93-974e-430e-baa9-a735e84a80ec"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3bb9864d-1844-4867-bf3d-a5cc5ad0f657","linkId":"3bb9864d-1844-4867-bf3d-a5cc5ad0f657","name":"post-login","folder":"Authent/","paths":{"fr":"post-login","default":"post-login"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"bcfc5508-348b-4132-9bc6-2e39977949f4","sectionTitle":"Section","linkId":"c9a558db-7e75-4a65-af34-64eaa48faeda"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/Webclip.png?_wwcv=108"},{"id":"0bd006fc-4135-4ea2-a3e2-64a7fbb881ef","linkId":"0bd006fc-4135-4ea2-a3e2-64a7fbb881ef","name":"Subscriptions","folder":"App/","paths":{"fr":"subscriptions","default":"subscriptions"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"8280a160-202d-4012-a2f0-c8ad9c23872c","sectionTitle":"Sidebar","linkId":"9f55428b-aed1-41ca-ae3e-f8b99904f61d"},{"uid":"c85f1888-b90d-4040-b068-05124502d8c4","sectionTitle":"Modal - Confirmation","linkId":"fd8fb168-c156-487d-bb99-f51876846625"},{"uid":"9eecabd8-73ad-4987-b2a7-b717fe1fac8f","sectionTitle":"Body","linkId":"b6370e43-1208-458a-98bc-2e4ec3f38b8f"},{"uid":"90cdccb7-c12d-4851-92a9-2af4802242e6","sectionTitle":"Toast","linkId":"019f2c9f-ed6c-4489-a945-89dd006d1fd0"},{"uid":"72c32854-9e70-4556-976e-2f3baf5adca2","sectionTitle":"Toast V2","linkId":"c58883eb-3ad8-49ef-adfe-dc1eae585d20"},{"uid":"860e1571-1cf2-4f9f-9c33-57be44ccb5ed","sectionTitle":"Loader Page","linkId":"5169d35c-f13f-4360-86ab-e85f24215155"}],"pageUserGroups":[{}],"title":{"fr":"Xtensio - Abonnements"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/Webclip.png?_wwcv=108"},{"id":"7687e834-5dbc-4d0d-834e-3842c66cc8ec","linkId":"7687e834-5dbc-4d0d-834e-3842c66cc8ec","name":"✅ Style Guide ","folder":"Examples/","paths":{"fr":"style-guide","default":"style-guide"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"4395a685-cd52-44e8-bf9b-acea24a728bb","sectionTitle":"↗ Navbar","linkId":"f4405b7d-14a4-4038-962c-fa8592f510be"},{"uid":"8280a160-202d-4012-a2f0-c8ad9c23872c","sectionTitle":"Sidebar","linkId":"9f55428b-aed1-41ca-ae3e-f8b99904f61d"},{"uid":"3006e38a-58d8-4519-9221-9d327d560c6d","sectionTitle":"Style guide","linkId":"5f4db015-c3b0-47c9-a369-785e5fc4b0f4"},{"uid":"a28034ec-407b-47ef-bd20-0ca3200a6b37","sectionTitle":"Composants","linkId":"99b9cf44-5cd1-48f3-a39c-fb577a729bc7"},{"uid":"f083cc25-c734-4bdf-afc7-31f45244619d","sectionTitle":"Accordeon","linkId":"37bca8b4-699e-4103-a7c3-784c3f9a88e9"},{"uid":"83e8cb19-aa13-466c-ba05-c1559f13d6f6","sectionTitle":"Avatar","linkId":"b91ac1ac-17e5-400f-b756-be8ca64a23b9"},{"uid":"e55fc705-f108-4d6c-a693-1ba6ca92bd2d","sectionTitle":"Badge","linkId":"09db5d6e-d7cd-4d85-9188-c88dcd37252f"},{"uid":"ece4c8c8-18bf-4d0c-94bd-09024d261bab","sectionTitle":"Breadcrumbs","linkId":"51ec3567-4ab3-4145-ae5f-9ac20f87e4c6"},{"uid":"8a178b1e-a4f1-43c3-ba59-a3ca8f2ecda4","sectionTitle":"Button","linkId":"0f39a1ad-465c-4201-8c0f-9ba743ba00fb"},{"uid":"9df976b9-533f-49d8-9c9f-b90acdcfd31d","sectionTitle":"▶️ Inputs","linkId":"96a47c06-e389-42ca-a45c-77538e16582a"},{"uid":"87b34226-772d-4282-a6bb-909201965b4e","sectionTitle":"▶️ Inputs - Checkboxes","linkId":"e70e95f4-59e2-459e-b906-e8bb925fdadd"},{"uid":"87a5fa0c-a486-4a6d-8936-bed00e991e35","sectionTitle":"▶️ Inputs - Checkboxe True/False","linkId":"92e99095-6cb6-4473-bfcd-a7a54c8d4bde"},{"uid":"88fdc669-c1c5-4e62-ba47-19a51d86bb4d","sectionTitle":"▶️ Input - File","linkId":"66fd285c-18c6-4718-b9fe-5f9bc69122c5"},{"uid":"23684727-6f18-4a35-abd3-5f96c1b10045","sectionTitle":"▶️ Input - Phone","linkId":"80faa256-ff37-4585-be99-315f21cc1577"},{"uid":"5d5bfab8-373b-41b6-a7b9-5f61a6853214","sectionTitle":"▶️ Input - Radio button","linkId":"b5f134f1-5c70-40cc-acd5-9f9c97a6b3e0"},{"uid":"f00a0cc3-086f-45df-b965-55af577deecb","sectionTitle":"▶️ Input - Select","linkId":"3eaf6360-0b01-447d-8ad7-a172e5c6d386"},{"uid":"a1b46cc1-a6d1-4ae0-a5fa-b1e3189cca8a","sectionTitle":"▶️ Input - Search cities / postcodes","linkId":"3767ca52-22c9-46db-b241-4fd1b3c94521"},{"uid":"ac68c650-c888-480a-9878-75b2ddea2ec8","sectionTitle":"Macaron","linkId":"9f963d74-d9f1-40ab-bb58-0015a3e84813"},{"uid":"81f2bbcb-59bc-4e9e-9413-ed53a5c2d6ae","sectionTitle":"Stepper","linkId":"bd770b3a-f0cc-411b-9b65-f1853be41e27"},{"uid":"84760796-299f-4428-af10-16fb6458a78c","sectionTitle":"Skeleton","linkId":"496ff776-3d61-44cb-afd9-cc5a56df6a3c"},{"uid":"0e4adace-40ce-4819-98c5-2828cad69ee8","sectionTitle":"Tabs","linkId":"7dd34430-4878-41f1-a539-4a51cee56577"},{"uid":"671466d5-b9df-4a94-8594-71e61ec7e108","sectionTitle":"Toast","linkId":"c8b87d55-84f4-419f-a06b-380e3bdbcfdb"},{"uid":"25599142-2508-44e6-a844-a2d4fdb8a760","sectionTitle":"Skeleton","linkId":"6b520893-bddf-4cdd-a826-5eaab850a025"},{"uid":"ab928ccb-75b1-4680-b87f-aa360cbb01a4","sectionTitle":"Documentation","linkId":"248b6216-eccc-4df7-9bdc-5c5feb0d7e84"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b4e604ab-fb86-4e37-874b-35d13d9c1295","linkId":"b4e604ab-fb86-4e37-874b-35d13d9c1295","name":"Exemple avec sections","folder":"Examples/","paths":{"fr":"playbis","default":"playbis"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"4395a685-cd52-44e8-bf9b-acea24a728bb","sectionTitle":"↗ Navbar","linkId":"f4405b7d-14a4-4038-962c-fa8592f510be"},{"uid":"8280a160-202d-4012-a2f0-c8ad9c23872c","sectionTitle":"Sidebar","linkId":"9f55428b-aed1-41ca-ae3e-f8b99904f61d"},{"uid":"d7e6c773-85dd-426e-aef9-392e7698c686","sectionTitle":"Modal - Confirmation","linkId":"bcf51e5c-372a-42d2-972e-077dd673499c"},{"uid":"36b53fca-a592-4d5d-bfd8-8c6bbef8d8c8","sectionTitle":"Body","linkId":"75b54bf3-1ee8-45ee-b8d5-f20dcc0b1822"},{"uid":"90cdccb7-c12d-4851-92a9-2af4802242e6","sectionTitle":"Toast","linkId":"019f2c9f-ed6c-4489-a945-89dd006d1fd0"},{"uid":"72c32854-9e70-4556-976e-2f3baf5adca2","sectionTitle":"Toast V2","linkId":"c58883eb-3ad8-49ef-adfe-dc1eae585d20"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fc5b002f-82ed-4611-bfe7-76e10ee4fc85","linkId":"fc5b002f-82ed-4611-bfe7-76e10ee4fc85","name":"Exemple avec formulaire","folder":"Examples/","paths":{"fr":"test","default":"test"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"90cdccb7-c12d-4851-92a9-2af4802242e6","sectionTitle":"Toast","linkId":"019f2c9f-ed6c-4489-a945-89dd006d1fd0"},{"uid":"68012a41-c3fe-458e-8c6d-6be1b65a5d4f","sectionTitle":"Form","linkId":"890ff185-373c-4524-8247-ff59e552fedc"},{"uid":"72c32854-9e70-4556-976e-2f3baf5adca2","sectionTitle":"Toast V2","linkId":"c58883eb-3ad8-49ef-adfe-dc1eae585d20"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"dd9da643-0454-4905-99f6-99f1974ad7e1","linkId":"dd9da643-0454-4905-99f6-99f1974ad7e1","name":"🖼️ Cover","folder":"Examples/","paths":{"en":"home","default":"home"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"2a83b572-926c-4bb1-952e-4a0d8a9f80cc","sectionTitle":"Body","linkId":"13aed0ac-783d-48db-9244-75abb16d9f8f"}],"pageUserGroups":[],"title":{"en":"","fr":"Xtensio - Simulation"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"077adc6a-90da-45db-8460-f68bd611952c","linkId":"077adc6a-90da-45db-8460-f68bd611952c","name":"Profil","folder":"App/","paths":{"fr":"profil","default":"profil"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"8280a160-202d-4012-a2f0-c8ad9c23872c","sectionTitle":"Sidebar","linkId":"9f55428b-aed1-41ca-ae3e-f8b99904f61d"},{"uid":"48078dbc-553b-4dc1-a475-458eddb9c660","sectionTitle":"Modal - Confirmation","linkId":"359441de-6989-4bbd-8933-e3f81fc7082b"},{"uid":"c8689281-98fb-4071-94d6-4c40c30cc66d","sectionTitle":"Body","linkId":"5ad5416e-c0bc-4419-8dcc-db8d6765f6f1"},{"uid":"90cdccb7-c12d-4851-92a9-2af4802242e6","sectionTitle":"Toast","linkId":"019f2c9f-ed6c-4489-a945-89dd006d1fd0"},{"uid":"72c32854-9e70-4556-976e-2f3baf5adca2","sectionTitle":"Toast V2","linkId":"c58883eb-3ad8-49ef-adfe-dc1eae585d20"},{"uid":"860e1571-1cf2-4f9f-9c33-57be44ccb5ed","sectionTitle":"Loader Page","linkId":"5169d35c-f13f-4360-86ab-e85f24215155"}],"pageUserGroups":[{}],"title":{"fr":"Xtensio - Mon Profil"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/Webclip.png?_wwcv=108"},{"id":"dd6ede66-ffdb-4573-8729-0065e9b427a9","linkId":"dd6ede66-ffdb-4573-8729-0065e9b427a9","name":"simulation-test","folder":"Examples/","paths":{"fr":"simulation","default":"simulation"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"8280a160-202d-4012-a2f0-c8ad9c23872c","sectionTitle":"Sidebar","linkId":"9f55428b-aed1-41ca-ae3e-f8b99904f61d"},{"uid":"62e851bf-ec3b-4080-ade7-a8ce321e5777","sectionTitle":"Section","linkId":"8a1dc587-4956-4888-a63f-4796de1076a0"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"04a294e1-0774-4d89-97d6-8be0f1b592f1","linkId":"04a294e1-0774-4d89-97d6-8be0f1b592f1","name":"signup","folder":"Authent/","paths":{"fr":"signup","default":"signup"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"27812e47-2a28-401b-96bc-b864df35c97d","sectionTitle":"Sign up","linkId":"3448039d-476a-4b9b-9479-06fadb3d97d1"},{"uid":"90cdccb7-c12d-4851-92a9-2af4802242e6","sectionTitle":"Toast","linkId":"019f2c9f-ed6c-4489-a945-89dd006d1fd0"},{"uid":"72c32854-9e70-4556-976e-2f3baf5adca2","sectionTitle":"Toast V2","linkId":"c58883eb-3ad8-49ef-adfe-dc1eae585d20"},{"uid":"860e1571-1cf2-4f9f-9c33-57be44ccb5ed","sectionTitle":"Loader Page","linkId":"5169d35c-f13f-4360-86ab-e85f24215155"}],"pageUserGroups":[],"title":{"fr":"Xtensio - Sign up"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/Webclip.png?_wwcv=108"}],"plugins":[{"id":"29809245-a5ea-4687-af79-952998abab22","name":"Airtable","namespace":"airtable"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"f5856798-485d-47be-b433-d43d771c64e1","name":"Xano Auth","namespace":"xanoAuth"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"cd33cf33-e29f-4e8c-ac26-b997fe507ce7","name":"Xano","namespace":"xano"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 108;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
