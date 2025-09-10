"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6583], {
    3096:(e,t,r)=> {
        r.d(t, {
            Wx:()=>s
        }
        );
        var n=r(12115),i=Object.defineProperty,o=(e,t,r)=>t in e?i(e,t, {
            enumerable:!0,configurable:!0,writable:!0,value:r
        }
        ):e[t]=r,a=new Map,u=new WeakMap,c=0,l=void 0;
        function s() {
            var e;
            let {
                threshold:t,delay:r,trackVisibility:i,rootMargin:o,root:s,triggerOnce:f,skip:d,initialInView:h,fallbackInView:p,onChange:y
            }
            =arguments.length>0&&void 0!==arguments[0]?arguments[0]: {

            }
            ,[v,b]=n.useState(null),m=n.useRef(y),[g,w]=n.useState( {
                inView:!!h,entry:void 0
            }
            );
            m.current=y,n.useEffect(()=> {
                let e;
                if(!d&&v)return e=function(e,t) {
                    let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]: {

                    }
                    ,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;
                    if(void 0===window.IntersectionObserver&&void 0!==n) {
                        let i=e.getBoundingClientRect();
                        return t(n, {
                            isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i
                        }
                        ),()=> {

                        }

                    }
                    let {
                        id:i,observer:o,elements:s
                    }
                    =function(e) {
                        let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=> {
                            var r;
                            return"".concat(t,"_").concat("root"===t?(r=e.root)?(u.has(r)||(c+=1,u.set(r,c.toString())),u.get(r)):"0":e[t])
                        }
                        ).toString(),r=a.get(t);
                        if(!r) {
                            let n,i=new Map,o=new IntersectionObserver(t=> {
                                t.forEach(t=> {
                                    var r;
                                    let o=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);
                                    e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach(e=> {
                                        e(o,t)
                                    }
                                    )
                                }
                                )
                            }
                            ,e);
                            n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r= {
                                id:t,observer:o,elements:i
                            }
                            ,a.set(t,r)
                        }
                        return r
                    }
                    (r),f=s.get(e)||[];
                    return s.has(e)||s.set(e,f),f.push(t),o.observe(e),function() {
                        f.splice(f.indexOf(t),1),0===f.length&&(s.delete(e),o.unobserve(e)),0===s.size&&(o.disconnect(),a.delete(i))
                    }

                }
                (v,(t,r)=> {
                    w( {
                        inView:t,entry:r
                    }
                    ),m.current&&m.current(t,r),r.isIntersecting&&f&&e&&(e(),e=void 0)
                }
                , {
                    root:s,rootMargin:o,threshold:t,trackVisibility:i,delay:r
                }
                ,p),()=> {
                    e&&e()
                }

            }
            ,[Array.isArray(t)?t.toString():t,v,s,o,f,d,i,p,r]);
            let x=null==(e=g.entry)?void 0:e.target,S=n.useRef(void 0);
            v||!x||f||d||S.current===x||(S.current=x,w( {
                inView:!!h,entry:void 0
            }
            ));
            let k=[b,g.inView,g.entry];
            return k.ref=k[0],k.inView=k[1],k.entry=k[2],k
        }
        n.Component
    }
    ,14186:(e,t,r)=> {
        r.d(t, {
            A:()=>n
        }
        );
        let n=(0,r(19946).A)("Clock",[["circle", {
            cx:"12",cy:"12",r:"10",key:"1mglay"
        }
        ],["polyline", {
            points:"12 6 12 12 16 14",key:"68esgv"
        }
        ]])
    }
    ,15580:(e,t,r)=> {
        r.d(t, {
            A:()=>n
        }
        );
        let n=(0,r(19946).A)("ThumbsDown",[["path", {
            d:"M17 14V2",key:"8ymqnk"
        }
        ],["path", {
            d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"
        }
        ]])
    }
    ,47924:(e,t,r)=> {
        r.d(t, {
            A:()=>n
        }
        );
        let n=(0,r(19946).A)("Search",[["circle", {
            cx:"11",cy:"11",r:"8",key:"4ej97u"
        }
        ],["path", {
            d:"m21 21-4.3-4.3",key:"1qie3q"
        }
        ]])
    }
    ,66766:(e,t,r)=> {
        r.d(t, {
            default:()=>i.a
        }
        );
        var n=r(71469),i=r.n(n)
    }
    ,67470:(e,t,r)=> {
        r.d(t, {
            d:()=>f
        }
        );
        var n=r(12115);
        function i(e,t,r,n) {
            return new(r||(r=Promise))(function(i,o) {
                function a(e) {
                    try {
                        c(n.next(e))
                    }
                    catch(e) {
                        o(e)
                    }

                }
                function u(e) {
                    try {
                        c(n.throw(e))
                    }
                    catch(e) {
                        o(e)
                    }

                }
                function c(e) {
                    var t;
                    e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e) {
                        e(t)
                    }
                    )).then(a,u)
                }
                c((n=n.apply(e,t||[])).next())
            }
            )
        }
        function o(e,t) {
            var r,n,i,o,a= {
                label:0,sent:function() {
                    if(1&i[0])throw i[1];
                    return i[1]
                }
                ,trys:[],ops:[]
            }
            ;
            return o= {
                next:u(0),throw:u(1),return:u(2)
            }
            ,"function"==typeof Symbol&&(o[Symbol.iterator]=function() {
                return this
            }
            ),o;
            function u(o) {
                return function(u) {
                    var c=[o,u];
                    if(r)throw TypeError("Generator is already executing.");
                    for(;
                    a;
                    )try {
                        if(r=1,n&&(i=2&c[0]?n.return:c[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,c[1])).done)return i;
                        switch(n=0,i&&(c=[2&c[0],i.value]),c[0]) {
                            case 0:case 1:i=c;
                            break;
                            case 4:return a.label++, {
                                value:c[1],done:!1
                            }
                            ;
                            case 5:a.label++,n=c[1],c=[0];
                            continue;
                            case 7:c=a.ops.pop(),a.trys.pop();
                            continue;
                            default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===c[0]||2===c[0])) {
                                a=0;
                                continue
                            }
                            if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])) {
                                a.label=c[1];
                                break
                            }
                            if(6===c[0]&&a.label<i[1]) {
                                a.label=i[1],i=c;
                                break
                            }
                            if(i&&a.label<i[2]) {
                                a.label=i[2],a.ops.push(c);
                                break
                            }
                            i[2]&&a.ops.pop(),a.trys.pop();
                            continue
                        }
                        c=t.call(e,a)
                    }
                    catch(e) {
                        c=[6,e],n=0
                    }
                    finally {
                        r=i=0
                    }
                    if(5&c[0])throw c[1];
                    return {
                        value:c[0]?c[1]:void 0,done:!0
                    }

                }

            }

        }
        function a(e) {
            var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;
            if(r)return r.call(e);
            if(e&&"number"==typeof e.length)return {
                next:function() {
                    return e&&n>=e.length&&(e=void 0), {
                        value:e&&e[n++],done:!e
                    }

                }

            }
            ;
            throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")
        }
        function u(e,t) {
            var r="function"==typeof Symbol&&e[Symbol.iterator];
            if(!r)return e;
            var n,i,o=r.call(e),a=[];
            try {
                for(;
                (void 0===t||t-- >0)&&!(n=o.next()).done;
                )a.push(n.value)
            }
            catch(e) {
                i= {
                    error:e
                }

            }
            finally {
                try {
                    n&&!n.done&&(r=o.return)&&r.call(o)
                }
                finally {
                    if(i)throw i.error
                }

            }
            return a
        }
        function c(e,t,r) {
            if(r||2==arguments.length)for(var n,i=0,o=t.length;
            i<o;
            i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);
            return e.concat(n||Array.prototype.slice.call(t))
        }
        function l(e,t,r,n,l) {
            for(var f=[],d=5;
            d<arguments.length;
            d++)f[d-5]=arguments[d];
            return i(this,void 0,void 0,function() {
                var d,h,p,y,v;
                return o(this,function(b) {
                    switch(b.label) {
                        case 0:b.trys.push([0,12,13,14]),h=(d=a(f)).next(),b.label=1;
                        case 1:if(h.done)return[3,11];
                        switch(typeof(p=h.value)) {
                            case"string":return[3,2];
                            case"number":return[3,4];
                            case"function":return[3,6]
                        }
                        return[3,8];
                        case 2:return[4,function(e,t,r,n,l,f) {
                            return i(this,void 0,void 0,function() {
                                var d,h;
                                return o(this,function(p) {
                                    switch(p.label) {
                                        case 0:var y,v;
                                        return y=d=e.textContent||"",v=u(r).slice(0),h=c(c([],u(y),!1),[NaN],!1).findIndex(function(e,t) {
                                            return v[t]!==e
                                        }
                                        ),[4,function(e,t,r,n,c) {
                                            return i(this,void 0,void 0,function() {
                                                var i,l,f,d,h,p,y,v,b,m,g,w;
                                                return o(this,function(x) {
                                                    switch(x.label) {
                                                        case 0:if(i=t,c) {
                                                            for(l=0,f=1;
                                                            f<t.length;
                                                            f++)if(h=(d=u([t[f-1],t[f]],2))[0],(p=d[1]).length>h.length||""===p) {
                                                                l=f;
                                                                break
                                                            }
                                                            i=t.slice(l,t.length)
                                                        }
                                                        x.label=1;
                                                        case 1:x.trys.push([1,6,7,8]),v=(y=a(function(e) {
                                                            var t,r,n,i,u,c;
                                                            return o(this,function(l) {
                                                                switch(l.label) {
                                                                    case 0:t=function(e) {
                                                                        return o(this,function(t) {
                                                                            switch(t.label) {
                                                                                case 0:return[4, {
                                                                                    op:function(t) {
                                                                                        return requestAnimationFrame(function() {
                                                                                            return t.textContent=e
                                                                                        }
                                                                                        )
                                                                                    }
                                                                                    ,opCode:function(t) {
                                                                                        var r=t.textContent||"";
                                                                                        return""===e||r.length>e.length?"DELETE":"WRITING"
                                                                                    }

                                                                                }
                                                                                ];
                                                                                case 1:return t.sent(),[2]
                                                                            }

                                                                        }
                                                                        )
                                                                    }
                                                                    ,l.label=1;
                                                                    case 1:l.trys.push([1,6,7,8]),n=(r=a(e)).next(),l.label=2;
                                                                    case 2:return n.done?[3,5]:(i=n.value,[5,t(i)]);
                                                                    case 3:l.sent(),l.label=4;
                                                                    case 4:return n=r.next(),[3,2];
                                                                    case 5:return[3,8];
                                                                    case 6:return u= {
                                                                        error:l.sent()
                                                                    }
                                                                    ,[3,8];
                                                                    case 7:try {
                                                                        n&&!n.done&&(c=r.return)&&c.call(r)
                                                                    }
                                                                    finally {
                                                                        if(u)throw u.error
                                                                    }
                                                                    return[7];
                                                                    case 8:return[2]
                                                                }

                                                            }
                                                            )
                                                        }
                                                        (i))).next(),x.label=2;
                                                        case 2:return v.done?[3,5]:(m="WRITING"===(b=v.value).opCode(e)?r+r*(Math.random()-.5):n+n*(Math.random()-.5),b.op(e),[4,s(m)]);
                                                        case 3:x.sent(),x.label=4;
                                                        case 4:return v=y.next(),[3,2];
                                                        case 5:return[3,8];
                                                        case 6:return g= {
                                                            error:x.sent()
                                                        }
                                                        ,[3,8];
                                                        case 7:try {
                                                            v&&!v.done&&(w=y.return)&&w.call(y)
                                                        }
                                                        finally {
                                                            if(g)throw g.error
                                                        }
                                                        return[7];
                                                        case 8:return[2]
                                                    }

                                                }
                                                )
                                            }
                                            )
                                        }
                                        (e,c(c([],u(function(e,t,r) {
                                            var n,i;
                                            return void 0===r&&(r=0),o(this,function(o) {
                                                switch(o.label) {
                                                    case 0:i=(n=t(e)).length,o.label=1;
                                                    case 1:return i>r?[4,n.slice(0,--i).join("")]:[3,3];
                                                    case 2:return o.sent(),[3,1];
                                                    case 3:return[2]
                                                }

                                            }
                                            )
                                        }
                                        (d,t,h)),!1),u(function(e,t,r) {
                                            var n,i;
                                            return void 0===r&&(r=0),o(this,function(o) {
                                                switch(o.label) {
                                                    case 0:i=(n=t(e)).length,o.label=1;
                                                    case 1:return r<i?[4,n.slice(0,++r).join("")]:[3,3];
                                                    case 2:return o.sent(),[3,1];
                                                    case 3:return[2]
                                                }

                                            }
                                            )
                                        }
                                        (r,t,h)),!1),n,l,f)];
                                        case 1:return p.sent(),[2]
                                    }

                                }
                                )
                            }
                            )
                        }
                        (e,t,p,r,n,l)];
                        case 3:case 5:case 7:return b.sent(),[3,10];
                        case 4:return[4,s(p)];
                        case 6:return[4,p.apply(void 0,c([e,t,r,n,l],u(f),!1))];
                        case 8:return[4,p];
                        case 9:b.sent(),b.label=10;
                        case 10:return h=d.next(),[3,1];
                        case 11:return[3,14];
                        case 12:return y= {
                            error:b.sent()
                        }
                        ,[3,14];
                        case 13:try {
                            h&&!h.done&&(v=d.return)&&v.call(d)
                        }
                        finally {
                            if(y)throw y.error
                        }
                        return[7];
                        case 14:return[2]
                    }

                }
                )
            }
            )
        }
        function s(e) {
            return i(this,void 0,void 0,function() {
                return o(this,function(t) {
                    switch(t.label) {
                        case 0:return[4,new Promise(function(t) {
                            return setTimeout(t,e)
                        }
                        )];
                        case 1:return t.sent(),[2]
                    }

                }
                )
            }
            )
        }
        !function(e,t) {
            void 0===t&&(t= {

            }
            );
            var r=t.insertAt;
            if(e&&"undefined"!=typeof document) {
                var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");
                i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))
            }

        }
        (".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
        var f=(0,n.memo)((0,n.forwardRef)(function(e,t) {
            var r=e.sequence,i=e.repeat,o=e.className,a=e.speed,s=void 0===a?40:a,f=e.deletionSpeed,d=e.omitDeletionAnimation,h=void 0!==d&&d,p=e.preRenderFirstString,y=e.wrapper,v=e.splitter,b=void 0===v?function(e) {
                return c([],u(e),!1)
            }
            :v,m=e.cursor,g=void 0===m||m,w=e.style,x=function(e,t) {
                var r= {

                }
                ;
                for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);
                if(null!=e&&"function"==typeof Object.getOwnPropertySymbols) {
                    var i=0;
                    for(n=Object.getOwnPropertySymbols(e);
                    i<n.length;
                    i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])
                }
                return r
            }
            (e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),S=x["aria-label"],k=x["aria-hidden"],A=x.role;
            f||(f=s);
            var _=[,,].fill(40);
            [s,f].forEach(function(e,t) {
                switch(typeof e) {
                    case"number":_[t]=Math.abs(e-100);
                    break;
                    case"object":var r=e.type,n=e.value;
                    if("number"!=typeof n)break;
                    "keyStrokeDelayInMs"===r&&(_[t]=n)
                }

            }
            );
            var E,O,R,C,I,j,P,M,N=_[0],T=_[1],V=(void 0===E&&(E=null),O=(0,n.useRef)(E),(0,n.useEffect)(function() {
                t&&("function"==typeof t?t(O.current):t.current=O.current)
            }
            ,[t]),O),q="index-module_type__E-SaG";
            R=o?"".concat(g?q+" ":"").concat(o):g?q:"",C=(0,n.useRef)(function() {
                var e,t=r;
                i===1/0?e=l:"number"==typeof i&&(t=Array(1+i).fill(r).flat());
                var n=e?c(c([],u(t),!1),[e],!1):c([],u(t),!1);
                return l.apply(void 0,c([V.current,b,N,T,h],u(n),!1)),function() {
                    V.current
                }

            }
            ),I=(0,n.useRef)(),j=(0,n.useRef)(!1),P=(0,n.useRef)(!1),M=u((0,n.useState)(0),2)[1],j.current&&(P.current=!0),(0,n.useEffect)(function() {
                return j.current||(I.current=C.current(),j.current=!0),M(function(e) {
                    return e+1
                }
                ),function() {
                    P.current&&I.current&&I.current()
                }

            }
            ,[]);
            var G=void 0!==p&&p?r.find(function(e) {
                return"string"==typeof e
            }
            )||"":null;
            return n.createElement(void 0===y?"span":y, {
                "aria-hidden":k,"aria-label":S,role:A,style:w,className:R,children:S?n.createElement("span", {
                    "aria-hidden":"true",ref:V,children:G
                }
                ):G,ref:S?void 0:V
            }
            )
        }
        ),function(e,t) {
            return!0
        }
        )
    }
    ,70333:(e,t,r)=> {
        r.d(t, {
            A:()=>n
        }
        );
        let n=(0,r(19946).A)("ThumbsUp",[["path", {
            d:"M7 10v12",key:"1qc93n"
        }
        ],["path", {
            d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"
        }
        ]])
    }
    ,71469:(e,t,r)=> {
        Object.defineProperty(t,"__esModule", {
            value:!0
        }
        ),!function(e,t) {
            for(var r in t)Object.defineProperty(e,r, {
                enumerable:!0,get:t[r]
            }
            )
        }
        (t, {
            default:function() {
                return c
            }
            ,getImageProps:function() {
                return u
            }

        }
        );
        let n=r(88229),i=r(38883),o=r(33063),a=n._(r(51193));
        function u(e) {
            let {
                props:t
            }
            =(0,i.getImgProps)(e, {
                defaultLoader:a.default,imgConf: {
                    deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0
                }

            }
            );
            for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];
            return {
                props:t
            }

        }
        let c=o.Image
    }

}
]);
