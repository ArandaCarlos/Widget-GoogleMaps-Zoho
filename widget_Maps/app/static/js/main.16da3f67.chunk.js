(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ZOHO}));var ZOHO=function(){var e,t={},r=!1,a=void 0;return{embeddedApp:{on:function(n,r){t[n]=r,e&&"function"==typeof r&&e.getContext().Event.Listen(n,r)},init:function(){var n;if(!r)for(var o in r=!0,e=new ZSDK,a=new Promise((function(e,t){n=e})),e.OnLoad((function(){n()})),t)e.getContext().Event.Listen(o,t[o]);return a}},CRM:function(){function t(t){return t.sdkVersion="1",e.getContext().Event.Trigger("CRM_EVENT",t,!0)}function r(e){return new File([e],e.name,{type:e.type})}function a(e,n){var r={category:"ROLES"};return n&&(r.roleId=n),t(r)}function o(e,n,a,o){if(n.FileData){var i=r(n.FileData);n.FileData=i}return(e={category:"CREATE",Entity:e,RelatedID:a,APIData:n}).type=o||"RECORD",t(e)}function i(e){return e.category="BLUEPRINT",t(e)}function c(e){return e.category="APPROVALS",t(e)}function s(e,i,c){var u;if(i.FILE&&(u=r(i.FILE.file),i.FILE.file=u),u=void 0,c)u=i;else{if(u=i.url,a=i.params,s=i.headers,o=i.body,n=i.PARTS,x=i.PART_BOUNDARY,A=i.CONTENT_TYPE,D=i.RESPONSE_TYPE,i=i.FILE,!u)throw{Message:"Url missing"};if(a){var d,l=[];for(d in a)l.push(encodeURIComponent(d)+"="+encodeURIComponent(a[d]));d=l.join("&"),u+=(-1<u.indexOf("?")?"&":"?")+d}u={url:u,Header:s,Body:o,CONTENT_TYPE:A,RESPONSE_TYPE:D,PARTS:n,PARTS_BOUNDARY:x,FILE:i}}return t({category:"CONNECTOR",nameSpace:e,data:u,type:c})}function u(e){return $.extend(e,{category:"UI"}),t(e)}function d(e,n,r){return t({category:"CONFIG",type:e,nameSpace:n,APIData:r})}function l(e){var n={category:"USER"};return e.ID?n.ID=e.ID:e.Type&&(n.Type=e.Type,e.page&&(n.page=e.page),e.per_page&&(n.per_page=e.per_page)),t(n)}function f(e){return t({category:"META",type:e.type,subType:e.subType,Entity:e.Entity,Id:e.Id})}return{ACTION:{setConfig:function(e){return t({category:"ACTION",type:"CUSTOM_ACTION_SAVE_CONFIG",object:e})},enableAccountAccess:function(e){return t({category:"ACTION",type:"ENABLE_ACCOUNT_ACCESS",object:e})}},FUNCTIONS:{execute:function(e,n){var r={};return n.auth_type="oauth",r.data=n,t({category:"FUNCTIONS_EXECUTE",customFunctionName:e,data:r})}},CONFIG:{getOrgInfo:function(e){return d("ORG")},getCurrentUser:function(){return d("CURRENT_USER")},GetCurrentEnvironment:function(){return d("ORG_LEVEL_INFO")}},META:{getFields:function(e){return e.type="FIELD_LIST",f(e)},getModules:function(){return f({type:"MODULE_LIST"})},getAssignmentRules:function(e){return e.type="ASSIGNMENT_RULES",f(e)},getLayouts:function(e){return e.Id=e.Id?e.Id:e.LayoutId,e.type=e.Id?"LAYOUT":"LAYOUTS",f(e)},getRelatedList:function(e){return e.type="RELATED_LIST",f(e)},getCustomViews:function(e){return e.type=e.Id?"CUSTOM_VIEW":"CUSTOM_VIEWS",f(e)},EMAIL:{getAvailableFromAliases:function(){return f({type:"EMAIL",subType:"GET_ALIAS"})}}},API:{addNotes:function(e){return o(e.Entity,{data:[{Note_Title:e.Title,Note_Content:e.Content}]},e.RecordID,"NOTES")},addNotesAttachment:function(e){return t({category:"UPDATE",type:"NOTES",Entity:e.Entity,RecordID:e.RecordID,RelatedRecordID:e.RelatedRecordID,APIData:{Files:{FileName:File.Name,FileData:File.Content}}})},coql:function(e){return t({category:"QUERY",APIData:e})},getAllRoles:function(){return a("ROLES")},getRoleById:function(e){return a("ROLE",e.id)},insertRecord:function(e){var t=e.Entity,n=e.APIData;return n.trigger=e.Trigger,o(t,n)},upsertRecord:function(e){var t=e.Entity,n=e.APIData;return n.trigger=e.Trigger,n.action="UPSERT",e.duplicate_check_fields&&e.duplicate_check_fields instanceof Array&&(n.duplicate_check_fields=e.duplicate_check_fields.join(",")),o(t,n)},getRecord:function(e){return t({category:"READ",APIData:{Entity:e.Entity,RecordID:e.RecordID,RelatedList:void 0}})},getBluePrint:function(e){return i({Entity:e.Entity,RecordID:e.RecordID,action:"GET_BLUEPRINT_STATUS"})},updateBluePrint:function(e){return i({Entity:e.Entity,RecordID:e.RecordID,BlueprintData:e.BlueprintData,action:"UPDATE_BLUEPRINT_STATUS"})},uploadFile:function(e){return e instanceof File?e=t(e={FileData:r(e),category:"FILES",type:"UPLOAD_FILE"}):e=Promise.reject("Input is not of type File"),e},getFile:function(e){return e.category="FILES",e.type="DOWNLOAD_FILE",t(e)},getAllRecords:function(e){return t({category:"READ",APIData:e})},updateRecord:function(e){var n=e.Entity,r=e.APIData;return r.trigger=e.Trigger,t({category:"UPDATE",type:"RECORD",Entity:n,APIData:r})},updateVoiceURL:function(e){return t({category:"UPDATE",type:"VOICE_URL",APIData:e})},deleteRecord:function(e){return t({category:"DELETE",type:"RECORD",Entity:e.Entity,RecordID:e.RecordID})},searchRecord:function(e){return t(e={category:"SEARCH",APIData:e})},getAllActions:function(e){return e.action="GET_ALL_ACTIONS",c(e)},getApprovalRecords:function(e){var t={};return e?e.action="GET_APPROVAL_RECORDS":(t.action="GET_APPROVAL_RECORDS",e=t),c(e)},getApprovalById:function(e){return e.action="GET_APPROVALBYID",c(e)},getApprovalsHistory:function(){return c({action:"GET_APPROVALS_HISTORY"})},approveRecord:function(e){return e.action="UPDATE_APPROVAL",c(e)},getAllUsers:function(e){return l({Type:e.Type,page:e.page,per_page:e.per_page})},getUser:function(e){return l({ID:e.ID})},getRelatedRecords:function(e){return t({category:"READ",APIData:e})},updateRelatedRecords:function(e){var n=e.Entity,a=e.RecordID,o=e.RelatedList,i=e.RelatedRecordID;return(e=e.APIData)instanceof File&&(e=r(e)),t({category:"UPDATE",type:"RELATED_RECORD",Entity:n,RecordID:a,RelatedList:o,RelatedRecordID:i,APIData:e})},delinkRelatedRecord:function(e){return t({category:"DELETE",type:"RELATED_RECORD",Entity:e.Entity,RecordID:e.RecordID,RelatedList:e.RelatedList,RelatedRecordID:e.RelatedRecordID})},attachFile:function(e){var t=e.Entity,n=e.RecordID;return o(t,e={FileName:(e=e.File).Name,FileData:e.Content},n,"ATTACHMENT")},getAllProfiles:function(e){return t({category:"PROFILES",type:"GET_ALL_PROFILES"})},getProfile:function(e){return t({category:"PROFILES",type:"GET_PROFILE",ID:e.ID})},updateProfile:function(e){return t({category:"UPDATE",type:"PROFILE",ID:e.ID,APIData:e.APIData})},getOrgVariable:function(e){return d("VARIABLE",e)},sendMail:function(e){return t(e={category:"MAIL",APIData:e})}},UI:{Resize:function(e){return u(e={action:"RESIZE",data:{width:e.width,height:e.height}})},Setting:{open:function(e){return u(e={action:{setting:"OPEN"},data:e})}},Dialer:{maximize:function(){return u({action:{telephony:"MAXIMIZE"}})},minimize:function(){return u({action:{telephony:"MINIMIZE"}})},notify:function(){return u({action:{telephony:"NOTIFY"}})}},Record:{open:function(e){return u(e={action:{record:"OPEN"},data:{Entity:e.Entity,RecordID:e.RecordID,target:e.Target}})},edit:function(e){return u(e={action:{record:"EDIT"},data:{Entity:e.Entity,RecordID:e.RecordID,target:e.Target}})},create:function(e){return u(e={action:{record:"CREATE"},data:{Entity:e.Entity,RecordID:e.RecordID,target:e.Target}})},populate:function(e){return u({action:{record:"POPULATE"},data:e})}},Popup:{close:function(){return u({action:{popup:"CLOSE"}})},closeReload:function(){return u({action:{popup:"CLOSE_RELOAD"}})}},Widget:{open:function(e){return u(e={action:{webTab:"OPEN"},data:e})}},WebTab:{open:function(e){return u(e={action:{webTab:"OPEN"},data:e})},history:{pushState:function(e){return u(e={action:{webTab:"HISTORY"},data:e})}}}},HTTP:{get:function(e){return s("wget.get",e)},post:function(e){return s("wget.post",e)},put:function(e){return s("wget.put",e)},patch:function(e){return s("wget.patch",e)},delete:function(e){return s("wget.delete",e)}},CONNECTOR:{invokeAPI:function(e,t){return s(e,t,"CONNECTOR_API")},authorize:function(e){return s(e,{},"CONNECTOR_AUTHORIZE")},isConnectorAuthorized:function(e){return s(e,{invokeType:"ISAUTHORIZE"},"CONNECTOR_API")},revokeConnector:function(e){return s(e,{},"CONNECTOR_REVOKE")}},CONNECTION:{invoke:function(e,n){var r={},a={};return a.url=n.url,a.method=n.method,a.param_type=n.param_type,a.parameters=JSON.stringify(n.parameters),a.headers=JSON.stringify(n.headers),r.data=a,t({category:"CRM_CONNECTION",connectionName:e,data:r})}},BLUEPRINT:{proceed:function(){return t({category:"CRM_BLUEPRINT"})}}}}()}}(),ZSDKUtil=function(e){function t(e){}function n(e){var t={};return(e=e||window.location.href).substr(e.indexOf("?")+1).split("&").forEach((function(e,n){var r=e.split("=");t[r[0]]=r[1]})),t.hasOwnProperty("serviceOrigin")&&(t.serviceOrigin=decodeURIComponent(t.serviceOrigin)),t}var r,a=n();return t.prototype.Info=function(){(e.isDevMode()||e.isLogEnabled())&&window.console.info.apply(null,arguments)},t.prototype.Error=function(){(e.isDevMode()||e.isLogEnabled())&&window.console.error.apply(null,arguments)},e.GetQueryParams=n,e.isDevMode=function(){return a&&a.isDevMode},e.isLogEnabled=function(){return a&&a.isLogEnabled},e.getLogger=function(){return r&&r instanceof t||(r=new t),r},e.Sleep=function(e){for(var t=(new Date).getTime();t+e>(new Date).getTime(););},e}(window.ZSDKUtil||{}),ZSDKMessageManager=function(e){function t(e){try{var t="string"===typeof e.data?JSON.parse(e.data):e.data}catch(A){t=e.data}var i=t.type,c=t.eventName;try{var s;if(!(s="SET_CONTEXT"===c)){var u=e.source,g=e.origin;s=!(!d.isAppRegistered()||l!==u||f!==g)||Error("Un-Authorized Message.")}if(s)switch(i){case"FRAMEWORK.EVENT":var E={SET_CONTEXT:n,UPDATE_CONTEXT:r,EVENT_RESPONSE:a,EVENT_RESPONSE_FAILURE:o}[t.eventName];E&&"function"===typeof E?E(e,t):ZSDKEventManager.NotifyEventListeners(d.AppContext,t.eventName,t.data);break;default:d.MessageInterceptor(e,t)}}catch(A){p.Error("[SDK.MessageHandler] => ",A.stack)}}function n(e,t){l=window.parent,f=d.QueryParams.serviceOrigin,d.SetContext(t.data),d.ExecuteLoadHandler()}function r(e,t){}function a(e,t){i(t.promiseid,!0,t.data)}function o(e,t){i(t.promiseid,!1,t.data)}function i(e,t,n){E.hasOwnProperty(e)&&(t?E[e].resolve(n):E[e].reject(n),E[e]=void 0,delete E[e])}function c(e){return new Promise((function(t,n){E[e]={resolve:t,reject:n,time:(new Date).getTime()}}))}function s(e){if("object"===typeof e&&(e.appOrigin=encodeURIComponent(u())),!l)throw Error("Parentwindow reference not found.");l.postMessage(e,d.QueryParams.serviceOrigin)}function u(){return window.location.protocol+"//"+window.location.host+window.location.pathname}var d,l,f,p=ZSDKUtil.getLogger(),g=100,E={};return e.Init=function(n,r){if(!n||"object"!==typeof n)throw Error("Invalid Context object passed");if(r&&"object"!==typeof r)throw Error("Invalid Configuration Passed to MessageManager");return d=n,t.bind(e)},e.RegisterApp=function(){var e={type:"SDK.EVENT",eventName:"REGISTER",appOrigin:encodeURIComponent(u())};window.parent.postMessage(e,d.QueryParams.serviceOrigin)},e.DERegisterApp=function(){s({type:"SDK.EVENT",eventName:"DEREGISTER",uniqueID:d.getUniqueID()})},e.SendRequest=function(e){if(!e||"object"!==typeof e)throw Error("Invalid Options passed");var t;return t="Promise"+g++,s(e={type:"SDK.EVENT",eventName:"HTTP_REQUEST",uniqueID:d.getUniqueID(),time:(new Date).getTime(),promiseid:t,data:e}),t=c(t)},e.TriggerEvent=function(e,t,n){if(!e)throw Error("Invalid Eventname : ",e);var r=n?"Promise"+g++:void 0;if(s(e={type:"SDK.EVENT",eventName:e,uniqueID:d.getUniqueID(),time:(new Date).getTime(),promiseid:r,data:t}),n)return c(r)},e}(window.ZSDKMessageManager||{}),ZSDKEventManager=function(e){var t=ZSDKUtil.getLogger(),n={};return e.AttachEventListener=function(e,t){"function"===typeof t&&(Array.isArray(n[e])||(n[e]=[]),n[e].push(t))},e.NotifyEventListeners=function(e,r,a){var o=r.match(/^__[A-Za-z_]+__$/gi);if(Array.isArray(o),(o=n[r])&&Array.isArray(o))for(r=0;r<o.length;r++)o[r].call(e,a);else t.Info("Cannot find EventListeners for Event : ",r)},e.NotifyInternalEventHandler=function(e,t){var n=t.eventName;"__APP_INIT__"===n?(e.SetContext(t.data),e.ExecuteLoadHandler()):"__APP_CONTEXT_UPDATE__"===n&&(e.UpdateContext(t.data),e.ExecuteContextUpdateHandler())},e}(window.ZSDKEventManager||{});function ZSDK(){function b(){"function"!==typeof p?z.Error("No OnLoad Handler provided to execute."):C?z.Error("OnLoad event already triggered."):(p.call(r,r),C=!0)}function l(){q.call(r,r)}function m(){return B}function g(e,t,n){return ZSDKMessageManager.TriggerEvent(e,t,n)}function c(t){z.Info("Setting AppContext data");var n=t&&t.model||{};if("undefined"!==typeof ZSDKModelManager){for(var o in n)ZSDKModelManager.AddModel(o,n[o]);r.Model=ZSDKModelManager.GetModelStore()}e=t.uniqueID,a=t.connectors,z.Info("App Connectors ",a),B=!0}function h(){return e}function n(e){}function y(){return a}function w(e){t("/app-translations/"+e+".json",(function(e){v=JSON.parse(e),u()}))}function t(e,t){var n=new XMLHttpRequest;n.open("GET",e,!1),n.onreadystatechange=function(){4==n.readyState&&"200"==n.status&&t(n.responseText)},n.send(null)}function f(e,t,n){for(var r="";r!=e;)r=e,e=e.replace(t,n);return e}function k(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,a=n.length;r<a;++r){var o=n[r];if(!(o in e))return;e=e[o]}return e}function u(){var a=document.querySelectorAll("[data-i18n]"),b;for(b in a)if(a.hasOwnProperty(b)){var c=k(v,a[b].getAttribute("data-i18n"));if(!c)return!1;if(a[b].hasAttribute("data-options")){var d=JSON.parse(JSON.stringify(eval("("+a[b].getAttribute("data-options")+")"))),e=Object.keys(d),g;for(g in e)c=f(c,"${"+e[g]+"}",d[e[g]])}a[b].innerHTML=c}}var p,q,a,d,e,v={},z=ZSDKUtil.getLogger(),B=!1,C=!1;this.isContextReady=!1,this.HelperContext={},this.isDevMode=!1,this.getContext=function(){return r};var r={Model:{},Event:{}};r.Event.Listen=function(e,t){ZSDKEventManager.AttachEventListener(e,t)},r.Event.Trigger=g,r.GetRequest=function(e){return ZSDKMessageManager.SendRequest(e)},r.QueryParams=d,r.Translate=function(a,b){var c="";if(a&&(c=k(v,a)),!c)return!1;if(b){var d=JSON.parse(JSON.stringify(eval(b))),e=Object.keys(d);for(a in e)c=f(c,"${"+e[a]+"}",d[e[a]])}return c},this.OnLoad=function(e){if("function"!==typeof e)throw Error("Invalid Function value is passed");p=e,B&&b()},this.OnUnLoad=function(e){},this.OnContextUpdate=function(e){q=e},function(){d=ZSDKUtil.GetQueryParams();var e={};e.isDevMode=!!d.isDevMode,e.ExecuteLoadHandler=b,e.SetContext=c,e.UpdateContext=n,e.QueryParams=d,e.GetConnectors=y,e.TriggerEvent=g,e.ExecuteContextUpdateHandler=l,e.getUniqueID=h,e.isAppRegistered=m;var t=ZSDKMessageManager.Init(e);window.addEventListener("message",t),window.addEventListener("unload",(function(){ZSDKMessageManager.DERegisterApp()})),"undefined"!==typeof ZSDKModelManager&&ZSDKModelManager.Init(e),ZSDKMessageManager.RegisterApp()}()}},43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(7),o=n.n(a),i=(n(18),n(19),n(3)),c=n(4),s=n(5),u=n.n(s),d=n(0),l=Object(r.createContext)();function f(e){var t=e.children,n=Object(r.useState)(null),a=Object(i.a)(n,2),o=a[0],u=a[1],f=Object(r.useState)(null),p=Object(i.a)(f,2),g=p[0],E=p[1],y=Object(r.useState)({}),O=Object(i.a)(y,2),v=O[0],m=O[1],I=Object(r.useState)(null),R=Object(i.a)(I,2),b=R[0],D=R[1],_=Object(r.useState)(),A=Object(i.a)(_,2),T=A[0],j=A[1],h=Object(r.useState)(),S=Object(i.a)(h,2),C=S[0],N=S[1],P=Object(r.useState)(),L=Object(i.a)(P,2),x=L[0],w=L[1],M=Object(r.useState)(),U=Object(i.a)(M,2),F=U[0],k=U[1],Z=Object(r.useState)(),B=Object(i.a)(Z,2),K=B[0],V=B[1];return Object(r.useEffect)((function(){setTimeout((function(){c.a.embeddedApp.on("PageLoad",(function(e){console.log(e),u(e.Entity),E(e.EntityId),c.a.CRM.API.getRecord({Entity:e.Entity,RecordID:e.EntityId}).then((function(e){console.log(e.data[0]),m(e.data[0]);var t=e.data[0].Direccion;null!=t&&""!=t||V(t="San Francisco, CA, USA"),Object(s.geocodeByAddress)(t).then((function(t){V(e.data[0].Direccion),t[0].address_components.forEach((function(e){e.types.includes("administrative_area_level_2")&&j(e.long_name),e.types.includes("country")&&k(e.long_name),e.types.includes("administrative_area_level_1")&&N(e.long_name),e.types.includes("postal_code")&&w(e.long_name)})),Object(s.getLatLng)(t[0]).then((function(e){var t=e.lat,n=e.lng;return D({lat:t,lng:n})})).catch((function(e){return console.error(e)}))})).catch((function(e){console.error("ERROR"),V(t="San Francisco, CA, USA"),Object(s.geocodeByAddress)(t).then((function(e){alert("Su direcci\xf3n no fue encontrada en google maps, se mostrar\xe1 una direcci\xf3n aleatoria por el momento"),e[0].address_components.forEach((function(e){e.types.includes("administrative_area_level_2")&&j(e.long_name),e.types.includes("country")&&k(e.long_name),e.types.includes("administrative_area_level_1")&&N(e.long_name),e.types.includes("postal_code")&&w(e.long_name)})),Object(s.getLatLng)(e[0]).then((function(e){var t=e.lat,n=e.lng;return D({lat:t,lng:n})})).catch((function(e){return console.error(e)}))}))}))}))})),c.a.embeddedApp.init()}),1e3)}),[]),Object(d.jsx)(l.Provider,{value:{module:o,entity:g,record:v,mapCenter:b,setMapCenter:D,city:T,setCity:j,province:C,setProvince:N,postal:x,setPostal:w,country:F,setCountry:k,address:K},children:t})}var p=function(){var e=Object(r.useContext)(l);if(!e)throw new Error("UseWidget inside ZohoContext");return{entity:e.entity,module:e.module,record:e.record,mapCenter:e.mapCenter,setMapCenter:e.setMapCenter,city:e.city,setCity:e.setCity,province:e.province,setProvince:e.setProvince,postal:e.postal,setPostal:e.setPostal,country:e.country,setCountry:e.setCountry,address:e.address}},g=n(45),E=(n(27),n(9)),y=n(8),O=function(){var e=p(),t=e.mapCenter,n=e.city,a=e.country,o=e.province,i=e.postal;return Object(r.useEffect)((function(){var e=document.getElementById("latitud");e.value=t.lat,(e=document.getElementById("longitud")).value=t.lng}),[t]),Object(r.useEffect)((function(){var e=document.getElementById("city");e.value=n,(e=document.getElementById("country")).value=a,(e=document.getElementById("province")).value=o,(e=document.getElementById("postal")).value=i}),[n,a,o,i]),Object(d.jsxs)("form",{className:"row g-3 container",children:[Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("label",{className:"form-label",children:"City"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"city",readOnly:"readOnly"})]}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("label",{className:"form-label",children:"Province"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"province",readOnly:"readOnly"})]}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("label",{className:"form-label",children:"Postal Code"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"postal",readOnly:"readOnly"})]}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("label",{className:"form-label",children:"Country"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"country",readOnly:"readOnly"})]}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("label",{className:"form-label",children:"Latitud"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"latitud",readOnly:"readOnly"})]}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("label",{className:"form-label",children:"Longitud"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"longitud",readOnly:"readOnly"})]})]})},v=Object(y.GoogleApiWrapper)({apiKey:"AIzaSyCmIWwq9Hetuto7tDFOVZStSt6IkZaULYM"})((function(e){var t=e.google,n=p().record,a=p().address,o=Object(r.useState)({address:a,showingInfoWindow:!1,activeMarker:{},selectedPlace:{}}),l=Object(i.a)(o,2),f=l[0],g=l[1],v=p(),m=v.mapCenter,I=v.setMapCenter,R=p().setCity,b=p().setProvince,D=p().setCountry,_=p().setPostal;return Object(d.jsxs)("div",{id:"googleMaps",className:"row",children:[Object(d.jsxs)("div",{className:"col mt-3",children:[Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("div",{children:"Address"}),Object(d.jsx)(u.a,{value:f.address,onChange:function(e){g({address:e})},onSelect:function(e){g({address:e}),Object(s.geocodeByAddress)(e).then((function(e){e[0].address_components.forEach((function(e){e.types.includes("administrative_area_level_2")&&R(e.long_name),e.types.includes("country")&&D(e.long_name),e.types.includes("administrative_area_level_1")&&b(e.long_name),e.types.includes("postal_code")&&_(e.long_name)})),Object(s.getLatLng)(e[0]).then((function(e){console.log("Success",e),I(e)})).catch((function(e){return console.error(e)}))}))},children:function(e){var t=e.getInputProps,n=e.suggestions,r=e.getSuggestionItemProps,a=e.loading;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",Object(E.a)(Object(E.a)({},t({placeholder:"Search Places ...",className:"location-search-input"})),{},{style:{width:"60%",height:"35px"}})),Object(d.jsxs)("div",{className:"autocomplete-dropdown-container",children:[a&&Object(d.jsx)("div",{children:"Loading..."}),n.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",n=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return Object(d.jsx)("div",Object(E.a)(Object(E.a)({},r(e,{className:t,style:n})),{},{children:Object(d.jsx)("span",{children:e.description})}))}))]})]})}})]}),Object(d.jsx)("div",{className:"mt-3",children:Object(d.jsx)(O,{})}),Object(d.jsxs)("div",{className:" text-center",children:[Object(d.jsx)("button",{className:"btn btn-primary mt-5",onClick:function(){if("SI"!=n.Direccion_validada_desde_el_widget)if(console.log(f.address),null==f.address)alert("debe ingresar la direcci\xf3n de su tienda");else{var e={parameters:{map:{id:n.id,Latitud:m.lat.toFixed(10).toString(),Longitud:m.lng.toFixed(10).toString(),Direccion:f.address,Direccion_validada_desde_el_widget:"SI"}},method:"POST",url:"https://www.zohoapis.com/crm/v2/functions/update_maps_widget/actions/execute?auth_type=apikey&zapikey=1003.7c02a5b10f13810ff9499d39a02c0d43.605b9c5964f99646e4da05c6b3e3afdc",param_type:1};c.a.CRM.CONNECTION.invoke("crm",e).then((function(e){console.log(e)})),c.a.embeddedApp.init().then((function(){return c.a.CRM.BLUEPRINT.proceed()})).then((function(e){console.log(e)}))}else alert("No puede cambiar, su direcci\xf3n ya est\xe1 validada")},children:"Next"})," "]})]}),Object(d.jsx)("div",{className:"col mt-3",children:Object(d.jsxs)(y.Map,{google:t,style:{width:"45%",height:"80%",position:""},initialCenter:{lat:m.lat,lng:m.lng},center:{lat:m.lat,lng:m.lng},zoom:21,onClick:function(e){console.log(e),f.showingInfoWindow&&g({showingInfoWindow:!1,activeMarker:null})},children:[Object(d.jsx)(y.Marker,{position:{lat:m.lat,lng:m.lng},onClick:function(e,t,n){return g({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},name:m.lat+","+m.lng}),Object(d.jsx)(y.InfoWindow,{marker:f.activeMarker,visible:f.showingInfoWindow,children:Object(d.jsx)("div",{children:Object(d.jsx)("h5",{children:m.lat+","+m.lng})})})]})})]})})),m=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1],o=p().mapCenter;p().record;return Object(r.useEffect)((function(){null!=o&&a(!0)}),[o]),n?Object(d.jsx)(v,{}):Object(d.jsx)("div",{className:"text-center mt-5 ",children:Object(d.jsx)(g.a,{color:"primary"})})};var I=function(){return Object(d.jsx)(f,{children:Object(d.jsx)(m,{})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};o.a.render(Object(d.jsx)(I,{}),document.getElementById("root")),R()}},[[43,1,2]]]);
//# sourceMappingURL=main.16da3f67.chunk.js.map