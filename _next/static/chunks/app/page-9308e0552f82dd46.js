(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8974], {
    10061:(e,t,n)=> {
        Promise.resolve().then(n.bind(n,41057))
    }
    ,41057:(e,t,n)=> {
        "use strict";
        n.r(t),n.d(t, {
            default:()=>h
        }
        );
        var r=n(95155),a=n(12115),i=n(97168),s=n(7828),c=n(47746),l=n(6874),o=n.n(l),u=n(96848),f=n(67470),d=n(71789);
        function h() {
            let[e,t]=(0,a.useState)(!0);
            return((0,a.useEffect)(()=> {
                let e=setTimeout(()=> {
                    t(!1)
                }
                ,1e3);
                return()=>clearTimeout(e)
            }
            ,[]),e)?(0,r.jsx)("div", {
                className:"min-h-screen flex items-center justify-center",children:(0,r.jsx)(d.k, {

                }
                )
            }
            ):(0,r.jsxs)("div", {
                className:"min-h-screen flex flex-col",children:[(0,r.jsx)(s.Navbar, {

                }
                ),(0,r.jsx)("main", {
                    className:"flex-grow",children:(0,r.jsx)("div", {
                        className:"container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24",children:(0,r.jsx)("div", {
                            className:"grid gap-8 items-center py-12 min-h-[calc(100vh-4rem)]",children:(0,r.jsxs)(u.P.div, {
                                initial: {
                                    opacity:0,y:20
                                }
                                ,animate: {
                                    opacity:1,y:0
                                }
                                ,transition: {
                                    delay:.2
                                }
                                ,className:"space-y-6",children:[(0,r.jsxs)("div", {
                                    children:[(0,r.jsx)(u.P.h2, {
                                        initial: {
                                            opacity:0,y:20
                                        }
                                        ,animate: {
                                            opacity:1,y:0
                                        }
                                        ,transition: {
                                            delay:.3
                                        }
                                        ,className:"text-xl text-sky-400 font-black",children:"Halo Semua \uD83D\uDC4B, Saya"
                                    }
                                    ),(0,r.jsx)(u.P.h1, {
                                        initial: {
                                            opacity:0,y:20
                                        }
                                        ,animate: {
                                            opacity:1,y:0
                                        }
                                        ,transition: {
                                            delay:.4
                                        }
                                        ,className:"text-4xl font-black mt-2",children:"Reza Tech Developer"
                                    }
                                    ),(0,r.jsxs)(u.P.p, {
                                        initial: {
                                            opacity:0,y:20
                                        }
                                        ,animate: {
                                            opacity:1,y:0
                                        }
                                        ,transition: {
                                            delay:.5
                                        }
                                        ,className:"text-lg mt-2",children:[(0,r.jsx)("span", {
                                            className:"text-gray-600 dark:text-gray-400",children:"Saya Seorang - "
                                        }
                                        ),(0,r.jsx)(f.d, {
                                            sequence:["Wibu Akut",2e3,"Gamers",2e3],wrapper:"span",speed:50,repeat:1/0,className:"font-black"
                                        }
                                        )]
                                    }
                                    )]
                                }
                                ),(0,r.jsx)(u.P.blockquote, {
                                    initial: {
                                        opacity:0,y:20
                                    }
                                    ,animate: {
                                        opacity:1,y:0
                                    }
                                    ,transition: {
                                        delay:.6
                                    }
                                    ,className:"border-l-4 pl-4 my-4",children:(0,r.jsxs)("span", {
                                        className:"font-black",children:[(0,r.jsx)("span", {
                                            className:"italic font-normal ",children:'"Jangan menunggu orang lain membahagiakan kamu. Kebahagiaan apa pun yang Anda peroleh, harus Anda ciptakan sendiri"'
                                        }
                                        ),(0,r.jsx)("span", {
                                            className:"block mt-2 font-black text-black dark:text-white",style: {
                                                fontFamily:"Blood, sans-serif"
                                            }
                                            ,children:"- Alice Walker"
                                        }
                                        )]
                                    }
                                    )
                                }
                                ),(0,r.jsxs)(u.P.div, {
                                    initial: {
                                        opacity:0,y:20
                                    }
                                    ,animate: {
                                        opacity:1,y:0
                                    }
                                    ,transition: {
                                        delay:.7
                                    }
                                    ,className:"flex gap-4",children:[(0,r.jsx)(o(), {
                                        href:"/about",children:(0,r.jsx)(i.$, {
                                            size:"lg",className:"bg-sky-400 hover:bg-sky-500 rounded-full h-14 px-8 text-lg",children:(0,r.jsx)("span", {
                                                className:"font-black text-white dark:text-white",children:"Tentang Saya"
                                            }
                                            )
                                        }
                                        )
                                    }
                                    ),(0,r.jsx)(o(), {
                                        href:"/blog",children:(0,r.jsx)(i.$, {
                                            size:"lg",variant:"outline",className:"rounded-full h-14 px-8 text-lg bg-white dark:bg-gray-800",children:(0,r.jsx)("span", {
                                                className:"font-black text-black dark:text-white",children:"Blog"
                                            }
                                            )
                                        }
                                        )
                                    }
                                    )]
                                }
                                )]
                            }
                            )
                        }
                        )
                    }
                    )
                }
                ),(0,r.jsx)(c.Footer, {

                }
                )]
            }
            )
        }

    }
    ,67470:(e,t,n)=> {
        "use strict";
        n.d(t, {
            d:()=>f
        }
        );
        var r=n(12115);
        function a(e,t,n,r) {
            return new(n||(n=Promise))(function(a,i) {
                function s(e) {
                    try {
                        l(r.next(e))
                    }
                    catch(e) {
                        i(e)
                    }

                }
                function c(e) {
                    try {
                        l(r.throw(e))
                    }
                    catch(e) {
                        i(e)
                    }

                }
                function l(e) {
                    var t;
                    e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e) {
                        e(t)
                    }
                    )).then(s,c)
                }
                l((r=r.apply(e,t||[])).next())
            }
            )
        }
        function i(e,t) {
            var n,r,a,i,s= {
                label:0,sent:function() {
                    if(1&a[0])throw a[1];
                    return a[1]
                }
                ,trys:[],ops:[]
            }
            ;
            return i= {
                next:c(0),throw:c(1),return:c(2)
            }
            ,"function"==typeof Symbol&&(i[Symbol.iterator]=function() {
                return this
            }
            ),i;
            function c(i) {
                return function(c) {
                    var l=[i,c];
                    if(n)throw TypeError("Generator is already executing.");
                    for(;
                    s;
                    )try {
                        if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;
                        switch(r=0,a&&(l=[2&l[0],a.value]),l[0]) {
                            case 0:case 1:a=l;
                            break;
                            case 4:return s.label++, {
                                value:l[1],done:!1
                            }
                            ;
                            case 5:s.label++,r=l[1],l=[0];
                            continue;
                            case 7:l=s.ops.pop(),s.trys.pop();
                            continue;
                            default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===l[0]||2===l[0])) {
                                s=0;
                                continue
                            }
                            if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])) {
                                s.label=l[1];
                                break
                            }
                            if(6===l[0]&&s.label<a[1]) {
                                s.label=a[1],a=l;
                                break
                            }
                            if(a&&s.label<a[2]) {
                                s.label=a[2],s.ops.push(l);
                                break
                            }
                            a[2]&&s.ops.pop(),s.trys.pop();
                            continue
                        }
                        l=t.call(e,s)
                    }
                    catch(e) {
                        l=[6,e],r=0
                    }
                    finally {
                        n=a=0
                    }
                    if(5&l[0])throw l[1];
                    return {
                        value:l[0]?l[1]:void 0,done:!0
                    }

                }

            }

        }
        function s(e) {
            var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;
            if(n)return n.call(e);
            if(e&&"number"==typeof e.length)return {
                next:function() {
                    return e&&r>=e.length&&(e=void 0), {
                        value:e&&e[r++],done:!e
                    }

                }

            }
            ;
            throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")
        }
        function c(e,t) {
            var n="function"==typeof Symbol&&e[Symbol.iterator];
            if(!n)return e;
            var r,a,i=n.call(e),s=[];
            try {
                for(;
                (void 0===t||t-- >0)&&!(r=i.next()).done;
                )s.push(r.value)
            }
            catch(e) {
                a= {
                    error:e
                }

            }
            finally {
                try {
                    r&&!r.done&&(n=i.return)&&n.call(i)
                }
                finally {
                    if(a)throw a.error
                }

            }
            return s
        }
        function l(e,t,n) {
            if(n||2==arguments.length)for(var r,a=0,i=t.length;
            a<i;
            a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);
            return e.concat(r||Array.prototype.slice.call(t))
        }
        function o(e,t,n,r,o) {
            for(var f=[],d=5;
            d<arguments.length;
            d++)f[d-5]=arguments[d];
            return a(this,void 0,void 0,function() {
                var d,h,p,y,m;
                return i(this,function(b) {
                    switch(b.label) {
                        case 0:b.trys.push([0,12,13,14]),h=(d=s(f)).next(),b.label=1;
                        case 1:if(h.done)return[3,11];
                        switch(typeof(p=h.value)) {
                            case"string":return[3,2];
                            case"number":return[3,4];
                            case"function":return[3,6]
                        }
                        return[3,8];
                        case 2:return[4,function(e,t,n,r,o,f) {
                            return a(this,void 0,void 0,function() {
                                var d,h;
                                return i(this,function(p) {
                                    switch(p.label) {
                                        case 0:var y,m;
                                        return y=d=e.textContent||"",m=c(n).slice(0),h=l(l([],c(y),!1),[NaN],!1).findIndex(function(e,t) {
                                            return m[t]!==e
                                        }
                                        ),[4,function(e,t,n,r,l) {
                                            return a(this,void 0,void 0,function() {
                                                var a,o,f,d,h,p,y,m,b,x,v,g;
                                                return i(this,function(w) {
                                                    switch(w.label) {
                                                        case 0:if(a=t,l) {
                                                            for(o=0,f=1;
                                                            f<t.length;
                                                            f++)if(h=(d=c([t[f-1],t[f]],2))[0],(p=d[1]).length>h.length||""===p) {
                                                                o=f;
                                                                break
                                                            }
                                                            a=t.slice(o,t.length)
                                                        }
                                                        w.label=1;
                                                        case 1:w.trys.push([1,6,7,8]),m=(y=s(function(e) {
                                                            var t,n,r,a,c,l;
                                                            return i(this,function(o) {
                                                                switch(o.label) {
                                                                    case 0:t=function(e) {
                                                                        return i(this,function(t) {
                                                                            switch(t.label) {
                                                                                case 0:return[4, {
                                                                                    op:function(t) {
                                                                                        return requestAnimationFrame(function() {
                                                                                            return t.textContent=e
                                                                                        }
                                                                                        )
                                                                                    }
                                                                                    ,opCode:function(t) {
                                                                                        var n=t.textContent||"";
                                                                                        return""===e||n.length>e.length?"DELETE":"WRITING"
                                                                                    }

                                                                                }
                                                                                ];
                                                                                case 1:return t.sent(),[2]
                                                                            }

                                                                        }
                                                                        )
                                                                    }
                                                                    ,o.label=1;
                                                                    case 1:o.trys.push([1,6,7,8]),r=(n=s(e)).next(),o.label=2;
                                                                    case 2:return r.done?[3,5]:(a=r.value,[5,t(a)]);
                                                                    case 3:o.sent(),o.label=4;
                                                                    case 4:return r=n.next(),[3,2];
                                                                    case 5:return[3,8];
                                                                    case 6:return c= {
                                                                        error:o.sent()
                                                                    }
                                                                    ,[3,8];
                                                                    case 7:try {
                                                                        r&&!r.done&&(l=n.return)&&l.call(n)
                                                                    }
                                                                    finally {
                                                                        if(c)throw c.error
                                                                    }
                                                                    return[7];
                                                                    case 8:return[2]
                                                                }

                                                            }
                                                            )
                                                        }
                                                        (a))).next(),w.label=2;
                                                        case 2:return m.done?[3,5]:(x="WRITING"===(b=m.value).opCode(e)?n+n*(Math.random()-.5):r+r*(Math.random()-.5),b.op(e),[4,u(x)]);
                                                        case 3:w.sent(),w.label=4;
                                                        case 4:return m=y.next(),[3,2];
                                                        case 5:return[3,8];
                                                        case 6:return v= {
                                                            error:w.sent()
                                                        }
                                                        ,[3,8];
                                                        case 7:try {
                                                            m&&!m.done&&(g=y.return)&&g.call(y)
                                                        }
                                                        finally {
                                                            if(v)throw v.error
                                                        }
                                                        return[7];
                                                        case 8:return[2]
                                                    }

                                                }
                                                )
                                            }
                                            )
                                        }
                                        (e,l(l([],c(function(e,t,n) {
                                            var r,a;
                                            return void 0===n&&(n=0),i(this,function(i) {
                                                switch(i.label) {
                                                    case 0:a=(r=t(e)).length,i.label=1;
                                                    case 1:return a>n?[4,r.slice(0,--a).join("")]:[3,3];
                                                    case 2:return i.sent(),[3,1];
                                                    case 3:return[2]
                                                }

                                            }
                                            )
                                        }
                                        (d,t,h)),!1),c(function(e,t,n) {
                                            var r,a;
                                            return void 0===n&&(n=0),i(this,function(i) {
                                                switch(i.label) {
                                                    case 0:a=(r=t(e)).length,i.label=1;
                                                    case 1:return n<a?[4,r.slice(0,++n).join("")]:[3,3];
                                                    case 2:return i.sent(),[3,1];
                                                    case 3:return[2]
                                                }

                                            }
                                            )
                                        }
                                        (n,t,h)),!1),r,o,f)];
                                        case 1:return p.sent(),[2]
                                    }

                                }
                                )
                            }
                            )
                        }
                        (e,t,p,n,r,o)];
                        case 3:case 5:case 7:return b.sent(),[3,10];
                        case 4:return[4,u(p)];
                        case 6:return[4,p.apply(void 0,l([e,t,n,r,o],c(f),!1))];
                        case 8:return[4,p];
                        case 9:b.sent(),b.label=10;
                        case 10:return h=d.next(),[3,1];
                        case 11:return[3,14];
                        case 12:return y= {
                            error:b.sent()
                        }
                        ,[3,14];
                        case 13:try {
                            h&&!h.done&&(m=d.return)&&m.call(d)
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
        function u(e) {
            return a(this,void 0,void 0,function() {
                return i(this,function(t) {
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
            var n=t.insertAt;
            if(e&&"undefined"!=typeof document) {
                var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");
                a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))
            }

        }
        (".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
        var f=(0,r.memo)((0,r.forwardRef)(function(e,t) {
            var n=e.sequence,a=e.repeat,i=e.className,s=e.speed,u=void 0===s?40:s,f=e.deletionSpeed,d=e.omitDeletionAnimation,h=void 0!==d&&d,p=e.preRenderFirstString,y=e.wrapper,m=e.splitter,b=void 0===m?function(e) {
                return l([],c(e),!1)
            }
            :m,x=e.cursor,v=void 0===x||x,g=e.style,w=function(e,t) {
                var n= {

                }
                ;
                for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);
                if(null!=e&&"function"==typeof Object.getOwnPropertySymbols) {
                    var a=0;
                    for(r=Object.getOwnPropertySymbols(e);
                    a<r.length;
                    a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])
                }
                return n
            }
            (e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),k=w["aria-label"],j=w["aria-hidden"],N=w.role;
            f||(f=u);
            var S=[,,].fill(40);
            [u,f].forEach(function(e,t) {
                switch(typeof e) {
                    case"number":S[t]=Math.abs(e-100);
                    break;
                    case"object":var n=e.type,r=e.value;
                    if("number"!=typeof r)break;
                    "keyStrokeDelayInMs"===n&&(S[t]=r)
                }

            }
            );
            var E,_,P,T,C,O,A,R,D=S[0],I=S[1],G=(void 0===E&&(E=null),_=(0,r.useRef)(E),(0,r.useEffect)(function() {
                t&&("function"==typeof t?t(_.current):t.current=_.current)
            }
            ,[t]),_),q="index-module_type__E-SaG";
            P=i?"".concat(v?q+" ":"").concat(i):v?q:"",T=(0,r.useRef)(function() {
                var e,t=n;
                a===1/0?e=o:"number"==typeof a&&(t=Array(1+a).fill(n).flat());
                var r=e?l(l([],c(t),!1),[e],!1):l([],c(t),!1);
                return o.apply(void 0,l([G.current,b,D,I,h],c(r),!1)),function() {
                    G.current
                }

            }
            ),C=(0,r.useRef)(),O=(0,r.useRef)(!1),A=(0,r.useRef)(!1),R=c((0,r.useState)(0),2)[1],O.current&&(A.current=!0),(0,r.useEffect)(function() {
                return O.current||(C.current=T.current(),O.current=!0),R(function(e) {
                    return e+1
                }
                ),function() {
                    A.current&&C.current&&C.current()
                }

            }
            ,[]);
            var B=void 0!==p&&p?n.find(function(e) {
                return"string"==typeof e
            }
            )||"":null;
            return r.createElement(void 0===y?"span":y, {
                "aria-hidden":j,"aria-label":k,role:N,style:g,className:P,children:k?r.createElement("span", {
                    "aria-hidden":"true",ref:G,children:B
                }
                ):B,ref:k?void 0:G
            }
            )
        }
        ),function(e,t) {
            return!0
        }
        )
    }
    ,71789:(e,t,n)=> {
        "use strict";
        n.d(t, {
            k:()=>i
        }
        );
        var r=n(95155),a=n(53999);
        function i(e) {
            let {
                className:t
            }
            =e;
            return(0,r.jsx)("div", {
                className:(0,a.cn)("flex items-center justify-center",t),children:(0,r.jsx)("div", {
                    className:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"
                }
                )
            }
            )
        }

    }

}
,e=> {
    var t=t=>e(e.s=t);
    e.O(0,[6711,9003,2315,8441,1684,7358],()=>t(10061)),_N_E=e.O()
}
]);
