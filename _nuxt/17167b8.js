(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{414:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));var r=n(415),o=n(10),c=Object(o.f)("v-card__actions"),d=Object(o.f)("v-card__subtitle"),l=Object(o.f)("v-card__text"),h=Object(o.f)("v-card__title");r.a},435:function(t,e,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("a4669b52",content,!0,{sourceMap:!1})},436:function(t,e,n){var r=n(30)((function(i){return i[1]}));r.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),r.locals={},t.exports=r},437:function(t,e,n){var content=n(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("0c396eac",content,!0,{sourceMap:!1})},438:function(t,e,n){var r=n(30)((function(i){return i[1]}));r.push([t.i,".v-responsive{display:flex;flex:1 0 auto;max-width:100%;overflow:hidden;position:relative}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1)}",""]),r.locals={},t.exports=r},453:function(t,e,n){var content=n(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("7aa09693",content,!0,{sourceMap:!1})},459:function(t,e,n){"use strict";var r=n(28),o=n(0);e.a=o.default.extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(r.e)("lazy",this)},methods:{showLazyContent:function(content){return this.hasContent&&content?content():[this.$createElement()]}}})},508:function(t,e,n){t.exports=n.p+"img/1.f04225f.png"},509:function(t,e,n){t.exports=n.p+"img/2.d714c0c.png"},510:function(t,e,n){t.exports=n.p+"img/3.ca7c137.png"},511:function(t,e,n){t.exports=n.p+"img/4.4affdcf.png"},512:function(t,e,n){t.exports=n.p+"img/5.d9e444d.png"},513:function(t,e,n){t.exports=n.p+"img/6.6443953.png"},514:function(t,e,n){t.exports=n.p+"img/8.f42c8ab.png"},515:function(t,e,n){t.exports=n.p+"img/9.f9c7e6d.png"},516:function(t,e,n){t.exports=n.p+"img/10.cb661fe.png"},517:function(t,e,n){t.exports=n.p+"img/11.80cae91.png"},518:function(t,e,n){t.exports=n.p+"img/12.a5976f8.png"},519:function(t,e,n){t.exports=n.p+"img/13.ee5203f.png"},520:function(t,e,n){t.exports=n.p+"img/14.6e48b10.png"},521:function(t,e,n){t.exports=n.p+"img/15.af8ce83.png"},522:function(t,e,n){t.exports=n.p+"img/16.585f020.png"},523:function(t,e,n){t.exports=n.p+"img/18.11d8812.png"},524:function(t,e,n){t.exports=n.p+"img/19.4648653.jpg"},525:function(t,e,n){t.exports=n.p+"img/20.0e80652.jpg"},526:function(t,e,n){t.exports=n.p+"img/21.9c1d424.jpg"},527:function(t,e,n){t.exports=n.p+"img/22.c8b4bc8.jpg"},528:function(t,e,n){t.exports=n.p+"img/23.a4037d6.jpg"},529:function(t,e,n){t.exports=n.p+"img/24.3c543c2.jpg"},530:function(t,e,n){"use strict";n(453)},531:function(t,e,n){var r=n(30)((function(i){return i[1]}));r.push([t.i,".w-100[data-v-d7c8ff00]{display:flex;justify-content:center;width:100%}.w-250-150[data-v-d7c8ff00]{width:250px}@media screen and (max-width:600px){.w-250-150[data-v-d7c8ff00]{width:150px}}",""]),r.locals={},t.exports=r},541:function(t,e,n){"use strict";n.r(e);var r=n(415),o=n(414),c=n(640),d=n(639),l={data:function(){return{index:0,comments:[n(508),n(509),n(510),n(511),n(512),n(513),n(514),n(515),n(516),n(517),n(518),n(519),n(520),n(521),n(522),n(523),n(524),n(525),n(526),n(527),n(528),n(529)]}}},h=(n(530),n(44)),component=Object(h.a)(l,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{elevation:"2"}},[e(o.c,[e(c.a,{staticClass:"pa-0 pa-sm-4",attrs:{"show-arrows":"","hide-delimiters":""},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},t._l(t.comments,(function(t){return e(d.a,{key:t,staticClass:"m-auto"},[e("div",{staticClass:"d-flex justify-center align-center"},[e("img",{attrs:{height:"fit-content",width:"100%",src:t}})])])})),1)],1)],1)}),[],!1,null,"d7c8ff00",null);e.default=component.exports},569:function(t,e,n){"use strict";var r=n(13),o=(n(136),n(76),n(255),n(58),n(75),n(435),n(428)),c=(n(437),n(439)),d=n(109),l=n(10),h=Object(d.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(l.k)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),m=n(110),f=n(167),v=n(28),_="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(d.a)(h,m.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(r.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,n){if(!_||n||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(v.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/r):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(n,e)}()},genContent:function(){var content=h.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){var slot=Object(l.k)(this,"placeholder");if(slot){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},slot)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=h.options.render.call(this,t),data=Object(f.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:_?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})}}]);