(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ZOHO}));var ZOHO=function(){var e,t={},r=!1,o=void 0;return{embeddedApp:{on:function(n,r){t[n]=r,e&&"function"==typeof r&&e.getContext().Event.Listen(n,r)},init:function(){var n;if(!r)for(var a in r=!0,e=new ZSDK,o=new Promise((function(e,t){n=e})),e.OnLoad((function(){n()})),t)e.getContext().Event.Listen(a,t[a]);return o}},CRM:function(){function t(t){return t.sdkVersion="1",e.getContext().Event.Trigger("CRM_EVENT",t,!0)}function r(e){return new File([e],e.name,{type:e.type})}function o(e,n){var r={category:"ROLES"};return n&&(r.roleId=n),t(r)}function a(e,n,o,a){if(n.FileData){var i=r(n.FileData);n.FileData=i}return(e={category:"CREATE",Entity:e,RelatedID:o,APIData:n}).type=a||"RECORD",t(e)}function i(e){return e.category="BLUEPRINT",t(e)}function c(e){return e.category="APPROVALS",t(e)}function u(e,i,c){var s;if(i.FILE&&(s=r(i.FILE.file),i.FILE.file=s),s=void 0,c)s=i;else{if(s=i.url,o=i.params,u=i.headers,a=i.body,n=i.PARTS,x=i.PART_BOUNDARY,A=i.CONTENT_TYPE,D=i.RESPONSE_TYPE,i=i.FILE,!s)throw{Message:"Url missing"};if(o){var d,l=[];for(d in o)l.push(encodeURIComponent(d)+"="+encodeURIComponent(o[d]));d=l.join("&"),s+=(-1<s.indexOf("?")?"&":"?")+d}s={url:s,Header:u,Body:a,CONTENT_TYPE:A,RESPONSE_TYPE:D,PARTS:n,PARTS_BOUNDARY:x,FILE:i}}return t({category:"CONNECTOR",nameSpace:e,data:s,type:c})}function s(e){return $.extend(e,{category:"UI"}),t(e)}function d(e,n,r){return t({category:"CONFIG",type:e,nameSpace:n,APIData:r})}function l(e){var n={category:"USER"};return e.ID?n.ID=e.ID:e.Type&&(n.Type=e.Type,e.page&&(n.page=e.page),e.per_page&&(n.per_page=e.per_page)),t(n)}function f(e){return t({category:"META",type:e.type,subType:e.subType,Entity:e.Entity,Id:e.Id})}return{ACTION:{setConfig:function(e){return t({category:"ACTION",type:"CUSTOM_ACTION_SAVE_CONFIG",object:e})},enableAccountAccess:function(e){return t({category:"ACTION",type:"ENABLE_ACCOUNT_ACCESS",object:e})}},FUNCTIONS:{execute:function(e,n){var r={};return n.auth_type="oauth",r.data=n,t({category:"FUNCTIONS_EXECUTE",customFunctionName:e,data:r})}},CONFIG:{getOrgInfo:function(e){return d("ORG")},getCurrentUser:function(){return d("CURRENT_USER")},GetCurrentEnvironment:function(){return d("ORG_LEVEL_INFO")}},META:{getFields:function(e){return e.type="FIELD_LIST",f(e)},getModules:function(){return f({type:"MODULE_LIST"})},getAssignmentRules:function(e){return e.type="ASSIGNMENT_RULES",f(e)},getLayouts:function(e){return e.Id=e.Id?e.Id:e.LayoutId,e.type=e.Id?"LAYOUT":"LAYOUTS",f(e)},getRelatedList:function(e){return e.type="RELATED_LIST",f(e)},getCustomViews:function(e){return e.type=e.Id?"CUSTOM_VIEW":"CUSTOM_VIEWS",f(e)},EMAIL:{getAvailableFromAliases:function(){return f({type:"EMAIL",subType:"GET_ALIAS"})}}},API:{addNotes:function(e){return a(e.Entity,{data:[{Note_Title:e.Title,Note_Content:e.Content}]},e.RecordID,"NOTES")},addNotesAttachment:function(e){return t({category:"UPDATE",type:"NOTES",Entity:e.Entity,RecordID:e.RecordID,RelatedRecordID:e.RelatedRecordID,APIData:{Files:{FileName:File.Name,FileData:File.Content}}})},coql:function(e){return t({category:"QUERY",APIData:e})},getAllRoles:function(){return o("ROLES")},getRoleById:function(e){return o("ROLE",e.id)},insertRecord:function(e){var t=e.Entity,n=e.APIData;return n.trigger=e.Trigger,a(t,n)},upsertRecord:function(e){var t=e.Entity,n=e.APIData;return n.trigger=e.Trigger,n.action="UPSERT",e.duplicate_check_fields&&e.duplicate_check_fields instanceof Array&&(n.duplicate_check_fields=e.duplicate_check_fields.join(",")),a(t,n)},getRecord:function(e){return t({category:"READ",APIData:{Entity:e.Entity,RecordID:e.RecordID,RelatedList:void 0}})},getBluePrint:function(e){return i({Entity:e.Entity,RecordID:e.RecordID,action:"GET_BLUEPRINT_STATUS"})},updateBluePrint:function(e){return i({Entity:e.Entity,RecordID:e.RecordID,BlueprintData:e.BlueprintData,action:"UPDATE_BLUEPRINT_STATUS"})},uploadFile:function(e){return e instanceof File?e=t(e={FileData:r(e),category:"FILES",type:"UPLOAD_FILE"}):e=Promise.reject("Input is not of type File"),e},getFile:function(e){return e.category="FILES",e.type="DOWNLOAD_FILE",t(e)},getAllRecords:function(e){return t({category:"READ",APIData:e})},updateRecord:function(e){var n=e.Entity,r=e.APIData;return r.trigger=e.Trigger,t({category:"UPDATE",type:"RECORD",Entity:n,APIData:r})},updateVoiceURL:function(e){return t({category:"UPDATE",type:"VOICE_URL",APIData:e})},deleteRecord:function(e){return t({category:"DELETE",type:"RECORD",Entity:e.Entity,RecordID:e.RecordID})},searchRecord:function(e){return t(e={category:"SEARCH",APIData:e})},getAllActions:function(e){return e.action="GET_ALL_ACTIONS",c(e)},getApprovalRecords:function(e){var t={};return e?e.action="GET_APPROVAL_RECORDS":(t.action="GET_APPROVAL_RECORDS",e=t),c(e)},getApprovalById:function(e){return e.action="GET_APPROVALBYID",c(e)},getApprovalsHistory:function(){return c({action:"GET_APPROVALS_HISTORY"})},approveRecord:function(e){return e.action="UPDATE_APPROVAL",c(e)},getAllUsers:function(e){return l({Type:e.Type,page:e.page,per_page:e.per_page})},getUser:function(e){return l({ID:e.ID})},getRelatedRecords:function(e){return t({category:"READ",APIData:e})},updateRelatedRecords:function(e){var n=e.Entity,o=e.RecordID,a=e.RelatedList,i=e.RelatedRecordID;return(e=e.APIData)instanceof File&&(e=r(e)),t({category:"UPDATE",type:"RELATED_RECORD",Entity:n,RecordID:o,RelatedList:a,RelatedRecordID:i,APIData:e})},delinkRelatedRecord:function(e){return t({category:"DELETE",type:"RELATED_RECORD",Entity:e.Entity,RecordID:e.RecordID,RelatedList:e.RelatedList,RelatedRecordID:e.RelatedRecordID})},attachFile:function(e){var t=e.Entity,n=e.RecordID;return a(t,e={FileName:(e=e.File).Name,FileData:e.Content},n,"ATTACHMENT")},getAllProfiles:function(e){return t({category:"PROFILES",type:"GET_ALL_PROFILES"})},getProfile:function(e){return t({category:"PROFILES",type:"GET_PROFILE",ID:e.ID})},updateProfile:function(e){return t({category:"UPDATE",type:"PROFILE",ID:e.ID,APIData:e.APIData})},getOrgVariable:function(e){return d("VARIABLE",e)},sendMail:function(e){return t(e={category:"MAIL",APIData:e})}},UI:{Resize:function(e){return s(e={action:"RESIZE",data:{width:e.width,height:e.height}})},Setting:{open:function(e){return s(e={action:{setting:"OPEN"},data:e})}},Dialer:{maximize:function(){return s({action:{telephony:"MAXIMIZE"}})},minimize:function(){return s({action:{telephony:"MINIMIZE"}})},notify:function(){return s({action:{telephony:"NOTIFY"}})}},Record:{open:function(e){return s(e={action:{record:"OPEN"},data:{Entity:e.Entity,RecordID:e.RecordID,target:e.Target}})},edit:function(e){return s(e={action:{record:"EDIT"},data:{Entity:e.Entity,RecordID:e.RecordID,target:e.Target}})},create:function(e){return s(e={action:{record:"CREATE"},data:{Entity:e.Entity,RecordID:e.RecordID,target:e.Target}})},populate:function(e){return s({action:{record:"POPULATE"},data:e})}},Popup:{close:function(){return s({action:{popup:"CLOSE"}})},closeReload:function(){return s({action:{popup:"CLOSE_RELOAD"}})}},Widget:{open:function(e){return s(e={action:{webTab:"OPEN"},data:e})}},WebTab:{open:function(e){return s(e={action:{webTab:"OPEN"},data:e})},history:{pushState:function(e){return s(e={action:{webTab:"HISTORY"},data:e})}}}},HTTP:{get:function(e){return u("wget.get",e)},post:function(e){return u("wget.post",e)},put:function(e){return u("wget.put",e)},patch:function(e){return u("wget.patch",e)},delete:function(e){return u("wget.delete",e)}},CONNECTOR:{invokeAPI:function(e,t){return u(e,t,"CONNECTOR_API")},authorize:function(e){return u(e,{},"CONNECTOR_AUTHORIZE")},isConnectorAuthorized:function(e){return u(e,{invokeType:"ISAUTHORIZE"},"CONNECTOR_API")},revokeConnector:function(e){return u(e,{},"CONNECTOR_REVOKE")}},CONNECTION:{invoke:function(e,n){var r={},o={};return o.url=n.url,o.method=n.method,o.param_type=n.param_type,o.parameters=JSON.stringify(n.parameters),o.headers=JSON.stringify(n.headers),r.data=o,t({category:"CRM_CONNECTION",connectionName:e,data:r})}},BLUEPRINT:{proceed:function(){return t({category:"CRM_BLUEPRINT"})}}}}()}}(),ZSDKUtil=function(e){function t(e){}function n(e){var t={};return(e=e||window.location.href).substr(e.indexOf("?")+1).split("&").forEach((function(e,n){var r=e.split("=");t[r[0]]=r[1]})),t.hasOwnProperty("serviceOrigin")&&(t.serviceOrigin=decodeURIComponent(t.serviceOrigin)),t}var r,o=n();return t.prototype.Info=function(){(e.isDevMode()||e.isLogEnabled())&&window.console.info.apply(null,arguments)},t.prototype.Error=function(){(e.isDevMode()||e.isLogEnabled())&&window.console.error.apply(null,arguments)},e.GetQueryParams=n,e.isDevMode=function(){return o&&o.isDevMode},e.isLogEnabled=function(){return o&&o.isLogEnabled},e.getLogger=function(){return r&&r instanceof t||(r=new t),r},e.Sleep=function(e){for(var t=(new Date).getTime();t+e>(new Date).getTime(););},e}(window.ZSDKUtil||{}),ZSDKMessageManager=function(e){function t(e){try{var t="string"===typeof e.data?JSON.parse(e.data):e.data}catch(A){t=e.data}var i=t.type,c=t.eventName;try{var u;if(!(u="SET_CONTEXT"===c)){var s=e.source,g=e.origin;u=!(!d.isAppRegistered()||l!==s||f!==g)||Error("Un-Authorized Message.")}if(u)switch(i){case"FRAMEWORK.EVENT":var E={SET_CONTEXT:n,UPDATE_CONTEXT:r,EVENT_RESPONSE:o,EVENT_RESPONSE_FAILURE:a}[t.eventName];E&&"function"===typeof E?E(e,t):ZSDKEventManager.NotifyEventListeners(d.AppContext,t.eventName,t.data);break;default:d.MessageInterceptor(e,t)}}catch(A){p.Error("[SDK.MessageHandler] => ",A.stack)}}function n(e,t){l=window.parent,f=d.QueryParams.serviceOrigin,d.SetContext(t.data),d.ExecuteLoadHandler()}function r(e,t){}function o(e,t){i(t.promiseid,!0,t.data)}function a(e,t){i(t.promiseid,!1,t.data)}function i(e,t,n){E.hasOwnProperty(e)&&(t?E[e].resolve(n):E[e].reject(n),E[e]=void 0,delete E[e])}function c(e){return new Promise((function(t,n){E[e]={resolve:t,reject:n,time:(new Date).getTime()}}))}function u(e){if("object"===typeof e&&(e.appOrigin=encodeURIComponent(s())),!l)throw Error("Parentwindow reference not found.");l.postMessage(e,d.QueryParams.serviceOrigin)}function s(){return window.location.protocol+"//"+window.location.host+window.location.pathname}var d,l,f,p=ZSDKUtil.getLogger(),g=100,E={};return e.Init=function(n,r){if(!n||"object"!==typeof n)throw Error("Invalid Context object passed");if(r&&"object"!==typeof r)throw Error("Invalid Configuration Passed to MessageManager");return d=n,t.bind(e)},e.RegisterApp=function(){var e={type:"SDK.EVENT",eventName:"REGISTER",appOrigin:encodeURIComponent(s())};window.parent.postMessage(e,d.QueryParams.serviceOrigin)},e.DERegisterApp=function(){u({type:"SDK.EVENT",eventName:"DEREGISTER",uniqueID:d.getUniqueID()})},e.SendRequest=function(e){if(!e||"object"!==typeof e)throw Error("Invalid Options passed");var t;return t="Promise"+g++,u(e={type:"SDK.EVENT",eventName:"HTTP_REQUEST",uniqueID:d.getUniqueID(),time:(new Date).getTime(),promiseid:t,data:e}),t=c(t)},e.TriggerEvent=function(e,t,n){if(!e)throw Error("Invalid Eventname : ",e);var r=n?"Promise"+g++:void 0;if(u(e={type:"SDK.EVENT",eventName:e,uniqueID:d.getUniqueID(),time:(new Date).getTime(),promiseid:r,data:t}),n)return c(r)},e}(window.ZSDKMessageManager||{}),ZSDKEventManager=function(e){var t=ZSDKUtil.getLogger(),n={};return e.AttachEventListener=function(e,t){"function"===typeof t&&(Array.isArray(n[e])||(n[e]=[]),n[e].push(t))},e.NotifyEventListeners=function(e,r,o){var a=r.match(/^__[A-Za-z_]+__$/gi);if(Array.isArray(a),(a=n[r])&&Array.isArray(a))for(r=0;r<a.length;r++)a[r].call(e,o);else t.Info("Cannot find EventListeners for Event : ",r)},e.NotifyInternalEventHandler=function(e,t){var n=t.eventName;"__APP_INIT__"===n?(e.SetContext(t.data),e.ExecuteLoadHandler()):"__APP_CONTEXT_UPDATE__"===n&&(e.UpdateContext(t.data),e.ExecuteContextUpdateHandler())},e}(window.ZSDKEventManager||{});function ZSDK(){function b(){"function"!==typeof p?z.Error("No OnLoad Handler provided to execute."):C?z.Error("OnLoad event already triggered."):(p.call(r,r),C=!0)}function l(){q.call(r,r)}function m(){return B}function g(e,t,n){return ZSDKMessageManager.TriggerEvent(e,t,n)}function c(t){z.Info("Setting AppContext data");var n=t&&t.model||{};if("undefined"!==typeof ZSDKModelManager){for(var o in n)ZSDKModelManager.AddModel(o,n[o]);r.Model=ZSDKModelManager.GetModelStore()}e=t.uniqueID,a=t.connectors,z.Info("App Connectors ",a),B=!0}function h(){return e}function n(e){}function y(){return a}function w(e){t("/app-translations/"+e+".json",(function(e){v=JSON.parse(e),u()}))}function t(e,t){var n=new XMLHttpRequest;n.open("GET",e,!1),n.onreadystatechange=function(){4==n.readyState&&"200"==n.status&&t(n.responseText)},n.send(null)}function f(e,t,n){for(var r="";r!=e;)r=e,e=e.replace(t,n);return e}function k(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,o=n.length;r<o;++r){var a=n[r];if(!(a in e))return;e=e[a]}return e}function u(){var a=document.querySelectorAll("[data-i18n]"),b;for(b in a)if(a.hasOwnProperty(b)){var c=k(v,a[b].getAttribute("data-i18n"));if(!c)return!1;if(a[b].hasAttribute("data-options")){var d=JSON.parse(JSON.stringify(eval("("+a[b].getAttribute("data-options")+")"))),e=Object.keys(d),g;for(g in e)c=f(c,"${"+e[g]+"}",d[e[g]])}a[b].innerHTML=c}}var p,q,a,d,e,v={},z=ZSDKUtil.getLogger(),B=!1,C=!1;this.isContextReady=!1,this.HelperContext={},this.isDevMode=!1,this.getContext=function(){return r};var r={Model:{},Event:{}};r.Event.Listen=function(e,t){ZSDKEventManager.AttachEventListener(e,t)},r.Event.Trigger=g,r.GetRequest=function(e){return ZSDKMessageManager.SendRequest(e)},r.QueryParams=d,r.Translate=function(a,b){var c="";if(a&&(c=k(v,a)),!c)return!1;if(b){var d=JSON.parse(JSON.stringify(eval(b))),e=Object.keys(d);for(a in e)c=f(c,"${"+e[a]+"}",d[e[a]])}return c},this.OnLoad=function(e){if("function"!==typeof e)throw Error("Invalid Function value is passed");p=e,B&&b()},this.OnUnLoad=function(e){},this.OnContextUpdate=function(e){q=e},function(){d=ZSDKUtil.GetQueryParams();var e={};e.isDevMode=!!d.isDevMode,e.ExecuteLoadHandler=b,e.SetContext=c,e.UpdateContext=n,e.QueryParams=d,e.GetConnectors=y,e.TriggerEvent=g,e.ExecuteContextUpdateHandler=l,e.getUniqueID=h,e.isAppRegistered=m;var t=ZSDKMessageManager.Init(e);window.addEventListener("message",t),window.addEventListener("unload",(function(){ZSDKMessageManager.DERegisterApp()})),"undefined"!==typeof ZSDKModelManager&&ZSDKModelManager.Init(e),ZSDKMessageManager.RegisterApp()}()}},43:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(7),a=n.n(o),i=(n(18),n(19),n(3)),c=n(4),u=n(6),s=n.n(u),d=n(0),l=Object(r.createContext)();function f(e){var t=e.children,n=Object(r.useState)(null),o=Object(i.a)(n,2),a=o[0],s=o[1],f=Object(r.useState)(null),p=Object(i.a)(f,2),g=p[0],E=p[1],y=Object(r.useState)({}),O=Object(i.a)(y,2),v=O[0],I=O[1],m=Object(r.useState)(null),R=Object(i.a)(m,2),D=R[0],b=R[1],A=Object(r.useState)(),T=Object(i.a)(A,2),_=T[0],j=T[1],C=Object(r.useState)(),N=Object(i.a)(C,2),S=N[0],h=N[1],P=Object(r.useState)(),L=Object(i.a)(P,2),x=L[0],w=L[1],M=Object(r.useState)(),U=Object(i.a)(M,2),F=U[0],k=U[1];return Object(r.useEffect)((function(){setTimeout((function(){c.a.embeddedApp.on("PageLoad",(function(e){console.log(e),s(e.Entity),E(e.EntityId),c.a.CRM.API.getRecord({Entity:e.Entity,RecordID:e.EntityId}).then((function(e){console.log(e.data[0]),I(e.data[0]),Object(u.geocodeByAddress)(e.data[0].Direccion).then((function(e){e[0].address_components.forEach((function(e){e.types.includes("administrative_area_level_2")&&j(e.long_name),e.types.includes("country")&&k(e.long_name),e.types.includes("administrative_area_level_1")&&h(e.long_name),e.types.includes("postal_code")&&w(e.long_name)})),Object(u.getLatLng)(e[0]).then((function(e){var t=e.lat,n=e.lng;return b({lat:t,lng:n})})).catch((function(e){return console.error(e)}))}))}))})),c.a.embeddedApp.init()}),1e3)}),[]),Object(d.jsx)(l.Provider,{value:{module:a,entity:g,record:v,mapCenter:D,setMapCenter:b,city:_,setCity:j,province:S,setProvince:h,postal:x,setPostal:w,country:F,setCountry:k},children:t})}var p=function(){var e=Object(r.useContext)(l);if(!e)throw new Error("UseWidget inside ZohoContext");return{entity:e.entity,module:e.module,record:e.record,mapCenter:e.mapCenter,setMapCenter:e.setMapCenter,city:e.city,setCity:e.setCity,province:e.province,setProvince:e.setProvince,postal:e.postal,setPostal:e.setPostal,country:e.country,setCountry:e.setCountry}},g=n(45),E=(n(27),n(9)),y=n(8),O=function(){var e=p(),t=e.mapCenter,n=e.city,o=e.country,a=e.province,i=e.postal;return Object(r.useEffect)((function(){var e=document.getElementById("latitud");e.value=t.lat,(e=document.getElementById("longitud")).value=t.lng}),[t]),Object(r.useEffect)((function(){var e=document.getElementById("city");e.value=n,(e=document.getElementById("country")).value=o,(e=document.getElementById("province")).value=a,(e=document.getElementById("postal")).value=i}),[n,o,a,i]),Object(d.jsxs)("form",{className:"row g-3 container",children:[Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("label",{className:"form-label",children:"City"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"city",readOnly:"readOnly"})]}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("label",{className:"form-label",children:"Province"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"province",readOnly:"readOnly"})]}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("label",{className:"form-label",children:"Postal Code"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"postal",readOnly:"readOnly"})]}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("label",{className:"form-label",children:"Country"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"country",readOnly:"readOnly"})]}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("label",{className:"form-label",children:"Latitud"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"latitud",readOnly:"readOnly"})]}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("label",{className:"form-label",children:"Longitud"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"longitud",readOnly:"readOnly"})]})]})},v=Object(y.GoogleApiWrapper)({apiKey:"AIzaSyCmIWwq9Hetuto7tDFOVZStSt6IkZaULYM"})((function(e){var t=e.google,n=p().record,o=Object(r.useState)({address:n.Direccion,showingInfoWindow:!1,activeMarker:{},selectedPlace:{}}),a=Object(i.a)(o,2),l=a[0],f=a[1],g=p(),v=g.mapCenter,I=g.setMapCenter,m=p().setCity,R=p().setProvince,D=p().setCountry,b=p().setPostal;return Object(d.jsxs)("div",{id:"googleMaps",className:"row",children:[Object(d.jsxs)("div",{className:"col mt-3",children:[Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)(s.a,{value:l.address,onChange:function(e){f({address:e})},onSelect:function(e){f({address:e}),Object(u.geocodeByAddress)(e).then((function(e){e[0].address_components.forEach((function(e){e.types.includes("administrative_area_level_2")&&m(e.long_name),e.types.includes("country")&&D(e.long_name),e.types.includes("administrative_area_level_1")&&R(e.long_name),e.types.includes("postal_code")&&b(e.long_name)})),Object(u.getLatLng)(e[0]).then((function(e){console.log("Success",e),I(e)})).catch((function(e){return console.error(e)}))}))},children:function(e){var t=e.getInputProps,n=e.suggestions,r=e.getSuggestionItemProps,o=e.loading;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",Object(E.a)(Object(E.a)({},t({placeholder:"Search Places ...",className:"location-search-input"})),{},{style:{width:"60%",height:"35px"}})),Object(d.jsxs)("div",{className:"autocomplete-dropdown-container",children:[o&&Object(d.jsx)("div",{children:"Loading..."}),n.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",n=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return Object(d.jsx)("div",Object(E.a)(Object(E.a)({},r(e,{className:t,style:n})),{},{children:Object(d.jsx)("span",{children:e.description})}))}))]})]})}})}),Object(d.jsx)("div",{className:"mt-3",children:Object(d.jsx)(O,{})}),Object(d.jsxs)("div",{className:" text-center",children:[Object(d.jsx)("button",{className:"btn btn-primary mt-5",onClick:function(){c.a.CRM.API.updateRecord({Entity:"Apollo_Stores",APIData:{id:n.id,Latitud:v.lat.toFixed(10).toString(),Longitud:v.lng.toFixed(10).toString(),Direccion:l.address,Direccion_validada_desde_el_widget:"SI"}}).then((function(e){console.log(e)}))},children:"Next"})," "]})]}),Object(d.jsx)("div",{className:"col mt-3",children:Object(d.jsxs)(y.Map,{google:t,style:{width:"45%",height:"80%",position:""},initialCenter:{lat:v.lat,lng:v.lng},center:{lat:v.lat,lng:v.lng},zoom:21,onClick:function(e){console.log(e),l.showingInfoWindow&&f({showingInfoWindow:!1,activeMarker:null})},children:[Object(d.jsx)(y.Marker,{position:{lat:v.lat,lng:v.lng},onClick:function(e,t,n){return f({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},name:v.lat+","+v.lng}),Object(d.jsx)(y.InfoWindow,{marker:l.activeMarker,visible:l.showingInfoWindow,children:Object(d.jsx)("div",{children:Object(d.jsx)("h5",{children:v.lat+","+v.lng})})})]})})]})})),I=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],o=t[1],a=p().mapCenter,c=p().record;return Object(r.useEffect)((function(){null!=a&&"SI"!=c.Direccion_y_coordenadas_validadas&&o(!0)}),[a]),n?Object(d.jsx)(v,{}):Object(d.jsx)("div",{className:"text-center mt-5 ",children:Object(d.jsx)(g.a,{color:"primary"})})};var m=function(){return Object(d.jsx)(f,{children:Object(d.jsx)(I,{})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),a(e),i(e)}))};a.a.render(Object(d.jsx)(m,{}),document.getElementById("root")),R()}},[[43,1,2]]]);
//# sourceMappingURL=main.f26c725b.chunk.js.map