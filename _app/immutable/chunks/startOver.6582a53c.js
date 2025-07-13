import{s as uc,x as Ea,y as Ku,z as ag,A as cg,B as ug,C as lg,f as B,a as ce,g as U,h as Z,v as lt,c as ue,d as k,j as L,i as te,r as D,G as zt,D as lc,l as we,m as ve,n as Rt,I as Wu,w as Ne,P as hg,E as Zt,F as Hh}from"./scheduler.0f133ec1.js";import{S as hc,i as dc,b as eo,d as to,m as no,a as ze,t as tt,e as ro,g as hs,c as ds}from"./index.be5f0f89.js";import{e as Ir}from"./each.e15bd1d1.js";import{p as dg}from"./parse.bee59afc.js";import{j as fg}from"./singletons.eabd0418.js";import{i as mg,g as ar}from"./navigation.848f74ac.js";import{s as Xo}from"./global.c9b4f8d8.js";import{g as pg,s as Jo}from"./localStorageUtils.9ab207db.js";import{o as gg,g as _g,d as yg}from"./indexedDB.2ebc4a5c.js";import{p as Ig}from"./stores.1960a42e.js";import{d as Qh,b as Yh,c as Ti,e as Xh,s as Jh,i as Zh,a as Eg}from"./stores.846955ef.js";import{S as Tg}from"./Svg.59184b2a.js";import{X as wg}from"./x.6ad382cf.js";import{I as vg,g as Ag,a as bg}from"./Icon.ddd9d419.js";function Rg(n){let e;const t=n[2].default,r=ag(t,n,n[3],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&8)&&cg(r,t,s,s[3],e?lg(t,s[3],i,null):ug(s[3]),null)},i(s){e||(ze(r,s),e=!0)},o(s){tt(r,s),e=!1},d(s){r&&r.d(s)}}}function Sg(n){let e,t;const r=[{name:"undo-2"},n[1],{iconNode:n[0]}];let s={$$slots:{default:[Rg]},$$scope:{ctx:n}};for(let i=0;i<r.length;i+=1)s=Ea(s,r[i]);return e=new vg({props:s}),{c(){eo(e.$$.fragment)},l(i){to(e.$$.fragment,i)},m(i,o){no(e,i,o),t=!0},p(i,[o]){const a=o&3?Ag(r,[r[0],o&2&&bg(i[1]),o&1&&{iconNode:i[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:i}),e.$set(a)},i(i){t||(ze(e.$$.fragment,i),t=!0)},o(i){tt(e.$$.fragment,i),t=!1},d(i){ro(e,i)}}}function Pg(n,e,t){let{$$slots:r={},$$scope:s}=e;const i=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"}]];return n.$$set=o=>{t(1,e=Ea(Ea({},e),Ku(o))),"$$scope"in o&&t(3,s=o.$$scope)},e=Ku(e),[i,e,r,s]}class Cg extends hc{constructor(e){super(),dc(this,e,Pg,Sg,uc,{})}}const Dg=Cg;function Vg(n){return fg.apply_action(n)}function xg(n){const e=JSON.parse(n);return e.data&&(e.data=dg(e.data)),e}function Hu(n){return HTMLElement.prototype.cloneNode.call(n)}function kg(n,e=()=>{}){const t=async({action:s,result:i,reset:o})=>{i.type==="success"&&(o!==!1&&HTMLFormElement.prototype.reset.call(n),await mg()),(location.origin+location.pathname===s.origin+s.pathname||i.type==="redirect"||i.type==="error")&&Vg(i)};async function r(s){var p,_,y,A;if(((p=s.submitter)!=null&&p.hasAttribute("formmethod")?s.submitter.formMethod:Hu(n).method)!=="post")return;s.preventDefault();const o=new URL((_=s.submitter)!=null&&_.hasAttribute("formaction")?s.submitter.formAction:Hu(n).action),a=new FormData(n),c=(y=s.submitter)==null?void 0:y.getAttribute("name");c&&a.append(c,((A=s.submitter)==null?void 0:A.getAttribute("value"))??"");const u=new AbortController;let l=!1;const d=await e({action:o,cancel:()=>l=!0,controller:u,get data(){return a},formData:a,get form(){return n},formElement:n,submitter:s.submitter})??t;if(l)return;let f;try{const v=await fetch(o,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:a,signal:u.signal});f=xg(await v.text()),f.type==="error"&&(f.status=v.status)}catch(v){if((v==null?void 0:v.name)==="AbortError")return;f={type:"error",error:v}}d({action:o,get data(){return a},formData:a,get form(){return n},formElement:n,update:v=>t({action:o,result:f,reset:v==null?void 0:v.reset}),result:f})}return HTMLFormElement.prototype.addEventListener.call(n,"submit",r),{destroy(){HTMLFormElement.prototype.removeEventListener.call(n,"submit",r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ng=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ed(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ng(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new Og;const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Og extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mg=function(n){const e=ed(n);return td.encodeByteArray(e,!0)},Di=function(n){return Mg(n).replace(/\./g,"")},Fg=function(n){try{return td.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Vi(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Lg(t)||(n[t]=Vi(n[t],e[t]));return n}function Lg(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=()=>Bg().__FIREBASE_DEFAULTS__,qg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$g=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Fg(n[1]);return e&&JSON.parse(e)},nd=()=>{try{return Ug()||qg()||$g()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rd=()=>{var n;return(n=nd())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Di(JSON.stringify(t)),Di(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function id(){var n;const e=(n=nd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zg(){return typeof self=="object"&&self.self===self}function Gg(){return!id()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function od(){try{return typeof indexedDB=="object"}catch{return!1}}function Kg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="FirebaseError";class dn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Wg,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Hg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new dn(s,a,r)}}function Hg(n,e){return n.replace(Qg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function wa(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Yu(i)&&Yu(o)){if(!wa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Yu(n){return n!==null&&typeof n=="object"}function Yg(n,e){const t=new Xg(n,e);return t.subscribe.bind(t)}class Xg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Jg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Zo),s.error===void 0&&(s.error=Zo),s.complete===void 0&&(s.complete=Zo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(n){return n&&n._delegate?n._delegate:n}class Ft{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new jg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(t_(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e_(n){return n===vn?void 0:n}function t_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=[];var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const ad={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},r_=H.INFO,s_={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},i_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=s_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mc{constructor(e){this.name=e,this._logLevel=r_,this._logHandler=i_,this._userLogHandler=null,fc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ad[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}function o_(n){fc.forEach(e=>{e.setLogLevel(n)})}function a_(n,e){for(const t of fc){let r=null;e&&e.level&&(r=ad[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&n({level:H[i].toLowerCase(),message:a,args:o,type:s.name})}}}const c_=(n,e)=>e.some(t=>n instanceof t);let Xu,Ju;function u_(){return Xu||(Xu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l_(){return Ju||(Ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cd=new WeakMap,va=new WeakMap,ud=new WeakMap,ea=new WeakMap,pc=new WeakMap;function h_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Xt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&cd.set(t,n)}).catch(()=>{}),pc.set(e,n),e}function d_(n){if(va.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});va.set(n,e)}let Aa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return va.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ud.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function f_(n){Aa=n(Aa)}function m_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ta(this),e,...t);return ud.set(r,e.sort?e.sort():[e]),Xt(r)}:l_().includes(n)?function(...e){return n.apply(ta(this),e),Xt(cd.get(this))}:function(...e){return Xt(n.apply(ta(this),e))}}function p_(n){return typeof n=="function"?m_(n):(n instanceof IDBTransaction&&d_(n),c_(n,u_())?new Proxy(n,Aa):n)}function Xt(n){if(n instanceof IDBRequest)return h_(n);if(ea.has(n))return ea.get(n);const e=p_(n);return e!==n&&(ea.set(n,e),pc.set(e,n)),e}const ta=n=>pc.get(n);function g_(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Xt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xt(o.result),c.oldVersion,c.newVersion,Xt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const __=["get","getKey","getAll","getAllKeys","count"],y_=["put","add","delete","clear"],na=new Map;function Zu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(na.get(e))return na.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=y_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||__.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&c.done]))[0]};return na.set(e,i),i}f_(n=>({...n,get:(e,t,r)=>Zu(e,t)||n.get(e,t,r),has:(e,t)=>!!Zu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(E_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function E_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ba="@firebase/app",el="0.9.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new mc("@firebase/app"),T_="@firebase/app-compat",w_="@firebase/analytics-compat",v_="@firebase/analytics",A_="@firebase/app-check-compat",b_="@firebase/app-check",R_="@firebase/auth",S_="@firebase/auth-compat",P_="@firebase/database",C_="@firebase/database-compat",D_="@firebase/functions",V_="@firebase/functions-compat",x_="@firebase/installations",k_="@firebase/installations-compat",N_="@firebase/messaging",O_="@firebase/messaging-compat",M_="@firebase/performance",F_="@firebase/performance-compat",L_="@firebase/remote-config",B_="@firebase/remote-config-compat",U_="@firebase/storage",q_="@firebase/storage-compat",$_="@firebase/firestore",j_="@firebase/firestore-compat",z_="firebase",G_="10.5.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="[DEFAULT]",K_={[ba]:"fire-core",[T_]:"fire-core-compat",[v_]:"fire-analytics",[w_]:"fire-analytics-compat",[b_]:"fire-app-check",[A_]:"fire-app-check-compat",[R_]:"fire-auth",[S_]:"fire-auth-compat",[P_]:"fire-rtdb",[C_]:"fire-rtdb-compat",[D_]:"fire-fn",[V_]:"fire-fn-compat",[x_]:"fire-iid",[k_]:"fire-iid-compat",[N_]:"fire-fcm",[O_]:"fire-fcm-compat",[M_]:"fire-perf",[F_]:"fire-perf-compat",[L_]:"fire-rc",[B_]:"fire-rc-compat",[U_]:"fire-gcs",[q_]:"fire-gcs-compat",[$_]:"fire-fst",[j_]:"fire-fst-compat","fire-js":"fire-js",[z_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Map,fs=new Map;function xi(n,e){try{n.container.addComponent(e)}catch(t){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ld(n,e){n.container.addOrOverwriteComponent(e)}function Fn(n){const e=n.name;if(fs.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;fs.set(e,n);for(const t of tn.values())xi(t,n);return!0}function hd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function W_(n,e,t=en){hd(n,e).clearInstance(t)}function H_(){fs.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new so("app","Firebase",Q_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y_=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=G_;function gc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:en,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});if(t||(t=rd()),!t)throw Ot.create("no-options");const i=tn.get(s);if(i){if(wa(t,i.options)&&wa(r,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const o=new n_(s);for(const c of fs.values())o.addComponent(c);const a=new Y_(t,r,o);return tn.set(s,a),a}function X_(n=en){const e=tn.get(n);if(!e&&n===en&&rd())return gc();if(!e)throw Ot.create("no-app",{appName:n});return e}function J_(){return Array.from(tn.values())}async function dd(n){const e=n.name;tn.has(e)&&(tn.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function St(n,e,t){var r;let s=(r=K_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(a.join(" "));return}Fn(new Ft(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function fd(n,e){if(n!==null&&typeof n!="function")throw Ot.create("invalid-log-argument");a_(n,e)}function md(n){o_(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="firebase-heartbeat-database",ey=1,ms="firebase-heartbeat-store";let ra=null;function pd(){return ra||(ra=g_(Z_,ey,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ms)}}}).catch(n=>{throw Ot.create("idb-open",{originalErrorMessage:n.message})})),ra}async function ty(n){try{return await(await pd()).transaction(ms).objectStore(ms).get(gd(n))}catch(e){if(e instanceof dn)Mn.warn(e.message);else{const t=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(t.message)}}}async function tl(n,e){try{const r=(await pd()).transaction(ms,"readwrite");await r.objectStore(ms).put(e,gd(n)),await r.done}catch(t){if(t instanceof dn)Mn.warn(t.message);else{const r=Ot.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mn.warn(r.message)}}}function gd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=1024,ry=30*24*60*60*1e3;class sy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=ry}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nl(),{heartbeatsToSend:t,unsentEntries:r}=iy(this._heartbeatsCache.heartbeats),s=Di(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function nl(){return new Date().toISOString().substring(0,10)}function iy(n,e=ny){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),rl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),rl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class oy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return od()?Kg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ty(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return tl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return tl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rl(n){return Di(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n){Fn(new Ft("platform-logger",e=>new I_(e),"PRIVATE")),Fn(new Ft("heartbeat",e=>new sy(e),"PRIVATE")),St(ba,el,n),St(ba,el,"esm2017"),St("fire-js","")}ay("");const cy=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:dn,SDK_VERSION:io,_DEFAULT_ENTRY_NAME:en,_addComponent:xi,_addOrOverwriteComponent:ld,_apps:tn,_clearComponents:H_,_components:fs,_getProvider:hd,_registerComponent:Fn,_removeServiceInstance:W_,deleteApp:dd,getApp:X_,getApps:J_,initializeApp:gc,onLog:fd,registerVersion:St,setLogLevel:md},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t){this._delegate=e,this.firebase=t,xi(e,new Ft("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),dd(this._delegate)))}_getService(e,t=en){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=en){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){xi(this._delegate,e)}_addOrOverwriteComponent(e){ld(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},sl=new so("app-compat","Firebase",ly);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n){const e={},t={__esModule:!0,initializeApp:i,app:s,registerVersion:St,setLogLevel:md,onLog:fd,apps:null,SDK_VERSION:io,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:cy}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function s(u){if(u=u||en,!Qu(e,u))throw sl.create("no-app",{appName:u});return e[u]}s.App=n;function i(u,l={}){const h=gc(u,l);if(Qu(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Fn(u)&&u.type==="PUBLIC"){const d=(f=s())=>{if(typeof f[h]!="function")throw sl.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&Vi(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(){const n=hy(uy);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:_d,extendNamespace:e,createSubscribe:Yg,ErrorFactory:so,deepExtend:Vi});function e(t){Vi(n,t)}return n}const dy=_d();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new mc("@firebase/app-compat"),fy="@firebase/app-compat",my="0.2.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n){St(fy,my,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(zg()&&self.firebase!==void 0){il.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&il.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Hn=dy;py();var gy="firebase",_y="10.5.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn.registerVersion(gy,_y,"app-compat");var yy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,_c=_c||{},$=yy||self;function oo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Fs(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Iy(n){return Object.prototype.hasOwnProperty.call(n,sa)&&n[sa]||(n[sa]=++Ey)}var sa="closure_uid_"+(1e9*Math.random()>>>0),Ey=0;function Ty(n,e,t){return n.call.apply(n.bind,arguments)}function wy(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function Qe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=Ty:Qe=wy,Qe.apply(null,arguments)}function ci(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Fe(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function fn(){this.s=this.s,this.o=this.o}var vy=0;fn.prototype.s=!1;fn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vy!=0)&&Iy(this)};fn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yd=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function yc(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function ol(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(oo(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function Ye(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var Ay=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{$.addEventListener("test",()=>{},e),$.removeEventListener("test",()=>{},e)}catch{}return n}();function ps(n){return/^[\s\xa0]*$/.test(n)}function ao(){var n=$.navigator;return n&&(n=n.userAgent)?n:""}function Et(n){return ao().indexOf(n)!=-1}function Ic(n){return Ic[" "](n),n}Ic[" "]=function(){};function by(n,e){var t=_I;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var Ry=Et("Opera"),Er=Et("Trident")||Et("MSIE"),Id=Et("Edge"),Ra=Id||Er,Ed=Et("Gecko")&&!(ao().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge"))&&!(Et("Trident")||Et("MSIE"))&&!Et("Edge"),Sy=ao().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge");function Td(){var n=$.document;return n?n.documentMode:void 0}var Sa;e:{var ia="",oa=function(){var n=ao();if(Ed)return/rv:([^\);]+)(\)|;)/.exec(n);if(Id)return/Edge\/([\d\.]+)/.exec(n);if(Er)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Sy)return/WebKit\/(\S+)/.exec(n);if(Ry)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(oa&&(ia=oa?oa[1]:""),Er){var aa=Td();if(aa!=null&&aa>parseFloat(ia)){Sa=String(aa);break e}}Sa=ia}var Pa;if($.document&&Er){var al=Td();Pa=al||parseInt(Sa,10)||void 0}else Pa=void 0;var Py=Pa;function gs(n,e){if(Ye.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Ed){e:{try{Ic(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Cy[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&gs.$.h.call(this)}}Fe(gs,Ye);var Cy={2:"touch",3:"pen",4:"mouse"};gs.prototype.h=function(){gs.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ls="closure_listenable_"+(1e6*Math.random()|0),Dy=0;function Vy(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=s,this.key=++Dy,this.fa=this.ia=!1}function co(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Ec(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function xy(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function wd(n){const e={};for(const t in n)e[t]=n[t];return e}const cl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vd(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<cl.length;i++)t=cl[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function uo(n){this.src=n,this.g={},this.h=0}uo.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Da(n,e,r,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new Vy(e,this.src,i,!!r,s),e.ia=t,n.push(e)),e};function Ca(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=yd(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(co(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Da(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==e&&i.capture==!!t&&i.la==r)return s}return-1}var Tc="closure_lm_"+(1e6*Math.random()|0),ca={};function Ad(n,e,t,r,s){if(r&&r.once)return Rd(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ad(n,e[i],t,r,s);return null}return t=Ac(t),n&&n[Ls]?n.O(e,t,Fs(r)?!!r.capture:!!r,s):bd(n,e,t,!1,r,s)}function bd(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=Fs(s)?!!s.capture:!!s,a=vc(n);if(a||(n[Tc]=a=new uo(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=ky(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)Ay||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(Pd(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function ky(){function n(t){return e.call(n.src,n.listener,t)}const e=Ny;return n}function Rd(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Rd(n,e[i],t,r,s);return null}return t=Ac(t),n&&n[Ls]?n.P(e,t,Fs(r)?!!r.capture:!!r,s):bd(n,e,t,!0,r,s)}function Sd(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Sd(n,e[i],t,r,s);else r=Fs(r)?!!r.capture:!!r,t=Ac(t),n&&n[Ls]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Da(i,t,r,s),-1<t&&(co(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=vc(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Da(e,t,r,s)),(t=-1<n?e[n]:null)&&wc(t))}function wc(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Ls])Ca(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Pd(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=vc(e))?(Ca(t,n),t.h==0&&(t.src=null,e[Tc]=null)):co(n)}}}function Pd(n){return n in ca?ca[n]:ca[n]="on"+n}function Ny(n,e){if(n.fa)n=!0;else{e=new gs(e,this);var t=n.listener,r=n.la||n.src;n.ia&&wc(n),n=t.call(r,e)}return n}function vc(n){return n=n[Tc],n instanceof uo?n:null}var ua="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ac(n){return typeof n=="function"?n:(n[ua]||(n[ua]=function(e){return n.handleEvent(e)}),n[ua])}function Me(){fn.call(this),this.i=new uo(this),this.S=this,this.J=null}Fe(Me,fn);Me.prototype[Ls]=!0;Me.prototype.removeEventListener=function(n,e,t,r){Sd(this,n,e,t,r)};function Ge(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Ye(e,n);else if(e instanceof Ye)e.target=e.target||n;else{var s=e;e=new Ye(r,n),vd(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=ui(o,r,!0,e)&&s}if(o=e.g=n,s=ui(o,r,!0,e)&&s,s=ui(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=ui(o,r,!1,e)&&s}Me.prototype.N=function(){if(Me.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)co(t[r]);delete n.g[e],n.h--}}this.J=null};Me.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};Me.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function ui(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Ca(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var bc=$.JSON.stringify;class Oy{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function My(){var n=Rc;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Fy{constructor(){this.h=this.g=null}add(e,t){const r=Cd.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Cd=new Oy(()=>new Ly,n=>n.reset());class Ly{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function By(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function Uy(n){$.setTimeout(()=>{throw n},0)}let _s,ys=!1,Rc=new Fy,Dd=()=>{const n=$.Promise.resolve(void 0);_s=()=>{n.then(qy)}};var qy=()=>{for(var n;n=My();){try{n.h.call(n.g)}catch(t){Uy(t)}var e=Cd;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}ys=!1};function lo(n,e){Me.call(this),this.h=n||1,this.g=e||$,this.j=Qe(this.qb,this),this.l=Date.now()}Fe(lo,Me);C=lo.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ge(this,"tick"),this.ga&&(Sc(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sc(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}C.N=function(){lo.$.N.call(this),Sc(this),delete this.g};function Pc(n,e,t){if(typeof n=="function")t&&(n=Qe(n,t));else if(n&&typeof n.handleEvent=="function")n=Qe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(n,e||0)}function Vd(n){n.g=Pc(()=>{n.g=null,n.i&&(n.i=!1,Vd(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class $y extends fn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vd(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Is(n){fn.call(this),this.h=n,this.g={}}Fe(Is,fn);var ul=[];function xd(n,e,t,r){Array.isArray(t)||(t&&(ul[0]=t.toString()),t=ul);for(var s=0;s<t.length;s++){var i=Ad(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function kd(n){Ec(n.g,function(e,t){this.g.hasOwnProperty(t)&&wc(e)},n),n.g={}}Is.prototype.N=function(){Is.$.N.call(this),kd(this)};Is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ho(){this.g=!0}ho.prototype.Ea=function(){this.g=!1};function jy(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function zy(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function fr(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ky(n,t)+(r?" "+r:"")})}function Gy(n,e){n.info(function(){return"TIMEOUT: "+e})}ho.prototype.info=function(){};function Ky(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return bc(t)}catch{return e}}var Qn={},ll=null;function fo(){return ll=ll||new Me}Qn.Ta="serverreachability";function Nd(n){Ye.call(this,Qn.Ta,n)}Fe(Nd,Ye);function Es(n){const e=fo();Ge(e,new Nd(e))}Qn.STAT_EVENT="statevent";function Od(n,e){Ye.call(this,Qn.STAT_EVENT,n),this.stat=e}Fe(Od,Ye);function nt(n){const e=fo();Ge(e,new Od(e,n))}Qn.Ua="timingevent";function Md(n,e){Ye.call(this,Qn.Ua,n),this.size=e}Fe(Md,Ye);function Bs(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){n()},e)}var mo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Fd={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Cc(){}Cc.prototype.h=null;function hl(n){return n.h||(n.h=n.i())}function Ld(){}var Us={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Dc(){Ye.call(this,"d")}Fe(Dc,Ye);function Vc(){Ye.call(this,"c")}Fe(Vc,Ye);var Va;function po(){}Fe(po,Cc);po.prototype.g=function(){return new XMLHttpRequest};po.prototype.i=function(){return{}};Va=new po;function qs(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Is(this),this.P=Wy,n=Ra?125:void 0,this.V=new lo(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Bd}function Bd(){this.i=null,this.g="",this.h=!1}var Wy=45e3,xa={},ki={};C=qs.prototype;C.setTimeout=function(n){this.P=n};function ka(n,e,t){n.L=1,n.v=_o(Lt(e)),n.s=t,n.S=!0,Ud(n,null)}function Ud(n,e){n.G=Date.now(),$s(n),n.A=Lt(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Hd(t.i,"t",r),n.C=0,t=n.l.J,n.h=new Bd,n.g=gf(n.l,t?e:null,!n.s),0<n.O&&(n.M=new $y(Qe(n.Pa,n,n.g),n.O)),xd(n.U,n.g,"readystatechange",n.nb),e=n.I?wd(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Es(),jy(n.j,n.u,n.A,n.m,n.W,n.s)}C.nb=function(n){n=n.target;const e=this.M;e&&wt(n)==3?e.l():this.Pa(n)};C.Pa=function(n){try{if(n==this.g)e:{const l=wt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Ra||this.g&&(this.h.h||this.g.ja()||pl(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Es(3):Es(2)),go(this);var t=this.g.da();this.ca=t;t:if(qd(this)){var r=pl(this.g);n="";var s=r.length,i=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dn(this),rs(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,zy(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ps(a)){var u=a;break t}}u=null}if(t=u)fr(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Na(this,t);else{this.i=!1,this.o=3,nt(12),Dn(this),rs(this);break e}}this.S?($d(this,l,o),Ra&&this.i&&l==3&&(xd(this.U,this.V,"tick",this.mb),this.V.start())):(fr(this.j,this.m,o,null),Na(this,o)),l==4&&Dn(this),this.i&&!this.J&&(l==4?df(this.l,this):(this.i=!1,$s(this)))}else mI(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Dn(this),rs(this)}}}catch{}finally{}};function qd(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function $d(n,e,t){let r=!0,s;for(;!n.J&&n.C<t.length;)if(s=Hy(n,t),s==ki){e==4&&(n.o=4,nt(14),r=!1),fr(n.j,n.m,null,"[Incomplete Response]");break}else if(s==xa){n.o=4,nt(15),fr(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else fr(n.j,n.m,s,null),Na(n,s);qd(n)&&s!=ki&&s!=xa&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,nt(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Fc(e),e.M=!0,nt(11))):(fr(n.j,n.m,t,"[Invalid Chunked Response]"),Dn(n),rs(n))}C.mb=function(){if(this.g){var n=wt(this.g),e=this.g.ja();this.C<e.length&&(go(this),$d(this,n,e),this.i&&n!=4&&$s(this))}};function Hy(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?ki:(t=Number(e.substring(t,r)),isNaN(t)?xa:(r+=1,r+t>e.length?ki:(e=e.slice(r,r+t),n.C=r+t,e)))}C.cancel=function(){this.J=!0,Dn(this)};function $s(n){n.Y=Date.now()+n.P,jd(n,n.P)}function jd(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Bs(Qe(n.lb,n),e)}function go(n){n.B&&($.clearTimeout(n.B),n.B=null)}C.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Gy(this.j,this.A),this.L!=2&&(Es(),nt(17)),Dn(this),this.o=2,rs(this)):jd(this,this.Y-n)};function rs(n){n.l.H==0||n.J||df(n.l,n)}function Dn(n){go(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Sc(n.V),kd(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Na(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Oa(t.i,n))){if(!n.K&&Oa(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Mi(t),Eo(t);else break e;Mc(t),nt(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=Bs(Qe(t.ib,t),6e3));if(1>=Xd(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Vn(t,11)}else if((n.K||t.g==n)&&Mi(t),!ps(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(xc(i,i.h),i.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,de(r.I,r.F,_))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=pf(r,r.J?r.pa:null,r.Y),o.K){Jd(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(go(a),$s(a)),r.g=o}else lf(r);0<t.j.length&&To(t)}else u[0]!="stop"&&u[0]!="close"||Vn(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vn(t,7):Oc(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Es(4)}catch{}}function Qy(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(oo(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Yy(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(oo(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function zd(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(oo(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Yy(n),r=Qy(n),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}var Gd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xy(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Nn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Nn){this.h=n.h,Ni(this,n.j),this.s=n.s,this.g=n.g,Oi(this,n.m),this.l=n.l;var e=n.i,t=new Ts;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),dl(this,t),this.o=n.o}else n&&(e=String(n).match(Gd))?(this.h=!1,Ni(this,e[1]||"",!0),this.s=Jr(e[2]||""),this.g=Jr(e[3]||"",!0),Oi(this,e[4]),this.l=Jr(e[5]||"",!0),dl(this,e[6]||"",!0),this.o=Jr(e[7]||"")):(this.h=!1,this.i=new Ts(null,this.h))}Nn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Zr(e,fl,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Zr(e,fl,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Zr(t,t.charAt(0)=="/"?eI:Zy,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Zr(t,nI)),n.join("")};function Lt(n){return new Nn(n)}function Ni(n,e,t){n.j=t?Jr(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Oi(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function dl(n,e,t){e instanceof Ts?(n.i=e,rI(n.i,n.h)):(t||(e=Zr(e,tI)),n.i=new Ts(e,n.h))}function de(n,e,t){n.i.set(e,t)}function _o(n){return de(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Jr(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Zr(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Jy),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Jy(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var fl=/[#\/\?@]/g,Zy=/[#\?:]/g,eI=/[#\?]/g,tI=/[#\?@]/g,nI=/#/g;function Ts(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function mn(n){n.g||(n.g=new Map,n.h=0,n.i&&Xy(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}C=Ts.prototype;C.add=function(n,e){mn(this),this.i=null,n=kr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Kd(n,e){mn(n),e=kr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Wd(n,e){return mn(n),e=kr(n,e),n.g.has(e)}C.forEach=function(n,e){mn(this),this.g.forEach(function(t,r){t.forEach(function(s){n.call(e,s,r,this)},this)},this)};C.ta=function(){mn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const s=n[r];for(let i=0;i<s.length;i++)t.push(e[r])}return t};C.Z=function(n){mn(this);let e=[];if(typeof n=="string")Wd(this,n)&&(e=e.concat(this.g.get(kr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};C.set=function(n,e){return mn(this),this.i=null,n=kr(this,n),Wd(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};C.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Hd(n,e,t){Kd(n,e),0<t.length&&(n.i=null,n.g.set(kr(n,e),yc(t)),n.h+=t.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function kr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function rI(n,e){e&&!n.j&&(mn(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(Kd(this,r),Hd(this,s,t))},n)),n.j=e}var sI=class{constructor(n,e){this.g=n,this.map=e}};function Qd(n){this.l=n||iI,$.PerformanceNavigationTiming?(n=$.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var iI=10;function Yd(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Xd(n){return n.h?1:n.g?n.g.size:0}function Oa(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function xc(n,e){n.g?n.g.add(e):n.h=e}function Jd(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Qd.prototype.cancel=function(){if(this.i=Zd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Zd(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return yc(n.i)}var oI=class{stringify(n){return $.JSON.stringify(n,void 0)}parse(n){return $.JSON.parse(n,void 0)}};function aI(){this.g=new oI}function cI(n,e,t){const r=t||"";try{zd(n,function(s,i){let o=s;Fs(s)&&(o=bc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function uI(n,e){const t=new ho;if($.Image){const r=new Image;r.onload=ci(li,t,r,"TestLoadImage: loaded",!0,e),r.onerror=ci(li,t,r,"TestLoadImage: error",!1,e),r.onabort=ci(li,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=ci(li,t,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function li(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function js(n){this.l=n.ec||null,this.j=n.ob||!1}Fe(js,Cc);js.prototype.g=function(){return new yo(this.l,this.j)};js.prototype.i=function(n){return function(){return n}}({});function yo(n,e){Me.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=kc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fe(yo,Me);var kc=0;C=yo.prototype;C.open=function(n,e){if(this.readyState!=kc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ws(this)};C.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||$).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zs(this)),this.readyState=kc};C.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ef(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function ef(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}C.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?zs(this):ws(this),this.readyState==3&&ef(this)}};C.Za=function(n){this.g&&(this.response=this.responseText=n,zs(this))};C.Ya=function(n){this.g&&(this.response=n,zs(this))};C.ka=function(){this.g&&zs(this)};function zs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ws(n)}C.setRequestHeader=function(n,e){this.v.append(n,e)};C.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ws(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var lI=$.JSON.parse;function be(n){Me.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tf,this.L=this.M=!1}Fe(be,Me);var tf="",hI=/^https?$/i,dI=["POST","PUT"];C=be.prototype;C.Oa=function(n){this.M=n};C.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Va.g(),this.C=this.u?hl(this.u):hl(Va),this.g.onreadystatechange=Qe(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(i){ml(this,i);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)t.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())t.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),s=$.FormData&&n instanceof $.FormData,!(0<=yd(dI,e))||r||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{sf(this),0<this.B&&((this.L=fI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.ua,this)):this.A=Pc(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){ml(this,i)}};function fI(n){return Er&&typeof n.timeout=="number"&&n.ontimeout!==void 0}C.ua=function(){typeof _c<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function ml(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,nf(n),Io(n)}function nf(n){n.F||(n.F=!0,Ge(n,"complete"),Ge(n,"error"))}C.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ge(this,"complete"),Ge(this,"abort"),Io(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Io(this,!0)),be.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?rf(this):this.kb())};C.kb=function(){rf(this)};function rf(n){if(n.h&&typeof _c<"u"&&(!n.C[1]||wt(n)!=4||n.da()!=2)){if(n.v&&wt(n)==4)Pc(n.La,0,n);else if(Ge(n,"readystatechange"),wt(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var s=String(n.I).match(Gd)[1]||null;!s&&$.self&&$.self.location&&(s=$.self.location.protocol.slice(0,-1)),r=!hI.test(s?s.toLowerCase():"")}t=r}if(t)Ge(n,"complete"),Ge(n,"success");else{n.m=6;try{var i=2<wt(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",nf(n)}}finally{Io(n)}}}}function Io(n,e){if(n.g){sf(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Ge(n,"ready");try{t.onreadystatechange=r}catch{}}}function sf(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&($.clearTimeout(n.A),n.A=null)}C.isActive=function(){return!!this.g};function wt(n){return n.g?n.g.readyState:0}C.da=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),lI(e)}};function pl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case tf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function mI(n){const e={};n=(n.g&&2<=wt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(ps(n[r]))continue;var t=By(n[r]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const i=e[s]||[];e[s]=i,i.push(t)}xy(e,function(r){return r.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function of(n){let e="";return Ec(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Nc(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=of(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):de(n,e,t))}function zr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function af(n){this.Ga=0,this.j=[],this.l=new ho,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zr("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zr("baseRetryDelayMs",5e3,n),this.hb=zr("retryDelaySeedMs",1e4,n),this.eb=zr("forwardChannelMaxRetries",2,n),this.xa=zr("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Qd(n&&n.concurrentRequestLimit),this.Ja=new aI,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=af.prototype;C.ra=8;C.H=1;function Oc(n){if(cf(n),n.H==3){var e=n.W++,t=Lt(n.I);if(de(t,"SID",n.K),de(t,"RID",e),de(t,"TYPE","terminate"),Gs(n,t),e=new qs(n,n.l,e),e.L=2,e.v=_o(Lt(t)),t=!1,$.navigator&&$.navigator.sendBeacon)try{t=$.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&$.Image&&(new Image().src=e.v,t=!0),t||(e.g=gf(e.l,null),e.g.ha(e.v)),e.G=Date.now(),$s(e)}mf(n)}function Eo(n){n.g&&(Fc(n),n.g.cancel(),n.g=null)}function cf(n){Eo(n),n.u&&($.clearTimeout(n.u),n.u=null),Mi(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&$.clearTimeout(n.m),n.m=null)}function To(n){if(!Yd(n.i)&&!n.m){n.m=!0;var e=n.Na;_s||Dd(),ys||(_s(),ys=!0),Rc.add(e,n),n.C=0}}function pI(n,e){return Xd(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Bs(Qe(n.Na,n,e),ff(n,n.C)),n.C++,!0)}C.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new qs(this,this.l,n);let i=this.s;if(this.U&&(i?(i=wd(i),vd(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=uf(this,s,e),t=Lt(this.I),de(t,"RID",n),de(t,"CVER",22),this.F&&de(t,"X-HTTP-Session-Id",this.F),Gs(this,t),i&&(this.O?e="headers="+encodeURIComponent(String(of(i)))+"&"+e:this.o&&Nc(t,this.o,i)),xc(this.i,s),this.bb&&de(t,"TYPE","init"),this.P?(de(t,"$req",e),de(t,"SID","null"),s.aa=!0,ka(s,t,null)):ka(s,t,e),this.H=2}}else this.H==3&&(n?gl(this,n):this.j.length==0||Yd(this.i)||gl(this))};function gl(n,e){var t;e?t=e.m:t=n.W++;const r=Lt(n.I);de(r,"SID",n.K),de(r,"RID",t),de(r,"AID",n.V),Gs(n,r),n.o&&n.s&&Nc(r,n.o,n.s),t=new qs(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=uf(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),xc(n.i,t),ka(t,r,e)}function Gs(n,e){n.na&&Ec(n.na,function(t,r){de(e,r,t)}),n.h&&zd({},function(t,r){de(e,r,t)})}function uf(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Qe(n.h.Va,n.h,n):null;e:{var s=n.j;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].g;const l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{cI(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function lf(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;_s||Dd(),ys||(_s(),ys=!0),Rc.add(e,n),n.A=0}}function Mc(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Bs(Qe(n.Ma,n),ff(n,n.A)),n.A++,!0)}C.Ma=function(){if(this.u=null,hf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Bs(Qe(this.jb,this),n)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nt(10),Eo(this),hf(this))};function Fc(n){n.B!=null&&($.clearTimeout(n.B),n.B=null)}function hf(n){n.g=new qs(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Lt(n.wa);de(e,"RID","rpc"),de(e,"SID",n.K),de(e,"AID",n.V),de(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&de(e,"TO",n.qa),de(e,"TYPE","xmlhttp"),Gs(n,e),n.o&&n.s&&Nc(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=_o(Lt(e)),t.s=null,t.S=!0,Ud(t,n)}C.ib=function(){this.v!=null&&(this.v=null,Eo(this),Mc(this),nt(19))};function Mi(n){n.v!=null&&($.clearTimeout(n.v),n.v=null)}function df(n,e){var t=null;if(n.g==e){Mi(n),Fc(n),n.g=null;var r=2}else if(Oa(n.i,e))t=e.F,Jd(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var s=n.C;r=fo(),Ge(r,new Md(r,t)),To(n)}else lf(n);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&pI(n,e)||r==2&&Mc(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:Vn(n,5);break;case 4:Vn(n,10);break;case 3:Vn(n,6);break;default:Vn(n,2)}}}function ff(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Vn(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Qe(n.pb,n);t||(t=new Nn("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Ni(t,"https"),_o(t)),uI(t.toString(),r)}else nt(2);n.H=0,n.h&&n.h.za(e),mf(n),cf(n)}C.pb=function(n){n?(this.l.info("Successfully pinged google.com"),nt(2)):(this.l.info("Failed to ping google.com"),nt(1))};function mf(n){if(n.H=0,n.ma=[],n.h){const e=Zd(n.i);(e.length!=0||n.j.length!=0)&&(ol(n.ma,e),ol(n.ma,n.j),n.i.i.length=0,yc(n.j),n.j.length=0),n.h.ya()}}function pf(n,e,t){var r=t instanceof Nn?Lt(t):new Nn(t);if(r.g!="")e&&(r.g=e+"."+r.g),Oi(r,r.m);else{var s=$.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Nn(null);r&&Ni(i,r),e&&(i.g=e),s&&Oi(i,s),t&&(i.l=t),r=i}return t=n.F,e=n.Da,t&&e&&de(r,t,e),de(r,"VER",n.ra),Gs(n,r),r}function gf(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new be(new js({ob:!0})):new be(n.va),e.Oa(n.J),e}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function _f(){}C=_f.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function Fi(){if(Er&&!(10<=Number(Py)))throw Error("Environmental error: no available transport.")}Fi.prototype.g=function(n,e){return new dt(n,e)};function dt(n,e){Me.call(this),this.g=new af(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!ps(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ps(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Nr(this)}Fe(dt,Me);dt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;nt(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=pf(n,null,n.Y),To(n)};dt.prototype.close=function(){Oc(this.g)};dt.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=bc(n),n=t);e.j.push(new sI(e.fb++,n)),e.H==3&&To(e)};dt.prototype.N=function(){this.g.h=null,delete this.j,Oc(this.g),delete this.g,dt.$.N.call(this)};function yf(n){Dc.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Fe(yf,Dc);function If(){Vc.call(this),this.status=1}Fe(If,Vc);function Nr(n){this.g=n}Fe(Nr,_f);Nr.prototype.Ba=function(){Ge(this.g,"a")};Nr.prototype.Aa=function(n){Ge(this.g,new yf(n))};Nr.prototype.za=function(n){Ge(this.g,new If)};Nr.prototype.ya=function(){Ge(this.g,"b")};function gI(){this.blockSize=-1}function yt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Fe(yt,gI);yt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function la(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)r[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var i=n.g[3],o=e+(i^t&(s^i))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(t^s))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^i)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~i))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}yt.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=t;)la(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<e;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){la(this,r),s=0;break}}else for(;i<e;)if(r[s++]=n[i++],s==this.blockSize){la(this,r),s=0;break}}this.h=s,this.i+=e};yt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function re(n,e){this.h=e;for(var t=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==e||(t[s]=i,r=!1)}this.g=t}var _I={};function Lc(n){return-128<=n&&128>n?by(n,function(e){return new re([e|0],0>e?-1:0)}):new re([n|0],0>n?-1:0)}function vt(n){if(isNaN(n)||!isFinite(n))return mr;if(0>n)return $e(vt(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Ma;return new re(e,0)}function Ef(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return $e(Ef(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=vt(Math.pow(e,8)),r=mr,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),e);8>i?(i=vt(Math.pow(e,i)),r=r.R(i).add(vt(o))):(r=r.R(t),r=r.add(vt(o)))}return r}var Ma=4294967296,mr=Lc(0),Fa=Lc(1),_l=Lc(16777216);C=re.prototype;C.ea=function(){if(mt(this))return-$e(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Ma+r)*e,e*=Ma}return n};C.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(kt(this))return"0";if(mt(this))return"-"+$e(this).toString(n);for(var e=vt(Math.pow(n,6)),t=this,r="";;){var s=Bi(t,e).g;t=Li(t,s.R(e));var i=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,kt(t))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};C.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function kt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function mt(n){return n.h==-1}C.X=function(n){return n=Li(this,n),mt(n)?-1:kt(n)?0:1};function $e(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new re(t,~n.h).add(Fa)}C.abs=function(){return mt(this)?$e(this):this};C.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,t[s]=o<<16|i}return new re(t,t[t.length-1]&-2147483648?-1:0)};function Li(n,e){return n.add($e(e))}C.R=function(n){if(kt(this)||kt(n))return mr;if(mt(this))return mt(n)?$e(this).R($e(n)):$e($e(this).R(n));if(mt(n))return $e(this.R($e(n)));if(0>this.X(_l)&&0>n.X(_l))return vt(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,c=n.D(s)&65535;t[2*r+2*s]+=o*c,hi(t,2*r+2*s),t[2*r+2*s+1]+=i*c,hi(t,2*r+2*s+1),t[2*r+2*s+1]+=o*a,hi(t,2*r+2*s+1),t[2*r+2*s+2]+=i*a,hi(t,2*r+2*s+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new re(t,0)};function hi(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Gr(n,e){this.g=n,this.h=e}function Bi(n,e){if(kt(e))throw Error("division by zero");if(kt(n))return new Gr(mr,mr);if(mt(n))return e=Bi($e(n),e),new Gr($e(e.g),$e(e.h));if(mt(e))return e=Bi(n,$e(e)),new Gr($e(e.g),e.h);if(30<n.g.length){if(mt(n)||mt(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Fa,r=e;0>=r.X(n);)t=yl(t),r=yl(r);var s=tr(t,1),i=tr(r,1);for(r=tr(r,2),t=tr(t,2);!kt(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(t),i=o),r=tr(r,1),t=tr(t,1)}return e=Li(n,s.R(e)),new Gr(s,e)}for(s=mr;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=vt(t),o=i.R(e);mt(o)||0<o.X(n);)t-=r,i=vt(t),o=i.R(e);kt(i)&&(i=Fa),s=s.add(i),n=Li(n,o)}return new Gr(s,n)}C.gb=function(n){return Bi(this,n).h};C.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new re(t,this.h&n.h)};C.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new re(t,this.h|n.h)};C.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new re(t,this.h^n.h)};function yl(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new re(t,n.h)}function tr(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,s=[],i=0;i<r;i++)s[i]=0<e?n.D(i+t)>>>e|n.D(i+t+1)<<32-e:n.D(i+t);return new re(s,n.h)}Fi.prototype.createWebChannel=Fi.prototype.g;dt.prototype.send=dt.prototype.u;dt.prototype.open=dt.prototype.m;dt.prototype.close=dt.prototype.close;mo.NO_ERROR=0;mo.TIMEOUT=8;mo.HTTP_ERROR=6;Fd.COMPLETE="complete";Ld.EventType=Us;Us.OPEN="a";Us.CLOSE="b";Us.ERROR="c";Us.MESSAGE="d";Me.prototype.listen=Me.prototype.O;be.prototype.listenOnce=be.prototype.P;be.prototype.getLastError=be.prototype.Sa;be.prototype.getLastErrorCode=be.prototype.Ia;be.prototype.getStatus=be.prototype.da;be.prototype.getResponseJson=be.prototype.Wa;be.prototype.getResponseText=be.prototype.ja;be.prototype.send=be.prototype.ha;be.prototype.setWithCredentials=be.prototype.Oa;yt.prototype.digest=yt.prototype.l;yt.prototype.reset=yt.prototype.reset;yt.prototype.update=yt.prototype.j;re.prototype.add=re.prototype.add;re.prototype.multiply=re.prototype.R;re.prototype.modulo=re.prototype.gb;re.prototype.compare=re.prototype.X;re.prototype.toNumber=re.prototype.ea;re.prototype.toString=re.prototype.toString;re.prototype.getBits=re.prototype.D;re.fromNumber=vt;re.fromString=Ef;var yI=function(){return new Fi},II=function(){return fo()},ha=mo,EI=Fd,TI=Qn,Il={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wI=js,di=Ld,vI=be,AI=yt,pr=re;const El="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new mc("@firebase/firestore");function cr(){return nn.logLevel}function bI(n){nn.setLogLevel(n)}function E(n,...e){if(nn.logLevel<=H.DEBUG){const t=e.map(Bc);nn.debug(`Firestore (${Or}): ${n}`,...t)}}function Se(n,...e){if(nn.logLevel<=H.ERROR){const t=e.map(Bc);nn.error(`Firestore (${Or}): ${n}`,...t)}}function It(n,...e){if(nn.logLevel<=H.WARN){const t=e.map(Bc);nn.warn(`Firestore (${Or}): ${n}`,...t)}}function Bc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(n="Unexpected state"){const e=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: `+n;throw Se(e),new Error(e)}function M(n,e){n||V()}function RI(n,e){n||V()}function P(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends dn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ke.UNAUTHENTICATED))}shutdown(){}}class PI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class CI{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Oe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Oe,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Oe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(M(typeof r.accessToken=="string"),new Tf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return M(e===null||typeof e=="string"),new ke(e)}}class DI{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class VI{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new DI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=i=>{i.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(M(typeof t.token=="string"),this.R=t.token,new xI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=NI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function j(n,e){return n<e?-1:n>e?1:0}function Tr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function vf(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new I(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new I(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ye(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.timestamp=e}static fromTimestamp(e){return new O(e)}static min(){return new O(new ye(0,0))}static max(){return new O(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t,r){t===void 0?t=0:t>e.length&&V(),r===void 0?r=e.length-t:r>e.length-t&&V(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return vs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class J extends vs{construct(e,t,r){return new J(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new I(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new J(t)}static emptyPath(){return new J([])}}const OI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends vs{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return OI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ge(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new I(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new I(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new I(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.path=e}static fromPath(e){return new R(J.fromString(e))}static fromName(e){return new R(J.fromString(e).popFirst(5))}static empty(){return new R(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new R(new J(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function La(n){return n.fields.find(e=>e.kind===2)}function An(n){return n.fields.filter(e=>e.kind!==2)}Ui.UNKNOWN_ID=-1;class wi{constructor(e,t){this.fieldPath=e,this.kind=t}}class As{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new As(0,ft.min())}}function Af(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=O.fromTimestamp(r===1e9?new ye(t+1,0):new ye(t,r));return new ft(s,R.empty(),e)}function bf(n){return new ft(n.readTime,n.key,-1)}class ft{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ft(O.min(),R.empty(),-1)}static max(){return new ft(O.max(),R.empty(),-1)}}function Uc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=R.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==Rf)throw n;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(s=>s?m.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new m((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,t){return new m((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Oe,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new ss(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=qc(r.target.error);this.V.reject(new ss(e,s))}}static open(e,t,r,s){try{return new wo(t,e.transaction(s,r))}catch(i){throw new ss(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(E("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new FI(t)}}class _t{constructor(e,t,r){this.name=e,this.version=t,this.p=r,_t.S(Ta())===12.2&&Se("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return E("SimpleDb","Removing database:",e),bn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!od())return!1;if(_t.C())return!0;const e=Ta(),t=_t.S(e),r=0<t&&t<10,s=_t.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(E("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new ss(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new I(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new I(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ss(e,o))},s.onupgradeneeded=i=>{E("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{E("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=wo.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(E("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class MI{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return bn(this.k.delete())}}class ss extends I{constructor(e,t){super(g.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function gn(n){return n.name==="IndexedDbTransactionError"}class FI{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(E("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(E("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),bn(r)}add(e){return E("SimpleDb","ADD",this.store.name,e,e),bn(this.store.add(e))}get(e){return bn(this.store.get(e)).next(t=>(t===void 0&&(t=null),E("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return E("SimpleDb","DELETE",this.store.name,e),bn(this.store.delete(e))}count(){return E("SimpleDb","COUNT",this.store.name),bn(this.store.count())}W(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.G(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new m((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}j(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new m((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,t){E("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.G(s,t)}Z(e){const t=this.cursor({});return new m((r,s)=>{t.onerror=i=>{const o=qc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,t){const r=[];return new m((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new MI(a),u=t(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>m.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function bn(n){return new m((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=qc(r.target.error);t(s)}})}let Tl=!1;function qc(n){const e=_t.S(Ta());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Tl||(Tl=!0,setTimeout(()=>{throw r},0)),r}}return n}class LI{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){E("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{E("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(t){gn(t)?E("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await pn(t)}await this.ee(6e4)})}}class BI{constructor(e,t){this.localStore=e,this.persistence=t}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ne(t,e))}ne(e,t){const r=new Set;let s=t,i=!0;return m.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return E("IndexBackiller",`Processing collection: ${o}`),this.re(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}re(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(s,i)).next(a=>(E("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ie(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=bf(i);Uc(o,r)>0&&(r=o)}),new ft(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.se(r),this.oe=r=>t.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}at._e=-1;function Ks(n){return n==null}function bs(n){return n===0&&1/n==-1/0}function Pf(n){return typeof n=="number"&&Number.isInteger(n)&&!bs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=wl(e)),e=UI(n.get(t),e);return wl(e)}function UI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function wl(n){return n+""}function At(n){const e=n.length;if(M(e>=2),e===2)return M(n.charAt(0)===""&&n.charAt(1)===""),J.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&V(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:V()}i=o+2}return new J(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n,e){return[n,rt(e)]}function Cf(n,e,t){return[n,rt(e),t]}const qI={},$I=["prefixPath","collectionGroup","readTime","documentId"],jI=["prefixPath","collectionGroup","documentId"],zI=["collectionGroup","readTime","prefixPath","documentId"],GI=["canonicalId","targetId"],KI=["targetId","path"],WI=["path","targetId"],HI=["collectionId","parent"],QI=["indexId","uid"],YI=["uid","sequenceNumber"],XI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],JI=["indexId","uid","orderedDocumentKey"],ZI=["userId","collectionPath","documentId"],eE=["userId","collectionPath","largestBatchId"],tE=["userId","collectionGroup","largestBatchId"],Df=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],nE=[...Df,"documentOverlays"],Vf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],xf=Vf,rE=[...xf,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends Sf{constructor(e,t){super(),this.ae=e,this.currentSequenceNumber=t}}function Le(n,e){const t=P(n);return _t.M(t.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function kf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){this.comparator=e,this.root=t||qe.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fi(this.root,e,this.comparator,!0)}}class fi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new qe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(e,t,r,s,i){return this}insert(e,t,r){return new qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bl(this.data.getIterator())}getIteratorFrom(e){return new bl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new oe(this.comparator);return t.data=e,t}}class bl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function nr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new ct([])}unionWith(e){let t=new oe(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ct(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Tr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nf("Invalid base64 string: "+i):i}}(e);return new Ve(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const iE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(n){if(M(!!n),typeof n=="string"){let e=0;const t=iE.exec(n);if(M(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(n.seconds),nanos:Ae(n.nanos)}}function Ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sn(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function $c(n){const e=n.mapValue.fields.__previous_value__;return vo(e)?$c(e):e}function Rs(n){const e=rn(n.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t,r,s,i,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class on{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new on("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof on&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ai={nullValue:"NULL_VALUE"};function Ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vo(n)?4:Of(n)?9007199254740991:10:V()}function Dt(n,e){if(n===e)return!0;const t=Ln(n);if(t!==Ln(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Rs(n).isEqual(Rs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=rn(s.timestampValue),a=rn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return sn(s.bytesValue).isEqual(sn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ae(s.geoPointValue.latitude)===Ae(i.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ae(s.integerValue)===Ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ae(s.doubleValue),a=Ae(i.doubleValue);return o===a?bs(o)===bs(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Tr(n.arrayValue.values||[],e.arrayValue.values||[],Dt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Al(o)!==Al(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Dt(o[c],a[c])))return!1;return!0}(n,e);default:return V()}}function Ss(n,e){return(n.values||[]).find(t=>Dt(t,e))!==void 0}function an(n,e){if(n===e)return 0;const t=Ln(n),r=Ln(e);if(t!==r)return j(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ae(i.integerValue||i.doubleValue),c=Ae(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Rl(n.timestampValue,e.timestampValue);case 4:return Rl(Rs(n),Rs(e));case 5:return j(n.stringValue,e.stringValue);case 6:return function(i,o){const a=sn(i),c=sn(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=j(a[u],c[u]);if(l!==0)return l}return j(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=j(Ae(i.latitude),Ae(o.latitude));return a!==0?a:j(Ae(i.longitude),Ae(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=an(a[u],c[u]);if(l)return l}return j(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Yt.mapValue&&o===Yt.mapValue)return 0;if(i===Yt.mapValue)return 1;if(o===Yt.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=j(c[h],l[h]);if(d!==0)return d;const f=an(a[c[h]],u[l[h]]);if(f!==0)return f}return j(c.length,l.length)}(n.mapValue,e.mapValue);default:throw V()}}function Rl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=rn(n),r=rn(e),s=j(t.seconds,r.seconds);return s!==0?s:j(t.nanos,r.nanos)}function wr(n){return Ua(n)}function Ua(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=rn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return sn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return R.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ua(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ua(t.fields[o])}`;return s+"}"}(n.mapValue):V()}function Bn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function qa(n){return!!n&&"integerValue"in n}function Ps(n){return!!n&&"arrayValue"in n}function Sl(n){return!!n&&"nullValue"in n}function Pl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bi(n){return!!n&&"mapValue"in n}function is(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Yn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=is(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=is(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Of(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function aE(n){return"nullValue"in n?Ai:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Bn(on.empty(),R.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:V()}function cE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Bn(on.empty(),R.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Yt:V()}function Cl(n,e){const t=an(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Dl(n,e){const t=an(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=is(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=is(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());bi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];bi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Yn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new je(is(this.value))}}function Mf(n){const e=[];return Yn(n.fields,(t,r)=>{const s=new ge([t]);if(bi(r)){const i=Mf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new fe(e,0,O.min(),O.min(),O.min(),je.empty(),0)}static newFoundDocument(e,t,r,s){return new fe(e,1,t,O.min(),r,s,0)}static newNoDocument(e,t){return new fe(e,2,t,O.min(),O.min(),je.empty(),0)}static newUnknownDocument(e,t){return new fe(e,3,t,O.min(),O.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.position=e,this.inclusive=t}}function Vl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=R.comparator(R.fromName(o.referenceValue),t.key):r=an(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function xl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Dt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t="asc"){this.field=e,this.dir=t}}function uE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{}class K extends Ff{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new lE(e,t,r):t==="array-contains"?new fE(e,r):t==="in"?new jf(e,r):t==="not-in"?new mE(e,r):t==="array-contains-any"?new pE(e,r):new K(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new hE(e,r):new dE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(an(t,this.value)):t!==null&&Ln(this.value)===Ln(t)&&this.matchesComparison(an(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends Ff{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new ne(e,t)}matches(e){return vr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function vr(n){return n.op==="and"}function $a(n){return n.op==="or"}function jc(n){return Lf(n)&&vr(n)}function Lf(n){for(const e of n.filters)if(e instanceof ne)return!1;return!0}function ja(n){if(n instanceof K)return n.field.canonicalString()+n.op.toString()+wr(n.value);if(jc(n))return n.filters.map(e=>ja(e)).join(",");{const e=n.filters.map(t=>ja(t)).join(",");return`${n.op}(${e})`}}function Bf(n,e){return n instanceof K?function(r,s){return s instanceof K&&r.op===s.op&&r.field.isEqual(s.field)&&Dt(r.value,s.value)}(n,e):n instanceof ne?function(r,s){return s instanceof ne&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Bf(o,s.filters[a]),!0):!1}(n,e):void V()}function Uf(n,e){const t=n.filters.concat(e);return ne.create(t,n.op)}function qf(n){return n instanceof K?function(t){return`${t.field.canonicalString()} ${t.op} ${wr(t.value)}`}(n):n instanceof ne?function(t){return t.op.toString()+" {"+t.getFilters().map(qf).join(" ,")+"}"}(n):"Filter"}class lE extends K{constructor(e,t,r){super(e,t,r),this.key=R.fromName(r.referenceValue)}matches(e){const t=R.comparator(e.key,this.key);return this.matchesComparison(t)}}class hE extends K{constructor(e,t){super(e,"in",t),this.keys=$f("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class dE extends K{constructor(e,t){super(e,"not-in",t),this.keys=$f("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $f(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>R.fromName(r.referenceValue))}class fE extends K{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ps(t)&&Ss(t.arrayValue,this.value)}}class jf extends K{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ss(this.value.arrayValue,t)}}class mE extends K{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ss(this.value.arrayValue,t)}}class pE extends K{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ps(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ss(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function za(n,e=null,t=[],r=[],s=null,i=null,o=null){return new gE(n,e,t,r,s,i,o)}function Un(n){const e=P(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ja(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ks(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>wr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>wr(r)).join(",")),e.ce=t}return e.ce}function Ws(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!uE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Bf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!xl(n.startAt,e.startAt)&&xl(n.endAt,e.endAt)}function qi(n){return R.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function $i(n,e){return n.filters.filter(t=>t instanceof K&&t.field.isEqual(e))}function kl(n,e,t){let r=Ai,s=!0;for(const i of $i(n,e)){let o=Ai,a=!0;switch(i.op){case"<":case"<=":o=aE(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Ai}Cl({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Cl({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Nl(n,e,t){let r=Yt,s=!0;for(const i of $i(n,e)){let o=Yt,a=!0;switch(i.op){case">=":case">":o=cE(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Yt}Dl({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Dl({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function zf(n,e,t,r,s,i,o,a){return new Ut(n,e,t,r,s,i,o,a)}function Mr(n){return new Ut(n)}function Ol(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zc(n){return n.collectionGroup!==null}function gr(n){const e=P(n);if(e.le===null){e.le=[];const t=new Set;for(const i of e.explicitOrderBy)e.le.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new oe(ge.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.le.push(new Cs(i,r))}),t.has(ge.keyField().canonicalString())||e.le.push(new Cs(ge.keyField(),r))}return e.le}function st(n){const e=P(n);return e.he||(e.he=_E(e,gr(n))),e.he}function _E(n,e){if(n.limitType==="F")return za(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Cs(s.field,i)});const t=n.endAt?new cn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new cn(n.startAt.position,n.startAt.inclusive):null;return za(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ga(n,e){const t=n.filters.concat([e]);return new Ut(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ji(n,e,t){return new Ut(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Hs(n,e){return Ws(st(n),st(e))&&n.limitType===e.limitType}function Gf(n){return`${Un(st(n))}|lt:${n.limitType}`}function ur(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>qf(s)).join(", ")}]`),Ks(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>wr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>wr(s)).join(",")),`Target(${r})`}(st(n))}; limitType=${n.limitType})`}function Qs(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):R.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of gr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Vl(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,gr(r),s)||r.endAt&&!function(o,a,c){const u=Vl(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,gr(r),s))}(n,e)}function Kf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Wf(n){return(e,t)=>{let r=!1;for(const s of gr(n)){const i=yE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yE(n,e,t){const r=n.field.isKeyField()?R.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?an(c,u):V()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Yn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return kf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=new le(R.comparator);function ut(){return IE}const Hf=new le(R.comparator);function es(...n){let e=Hf;for(const t of n)e=e.insert(t.key,t);return e}function Qf(n){let e=Hf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function bt(){return os()}function Yf(){return os()}function os(){return new _n(n=>n.toString(),(n,e)=>n.isEqual(e))}const EE=new le(R.comparator),TE=new oe(R.comparator);function z(...n){let e=TE;for(const t of n)e=e.add(t);return e}const wE=new oe(j);function Gc(){return wE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bs(e)?"-0":e}}function Jf(n){return{integerValue:""+n}}function Zf(n,e){return Pf(e)?Jf(e):Xf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this._=void 0}}function vE(n,e,t){return n instanceof Ar?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vo(i)&&(i=$c(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof qn?tm(n,e):n instanceof $n?nm(n,e):function(s,i){const o=em(s,i),a=Ml(o)+Ml(s.Ie);return qa(o)&&qa(s.Ie)?Jf(a):Xf(s.serializer,a)}(n,e)}function AE(n,e,t){return n instanceof qn?tm(n,e):n instanceof $n?nm(n,e):t}function em(n,e){return n instanceof br?function(r){return qa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ar extends Ao{}class qn extends Ao{constructor(e){super(),this.elements=e}}function tm(n,e){const t=rm(e);for(const r of n.elements)t.some(s=>Dt(s,r))||t.push(r);return{arrayValue:{values:t}}}class $n extends Ao{constructor(e){super(),this.elements=e}}function nm(n,e){let t=rm(e);for(const r of n.elements)t=t.filter(s=>!Dt(s,r));return{arrayValue:{values:t}}}class br extends Ao{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Ml(n){return Ae(n.integerValue||n.doubleValue)}function rm(n){return Ps(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t){this.field=e,this.transform=t}}function bE(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof qn&&s instanceof qn||r instanceof $n&&s instanceof $n?Tr(r.elements,s.elements,Dt):r instanceof br&&s instanceof br?Dt(r.Ie,s.Ie):r instanceof Ar&&s instanceof Ar}(n.transform,e.transform)}class RE{constructor(e,t){this.version=e,this.transformResults=t}}class _e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _e}static exists(e){return new _e(void 0,e)}static updateTime(e){return new _e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ri(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bo{}function sm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Lr(n.key,_e.none()):new Fr(n.key,n.data,_e.none());{const t=n.data,r=je.empty();let s=new oe(ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new qt(n.key,r,new ct(s.toArray()),_e.none())}}function SE(n,e,t){n instanceof Fr?function(s,i,o){const a=s.value.clone(),c=Ll(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof qt?function(s,i,o){if(!Ri(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ll(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(im(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function as(n,e,t,r){return n instanceof Fr?function(i,o,a,c){if(!Ri(i.precondition,o))return a;const u=i.value.clone(),l=Bl(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof qt?function(i,o,a,c){if(!Ri(i.precondition,o))return a;const u=Bl(i.fieldTransforms,c,o),l=o.data;return l.setAll(im(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(i,o,a){return Ri(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function PE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=em(r.transform,s||null);i!=null&&(t===null&&(t=je.empty()),t.set(r.field,i))}return t||null}function Fl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Tr(r,s,(i,o)=>bE(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fr extends bo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qt extends bo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function im(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ll(n,e,t){const r=new Map;M(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,AE(o,a,t[s]))}return r}function Bl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,vE(i,o,e))}return r}class Lr extends bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kc extends bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&SE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=as(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=as(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Yf();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=sm(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&Tr(this.mutations,e.mutations,(t,r)=>Fl(t,r))&&Tr(this.baseMutations,e.baseMutations,(t,r)=>Fl(t,r))}}class Hc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){M(e.mutations.length===r.length);let s=function(){return EE}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,X;function om(n){switch(n){default:return V();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function am(n){if(n===void 0)return Se("GRPC error has no .code"),g.UNKNOWN;switch(n){case Ce.OK:return g.OK;case Ce.CANCELLED:return g.CANCELLED;case Ce.UNKNOWN:return g.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return g.INTERNAL;case Ce.UNAVAILABLE:return g.UNAVAILABLE;case Ce.UNAUTHENTICATED:return g.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case Ce.NOT_FOUND:return g.NOT_FOUND;case Ce.ALREADY_EXISTS:return g.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return g.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case Ce.ABORTED:return g.ABORTED;case Ce.OUT_OF_RANGE:return g.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return g.UNIMPLEMENTED;case Ce.DATA_LOSS:return g.DATA_LOSS;default:return V()}}(X=Ce||(Ce={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=new pr([4294967295,4294967295],0);function Ul(n){const e=cm().encode(n),t=new AI;return t.update(e),new Uint8Array(t.digest())}function ql(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new pr([t,r],0),new pr([s,i],0)]}class Yc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ts(`Invalid padding: ${t}`);if(r<0)throw new ts(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ts(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ts(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=pr.fromNumber(this.Te)}de(e,t,r){let s=e.add(t.multiply(pr.fromNumber(r)));return s.compare(DE)===1&&(s=new pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Ul(e),[r,s]=ql(t);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Yc(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=Ul(e),[r,s]=ql(t);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Js.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Xs(O.min(),s,new le(j),ut(),z())}}class Js{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Js(r,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,r,s){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=s}}class um{constructor(e,t){this.targetId=e,this.fe=t}}class lm{constructor(e,t,r=Ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class $l{constructor(){this.ge=0,this.pe=zl(),this.ye=Ve.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=z(),t=z(),r=z();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:V()}}),new Js(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=zl()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class VE{constructor(e){this.Le=e,this.ke=new Map,this.qe=ut(),this.Qe=jl(),this.Ke=new le(j)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:V()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.fe.count,s=this.Ye(t);if(s){const i=s.target;if(qi(i))if(r===0){const o=new R(i.path);this.We(t,o,fe.newNoDocument(o,O.min()))}else M(r===1);else{const o=this.Ze(t);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=sn(r).toUint8Array()}catch(c){if(c instanceof Nf)return It("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Yc(o,s,i)}catch(c){return It(c instanceof ts?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&qi(a.target)){const c=new R(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,fe.newNoDocument(c,e))}i.De&&(t.set(o,i.ve()),i.Fe())}});let r=z();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Xs(e,t,this.Ke,this.qe,r);return this.qe=ut(),this.Qe=jl(),this.Ke=new le(j),s}Ue(e,t){if(!this.je(e))return;const r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,t)?s.Me(t,1):s.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new $l,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new oe(j),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||E("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new $l),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function jl(){return new le(R.comparator)}function zl(){return new le(R.comparator)}const xE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),NE=(()=>({and:"AND",or:"OR"}))();class OE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ka(n,e){return n.useProto3Json||Ks(e)?e:{value:e}}function Rr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ME(n,e){return Rr(n,e.toTimestamp())}function Pe(n){return M(!!n),O.fromTimestamp(function(t){const r=rn(t);return new ye(r.seconds,r.nanos)}(n))}function Xc(n,e){return function(r){return new J(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function dm(n){const e=J.fromString(n);return M(Tm(e)),e}function Ds(n,e){return Xc(n.databaseId,e.path)}function Pt(n,e){const t=dm(e);if(t.get(1)!==n.databaseId.projectId)throw new I(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new I(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new R(mm(t))}function Wa(n,e){return Xc(n.databaseId,e)}function fm(n){const e=dm(n);return e.length===4?J.emptyPath():mm(e)}function Vs(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mm(n){return M(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Gl(n,e,t){return{name:Ds(n,e),fields:t.value.mapValue.fields}}function pm(n,e,t){const r=Pt(n,e.name),s=Pe(e.updateTime),i=e.createTime?Pe(e.createTime):O.min(),o=new je({mapValue:{fields:e.fields}}),a=fe.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function FE(n,e){return"found"in e?function(r,s){M(!!s.found),s.found.name,s.found.updateTime;const i=Pt(r,s.found.name),o=Pe(s.found.updateTime),a=s.found.createTime?Pe(s.found.createTime):O.min(),c=new je({mapValue:{fields:s.found.fields}});return fe.newFoundDocument(i,o,a,c)}(n,e):"missing"in e?function(r,s){M(!!s.missing),M(!!s.readTime);const i=Pt(r,s.missing),o=Pe(s.readTime);return fe.newNoDocument(i,o)}(n,e):V()}function LE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(M(l===void 0||typeof l=="string"),Ve.fromBase64String(l||"")):(M(l===void 0||l instanceof Uint8Array),Ve.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?g.UNKNOWN:am(u.code);return new I(l,u.message||"")}(o);t=new lm(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pt(n,r.document.name),i=Pe(r.document.updateTime),o=r.document.createTime?Pe(r.document.createTime):O.min(),a=new je({mapValue:{fields:r.document.fields}}),c=fe.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Si(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pt(n,r.document),i=r.readTime?Pe(r.readTime):O.min(),o=fe.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Si([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pt(n,r.document),i=r.removedTargetIds||[];t=new Si([],i,s,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new CE(s,i),a=r.targetId;t=new um(a,o)}}return t}function xs(n,e){let t;if(e instanceof Fr)t={update:Gl(n,e.key,e.value)};else if(e instanceof Lr)t={delete:Ds(n,e.key)};else if(e instanceof qt)t={update:Gl(n,e.key,e.data),updateMask:zE(e.fieldMask)};else{if(!(e instanceof Kc))return V();t={verify:Ds(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ar)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof qn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof $n)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof br)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw V()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ME(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V()}(n,e.precondition)),t}function Ha(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?_e.updateTime(Pe(i.updateTime)):i.exists!==void 0?_e.exists(i.exists):_e.none()}(e.currentDocument):_e.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let c=null;if("setToServerValue"in a)M(a.setToServerValue==="REQUEST_TIME"),c=new Ar;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new qn(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new $n(l)}else"increment"in a?c=new br(o,a.increment):V();const u=ge.fromServerFormat(a.fieldPath);return new Ys(u,c)}(n,s)):[];if(e.update){e.update.name;const s=Pt(n,e.update.name),i=new je({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new ct(u.map(l=>ge.fromServerFormat(l)))}(e.updateMask);return new qt(s,i,o,t,r)}return new Fr(s,i,t,r)}if(e.delete){const s=Pt(n,e.delete);return new Lr(s,t)}if(e.verify){const s=Pt(n,e.verify);return new Kc(s,t)}return V()}function BE(n,e){return n&&n.length>0?(M(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?Pe(s.updateTime):Pe(i);return o.isEqual(O.min())&&(o=Pe(i)),new RE(o,s.transformResults||[])}(t,e))):[]}function gm(n,e){return{documents:[Wa(n,e.path)]}}function _m(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Wa(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Wa(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Em(ne.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:lr(h.field),direction:qE(h.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=Ka(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function ym(n){let e=fm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){M(r===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(h){const d=Im(h);return d instanceof ne&&jc(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(p){return new Cs(hr(p.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ks(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new cn(f,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new cn(f,d)}(t.endAt)),zf(e,s,o,i,a,"F",c,u)}function UE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return V()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Im(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=hr(t.unaryFilter.field);return K.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hr(t.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hr(t.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hr(t.unaryFilter.field);return K.create(o,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(n):n.fieldFilter!==void 0?function(t){return K.create(hr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ne.create(t.compositeFilter.filters.map(r=>Im(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return V()}}(t.compositeFilter.op))}(n):V()}function qE(n){return xE[n]}function $E(n){return kE[n]}function jE(n){return NE[n]}function lr(n){return{fieldPath:n.canonicalString()}}function hr(n){return ge.fromServerFormat(n.fieldPath)}function Em(n){return n instanceof K?function(t){if(t.op==="=="){if(Pl(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NAN"}};if(Sl(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pl(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NOT_NAN"}};if(Sl(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lr(t.field),op:$E(t.op),value:t.value}}}(n):n instanceof ne?function(t){const r=t.getFilters().map(s=>Em(s));return r.length===1?r[0]:{compositeFilter:{op:jE(t.op),filters:r}}}(n):V()}function zE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Tm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t,r,s,i=O.min(),o=O.min(),a=Ve.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Nt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.ut=e}}function GE(n,e){let t;if(e.document)t=pm(n.ut,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=R.fromSegments(e.noDocument.path),s=zn(e.noDocument.readTime);t=fe.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return V();{const r=R.fromSegments(e.unknownDocument.path),s=zn(e.unknownDocument.version);t=fe.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new ye(s[0],s[1]);return O.fromTimestamp(i)}(e.readTime)),t}function Kl(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:zi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Ds(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Rr(i,o.version.toTimestamp()),createTime:Rr(i,o.createTime.toTimestamp())}}(n.ut,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:jn(e.version)};else{if(!e.isUnknownDocument())return V();r.unknownDocument={path:t.path.toArray(),version:jn(e.version)}}return r}function zi(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function jn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function zn(n){const e=new ye(n.seconds,n.nanoseconds);return O.fromTimestamp(e)}function Rn(n,e){const t=(e.baseMutations||[]).map(i=>Ha(n.ut,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Ha(n.ut,i)),s=ye.fromMillis(e.localWriteTimeMs);return new Wc(e.batchId,s,t,r)}function ns(n){const e=zn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?zn(n.lastLimboFreeSnapshotVersion):O.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return M(i.documents.length===1),st(Mr(fm(i.documents[0])))}(n.query):function(i){return st(ym(i))}(n.query),new Nt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ve.fromBase64String(n.resumeToken))}function vm(n,e){const t=jn(e.snapshotVersion),r=jn(e.lastLimboFreeSnapshotVersion);let s;s=qi(e.target)?gm(n.ut,e.target):_m(n.ut,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Un(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Jc(n){const e=ym({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ji(e,e.limit,"L"):e}function da(n,e){return new Qc(e.largestBatchId,Ha(n.ut,e.overlayMutation))}function Wl(n,e){const t=e.path.lastSegment();return[n,rt(e.path.popLast()),t]}function Hl(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:jn(r.readTime),documentKey:rt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{getBundleMetadata(e,t){return Ql(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:zn(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Ql(e).put(function(s){return{bundleId:s.id,createTime:jn(Pe(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Yl(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:Jc(i.bundledQuery),readTime:zn(i.readTime)}}(r)})}saveNamedQuery(e,t){return Yl(e).put(function(s){return{name:s.name,readTime:jn(Pe(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Ql(n){return Le(n,"bundles")}function Yl(n){return Le(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){this.serializer=e,this.userId=t}static ct(e,t){const r=t.uid||"";return new Ro(e,r)}getOverlay(e,t){return Kr(e).get(Wl(this.userId,t)).next(r=>r?da(this.serializer,r):null)}getOverlays(e,t){const r=bt();return m.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new Qc(t,o);s.push(this.lt(e,a))}),m.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(rt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Kr(e).H("collectionPathOverlayIndex",a))}),m.waitFor(i)}getOverlaysForCollection(e,t,r){const s=bt(),i=rt(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Kr(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=da(this.serializer,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=bt();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Kr(e).Y({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=da(this.serializer,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}lt(e,t){return Kr(e).put(function(s,i,o){const[a,c,u]=Wl(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:xs(s.ut,o.mutation)}}(this.serializer,this.userId,t))}}function Kr(n){return Le(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(Ae(e.integerValue));else if("doubleValue"in e){const r=Ae(e.doubleValue);isNaN(r)?this.Tt(t,13):(this.Tt(t,15),bs(r)?t.Et(0):t.Et(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Tt(t,20),typeof r=="string"?t.dt(r):(t.dt(`${r.seconds||""}`),t.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(sn(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Tt(t,45),t.Et(r.latitude||0),t.Et(r.longitude||0)}else"mapValue"in e?Of(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):V()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){const r=e.fields||{};this.Tt(t,55);for(const s of Object.keys(r))this.At(s,t),this.Pt(r[s],t)}yt(e,t){const r=e.values||[];this.Tt(t,50);for(const s of r)this.Pt(s,t)}ft(e,t){this.Tt(t,37),R.fromName(e).path.forEach(r=>{this.Tt(t,60),this.wt(r,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}Sn.St=new Sn;function WE(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Xl(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=WE(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class HE{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Dt(r.value),r=t.next();this.Ct()}vt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const s=t.codePointAt(0);this.Dt(240|s>>>18),this.Dt(128|63&s>>>12),this.Dt(128|63&s>>>6),this.Dt(128|63&s)}}this.Ct()}Ot(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Nt(e){const t=this.Bt(e),r=Xl(t);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}kt(e){const t=this.Bt(e),r=Xl(t);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Dt(e){const t=255&e;t===0?(this.Qt(0),this.Qt(255)):t===255?(this.Qt(255),this.Qt(0)):this.Qt(t)}Ft(e){const t=255&e;t===0?(this.$t(0),this.$t(255)):t===255?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class QE{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class YE{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class Wr{constructor(){this.Wt=new HE,this.Gt=new QE(this.Wt),this.zt=new YE(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return e===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Ht(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Pn(this.indexId,this.documentKey,this.arrayValue,r)}}function Gt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Jl(n.arrayValue,e.arrayValue),t!==0?t:(t=Jl(n.directionalValue,e.directionalValue),t!==0?t:R.comparator(n.documentKey,e.documentKey)))}function Jl(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.Jt=new oe((t,r)=>ge.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const t of e.filters){const r=t;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(e){if(M(e.collectionGroup===this.collectionId),this.Xt)return!1;const t=La(e);if(t!==void 0&&!this.tn(t))return!1;const r=An(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.tn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!s.has(a.field.canonicalString())){const c=r[i];if(!this.nn(a,c)||!this.rn(this.Yt[o++],c))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let e=new oe(ge.comparator);const t=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new wi(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new wi(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new wi(r.field,r.dir==="asc"?0:1)));return new Ui(Ui.UNKNOWN_ID,this.collectionId,t,As.empty())}tn(e){for(const t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(n){var e,t;if(M(n instanceof K||n instanceof ne),n instanceof K){if(n instanceof jf){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>K.create(n.field,"==",i)))||[];return ne.create(s,"or")}return n}const r=n.filters.map(s=>Am(s));return ne.create(r,n.op)}function XE(n){if(n.getFilters().length===0)return[];const e=Xa(Am(n));return M(bm(e)),Qa(e)||Ya(e)?[e]:e.getFilters()}function Qa(n){return n instanceof K}function Ya(n){return n instanceof ne&&jc(n)}function bm(n){return Qa(n)||Ya(n)||function(t){if(t instanceof ne&&$a(t)){for(const r of t.getFilters())if(!Qa(r)&&!Ya(r))return!1;return!0}return!1}(n)}function Xa(n){if(M(n instanceof K||n instanceof ne),n instanceof K)return n;if(n.filters.length===1)return Xa(n.filters[0]);const e=n.filters.map(r=>Xa(r));let t=ne.create(e,n.op);return t=Gi(t),bm(t)?t:(M(t instanceof ne),M(vr(t)),M(t.filters.length>1),t.filters.reduce((r,s)=>Zc(r,s)))}function Zc(n,e){let t;return M(n instanceof K||n instanceof ne),M(e instanceof K||e instanceof ne),t=n instanceof K?e instanceof K?function(s,i){return ne.create([s,i],"and")}(n,e):eh(n,e):e instanceof K?eh(e,n):function(s,i){if(M(s.filters.length>0&&i.filters.length>0),vr(s)&&vr(i))return Uf(s,i.getFilters());const o=$a(s)?s:i,a=$a(s)?i:s,c=o.filters.map(u=>Zc(u,a));return ne.create(c,"or")}(n,e),Gi(t)}function eh(n,e){if(vr(e))return Uf(e,n.getFilters());{const t=e.filters.map(r=>Zc(n,r));return ne.create(t,"or")}}function Gi(n){if(M(n instanceof K||n instanceof ne),n instanceof K)return n;const e=n.getFilters();if(e.length===1)return Gi(e[0]);if(Lf(n))return n;const t=e.map(s=>Gi(s)),r=[];return t.forEach(s=>{s instanceof K?r.push(s):s instanceof ne&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:ne.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.on=new eu}addToCollectionParentIndex(e,t){return this.on.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}deleteAllFieldIndexes(e){return m.resolve()}createTargetIndexes(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(ft.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(ft.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class eu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new oe(J.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new oe(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new Uint8Array(0);class ZE{constructor(e,t){this.user=e,this.databaseId=t,this._n=new eu,this.an=new _n(r=>Un(r),(r,s)=>Ws(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this._n.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this._n.add(t)});const i={collectionId:r,parent:rt(s)};return th(e).put(i)}return m.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[vf(t),""],!1,!0);return th(e).W(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(At(o.parent))}return r})}addFieldIndex(e,t){const r=Hr(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=sr(e);return i.next(a=>{o.put(Hl(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Hr(e),s=sr(e),i=rr(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Hr(e),r=rr(e),s=sr(e);return t.H().next(()=>r.H()).next(()=>s.H())}createTargetIndexes(e,t){return m.forEach(this.un(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new Zl(r).sn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=rr(e);let s=!0;const i=new Map;return m.forEach(this.un(t),o=>this.cn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=z();const a=[];return m.forEach(i,(c,u)=>{E("IndexedDbIndexManager",`Using index ${function(S){return`id=${S.indexId}|cg=${S.collectionGroup}|f=${S.fields.map(N=>`${N.fieldPath}:${N.kind}`).join(",")}`}(c)} to execute ${Un(t)}`);const l=function(S,N){const F=La(N);if(F===void 0)return null;for(const b of $i(S,F.fieldPath))switch(b.op){case"array-contains-any":return b.value.arrayValue.values||[];case"array-contains":return[b.value]}return null}(u,c),h=function(S,N){const F=new Map;for(const b of An(N))for(const x of $i(S,b.fieldPath))switch(x.op){case"==":case"in":F.set(b.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return F.set(b.fieldPath.canonicalString(),x.value),Array.from(F.values())}return null}(u,c),d=function(S,N){const F=[];let b=!0;for(const x of An(N)){const Q=x.kind===0?kl(S,x.fieldPath,S.startAt):Nl(S,x.fieldPath,S.startAt);F.push(Q.value),b&&(b=Q.inclusive)}return new cn(F,b)}(u,c),f=function(S,N){const F=[];let b=!0;for(const x of An(N)){const Q=x.kind===0?Nl(S,x.fieldPath,S.endAt):kl(S,x.fieldPath,S.endAt);F.push(Q.value),b&&(b=Q.inclusive)}return new cn(F,b)}(u,c),p=this.ln(c,u,d),_=this.ln(c,u,f),y=this.hn(c,u,h),A=this.Pn(c.indexId,l,p,d.inclusive,_,f.inclusive,y);return m.forEach(A,v=>r.j(v,t.limit).next(S=>{S.forEach(N=>{const F=R.fromSegments(N.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return m.resolve(null)})}un(e){let t=this.an.get(e);return t||(e.filters.length===0?t=[e]:t=XE(ne.create(e.filters,"and")).map(r=>za(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,t),t)}Pn(e,t,r,s,i,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,i.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.In(t[h/u]):mi,f=this.Tn(e,d,r[h%u],s),p=this.En(e,d,i[h%u],o),_=a.map(y=>this.Tn(e,d,y,!0));l.push(...this.createRange(f,p,_))}return l}Tn(e,t,r,s){const i=new Pn(e,R.empty(),t,r);return s?i:i.Ht()}En(e,t,r,s){const i=new Pn(e,R.empty(),t,r);return s?i.Ht():i}cn(e,t){const r=new Zl(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.un(t);return m.forEach(s,i=>this.cn(e,i).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new oe(ge.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}dn(e,t){const r=new Wr;for(const s of An(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.jt(s.kind);Sn.St.ht(i,o)}return r.Ut()}In(e){const t=new Wr;return Sn.St.ht(e,t.jt(0)),t.Ut()}An(e,t){const r=new Wr;return Sn.St.ht(Bn(this.databaseId,t),r.jt(function(i){const o=An(i);return o.length===0?0:o[o.length-1].kind}(e))),r.Ut()}hn(e,t,r){if(r===null)return[];let s=[];s.push(new Wr);let i=0;for(const o of An(e)){const a=r[i++];for(const c of s)if(this.Rn(t,o.fieldPath)&&Ps(a))s=this.Vn(s,o,a);else{const u=c.jt(o.kind);Sn.St.ht(a,u)}}return this.mn(s)}ln(e,t,r){return this.hn(e,t,r.position)}mn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Ut();return t}Vn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new Wr;c.seed(a.Ut()),Sn.St.ht(o,c.jt(t.kind)),i.push(c)}return i}Rn(e,t){return!!e.filters.find(r=>r instanceof K&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Hr(e),s=sr(e);return(t?r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.W()).next(i=>{const o=[];return m.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new As(h.sequenceNumber,new ft(zn(h.readTime),new R(At(h.documentKey)),h.largestBatchId)):As.empty(),f=l.fields.map(([p,_])=>new wi(ge.fromServerFormat(p),_));return new Ui(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:j(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Hr(e),i=sr(e);return this.fn(e).next(o=>s.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>i.put(Hl(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return m.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),m.forEach(a,c=>this.gn(e,s,c).next(u=>{const l=this.pn(i,c);return u.isEqual(l)?m.resolve():this.yn(e,i,c,u,l)}))))})}wn(e,t,r,s){return rr(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.An(r,t.key),documentKey:t.key.path.toArray()})}Sn(e,t,r,s){return rr(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.An(r,t.key),t.key.path.toArray()])}gn(e,t,r){const s=rr(e);let i=new oe(Gt);return s.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,t)])},(o,a)=>{i=i.add(new Pn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}pn(e,t){let r=new oe(Gt);const s=this.dn(t,e);if(s==null)return r;const i=La(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ps(o))for(const a of o.arrayValue.values||[])r=r.add(new Pn(t.indexId,e.key,this.In(a),s))}else r=r.add(new Pn(t.indexId,e.key,mi,s));return r}yn(e,t,r,s,i){E("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),p=u.getIterator();let _=nr(f),y=nr(p);for(;_||y;){let A=!1,v=!1;if(_&&y){const S=l(_,y);S<0?v=!0:S>0&&(A=!0)}else _!=null?v=!0:A=!0;A?(h(y),y=nr(p)):v?(d(_),_=nr(f)):(_=nr(f),y=nr(p))}}(s,i,Gt,a=>{o.push(this.wn(e,t,r,a))},a=>{o.push(this.Sn(e,t,r,a))}),m.waitFor(o)}fn(e){let t=1;return sr(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Gt(o,a)).filter((o,a,c)=>!a||Gt(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Gt(o,e),c=Gt(o,t);if(a===0)s[0]=e.Ht();else if(a>0&&c<0)s.push(o),s.push(o.Ht());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.bn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,mi,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,mi,[]];i.push(IDBKeyRange.bound(a,c))}return i}bn(e,t){return Gt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(nh)}getMinOffset(e,t){return m.mapArray(this.un(t),r=>this.cn(e,r).next(s=>s||V())).next(nh)}}function th(n){return Le(n,"collectionParents")}function rr(n){return Le(n,"indexEntries")}function Hr(n){return Le(n,"indexConfiguration")}function sr(n){return Le(n,"indexState")}function nh(n){M(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Uc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new ft(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ot{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Y({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{M(a===1)}));const u=[];for(const l of t.mutations){const h=Cf(e,l.key.path,t.batchId);i.push(s.delete(h)),u.push(l.key)}return m.waitFor(i).next(()=>u)}function Ki(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw V();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(41943040,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);class So{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Dn={}}static ct(e,t,r,s){M(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new So(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Kt(e).Y({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=dr(e),o=Kt(e);return o.add({}).next(a=>{M(typeof a=="number");const c=new Wc(a,t,r,s),u=function(f,p,_){const y=_.baseMutations.map(v=>xs(f.ut,v)),A=_.mutations.map(v=>xs(f.ut,v));return{userId:p,batchId:_.batchId,localWriteTimeMs:_.localWriteTime.toMillis(),baseMutations:y,mutations:A}}(this.serializer,this.userId,c),l=[];let h=new oe((d,f)=>j(d.canonicalString(),f.canonicalString()));for(const d of s){const f=Cf(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(f,qI))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Dn[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return Kt(e).get(t).next(r=>r?(M(r.userId===this.userId),Rn(this.serializer,r)):null)}Cn(e,t){return this.Dn[t]?m.resolve(this.Dn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Dn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Kt(e).Y({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(M(a.batchId>=r),i=Rn(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Kt(e).Y({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Kt(e).W("userMutationsIndex",t).next(r=>r.map(s=>Rn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=vi(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return dr(e).Y({range:s},(o,a,c)=>{const[u,l,h]=o,d=At(l);if(u===this.userId&&t.path.isEqual(d))return Kt(e).get(h).next(f=>{if(!f)throw V();M(f.userId===this.userId),i.push(Rn(this.serializer,f))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new oe(j);const s=[];return t.forEach(i=>{const o=vi(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=dr(e).Y({range:a},(u,l,h)=>{const[d,f,p]=u,_=At(f);d===this.userId&&i.path.isEqual(_)?r=r.add(p):h.done()});s.push(c)}),m.waitFor(s).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=vi(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new oe(j);return dr(e).Y({range:o},(c,u,l)=>{const[h,d,f]=c,p=At(d);h===this.userId&&r.isPrefixOf(p)?p.length===s&&(a=a.add(f)):l.done()}).next(()=>this.vn(e,a))}vn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Kt(e).get(i).next(o=>{if(o===null)throw V();M(o.userId===this.userId),r.push(Rn(this.serializer,o))}))}),m.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Rm(e.ae,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Fn(t.batchId)}),m.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return dr(e).Y({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=At(i[1]);s.push(c)}else a.done()}).next(()=>{M(s.length===0)})})}containsKey(e,t){return Sm(e,this.userId,t)}Mn(e){return Pm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Sm(n,e,t){const r=vi(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return dr(n).Y({range:i,J:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function Kt(n){return Le(n,"mutations")}function dr(n){return Le(n,"documentMutations")}function Pm(n){return Le(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Gn(0)}static Nn(){return new Gn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next(t=>{const r=new Gn(t.highestTargetId);return t.highestTargetId=r.next(),this.Ln(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(t=>O.fromTimestamp(new ye(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Bn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Ln(e,s)))}addTargetData(e,t){return this.kn(e,t).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(t,r),this.Ln(e,r))))}updateTargetData(e,t){return this.kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ir(e).delete(t.targetId)).next(()=>this.Bn(e)).next(r=>(M(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return ir(e).Y((o,a)=>{const c=ns(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(i)).next(()=>s)}forEachTarget(e,t){return ir(e).Y((r,s)=>{const i=ns(s);t(i)})}Bn(e){return sh(e).get("targetGlobalKey").next(t=>(M(t!==null),t))}Ln(e,t){return sh(e).put("targetGlobalKey",t)}kn(e,t){return ir(e).put(vm(this.serializer,t))}qn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Un(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return ir(e).Y({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=ns(a);Ws(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Ht(e);return t.forEach(o=>{const a=rt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),m.waitFor(s)}removeMatchingKeys(e,t,r){const s=Ht(e);return m.forEach(t,i=>{const o=rt(i.path);return m.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Ht(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Ht(e);let i=z();return s.Y({range:r,J:!0},(o,a,c)=>{const u=At(o[1]),l=new R(u);i=i.add(l)}).next(()=>i)}containsKey(e,t){const r=rt(t.path),s=IDBKeyRange.bound([r],[vf(r)],!1,!0);let i=0;return Ht(e).Y({index:"documentTargetsIndex",J:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}_t(e,t){return ir(e).get(t).next(r=>r?ns(r):null)}}function ir(n){return Le(n,"targets")}function sh(n){return Le(n,"targetGlobal")}function Ht(n){return Le(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih([n,e],[t,r]){const s=j(n,t);return s===0?j(e,r):s}class tT{constructor(e){this.Qn=e,this.buffer=new oe(ih),this.Kn=0}$n(){return++this.Kn}Un(e){const t=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ih(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){E("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gn(t)?E("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await pn(t)}await this.Gn(3e5)})}}class rT{constructor(e,t){this.zn=e,this.params=t}calculateTargetCount(e,t){return this.zn.jn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return m.resolve(at._e);const r=new tT(t);return this.zn.forEachTarget(e,s=>r.Un(s.sequenceNumber)).next(()=>this.zn.Hn(e,s=>r.Un(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(E("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(rh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rh):this.Jn(e,t))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,t){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(E("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),cr()<=H.DEBUG&&E("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function sT(n,e){return new rT(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,t){this.db=e,this.garbageCollector=sT(this,t)}jn(e){const t=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Yn(e){let t=0;return this.Hn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Hn(e,t){return this.Zn(e,(r,s)=>t(s))}addReference(e,t,r){return pi(e,r)}removeReference(e,t,r){return pi(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return pi(e,t)}Xn(e,t){return function(s,i){let o=!1;return Pm(s).Z(a=>Sm(s,a,i).next(c=>(c&&(o=!0),m.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Zn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,O.min()),Ht(e).delete(function(h){return[0,rt(h.path)]}(o))))});s.push(c)}}).next(()=>m.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return pi(e,t)}Zn(e,t){const r=Ht(e);let s,i=at._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==at._e&&t(new R(At(s)),i),i=u,s=c):i=at._e}).next(()=>{i!==at._e&&t(new R(At(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function pi(n,e){return Ht(n).put(function(r,s){return{targetId:0,path:rt(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.changes=new _n(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return wn(e).put(r)}removeEntry(e,t,r){return wn(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],zi(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.er(e,r)))}getEntry(e,t){let r=fe.newInvalidDocument(t);return wn(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Qr(t))},(s,i)=>{r=this.tr(t,i)}).next(()=>r)}nr(e,t){let r={size:0,document:fe.newInvalidDocument(t)};return wn(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Qr(t))},(s,i)=>{r={document:this.tr(t,i),size:Ki(i)}}).next(()=>r)}getEntries(e,t){let r=ut();return this.rr(e,t,(s,i)=>{const o=this.tr(s,i);r=r.insert(s,o)}).next(()=>r)}ir(e,t){let r=ut(),s=new le(R.comparator);return this.rr(e,t,(i,o)=>{const a=this.tr(i,o);r=r.insert(i,a),s=s.insert(i,Ki(o))}).next(()=>({documents:r,sr:s}))}rr(e,t,r){if(t.isEmpty())return m.resolve();let s=new oe(ch);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Qr(s.first()),Qr(s.last())),o=s.getIterator();let a=o.getNext();return wn(e).Y({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=R.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&ch(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.U(Qr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),zi(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return wn(e).W(IDBKeyRange.bound(a,c,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let l=ut();for(const h of u){const d=this.tr(R.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Qs(t,d)||s.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(e,t,r,s){let i=ut();const o=ah(t,r),a=ah(t,ft.max());return wn(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.tr(R.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new aT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return oh(e).get("remoteDocumentGlobalKey").next(t=>(M(!!t),t))}er(e,t){return oh(e).put("remoteDocumentGlobalKey",t)}tr(e,t){if(t){const r=GE(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(O.min())))return r}return fe.newInvalidDocument(e)}}function Dm(n){return new oT(n)}class aT extends Cm{constructor(e,t){super(),this._r=e,this.trackRemovals=t,this.ar=new _n(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new oe((i,o)=>j(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.ar.get(i);if(t.push(this._r.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=Kl(this._r.serializer,o);s=s.add(i.path.popLast());const u=Ki(c);r+=u-a.size,t.push(this._r.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=Kl(this._r.serializer,o.convertToNoDocument(O.min()));t.push(this._r.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this._r.indexManager.addToCollectionParentIndex(e,i))}),t.push(this._r.updateMetadata(e,r)),m.waitFor(t)}getFromCache(e,t){return this._r.nr(e,t).next(r=>(this.ar.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this._r.ir(e,t).next(({documents:r,sr:s})=>(s.forEach((i,o)=>{this.ar.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function oh(n){return Le(n,"remoteDocumentGlobal")}function wn(n){return Le(n,"remoteDocumentsV14")}function Qr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ah(n,e){const t=e.documentKey.path.toArray();return[n,zi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ch(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=j(t[i],r[i]),s)return s;return s=j(t.length,r.length),s||(s=j(t[t.length-2],r[r.length-2]),s||j(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&as(r.mutation,s,ct.empty(),ye.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=z()){const s=bt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=es();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=bt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,z()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=ut();const o=os(),a=function(){return os()}();return t.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof qt)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),as(l.mutation,u,l.mutation.getFieldMask(),ye.now())):o.set(u.key,ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new cT(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=os();let s=new le((o,a)=>o-a),i=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||ct.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||z()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Yf();l.forEach(d=>{if(!i.has(d)){const f=sm(t.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return R.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):m.resolve(bt());let a=-1,c=i;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,z())).next(l=>({batchId:a,changes:Qf(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new R(t)).next(r=>{let s=es();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=es();return this.indexManager.getCollectionParents(e,i).next(a=>m.forEach(a,c=>{const u=function(h,d){return new Ut(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,fe.newInvalidDocument(l)))});let a=es();return o.forEach((c,u)=>{const l=i.get(c);l!==void 0&&as(l.mutation,u,ct.empty(),ye.now()),Qs(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return m.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Pe(s.createTime)}}(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(s){return{name:s.name,query:Jc(s.bundledQuery),readTime:Pe(s.readTime)}}(t)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.overlays=new le(R.comparator),this.lr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=bt();return m.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.lt(e,t,i)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const s=bt(),i=t.length+1,o=new R(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return m.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new le((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=bt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=bt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return m.resolve(a)}lt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Qc(t,r));let i=this.lr.get(t);i===void 0&&(i=z(),this.lr.set(t,i)),this.lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.hr=new oe(xe.Pr),this.Ir=new oe(xe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const r=new xe(e,t);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.dr(new xe(e,t))}Ar(e,t){e.forEach(r=>this.removeReference(r,t))}Rr(e){const t=new R(new J([])),r=new xe(t,e),s=new xe(t,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new R(new J([])),r=new xe(t,e),s=new xe(t,e+1);let i=z();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new xe(e,0),r=this.hr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return R.comparator(e.key,t.key)||j(e.gr,t.gr)}static Tr(e,t){return j(e.gr,t.gr)||R.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new oe(xe.Pr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wc(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Sr(r),i=s<0?0:s;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new xe(t,0),s=new xe(t,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new oe(j);return t.forEach(s=>{const i=new xe(s,0),o=new xe(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),m.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;R.isDocumentKey(i)||(i=i.child(""));const o=new xe(new R(i),0);let a=new oe(j);return this.yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.gr)),!0)},o),m.resolve(this.br(a))}br(e){const t=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){M(this.Dr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return m.forEach(t.mutations,s=>{const i=new xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,t){const r=new xe(t,0),s=this.yr.firstAfterOrEqual(r);return m.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.Cr=e,this.docs=function(){return new le(R.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():fe.newInvalidDocument(t))}getEntries(e,t){let r=ut();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():fe.newInvalidDocument(s))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ut();const o=t.path,a=new R(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Uc(bf(l),r)<=0||(s.has(l.key)||Qs(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(e,t,r,s){V()}vr(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new fT(this)}getSize(e){return m.resolve(this.size)}}class fT extends Cm{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.persistence=e,this.Fr=new _n(t=>Un(t),Ws),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Mr=0,this.Or=new tu,this.targetCount=0,this.Nr=Gn.On()}forEachTarget(e,t){return this.Fr.forEach((r,s)=>t(s)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Mr&&(this.Mr=t),m.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new Gn(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.kn(t),m.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),m.waitFor(i).next(()=>s)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.Fr.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.Or.Er(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.Or.Ar(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Or.mr(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,t){this.Br={},this.overlays={},this.Lr=new at(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new mT(this),this.indexManager=new JE,this.remoteDocumentCache=function(s){return new dT(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new wm(t),this.Kr=new uT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new hT(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,r){E("MemoryPersistence","Starting transaction:",e);const s=new pT(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,t){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class pT extends Sf{constructor(e){super(),this.currentSequenceNumber=e}}class Po{constructor(e){this.persistence=e,this.Gr=new tu,this.zr=null}static jr(e){return new Po(e)}get Hr(){if(this.zr)return this.zr;throw V()}addReference(e,t,r){return this.Gr.addReference(r,t),this.Hr.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.Gr.removeReference(r,t),this.Hr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),m.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Hr,r=>{const s=R.fromPath(r);return this.Jr(e,s).next(i=>{i||t.removeEntry(s,O.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(r=>{r?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return m.or([()=>m.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.serializer=e}N(e,t,r,s){const i=new wo("createOrUpgrade",t);r<1&&s>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",vl,{unique:!0}),c.createObjectStore("documentMutations")}(e),uh(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return r<3&&s>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),uh(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:O.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").W().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",vl,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return m.waitFor(d)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Zr(i))),r<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(i)))),r<7&&s>=7&&(o=o.next(()=>this.ei(i))),r<8&&s>=8&&(o=o.next(()=>this.ti(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.ni(i))),r<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:ZI});u.createIndex("collectionPathOverlayIndex",eE,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",tE,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:$I});u.createIndex("documentKeyIndex",jI),u.createIndex("collectionGroupIndex",zI)}(e)).next(()=>this.ri(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ii(e,i))),r<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:QI}).createIndex("sequenceNumberIndex",YI,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:XI}).createIndex("documentKeyIndex",JI,{unique:!1})}(e))),o}Xr(e){let t=0;return e.store("remoteDocuments").Y((r,s)=>{t+=Ki(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.W().next(s=>m.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>m.forEach(a,c=>{M(c.userId===i.userId);const u=Rn(this.serializer,c);return Rm(e,i.userId,u).next(()=>{})}))}))}ei(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Y((o,a)=>{const c=new J(o),u=function(h){return[0,rt(h)]}(c);i.push(t.get(u).next(l=>l?m.resolve():(h=>t.put({targetId:0,path:rt(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(i))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:HI});const r=t.store("collectionParents"),s=new eu,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:rt(c)})}};return t.store("remoteDocuments").Y({J:!0},(o,a)=>{const c=new J(o);return i(c.popLast())}).next(()=>t.store("documentMutations").Y({J:!0},([o,a,c],u)=>{const l=At(a);return i(l.popLast())}))}ni(e){const t=e.store("targets");return t.Y((r,s)=>{const i=ns(s),o=vm(this.serializer,i);return t.put(o)})}ri(e,t){const r=t.store("remoteDocuments"),s=[];return r.Y((i,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new R(J.fromString(h.document.name).popFirst(5)):h.noDocument?R.fromSegments(h.noDocument.path):h.unknownDocument?R.fromSegments(h.unknownDocument.path):V()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))}).next(()=>m.waitFor(s))}ii(e,t){const r=t.store("mutations"),s=Dm(this.serializer),i=new xm(Po.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:z();Rn(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new ke(u),h=Ro.ct(this.serializer,l),d=i.getIndexManager(l),f=So.ct(l,this.serializer,d,i.referenceDelegate);return new Vm(s,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Ba(t,at._e),c).next()})})}}function uh(n){n.createObjectStore("targetDocuments",{keyPath:KI}).createIndex("documentTargetsIndex",WI,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",GI,{unique:!0}),n.createObjectStore("targetGlobal")}const fa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class nu{constructor(e,t,r,s,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.si=i,this.window=o,this.document=a,this.oi=u,this._i=l,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!nu.D())throw new I(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new iT(this,s),this.Ii=t+"main",this.serializer=new wm(c),this.Ti=new _t(this.Ii,this.ai,new gT(this.serializer)),this.qr=new eT(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Dm(this.serializer),this.Kr=new KE,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,l===!1&&Se("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new I(g.FAILED_PRECONDITION,fa);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new at(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>gi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(t=>this.isPrimary&&!t?this.pi(e).next(()=>!1):!!t&&this.yi(e).next(()=>!0))).catch(e=>{if(gn(e))return E("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return E("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return Yr(e).get("owner").next(t=>m.resolve(this.wi(t)))}Si(e){return gi(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Le(t,"clientMetadata");return r.W().next(s=>{const i=this.Ci(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const t of e)this.Ei.removeItem(this.vi(t.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?m.resolve(!0):Yr(e).get("owner").next(t=>{if(t!==null&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)){if(this.wi(t)&&this.networkEnabled)return!0;if(!this.wi(t)){if(!t.allowTabSynchronization)throw new I(g.FAILED_PRECONDITION,fa);return!1}}return!(!this.networkEnabled||!this.inForeground)||gi(e).W().next(r=>this.Ci(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&E("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ba(e,at._e);return this.pi(t).next(()=>this.Si(t))}),this.Ti.close(),this.Ni()}Ci(e,t){return e.filter(r=>this.Di(r.updateTimeMs,t)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>gi(e).W().next(t=>this.Ci(t,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,t){return So.ct(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ZE(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return Ro.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,t,r){E("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===15?rE:c===14?xf:c===13?Vf:c===12?nE:c===11?Df:void V()}(this.ai);let o;return this.Ti.runTransaction(e,s,i,a=>(o=new Ba(a,this.Lr?this.Lr.next():at._e),t==="readwrite-primary"?this.fi(o).next(c=>!!c||this.gi(o)).next(c=>{if(!c)throw Se(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new I(g.FAILED_PRECONDITION,Rf);return r(o)}).next(c=>this.yi(o).next(()=>c)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(e){return Yr(e).get("owner").next(t=>{if(t!==null&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)&&!this.wi(t)&&!(this._i||this.allowTabSynchronization&&t.allowTabSynchronization))throw new I(g.FAILED_PRECONDITION,fa)})}yi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Yr(e).put("owner",t)}static D(){return _t.D()}pi(e){const t=Yr(e);return t.get("owner").next(r=>this.wi(r)?(E("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}Di(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Se(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const t=/(?:Version|Mobile)\/1[456]/;Gg()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var t;try{const r=((t=this.Ei)===null||t===void 0?void 0:t.getItem(this.vi(e)))!==null;return E("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Se("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){Se("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Yr(n){return Le(n,"owner")}function gi(n){return Le(n,"clientMetadata")}function ru(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ki=r,this.qi=s}static Qi(e,t){let r=z(),s=z();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new su(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.zi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new _T;return this.Hi(e,t,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,t,o,a.size)})}).next(()=>i.result)}Ji(e,t,r,s){return r.documentReadCount<this.Ui?(cr()<=H.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",ur(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),m.resolve()):(cr()<=H.DEBUG&&E("QueryEngine","Query:",ur(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(cr()<=H.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",ur(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):m.resolve())}zi(e,t){if(Ol(t))return m.resolve(null);let r=st(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ji(t,null,"F"),r=st(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=z(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Yi(t,a);return this.Zi(t,u,o,c.readTime)?this.zi(e,ji(t,null,"F")):this.Xi(e,u,t,c)}))})))}ji(e,t,r,s){return Ol(t)||s.isEqual(O.min())?m.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(t,i);return this.Zi(t,o,r,s)?m.resolve(null):(cr()<=H.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ur(t)),this.Xi(e,o,t,Af(s,-1)).next(a=>a))})}Yi(e,t){let r=new oe(Wf(e));return t.forEach((s,i)=>{Qs(e,i)&&(r=r.add(i))}),r}Zi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,t,r){return cr()<=H.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",ur(t)),this.Gi.getDocumentsMatchingQuery(e,t,ft.min(),r)}Xi(e,t,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,t,r,s){this.persistence=e,this.es=t,this.serializer=s,this.ts=new le(j),this.ns=new _n(i=>Un(i),Ws),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vm(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}function Nm(n,e,t,r){return new yT(n,e,t,r)}async function Om(n,e){const t=P(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=z();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function IT(n,e){const t=P(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(p=>{f=f.next(()=>l.getEntry(c,p)).next(_=>{const y=u.docVersions.get(p);M(y!==null),_.version.compareTo(y)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),l.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=z();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Mm(n){const e=P(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function ET(n,e){const t=P(n),r=e.snapshotVersion;let s=t.ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.ss.newChangeBuffer({trackRemovals:!0});s=t.ts;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(t.qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.qr.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Ve.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(h,f),function(_,y,A){return _.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,f,l)&&a.push(t.qr.updateTargetData(i,f))});let c=ut(),u=z();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Fm(i,o,e.documentUpdates).next(l=>{c=l.us,u=l.cs})),!r.isEqual(O.min())){const l=t.qr.getLastRemoteSnapshotVersion(i).next(h=>t.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.ts=s,i))}function Fm(n,e,t){let r=z(),s=z();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=ut();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(O.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{us:o,cs:s}})}function TT(n,e){const t=P(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Sr(n,e){const t=P(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.qr.getTargetData(r,e).next(i=>i?(s=i,m.resolve(s)):t.qr.allocateTargetId(r).next(o=>(s=new Nt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ts=t.ts.insert(r.targetId,r),t.ns.set(e,r.targetId)),r})}async function Pr(n,e,t){const r=P(n),s=r.ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!gn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function Wi(n,e,t){const r=P(n);let s=O.min(),i=z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=P(c),d=h.ns.get(l);return d!==void 0?m.resolve(h.ts.get(d)):h.qr.getTargetData(u,l)}(r,o,st(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,t?s:O.min(),t?i:z())).next(a=>(Um(r,Kf(e),a),{documents:a,ls:i})))}function Lm(n,e){const t=P(n),r=P(t.qr),s=t.ts.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r._t(i,e).next(o=>o?o.target:null))}function Bm(n,e){const t=P(n),r=t.rs.get(e)||O.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.ss.getAllFromCollectionGroup(s,e,Af(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Um(t,e,s),s))}function Um(n,e,t){let r=n.rs.get(e)||O.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.rs.set(e,r)}async function wT(n,e,t,r){const s=P(n);let i=z(),o=ut();for(const u of t){const l=e.hs(u.metadata.name);u.document&&(i=i.add(l));const h=e.Ps(u);h.setReadTime(e.Is(u.metadata.readTime)),o=o.insert(l,h)}const a=s.ss.newChangeBuffer({trackRemovals:!0}),c=await Sr(s,function(l){return st(Mr(J.fromString(`__bundle__/docs/${l}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",u=>Fm(u,a,o).next(l=>(a.apply(u),l)).next(l=>s.qr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>s.qr.addMatchingKeys(u,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(u,l.us,l.cs)).next(()=>l.us)))}async function vT(n,e,t=z()){const r=await Sr(n,st(Jc(e.bundledQuery))),s=P(n);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=Pe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Kr.saveNamedQuery(i,e);const a=r.withResumeToken(Ve.EMPTY_BYTE_STRING,o);return s.ts=s.ts.insert(a.targetId,a),s.qr.updateTargetData(i,a).next(()=>s.qr.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.qr.addMatchingKeys(i,t,r.targetId)).next(()=>s.Kr.saveNamedQuery(i,e))})}function lh(n,e){return`firestore_clients_${n}_${e}`}function hh(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ma(n,e){return`firestore_targets_${n}_${e}`}class Hi{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Ts(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new I(s.error.code,s.error.message))),o?new Hi(e,t,s.state,i):(Se("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class cs{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ts(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new I(r.error.code,r.error.message))),i?new cs(e,r.state,s):(Se("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Qi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ts(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Gc();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Pf(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Qi(e,i):(Se("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class iu{constructor(e,t){this.clientId=e,this.onlineState=t}static Ts(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new iu(t.clientId,t.onlineState):(Se("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ja{constructor(){this.activeTargetIds=Gc()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pa{constructor(e,t,r,s,i){this.window=e,this.si=t,this.persistenceKey=r,this.Rs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new le(j),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ys=lh(this.persistenceKey,this.Rs),this.ws=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new Ja),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.vs=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Rs)continue;const s=this.getItem(lh(this.persistenceKey,r));if(s){const i=Qi.Ts(r,s);i&&(this.gs=this.gs.insert(i.clientId,i))}}this.Fs();const t=this.storage.getItem(this.Cs);if(t){const r=this.Ms(t);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let t=!1;return this.gs.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,t,r){this.Ns(e,t,r),this.Bs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(ma(this.persistenceKey,e));if(r){const s=cs.Ts(e,r);s&&(t=s.state)}}return this.Ls.ds(e),this.Fs(),t}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ma(this.persistenceKey,e))}updateQueryState(e,t,r){this.ks(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Bs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return E("SharedClientState","READ",e,t),t}setItem(e,t){E("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){E("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const t=e;if(t.storageArea===this.storage){if(E("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ys)return void Se("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ss.test(t.key)){if(t.newValue==null){const r=this.Ks(t.key);return this.$s(r,null)}{const r=this.Us(t.key,t.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(t.key)){if(t.newValue!==null){const r=this.Ws(t.key,t.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(t.key)){if(t.newValue!==null){const r=this.zs(t.key,t.newValue);if(r)return this.js(r)}}else if(t.key===this.Cs){if(t.newValue!==null){const r=this.Ms(t.newValue);if(r)return this.xs(r)}}else if(t.key===this.ws){const r=function(i){let o=at._e;if(i!=null)try{const a=JSON.parse(i);M(typeof a=="number"),o=a}catch(a){Se("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==at._e&&this.sequenceNumberHandler(r)}else if(t.key===this.vs){const r=this.Hs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.Js(s)))}}}else this.ps.push(t)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,t,r){const s=new Hi(this.currentUser,e,t,r),i=hh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Es())}Bs(e){const t=hh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}qs(e){const t={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(t))}ks(e,t,r){const s=ma(this.persistenceKey,e),i=new cs(e,t,r);this.setItem(s,i.Es())}Qs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.vs,t)}Ks(e){const t=this.Ss.exec(e);return t?t[1]:null}Us(e,t){const r=this.Ks(e);return Qi.Ts(r,t)}Ws(e,t){const r=this.bs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Hi.Ts(new ke(i),s,t)}zs(e,t){const r=this.Ds.exec(e),s=Number(r[1]);return cs.Ts(s,t)}Ms(e){return iu.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);E("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,t){const r=t?this.gs.insert(e,t):this.gs.remove(e),s=this.Os(this.gs),i=this.Os(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let t=Gc();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class qm{constructor(){this.eo=new Ja,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,r){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Ja,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i=null;function ga(){return _i===null?_i=function(){return 268435456+Math.round(2147483648*Math.random())}():_i++,"0x"+_i.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class ST extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+t.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(t,r,s,i,o){const a=ga(),c=this.So(t,r);E("RestConnection",`Sending RPC '${t}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,i,o),this.Do(t,c,u,s).then(l=>(E("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw It("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}Co(t,r,s,i,o,a){return this.wo(t,r,s,i,o)}bo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Or}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}So(t,r){const s=bT[t];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,r,s){const i=ga();return new Promise((o,a)=>{const c=new vI;c.setWithCredentials(!0),c.listenOnce(EI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ha.NO_ERROR:const l=c.getResponseJson();E(We,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case ha.TIMEOUT:E(We,`RPC '${e}' ${i} timed out`),a(new I(g.DEADLINE_EXCEEDED,"Request time out"));break;case ha.HTTP_ERROR:const h=c.getStatus();if(E(We,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(y){const A=y.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(A)>=0?A:g.UNKNOWN}(f.status);a(new I(p,f.message))}else a(new I(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new I(g.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{E(We,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);E(We,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}vo(e,t,r){const s=ga(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yI(),a=II(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new wI({})),this.bo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=i.join("");E(We,`Creating RPC '${e}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const p=new RT({co:y=>{f?E(We,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(E(We,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),E(We,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},lo:()=>h.close()}),_=(y,A,v)=>{y.listen(A,S=>{try{v(S)}catch(N){setTimeout(()=>{throw N},0)}})};return _(h,di.EventType.OPEN,()=>{f||E(We,`RPC '${e}' stream ${s} transport opened.`)}),_(h,di.EventType.CLOSE,()=>{f||(f=!0,E(We,`RPC '${e}' stream ${s} transport closed`),p.Ro())}),_(h,di.EventType.ERROR,y=>{f||(f=!0,It(We,`RPC '${e}' stream ${s} transport errored:`,y),p.Ro(new I(g.UNAVAILABLE,"The operation could not be completed")))}),_(h,di.EventType.MESSAGE,y=>{var A;if(!f){const v=y.data[0];M(!!v);const S=v,N=S.error||((A=S[0])===null||A===void 0?void 0:A.error);if(N){E(We,`RPC '${e}' stream ${s} received error:`,N);const F=N.status;let b=function(se){const De=Ce[se];if(De!==void 0)return am(De)}(F),x=N.message;b===void 0&&(b=g.INTERNAL,x="Unknown error status: "+F+" with message "+N.message),f=!0,p.Ro(new I(b,x)),h.close()}else E(We,`RPC '${e}' stream ${s} received:`,v),p.Vo(v)}}),_(a,TI.STAT_EVENT,y=>{y.stat===Il.PROXY?E(We,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===Il.NOPROXY&&E(We,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.Ao()},0),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(){return typeof window<"u"?window:null}function Pi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n){return new OE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,t,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=t,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,t-r);s>0&&E("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new ou(e,t)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():t&&t.code===g.RESOURCE_EXHAUSTED?(Se(t.toString()),Se("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===t&&this.s_(r,s)},r=>{e(()=>{const s=new I(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,t){const r=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return E("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PT extends jm{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=LE(this.serializer,e),r=function(i){if(!("targetChange"in i))return O.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?O.min():o.readTime?Pe(o.readTime):O.min()}(e);return this.listener.a_(t,r)}u_(e){const t={};t.database=Vs(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=qi(c)?{documents:gm(i,c)}:{query:_m(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=hm(i,o.resumeToken);const u=Ka(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(O.min())>0){a.readTime=Rr(i,o.snapshotVersion.toTimestamp());const u=Ka(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=UE(this.serializer,e);r&&(t.labels=r),this.e_(t)}c_(e){const t={};t.database=Vs(this.serializer),t.removeTarget=e,this.e_(t)}}class CT extends jm{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(M(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const t=BE(e.writeResults,e.commitTime),r=Pe(e.commitTime);return this.listener.I_(r,t)}return M(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Vs(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>xs(this.serializer,r))};this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new I(g.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(g.UNKNOWN,s.toString())})}Co(e,t,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(g.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class VT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Se(t),this.f_=!1):E("OnlineStateTracker",t)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{yn(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=P(c);u.C_.add(4),await Br(u),u.M_.set("Unknown"),u.C_.delete(4),await ei(u)}(this))})}),this.M_=new VT(r,s)}}async function ei(n){if(yn(n))for(const e of n.v_)await e(!0)}async function Br(n){for(const e of n.v_)await e(!1)}function Co(n,e){const t=P(n);t.D_.has(e.targetId)||(t.D_.set(e.targetId,e),uu(t)?cu(t):qr(t).Ho()&&au(t,e))}function ks(n,e){const t=P(n),r=qr(t);t.D_.delete(e),r.Ho()&&zm(t,e),t.D_.size===0&&(r.Ho()?r.Zo():yn(t)&&t.M_.set("Unknown"))}function au(n,e){if(n.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(O.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qr(n).u_(e)}function zm(n,e){n.x_.Oe(e),qr(n).c_(e)}function cu(n){n.x_=new VE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.D_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),qr(n).start(),n.M_.g_()}function uu(n){return yn(n)&&!qr(n).jo()&&n.D_.size>0}function yn(n){return P(n).C_.size===0}function Gm(n){n.x_=void 0}async function kT(n){n.D_.forEach((e,t)=>{au(n,e)})}async function NT(n,e){Gm(n),uu(n)?(n.M_.w_(e),cu(n)):n.M_.set("Unknown")}async function OT(n,e,t){if(n.M_.set("Online"),e instanceof lm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(n,e)}catch(r){E("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yi(n,r)}else if(e instanceof Si?n.x_.$e(e):e instanceof um?n.x_.Je(e):n.x_.Ge(e),!t.isEqual(O.min()))try{const r=await Mm(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=i.D_.get(u);l&&i.D_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=i.D_.get(c);if(!l)return;i.D_.set(c,l.withResumeToken(Ve.EMPTY_BYTE_STRING,l.snapshotVersion)),zm(i,c);const h=new Nt(l.target,c,u,l.sequenceNumber);au(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){E("RemoteStore","Failed to raise snapshot:",r),await Yi(n,r)}}async function Yi(n,e,t){if(!gn(e))throw e;n.C_.add(1),await Br(n),n.M_.set("Offline"),t||(t=()=>Mm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await t(),n.C_.delete(1),await ei(n)})}function Km(n,e){return e().catch(t=>Yi(n,t,e))}async function Ur(n){const e=P(n),t=un(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;MT(e);)try{const s=await TT(e.localStore,r);if(s===null){e.b_.length===0&&t.Zo();break}r=s.batchId,FT(e,s)}catch(s){await Yi(e,s)}Wm(e)&&Hm(e)}function MT(n){return yn(n)&&n.b_.length<10}function FT(n,e){n.b_.push(e);const t=un(n);t.Ho()&&t.h_&&t.P_(e.mutations)}function Wm(n){return yn(n)&&!un(n).jo()&&n.b_.length>0}function Hm(n){un(n).start()}async function LT(n){un(n).E_()}async function BT(n){const e=un(n);for(const t of n.b_)e.P_(t.mutations)}async function UT(n,e,t){const r=n.b_.shift(),s=Hc.from(r,e,t);await Km(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ur(n)}async function qT(n,e){e&&un(n).h_&&await async function(r,s){if(function(o){return om(o)&&o!==g.ABORTED}(s.code)){const i=r.b_.shift();un(r).Yo(),await Km(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ur(r)}}(n,e),Wm(n)&&Hm(n)}async function fh(n,e){const t=P(n);t.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const r=yn(t);t.C_.add(3),await Br(t),r&&t.M_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.C_.delete(3),await ei(t)}async function Za(n,e){const t=P(n);e?(t.C_.delete(2),await ei(t)):e||(t.C_.add(2),await Br(t),t.M_.set("Unknown"))}function qr(n){return n.O_||(n.O_=function(t,r,s){const i=P(t);return i.A_(),new PT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ho:kT.bind(null,n),Io:NT.bind(null,n),a_:OT.bind(null,n)}),n.v_.push(async e=>{e?(n.O_.Yo(),uu(n)?cu(n):n.M_.set("Unknown")):(await n.O_.stop(),Gm(n))})),n.O_}function un(n){return n.N_||(n.N_=function(t,r,s){const i=P(t);return i.A_(),new CT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ho:LT.bind(null,n),Io:qT.bind(null,n),T_:BT.bind(null,n),I_:UT.bind(null,n)}),n.v_.push(async e=>{e?(n.N_.Yo(),await Ur(n)):(await n.N_.stop(),n.b_.length>0&&(E("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Oe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new lu(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $r(n,e){if(Se("AsyncQueue",`${e}: ${n}`),gn(n))return new I(g.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.comparator=e?(t,r)=>e(t,r)||R.comparator(t.key,r.key):(t,r)=>R.comparator(t.key,r.key),this.keyedMap=es(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new _r(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _r)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new _r;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.B_=new le(R.comparator)}track(e){const t=e.doc.key,r=this.B_.get(t);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(t,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(t):e.type===1&&r.type===2?this.B_=this.B_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):V():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Cr{constructor(e,t,r,s,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Cr(e,t,_r.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.k_=void 0,this.listeners=[]}}class jT{constructor(){this.queries=new _n(e=>Gf(e),Hs),this.onlineState="Unknown",this.q_=new Set}}async function hu(n,e){const t=P(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new $T),s)try{i.k_=await t.onListen(r)}catch(o){const a=$r(o,`Initialization of query '${ur(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.Q_(t.onlineState),i.k_&&e.K_(i.k_)&&fu(t)}async function du(n,e){const t=P(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function zT(n,e){const t=P(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&fu(t)}function GT(n,e,t){const r=P(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function fu(n){n.q_.forEach(e=>{e.next()})}class mu{constructor(e,t,r){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Cr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}H_(e){e=Cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,t){this.Y_=e,this.byteLength=t}Z_(){return"metadata"in this.Y_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.serializer=e}hs(e){return Pt(this.serializer,e)}Ps(e){return e.metadata.exists?pm(this.serializer,e.document,!1):fe.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return Pe(e)}}class WT{constructor(e,t,r){this.X_=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Qm(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++t;const r=J.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ta(e){const t=new Map,r=new ph(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.hs(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||z()).add(i);t.set(o,a)}}return t}async complete(){const e=await wT(this.localStore,new ph(this.serializer),this.documents,this.X_.id),t=this.ta(this.documents);for(const r of this.queries)await vT(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function Qm(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.key=e}}class Xm{constructor(e){this.key=e}}class Jm{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=z(),this.mutatedKeys=z(),this._a=Wf(e),this.aa=new _r(this._a)}get ua(){return this.ia}ca(e,t){const r=t?t.la:new mh,s=t?t.aa:this.aa;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),f=Qs(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?p!==_&&(r.track({type:3,doc:f}),y=!0):this.ha(d,f)||(r.track({type:2,doc:f}),y=!0,(c&&this._a(f,c)>0||u&&this._a(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(c||u)&&(a=!0)),y&&(f?(o=o.add(f),i=_?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const i=e.la.L_();i.sort((u,l)=>function(d,f){const p=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return p(d)-p(f)}(u.type,l.type)||this._a(u.doc,l.doc)),this.Pa(r);const o=t?this.Ia():[],a=this.oa.size===0&&this.current?1:0,c=a!==this.sa;return this.sa=a,i.length!==0||c?{snapshot:new Cr(this.query,e.aa,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new mh,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(t=>this.ia=this.ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ia=this.ia.delete(t)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=z(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const t=[];return e.forEach(r=>{this.oa.has(r)||t.push(new Xm(r))}),this.oa.forEach(r=>{e.has(r)||t.push(new Ym(r))}),t}da(e){this.ia=e.ls,this.oa=z();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return Cr.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class HT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class QT{constructor(e){this.key=e,this.Ra=!1}}class YT{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new _n(a=>Gf(a),Hs),this.fa=new Map,this.ga=new Set,this.pa=new le(R.comparator),this.ya=new Map,this.wa=new tu,this.Sa={},this.ba=new Map,this.Da=Gn.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function XT(n,e){const t=Iu(n);let r,s;const i=t.ma.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await Sr(t.localStore,st(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await pu(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Co(t.remoteStore,o)}return s}async function pu(n,e,t,r,s){n.va=(h,d,f)=>async function(_,y,A,v){let S=y.view.ca(A);S.Zi&&(S=await Wi(_.localStore,y.query,!1).then(({documents:b})=>y.view.ca(b,S)));const N=v&&v.targetChanges.get(y.targetId),F=y.view.applyChanges(S,_.isPrimaryClient,N);return ec(_,y.targetId,F.Ta),F.snapshot}(n,h,d,f);const i=await Wi(n.localStore,e,!0),o=new Jm(e,i.ls),a=o.ca(i.documents),c=Js.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,c);ec(n,t,u.Ta);const l=new HT(e,t,o);return n.ma.set(e,l),n.fa.has(t)?n.fa.get(t).push(e):n.fa.set(t,[e]),u.snapshot}async function JT(n,e){const t=P(n),r=t.ma.get(e),s=t.fa.get(r.targetId);if(s.length>1)return t.fa.set(r.targetId,s.filter(i=>!Hs(i,e))),void t.ma.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Pr(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),ks(t.remoteStore,r.targetId),Dr(t,r.targetId)}).catch(pn)):(Dr(t,r.targetId),await Pr(t.localStore,r.targetId,!0))}async function ZT(n,e,t){const r=Eu(n);try{const s=await function(o,a){const c=P(o),u=ye.now(),l=a.reduce((f,p)=>f.add(p.key),z());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=ut(),_=z();return c.ss.getEntries(f,l).next(y=>{p=y,p.forEach((A,v)=>{v.isValidDocument()||(_=_.add(A))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,p)).next(y=>{h=y;const A=[];for(const v of a){const S=PE(v,h.get(v.key).overlayedDocument);S!=null&&A.push(new qt(v.key,S,Mf(S.value.mapValue),_e.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,A,a)}).next(y=>{d=y;const A=y.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(f,y.batchId,A)})}).then(()=>({batchId:d.batchId,changes:Qf(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Sa[o.currentUser.toKey()];u||(u=new le(j)),u=u.insert(a,c),o.Sa[o.currentUser.toKey()]=u}(r,s.batchId,t),await $t(r,s.changes),await Ur(r.remoteStore)}catch(s){const i=$r(s,"Failed to persist write");t.reject(i)}}async function Zm(n,e){const t=P(n);try{const r=await ET(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.ya.get(i);o&&(M(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?M(o.Ra):s.removedDocuments.size>0&&(M(o.Ra),o.Ra=!1))}),await $t(t,r,e)}catch(r){await pn(r)}}function gh(n,e,t){const r=P(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=P(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&fu(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ew(n,e,t){const r=P(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new le(R.comparator);o=o.insert(i,fe.newNoDocument(i,O.min()));const a=z().add(i),c=new Xs(O.min(),new Map,new le(j),o,a);await Zm(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),yu(r)}else await Pr(r.localStore,e,!1).then(()=>Dr(r,e,t)).catch(pn)}async function tw(n,e){const t=P(n),r=e.batch.batchId;try{const s=await IT(t.localStore,e);_u(t,r,null),gu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await $t(t,s)}catch(s){await pn(s)}}async function nw(n,e,t){const r=P(n);try{const s=await function(o,a){const c=P(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(M(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);_u(r,e,t),gu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await $t(r,s)}catch(s){await pn(s)}}async function rw(n,e){const t=P(n);yn(t.remoteStore)||E("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=P(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const s=t.ba.get(r)||[];s.push(e),t.ba.set(r,s)}catch(r){const s=$r(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function gu(n,e){(n.ba.get(e)||[]).forEach(t=>{t.resolve()}),n.ba.delete(e)}function _u(n,e,t){const r=P(n);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function Dr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.fa.get(e))n.ma.delete(r),t&&n.Va.Fa(r,t);n.fa.delete(e),n.isPrimaryClient&&n.wa.Rr(e).forEach(r=>{n.wa.containsKey(r)||ep(n,r)})}function ep(n,e){n.ga.delete(e.path.canonicalString());const t=n.pa.get(e);t!==null&&(ks(n.remoteStore,t),n.pa=n.pa.remove(e),n.ya.delete(t),yu(n))}function ec(n,e,t){for(const r of t)r instanceof Ym?(n.wa.addReference(r.key,e),sw(n,r)):r instanceof Xm?(E("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,e),n.wa.containsKey(r.key)||ep(n,r.key)):V()}function sw(n,e){const t=e.key,r=t.path.canonicalString();n.pa.get(t)||n.ga.has(r)||(E("SyncEngine","New document in limbo: "+t),n.ga.add(r),yu(n))}function yu(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const e=n.ga.values().next().value;n.ga.delete(e);const t=new R(J.fromString(e)),r=n.Da.next();n.ya.set(r,new QT(t)),n.pa=n.pa.insert(t,r),Co(n.remoteStore,new Nt(st(Mr(t.path)),r,"TargetPurposeLimboResolution",at._e))}}async function $t(n,e,t){const r=P(n),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=su.Qi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,u){const l=P(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.ki,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!gn(h))throw h;E("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.ts.get(d),p=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(p);l.ts=l.ts.insert(d,_)}}}(r.localStore,i))}async function iw(n,e){const t=P(n);if(!t.currentUser.isEqual(e)){E("SyncEngine","User change. New user:",e.toKey());const r=await Om(t.localStore,e);t.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new I(g.CANCELLED,o))})}),i.ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $t(t,r._s)}}function ow(n,e){const t=P(n),r=t.ya.get(e);if(r&&r.Ra)return z().add(r.key);{let s=z();const i=t.fa.get(e);if(!i)return s;for(const o of i){const a=t.ma.get(o);s=s.unionWith(a.view.ua)}return s}}async function aw(n,e){const t=P(n),r=await Wi(t.localStore,e.query,!0),s=e.view.da(r);return t.isPrimaryClient&&ec(t,e.targetId,s.Ta),s}async function cw(n,e){const t=P(n);return Bm(t.localStore,e).then(r=>$t(t,r))}async function uw(n,e,t,r){const s=P(n),i=await function(a,c){const u=P(a),l=P(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Cn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):m.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Ur(s.remoteStore):t==="acknowledged"||t==="rejected"?(_u(s,e,r||null),gu(s,e),function(a,c){P(P(a).mutationQueue).Fn(c)}(s.localStore,e)):V(),await $t(s,i)):E("SyncEngine","Cannot apply mutation batch with id: "+e)}async function lw(n,e){const t=P(n);if(Iu(t),Eu(t),e===!0&&t.Ca!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await _h(t,r.toArray());t.Ca=!0,await Za(t.remoteStore,!0);for(const i of s)Co(t.remoteStore,i)}else if(e===!1&&t.Ca!==!1){const r=[];let s=Promise.resolve();t.fa.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Dr(t,o),Pr(t.localStore,o,!0))),ks(t.remoteStore,o)}),await s,await _h(t,r),function(o){const a=P(o);a.ya.forEach((c,u)=>{ks(a.remoteStore,u)}),a.wa.Vr(),a.ya=new Map,a.pa=new le(R.comparator)}(t),t.Ca=!1,await Za(t.remoteStore,!1)}}async function _h(n,e,t){const r=P(n),s=[],i=[];for(const o of e){let a;const c=r.fa.get(o);if(c&&c.length!==0){a=await Sr(r.localStore,st(c[0]));for(const u of c){const l=r.ma.get(u),h=await aw(r,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await Lm(r.localStore,o);a=await Sr(r.localStore,u),await pu(r,tp(u),o,!1,a.resumeToken)}s.push(a)}return r.Va.a_(i),s}function tp(n){return zf(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function hw(n){return function(t){return P(P(t).persistence).Bi()}(P(n).localStore)}async function dw(n,e,t,r){const s=P(n);if(s.Ca)return void E("SyncEngine","Ignoring unexpected query state notification.");const i=s.fa.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Bm(s.localStore,Kf(i[0])),a=Xs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ve.EMPTY_BYTE_STRING);await $t(s,o,a);break}case"rejected":await Pr(s.localStore,e,!0),Dr(s,e,r);break;default:V()}}async function fw(n,e,t){const r=Iu(n);if(r.Ca){for(const s of e){if(r.fa.has(s)){E("SyncEngine","Adding an already active target "+s);continue}const i=await Lm(r.localStore,s),o=await Sr(r.localStore,i);await pu(r,tp(i),o.targetId,!1,o.resumeToken),Co(r.remoteStore,o)}for(const s of t)r.fa.has(s)&&await Pr(r.localStore,s,!1).then(()=>{ks(r.remoteStore,s),Dr(r,s)}).catch(pn)}}function Iu(n){const e=P(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ow.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ew.bind(null,e),e.Va.a_=zT.bind(null,e.eventManager),e.Va.Fa=GT.bind(null,e.eventManager),e}function Eu(n){const e=P(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nw.bind(null,e),e}function mw(n,e,t){const r=P(n);(async function(i,o,a){try{const c=await o.getMetadata();if(await function(f,p){const _=P(f),y=Pe(p.createTime);return _.persistence.runTransaction("hasNewerBundle","readonly",A=>_.Kr.getBundleMetadata(A,p.id)).then(A=>!!A&&A.createTime.compareTo(y)>=0)}(i.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(Qm(c));const u=new WT(c,i.localStore,o.serializer);let l=await o.Ma();for(;l;){const d=await u.ea(l);d&&a._updateProgress(d),l=await o.Ma()}const h=await u.complete();return await $t(i,h.ra,void 0),await function(f,p){const _=P(f);return _.persistence.runTransaction("Save bundle","readwrite",y=>_.Kr.saveBundleMetadata(y,p))}(i.localStore,c),a._completeWith(h.progress),Promise.resolve(h.na)}catch(c){return It("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class tc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Nm(this.persistence,new km,e.initialUser,this.serializer)}createPersistence(e){return new xm(Po.jr,this.serializer)}createSharedClientState(e){return new qm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class np extends tc{constructor(e,t,r){super(),this.xa=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await Eu(this.xa.syncEngine),await Ur(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Nm(this.persistence,new km,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new nT(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new BI(t,this.persistence);return new LI(e.asyncQueue,r)}createPersistence(e){const t=ru(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new nu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,$m(),Pi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new qm}}class pw extends np{constructor(e,t){super(e,t,!1),this.xa=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xa.syncEngine;this.sharedClientState instanceof pa&&(this.sharedClientState.syncEngine={Ys:uw.bind(null,t),Zs:dw.bind(null,t),Xs:fw.bind(null,t),Bi:hw.bind(null,t),Js:cw.bind(null,t)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await lw(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=$m();if(!pa.D(t))throw new I(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ru(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new pa(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Tu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iw.bind(null,this.syncEngine),await Za(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jT}()}createDatastore(e){const t=Zs(e.databaseInfo.databaseId),r=function(i){return new ST(i)}(e.databaseInfo);return function(i,o,a,c){return new DT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new xT(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>gh(this.syncEngine,t,0),function(){return dh.D()?new dh:new AT}())}createSyncEngine(e,t){return function(s,i,o,a,c,u,l){const h=new YT(s,i,o,a,c,u);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=P(t);E("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Br(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Se("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t){this.Ba=e,this.serializer=t,this.metadata=new Oe,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(e===null)return null;const t=this.La.decode(e),r=Number(t);isNaN(r)&&this.Qa(`length string (${t}) is not valid number`);const s=await this.Ka(r);return new KT(JSON.parse(s),e.length+r)}$a(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const t=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qa(e){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ua(){const e=await this.Ba.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new I(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,i){const o=P(s),a=Vs(o.serializer)+"/documents",c={documents:i.map(d=>Ds(o.serializer,d))},u=await o.Co("BatchGetDocuments",a,c,i.length),l=new Map;u.forEach(d=>{const f=FE(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return i.forEach(d=>{const f=l.get(d.toString());M(!!f),h.push(f)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Lr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=R.fromPath(r);this.mutations.push(new Kc(s,this.precondition(s)))}),await async function(r,s){const i=P(r),o=Vs(i.serializer)+"/documents",a={writes:s.map(c=>xs(i.serializer,c))};await i.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw V();t=O.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new I(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(O.min())?_e.exists(!1):_e.updateTime(t):_e.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(O.min()))throw new I(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _e.updateTime(t)}return _e.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.Wa=r.maxAttempts,this.zo=new ou(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new _w(this.datastore),t=this.za(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.ja(s)}))}).catch(r=>{this.ja(r)})})}za(e){try{const t=this.updateFunction(e);return!Ks(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!om(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ke.UNAUTHENTICATED,this.clientId=wf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{E("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(E("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Oe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=$r(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ci(n,e){n.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Om(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function nc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wu(n);E("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>fh(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>fh(e.remoteStore,i)),n._onlineComponents=e}function rp(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function wu(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ci(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!rp(t))throw t;It("Error using user provided cache. Falling back to memory cache: "+t),await Ci(n,new tc)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await Ci(n,new tc);return n._offlineComponents}async function Vo(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await nc(n,n._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await nc(n,new Tu))),n._onlineComponents}function sp(n){return wu(n).then(e=>e.persistence)}function vu(n){return wu(n).then(e=>e.localStore)}function ip(n){return Vo(n).then(e=>e.remoteStore)}function Au(n){return Vo(n).then(e=>e.syncEngine)}function Ew(n){return Vo(n).then(e=>e.datastore)}async function Vr(n){const e=await Vo(n),t=e.eventManager;return t.onListen=XT.bind(null,e.syncEngine),t.onUnlisten=JT.bind(null,e.syncEngine),t}function Tw(n){return n.asyncQueue.enqueue(async()=>{const e=await sp(n),t=await ip(n);return e.setNetworkEnabled(!0),function(s){const i=P(s);return i.C_.delete(0),ei(i)}(t)})}function ww(n){return n.asyncQueue.enqueue(async()=>{const e=await sp(n),t=await ip(n);return e.setNetworkEnabled(!1),async function(s){const i=P(s);i.C_.add(0),await Br(i),i.M_.set("Offline")}(t)})}function vw(n,e){const t=new Oe;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await function(u,l){const h=P(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new I(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=$r(a,`Failed to get document '${i} from cache`);o.reject(c)}}(await vu(n),e,t)),t.promise}function op(n,e,t={}){const r=new Oe;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new Do({next:d=>{o.enqueueAndForget(()=>du(i,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new I(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new I(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new mu(Mr(a.path),l,{includeMetadataChanges:!0,J_:!0});return hu(i,h)}(await Vr(n),n.asyncQueue,e,t,r)),r.promise}function Aw(n,e){const t=new Oe;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await Wi(s,i,!0),c=new Jm(i,a.ls),u=c.ca(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=$r(a,`Failed to execute query '${i} against cache`);o.reject(c)}}(await vu(n),e,t)),t.promise}function ap(n,e,t={}){const r=new Oe;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new Do({next:d=>{o.enqueueAndForget(()=>du(i,h)),d.fromCache&&c.source==="server"?u.reject(new I(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new mu(a,l,{includeMetadataChanges:!0,J_:!0});return hu(i,h)}(await Vr(n),n.asyncQueue,e,t,r)),r.promise}function bw(n,e){const t=new Do(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,i){P(s).q_.add(i),i.next()}(await Vr(n),t)),()=>{t.Na(),n.asyncQueue.enqueueAndForget(async()=>function(s,i){P(s).q_.delete(i)}(await Vr(n),t))}}function Rw(n,e,t,r){const s=function(o,a){let c;return c=typeof o=="string"?cm().encode(o):o,function(l,h){return new gw(l,h)}(function(l,h){if(l instanceof Uint8Array)return yh(l,h);if(l instanceof ArrayBuffer)return yh(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,Zs(e));n.asyncQueue.enqueueAndForget(async()=>{mw(await Au(n),s,r)})}function Sw(n,e){return n.asyncQueue.enqueue(async()=>function(r,s){const i=P(r);return i.persistence.runTransaction("Get named query","readonly",o=>i.Kr.getNamedQuery(o,s))}(await vu(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(n,e,t){if(!t)throw new I(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function up(n,e,t,r){if(e===!0&&r===!0)throw new I(g.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Eh(n){if(!R.isDocumentKey(n))throw new I(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Th(n){if(R.isDocumentKey(n))throw new I(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":V()}function ee(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new I(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xo(n);throw new I(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function lp(n,e){if(e<=0)throw new I(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new I(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}up("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new I(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new I(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new I(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ti{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new SI;switch(r.type){case"firstParty":return new VI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new I(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ih.get(t);r&&(E("ComponentProvider","Removing Datastore"),Ih.delete(t),r.terminate())}(this),Promise.resolve()}}function Pw(n,e,t,r={}){var s;const i=(n=ee(n,ti))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&It("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ke.MOCK_USER;else{a=sd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new I(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ke(u)}n._authCredentials=new PI(new Tf(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let it=class hp{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hp(this.firestore,e,this._query)}},Ee=class dp{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dp(this.firestore,e,this._key)}},Jt=class fp extends it{constructor(e,t,r){super(e,t,Mr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ee(this.firestore,null,new R(e))}withConverter(e){return new fp(this.firestore,e,this._path)}};function mp(n,e,...t){if(n=ae(n),bu("collection","path",e),n instanceof ti){const r=J.fromString(e,...t);return Th(r),new Jt(n,null,r)}{if(!(n instanceof Ee||n instanceof Jt))throw new I(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return Th(r),new Jt(n.firestore,null,r)}}function Cw(n,e){if(n=ee(n,ti),bu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new I(g.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new it(n,null,function(r){return new Ut(J.emptyPath(),r)}(e))}function Xi(n,e,...t){if(n=ae(n),arguments.length===1&&(e=wf.newId()),bu("doc","path",e),n instanceof ti){const r=J.fromString(e,...t);return Eh(r),new Ee(n,null,new R(r))}{if(!(n instanceof Ee||n instanceof Jt))throw new I(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return Eh(r),new Ee(n.firestore,n instanceof Jt?n.converter:null,new R(r))}}function pp(n,e){return n=ae(n),e=ae(e),(n instanceof Ee||n instanceof Jt)&&(e instanceof Ee||e instanceof Jt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function gp(n,e){return n=ae(n),e=ae(e),n instanceof it&&e instanceof it&&n.firestore===e.firestore&&Hs(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new ou(this,"async_queue_retry"),this.iu=()=>{const t=Pi();t&&E("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const e=Pi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=Pi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const t=new Oe;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!gn(e))throw e;E("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const t=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Se("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=t,t}enqueueAfterDelay(e,t,r){this.su(),this.ru.indexOf(e)>-1&&(t=0);const s=lu.createAndSchedule(this,e,t,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&V()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Xa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}function rc(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Vw{constructor(){this._progressObserver={},this._taskCompletionResolver=new Oe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=-1;let Re=class extends ti{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new Dw}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_p(this),this._firestoreClient.terminate()}};function Be(n){return n._firestoreClient||_p(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function _p(n){var e,t,r;const s=n._freezeSettings(),i=function(a,c,u,l){return new oE(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,cp(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Iw(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}function kw(n,e){Ip(n=ee(n,Re));const t=Be(n);if(t._uninitializedComponentsProvider)throw new I(g.FAILED_PRECONDITION,"SDK cache is already specified.");It("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),s=new Tu;return yp(t,s,new np(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Nw(n){Ip(n=ee(n,Re));const e=Be(n);if(e._uninitializedComponentsProvider)throw new I(g.FAILED_PRECONDITION,"SDK cache is already specified.");It("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Tu;return yp(e,r,new pw(r,t.cacheSizeBytes))}function yp(n,e,t){const r=new Oe;return n.asyncQueue.enqueue(async()=>{try{await Ci(n,t),await nc(n,e),r.resolve()}catch(s){const i=s;if(!rp(i))throw i;It("Error enabling indexeddb cache. Falling back to memory cache: "+i),r.reject(i)}}).then(()=>r.promise)}function Ow(n){if(n._initialized&&!n._terminated)throw new I(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Oe;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!_t.D())return Promise.resolve();const s=r+"main";await _t.delete(s)}(ru(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Mw(n){return function(t){const r=new Oe;return t.asyncQueue.enqueueAndForget(async()=>rw(await Au(t),r)),r.promise}(Be(n=ee(n,Re)))}function Fw(n){return Tw(Be(n=ee(n,Re)))}function Lw(n){return ww(Be(n=ee(n,Re)))}function Bw(n,e){const t=Be(n=ee(n,Re)),r=new Vw;return Rw(t,n._databaseId,e,r),r}function Uw(n,e){return Sw(Be(n=ee(n,Re)),e).then(t=>t?new it(n,null,t.query):null)}function Ip(n){if(n._initialized||n._terminated)throw new I(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(Ve.fromBase64String(e))}catch(t){throw new I(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vt(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new I(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=/^__.*__$/;class $w{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fr(e,this.data,t,this.fieldTransforms)}}class Ep{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Tp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class No{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new No(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Ji(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Tp(this.Iu)&&qw.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class jw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Zs(e)}pu(e,t,r,s=!1){return new No({Iu:e,methodName:t,gu:r,path:ge.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jn(n){const e=n._freezeSettings(),t=Zs(n._databaseId);return new jw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Oo(n,e,t,r,s,i={}){const o=n.pu(i.merge||i.mergeFields?2:0,e,t,s);Cu("Data must be an object, but it was:",o,r);const a=Ap(r,o);let c,u;if(i.merge)c=new ct(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=sc(e,h,t);if(!o.contains(d))throw new I(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Rp(l,d)||l.push(d)}c=new ct(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new $w(new je(a),c,u)}class ni extends Xn{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ni}}function wp(n,e,t){return new No({Iu:3,gu:e.settings.gu,methodName:n._methodName,du:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ru extends Xn{_toFieldTransform(e){return new Ys(e.path,new Ar)}isEqual(e){return e instanceof Ru}}class zw extends Xn{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=wp(this,e,!0),r=this.yu.map(i=>Zn(i,t)),s=new qn(r);return new Ys(e.path,s)}isEqual(e){return this===e}}class Gw extends Xn{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=wp(this,e,!0),r=this.yu.map(i=>Zn(i,t)),s=new $n(r);return new Ys(e.path,s)}isEqual(e){return this===e}}class Kw extends Xn{constructor(e,t){super(e),this.wu=t}_toFieldTransform(e){const t=new br(e.serializer,Zf(e.serializer,this.wu));return new Ys(e.path,t)}isEqual(e){return this===e}}function Su(n,e,t,r){const s=n.pu(1,e,t);Cu("Data must be an object, but it was:",s,r);const i=[],o=je.empty();Yn(r,(c,u)=>{const l=Du(e,c,t);u=ae(u);const h=s.Ru(l);if(u instanceof ni)i.push(l);else{const d=Zn(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new ct(i);return new Ep(o,a,s.fieldTransforms)}function Pu(n,e,t,r,s,i){const o=n.pu(1,e,t),a=[sc(e,r,t)],c=[s];if(i.length%2!=0)throw new I(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(sc(e,i[d])),c.push(i[d+1]);const u=[],l=je.empty();for(let d=a.length-1;d>=0;--d)if(!Rp(u,a[d])){const f=a[d];let p=c[d];p=ae(p);const _=o.Ru(f);if(p instanceof ni)u.push(f);else{const y=Zn(p,_);y!=null&&(u.push(f),l.set(f,y))}}const h=new ct(u);return new Ep(l,h,o.fieldTransforms)}function vp(n,e,t,r=!1){return Zn(t,n.pu(r?4:3,e))}function Zn(n,e){if(bp(n=ae(n)))return Cu("Unsupported field value:",e,n),Ap(n,e);if(n instanceof Xn)return function(r,s){if(!Tp(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Zn(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Zf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ye.fromDate(r);return{timestampValue:Rr(s.serializer,i)}}if(r instanceof ye){const i=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rr(s.serializer,i)}}if(r instanceof ko)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:hm(s.serializer,r._byteString)};if(r instanceof Ee){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xc(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${xo(r)}`)}(n,e)}function Ap(n,e){const t={};return kf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yn(n,(r,s)=>{const i=Zn(s,e.Eu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function bp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof ko||n instanceof Vt||n instanceof Ee||n instanceof Xn)}function Cu(n,e,t){if(!bp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=xo(t);throw r==="an object"?e.mu(n+" a custom object"):e.mu(n+" "+r)}}function sc(n,e,t){if((e=ae(e))instanceof ln)return e._internalPath;if(typeof e=="string")return Du(n,e);throw Ji("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ww=new RegExp("[~\\*/\\[\\]]");function Du(n,e,t){if(e.search(Ww)>=0)throw Ji(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ln(...e.split("."))._internalPath}catch{throw Ji(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ji(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new I(g.INVALID_ARGUMENT,a+n+c)}function Rp(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Hw extends Ns{data(){return super.data()}}function Mo(n,e){return typeof e=="string"?Du(n,e):e instanceof ln?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new I(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vu{}class ri extends Vu{}function Wt(n,e,...t){let r=[];e instanceof Vu&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof xu).length,a=i.filter(c=>c instanceof Fo).length;if(o>1||o>0&&a>0)throw new I(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Fo extends ri{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Fo(e,t,r)}_apply(e){const t=this._parse(e);return Cp(e._query,t),new it(e.firestore,e.converter,Ga(e._query,t))}_parse(e){const t=Jn(e.firestore);return function(i,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new I(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ah(h,l);const f=[];for(const p of h)f.push(vh(c,i,p));d={arrayValue:{values:f}}}else d=vh(c,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ah(h,l),d=vp(a,o,h,l==="in"||l==="not-in");return K.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Qw(n,e,t){const r=e,s=Mo("where",n);return Fo._create(s,r,t)}class xu extends Vu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Cp(o,c),o=Ga(o,c)}(e._query,t),new it(e.firestore,e.converter,Ga(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ku extends ri{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ku(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new I(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new I(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cs(i,o)}(e._query,this._field,this._direction);return new it(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ut(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Yw(n,e="asc"){const t=e,r=Mo("orderBy",n);return ku._create(r,t)}class Lo extends ri{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Lo(e,t,r)}_apply(e){return new it(e.firestore,e.converter,ji(e._query,this._limit,this._limitType))}}function Xw(n){return lp("limit",n),Lo._create("limit",n,"F")}function Jw(n){return lp("limitToLast",n),Lo._create("limitToLast",n,"L")}class Bo extends ri{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Bo(e,t,r)}_apply(e){const t=Pp(e,this.type,this._docOrFields,this._inclusive);return new it(e.firestore,e.converter,function(s,i){return new Ut(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function Zw(...n){return Bo._create("startAt",n,!0)}function ev(...n){return Bo._create("startAfter",n,!1)}class Uo extends ri{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Uo(e,t,r)}_apply(e){const t=Pp(e,this.type,this._docOrFields,this._inclusive);return new it(e.firestore,e.converter,function(s,i){return new Ut(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function tv(...n){return Uo._create("endBefore",n,!1)}function nv(...n){return Uo._create("endAt",n,!0)}function Pp(n,e,t,r){if(t[0]=ae(t[0]),t[0]instanceof Ns)return function(i,o,a,c,u){if(!c)throw new I(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of gr(i))if(h.field.isKeyField())l.push(Bn(o,c.key));else{const d=c.data.field(h.field);if(vo(d))throw new I(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new I(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new cn(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Jn(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new I(g.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let p=0;p<l.length;p++){const _=l[p];if(d[p].field.isKeyField()){if(typeof _!="string")throw new I(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof _}`);if(!zc(o)&&_.indexOf("/")!==-1)throw new I(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${_}' contains a slash.`);const y=o.path.child(J.fromString(_));if(!R.isDocumentKey(y))throw new I(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const A=new R(y);f.push(Bn(a,A))}else{const y=vp(c,u,_);f.push(y)}}return new cn(f,h)}(n._query,n.firestore._databaseId,s,e,t,r)}}function vh(n,e,t){if(typeof(t=ae(t))=="string"){if(t==="")throw new I(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zc(e)&&t.indexOf("/")!==-1)throw new I(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(J.fromString(t));if(!R.isDocumentKey(r))throw new I(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bn(n,new R(r))}if(t instanceof Ee)return Bn(n,t._key);throw new I(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xo(t)}.`)}function Ah(n,e){if(!Array.isArray(n)||n.length===0)throw new I(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Cp(n,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new I(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Nu{convertValue(e,t="none"){switch(Ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw V()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Yn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new ko(Ae(e.latitude),Ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=$c(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Rs(e));default:return null}}convertTimestamp(e){const t=rn(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=J.fromString(e);M(Tm(r));const s=new on(r.get(1),r.get(3)),i=new R(r.popFirst(5));return s.isEqual(t)||Se(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class rv extends Nu{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ee(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Bt=class extends Ns{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Mo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},us=class extends Bt{data(e={}){return super.data(e)}},hn=class{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new xn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new us(this._firestore,this._userDataWriter,r.key,r,new xn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new I(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new us(s._firestore,s._userDataWriter,a.doc.key,a.doc,new xn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new us(s._firestore,s._userDataWriter,a.doc.key,a.doc,new xn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:sv(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function sv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}function Dp(n,e){return n instanceof Bt&&e instanceof Bt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof hn&&e instanceof hn&&n._firestore===e._firestore&&gp(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n){n=ee(n,Ee);const e=ee(n.firestore,Re);return op(Be(e),n._key).then(t=>Ou(e,n,t))}class er extends Nu{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ee(this.firestore,null,t)}}function ov(n){n=ee(n,Ee);const e=ee(n.firestore,Re),t=Be(e),r=new er(e);return vw(t,n._key).then(s=>new Bt(e,r,n._key,s,new xn(s!==null&&s.hasLocalMutations,!0),n.converter))}function av(n){n=ee(n,Ee);const e=ee(n.firestore,Re);return op(Be(e),n._key,{source:"server"}).then(t=>Ou(e,n,t))}function cv(n){n=ee(n,it);const e=ee(n.firestore,Re),t=Be(e),r=new er(e);return Sp(n._query),ap(t,n._query).then(s=>new hn(e,r,n,s))}function uv(n){n=ee(n,it);const e=ee(n.firestore,Re),t=Be(e),r=new er(e);return Aw(t,n._query).then(s=>new hn(e,r,n,s))}function lv(n){n=ee(n,it);const e=ee(n.firestore,Re),t=Be(e),r=new er(e);return ap(t,n._query,{source:"server"}).then(s=>new hn(e,r,n,s))}function bh(n,e,t){n=ee(n,Ee);const r=ee(n.firestore,Re),s=qo(n.converter,e,t);return si(r,[Oo(Jn(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,_e.none())])}function Rh(n,e,t,...r){n=ee(n,Ee);const s=ee(n.firestore,Re),i=Jn(s);let o;return o=typeof(e=ae(e))=="string"||e instanceof ln?Pu(i,"updateDoc",n._key,e,t,r):Su(i,"updateDoc",n._key,e),si(s,[o.toMutation(n._key,_e.exists(!0))])}function hv(n){return si(ee(n.firestore,Re),[new Lr(n._key,_e.none())])}function dv(n,e){const t=ee(n.firestore,Re),r=Xi(n),s=qo(n.converter,e);return si(t,[Oo(Jn(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,_e.exists(!1))]).then(()=>r)}function Vp(n,...e){var t,r,s;n=ae(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||rc(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(rc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(n instanceof Ee)u=ee(n.firestore,Re),l=Mr(n._key.path),c={next:h=>{e[o]&&e[o](Ou(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=ee(n,it);u=ee(h.firestore,Re),l=h._query;const d=new er(u);c={next:f=>{e[o]&&e[o](new hn(u,d,h,f))},error:e[o+1],complete:e[o+2]},Sp(n._query)}return function(d,f,p,_){const y=new Do(_),A=new mu(f,y,p);return d.asyncQueue.enqueueAndForget(async()=>hu(await Vr(d),A)),()=>{y.Na(),d.asyncQueue.enqueueAndForget(async()=>du(await Vr(d),A))}}(Be(u),l,a,c)}function fv(n,e){return bw(Be(n=ee(n,Re)),rc(e)?e:{next:e})}function si(n,e){return function(r,s){const i=new Oe;return r.asyncQueue.enqueueAndForget(async()=>ZT(await Au(r),s,i)),i.promise}(Be(n),e)}function Ou(n,e,t){const r=t.docs.get(e._key),s=new er(n);return new Bt(n,s,e._key,r,new xn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pv=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Jn(e)}set(e,t,r){this._verifyNotCommitted();const s=Qt(e,this._firestore),i=qo(s.converter,t,r),o=Oo(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,_e.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Qt(e,this._firestore);let o;return o=typeof(t=ae(t))=="string"||t instanceof ln?Pu(this._dataReader,"WriteBatch.update",i._key,t,r,s):Su(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,_e.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Qt(e,this._firestore);return this._mutations=this._mutations.concat(new Lr(t._key,_e.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new I(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Qt(n,e){if((n=ae(n)).firestore!==e)throw new I(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gv=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Jn(t)}get(t){const r=Qt(t,this._firestore),s=new rv(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return V();const o=i[0];if(o.isFoundDocument())return new Ns(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new Ns(this._firestore,s,r._key,null,r.converter);throw V()})}set(t,r,s){const i=Qt(t,this._firestore),o=qo(i.converter,r,s),a=Oo(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,a),this}update(t,r,s,...i){const o=Qt(t,this._firestore);let a;return a=typeof(r=ae(r))=="string"||r instanceof ln?Pu(this._dataReader,"Transaction.update",o._key,r,s,i):Su(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=Qt(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Qt(e,this._firestore),r=new er(this._firestore);return super.get(e).then(s=>new Bt(this._firestore,r,t._key,s._document,new xn(!1,!1),t.converter))}};function _v(n,e,t){n=ee(n,Re);const r=Object.assign(Object.assign({},mv),t);return function(i){if(i.maxAttempts<1)throw new I(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){const c=new Oe;return i.asyncQueue.enqueueAndForget(async()=>{const u=await Ew(i);new yw(i.asyncQueue,u,a,o,c).run()}),c.promise}(Be(n),s=>e(new gv(n,s)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(){return new ni("deleteField")}function Iv(){return new Ru("serverTimestamp")}function Ev(...n){return new zw("arrayUnion",n)}function Tv(...n){return new Gw("arrayRemove",n)}function wv(n){return new Kw("increment",n)}(function(e,t=!0){(function(s){Or=s})(io),Fn(new Ft("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Re(new CI(r.getProvider("auth-internal")),new kI(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new I(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),St(El,"4.3.2",e),St(El,"4.3.2","esm2017")})();const vv="@firebase/firestore-compat",Av="0.3.21";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new I("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(){if(typeof Uint8Array>"u")throw new I("unimplemented","Uint8Arrays are not available in this environment.")}function Ph(){if(!sE())throw new I("unimplemented","Blobs are unavailable in Firestore in this environment.")}let xp=class ic{constructor(e){this._delegate=e}static fromBase64String(e){return Ph(),new ic(Vt.fromBase64String(e))}static fromUint8Array(e){return Sh(),new ic(Vt.fromUint8Array(e))}toBase64(){return Ph(),this._delegate.toBase64()}toUint8Array(){return Sh(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n){return bv(n,["next","error","complete"])}function bv(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{enableIndexedDbPersistence(e,t){return kw(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Nw(e._delegate)}clearIndexedDbPersistence(e){return Ow(e._delegate)}}class kp{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof on||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&It("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){Pw(this._delegate,e,t,r)}enableNetwork(){return Fw(this._delegate)}disableNetwork(){return Lw(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,up("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Mw(this._delegate)}onSnapshotsInSync(e){return fv(this._delegate,e)}get app(){if(!this._appCompat)throw new I("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new xr(this,mp(this._delegate,e))}catch(t){throw Ze(t,"collection()","Firestore.collection()")}}doc(e){try{return new pt(this,Xi(this._delegate,e))}catch(t){throw Ze(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Je(this,Cw(this._delegate,e))}catch(t){throw Ze(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return _v(this._delegate,t=>e(new Np(this,t)))}batch(){return Be(this._delegate),new Op(new pv(this._delegate,e=>si(this._delegate,e)))}loadBundle(e){return Bw(this._delegate,e)}namedQuery(e){return Uw(this._delegate,e).then(t=>t?new Je(this,t):null)}}class $o extends Nu{constructor(e){super(),this.firestore=e}convertBytes(e){return new xp(new Vt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return pt.forKey(t,this.firestore,null)}}function Sv(n){bI(n)}class Np{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new $o(e)}get(e){const t=kn(e);return this._delegate.get(t).then(r=>new Os(this._firestore,new Bt(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const s=kn(e);return r?(Mu("Transaction.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=kn(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=kn(e);return this._delegate.delete(t),this}}class Op{constructor(e){this._delegate=e}set(e,t,r){const s=kn(e);return r?(Mu("WriteBatch.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=kn(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=kn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Kn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new us(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ms(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Kn.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(t);return i||(i=new Kn(e,new $o(e),t),s.set(t,i)),i}}Kn.INSTANCES=new WeakMap;class pt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new $o(e)}static forPath(e,t,r){if(e.length%2!==0)throw new I("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new pt(t,new Ee(t._delegate,r,new R(e)))}static forKey(e,t,r){return new pt(t,new Ee(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new xr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new xr(this.firestore,mp(this._delegate,e))}catch(t){throw Ze(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ae(e),e instanceof Ee?pp(this._delegate,e):!1}set(e,t){t=Mu("DocumentReference.set",t);try{return t?bh(this._delegate,e,t):bh(this._delegate,e)}catch(r){throw Ze(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Rh(this._delegate,e):Rh(this._delegate,e,t,...r)}catch(s){throw Ze(s,"updateDoc()","DocumentReference.update()")}}delete(){return hv(this._delegate)}onSnapshot(...e){const t=Mp(e),r=Fp(e,s=>new Os(this.firestore,new Bt(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return Vp(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=ov(this._delegate):(e==null?void 0:e.source)==="server"?t=av(this._delegate):t=iv(this._delegate),t.then(r=>new Os(this.firestore,new Bt(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new pt(this.firestore,e?this._delegate.withConverter(Kn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ze(n,e,t){return n.message=n.message.replace(e,t),n}function Mp(n){for(const e of n)if(typeof e=="object"&&!oc(e))return e;return{}}function Fp(n,e){var t,r;let s;return oc(n[0])?s=n[0]:oc(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:i=>{s.next&&s.next(e(i))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class Os{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new pt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Dp(this._delegate,e._delegate)}}class Ms extends Os{data(e){const t=this._delegate.data(e);return RI(t!==void 0),t}}class Je{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new $o(e)}where(e,t,r){try{return new Je(this.firestore,Wt(this._delegate,Qw(e,t,r)))}catch(s){throw Ze(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Je(this.firestore,Wt(this._delegate,Yw(e,t)))}catch(r){throw Ze(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Je(this.firestore,Wt(this._delegate,Xw(e)))}catch(t){throw Ze(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Je(this.firestore,Wt(this._delegate,Jw(e)))}catch(t){throw Ze(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Je(this.firestore,Wt(this._delegate,Zw(...e)))}catch(t){throw Ze(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Je(this.firestore,Wt(this._delegate,ev(...e)))}catch(t){throw Ze(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Je(this.firestore,Wt(this._delegate,tv(...e)))}catch(t){throw Ze(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Je(this.firestore,Wt(this._delegate,nv(...e)))}catch(t){throw Ze(t,"endAt()","Query.endAt()")}}isEqual(e){return gp(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=uv(this._delegate):(e==null?void 0:e.source)==="server"?t=lv(this._delegate):t=cv(this._delegate),t.then(r=>new ac(this.firestore,new hn(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=Mp(e),r=Fp(e,s=>new ac(this.firestore,new hn(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return Vp(this._delegate,t,r)}withConverter(e){return new Je(this.firestore,e?this._delegate.withConverter(Kn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Pv{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ms(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ac{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Je(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ms(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new Pv(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Ms(this._firestore,r))})}isEqual(e){return Dp(this._delegate,e._delegate)}}class xr extends Je{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new pt(this.firestore,e):null}doc(e){try{return e===void 0?new pt(this.firestore,Xi(this._delegate)):new pt(this.firestore,Xi(this._delegate,e))}catch(t){throw Ze(t,"doc()","CollectionReference.doc()")}}add(e){return dv(this._delegate,e).then(t=>new pt(this.firestore,t))}isEqual(e){return pp(this._delegate,e._delegate)}withConverter(e){return new xr(this.firestore,e?this._delegate.withConverter(Kn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function kn(n){return ee(n,Ee)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(...e){this._delegate=new ln(...e)}static documentId(){return new Fu(ge.keyField().canonicalString())}isEqual(e){return e=ae(e),e instanceof ln?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this._delegate=e}static serverTimestamp(){const e=Iv();return e._methodName="FieldValue.serverTimestamp",new Cn(e)}static delete(){const e=yv();return e._methodName="FieldValue.delete",new Cn(e)}static arrayUnion(...e){const t=Ev(...e);return t._methodName="FieldValue.arrayUnion",new Cn(t)}static arrayRemove(...e){const t=Tv(...e);return t._methodName="FieldValue.arrayRemove",new Cn(t)}static increment(e){const t=wv(e);return t._methodName="FieldValue.increment",new Cn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv={Firestore:kp,GeoPoint:ko,Timestamp:ye,Blob:xp,Transaction:Np,WriteBatch:Op,DocumentReference:pt,DocumentSnapshot:Os,Query:Je,QueryDocumentSnapshot:Ms,QuerySnapshot:ac,CollectionReference:xr,FieldPath:Fu,FieldValue:Cn,setLogLevel:Sv,CACHE_SIZE_UNLIMITED:xw};function Dv(n,e){n.INTERNAL.registerComponent(new Ft("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},Cv)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(n){Dv(n,(e,t)=>new kp(e,t,new Rv)),n.registerVersion(vv,Av)}Vv(Hn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="firebasestorage.googleapis.com",Bp="storageBucket",xv=2*60*1e3,kv=10*60*1e3,Nv=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends dn{constructor(e,t,r=0){super(_a(e),`Firebase Storage: ${t} (${_a(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _a(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var me;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(me||(me={}));function _a(n){return"storage/"+n}function Lu(){const n="An unknown error occurred, please check the error payload for server response.";return new Te(me.UNKNOWN,n)}function Ov(n){return new Te(me.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Mv(n){return new Te(me.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Fv(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te(me.UNAUTHENTICATED,n)}function Lv(){return new Te(me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Bv(n){return new Te(me.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Up(){return new Te(me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qp(){return new Te(me.CANCELED,"User canceled the upload/download.")}function Uv(n){return new Te(me.INVALID_URL,"Invalid URL '"+n+"'.")}function qv(n){return new Te(me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function $v(){return new Te(me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Bp+"' property when initializing the app?")}function $p(){return new Te(me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jv(){return new Te(me.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function zv(){return new Te(me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Gv(n){return new Te(me.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yr(n){return new Te(me.INVALID_ARGUMENT,n)}function jp(){return new Te(me.APP_DELETED,"The Firebase app was deleted.")}function zp(n){return new Te(me.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ls(n,e){return new Te(me.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Xr(n){throw new Te(me.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=He.makeFromUrl(e,t)}catch{return new He(e,"")}if(r.path==="")return r;throw qv(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(N){N.path_=decodeURIComponent(N.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},_=t===Lp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,y="([^?#]*)",A=new RegExp(`^https?://${_}/${s}/${y}`,"i"),S=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:A,indices:{bucket:1,path:2},postModify:u}];for(let N=0;N<S.length;N++){const F=S[N],b=F.regex.exec(e);if(b){const x=b[F.indices.bucket];let Q=b[F.indices.path];Q||(Q=""),r=new He(x,Q),F.postModify(r);break}}if(r==null)throw Uv(e);return r}}class Kv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(n,e,t){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...y){u||(u=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,n(f,c())},y)}function d(){i&&clearTimeout(i)}function f(y,...A){if(u){d();return}if(y){d(),l.call(null,y,...A);return}if(c()||o){d(),l.call(null,y,...A);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,h(S)}let p=!1;function _(y){p||(p=!0,d(),!u&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,_(!0)},t),_}function Hv(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(n){return n!==void 0}function Yv(n){return typeof n=="function"}function Xv(n){return typeof n=="object"&&!Array.isArray(n)}function jo(n){return typeof n=="string"||n instanceof String}function Ch(n){return Bu()&&n instanceof Blob}function Bu(){return typeof Blob<"u"&&!id()}function cc(n,e,t,r){if(r<e)throw yr(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw yr(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Gp(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var On;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(On||(On={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,t,r,s,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new yi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===On.NO_ERROR,c=i.getStatus();if(!a||Kp(c,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===On.ABORT;r(!1,new yi(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new yi(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Qv(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Lu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?jp():qp();o(c)}else{const c=Up();o(c)}};this.canceled_?t(!1,new yi(!1,null,!0)):this.backoffId_=Wv(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Hv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Zv(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function eA(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tA(n,e){e&&(n["X-Firebase-GMPID"]=e)}function nA(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function rA(n,e,t,r,s,i,o=!0){const a=Gp(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return tA(u,e),Zv(u,t),eA(u,i),nA(u,r),new Jv(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function iA(...n){const e=sA();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Bu())return new Blob(n);throw new Te(me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oA(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(n){if(typeof atob>"u")throw Gv("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ya{constructor(e,t){this.data=e,this.contentType=t||null}}function Wp(n,e){switch(n){case gt.RAW:return new ya(Hp(e));case gt.BASE64:case gt.BASE64URL:return new ya(Qp(n,e));case gt.DATA_URL:return new ya(uA(e),lA(e))}throw Lu()}function Hp(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cA(n){let e;try{e=decodeURIComponent(n)}catch{throw ls(gt.DATA_URL,"Malformed data URL.")}return Hp(e)}function Qp(n,e){switch(n){case gt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ls(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case gt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ls(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=aA(e)}catch(s){throw s.message.includes("polyfill")?s:ls(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Yp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ls(gt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=hA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uA(n){const e=new Yp(n);return e.base64?Qp(gt.BASE64,e.rest):cA(e.rest)}function lA(n){return new Yp(n).contentType}function hA(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){let r=0,s="";Ch(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ch(this.data_)){const r=this.data_,s=oA(r,e,t);return s===null?null:new xt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new xt(r,!0)}}static getBlob(...e){if(Bu()){const t=e.map(r=>r instanceof xt?r.data_:r);return new xt(iA.apply(null,t))}else{const t=e.map(o=>jo(o)?Wp(gt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new xt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(n){let e;try{e=JSON.parse(n)}catch{return null}return Xv(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function fA(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Xp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(n,e){return e}class Xe{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||mA}}let Ii=null;function pA(n){return!jo(n)||n.length<2?n:Xp(n)}function zo(){if(Ii)return Ii;const n=[];n.push(new Xe("bucket")),n.push(new Xe("generation")),n.push(new Xe("metageneration")),n.push(new Xe("name","fullPath",!0));function e(i,o){return pA(o)}const t=new Xe("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new Xe("size");return s.xform=r,n.push(s),n.push(new Xe("timeCreated")),n.push(new Xe("updated")),n.push(new Xe("md5Hash",null,!0)),n.push(new Xe("cacheControl",null,!0)),n.push(new Xe("contentDisposition",null,!0)),n.push(new Xe("contentEncoding",null,!0)),n.push(new Xe("contentLanguage",null,!0)),n.push(new Xe("contentType",null,!0)),n.push(new Xe("metadata","customMetadata",!0)),Ii=n,Ii}function gA(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new He(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function _A(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return gA(r,n),r}function Jp(n,e,t){const r=Uu(e);return r===null?null:_A(n,r,t)}function yA(n,e,t,r){const s=Uu(e);if(s===null||!jo(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=n.bucket,h=n.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=In(d,t,r),p=Gp({alt:"media",token:u});return f+p})[0]}function qu(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="prefixes",Vh="items";function IA(n,e,t){const r={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[Dh])for(const s of t[Dh]){const i=s.replace(/\/$/,""),o=n._makeStorageReference(new He(e,i));r.prefixes.push(o)}if(t[Vh])for(const s of t[Vh]){const i=n._makeStorageReference(new He(e,s.name));r.items.push(i)}return r}function EA(n,e,t){const r=Uu(t);return r===null?null:IA(n,e,r)}class jt{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n){if(!n)throw Lu()}function Go(n,e){function t(r,s){const i=Jp(n,s,e);return Ct(i!==null),i}return t}function TA(n,e){function t(r,s){const i=EA(n,e,s);return Ct(i!==null),i}return t}function wA(n,e){function t(r,s){const i=Jp(n,s,e);return Ct(i!==null),yA(i,s,n.host,n._protocol)}return t}function jr(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Lv():s=Fv():t.getStatus()===402?s=Mv(n.bucket):t.getStatus()===403?s=Bv(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Ko(n){const e=jr(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Ov(n.path)),i.serverResponse=s.serverResponse,i}return t}function Zp(n,e,t){const r=e.fullServerUrl(),s=In(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new jt(s,i,Go(n,t),o);return a.errorHandler=Ko(e),a}function vA(n,e,t,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",t&&t.length>0&&(i.delimiter=t),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),a=In(o,n.host,n._protocol),c="GET",u=n.maxOperationRetryTime,l=new jt(a,c,TA(n,e.bucket),u);return l.urlParams=i,l.errorHandler=jr(e),l}function AA(n,e,t){const r=e.fullServerUrl(),s=In(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new jt(s,i,wA(n,t),o);return a.errorHandler=Ko(e),a}function bA(n,e,t,r){const s=e.fullServerUrl(),i=In(s,n.host,n._protocol),o="PATCH",a=qu(t,r),c={"Content-Type":"application/json; charset=utf-8"},u=n.maxOperationRetryTime,l=new jt(i,o,Go(n,r),u);return l.headers=c,l.body=a,l.errorHandler=Ko(e),l}function RA(n,e){const t=e.fullServerUrl(),r=In(t,n.host,n._protocol),s="DELETE",i=n.maxOperationRetryTime;function o(c,u){}const a=new jt(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=Ko(e),a}function SA(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function eg(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=SA(null,e)),r}function PA(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let N=0;N<2;N++)S=S+Math.random().toString().slice(2);return S}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=eg(e,r,s),l=qu(u,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=xt.getBlob(h,r,d);if(f===null)throw $p();const p={name:u.fullPath},_=In(i,n.host,n._protocol),y="POST",A=n.maxUploadRetryTime,v=new jt(_,y,Go(n,t),A);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=jr(e),v}class Zi{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function $u(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Ct(!1)}return Ct(!!t&&(e||["active"]).indexOf(t)!==-1),t}function CA(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o=eg(e,r,s),a={name:o.fullPath},c=In(i,n.host,n._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=qu(o,t),d=n.maxUploadRetryTime;function f(_){$u(_);let y;try{y=_.getResponseHeader("X-Goog-Upload-URL")}catch{Ct(!1)}return Ct(jo(y)),y}const p=new jt(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=jr(e),p}function DA(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const l=$u(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Ct(!1)}h||Ct(!1);const d=Number(h);return Ct(!isNaN(d)),new Zi(d,r.size(),l==="final")}const o="POST",a=n.maxUploadRetryTime,c=new jt(t,o,i,a);return c.headers=s,c.errorHandler=jr(e),c}const xh=256*1024;function VA(n,e,t,r,s,i,o,a){const c=new Zi(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw jv();const u=c.total-c.current;let l=u;s>0&&(l=Math.min(l,s));const h=c.current,d=h+l;let f="";l===0?f="finalize":u===l?f="upload, finalize":f="upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},_=r.slice(h,d);if(_===null)throw $p();function y(N,F){const b=$u(N,["active","final"]),x=c.current+l,Q=r.size();let se;return b==="final"?se=Go(e,i)(N,F):se=null,new Zi(x,Q,b==="final",se)}const A="POST",v=e.maxUploadRetryTime,S=new jt(t,A,y,v);return S.headers=p,S.body=_.uploadData(),S.progressCallback=a||null,S.errorHandler=jr(n),S}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA={STATE_CHANGED:"state_changed"},et={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ia(n){switch(n){case"running":case"pausing":case"canceling":return et.RUNNING;case"paused":return et.PAUSED;case"success":return et.SUCCESS;case"canceled":return et.CANCELED;case"error":return et.ERROR;default:return et.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t,r){if(Yv(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class NA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=On.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=On.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=On.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw Xr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class OA extends NA{initXhr(){this.xhr_.responseType="text"}}function Tt(){return new OA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=zo(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(me.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Kp(s.status,[]))if(i)s=Up();else{this.sleepTime=Math.max(this.sleepTime*2,Nv),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(me.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=CA(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Tt,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=DA(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Tt,t,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=xh*this._chunkMultiplier,t=new Zi(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=VA(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Tt,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){xh*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=Zp(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Tt,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=PA(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Tt,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=qp(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ia(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new kA(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ia(this._state)){case et.SUCCESS:or(this._resolve.bind(null,this.snapshot))();break;case et.CANCELED:case et.ERROR:const t=this._reject;or(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ia(this._state)){case et.RUNNING:case et.PAUSED:e.next&&or(e.next.bind(e,this.snapshot))();break;case et.SUCCESS:e.complete&&or(e.complete.bind(e))();break;case et.CANCELED:case et.ERROR:e.error&&or(e.error.bind(e,this._error))();break;default:e.error&&or(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t){this._service=e,t instanceof He?this._location=t:this._location=He.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Wn(e,t)}get root(){const e=new He(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Xp(this._location.path)}get storage(){return this._service}get parent(){const e=dA(this._location.path);if(e===null)return null;const t=new He(this._location.bucket,e);return new Wn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw zp(e)}}function MA(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new tg(n,new xt(e),t)}function FA(n){const e={prefixes:[],items:[]};return ng(n,e).then(()=>e)}async function ng(n,e,t){const s=await rg(n,{pageToken:t});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await ng(n,e,s.nextPageToken)}function rg(n,e){e!=null&&typeof e.maxResults=="number"&&cc("options.maxResults",1,1e3,e.maxResults);const t=e||{},r=vA(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(r,Tt)}function LA(n){n._throwIfRoot("getMetadata");const e=Zp(n.storage,n._location,zo());return n.storage.makeRequestWithTokens(e,Tt)}function BA(n,e){n._throwIfRoot("updateMetadata");const t=bA(n.storage,n._location,e,zo());return n.storage.makeRequestWithTokens(t,Tt)}function UA(n){n._throwIfRoot("getDownloadURL");const e=AA(n.storage,n._location,zo());return n.storage.makeRequestWithTokens(e,Tt).then(t=>{if(t===null)throw zv();return t})}function qA(n){n._throwIfRoot("deleteObject");const e=RA(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Tt)}function sg(n,e){const t=fA(n._location.path,e),r=new He(n._location.bucket,t);return new Wn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(n){return/^[A-Za-z]+:\/\//.test(n)}function jA(n,e){return new Wn(n,e)}function ig(n,e){if(n instanceof ju){const t=n;if(t._bucket==null)throw $v();const r=new Wn(t,t._bucket);return e!=null?ig(r,e):r}else return e!==void 0?sg(n,e):n}function zA(n,e){if(e&&$A(e)){if(n instanceof ju)return jA(n,e);throw yr("To use ref(service, url), the first argument must be a Storage instance.")}else return ig(n,e)}function kh(n,e){const t=e==null?void 0:e[Bp];return t==null?null:He.makeFromBucketSpec(t,n)}function GA(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:sd(s,n.app.options.projectId))}class ju{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Lp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xv,this._maxUploadRetryTime=kv,this._requests=new Set,s!=null?this._bucket=He.makeFromBucketSpec(s,this._host):this._bucket=kh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=He.makeFromBucketSpec(this._url,e):this._bucket=kh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Kv(jp());{const o=rA(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Nh="@firebase/storage",Oh="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="storage";function WA(n,e,t){return n=ae(n),MA(n,e,t)}function HA(n){return n=ae(n),LA(n)}function QA(n,e){return n=ae(n),BA(n,e)}function YA(n,e){return n=ae(n),rg(n,e)}function XA(n){return n=ae(n),FA(n)}function JA(n){return n=ae(n),UA(n)}function ZA(n){return n=ae(n),qA(n)}function Mh(n,e){return n=ae(n),zA(n,e)}function eb(n,e){return sg(n,e)}function tb(n,e,t,r={}){GA(n,e,t,r)}function nb(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new ju(t,r,s,e,io)}function rb(){Fn(new Ft(KA,nb,"PUBLIC").setMultipleInstances(!0)),St(Nh,Oh,""),St(Nh,Oh,"esm2017")}rb();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,r){this._delegate=e,this.task=t,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ei(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(r=>{if(e)return e(new Ei(r,this,this._ref))},t)}on(e,t,r,s){let i;return t&&(typeof t=="function"?i=o=>t(new Ei(o,this,this._ref)):i={next:t.next?o=>t.next(new Ei(o,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,r||void 0,s||void 0)}}class Lh{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Mt(e,this._service))}get items(){return this._delegate.items.map(e=>new Mt(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=eb(this._delegate,e);return new Mt(t,this.storage)}get root(){return new Mt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Mt(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new Fh(WA(this._delegate,e,t),this)}putString(e,t=gt.RAW,r){this._throwIfRoot("putString");const s=Wp(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),new Fh(new tg(this._delegate,new xt(s.data,!0),i),this)}listAll(){return XA(this._delegate).then(e=>new Lh(e,this.storage))}list(e){return YA(this._delegate,e||void 0).then(t=>new Lh(t,this.storage))}getMetadata(){return HA(this._delegate)}updateMetadata(e){return QA(this._delegate,e)}getDownloadURL(){return JA(this._delegate)}delete(){return this._throwIfRoot("delete"),ZA(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw zp(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Bh(e))throw yr("ref() expected a child path but got a URL, use refFromURL instead.");return new Mt(Mh(this._delegate,e),this)}refFromURL(e){if(!Bh(e))throw yr("refFromURL() expected a full URL but got a child path, use ref() instead.");try{He.makeFromUrl(e,this._delegate.host)}catch{throw yr("refFromUrl() expected a valid full URL but got an invalid one.")}return new Mt(Mh(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,r={}){tb(this._delegate,e,t,r)}}function Bh(n){return/^[A-Za-z]+:\/\//.test(n)}const sb="@firebase/storage-compat",ib="0.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="storage-compat";function ab(n,{instanceIdentifier:e}){const t=n.getProvider("app-compat").getImmediate(),r=n.getProvider("storage").getImmediate({identifier:e});return new og(t,r)}function cb(n){const e={TaskState:et,TaskEvent:xA,StringFormat:gt,Storage:og,Reference:Mt};n.INTERNAL.registerComponent(new Ft(ob,ab,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),n.registerVersion(sb,ib)}cb(Hn);const ub={apiKey:{}.VITE_FIREBASE_KEY,authDomain:"ttmfapp.firebaseapp.com",projectId:"ttmfapp",storageBucket:"ttmfapp.appspot.com",messagingSenderId:"476592553528",appId:"1:476592553528:web:6ed5ffea611934e8db70cd",measurementId:"G-4ENS64NWL6"};Hn.initializeApp(ub);Hn.firestore();const lb=Hn.storage(),hb=async(n,e,t)=>new Promise((r,s)=>{const o=lb.ref().child(`search/${e}/${t}.${n.type.split("/").at(-1)}`);o.put(n).on(Hn.storage.TaskEvent.STATE_CHANGED,()=>{},a=>{s(a.message)},()=>{r(o.getDownloadURL())})});function Uh(n,e,t){const r=n.slice();return r[28]=e[t],r[30]=t,r}function qh(n,e,t){const r=n.slice();return r[31]=e[t],r}function $h(n,e,t){const r=n.slice();return r[28]=e[t],r}function db(n){let e,t;return{c(){e=B("img"),this.h()},l(r){e=U(r,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Wu(e.src,t=n[7])||L(e,"src",t),L(e,"alt","Uploaded Logo"),L(e,"class","h-10 max-w-xs object-contain")},m(r,s){te(r,e,s)},p(r,s){s[0]&128&&!Wu(e.src,t=r[7])&&L(e,"src",t)},d(r){r&&k(e)}}}function fb(n){let e,t;return{c(){e=B("span"),t=we(n[8]),this.h()},l(r){e=U(r,"SPAN",{class:!0});var s=Z(e);t=ve(s,n[8]),s.forEach(k),this.h()},h(){L(e,"class","shrink-0 text-base capitalize rounded-full px-2 border-2 text-ttmfLightGreen border-ttmfLightGreen/20 bg-ttmfLightGreen/10")},m(r,s){te(r,e,s),D(e,t)},p(r,s){s[0]&256&&Rt(t,r[8])},d(r){r&&k(e)}}}function jh(n){let e,t,r='<p class="font-bold">International Trademarks</p>',s,i,o=Ir(Object.keys(n[9])),a=[];for(let c=0;c<o.length;c+=1)a[c]=zh($h(n,o,c));return{c(){e=B("div"),t=B("div"),t.innerHTML=r,s=ce(),i=B("div");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=U(c,"DIV",{class:!0});var u=Z(e);t=U(u,"DIV",{class:!0,"data-svelte-h":!0}),lt(t)!=="svelte-p3lo8j"&&(t.innerHTML=r),s=ue(u),i=U(u,"DIV",{class:!0});var l=Z(i);for(let h=0;h<a.length;h+=1)a[h].l(l);l.forEach(k),u.forEach(k),this.h()},h(){L(t,"class","border-b pb-3 mb-3"),L(i,"class","flex flex-wrap items-center gap-2"),L(e,"class","bg-white p-5 rounded-lg mt-5")},m(c,u){te(c,e,u),D(e,t),D(e,s),D(e,i);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(i,null)},p(c,u){if(u[0]&512){o=Ir(Object.keys(c[9]));let l;for(l=0;l<o.length;l+=1){const h=$h(c,o,l);a[l]?a[l].p(h,u):(a[l]=zh(h),a[l].c(),a[l].m(i,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=o.length}},d(c){c&&k(e),lc(a,c)}}}function zh(n){let e,t=n[28]+"",r;return{c(){e=B("span"),r=we(t),this.h()},l(s){e=U(s,"SPAN",{class:!0});var i=Z(e);r=ve(i,t),i.forEach(k),this.h()},h(){L(e,"class","px-2 py-0 rounded-full border-2 border-ttmfCreme/30 bg-ttmfBeige text-ttmfBlack text-sm")},m(s,i){te(s,e,i),D(e,r)},p(s,i){i[0]&512&&t!==(t=s[28]+"")&&Rt(r,t)},d(s){s&&k(e)}}}function mb(n){let e,t='<p class="text-ttmfCreme/50 font-bold">Search &amp; Add classes to continue</p>';return{c(){e=B("div"),e.innerHTML=t,this.h()},l(r){e=U(r,"DIV",{class:!0,"data-svelte-h":!0}),lt(e)!=="svelte-13gsfnf"&&(e.innerHTML=t),this.h()},h(){L(e,"class","py-6")},m(r,s){te(r,e,s)},p:Ne,i:Ne,o:Ne,d(r){r&&k(e)}}}function pb(n){let e,t,r,s="Subtotal",i,o,a,c,u,l,h,d="GST",f,p,_,y,A,v,S,N="Total price",F,b,x,Q=n[2]+n[3]+"",se,De,Ke=Ir(n[1]),G=[];for(let w=0;w<Ke.length;w+=1)G[w]=Wh(Uh(n,Ke,w));const ht=w=>tt(G[w],1,1,()=>{G[w]=null});return{c(){for(let w=0;w<G.length;w+=1)G[w].c();e=ce(),t=B("div"),r=B("p"),r.textContent=s,i=ce(),o=B("p"),a=we("AU$"),c=we(n[2]),u=ce(),l=B("div"),h=B("p"),h.textContent=d,f=ce(),p=B("p"),_=we("AU$"),y=we(n[3]),A=ce(),v=B("div"),S=B("p"),S.textContent=N,F=ce(),b=B("p"),x=we("AU$"),se=we(Q),this.h()},l(w){for(let pe=0;pe<G.length;pe+=1)G[pe].l(w);e=ue(w),t=U(w,"DIV",{class:!0});var T=Z(t);r=U(T,"P",{"data-svelte-h":!0}),lt(r)!=="svelte-1pz2jt4"&&(r.textContent=s),i=ue(T),o=U(T,"P",{});var q=Z(o);a=ve(q,"AU$"),c=ve(q,n[2]),q.forEach(k),T.forEach(k),u=ue(w),l=U(w,"DIV",{class:!0});var ie=Z(l);h=U(ie,"P",{"data-svelte-h":!0}),lt(h)!=="svelte-1iyrlke"&&(h.textContent=d),f=ue(ie),p=U(ie,"P",{});var Ue=Z(p);_=ve(Ue,"AU$"),y=ve(Ue,n[3]),Ue.forEach(k),ie.forEach(k),A=ue(w),v=U(w,"DIV",{class:!0});var W=Z(v);S=U(W,"P",{"data-svelte-h":!0}),lt(S)!=="svelte-xgu0sn"&&(S.textContent=N),F=ue(W),b=U(W,"P",{});var En=Z(b);x=ve(En,"AU$"),se=ve(En,Q),En.forEach(k),W.forEach(k),this.h()},h(){L(t,"class","flex justify-between gap-2 font-bold text-ttmfBlack/50 pt-6"),L(l,"class","flex justify-between gap-2 font-bold text-ttmfBlack/50 pt-2"),L(v,"class","flex justify-between gap-2 text-xl font-bold text-ttmfBlack pt-4 pb-6")},m(w,T){for(let q=0;q<G.length;q+=1)G[q]&&G[q].m(w,T);te(w,e,T),te(w,t,T),D(t,r),D(t,i),D(t,o),D(o,a),D(o,c),te(w,u,T),te(w,l,T),D(l,h),D(l,f),D(l,p),D(p,_),D(p,y),te(w,A,T),te(w,v,T),D(v,S),D(v,F),D(v,b),D(b,x),D(b,se),De=!0},p(w,T){if(T[0]&28690){Ke=Ir(w[1]);let q;for(q=0;q<Ke.length;q+=1){const ie=Uh(w,Ke,q);G[q]?(G[q].p(ie,T),ze(G[q],1)):(G[q]=Wh(ie),G[q].c(),ze(G[q],1),G[q].m(e.parentNode,e))}for(hs(),q=Ke.length;q<G.length;q+=1)ht(q);ds()}(!De||T[0]&4)&&Rt(c,w[2]),(!De||T[0]&8)&&Rt(y,w[3]),(!De||T[0]&12)&&Q!==(Q=w[2]+w[3]+"")&&Rt(se,Q)},i(w){if(!De){for(let T=0;T<Ke.length;T+=1)ze(G[T]);De=!0}},o(w){G=G.filter(Boolean);for(let T=0;T<G.length;T+=1)tt(G[T]);De=!1},d(w){w&&(k(e),k(t),k(u),k(l),k(A),k(v)),lc(G,w)}}}function Gh(n){let e,t,r=n[31]+"",s,i,o,a,c,u,l,h,d;a=new wg({props:{size:"12",strokeWidth:"3"}});function f(){return n[16](n[28],n[31])}return{c(){e=B("div"),t=B("p"),s=we(r),i=ce(),o=B("button"),eo(a.$$.fragment),c=ce(),this.h()},l(p){e=U(p,"DIV",{class:!0});var _=Z(e);t=U(_,"P",{class:!0});var y=Z(t);s=ve(y,r),y.forEach(k),i=ue(_),o=U(_,"BUTTON",{class:!0});var A=Z(o);to(a.$$.fragment,A),A.forEach(k),c=ue(_),_.forEach(k),this.h()},h(){L(t,"class","font-bold text-ttmfLightGreen"),L(o,"class","shrink-0 w-5 h-5 rounded-full flex flex-col justify-center items-center text-white bg-ttmfLightGreen hover:bg-ttmfRed"),L(e,"class",u="flex gap-4 justify-between text-sm "+(n[28].descriptions.length>1?"py-3":""))},m(p,_){te(p,e,_),D(e,t),D(t,s),D(e,i),D(e,o),no(a,o,null),D(e,c),l=!0,h||(d=Zt(o,"click",f),h=!0)},p(p,_){n=p,(!l||_[0]&18)&&r!==(r=n[31]+"")&&Rt(s,r),(!l||_[0]&2&&u!==(u="flex gap-4 justify-between text-sm "+(n[28].descriptions.length>1?"py-3":"")))&&L(e,"class",u)},i(p){l||(ze(a.$$.fragment,p),l=!0)},o(p){tt(a.$$.fragment,p),l=!1},d(p){p&&k(e),ro(a),h=!1,d()}}}function Kh(n){let e,t,r,s=n[28].descriptions.length-1+"",i,o,a,c;function u(){return n[17](n[28])}return{c(){e=B("button"),t=B("p"),r=we("+"),i=we(s),o=we(" more"),this.h()},l(l){e=U(l,"BUTTON",{});var h=Z(e);t=U(h,"P",{class:!0});var d=Z(t);r=ve(d,"+"),i=ve(d,s),o=ve(d," more"),d.forEach(k),h.forEach(k),this.h()},h(){L(t,"class","text-ttmfRed font-bold text-sm")},m(l,h){te(l,e,h),D(e,t),D(t,r),D(t,i),D(t,o),a||(c=Zt(e,"click",u),a=!0)},p(l,h){n=l,h[0]&2&&s!==(s=n[28].descriptions.length-1+"")&&Rt(i,s)},d(l){l&&k(e),a=!1,c()}}}function Wh(n){let e,t,r,s,i,o=n[28].class+"",a,c,u,l=n[28].descriptions.length+"",h,d,f=n[28].descriptions.length>1?"descriptions":"description",p,_,y,A,v=n[14](n[30])+"",S,N,F,b,x="IP Australia Fee",Q,se,De,Ke,G,ht,w,T,q,ie,Ue=Ir(n[4]===n[28].class?n[28].descriptions:n[28].descriptions.slice(0,1)),W=[];for(let Y=0;Y<Ue.length;Y+=1)W[Y]=Gh(qh(n,Ue,Y));const En=Y=>tt(W[Y],1,1,()=>{W[Y]=null});let pe=n[28].descriptions.length>1&&n[4]!==n[28].class&&Kh(n);return{c(){e=B("div"),t=B("div"),r=B("div"),s=B("p"),i=we("Class "),a=we(o),c=ce(),u=B("span"),h=we(l),d=ce(),p=we(f),_=ce(),y=B("p"),A=we("AU$"),S=we(v),N=ce(),F=B("div"),b=B("p"),b.textContent=x,Q=ce(),se=B("p"),De=we("AU$"),Ke=we(n[12]),G=ce(),ht=B("div"),w=B("div"),T=B("div");for(let Y=0;Y<W.length;Y+=1)W[Y].c();q=ce(),pe&&pe.c(),this.h()},l(Y){e=U(Y,"DIV",{class:!0});var Ie=Z(e);t=U(Ie,"DIV",{class:!0});var he=Z(t);r=U(he,"DIV",{class:!0});var Tn=Z(r);s=U(Tn,"P",{class:!0});var Wo=Z(s);i=ve(Wo,"Class "),a=ve(Wo,o),Wo.forEach(k),c=ue(Tn),u=U(Tn,"SPAN",{class:!0});var ii=Z(u);h=ve(ii,l),d=ue(ii),p=ve(ii,f),ii.forEach(k),Tn.forEach(k),_=ue(he),y=U(he,"P",{class:!0});var Ho=Z(y);A=ve(Ho,"AU$"),S=ve(Ho,v),Ho.forEach(k),he.forEach(k),N=ue(Ie),F=U(Ie,"DIV",{class:!0});var oi=Z(F);b=U(oi,"P",{"data-svelte-h":!0}),lt(b)!=="svelte-1v8b1xx"&&(b.textContent=x),Q=ue(oi),se=U(oi,"P",{});var Qo=Z(se);De=ve(Qo,"AU$"),Ke=ve(Qo,n[12]),Qo.forEach(k),oi.forEach(k),G=ue(Ie),ht=U(Ie,"DIV",{class:!0});var zu=Z(ht);w=U(zu,"DIV",{class:!0});var ai=Z(w);T=U(ai,"DIV",{class:!0});var Gu=Z(T);for(let Yo=0;Yo<W.length;Yo+=1)W[Yo].l(Gu);Gu.forEach(k),q=ue(ai),pe&&pe.l(ai),ai.forEach(k),zu.forEach(k),Ie.forEach(k),this.h()},h(){L(s,"class","font-bold"),L(u,"class","text-xs text-ttmfBlack"),L(r,"class","flex flex-col"),L(y,"class","font-bold text-ttmfRed"),L(t,"class","flex justify-between gap-2 border-b pb-3 mb-3"),L(F,"class","flex justify-between gap-2 font-bold text-sm text-ttmfLightGreen/70"),L(T,"class","divide-y pt-2"),L(w,"class","pt-2"),L(ht,"class","flex flex-col divide-y"),L(e,"class","bg-white p-5 rounded-lg mt-5")},m(Y,Ie){te(Y,e,Ie),D(e,t),D(t,r),D(r,s),D(s,i),D(s,a),D(r,c),D(r,u),D(u,h),D(u,d),D(u,p),D(t,_),D(t,y),D(y,A),D(y,S),D(e,N),D(e,F),D(F,b),D(F,Q),D(F,se),D(se,De),D(se,Ke),D(e,G),D(e,ht),D(ht,w),D(w,T);for(let he=0;he<W.length;he+=1)W[he]&&W[he].m(T,null);D(w,q),pe&&pe.m(w,null),ie=!0},p(Y,Ie){if((!ie||Ie[0]&2)&&o!==(o=Y[28].class+"")&&Rt(a,o),(!ie||Ie[0]&2)&&l!==(l=Y[28].descriptions.length+"")&&Rt(h,l),(!ie||Ie[0]&2)&&f!==(f=Y[28].descriptions.length>1?"descriptions":"description")&&Rt(p,f),Ie[0]&8210){Ue=Ir(Y[4]===Y[28].class?Y[28].descriptions:Y[28].descriptions.slice(0,1));let he;for(he=0;he<Ue.length;he+=1){const Tn=qh(Y,Ue,he);W[he]?(W[he].p(Tn,Ie),ze(W[he],1)):(W[he]=Gh(Tn),W[he].c(),ze(W[he],1),W[he].m(T,null))}for(hs(),he=Ue.length;he<W.length;he+=1)En(he);ds()}Y[28].descriptions.length>1&&Y[4]!==Y[28].class?pe?pe.p(Y,Ie):(pe=Kh(Y),pe.c(),pe.m(w,null)):pe&&(pe.d(1),pe=null)},i(Y){if(!ie){for(let Ie=0;Ie<Ue.length;Ie+=1)ze(W[Ie]);ie=!0}},o(Y){W=W.filter(Boolean);for(let Ie=0;Ie<W.length;Ie+=1)tt(W[Ie]);ie=!1},d(Y){Y&&k(e),lc(W,Y),pe&&pe.d()}}}function gb(n){let e,t="Continue";return{c(){e=B("button"),e.textContent=t,this.h()},l(r){e=U(r,"BUTTON",{class:!0,"data-svelte-h":!0}),lt(e)!=="svelte-s971s6"&&(e.textContent=t),this.h()},h(){e.disabled=!0,L(e,"class","bg-ttmfRed/50 text-white font-bold px-12 py-5 rounded w-full")},m(r,s){te(r,e,s)},p:Ne,i:Ne,o:Ne,d(r){r&&k(e)}}}function _b(n){let e,t,r,s,i,o,a,c,u,l,h,d,f,p,_,y,A,v;const S=[wb,Tb],N=[];function F(b,x){return b[5]?0:1}return p=F(n),_=N[p]=S[p](n),{c(){e=B("form"),t=B("input"),s=ce(),i=B("input"),a=ce(),c=B("input"),u=ce(),l=B("input"),d=ce(),f=B("button"),_.c(),this.h()},l(b){e=U(b,"FORM",{method:!0,action:!0});var x=Z(e);t=U(x,"INPUT",{type:!0,name:!0}),s=ue(x),i=U(x,"INPUT",{type:!0,name:!0}),a=ue(x),c=U(x,"INPUT",{type:!0,name:!0}),u=ue(x),l=U(x,"INPUT",{type:!0,name:!0}),d=ue(x),f=U(x,"BUTTON",{type:!0,class:!0});var Q=Z(f);_.l(Q),Q.forEach(k),x.forEach(k),this.h()},h(){L(t,"type","hidden"),L(t,"name","personal_details"),t.value=r=JSON.stringify(n[6]),L(i,"type","hidden"),L(i,"name","items"),i.value=o=JSON.stringify(n[1].map(n[23])),L(c,"type","hidden"),L(c,"name","government_fee"),c.value=n[12],L(l,"type","hidden"),L(l,"name","international_trademarks"),l.value=h=Object.keys(n[9]).join(", "),L(f,"type","submit"),f.disabled=n[5],L(f,"class","sidebarNext inline-flex gap-4 items-center justify-center"),L(e,"method","post"),L(e,"action","?/checkout")},m(b,x){te(b,e,x),D(e,t),D(e,s),D(e,i),D(e,a),D(e,c),D(e,u),D(e,l),D(e,d),D(e,f),N[p].m(f,null),y=!0,A||(v=hg(kg.call(null,e,n[15])),A=!0)},p(b,x){(!y||x[0]&64&&r!==(r=JSON.stringify(b[6])))&&(t.value=r),(!y||x[0]&2&&o!==(o=JSON.stringify(b[1].map(b[23]))))&&(i.value=o),(!y||x[0]&512&&h!==(h=Object.keys(b[9]).join(", ")))&&(l.value=h);let Q=p;p=F(b),p!==Q&&(hs(),tt(N[Q],1,1,()=>{N[Q]=null}),ds(),_=N[p],_||(_=N[p]=S[p](b),_.c()),ze(_,1),_.m(f,null)),(!y||x[0]&32)&&(f.disabled=b[5])},i(b){y||(ze(_),y=!0)},o(b){tt(_),y=!1},d(b){b&&k(e),N[p].d(),A=!1,v()}}}function yb(n){let e,t="Continue to payment",r,s,i="Back to details",o,a;return{c(){e=B("button"),e.textContent=t,r=ce(),s=B("button"),s.textContent=i,this.h()},l(c){e=U(c,"BUTTON",{class:!0,"data-svelte-h":!0}),lt(e)!=="svelte-1blyl3y"&&(e.textContent=t),r=ue(c),s=U(c,"BUTTON",{class:!0,"data-svelte-h":!0}),lt(s)!=="svelte-1odhh3x"&&(s.textContent=i),this.h()},h(){L(e,"class","sidebarNext"),L(s,"class","sidebarPrevious")},m(c,u){te(c,e,u),te(c,r,u),te(c,s,u),o||(a=[Zt(e,"click",n[21]),Zt(s,"click",n[22])],o=!0)},p:Ne,i:Ne,o:Ne,d(c){c&&(k(e),k(r),k(s)),o=!1,Hh(a)}}}function Ib(n){let e,t="Continue to intl. trademarks",r,s,i="Back to classes",o,a;return{c(){e=B("button"),e.textContent=t,r=ce(),s=B("button"),s.textContent=i,this.h()},l(c){e=U(c,"BUTTON",{class:!0,"data-svelte-h":!0}),lt(e)!=="svelte-z6hlwn"&&(e.textContent=t),r=ue(c),s=U(c,"BUTTON",{class:!0,"data-svelte-h":!0}),lt(s)!=="svelte-t67hr1"&&(s.textContent=i),this.h()},h(){L(e,"class","sidebarNext"),L(s,"class","sidebarPrevious")},m(c,u){te(c,e,u),te(c,r,u),te(c,s,u),o||(a=[Zt(e,"click",n[19]),Zt(s,"click",n[20])],o=!0)},p:Ne,i:Ne,o:Ne,d(c){c&&(k(e),k(r),k(s)),o=!1,Hh(a)}}}function Eb(n){let e,t="Continue to details",r,s;return{c(){e=B("button"),e.textContent=t,this.h()},l(i){e=U(i,"BUTTON",{class:!0,"data-svelte-h":!0}),lt(e)!=="svelte-1ouig59"&&(e.textContent=t),this.h()},h(){L(e,"class","sidebarNext")},m(i,o){te(i,e,o),r||(s=Zt(e,"click",n[18]),r=!0)},p:Ne,i:Ne,o:Ne,d(i){i&&k(e),r=!1,s()}}}function Tb(n){let e;return{c(){e=we("Checkout")},l(t){e=ve(t,"Checkout")},m(t,r){te(t,e,r)},i:Ne,o:Ne,d(t){t&&k(e)}}}function wb(n){let e,t="Processing",r,s,i,o;return i=new Tg({props:{name:"spinner"}}),{c(){e=B("span"),e.textContent=t,r=ce(),s=B("span"),eo(i.$$.fragment),this.h()},l(a){e=U(a,"SPAN",{class:!0,"data-svelte-h":!0}),lt(e)!=="svelte-1betoq4"&&(e.textContent=t),r=ue(a),s=U(a,"SPAN",{});var c=Z(s);to(i.$$.fragment,c),c.forEach(k),this.h()},h(){L(e,"class","text-white/60")},m(a,c){te(a,e,c),te(a,r,c),te(a,s,c),no(i,s,null),o=!0},i(a){o||(ze(i.$$.fragment,a),o=!0)},o(a){tt(i.$$.fragment,a),o=!1},d(a){a&&(k(e),k(r),k(s)),ro(i)}}}function vb(n){let e,t,r,s="Trademark",i,o,a,c=Object.keys(n[9]).length>0,u,l,h,d,f,p,_,y,A,v,S;function N(w,T){if(w[8])return fb;if(w[7])return db}let F=N(n),b=F&&F(n),x=c&&jh(n);const Q=[pb,mb],se=[];function De(w,T){return w[1].length>0?0:1}l=De(n),h=se[l]=Q[l](n);const Ke=[Eb,Ib,yb,_b,gb],G=[];function ht(w,T){return T[0]&1026&&(f=null),T[0]&3072&&(p=null),T[0]&1024&&(_=null),T[0]&1025&&(y=null),f==null&&(f=!!(w[10].route.id.includes("classes")&&w[1].length>0)),f?0:(p==null&&(p=!!(w[10].route.id.includes("details")&&w[11])),p?1:(_==null&&(_=!!w[10].route.id.includes("international")),_?2:(y==null&&(y=!!(w[10].route.id.includes("payment")&&w[0])),y?3:4)))}return A=ht(n,[-1,-1]),v=G[A]=Ke[A](n),{c(){e=B("div"),t=B("div"),r=B("p"),r.textContent=s,i=ce(),b&&b.c(),a=ce(),x&&x.c(),u=ce(),h.c(),d=ce(),v.c(),this.h()},l(w){e=U(w,"DIV",{id:!0,class:!0});var T=Z(e);t=U(T,"DIV",{class:!0});var q=Z(t);r=U(q,"P",{"data-svelte-h":!0}),lt(r)!=="svelte-1rudl1v"&&(r.textContent=s),i=ue(q),b&&b.l(q),q.forEach(k),a=ue(T),x&&x.l(T),u=ue(T),h.l(T),d=ue(T),v.l(T),T.forEach(k),this.h()},h(){L(t,"class",o="flex flex-wrap items-center gap-2 text-xl font-bold "+(n[7]?"justify-between":"")),L(e,"id","sidebar"),L(e,"class","bg-ttmfBeige px-5 py-6 rounded-lg scroll-mt-12")},m(w,T){te(w,e,T),D(e,t),D(t,r),D(t,i),b&&b.m(t,null),D(e,a),x&&x.m(e,null),D(e,u),se[l].m(e,null),D(e,d),G[A].m(e,null),S=!0},p(w,T){F===(F=N(w))&&b?b.p(w,T):(b&&b.d(1),b=F&&F(w),b&&(b.c(),b.m(t,null))),(!S||T[0]&128&&o!==(o="flex flex-wrap items-center gap-2 text-xl font-bold "+(w[7]?"justify-between":"")))&&L(t,"class",o),T[0]&512&&(c=Object.keys(w[9]).length>0),c?x?x.p(w,T):(x=jh(w),x.c(),x.m(e,u)):x&&(x.d(1),x=null);let q=l;l=De(w),l===q?se[l].p(w,T):(hs(),tt(se[q],1,1,()=>{se[q]=null}),ds(),h=se[l],h?h.p(w,T):(h=se[l]=Q[l](w),h.c()),ze(h,1),h.m(e,d));let ie=A;A=ht(w,T),A===ie?G[A].p(w,T):(hs(),tt(G[ie],1,1,()=>{G[ie]=null}),ds(),v=G[A],v?v.p(w,T):(v=G[A]=Ke[A](w),v.c()),ze(v,1),v.m(e,null))},i(w){S||(ze(h),ze(v),S=!0)},o(w){tt(h),tt(v),S=!1},d(w){w&&k(e),b&&b.d(),x&&x.d(),se[l].d(),G[A].d()}}}function Ab(n,e,t){let r,s,i,o,a,c,u,l;zt(n,Qh,T=>t(6,r=T)),zt(n,Yh,T=>t(24,s=T)),zt(n,Ti,T=>t(1,i=T)),zt(n,Xh,T=>t(7,o=T)),zt(n,Jh,T=>t(8,a=T)),zt(n,Zh,T=>t(9,c=T)),zt(n,Ig,T=>t(10,u=T)),zt(n,Eg,T=>t(11,l=T));let{terms:h}=e;const d=Xo.pricing.first_class,f=Xo.pricing.additional_class,p=Xo.pricing.government_fee;let _=0,y=0,A,v=!1;function S(T,q){let ie=i.find(W=>W.class===T);const Ue=ie.descriptions.indexOf(q);Ue===-1?ie.descriptions.push(q):ie.descriptions.splice(Ue,1),ie.descriptions.length===0?Ti.set(i.filter(W=>W.class!==T)):Ti.set(i)}async function N(){let T=await gg();return _g(T)}const F=T=>T===0?d:f,b=async({formData:T,cancel:q})=>{if(v)return q();t(5,v=!0);const ie=s,Ue=ie==="word"?pg("searchTerm"):await N(),W=new Date().getTime(),En=ie==="word"?Ue:await hb(Ue,r.email,W);return T.set("search_type",ie),T.set("search_source",En),({result:pe})=>{console.log("Checkout result: ",pe),pe.type==="redirect"&&(window.location=pe.location),t(5,v=!1)}},x=(T,q)=>S(T.class,q),Q=T=>{t(4,A=T.class)},se=()=>{Jo("classes",i),ar("/application/details")},De=()=>{Jo("details",r),ar("/application/international")},Ke=()=>{ar("/application/classes")},G=()=>{Jo("international",c),ar("/application/payment")},ht=()=>{ar("/application/details")},w=(T,q)=>({class:T.class,price:F(q),description:T.descriptions});return n.$$set=T=>{"terms"in T&&t(0,h=T.terms)},n.$$.update=()=>{if(n.$$.dirty[0]&2){const T=i.length;T>0?(t(2,_=d+(T-1)*f+T*p),t(3,y=(d+(i.length-1)*f+i.length-i.length)*.1)):(t(2,_=0),t(3,y=0))}},[h,i,_,y,A,v,r,o,a,c,u,l,p,S,F,b,x,Q,se,De,Ke,G,ht,w]}class eR extends hc{constructor(e){super(),dc(this,e,Ab,vb,uc,{terms:0},null,[-1,-1])}}function bb(n){let e,t,r,s,i,o,a;return r=new Dg({props:{size:"12",strokeWidth:"3"}}),{c(){e=B("button"),t=B("span"),eo(r.$$.fragment),s=we("Start Over"),this.h()},l(c){e=U(c,"BUTTON",{class:!0});var u=Z(e);t=U(u,"SPAN",{class:!0});var l=Z(t);to(r.$$.fragment,l),l.forEach(k),s=ve(u,"Start Over"),u.forEach(k),this.h()},h(){L(t,"class","w-5 h-5 rounded-full flex flex-col justify-center items-center text-white bg-ttmfRed"),L(e,"class","inline-flex gap-2 items-center font-bold")},m(c,u){te(c,e,u),D(e,t),no(r,t,null),D(e,s),i=!0,o||(a=Zt(e,"click",n[1]),o=!0)},p:Ne,i(c){i||(ze(r.$$.fragment,c),i=!0)},o(c){tt(r.$$.fragment,c),i=!1},d(c){c&&k(e),ro(r),o=!1,a()}}}function Rb(n){async function e(){Jh.set(""),Yh.set("word"),Xh.set(""),Ti.set([]),Qh.set([]),Zh.set([]),localStorage.clear(),yg(),ar("/application/search")}return[e,()=>{e()}]}class tR extends hc{constructor(e){super(),dc(this,e,Rb,bb,uc,{})}}export{tR as S,eR as a,kg as e};
