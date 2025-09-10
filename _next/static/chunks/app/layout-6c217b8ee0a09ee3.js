(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7177], {
    19324:()=> {

    }
    ,51362:(e,t,r)=> {
        "use strict";
        r.d(t, {
            D:()=>c,N:()=>m
        }
        );
        var n=r(12115),s=(e,t,r,n,s,a,l,o)=> {
            let i=document.documentElement,c=["light","dark"];
            function m(t) {
                var r;
                (Array.isArray(e)?e:[e]).forEach(e=> {
                    let r="class"===e,n=r&&a?s.map(e=>a[e]||e):s;
                    r?(i.classList.remove(...n),i.classList.add(a&&a[t]?a[t]:t)):i.setAttribute(e,t)
                }
                ),r=t,o&&c.includes(r)&&(i.style.colorScheme=r)
            }
            if(n)m(n);
            else try {
                let e=localStorage.getItem(t)||r,n=l&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;
                m(n)
            }
            catch(e) {

            }

        }
        ,a=["light","dark"],l="(prefers-color-scheme: dark)",o=n.createContext(void 0),i= {
            setTheme:e=> {

            }
            ,themes:[]
        }
        ,c=()=> {
            var e;
            return null!=(e=n.useContext(o))?e:i
        }
        ,m=e=>n.useContext(o)?n.createElement(n.Fragment,null,e.children):n.createElement(u, {
            ...e
        }
        ),d=["light","dark"],u=e=> {
            let {
                forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:s=!0,enableColorScheme:i=!0,storageKey:c="theme",themes:m=d,defaultTheme:u=s?"system":"light",attribute:b="data-theme",value:p,children:g,nonce:E,scriptProps:S
            }
            =e,[k,w]=n.useState(()=>y(c,u)),[C,T]=n.useState(()=>"system"===k?v():k),_=p?Object.values(p):m,L=n.useCallback(e=> {
                let t=e;
                if(!t)return;
                "system"===e&&s&&(t=v());
                let n=p?p[t]:t,l=r?f(E):null,o=document.documentElement,c=e=> {
                    "class"===e?(o.classList.remove(..._),n&&o.classList.add(n)):e.startsWith("data-")&&(n?o.setAttribute(e,n):o.removeAttribute(e))
                }
                ;
                if(Array.isArray(b)?b.forEach(c):c(b),i) {
                    let e=a.includes(u)?u:null,r=a.includes(t)?t:e;
                    o.style.colorScheme=r
                }
                null==l||l()
            }
            ,[E]),N=n.useCallback(e=> {
                let t="function"==typeof e?e(k):e;
                w(t);
                try {
                    localStorage.setItem(c,t)
                }
                catch(e) {

                }

            }
            ,[k]),P=n.useCallback(e=> {
                T(v(e)),"system"===k&&s&&!t&&L("system")
            }
            ,[k,t]);
            n.useEffect(()=> {
                let e=window.matchMedia(l);
                return e.addListener(P),P(e),()=>e.removeListener(P)
            }
            ,[P]),n.useEffect(()=> {
                let e=e=> {
                    e.key===c&&(e.newValue?w(e.newValue):N(u))
                }
                ;
                return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)
            }
            ,[N]),n.useEffect(()=> {
                L(null!=t?t:k)
            }
            ,[t,k]);
            let A=n.useMemo(()=>( {
                theme:k,setTheme:N,forcedTheme:t,resolvedTheme:"system"===k?C:k,themes:s?[...m,"system"]:m,systemTheme:s?C:void 0
            }
            ),[k,N,t,C,s,m]);
            return n.createElement(o.Provider, {
                value:A
            }
            ,n.createElement(h, {
                forcedTheme:t,storageKey:c,attribute:b,enableSystem:s,enableColorScheme:i,defaultTheme:u,value:p,themes:m,nonce:E,scriptProps:S
            }
            ),g)
        }
        ,h=n.memo(e=> {
            let {
                forcedTheme:t,storageKey:r,attribute:a,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:c,themes:m,nonce:d,scriptProps:u
            }
            =e,h=JSON.stringify([a,r,i,t,m,c,l,o]).slice(1,-1);
            return n.createElement("script", {
                ...u,suppressHydrationWarning:!0,nonce:"",dangerouslySetInnerHTML: {
                    __html:"(".concat(s.toString(),")(").concat(h,")")
                }

            }
            )
        }
        ),y=(e,t)=> {
            let r;
            try {
                r=localStorage.getItem(e)||void 0
            }
            catch(e) {

            }
            return r||t
        }
        ,f=e=> {
            let t=document.createElement("style");
            return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=> {
                window.getComputedStyle(document.body),setTimeout(()=> {
                    document.head.removeChild(t)
                }
                ,1)
            }

        }
        ,v=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")
    }
    ,65299:e=> {
        e.exports= {
            style: {
                fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"
            }
            ,className:"__className_e8ce0c"
        }

    }
    ,74348:(e,t,r)=> {
        Promise.resolve().then(r.bind(r,99304)),Promise.resolve().then(r.t.bind(r,65299,23)),Promise.resolve().then(r.t.bind(r,19324,23)),Promise.resolve().then(r.bind(r,56671))
    }
    ,99304:(e,t,r)=> {
        "use strict";
        r.d(t, {
            ThemeProvider:()=>a
        }
        );
        var n=r(95155);
        r(12115);
        var s=r(51362);
        function a(e) {
            let {
                children:t,...r
            }
            =e;
            return(0,n.jsx)(s.N, {
                ...r,children:t
            }
            )
        }

    }

}
,e=> {
    var t=t=>e(e.s=t);
    e.O(0,[9854,2533,6671,8441,1684,7358],()=>t(74348)),_N_E=e.O()
}
]);
