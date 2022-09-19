"use strict";(self.webpackChunkdiscover_image=self.webpackChunkdiscover_image||[]).push([[424],{1424:(Kt,P,s)=>{s.r(P),s.d(P,{ResultsModule:()=>Yt});var m=s(9808),f=s(4100),v=s(4004),T=s(8505),E=s(262),O=s(9646),n=s(5e3),F=s(2232),Y=s(4968),K=s(5577),D=s(9300),B=s(4986),A=s(4482),x=s(5403),J=s(8421);const M={leading:!0,trailing:!1};var z=s(5963);function Q(t,o,e,i){const l=window&&!!window.document&&window.document.documentElement;let r=l&&o?window:e;if(t&&(r=t&&l&&"string"==typeof t?function G(t,o,e){return(e?window.document:o).querySelector(t)}(t,e.nativeElement,i):t,!r))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return r}function y(t){return t&&!t.firstChange}const V={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},$={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class k{constructor(o=!0){this.vertical=o,this.propsMap=o?V:$}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function ot(t){return["Window","global"].some(e=>Object.prototype.toString.call(t).includes(e))}function C(t,o){return t?o.document.documentElement:null}function R(t,o){const e=function it({container:t,isWindow:o,axis:e}){const{offsetHeightKey:i,clientHeightKey:l}=I(e);return H(t,o,i,l)}(o);return o.isWindow?function et(t,o,e){const{axis:i,container:l,isWindow:r}=e,{offsetHeightKey:c,clientHeightKey:u}=I(i),a=t+U(C(r,l),i,r),h=H(o.nativeElement,r,c,u),p=function lt(t,o,e){const i=o.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[i]+U(t,o,e)}(o.nativeElement,i,r)+h;return{height:t,scrolled:a,totalToScroll:p,isWindow:r}}(e,t,o):function nt(t,o,e){const{axis:i,container:l}=e;return{height:t,scrolled:l[i.scrollTopKey()],totalToScroll:l[i.scrollHeightKey()],isWindow:!1}}(e,0,o)}function I(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function H(t,o,e,i){if(isNaN(t[e])){const l=C(o,t);return l?l[i]:0}return t[e]}function U(t,o,e){const i=o.pageYOffsetKey(),l=o.scrollTopKey(),r=o.offsetTopKey();return isNaN(window.pageYOffset)?C(e,t)[l]:t.ownerDocument?t.ownerDocument.defaultView[i]:t[r]}function rt(t,o={down:0,up:0},e){let i,l;if(t.totalToScroll<=0)return!1;const r=t.isWindow?t.scrolled:t.height+t.scrolled;return e?(i=(t.totalToScroll-r)/t.totalToScroll,l=((null==o?void 0:o.down)?o.down:0)/10):(i=t.scrolled/(t.scrolled+(t.totalToScroll-r)),l=((null==o?void 0:o.up)?o.up:0)/10),i<=l}class ht{constructor({totalToScroll:o}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=o}updateScrollPosition(o){return this.lastScrollPosition=o}updateTotalToScroll(o){this.lastTotalToScroll!==o&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=o)}updateScroll(o,e){this.updateScrollPosition(o),this.updateTotalToScroll(e)}updateTriggeredFlag(o,e){e?this.triggered.down=o:this.triggered.up=o}isTriggeredScroll(o,e){return e?this.triggered.down===o:this.triggered.up===o}}function dt(t){const{scrollContainer:o,scrollWindow:e,element:i,fromRoot:l}=t,r=function _({windowElement:t,axis:o}){return function tt(t,o){const e=t.isWindow||o&&!o.nativeElement?o:o.nativeElement;return Object.assign(Object.assign({},t),{container:e})}({axis:o,isWindow:ot(t)},t)}({axis:new k(!t.horizontal),windowElement:Q(o,e,i,l)}),c=new ht({totalToScroll:R(i,r)}),a={up:t.upDistance,down:t.downDistance};return function ft(t){let o=(0,Y.R)(t.container,"scroll");return t.throttle&&(o=o.pipe(function j(t,o=B.z,e=M){const i=(0,z.H)(t,o);return function L(t,o=M){return(0,A.e)((e,i)=>{const{leading:l,trailing:r}=o;let c=!1,u=null,a=null,h=!1;const p=()=>{null==a||a.unsubscribe(),a=null,r&&(W(),h&&i.complete())},w=()=>{a=null,h&&i.complete()},b=g=>a=(0,J.Xf)(t(g)).subscribe((0,x.x)(i,p,w)),W=()=>{if(c){c=!1;const g=u;u=null,i.next(g),!h&&b(g)}};e.subscribe((0,x.x)(i,g=>{c=!0,u=g,(!a||a.closed)&&(l?W():b(g))},()=>{h=!0,(!(r&&c&&a)||a.closed)&&i.complete()}))})}(()=>i,e)}(t.throttle,void 0,{leading:!0,trailing:!0}))),o}({container:r.container,throttle:t.throttle}).pipe((0,K.z)(()=>(0,O.of)(R(i,r))),(0,v.U)(h=>function pt(t,o,e){const{scrollDown:i,fire:l}=function ct(t,o,e){const i=function st(t,o){return t<o.scrolled}(t,o);return{fire:rt(o,e,i),scrollDown:i}}(t,o,e);return{scrollDown:i,fire:l,stats:o}}(c.lastScrollPosition,h,a)),(0,T.b)(({stats:h})=>c.updateScroll(h.scrolled,h.totalToScroll)),(0,D.h)(({fire:h,scrollDown:p,stats:{totalToScroll:w}})=>function q(t,o,e){return!!(t&&o||!e&&o)}(t.alwaysCallback,h,c.isTriggeredScroll(w,p))),(0,T.b)(({scrollDown:h,stats:{totalToScroll:p}})=>{c.updateTriggeredFlag(p,h)}),(0,v.U)(gt))}function gt(t){const{scrollDown:o,stats:{scrolled:e}}=t;return{type:o?"[NGX_ISE] DOWN":"[NGX_ISE] UP",payload:{currentScrollPosition:e}}}let mt=(()=>{class t{constructor(e,i){this.element=e,this.zone=i,this.scrolled=new n.vpe,this.scrolledUp=new n.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:e,infiniteScrollDisabled:i,infiniteScrollDistance:l}){const r=y(e),c=y(i),u=y(l),a=!c&&!this.infiniteScrollDisabled||c&&!i.currentValue||u;(r||c||u)&&(this.destroyScroller(),a&&this.setup())}setup(){(function X(){return"undefined"!=typeof window})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=dt({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(e=>this.zone.run(()=>this.handleOnScroll(e)))})}handleOnScroll({type:e,payload:i}){switch(e){case"[NGX_ISE] DOWN":return this.scrolled.emit(i);case"[NGX_ISE] UP":return this.scrolledUp.emit(i);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.SBq),n.Y36(n.R0b))},t.\u0275dir=n.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[n.TTD]}),t})(),vt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[],imports:[[]]}),t})();var d=s(1777);const St=(0,d.X$)("inOutAnimation",[(0,d.eR)(":enter",[(0,d.oB)({opacity:0}),(0,d.jt)("150ms ease-out",(0,d.oB)({opacity:1}))]),(0,d.eR)(":leave",[(0,d.oB)({opacity:1}),(0,d.jt)("150ms ease-in",(0,d.oB)({opacity:0}))])]);var Tt=s(8966),yt=s(4879),Z=s(7423),N=s(5245),Ct=s(7783);function wt(t,o){if(1&t){const e=n.EpF();n.TgZ(0,"div",3)(1,"h3",4),n._UZ(2,"img",5),n.TgZ(3,"span",6),n._uU(4),n.qZA(),n.TgZ(5,"button",7),n.NdJ("click",function(l){n.CHM(e);const r=n.oxw();return r.photoService.downloadPhoto(r.photo.id,r.photo.urls.full),l.stopPropagation()}),n.TgZ(6,"mat-icon"),n._uU(7,"download"),n.qZA()()()()}if(2&t){const e=n.oxw();n.Q6J("@inOutAnimation",void 0),n.xp6(2),n.Q6J("src",e.photo.user.profile_image.small,n.LSH),n.xp6(2),n.Oqu(e.photo.user.name)}}let Pt=(()=>{class t{constructor(e,i,l,r){this.dialog=e,this.router=i,this.photoService=l,this.activatedRoute=r,this.showCard=!1,this.isDialog=!1}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.router.events.pipe((0,D.h)(e=>e instanceof f.OD)).subscribe(e=>{this.router.getCurrentNavigation(),this.isDialog&&this.openDialog()})}openDialog(){}openPhoto(){this.router.navigate(["/photos/",this.photo.id],{state:{dialog:!0}})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(Tt.uw),n.Y36(f.F0),n.Y36(yt.T),n.Y36(f.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-photo"]],inputs:{photo:"photo"},decls:3,vars:5,consts:[["queryParamsHandling","merge",1,"photo-container","position-relative",3,"mouseenter","mouseleave","click"],["class","card-img-overlay",4,"ngIf"],[3,"hash","URL","width","height"],[1,"card-img-overlay"],[1,"card-user","text-white","position-absolute","fixed-bottom"],[1,"card-user-photo","rounded-circle",3,"src"],[1,"card-user-name"],["mat-mini-fab","","color","white","aria-label","Download Photo",1,"card-photo-download",3,"click"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0),n.NdJ("mouseenter",function(){return i.showCard=!0})("mouseleave",function(){return i.showCard=!1})("click",function(){return i.openPhoto()}),n.YNc(1,wt,8,3,"div",1),n._UZ(2,"app-blurhash",2),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngIf",i.showCard),n.xp6(1),n.Q6J("hash",i.photo.blur_hash)("URL",i.photo.urls.small)("width",i.photoService.getWidth("s"))("height",i.photoService.calHeight("s",i.photo.width,i.photo.height)))},directives:[m.O5,Z.lW,N.Hw,Ct.v],styles:[".photo-container[_ngcontent-%COMP%]{cursor:pointer}.card-img-overlay[_ngcontent-%COMP%]{background:linear-gradient(45deg,rgba(0,0,0,.4) 0%,rgba(0,0,0,.2) 30%,rgba(0,0,0,.2) 70%,rgba(0,0,0,.4) 100%)}.card-user[_ngcontent-%COMP%]{margin:15px}.card-user-name[_ngcontent-%COMP%]{padding-left:15px}.card-photo-download[_ngcontent-%COMP%]{margin-left:15px;float:right}"],data:{animation:[St]}}),t})();var Ot=s(773);function Dt(t,o){if(1&t&&(n.TgZ(0,"div",10),n._UZ(1,"app-photo",11),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.Q6J("photo",e)}}function xt(t,o){if(1&t&&(n.TgZ(0,"div",8),n.YNc(1,Dt,2,1,"div",9),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.Q6J("ngForOf",e)}}function Mt(t,o){if(1&t&&(n.TgZ(0,"strong"),n._uU(1),n.qZA()),2&t){const e=n.oxw(2);n.xp6(1),n.hij(' "',e.q,'"')}}function Rt(t,o){if(1&t&&(n.TgZ(0,"h3",12),n._uU(1,"Sorry, no results were found for your search"),n.YNc(2,Mt,2,1,"strong",13),n._uU(3,"."),n.qZA()),2&t){const e=n.oxw();n.xp6(2),n.Q6J("ngIf",e.q)}}function It(t,o){if(1&t){const e=n.EpF();n.TgZ(0,"button",14),n.NdJ("click",function(){return n.CHM(e),n.oxw().onSearch(!0)}),n.TgZ(1,"mat-icon"),n._uU(2,"expand_circle_down"),n.qZA(),n._uU(3," Load more "),n.qZA()}}function Ht(t,o){1&t&&n._UZ(0,"mat-progress-spinner",15)}let Ut=(()=>{class t{constructor(e,i,l){this.service=e,this.route=i,this.router=l,this.photosByColumn=[[]],this.loading=!0,this.noResults=!1,this.totalResults=0,this.lastPage=0,this.currPage=0}ngOnInit(){this.route.queryParamMap.pipe((0,v.U)(e=>e)).subscribe(e=>{this.q=String(e.get("q")),this.onSearch()})}onSearch(e=!1){e||(this.photosByColumn=[[]],this.currPage=0),(this.currPage<this.lastPage||0==this.currPage)&&(this.noResults=!1,this.loading=!0,this.photos$=this.service.search(this.q,this.currPage+1).pipe((0,T.b)(i=>{this.currPage++,this.totalResults=i.total,this.lastPage=i.total_pages,0==i.total&&(this.noResults=!0),this.loading=!1}),(0,v.U)(i=>i.results),(0,E.K)(i=>(this.loading=!1,(0,O.of)(i)))),this.photos$.subscribe(i=>{this.onGroupPhotos(i)}))}onScroll(){this.onSearch(!0)}onGroupPhotos(e){0==this.photosByColumn.length&&(this.photosByColumn=[[],[],[]]);let i=this.photosByColumn.reduce((r,c,u,a)=>(u=a.indexOf(r.length>c.length?c:r),a[u])),l=this.photosByColumn.indexOf(i);for(let r=0;r<e.length;r++,l++)this.photosByColumn[l%3]||(this.photosByColumn[l%3]=[]),this.photosByColumn[l%3].push(e[r])}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(F.o),n.Y36(f.gz),n.Y36(f.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-list"]],decls:8,vars:5,consts:[[1,"container","mt-5"],["infiniteScroll","",1,"container",3,"infiniteScrollDistance","scrolled"],[1,"image-gallery"],["class","column",4,"ngFor","ngForOf"],[1,"footer","mt-5","text-center"],["class","text-center",4,"ngIf"],["mat-button","","color","primary",3,"click",4,"ngIf"],["class","m-auto mt-5","diameter","40","color","primary","mode","indeterminate",4,"ngIf"],[1,"column"],["class","image-item",4,"ngFor","ngForOf"],[1,"image-item"],[3,"photo"],[1,"text-center"],[4,"ngIf"],["mat-button","","color","primary",3,"click"],["diameter","40","color","primary","mode","indeterminate",1,"m-auto","mt-5"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n.NdJ("scrolled",function(){return i.onScroll()}),n.TgZ(2,"div",2),n.YNc(3,xt,2,1,"div",3),n.qZA(),n.TgZ(4,"div",4),n.YNc(5,Rt,4,1,"h3",5),n.YNc(6,It,4,0,"button",6),n.YNc(7,Ht,1,0,"mat-progress-spinner",7),n.qZA()()()),2&e&&(n.xp6(1),n.Q6J("infiniteScrollDistance",3),n.xp6(2),n.Q6J("ngForOf",i.photosByColumn),n.xp6(2),n.Q6J("ngIf",i.noResults),n.xp6(1),n.Q6J("ngIf",!i.noResults&&!i.loading&&(i.currPage<i.lastPage||0==i.currPage)),n.xp6(1),n.Q6J("ngIf",i.loading))},directives:[mt,m.sg,Pt,m.O5,Z.lW,N.Hw,Ot.Ou],styles:[".container[_ngcontent-%COMP%]{background:#f9f9f9;padding:30px}.image-gallery[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;justify-content:center}.image-gallery[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.image-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:5px;height:100%;object-fit:cover}@media only screen and (min-width: 768px){.image-gallery[_ngcontent-%COMP%]{flex-direction:row}}"]}),t})();var Zt=s(3482);const Nt=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-results"]],decls:3,vars:0,consts:[[1,"container"]],template:function(e,i){1&e&&(n._UZ(0,"app-header"),n.TgZ(1,"div",0),n._UZ(2,"router-outlet"),n.qZA())},directives:[Zt.G,f.lC],styles:[""]}),t})(),children:[{path:"photos",component:Ut}]}];let bt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[f.Bz.forChild(Nt)],f.Bz]}),t})();var Wt=s(7348),Et=s(677),Ft=s(2221);let Yt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[m.ez,bt,vt,Wt.q,Et.O,Ft.K]]}),t})()}}]);