(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(7),i=n.n(a),c=(n(14),n(15),n(3)),u=n(5),d=n(4),s=n(2),f=Object(r.createContext)();function l(e){var t=e.children,n=Object(r.useState)(null),o=Object(c.a)(n,2),a=o[0],i=o[1],l=Object(r.useState)(null),E=Object(c.a)(l,2),g=E[0],p=E[1],y=Object(r.useState)({}),I=Object(c.a)(y,2),R=I[0],D=I[1],O=Object(r.useState)(null),A=Object(c.a)(O,2),T=A[0],v=A[1];return Object(r.useEffect)((function(){setTimeout((function(){u.a.embeddedApp.on("PageLoad",(function(e){console.log(e),i(e.Entity),p(e.EntityId),u.a.CRM.API.getRecord({Entity:e.Entity,RecordID:e.EntityId}).then((function(e){D(e.data[0]),console.log("geocode"),Object(d.geocodeByAddress)(e.data[0].Direccion).then((function(e){return Object(d.getLatLng)(e[0]).then((function(e){var t=e.lat,n=e.lng;return v({lat:t,lng:n})}),console.log(e))})).catch((function(e){return console.error(e)}))}))})),u.a.embeddedApp.init()}),1e3)}),[]),Object(s.jsx)(f.Provider,{value:{module:a,entity:g,record:R,latylng:T},children:t})}var E=function(){var e=Object(r.useContext)(f);if(!e)throw new Error("UseWidget inside ZohoContext");return{entity:e.entity,module:e.module,record:e.record,latylng:e.latylng}},g=n(8),p=n.n(g),y=function(e){E().record;return console.log(e.latylng),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(p.a,{apiKey:"AIzaSyBzAgDWW5PIbtBv1-Qlm-LXLoGLsiOb6s8",style:{height:"500px",width:"1100px"},zoom:21,center:{lat:Number(e.latylng.lat),lng:Number(e.latylng.lng)},markers:[{lat:Number(e.latylng.lat),lng:Number(e.latylng.lng)}]})})},I=n(28),R=(n(25),function(){var e=Object(r.useState)(),t=Object(c.a)(e,2),n=t[0],o=t[1],a=(E().record,E().latylng);return Object(r.useEffect)((function(){null!=a&&o(!0)}),[a]),n?Object(s.jsx)(y,{latylng:a}):Object(s.jsx)("div",{className:"text-center mt-5 ",children:Object(s.jsx)(I.a,{color:"primary"})})});var D=function(){return Object(s.jsx)(l,{children:Object(s.jsx)(R,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(D,{})}),document.getElementById("root")),O()},5:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ZOHO}));var ZOHO=function(){var e,t={},r=!1,o=void 0;return{embeddedApp:{on:function(n,r){t[n]=r,e&&"function"==typeof r&&e.getContext().Event.Listen(n,r)},init:function(){var n;if(!r)for(var a in r=!0,e=new ZSDK,o=new Promise((function(e,t){n=e})),e.OnLoad((function(){n()})),t)e.getContext().Event.Listen(a,t[a]);return o}},CRM:function(){function t(t){return t.sdkVersion="1",e.getContext().Event.Trigger("CRM_EVENT",t,!0)}function r(e){return new File([e],e.name,{type:e.type})}function o(e,n){var r={category:"ROLES"};return n&&(r.roleId=n),t(r)}function a(e,n,o,a){if(n.FileData){var i=r(n.FileData);n.FileData=i}return(e={category:"CREATE",Entity:e,RelatedID:o,APIData:n}).type=a||"RECORD",t(e)}function i(e){return e.category="BLUEPRINT",t(e)}function c(e){return e.category="APPROVALS",t(e)}function u(e,i,c){var d;if(i.FILE&&(d=r(i.FILE.file),i.FILE.file=d),d=void 0,c)d=i;else{if(d=i.url,o=i.params,u=i.headers,a=i.body,n=i.PARTS,x=i.PART_BOUNDARY,A=i.CONTENT_TYPE,D=i.RESPONSE_TYPE,i=i.FILE,!d)throw{Message:"Url missing"};if(o){var s,f=[];for(s in o)f.push(encodeURIComponent(s)+"="+encodeURIComponent(o[s]));s=f.join("&"),d+=(-1<d.indexOf("?")?"&":"?")+s}d={url:d,Header:u,Body:a,CONTENT_TYPE:A,RESPONSE_TYPE:D,PARTS:n,PARTS_BOUNDARY:x,FILE:i}}return t({category:"CONNECTOR",nameSpace:e,data:d,type:c})}function d(e){return $.extend(e,{category:"UI"}),t(e)}function s(e,n,r){return t({category:"CONFIG",type:e,nameSpace:n,APIData:r})}function f(e){var n={category:"USER"};return e.ID?n.ID=e.ID:e.Type&&(n.Type=e.Type,e.page&&(n.page=e.page),e.per_page&&(n.per_page=e.per_page)),t(n)}function l(e){return t({category:"META",type:e.type,subType:e.subType,Entity:e.Entity,Id:e.Id})}return{ACTION:{setConfig:function(e){return t({category:"ACTION",type:"CUSTOM_ACTION_SAVE_CONFIG",object:e})},enableAccountAccess:function(e){return t({category:"ACTION",type:"ENABLE_ACCOUNT_ACCESS",object:e})}},FUNCTIONS:{execute:function(e,n){var r={};return n.auth_type="oauth",r.data=n,t({category:"FUNCTIONS_EXECUTE",customFunctionName:e,data:r})}},CONFIG:{getOrgInfo:function(e){return s("ORG")},getCurrentUser:function(){return s("CURRENT_USER")},GetCurrentEnvironment:function(){return s("ORG_LEVEL_INFO")}},META:{getFields:function(e){return e.type="FIELD_LIST",l(e)},getModules:function(){return l({type:"MODULE_LIST"})},getAssignmentRules:function(e){return e.type="ASSIGNMENT_RULES",l(e)},getLayouts:function(e){return e.Id=e.Id?e.Id:e.LayoutId,e.type=e.Id?"LAYOUT":"LAYOUTS",l(e)},getRelatedList:function(e){return e.type="RELATED_LIST",l(e)},getCustomViews:function(e){return e.type=e.Id?"CUSTOM_VIEW":"CUSTOM_VIEWS",l(e)},EMAIL:{getAvailableFromAliases:function(){return l({type:"EMAIL",subType:"GET_ALIAS"})}}},API:{addNotes:function(e){return a(e.Entity,{data:[{Note_Title:e.Title,Note_Content:e.Content}]},e.RecordID,"NOTES")},addNotesAttachment:function(e){return t({category:"UPDATE",type:"NOTES",Entity:e.Entity,RecordID:e.RecordID,RelatedRecordID:e.RelatedRecordID,APIData:{Files:{FileName:File.Name,FileData:File.Content}}})},coql:function(e){return t({category:"QUERY",APIData:e})},getAllRoles:function(){return o("ROLES")},getRoleById:function(e){return o("ROLE",e.id)},insertRecord:function(e){var t=e.Entity,n=e.APIData;return n.trigger=e.Trigger,a(t,n)},upsertRecord:function(e){var t=e.Entity,n=e.APIData;return n.trigger=e.Trigger,n.action="UPSERT",e.duplicate_check_fields&&e.duplicate_check_fields instanceof Array&&(n.duplicate_check_fields=e.duplicate_check_fields.join(",")),a(t,n)},getRecord:function(e){return t({category:"READ",APIData:{Entity:e.Entity,RecordID:e.RecordID,RelatedList:void 0}})},getBluePrint:function(e){return i({Entity:e.Entity,RecordID:e.RecordID,action:"GET_BLUEPRINT_STATUS"})},updateBluePrint:function(e){return i({Entity:e.Entity,RecordID:e.RecordID,BlueprintData:e.BlueprintData,action:"UPDATE_BLUEPRINT_STATUS"})},uploadFile:function(e){return e instanceof File?e=t(e={FileData:r(e),category:"FILES",type:"UPLOAD_FILE"}):e=Promise.reject("Input is not of type File"),e},getFile:function(e){return e.category="FILES",e.type="DOWNLOAD_FILE",t(e)},getAllRecords:function(e){return t({category:"READ",APIData:e})},updateRecord:function(e){var n=e.Entity,r=e.APIData;return r.trigger=e.Trigger,t({category:"UPDATE",type:"RECORD",Entity:n,APIData:r})},updateVoiceURL:function(e){return t({category:"UPDATE",type:"VOICE_URL",APIData:e})},deleteRecord:function(e){return t({category:"DELETE",type:"RECORD",Entity:e.Entity,RecordID:e.RecordID})},searchRecord:function(e){return t(e={category:"SEARCH",APIData:e})},getAllActions:function(e){return e.action="GET_ALL_ACTIONS",c(e)},getApprovalRecords:function(e){var t={};return e?e.action="GET_APPROVAL_RECORDS":(t.action="GET_APPROVAL_RECORDS",e=t),c(e)},getApprovalById:function(e){return e.action="GET_APPROVALBYID",c(e)},getApprovalsHistory:function(){return c({action:"GET_APPROVALS_HISTORY"})},approveRecord:function(e){return e.action="UPDATE_APPROVAL",c(e)},getAllUsers:function(e){return f({Type:e.Type,page:e.page,per_page:e.per_page})},getUser:function(e){return f({ID:e.ID})},getRelatedRecords:function(e){return t({category:"READ",APIData:e})},updateRelatedRecords:function(e){var n=e.Entity,o=e.RecordID,a=e.RelatedList,i=e.RelatedRecordID;return(e=e.APIData)instanceof File&&(e=r(e)),t({category:"UPDATE",type:"RELATED_RECORD",Entity:n,RecordID:o,RelatedList:a,RelatedRecordID:i,APIData:e})},delinkRelatedRecord:function(e){return t({category:"DELETE",type:"RELATED_RECORD",Entity:e.Entity,RecordID:e.RecordID,RelatedList:e.RelatedList,RelatedRecordID:e.RelatedRecordID})},attachFile:function(e){var t=e.Entity,n=e.RecordID;return a(t,e={FileName:(e=e.File).Name,FileData:e.Content},n,"ATTACHMENT")},getAllProfiles:function(e){return t({category:"PROFILES",type:"GET_ALL_PROFILES"})},getProfile:function(e){return t({category:"PROFILES",type:"GET_PROFILE",ID:e.ID})},updateProfile:function(e){return t({category:"UPDATE",type:"PROFILE",ID:e.ID,APIData:e.APIData})},getOrgVariable:function(e){return s("VARIABLE",e)},sendMail:function(e){return t(e={category:"MAIL",APIData:e})}},UI:{Resize:function(e){return d(e={action:"RESIZE",data:{width:e.width,height:e.height}})},Setting:{open:function(e){return d(e={action:{setting:"OPEN"},data:e})}},Dialer:{maximize:function(){return d({action:{telephony:"MAXIMIZE"}})},minimize:function(){return d({action:{telephony:"MINIMIZE"}})},notify:function(){return d({action:{telephony:"NOTIFY"}})}},Record:{open:function(e){return d(e={action:{record:"OPEN"},data:{Entity:e.Entity,RecordID:e.RecordID,target:e.Target}})},edit:function(e){return d(e={action:{record:"EDIT"},data:{Entity:e.Entity,RecordID:e.RecordID,target:e.Target}})},create:function(e){return d(e={action:{record:"CREATE"},data:{Entity:e.Entity,RecordID:e.RecordID,target:e.Target}})},populate:function(e){return d({action:{record:"POPULATE"},data:e})}},Popup:{close:function(){return d({action:{popup:"CLOSE"}})},closeReload:function(){return d({action:{popup:"CLOSE_RELOAD"}})}},WebTab:{open:function(e){return d(e={action:{webTab:"OPEN"},data:e})},history:{pushState:function(e){return d(e={action:{webTab:"HISTORY"},data:e})}}}},HTTP:{get:function(e){return u("wget.get",e)},post:function(e){return u("wget.post",e)},put:function(e){return u("wget.put",e)},patch:function(e){return u("wget.patch",e)},delete:function(e){return u("wget.delete",e)}},CONNECTOR:{invokeAPI:function(e,t){return u(e,t,"CONNECTOR_API")},authorize:function(e){return u(e,{},"CONNECTOR_AUTHORIZE")},isConnectorAuthorized:function(e){return u(e,{invokeType:"ISAUTHORIZE"},"CONNECTOR_API")},revokeConnector:function(e){return u(e,{},"CONNECTOR_REVOKE")}},CONNECTION:{invoke:function(e,n){var r={},o={};return o.url=n.url,o.method=n.method,o.param_type=n.param_type,o.parameters=JSON.stringify(n.parameters),o.headers=JSON.stringify(n.headers),r.data=o,t({category:"CRM_CONNECTION",connectionName:e,data:r})}}}}()}}(),ZSDKUtil=function(e){function t(e){}function n(e){var t={};return(e=e||window.location.href).substr(e.indexOf("?")+1).split("&").forEach((function(e,n){var r=e.split("=");t[r[0]]=r[1]})),t.hasOwnProperty("serviceOrigin")&&(t.serviceOrigin=decodeURIComponent(t.serviceOrigin)),t}var r,o=n();return t.prototype.Info=function(){(e.isDevMode()||e.isLogEnabled())&&window.console.info.apply(null,arguments)},t.prototype.Error=function(){(e.isDevMode()||e.isLogEnabled())&&window.console.error.apply(null,arguments)},e.GetQueryParams=n,e.isDevMode=function(){return o&&o.isDevMode},e.isLogEnabled=function(){return o&&o.isLogEnabled},e.getLogger=function(){return r&&r instanceof t||(r=new t),r},e.Sleep=function(e){for(var t=(new Date).getTime();t+e>(new Date).getTime(););},e}(window.ZSDKUtil||{}),ZSDKMessageManager=function(e){function t(e){try{var t="string"===typeof e.data?JSON.parse(e.data):e.data}catch(A){t=e.data}var i=t.type,c=t.eventName;try{var u;if(!(u="SET_CONTEXT"===c)){var d=e.source,g=e.origin;u=!(!s.isAppRegistered()||f!==d||l!==g)||Error("Un-Authorized Message.")}if(u)switch(i){case"FRAMEWORK.EVENT":var p={SET_CONTEXT:n,UPDATE_CONTEXT:r,EVENT_RESPONSE:o,EVENT_RESPONSE_FAILURE:a}[t.eventName];p&&"function"===typeof p?p(e,t):ZSDKEventManager.NotifyEventListeners(s.AppContext,t.eventName,t.data);break;default:s.MessageInterceptor(e,t)}}catch(A){E.Error("[SDK.MessageHandler] => ",A.stack)}}function n(e,t){f=window.parent,l=s.QueryParams.serviceOrigin,s.SetContext(t.data),s.ExecuteLoadHandler()}function r(e,t){}function o(e,t){i(t.promiseid,!0,t.data)}function a(e,t){i(t.promiseid,!1,t.data)}function i(e,t,n){p.hasOwnProperty(e)&&(t?p[e].resolve(n):p[e].reject(n),p[e]=void 0,delete p[e])}function c(e){return new Promise((function(t,n){p[e]={resolve:t,reject:n,time:(new Date).getTime()}}))}function u(e){if("object"===typeof e&&(e.appOrigin=encodeURIComponent(d())),!f)throw Error("Parentwindow reference not found.");f.postMessage(e,s.QueryParams.serviceOrigin)}function d(){return window.location.protocol+"//"+window.location.host+window.location.pathname}var s,f,l,E=ZSDKUtil.getLogger(),g=100,p={};return e.Init=function(n,r){if(!n||"object"!==typeof n)throw Error("Invalid Context object passed");if(r&&"object"!==typeof r)throw Error("Invalid Configuration Passed to MessageManager");return s=n,t.bind(e)},e.RegisterApp=function(){var e={type:"SDK.EVENT",eventName:"REGISTER",appOrigin:encodeURIComponent(d())};window.parent.postMessage(e,s.QueryParams.serviceOrigin)},e.DERegisterApp=function(){u({type:"SDK.EVENT",eventName:"DEREGISTER",uniqueID:s.getUniqueID()})},e.SendRequest=function(e){if(!e||"object"!==typeof e)throw Error("Invalid Options passed");var t;return t="Promise"+g++,u(e={type:"SDK.EVENT",eventName:"HTTP_REQUEST",uniqueID:s.getUniqueID(),time:(new Date).getTime(),promiseid:t,data:e}),t=c(t)},e.TriggerEvent=function(e,t,n){if(!e)throw Error("Invalid Eventname : ",e);var r=n?"Promise"+g++:void 0;if(u(e={type:"SDK.EVENT",eventName:e,uniqueID:s.getUniqueID(),time:(new Date).getTime(),promiseid:r,data:t}),n)return c(r)},e}(window.ZSDKMessageManager||{}),ZSDKEventManager=function(e){var t=ZSDKUtil.getLogger(),n={};return e.AttachEventListener=function(e,t){"function"===typeof t&&(Array.isArray(n[e])||(n[e]=[]),n[e].push(t))},e.NotifyEventListeners=function(e,r,o){var a=r.match(/^__[A-Za-z_]+__$/gi);if(Array.isArray(a),(a=n[r])&&Array.isArray(a))for(r=0;r<a.length;r++)a[r].call(e,o);else t.Info("Cannot find EventListeners for Event : ",r)},e.NotifyInternalEventHandler=function(e,t){var n=t.eventName;"__APP_INIT__"===n?(e.SetContext(t.data),e.ExecuteLoadHandler()):"__APP_CONTEXT_UPDATE__"===n&&(e.UpdateContext(t.data),e.ExecuteContextUpdateHandler())},e}(window.ZSDKEventManager||{});function ZSDK(){function b(){"function"!==typeof p?z.Error("No OnLoad Handler provided to execute."):C?z.Error("OnLoad event already triggered."):(p.call(r,r),C=!0)}function l(){q.call(r,r)}function m(){return B}function g(e,t,n){return ZSDKMessageManager.TriggerEvent(e,t,n)}function c(t){z.Info("Setting AppContext data");var n=t&&t.model||{};if("undefined"!==typeof ZSDKModelManager){for(var o in n)ZSDKModelManager.AddModel(o,n[o]);r.Model=ZSDKModelManager.GetModelStore()}e=t.uniqueID,a=t.connectors,z.Info("App Connectors ",a),B=!0}function h(){return e}function n(e){}function y(){return a}function w(e){t("/app-translations/"+e+".json",(function(e){v=JSON.parse(e),u()}))}function t(e,t){var n=new XMLHttpRequest;n.open("GET",e,!1),n.onreadystatechange=function(){4==n.readyState&&"200"==n.status&&t(n.responseText)},n.send(null)}function f(e,t,n){for(var r="";r!=e;)r=e,e=e.replace(t,n);return e}function k(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,o=n.length;r<o;++r){var a=n[r];if(!(a in e))return;e=e[a]}return e}function u(){var a=document.querySelectorAll("[data-i18n]"),b;for(b in a)if(a.hasOwnProperty(b)){var c=k(v,a[b].getAttribute("data-i18n"));if(!c)return!1;if(a[b].hasAttribute("data-options")){var d=JSON.parse(JSON.stringify(eval("("+a[b].getAttribute("data-options")+")"))),e=Object.keys(d),g;for(g in e)c=f(c,"${"+e[g]+"}",d[e[g]])}a[b].innerHTML=c}}var p,q,a,d,e,v={},z=ZSDKUtil.getLogger(),B=!1,C=!1;this.isContextReady=!1,this.HelperContext={},this.isDevMode=!1,this.getContext=function(){return r};var r={Model:{},Event:{}};r.Event.Listen=function(e,t){ZSDKEventManager.AttachEventListener(e,t)},r.Event.Trigger=g,r.GetRequest=function(e){return ZSDKMessageManager.SendRequest(e)},r.QueryParams=d,r.Translate=function(a,b){var c="";if(a&&(c=k(v,a)),!c)return!1;if(b){var d=JSON.parse(JSON.stringify(eval(b))),e=Object.keys(d);for(a in e)c=f(c,"${"+e[a]+"}",d[e[a]])}return c},this.OnLoad=function(e){if("function"!==typeof e)throw Error("Invalid Function value is passed");p=e,B&&b()},this.OnUnLoad=function(e){},this.OnContextUpdate=function(e){q=e},function(){d=ZSDKUtil.GetQueryParams();var e={};e.isDevMode=!!d.isDevMode,e.ExecuteLoadHandler=b,e.SetContext=c,e.UpdateContext=n,e.QueryParams=d,e.GetConnectors=y,e.TriggerEvent=g,e.ExecuteContextUpdateHandler=l,e.getUniqueID=h,e.isAppRegistered=m;var t=ZSDKMessageManager.Init(e);window.addEventListener("message",t),window.addEventListener("unload",(function(){ZSDKMessageManager.DERegisterApp()})),"undefined"!==typeof ZSDKModelManager&&ZSDKModelManager.Init(e),ZSDKMessageManager.RegisterApp()}()}}},[[26,1,2]]]);
//# sourceMappingURL=main.cf9d01fd.chunk.js.map