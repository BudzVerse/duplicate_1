"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3231], {
    3096:(e,t,n)=> {
        n.d(t, {
            Wx:()=>f
        }
        );
        var r=n(12115),i=Object.defineProperty,o=(e,t,n)=>t in e?i(e,t, {
            enumerable:!0,configurable:!0,writable:!0,value:n
        }
        ):e[t]=n,l=new Map,s=new WeakMap,a=0,c=void 0;
        function f() {
            var e;
            let {
                threshold:t,delay:n,trackVisibility:i,rootMargin:o,root:f,triggerOnce:d,skip:u,initialInView:g,fallbackInView:h,onChange:p
            }
            =arguments.length>0&&void 0!==arguments[0]?arguments[0]: {

            }
            ,[v,y]=r.useState(null),m=r.useRef(p),[w,b]=r.useState( {
                inView:!!g,entry:void 0
            }
            );
            m.current=p,r.useEffect(()=> {
                let e;
                if(!u&&v)return e=function(e,t) {
                    let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]: {

                    }
                    ,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;
                    if(void 0===window.IntersectionObserver&&void 0!==r) {
                        let i=e.getBoundingClientRect();
                        return t(r, {
                            isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i
                        }
                        ),()=> {

                        }

                    }
                    let {
                        id:i,observer:o,elements:f
                    }
                    =function(e) {
                        let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=> {
                            var n;
                            return"".concat(t,"_").concat("root"===t?(n=e.root)?(s.has(n)||(a+=1,s.set(n,a.toString())),s.get(n)):"0":e[t])
                        }
                        ).toString(),n=l.get(t);
                        if(!n) {
                            let r,i=new Map,o=new IntersectionObserver(t=> {
                                t.forEach(t=> {
                                    var n;
                                    let o=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);
                                    e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach(e=> {
                                        e(o,t)
                                    }
                                    )
                                }
                                )
                            }
                            ,e);
                            r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n= {
                                id:t,observer:o,elements:i
                            }
                            ,l.set(t,n)
                        }
                        return n
                    }
                    (n),d=f.get(e)||[];
                    return f.has(e)||f.set(e,d),d.push(t),o.observe(e),function() {
                        d.splice(d.indexOf(t),1),0===d.length&&(f.delete(e),o.unobserve(e)),0===f.size&&(o.disconnect(),l.delete(i))
                    }

                }
                (v,(t,n)=> {
                    b( {
                        inView:t,entry:n
                    }
                    ),m.current&&m.current(t,n),n.isIntersecting&&d&&e&&(e(),e=void 0)
                }
                , {
                    root:f,rootMargin:o,threshold:t,trackVisibility:i,delay:n
                }
                ,h),()=> {
                    e&&e()
                }

            }
            ,[Array.isArray(t)?t.toString():t,v,f,o,d,u,i,h,n]);
            let x=null==(e=w.entry)?void 0:e.target,k=r.useRef(void 0);
            v||!x||d||u||k.current===x||(k.current=x,b( {
                inView:!!g,entry:void 0
            }
            ));
            let A=[y,w.inView,w.entry];
            return A.ref=A[0],A.inView=A[1],A.entry=A[2],A
        }
        r.Component
    }
    ,12486:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("Send",[["path", {
            d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"
        }
        ],["path", {
            d:"m21.854 2.147-10.94 10.939",key:"12cjpa"
        }
        ]])
    }
    ,43332:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("Tag",[["path", {
            d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"
        }
        ],["circle", {
            cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"
        }
        ]])
    }
    ,47924:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("Search",[["circle", {
            cx:"11",cy:"11",r:"8",key:"4ej97u"
        }
        ],["path", {
            d:"m21 21-4.3-4.3",key:"1qie3q"
        }
        ]])
    }
    ,51154:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("LoaderCircle",[["path", {
            d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"
        }
        ]])
    }
    ,57383:(e,t,n)=> {
        function r(e) {
            for(var t=1;
            t<arguments.length;
            t++) {
                var n=arguments[t];
                for(var r in n)e[r]=n[r]
            }
            return e
        }
        n.d(t, {
            A:()=>i
        }
        );
        var i=function e(t,n) {
            function i(e,i,o) {
                if("undefined"!=typeof document) {
                    "number"==typeof(o=r( {

                    }
                    ,n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);
                    var l="";
                    for(var s in o)o[s]&&(l+="; "+s,!0!==o[s]&&(l+="="+o[s].split(";")[0]));
                    return document.cookie=e+"="+t.write(i,e)+l
                }

            }
            return Object.create( {
                set:i,get:function(e) {
                    if("undefined"!=typeof document&&(!arguments.length||e)) {
                        for(var n=document.cookie?document.cookie.split("; "):[],r= {

                        }
                        ,i=0;
                        i<n.length;
                        i++) {
                            var o=n[i].split("="),l=o.slice(1).join("=");
                            try {
                                var s=decodeURIComponent(o[0]);
                                if(r[s]=t.read(l,s),e===s)break
                            }
                            catch(e) {

                            }

                        }
                        return e?r[e]:r
                    }

                }
                ,remove:function(e,t) {
                    i(e,"",r( {

                    }
                    ,t, {
                        expires:-1
                    }
                    ))
                }
                ,withAttributes:function(t) {
                    return e(this.converter,r( {

                    }
                    ,this.attributes,t))
                }
                ,withConverter:function(t) {
                    return e(r( {

                    }
                    ,this.converter,t),this.attributes)
                }

            }
            , {
                attributes: {
                    value:Object.freeze(n)
                }
                ,converter: {
                    value:Object.freeze(t)
                }

            }
            )
        }
        ( {
            read:function(e) {
                return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F] {
                    2
                }
                )+/gi,decodeURIComponent)
            }
            ,write:function(e) {
                return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)
            }

        }
        , {
            path:"/"
        }
        )
    }
    ,62525:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("Trash2",[["path", {
            d:"M3 6h18",key:"d0wm0j"
        }
        ],["path", {
            d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"
        }
        ],["path", {
            d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"
        }
        ],["line", {
            x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"
        }
        ],["line", {
            x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"
        }
        ]])
    }
    ,62720:(e,t,n)=> {
        let r,i;
        n.d(t, {
            L:()=>D
        }
        );
        var o=n(60098),l=n(54542),s=n(12115),a=n(19827),c=n(69515);
        function f(e,t) {
            let n,r=()=> {
                let {
                    currentTime:r
                }
                =t,i=(null===r?0:r.value)/100;
                n!==i&&e(i),n=i
            }
            ;
            return c.Gt.preUpdate(r,!0),()=>(0,c.WG)(r)
        }
        var d=n(91116),u=n(69782),g=n(42198);
        let h=new WeakMap,p=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:(0,u.x)(r)&&"getBBox"in r?r.getBBox()[t]:r[n],v=p("inline","width","offsetWidth"),y=p("block","height","offsetHeight");
        function m( {
            target:e,borderBoxSize:t
        }
        ) {
            h.get(e)?.forEach(n=> {
                n(e, {
                    get width() {
                        return v(e,t)
                    }
                    ,get height() {
                        return y(e,t)
                    }

                }
                )
            }
            )
        }
        function w(e) {
            e.forEach(m)
        }
        let b=new Set;
        var x=n(45818),k=n(62923);
        let A=()=>( {
            current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0
        }
        ),E=()=>( {
            time:0,x:A(),y:A()
        }
        ),M= {
            x: {
                length:"Width",position:"Left"
            }
            ,y: {
                length:"Height",position:"Top"
            }

        }
        ;
        function O(e,t,n,r) {
            let i=n[t], {
                length:o,position:l
            }
            =M[t],s=i.current,a=n.time;
            i.current=e[`scroll$ {
                l
            }
            `],i.scrollLength=e[`scroll$ {
                o
            }
            `]-e[`client$ {
                o
            }
            `],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,x.q)(0,i.scrollLength,i.current);
            let c=r-a;
            i.velocity=c>50?0:(0,k.f)(i.current-s,c)
        }
        var L=n(6775),W=n(71784),z=n(53678),C=n(27351);
        let S= {
            start:0,center:.5,end:1
        }
        ;
        function B(e,t,n=0) {
            let r=0;
            if(e in S&&(e=S[e]),"string"==typeof e) {
                let t=parseFloat(e);
                e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t
            }
            return"number"==typeof e&&(r=t*e),n+r
        }
        let R=[0,0],I= {
            All:[[0,0],[1,1]]
        }
        ,j= {
            x:0,y:0
        }
        ,H=new WeakMap,P=new WeakMap,V=new WeakMap,G=e=>e===document.scrollingElement?window:e;
        function T(e, {
            container:t=document.scrollingElement,...n
        }
        = {

        }
        ) {
            if(!t)return a.l;
            let o=V.get(t);
            o||(o=new Set,V.set(t,o));
            let l=function(e,t,n,r= {

            }
            ) {
                return {
                    measure:t=> {
                        !function(e,t=e,n) {
                            if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e) {
                                let r=t;
                                for(;
                                r&&r!==e;
                                )n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent
                            }
                            n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight
                        }
                        (e,r.target,n),O(e,"x",n,t),O(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n) {
                            let {
                                offset:r=I.All
                            }
                            =n, {
                                target:i=e,axis:o="y"
                            }
                            =n,l="y"===o?"height":"width",s=i!==e?function(e,t) {
                                let n= {
                                    x:0,y:0
                                }
                                ,r=e;
                                for(;
                                r&&r!==t;
                                )if((0,C.s)(r))n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;
                                else if("svg"===r.tagName) {
                                    let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();
                                    n.x+=e.left-t.left,n.y+=e.top-t.top
                                }
                                else if(r instanceof SVGGraphicsElement) {
                                    let {
                                        x:e,y:t
                                    }
                                    =r.getBBox();
                                    n.x+=e,n.y+=t;
                                    let i=null,o=r.parentNode;
                                    for(;
                                    !i;
                                    )"svg"===o.tagName&&(i=o),o=r.parentNode;
                                    r=i
                                }
                                else break;
                                return n
                            }
                            (i,e):j,a=i===e? {
                                width:e.scrollWidth,height:e.scrollHeight
                            }
                            :"getBBox"in i&&"svg"!==i.tagName?i.getBBox(): {
                                width:i.clientWidth,height:i.clientHeight
                            }
                            ,c= {
                                width:e.clientWidth,height:e.clientHeight
                            }
                            ;
                            t[o].offset.length=0;
                            let f=!t[o].interpolate,d=r.length;
                            for(let e=0;
                            e<d;
                            e++) {
                                let n=function(e,t,n,r) {
                                    let i=Array.isArray(e)?e:R,o=0,l=0;
                                    return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,S[e]?e:"0"]),(o=B(i[0],n,r))-B(i[1],t)
                                }
                                (r[e],c[l],a[l],s[o]);
                                f||n===t[o].interpolatorOffsets[e]||(f=!0),t[o].offset[e]=n
                            }
                            f&&(t[o].interpolate=(0,L.G)(t[o].offset,(0,W.Z)(r), {
                                clamp:!1
                            }
                            ),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=(0,z.q)(0,1,t[o].interpolate(t[o].current))
                        }
                        (e,n,r)
                    }
                    ,notify:()=>t(n)
                }

            }
            (t,e,E(),n);
            if(o.add(l),!H.has(t)) {
                let e=()=> {
                    for(let e of o)e.measure(c.uv.timestamp);
                    c.Gt.preUpdate(n)
                }
                ,n=()=> {
                    for(let e of o)e.notify()
                }
                ,l=()=>c.Gt.read(e);
                H.set(t,l);
                let s=G(t);
                window.addEventListener("resize",l, {
                    passive:!0
                }
                ),t!==document.documentElement&&P.set(t,"function"==typeof t?(b.add(t),i||(i=()=> {
                    let e= {
                        get width() {
                            return window.innerWidth
                        }
                        ,get height() {
                            return window.innerHeight
                        }

                    }
                    ;
                    b.forEach(t=>t(e))
                }
                ,window.addEventListener("resize",i)),()=> {
                    b.delete(t),b.size||"function"!=typeof i||(window.removeEventListener("resize",i),i=void 0)
                }
                ):function(e,t) {
                    r||"undefined"!=typeof ResizeObserver&&(r=new ResizeObserver(w));
                    let n=(0,g.K)(e);
                    return n.forEach(e=> {
                        let n=h.get(e);
                        n||(n=new Set,h.set(e,n)),n.add(t),r?.observe(e)
                    }
                    ),()=> {
                        n.forEach(e=> {
                            let n=h.get(e);
                            n?.delete(t),n?.size||r?.unobserve(e)
                        }
                        )
                    }

                }
                (t,l)),s.addEventListener("scroll",l, {
                    passive:!0
                }
                ),l()
            }
            let s=H.get(t);
            return c.Gt.read(s,!1,!0),()=> {
                (0,c.WG)(s);
                let e=V.get(t);
                if(!e||(e.delete(l),e.size))return;
                let n=H.get(t);
                H.delete(t),n&&(G(t).removeEventListener("scroll",n),P.get(t)?.(),window.removeEventListener("resize",n))
            }

        }
        let U=new Map;
        function _( {
            source:e,container:t,...n
        }
        ) {
            let {
                axis:r
            }
            =n;
            e&&(t=e);
            let i=U.get(t)??new Map;
            U.set(t,i);
            let o=n.target??"self",l=i.get(o)?? {

            }
            ,s=r+(n.offset??[]).join(",");
            return l[s]||(l[s]=!n.target&&(0,d.J)()?new ScrollTimeline( {
                source:t,axis:r
            }
            ):function(e) {
                let t= {
                    value:0
                }
                ,n=T(n=> {
                    t.value=100*n[e.axis].progress
                }
                ,e);
                return {
                    currentTime:t,cancel:n
                }

            }
            ( {
                container:t,...n
            }
            )),l[s]
        }
        var N=n(82885),q=n(97494);
        function Y(e,t) {
            (0,l.$)(!!(!t||t.current),`You have defined a $ {
                e
            }
             options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let $=()=>({scrollX:(0,o.OQ)(0),scrollY:(0,o.OQ)(0),scrollXProgress:(0,o.OQ)(0),scrollYProgress:(0,o.OQ)(0)});function D({container:e,target:t,layoutEffect:n=!0,...r}={}){let i=(0,N.M)($);return(n?q.E:s.useEffect)(()=>(Y("target",t),Y("container",e),function(e,{axis:t="y",container:n=document.scrollingElement,...r}={}){var i,o;if(!n)return a.l;let l={axis:t,container:n,...r};return"function"==typeof e?(i=e,o=l,2===i.length?T(e=>{i(e[o.axis].progress,e)},o):f(i,_(o))):function(e,t){let n=_(t);return e.attachTimeline({timeline:t.target?void 0:n,observe:e=>(e.pause(),f(t=>{e.time=e.duration*t},n))})}(e,l)}((e,{x:t,y:n})=>{i.scrollX.set(t.current),i.scrollXProgress.set(t.progress),i.scrollY.set(n.current),i.scrollYProgress.set(n.progress)},{...r,container:e?.current||void 0,target:t?.current||void 0})),[e,t,JSON.stringify(r.offset)]),i}},66766:(e,t,n)=>{n.d(t,{default:()=>i.a});var r=n(71469),i=n.n(r)},71469:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return a},getImageProps:function(){return s}});let r=n(88229),i=n(38883),o=n(33063),l=r._(n(51193));function s(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let a=o.Image},81284:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(19946).A)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]])},81497:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(19946).A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]])},84616:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(19946).A)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},87712:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(19946).A)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])}}]);
