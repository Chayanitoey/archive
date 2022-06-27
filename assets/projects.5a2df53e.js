var ft=Object.defineProperty;var U=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var X=(s,t,e)=>t in s?ft(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,b=(s,t)=>{for(var e in t||(t={}))dt.call(t,e)&&X(s,e,t[e]);if(U)for(var e of U(t))gt.call(t,e)&&X(s,e,t[e]);return s};import{d as pt}from"./vendor.97447cf5.js";import{a as Mt,u as mt}from"./index.b3d1feb1.js";function I(s){return Array.isArray?Array.isArray(s):nt(s)==="[object Array]"}const xt=1/0;function yt(s){if(typeof s=="string")return s;let t=s+"";return t=="0"&&1/s==-xt?"-0":t}function Et(s){return s==null?"":yt(s)}function E(s){return typeof s=="string"}function st(s){return typeof s=="number"}function _t(s){return s===!0||s===!1||It(s)&&nt(s)=="[object Boolean]"}function rt(s){return typeof s=="object"}function It(s){return rt(s)&&s!==null}function M(s){return s!=null}function K(s){return!s.trim().length}function nt(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const St="Incorrect 'index' type",At=s=>`Invalid value for key ${s}`,wt=s=>`Pattern length exceeds max of ${s}.`,Lt=s=>`Missing ${s} property in key`,Rt=s=>`Property 'weight' in key '${s}' must be a positive integer`,J=Object.prototype.hasOwnProperty;class bt{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach(r=>{let n=it(r);e+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,e+=n.weight}),this._keys.forEach(r=>{r.weight/=e})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function it(s){let t=null,e=null,r=null,n=1,i=null;if(E(s)||I(s))r=s,t=Z(s),e=D(s);else{if(!J.call(s,"name"))throw new Error(Lt("name"));const c=s.name;if(r=c,J.call(s,"weight")&&(n=s.weight,n<=0))throw new Error(Rt(c));t=Z(c),e=D(c),i=s.getFn}return{path:t,id:e,weight:n,src:r,getFn:i}}function Z(s){return I(s)?s:s.split(".")}function D(s){return I(s)?s.join("."):s}function $t(s,t){let e=[],r=!1;const n=(i,c,o)=>{if(!!M(i))if(!c[o])e.push(i);else{let h=c[o];const a=i[h];if(!M(a))return;if(o===c.length-1&&(E(a)||st(a)||_t(a)))e.push(Et(a));else if(I(a)){r=!0;for(let l=0,f=a.length;l<f;l+=1)n(a[l],c,o+1)}else c.length&&n(a,c,o+1)}};return n(s,E(t)?t.split("."):t,0),r?e:e[0]}const Nt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},kt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,t)=>s.score===t.score?s.idx<t.idx?-1:1:s.score<t.score?-1:1},vt={location:0,threshold:.6,distance:100},Ot={useExtendedSearch:!1,getFn:$t,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u=b(b(b(b({},kt),Nt),vt),Ot);const Ct=/[^ ]+/g;function Tt(s=1,t=3){const e=new Map,r=Math.pow(10,t);return{get(n){const i=n.match(Ct).length;if(e.has(i))return e.get(i);const c=1/Math.pow(i,.5*s),o=parseFloat(Math.round(c*r)/r);return e.set(i,o),o},clear(){e.clear()}}}class V{constructor({getFn:t=u.getFn,fieldNormWeight:e=u.fieldNormWeight}={}){this.norm=Tt(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((e,r)=>{this._keysMap[e.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,E(this.docs[0])?this.docs.forEach((t,e)=>{this._addString(t,e)}):this.docs.forEach((t,e)=>{this._addObject(t,e)}),this.norm.clear())}add(t){const e=this.size();E(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,r=this.size();e<r;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!M(t)||K(t))return;let r={v:t,i:e,n:this.norm.get(t)};this.records.push(r)}_addObject(t,e){let r={i:e,$:{}};this.keys.forEach((n,i)=>{let c=n.getFn?n.getFn(t):this.getFn(t,n.path);if(!!M(c)){if(I(c)){let o=[];const h=[{nestedArrIndex:-1,value:c}];for(;h.length;){const{nestedArrIndex:a,value:l}=h.pop();if(!!M(l))if(E(l)&&!K(l)){let f={v:l,i:a,n:this.norm.get(l)};o.push(f)}else I(l)&&l.forEach((f,d)=>{h.push({nestedArrIndex:d,value:f})})}r.$[i]=o}else if(E(c)&&!K(c)){let o={v:c,n:this.norm.get(c)};r.$[i]=o}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function ct(s,t,{getFn:e=u.getFn,fieldNormWeight:r=u.fieldNormWeight}={}){const n=new V({getFn:e,fieldNormWeight:r});return n.setKeys(s.map(it)),n.setSources(t),n.create(),n}function jt(s,{getFn:t=u.getFn,fieldNormWeight:e=u.fieldNormWeight}={}){const{keys:r,records:n}=s,i=new V({getFn:t,fieldNormWeight:e});return i.setKeys(r),i.setIndexRecords(n),i}function T(s,{errors:t=0,currentLocation:e=0,expectedLocation:r=0,distance:n=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const c=t/s.length;if(i)return c;const o=Math.abs(r-e);return n?c+o/n:o?1:c}function Ft(s=[],t=u.minMatchCharLength){let e=[],r=-1,n=-1,i=0;for(let c=s.length;i<c;i+=1){let o=s[i];o&&r===-1?r=i:!o&&r!==-1&&(n=i-1,n-r+1>=t&&e.push([r,n]),r=-1)}return s[i-1]&&i-r>=t&&e.push([r,i-1]),e}const $=32;function Pt(s,t,e,{location:r=u.location,distance:n=u.distance,threshold:i=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:h=u.includeMatches,ignoreLocation:a=u.ignoreLocation}={}){if(t.length>$)throw new Error(wt($));const l=t.length,f=s.length,d=Math.max(0,Math.min(r,f));let g=i,p=d;const m=o>1||h,L=m?Array(f):[];let _;for(;(_=s.indexOf(t,p))>-1;){let x=T(t,{currentLocation:_,expectedLocation:d,distance:n,ignoreLocation:a});if(g=Math.min(x,g),p=_+l,m){let S=0;for(;S<l;)L[_+S]=1,S+=1}}p=-1;let N=[],R=1,O=l+f;const ut=1<<l-1;for(let x=0;x<l;x+=1){let S=0,A=O;for(;S<A;)T(t,{errors:x,currentLocation:d+A,expectedLocation:d,distance:n,ignoreLocation:a})<=g?S=A:O=A,A=Math.floor((O-S)/2+S);O=A;let G=Math.max(1,d-A+1),P=c?f:Math.min(d+A,f)+l,k=Array(P+2);k[P+1]=(1<<x)-1;for(let y=P;y>=G;y-=1){let C=y-1,Q=e[s.charAt(C)];if(m&&(L[C]=+!!Q),k[y]=(k[y+1]<<1|1)&Q,x&&(k[y]|=(N[y+1]|N[y])<<1|1|N[y+1]),k[y]&ut&&(R=T(t,{errors:x,currentLocation:C,expectedLocation:d,distance:n,ignoreLocation:a}),R<=g)){if(g=R,p=C,p<=d)break;G=Math.max(1,2*d-p)}}if(T(t,{errors:x+1,currentLocation:d,expectedLocation:d,distance:n,ignoreLocation:a})>g)break;N=k}const F={isMatch:p>=0,score:Math.max(.001,R)};if(m){const x=Ft(L,o);x.length?h&&(F.indices=x):F.isMatch=!1}return F}function Kt(s){let t={};for(let e=0,r=s.length;e<r;e+=1){const n=s.charAt(e);t[n]=(t[n]||0)|1<<r-e-1}return t}class ot{constructor(t,{location:e=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:h=u.isCaseSensitive,ignoreLocation:a=u.ignoreLocation}={}){if(this.options={location:e,threshold:r,distance:n,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:h,ignoreLocation:a},this.pattern=h?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(d,g)=>{this.chunks.push({pattern:d,alphabet:Kt(d),startIndex:g})},f=this.pattern.length;if(f>$){let d=0;const g=f%$,p=f-g;for(;d<p;)l(this.pattern.substr(d,$),d),d+=$;if(g){const m=f-$;l(this.pattern.substr(m),m)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:r}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let p={isMatch:!0,score:0};return r&&(p.indices=[[0,t.length-1]]),p}const{location:n,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:h,ignoreLocation:a}=this.options;let l=[],f=0,d=!1;this.chunks.forEach(({pattern:p,alphabet:m,startIndex:L})=>{const{isMatch:_,score:N,indices:R}=Pt(t,p,m,{location:n+L,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:h,includeMatches:r,ignoreLocation:a});_&&(d=!0),f+=N,_&&R&&(l=[...l,...R])});let g={isMatch:d,score:d?f/this.chunks.length:1};return d&&r&&(g.indices=l),g}}class w{constructor(t){this.pattern=t}static isMultiMatch(t){return q(t,this.multiRegex)}static isSingleMatch(t){return q(t,this.singleRegex)}search(){}}function q(s,t){const e=s.match(t);return e?e[1]:null}class Dt extends w{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class Wt extends w{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class Bt extends w{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class zt extends w{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class Yt extends w{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Ht extends w{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class ht extends w{constructor(t,{location:e=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:h=u.isCaseSensitive,ignoreLocation:a=u.ignoreLocation}={}){super(t),this._bitapSearch=new ot(t,{location:e,threshold:r,distance:n,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:h,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class at extends w{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e=0,r;const n=[],i=this.pattern.length;for(;(r=t.indexOf(this.pattern,e))>-1;)e=r+i,n.push([r,e-1]);const c=!!n.length;return{isMatch:c,score:c?0:1,indices:n}}}const W=[Dt,at,Bt,zt,Ht,Yt,Wt,ht],tt=W.length,Vt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Gt="|";function Qt(s,t={}){return s.split(Gt).map(e=>{let r=e.trim().split(Vt).filter(i=>i&&!!i.trim()),n=[];for(let i=0,c=r.length;i<c;i+=1){const o=r[i];let h=!1,a=-1;for(;!h&&++a<tt;){const l=W[a];let f=l.isMultiMatch(o);f&&(n.push(new l(f,t)),h=!0)}if(!h)for(a=-1;++a<tt;){const l=W[a];let f=l.isSingleMatch(o);if(f){n.push(new l(f,t));break}}}return n})}const Ut=new Set([ht.type,at.type]);class Xt{constructor(t,{isCaseSensitive:e=u.isCaseSensitive,includeMatches:r=u.includeMatches,minMatchCharLength:n=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:o=u.location,threshold:h=u.threshold,distance:a=u.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:r,minMatchCharLength:n,findAllMatches:c,ignoreLocation:i,location:o,threshold:h,distance:a},this.pattern=e?t:t.toLowerCase(),this.query=Qt(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:n}=this.options;t=n?t:t.toLowerCase();let i=0,c=[],o=0;for(let h=0,a=e.length;h<a;h+=1){const l=e[h];c.length=0,i=0;for(let f=0,d=l.length;f<d;f+=1){const g=l[f],{isMatch:p,indices:m,score:L}=g.search(t);if(p){if(i+=1,o+=L,r){const _=g.constructor.type;Ut.has(_)?c=[...c,...m]:c.push(m)}}else{o=0,i=0,c.length=0;break}}if(i){let f={isMatch:!0,score:o/i};return r&&(f.indices=c),f}}return{isMatch:!1,score:1}}}const B=[];function Jt(...s){B.push(...s)}function z(s,t){for(let e=0,r=B.length;e<r;e+=1){let n=B[e];if(n.condition(s,t))return new n(s,t)}return new ot(s,t)}const j={AND:"$and",OR:"$or"},Y={PATH:"$path",PATTERN:"$val"},H=s=>!!(s[j.AND]||s[j.OR]),Zt=s=>!!s[Y.PATH],qt=s=>!I(s)&&rt(s)&&!H(s),et=s=>({[j.AND]:Object.keys(s).map(t=>({[t]:s[t]}))});function lt(s,t,{auto:e=!0}={}){const r=n=>{let i=Object.keys(n);const c=Zt(n);if(!c&&i.length>1&&!H(n))return r(et(n));if(qt(n)){const h=c?n[Y.PATH]:i[0],a=c?n[Y.PATTERN]:n[h];if(!E(a))throw new Error(At(h));const l={keyId:D(h),pattern:a};return e&&(l.searcher=z(a,t)),l}let o={children:[],operator:i[0]};return i.forEach(h=>{const a=n[h];I(a)&&a.forEach(l=>{o.children.push(r(l))})}),o};return H(s)||(s=et(s)),r(s)}function te(s,{ignoreFieldNorm:t=u.ignoreFieldNorm}){s.forEach(e=>{let r=1;e.matches.forEach(({key:n,norm:i,score:c})=>{const o=n?n.weight:null;r*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(t?1:i))}),e.score=r})}function ee(s,t){const e=s.matches;t.matches=[],M(e)&&e.forEach(r=>{if(!M(r.indices)||!r.indices.length)return;const{indices:n,value:i}=r;let c={indices:n,value:i};r.key&&(c.key=r.key.src),r.idx>-1&&(c.refIndex=r.idx),t.matches.push(c)})}function se(s,t){t.score=s.score}function re(s,t,{includeMatches:e=u.includeMatches,includeScore:r=u.includeScore}={}){const n=[];return e&&n.push(ee),r&&n.push(se),s.map(i=>{const{idx:c}=i,o={item:t[c],refIndex:c};return n.length&&n.forEach(h=>{h(i,o)}),o})}class v{constructor(t,e={},r){this.options=b(b({},u),e),this.options.useExtendedSearch,this._keyStore=new bt(this.options.keys),this.setCollection(t,r)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof V))throw new Error(St);this._myIndex=e||ct(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){!M(t)||(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const e=[];for(let r=0,n=this._docs.length;r<n;r+=1){const i=this._docs[r];t(i,r)&&(this.removeAt(r),r-=1,n-=1,e.push(i))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:r,includeScore:n,shouldSort:i,sortFn:c,ignoreFieldNorm:o}=this.options;let h=E(t)?E(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return te(h,{ignoreFieldNorm:o}),i&&h.sort(c),st(e)&&e>-1&&(h=h.slice(0,e)),re(h,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(t){const e=z(t,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:i,i:c,n:o})=>{if(!M(i))return;const{isMatch:h,score:a,indices:l}=e.searchIn(i);h&&n.push({item:i,idx:c,matches:[{score:a,value:i,norm:o,indices:l}]})}),n}_searchLogical(t){const e=lt(t,this.options),r=(o,h,a)=>{if(!o.children){const{keyId:f,searcher:d}=o,g=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(h,f),searcher:d});return g&&g.length?[{idx:a,item:h,matches:g}]:[]}const l=[];for(let f=0,d=o.children.length;f<d;f+=1){const g=o.children[f],p=r(g,h,a);if(p.length)l.push(...p);else if(o.operator===j.AND)return[]}return l},n=this._myIndex.records,i={},c=[];return n.forEach(({$:o,i:h})=>{if(M(o)){let a=r(e,o,h);a.length&&(i[h]||(i[h]={idx:h,item:o,matches:[]},c.push(i[h])),a.forEach(({matches:l})=>{i[h].matches.push(...l)}))}}),c}_searchObjectList(t){const e=z(t,this.options),{keys:r,records:n}=this._myIndex,i=[];return n.forEach(({$:c,i:o})=>{if(!M(c))return;let h=[];r.forEach((a,l)=>{h.push(...this._findMatches({key:a,value:c[l],searcher:e}))}),h.length&&i.push({idx:o,item:c,matches:h})}),i}_findMatches({key:t,value:e,searcher:r}){if(!M(e))return[];let n=[];if(I(e))e.forEach(({v:i,i:c,n:o})=>{if(!M(i))return;const{isMatch:h,score:a,indices:l}=r.searchIn(i);h&&n.push({score:a,key:t,value:i,idx:c,norm:o,indices:l})});else{const{v:i,n:c}=e,{isMatch:o,score:h,indices:a}=r.searchIn(i);o&&n.push({score:h,key:t,value:i,norm:c,indices:a})}return n}}v.version="6.6.2";v.createIndex=ct;v.parseIndex=jt;v.config=u;v.parseQuery=lt;Jt(Xt);const he=pt("projects",{state:()=>({projects:Mt()}),getters:{findBySlug:s=>t=>s.projects.find(e=>e.slug===t),filteredProjects:s=>{const t=mt(),e=t.$state.searchQuery,r=t.$state.activeTags,n=t.$state.activeCategories,i=t.$state.activeYears;let c=s.projects;if(!t)return[];if(r.length>0&&(c=c.filter(o=>r.every(h=>o.tags.includes(h)))),n.length>0&&(c=c.filter(o=>o.category.some(h=>n.includes(h)))),i.length>0&&(c=c.filter(o=>i.includes(o.year))),e!==""&&e!==null){const o={keys:["title","description","author"],threshold:.3};return new v(c,o).search(e).map(l=>l.item)}return c}}});export{he as u};
