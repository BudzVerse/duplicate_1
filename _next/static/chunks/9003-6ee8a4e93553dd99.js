"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9003], {
    1335:(e,t,n)=> {
        n.d(t, {
            u:()=>i
        }
        );
        var r=n(9064);
        let i= {
            test:(0,n(55920).$)("#"),parse:function(e) {
                let t="",n="",r="",i="";
                return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i), {
                    red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1
                }

            }
            ,transform:r.B.transform
        }

    }
    ,4272:(e,t,n)=> {
        n.d(t, {
            y:()=>s
        }
        );
        var r=n(1335),i=n(18476),o=n(9064);
        let s= {
            test:e=>o.B.test(e)||r.u.test(e)||i.V.test(e),parse:e=>o.B.test(e)?o.B.parse(e):i.V.test(e)?i.V.parse(e):r.u.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?o.B.transform(e):i.V.transform(e),getAnimatableNone:e=> {
                let t=s.parse(e);
                return t.alpha=0,s.transform(t)
            }

        }

    }
    ,5040:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("BookOpen",[["path", {
            d:"M12 7v14",key:"1akyts"
        }
        ],["path", {
            d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"
        }
        ]])
    }
    ,5845:(e,t,n)=> {
        n.d(t, {
            i:()=>a
        }
        );
        var r,i=n(12115),o=n(52712),s=(r||(r=n.t(i,2)))[" useInsertionEffect ".trim().toString()]||o.N;
        function a( {
            prop:e,defaultProp:t,onChange:n=()=> {

            }
            ,caller:r
        }
        ) {
            let[o,a,l]=function( {
                defaultProp:e,onChange:t
            }
            ) {
                let[n,r]=i.useState(e),o=i.useRef(n),a=i.useRef(t);
                return s(()=> {
                    a.current=t
                }
                ,[t]),i.useEffect(()=> {
                    o.current!==n&&(a.current?.(n),o.current=n)
                }
                ,[n,o]),[n,r,a]
            }
            ( {
                defaultProp:t,onChange:n
            }
            ),u=void 0!==e,c=u?e:o;
             {
                let t=i.useRef(void 0!==e);
                i.useEffect(()=> {
                    let e=t.current;
                    if(e!==u) {
                        let t=u?"controlled":"uncontrolled";
                        console.warn(`$ {
                            r
                        }
                         is changing from $ {
                            e?"controlled":"uncontrolled"
                        }
                         to $ {
                            t
                        }
                        . Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
                    }
                    t.current=u
                }
                ,[u,r])
            }
            return[c,i.useCallback(t=> {
                if(u) {
                    let n="function"==typeof t?t(e):t;
                    n!==e&&l.current?.(n)
                }
                else a(t)
            }
            ,[u,e,a,l])]
        }
        Symbol("RADIX:SYNC_STATE")
    }
    ,6101:(e,t,n)=> {
        n.d(t, {
            s:()=>s,t:()=>o
        }
        );
        var r=n(12115);
        function i(e,t) {
            if("function"==typeof e)return e(t);
            null!=e&&(e.current=t)
        }
        function o(...e) {
            return t=> {
                let n=!1,r=e.map(e=> {
                    let r=i(e,t);
                    return n||"function"!=typeof r||(n=!0),r
                }
                );
                if(n)return()=> {
                    for(let t=0;
                    t<r.length;
                    t++) {
                        let n=r[t];
                        "function"==typeof n?n():i(e[t],null)
                    }

                }

            }

        }
        function s(...e) {
            return r.useCallback(o(...e),e)
        }

    }
    ,6654:(e,t,n)=> {
        Object.defineProperty(t,"__esModule", {
            value:!0
        }
        ),Object.defineProperty(t,"useMergedRef", {
            enumerable:!0,get:function() {
                return i
            }

        }
        );
        let r=n(12115);
        function i(e,t) {
            let n=(0,r.useRef)(null),i=(0,r.useRef)(null);
            return(0,r.useCallback)(r=> {
                if(null===r) {
                    let e=n.current;
                    e&&(n.current=null,e());
                    let t=i.current;
                    t&&(i.current=null,t())
                }
                else e&&(n.current=o(e,r)),t&&(i.current=o(t,r))
            }
            ,[e,t])
        }
        function o(e,t) {
            if("function"!=typeof e)return e.current=t,()=> {
                e.current=null
            }
            ;
             {
                let n=e(t);
                return"function"==typeof n?n:()=>e(null)
            }

        }
        ("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule", {
            value:!0
        }
        ),Object.assign(t.default,t),e.exports=t.default)
    }
    ,6775:(e,t,n)=> {
        n.d(t, {
            G:()=>c
        }
        );
        var r=n(23387),i=n(19827),o=n(53191),s=n(54542),a=n(45818),l=n(53678),u=n(26087);
        function c(e,t, {
            clamp:n=!0,ease:d,mixer:h
        }
        = {

        }
        ) {
            let p=e.length;
            if((0,s.V)(p===t.length,"Both input and output ranges must be the same length"),1===p)return()=>t[0];
            if(2===p&&t[0]===t[1])return()=>t[1];
            let f=e[0]===e[1];
            e[0]>e[p-1]&&(e=[...e].reverse(),t=[...t].reverse());
            let m=function(e,t,n) {
                let s=[],a=n||r.W.mix||u.j,l=e.length-1;
                for(let n=0;
                n<l;
                n++) {
                    let r=a(e[n],e[n+1]);
                    if(t) {
                        let e=Array.isArray(t)?t[n]||i.l:t;
                        r=(0,o.F)(e,r)
                    }
                    s.push(r)
                }
                return s
            }
            (t,d,h),v=m.length,g=n=> {
                if(f&&n<e[0])return t[0];
                let r=0;
                if(v>1)for(;
                r<e.length-2&&!(n<e[r+1]);
                r++);
                let i=(0,a.q)(e[r],e[r+1],n);
                return m[r](i)
            }
            ;
            return n?t=>g((0,l.q)(e[0],e[p-1],t)):g
        }

    }
    ,6874:(e,t,n)=> {
        Object.defineProperty(t,"__esModule", {
            value:!0
        }
        ),!function(e,t) {
            for(var n in t)Object.defineProperty(e,n, {
                enumerable:!0,get:t[n]
            }
            )
        }
        (t, {
            default:function() {
                return v
            }
            ,useLinkStatus:function() {
                return y
            }

        }
        );
        let r=n(6966),i=n(95155),o=r._(n(12115)),s=n(82757),a=n(95227),l=n(69818),u=n(6654),c=n(69991),d=n(85929);
        n(43230);
        let h=n(24930),p=n(92664),f=n(6634);
        function m(e) {
            return"string"==typeof e?e:(0,s.formatUrl)(e)
        }
        function v(e) {
            let t,n,r,[s,v]=(0,o.useOptimistic)(h.IDLE_LINK_STATUS),y=(0,o.useRef)(null), {
                href:b,as:x,children:w,prefetch:E=null,passHref:P,replace:T,shallow:S,scroll:k,onClick:A,onMouseEnter:C,onTouchStart:M,legacyBehavior:j=!1,onNavigate:R,ref:D,unstable_dynamicOnHover:O,...V
            }
            =e;
            t=w,j&&("string"==typeof t||"number"==typeof t)&&(t=(0,i.jsx)("a", {
                children:t
            }
            ));
            let L=o.default.useContext(a.AppRouterContext),N=!1!==E,F=null===E?l.PrefetchKind.AUTO:l.PrefetchKind.FULL, {
                href:I,as:B
            }
            =o.default.useMemo(()=> {
                let e=m(b);
                return {
                    href:e,as:x?m(x):e
                }

            }
            ,[b,x]);
            j&&(n=o.default.Children.only(t));
            let W=j?n&&"object"==typeof n&&n.ref:D,U=o.default.useCallback(e=>(null!==L&&(y.current=(0,h.mountLinkInstance)(e,I,L,F,N,v)),()=> {
                y.current&&((0,h.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,h.unmountPrefetchableInstance)(e)
            }
            ),[N,I,L,F,v]),z= {
                ref:(0,u.useMergedRef)(U,W),onClick(e) {
                    j||"function"!=typeof A||A(e),j&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&(e.defaultPrevented||function(e,t,n,r,i,s,a) {
                        let {
                            nodeName:l
                        }
                        =e.currentTarget;
                        if(!("A"===l.toUpperCase()&&function(e) {
                            let t=e.currentTarget.getAttribute("target");
                            return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which
                        }
                        (e)||e.currentTarget.hasAttribute("download"))) {
                            if(!(0,p.isLocalURL)(t)) {
                                i&&(e.preventDefault(),location.replace(t));
                                return
                            }
                            e.preventDefault(),o.default.startTransition(()=> {
                                if(a) {
                                    let e=!1;
                                    if(a( {
                                        preventDefault:()=> {
                                            e=!0
                                        }

                                    }
                                    ),e)return
                                }
                                (0,f.dispatchNavigateAction)(n||t,i?"replace":"push",null==s||s,r.current)
                            }
                            )
                        }

                    }
                    (e,I,B,y,T,k,R))
                }
                ,onMouseEnter(e) {
                    j||"function"!=typeof C||C(e),j&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&N&&(0,h.onNavigationIntent)(e.currentTarget,!0===O)
                }
                ,onTouchStart:function(e) {
                    j||"function"!=typeof M||M(e),j&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&N&&(0,h.onNavigationIntent)(e.currentTarget,!0===O)
                }

            }
            ;
            return(0,c.isAbsoluteUrl)(B)?z.href=B:j&&!P&&("a"!==n.type||"href"in n.props)||(z.href=(0,d.addBasePath)(B)),r=j?o.default.cloneElement(n,z):(0,i.jsx)("a", {
                ...V,...z,children:t
            }
            ),(0,i.jsx)(g.Provider, {
                value:s,children:r
            }
            )
        }
        n(73180);
        let g=(0,o.createContext)(h.IDLE_LINK_STATUS),y=()=>(0,o.useContext)(g);
        ("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule", {
            value:!0
        }
        ),Object.assign(t.default,t),e.exports=t.default)
    }
    ,6983:(e,t,n)=> {
        n.d(t, {
            G:()=>r
        }
        );
        function r(e) {
            return"object"==typeof e&&null!==e
        }

    }
    ,9064:(e,t,n)=> {
        n.d(t, {
            B:()=>u
        }
        );
        var r=n(53678),i=n(57887),o=n(11557),s=n(55920);
        let a=e=>(0,r.q)(0,255,e),l= {
            ...i.ai,transform:e=>Math.round(a(e))
        }
        ,u= {
            test:(0,s.$)("rgb","red"),parse:(0,s.q)("red","green","blue"),transform:( {
                red:e,green:t,blue:n,alpha:r=1
            }
            )=>"rgba("+l.transform(e)+", "+l.transform(t)+", "+l.transform(n)+", "+(0,o.a)(i.X4.transform(r))+")"
        }

    }
    ,11557:(e,t,n)=> {
        n.d(t, {
            a:()=>r
        }
        );
        let r=e=>Math.round(1e5*e)/1e5
    }
    ,15452:(e,t,n)=> {
        n.d(t, {
            UC:()=>en,VY:()=>ei,ZL:()=>ee,bL:()=>Z,bm:()=>eo,hE:()=>er,hJ:()=>et,l9:()=>J
        }
        );
        var r=n(12115),i=n(85185),o=n(6101),s=n(46081),a=n(61285),l=n(5845),u=n(19178),c=n(25519),d=n(34378),h=n(28905),p=n(63655),f=n(92293),m=n(31114),v=n(38168),g=n(99708),y=n(95155),b="Dialog",[x,w]=(0,s.A)(b),[E,P]=x(b),T=e=> {
            let {
                __scopeDialog:t,children:n,open:i,defaultOpen:o,onOpenChange:s,modal:u=!0
            }
            =e,c=r.useRef(null),d=r.useRef(null),[h,p]=(0,l.i)( {
                prop:i,defaultProp:null!=o&&o,onChange:s,caller:b
            }
            );
            return(0,y.jsx)(E, {
                scope:t,triggerRef:c,contentRef:d,contentId:(0,a.B)(),titleId:(0,a.B)(),descriptionId:(0,a.B)(),open:h,onOpenChange:p,onOpenToggle:r.useCallback(()=>p(e=>!e),[p]),modal:u,children:n
            }
            )
        }
        ;
        T.displayName=b;
        var S="DialogTrigger",k=r.forwardRef((e,t)=> {
            let {
                __scopeDialog:n,...r
            }
            =e,s=P(S,n),a=(0,o.s)(t,s.triggerRef);
            return(0,y.jsx)(p.sG.button, {
                type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":q(s.open),...r,ref:a,onClick:(0,i.m)(e.onClick,s.onOpenToggle)
            }
            )
        }
        );
        k.displayName=S;
        var A="DialogPortal",[C,M]=x(A, {
            forceMount:void 0
        }
        ),j=e=> {
            let {
                __scopeDialog:t,forceMount:n,children:i,container:o
            }
            =e,s=P(A,t);
            return(0,y.jsx)(C, {
                scope:t,forceMount:n,children:r.Children.map(i,e=>(0,y.jsx)(h.C, {
                    present:n||s.open,children:(0,y.jsx)(d.Z, {
                        asChild:!0,container:o,children:e
                    }
                    )
                }
                ))
            }
            )
        }
        ;
        j.displayName=A;
        var R="DialogOverlay",D=r.forwardRef((e,t)=> {
            let n=M(R,e.__scopeDialog), {
                forceMount:r=n.forceMount,...i
            }
            =e,o=P(R,e.__scopeDialog);
            return o.modal?(0,y.jsx)(h.C, {
                present:r||o.open,children:(0,y.jsx)(V, {
                    ...i,ref:t
                }
                )
            }
            ):null
        }
        );
        D.displayName=R;
        var O=(0,g.TL)("DialogOverlay.RemoveScroll"),V=r.forwardRef((e,t)=> {
            let {
                __scopeDialog:n,...r
            }
            =e,i=P(R,n);
            return(0,y.jsx)(m.A, {
                as:O,allowPinchZoom:!0,shards:[i.contentRef],children:(0,y.jsx)(p.sG.div, {
                    "data-state":q(i.open),...r,ref:t,style: {
                        pointerEvents:"auto",...r.style
                    }

                }
                )
            }
            )
        }
        ),L="DialogContent",N=r.forwardRef((e,t)=> {
            let n=M(L,e.__scopeDialog), {
                forceMount:r=n.forceMount,...i
            }
            =e,o=P(L,e.__scopeDialog);
            return(0,y.jsx)(h.C, {
                present:r||o.open,children:o.modal?(0,y.jsx)(F, {
                    ...i,ref:t
                }
                ):(0,y.jsx)(I, {
                    ...i,ref:t
                }
                )
            }
            )
        }
        );
        N.displayName=L;
        var F=r.forwardRef((e,t)=> {
            let n=P(L,e.__scopeDialog),s=r.useRef(null),a=(0,o.s)(t,n.contentRef,s);
            return r.useEffect(()=> {
                let e=s.current;
                if(e)return(0,v.Eq)(e)
            }
            ,[]),(0,y.jsx)(B, {
                ...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,i.m)(e.onCloseAutoFocus,e=> {
                    var t;
                    e.preventDefault(),null==(t=n.triggerRef.current)||t.focus()
                }
                ),onPointerDownOutside:(0,i.m)(e.onPointerDownOutside,e=> {
                    let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;
                    (2===t.button||n)&&e.preventDefault()
                }
                ),onFocusOutside:(0,i.m)(e.onFocusOutside,e=>e.preventDefault())
            }
            )
        }
        ),I=r.forwardRef((e,t)=> {
            let n=P(L,e.__scopeDialog),i=r.useRef(!1),o=r.useRef(!1);
            return(0,y.jsx)(B, {
                ...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=> {
                    var r,s;
                    null==(r=e.onCloseAutoFocus)||r.call(e,t),t.defaultPrevented||(i.current||null==(s=n.triggerRef.current)||s.focus(),t.preventDefault()),i.current=!1,o.current=!1
                }
                ,onInteractOutside:t=> {
                    var r,s;
                    null==(r=e.onInteractOutside)||r.call(e,t),t.defaultPrevented||(i.current=!0,"pointerdown"===t.detail.originalEvent.type&&(o.current=!0));
                    let a=t.target;
                    (null==(s=n.triggerRef.current)?void 0:s.contains(a))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()
                }

            }
            )
        }
        ),B=r.forwardRef((e,t)=> {
            let {
                __scopeDialog:n,trapFocus:i,onOpenAutoFocus:s,onCloseAutoFocus:a,...l
            }
            =e,d=P(L,n),h=r.useRef(null),p=(0,o.s)(t,h);
            return(0,f.Oh)(),(0,y.jsxs)(y.Fragment, {
                children:[(0,y.jsx)(c.n, {
                    asChild:!0,loop:!0,trapped:i,onMountAutoFocus:s,onUnmountAutoFocus:a,children:(0,y.jsx)(u.qW, {
                        role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":q(d.open),...l,ref:p,onDismiss:()=>d.onOpenChange(!1)
                    }
                    )
                }
                ),(0,y.jsxs)(y.Fragment, {
                    children:[(0,y.jsx)(Y, {
                        titleId:d.titleId
                    }
                    ),(0,y.jsx)(Q, {
                        contentRef:h,descriptionId:d.descriptionId
                    }
                    )]
                }
                )]
            }
            )
        }
        ),W="DialogTitle",U=r.forwardRef((e,t)=> {
            let {
                __scopeDialog:n,...r
            }
            =e,i=P(W,n);
            return(0,y.jsx)(p.sG.h2, {
                id:i.titleId,...r,ref:t
            }
            )
        }
        );
        U.displayName=W;
        var z="DialogDescription",$=r.forwardRef((e,t)=> {
            let {
                __scopeDialog:n,...r
            }
            =e,i=P(z,n);
            return(0,y.jsx)(p.sG.p, {
                id:i.descriptionId,...r,ref:t
            }
            )
        }
        );
        $.displayName=z;
        var _="DialogClose",G=r.forwardRef((e,t)=> {
            let {
                __scopeDialog:n,...r
            }
            =e,o=P(_,n);
            return(0,y.jsx)(p.sG.button, {
                type:"button",...r,ref:t,onClick:(0,i.m)(e.onClick,()=>o.onOpenChange(!1))
            }
            )
        }
        );
        function q(e) {
            return e?"open":"closed"
        }
        G.displayName=_;
        var K="DialogTitleWarning",[X,H]=(0,s.q)(K, {
            contentName:L,titleName:W,docsSlug:"dialog"
        }
        ),Y=e=> {
            let {
                titleId:t
            }
            =e,n=H(K),i="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);
            return r.useEffect(()=> {
                t&&(document.getElementById(t)||console.error(i))
            }
            ,[i,t]),null
        }
        ,Q=e=> {
            let {
                contentRef:t,descriptionId:n
            }
            =e,i=H("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(i.contentName,"}.");
            return r.useEffect(()=> {
                var e;
                let r=null==(e=t.current)?void 0:e.getAttribute("aria-describedby");
                n&&r&&(document.getElementById(n)||console.warn(o))
            }
            ,[o,t,n]),null
        }
        ,Z=T,J=k,ee=j,et=D,en=N,er=U,ei=$,eo=G
    }
    ,18476:(e,t,n)=> {
        n.d(t, {
            V:()=>a
        }
        );
        var r=n(57887),i=n(34158),o=n(11557),s=n(55920);
        let a= {
            test:(0,s.$)("hsl","hue"),parse:(0,s.q)("hue","saturation","lightness"),transform:( {
                hue:e,saturation:t,lightness:n,alpha:s=1
            }
            )=>"hsla("+Math.round(e)+", "+i.KN.transform((0,o.a)(t))+", "+i.KN.transform((0,o.a)(n))+", "+(0,o.a)(r.X4.transform(s))+")"
        }

    }
    ,19178:(e,t,n)=> {
        n.d(t, {
            qW:()=>h
        }
        );
        var r,i=n(12115),o=n(85185),s=n(63655),a=n(6101),l=n(39033),u=n(95155),c="dismissableLayer.update",d=i.createContext( {
            layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set
        }
        ),h=i.forwardRef((e,t)=> {
            var n,h;
            let {
                disableOutsidePointerEvents:m=!1,onEscapeKeyDown:v,onPointerDownOutside:g,onFocusOutside:y,onInteractOutside:b,onDismiss:x,...w
            }
            =e,E=i.useContext(d),[P,T]=i.useState(null),S=null!=(h=null==P?void 0:P.ownerDocument)?h:null==(n=globalThis)?void 0:n.document,[,k]=i.useState( {

            }
            ),A=(0,a.s)(t,e=>T(e)),C=Array.from(E.layers),[M]=[...E.layersWithOutsidePointerEventsDisabled].slice(-1),j=C.indexOf(M),R=P?C.indexOf(P):-1,D=E.layersWithOutsidePointerEventsDisabled.size>0,O=R>=j,V=function(e) {
                var t;
                let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==(t=globalThis)?void 0:t.document,r=(0,l.c)(e),o=i.useRef(!1),s=i.useRef(()=> {

                }
                );
                return i.useEffect(()=> {
                    let e=e=> {
                        if(e.target&&!o.current) {
                            let t=function() {
                                f("dismissableLayer.pointerDownOutside",r,i, {
                                    discrete:!0
                                }
                                )
                            }
                            ,i= {
                                originalEvent:e
                            }
                            ;
                            "touch"===e.pointerType?(n.removeEventListener("click",s.current),s.current=t,n.addEventListener("click",s.current, {
                                once:!0
                            }
                            )):t()
                        }
                        else n.removeEventListener("click",s.current);
                        o.current=!1
                    }
                    ,t=window.setTimeout(()=> {
                        n.addEventListener("pointerdown",e)
                    }
                    ,0);
                    return()=> {
                        window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",s.current)
                    }

                }
                ,[n,r]), {
                    onPointerDownCapture:()=>o.current=!0
                }

            }
            (e=> {
                let t=e.target,n=[...E.branches].some(e=>e.contains(t));
                O&&!n&&(null==g||g(e),null==b||b(e),e.defaultPrevented||null==x||x())
            }
            ,S),L=function(e) {
                var t;
                let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==(t=globalThis)?void 0:t.document,r=(0,l.c)(e),o=i.useRef(!1);
                return i.useEffect(()=> {
                    let e=e=> {
                        e.target&&!o.current&&f("dismissableLayer.focusOutside",r, {
                            originalEvent:e
                        }
                        , {
                            discrete:!1
                        }
                        )
                    }
                    ;
                    return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)
                }
                ,[n,r]), {
                    onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1
                }

            }
            (e=> {
                let t=e.target;
                ![...E.branches].some(e=>e.contains(t))&&(null==y||y(e),null==b||b(e),e.defaultPrevented||null==x||x())
            }
            ,S);
            return!function(e,t=globalThis?.document) {
                let n=(0,l.c)(e);
                i.useEffect(()=> {
                    let e=e=> {
                        "Escape"===e.key&&n(e)
                    }
                    ;
                    return t.addEventListener("keydown",e, {
                        capture:!0
                    }
                    ),()=>t.removeEventListener("keydown",e, {
                        capture:!0
                    }
                    )
                }
                ,[n,t])
            }
            (e=> {
                R===E.layers.size-1&&(null==v||v(e),!e.defaultPrevented&&x&&(e.preventDefault(),x()))
            }
            ,S),i.useEffect(()=> {
                if(P)return m&&(0===E.layersWithOutsidePointerEventsDisabled.size&&(r=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),E.layersWithOutsidePointerEventsDisabled.add(P)),E.layers.add(P),p(),()=> {
                    m&&1===E.layersWithOutsidePointerEventsDisabled.size&&(S.body.style.pointerEvents=r)
                }

            }
            ,[P,S,m,E]),i.useEffect(()=>()=> {
                P&&(E.layers.delete(P),E.layersWithOutsidePointerEventsDisabled.delete(P),p())
            }
            ,[P,E]),i.useEffect(()=> {
                let e=()=>k( {

                }
                );
                return document.addEventListener(c,e),()=>document.removeEventListener(c,e)
            }
            ,[]),(0,u.jsx)(s.sG.div, {
                ...w,ref:A,style: {
                    pointerEvents:D?O?"auto":"none":void 0,...e.style
                }
                ,onFocusCapture:(0,o.m)(e.onFocusCapture,L.onFocusCapture),onBlurCapture:(0,o.m)(e.onBlurCapture,L.onBlurCapture),onPointerDownCapture:(0,o.m)(e.onPointerDownCapture,V.onPointerDownCapture)
            }
            )
        }
        );
        function p() {
            let e=new CustomEvent(c);
            document.dispatchEvent(e)
        }
        function f(e,t,n,r) {
            let {
                discrete:i
            }
            =r,o=n.originalEvent.target,a=new CustomEvent(e, {
                bubbles:!1,cancelable:!0,detail:n
            }
            );
            t&&o.addEventListener(e,t, {
                once:!0
            }
            ),i?(0,s.hO)(o,a):o.dispatchEvent(a)
        }
        h.displayName="DismissableLayer",i.forwardRef((e,t)=> {
            let n=i.useContext(d),r=i.useRef(null),o=(0,a.s)(t,r);
            return i.useEffect(()=> {
                let e=r.current;
                if(e)return n.branches.add(e),()=> {
                    n.branches.delete(e)
                }

            }
            ,[n.branches]),(0,u.jsx)(s.sG.div, {
                ...e,ref:o
            }
            )
        }
        ).displayName="DismissableLayerBranch"
    }
    ,19827:(e,t,n)=> {
        n.d(t, {
            l:()=>r
        }
        );
        let r=e=>e
    }
    ,19946:(e,t,n)=> {
        n.d(t, {
            A:()=>l
        }
        );
        var r=n(12115);
        let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function() {
            for(var e=arguments.length,t=Array(e),n=0;
            n<e;
            n++)t[n]=arguments[n];
            return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()
        }
        ;
        var s= {
            xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"
        }
        ;
        let a=(0,r.forwardRef)((e,t)=> {
            let {
                color:n="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:u="",children:c,iconNode:d,...h
            }
            =e;
            return(0,r.createElement)("svg", {
                ref:t,...s,width:i,height:i,stroke:n,strokeWidth:l?24*Number(a)/Number(i):a,className:o("lucide",u),...h
            }
            ,[...d.map(e=> {
                let[t,n]=e;
                return(0,r.createElement)(t,n)
            }
            ),...Array.isArray(c)?c:[c]])
        }
        ),l=(e,t)=> {
            let n=(0,r.forwardRef)((n,s)=> {
                let {
                    className:l,...u
                }
                =n;
                return(0,r.createElement)(a, {
                    ref:s,iconNode:t,className:o("lucide-".concat(i(e)),l),...u
                }
                )
            }
            );
            return n.displayName="".concat(e),n
        }

    }
    ,23387:(e,t,n)=> {
        n.d(t, {
            W:()=>r
        }
        );
        let r= {

        }

    }
    ,24744:(e,t,n)=> {
        n.d(t, {
            Q:()=>r
        }
        );
        let r= {
            value:null,addProjectionMetrics:null
        }

    }
    ,25519:(e,t,n)=> {
        n.d(t, {
            n:()=>d
        }
        );
        var r=n(12115),i=n(6101),o=n(63655),s=n(39033),a=n(95155),l="focusScope.autoFocusOnMount",u="focusScope.autoFocusOnUnmount",c= {
            bubbles:!1,cancelable:!0
        }
        ,d=r.forwardRef((e,t)=> {
            let {
                loop:n=!1,trapped:d=!1,onMountAutoFocus:v,onUnmountAutoFocus:g,...y
            }
            =e,[b,x]=r.useState(null),w=(0,s.c)(v),E=(0,s.c)(g),P=r.useRef(null),T=(0,i.s)(t,e=>x(e)),S=r.useRef( {
                paused:!1,pause() {
                    this.paused=!0
                }
                ,resume() {
                    this.paused=!1
                }

            }
            ).current;
            r.useEffect(()=> {
                if(d) {
                    let e=function(e) {
                        if(S.paused||!b)return;
                        let t=e.target;
                        b.contains(t)?P.current=t:f(P.current, {
                            select:!0
                        }
                        )
                    }
                    ,t=function(e) {
                        if(S.paused||!b)return;
                        let t=e.relatedTarget;
                        null!==t&&(b.contains(t)||f(P.current, {
                            select:!0
                        }
                        ))
                    }
                    ;
                    document.addEventListener("focusin",e),document.addEventListener("focusout",t);
                    let n=new MutationObserver(function(e) {
                        if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&f(b)
                    }
                    );
                    return b&&n.observe(b, {
                        childList:!0,subtree:!0
                    }
                    ),()=> {
                        document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()
                    }

                }

            }
            ,[d,b,S.paused]),r.useEffect(()=> {
                if(b) {
                    m.add(S);
                    let e=document.activeElement;
                    if(!b.contains(e)) {
                        let t=new CustomEvent(l,c);
                        b.addEventListener(l,w),b.dispatchEvent(t),t.defaultPrevented||(function(e) {
                            let {
                                select:t=!1
                            }
                            =arguments.length>1&&void 0!==arguments[1]?arguments[1]: {

                            }
                            ,n=document.activeElement;
                            for(let r of e)if(f(r, {
                                select:t
                            }
                            ),document.activeElement!==n)return
                        }
                        (h(b).filter(e=>"A"!==e.tagName), {
                            select:!0
                        }
                        ),document.activeElement===e&&f(b))
                    }
                    return()=> {
                        b.removeEventListener(l,w),setTimeout(()=> {
                            let t=new CustomEvent(u,c);
                            b.addEventListener(u,E),b.dispatchEvent(t),t.defaultPrevented||f(null!=e?e:document.body, {
                                select:!0
                            }
                            ),b.removeEventListener(u,E),m.remove(S)
                        }
                        ,0)
                    }

                }

            }
            ,[b,w,E,S]);
            let k=r.useCallback(e=> {
                if(!n&&!d||S.paused)return;
                let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;
                if(t&&r) {
                    let t=e.currentTarget,[i,o]=function(e) {
                        let t=h(e);
                        return[p(t,e),p(t.reverse(),e)]
                    }
                    (t);
                    i&&o?e.shiftKey||r!==o?e.shiftKey&&r===i&&(e.preventDefault(),n&&f(o, {
                        select:!0
                    }
                    )):(e.preventDefault(),n&&f(i, {
                        select:!0
                    }
                    )):r===t&&e.preventDefault()
                }

            }
            ,[n,d,S.paused]);
            return(0,a.jsx)(o.sG.div, {
                tabIndex:-1,...y,ref:T,onKeyDown:k
            }
            )
        }
        );
        function h(e) {
            let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT, {
                acceptNode:e=> {
                    let t="INPUT"===e.tagName&&"hidden"===e.type;
                    return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP
                }

            }
            );
            for(;
            n.nextNode();
            )t.push(n.currentNode);
            return t
        }
        function p(e,t) {
            for(let n of e)if(!function(e,t) {
                let {
                    upTo:n
                }
                =t;
                if("hidden"===getComputedStyle(e).visibility)return!0;
                for(;
                e&&(void 0===n||e!==n);
                ) {
                    if("none"===getComputedStyle(e).display)return!0;
                    e=e.parentElement
                }
                return!1
            }
            (n, {
                upTo:t
            }
            ))return n
        }
        function f(e) {
            let {
                select:t=!1
            }
            =arguments.length>1&&void 0!==arguments[1]?arguments[1]: {

            }
            ;
            if(e&&e.focus) {
                var n;
                let r=document.activeElement;
                e.focus( {
                    preventScroll:!0
                }
                ),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()
            }

        }
        d.displayName="FocusScope";
        var m=function() {
            let e=[];
            return {
                add(t) {
                    let n=e[0];
                    t!==n&&(null==n||n.pause()),(e=v(e,t)).unshift(t)
                }
                ,remove(t) {
                    var n;
                    null==(n=(e=v(e,t))[0])||n.resume()
                }

            }

        }
        ();
        function v(e,t) {
            let n=[...e],r=n.indexOf(t);
            return -1!==r&&n.splice(r,1),n
        }

    }
    ,26087:(e,t,n)=> {
        n.d(t, {
            j:()=>S
        }
        );
        var r=n(53191),i=n(54542),o=n(78606),s=n(4272),a=n(60010),l=n(1335),u=n(18476);
        function c(e,t,n) {
            return(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e
        }
        var d=n(9064);
        function h(e,t) {
            return n=>n>0?t:e
        }
        var p=n(33210);
        let f=(e,t,n)=> {
            let r=e*e,i=n*(t*t-r)+r;
            return i<0?0:Math.sqrt(i)
        }
        ,m=[l.u,d.B,u.V],v=e=>m.find(t=>t.test(e));
        function g(e) {
            let t=v(e);
            if((0,i.$)(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`),!t)return!1;
            let n=t.parse(e);
            return t===u.V&&(n=function( {
                hue:e,saturation:t,lightness:n,alpha:r
            }
            ) {
                e/=360,n/=100;
                let i=0,o=0,s=0;
                if(t/=100) {
                    let r=n<.5?n*(1+t):n+t-n*t,a=2*n-r;
                    i=c(a,r,e+1/3),o=c(a,r,e),s=c(a,r,e-1/3)
                }
                else i=o=s=n;
                return {
                    red:Math.round(255*i),green:Math.round(255*o),blue:Math.round(255*s),alpha:r
                }

            }
            (n)),n
        }
        let y=(e,t)=> {
            let n=g(e),r=g(t);
            if(!n||!r)return h(e,t);
            let i= {
                ...n
            }
            ;
            return e=>(i.red=f(n.red,r.red,e),i.green=f(n.green,r.green,e),i.blue=f(n.blue,r.blue,e),i.alpha=(0,p.k)(n.alpha,r.alpha,e),d.B.transform(i))
        }
        ,b=new Set(["none","hidden"]);
        function x(e,t) {
            return n=>(0,p.k)(e,t,n)
        }
        function w(e) {
            return"number"==typeof e?x:"string"==typeof e?(0,o.p)(e)?h:s.y.test(e)?y:T:Array.isArray(e)?E:"object"==typeof e?s.y.test(e)?y:P:h
        }
        function E(e,t) {
            let n=[...e],r=n.length,i=e.map((e,n)=>w(e)(e,t[n]));
            return e=> {
                for(let t=0;
                t<r;
                t++)n[t]=i[t](e);
                return n
            }

        }
        function P(e,t) {
            let n= {
                ...e,...t
            }
            ,r= {

            }
            ;
            for(let i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=w(e[i])(e[i],t[i]));
            return e=> {
                for(let t in r)n[t]=r[t](e);
                return n
            }

        }
        let T=(e,t)=> {
            let n=a.f.createTransformer(t),o=(0,a.V)(e),s=(0,a.V)(t);
            return o.indexes.var.length===s.indexes.var.length&&o.indexes.color.length===s.indexes.color.length&&o.indexes.number.length>=s.indexes.number.length?b.has(e)&&!s.values.length||b.has(t)&&!o.values.length?function(e,t) {
                return b.has(e)?n=>n<=0?e:t:n=>n>=1?t:e
            }
            (e,t):(0,r.F)(E(function(e,t) {
                let n=[],r= {
                    color:0,var:0,number:0
                }
                ;
                for(let i=0;
                i<t.values.length;
                i++) {
                    let o=t.types[i],s=e.indexes[o][r[o]],a=e.values[s]??0;
                    n[i]=a,r[o]++
                }
                return n
            }
            (o,s),s.values),n):((0,i.$)(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),h(e,t))
        }
        ;
        function S(e,t,n) {
            return"number"==typeof e&&"number"==typeof t&&"number"==typeof n?(0,p.k)(e,t,n):w(e)(e,t)
        }

    }
    ,27351:(e,t,n)=> {
        n.d(t, {
            s:()=>i
        }
        );
        var r=n(6983);
        function i(e) {
            return(0,r.G)(e)&&"offsetHeight"in e
        }

    }
    ,28905:(e,t,n)=> {
        n.d(t, {
            C:()=>s
        }
        );
        var r=n(12115),i=n(6101),o=n(52712),s=e=> {
            let {
                present:t,children:n
            }
            =e,s=function(e) {
                var t,n;
                let[i,s]=r.useState(),l=r.useRef(null),u=r.useRef(e),c=r.useRef("none"),[d,h]=(t=e?"mounted":"unmounted",n= {
                    mounted: {
                        UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"
                    }
                    ,unmountSuspended: {
                        MOUNT:"mounted",ANIMATION_END:"unmounted"
                    }
                    ,unmounted: {
                        MOUNT:"mounted"
                    }

                }
                ,r.useReducer((e,t)=> {
                    let r=n[e][t];
                    return null!=r?r:e
                }
                ,t));
                return r.useEffect(()=> {
                    let e=a(l.current);
                    c.current="mounted"===d?e:"none"
                }
                ,[d]),(0,o.N)(()=> {
                    let t=l.current,n=u.current;
                    if(n!==e) {
                        let r=c.current,i=a(t);
                        e?h("MOUNT"):"none"===i||(null==t?void 0:t.display)==="none"?h("UNMOUNT"):n&&r!==i?h("ANIMATION_OUT"):h("UNMOUNT"),u.current=e
                    }

                }
                ,[e,h]),(0,o.N)(()=> {
                    if(i) {
                        var e;
                        let t,n=null!=(e=i.ownerDocument.defaultView)?e:window,r=e=> {
                            let r=a(l.current).includes(e.animationName);
                            if(e.target===i&&r&&(h("ANIMATION_END"),!u.current)) {
                                let e=i.style.animationFillMode;
                                i.style.animationFillMode="forwards",t=n.setTimeout(()=> {
                                    "forwards"===i.style.animationFillMode&&(i.style.animationFillMode=e)
                                }
                                )
                            }

                        }
                        ,o=e=> {
                            e.target===i&&(c.current=a(l.current))
                        }
                        ;
                        return i.addEventListener("animationstart",o),i.addEventListener("animationcancel",r),i.addEventListener("animationend",r),()=> {
                            n.clearTimeout(t),i.removeEventListener("animationstart",o),i.removeEventListener("animationcancel",r),i.removeEventListener("animationend",r)
                        }

                    }
                    h("ANIMATION_END")
                }
                ,[i,h]), {
                    isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=> {
                        l.current=e?getComputedStyle(e):null,s(e)
                    }
                    ,[])
                }

            }
            (t),l="function"==typeof n?n( {
                present:s.isPresent
            }
            ):r.Children.only(n),u=(0,i.s)(s.ref,function(e) {
                var t,n;
                let r=null==(t=Object.getOwnPropertyDescriptor(e.props,"ref"))?void 0:t.get,i=r&&"isReactWarning"in r&&r.isReactWarning;
                return i?e.ref:(i=(r=null==(n=Object.getOwnPropertyDescriptor(e,"ref"))?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref
            }
            (l));
            return"function"==typeof n||s.isPresent?r.cloneElement(l, {
                ref:u
            }
            ):null
        }
        ;
        function a(e) {
            return(null==e?void 0:e.animationName)||"none"
        }
        s.displayName="Presence"
    }
    ,29621:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("Code",[["polyline", {
            points:"16 18 22 12 16 6",key:"z7tu5w"
        }
        ],["polyline", {
            points:"8 6 2 12 8 18",key:"1eg1df"
        }
        ]])
    }
    ,30614:(e,t,n)=> {
        n.d(t, {
            S:()=>r
        }
        );
        let r=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu
    }
    ,31114:(e,t,n)=> {
        n.d(t, {
            A:()=>G
        }
        );
        var r,i,o=n(39249),s=n(12115),a="right-scroll-bar-position",l="width-before-scroll-bar";
        function u(e,t) {
            return"function"==typeof e?e(t):e&&(e.current=t),e
        }
        var c="undefined"!=typeof window?s.useLayoutEffect:s.useEffect,d=new WeakMap;
        function h(e) {
            return e
        }
        var p=function(e) {
            void 0===e&&(e= {

            }
            );
            var t,n,r,i,s=(t=null,void 0===n&&(n=h),r=[],i=!1, {
                read:function() {
                    if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                    return r.length?r[r.length-1]:null
                }
                ,useMedium:function(e) {
                    var t=n(e,i);
                    return r.push(t),function() {
                        r=r.filter(function(e) {
                            return e!==t
                        }
                        )
                    }

                }
                ,assignSyncMedium:function(e) {
                    for(i=!0;
                    r.length;
                    ) {
                        var t=r;
                        r=[],t.forEach(e)
                    }
                    r= {
                        push:function(t) {
                            return e(t)
                        }
                        ,filter:function() {
                            return r
                        }

                    }

                }
                ,assignMedium:function(e) {
                    i=!0;
                    var t=[];
                    if(r.length) {
                        var n=r;
                        r=[],n.forEach(e),t=r
                    }
                    var o=function() {
                        var n=t;
                        t=[],n.forEach(e)
                    }
                    ,s=function() {
                        return Promise.resolve().then(o)
                    }
                    ;
                    s(),r= {
                        push:function(e) {
                            t.push(e),s()
                        }
                        ,filter:function(e) {
                            return t=t.filter(e),r
                        }

                    }

                }

            }
            );
            return s.options=(0,o.Cl)( {
                async:!0,ssr:!1
            }
            ,e),s
        }
        (),f=function() {

        }
        ,m=s.forwardRef(function(e,t) {
            var n,r,i,a,l=s.useRef(null),h=s.useState( {
                onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:f
            }
            ),m=h[0],v=h[1],g=e.forwardProps,y=e.children,b=e.className,x=e.removeScrollBar,w=e.enabled,E=e.shards,P=e.sideCar,T=e.noRelative,S=e.noIsolation,k=e.inert,A=e.allowPinchZoom,C=e.as,M=e.gapMode,j=(0,o.Tt)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),R=(n=[l,t],r=function(e) {
                return n.forEach(function(t) {
                    return u(t,e)
                }
                )
            }
            ,(i=(0,s.useState)(function() {
                return {
                    value:null,callback:r,facade: {
                        get current() {
                            return i.value
                        }
                        ,set current(value) {
                            var e=i.value;
                            e!==value&&(i.value=value,i.callback(value,e))
                        }

                    }

                }

            }
            )[0]).callback=r,a=i.facade,c(function() {
                var e=d.get(a);
                if(e) {
                    var t=new Set(e),r=new Set(n),i=a.current;
                    t.forEach(function(e) {
                        r.has(e)||u(e,null)
                    }
                    ),r.forEach(function(e) {
                        t.has(e)||u(e,i)
                    }
                    )
                }
                d.set(a,n)
            }
            ,[n]),a),D=(0,o.Cl)((0,o.Cl)( {

            }
            ,j),m);
            return s.createElement(s.Fragment,null,w&&s.createElement(P, {
                sideCar:p,removeScrollBar:x,shards:E,noRelative:T,noIsolation:S,inert:k,setCallbacks:v,allowPinchZoom:!!A,lockRef:l,gapMode:M
            }
            ),g?s.cloneElement(s.Children.only(y),(0,o.Cl)((0,o.Cl)( {

            }
            ,D), {
                ref:R
            }
            )):s.createElement(void 0===C?"div":C,(0,o.Cl)( {

            }
            ,D, {
                className:b,ref:R
            }
            ),y))
        }
        );
        m.defaultProps= {
            enabled:!0,removeScrollBar:!0,inert:!1
        }
        ,m.classNames= {
            fullWidth:l,zeroRight:a
        }
        ;
        var v=function(e) {
            var t=e.sideCar,n=(0,o.Tt)(e,["sideCar"]);
            if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");
            var r=t.read();
            if(!r)throw Error("Sidecar medium not found");
            return s.createElement(r,(0,o.Cl)( {

            }
            ,n))
        }
        ;
        v.isSideCarExport=!0;
        var g=function() {
            var e=0,t=null;
            return {
                add:function(r) {
                    if(0==e&&(t=function() {
                        if(!document)return null;
                        var e=document.createElement("style");
                        e.type="text/css";
                        var t=i||n.nc;
                        return t&&e.setAttribute("nonce",t),e
                    }
                    ())) {
                        var o,s;
                        (o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),s=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(s)
                    }
                    e++
                }
                ,remove:function() {
                    --e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)
                }

            }

        }
        ,y=function() {
            var e=g();
            return function(t,n) {
                s.useEffect(function() {
                    return e.add(t),function() {
                        e.remove()
                    }

                }
                ,[t&&n])
            }

        }
        ,b=function() {
            var e=y();
            return function(t) {
                return e(t.styles,t.dynamic),null
            }

        }
        ,x= {
            left:0,top:0,right:0,gap:0
        }
        ,w=function(e) {
            return parseInt(e||"",10)||0
        }
        ,E=function(e) {
            var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],i=t["padding"===e?"paddingRight":"marginRight"];
            return[w(n),w(r),w(i)]
        }
        ,P=function(e) {
            if(void 0===e&&(e="margin"),"undefined"==typeof window)return x;
            var t=E(e),n=document.documentElement.clientWidth,r=window.innerWidth;
            return {
                left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])
            }

        }
        ,T=b(),S="data-scroll-locked",k=function(e,t,n,r) {
            var i=e.left,o=e.top,s=e.right,u=e.gap;
            return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(S,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(i,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(s,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(a," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(l," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(a," .").concat(a," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(l," .").concat(l," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(S,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")
        }
        ,A=function() {
            var e=parseInt(document.body.getAttribute(S)||"0",10);
            return isFinite(e)?e:0
        }
        ,C=function() {
            s.useEffect(function() {
                return document.body.setAttribute(S,(A()+1).toString()),function() {
                    var e=A()-1;
                    e<=0?document.body.removeAttribute(S):document.body.setAttribute(S,e.toString())
                }

            }
            ,[])
        }
        ,M=function(e) {
            var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=void 0===r?"margin":r;
            C();
            var o=s.useMemo(function() {
                return P(i)
            }
            ,[i]);
            return s.createElement(T, {
                styles:k(o,!t,i,n?"":"!important")
            }
            )
        }
        ,j=!1;
        if("undefined"!=typeof window)try {
            var R=Object.defineProperty( {

            }
            ,"passive", {
                get:function() {
                    return j=!0,!0
                }

            }
            );
            window.addEventListener("test",R,R),window.removeEventListener("test",R,R)
        }
        catch(e) {
            j=!1
        }
        var D=!!j&& {
            passive:!1
        }
        ,O=function(e,t) {
            if(!(e instanceof Element))return!1;
            var n=window.getComputedStyle(e);
            return"hidden"!==n[t]&&(n.overflowY!==n.overflowX||"TEXTAREA"===e.tagName||"visible"!==n[t])
        }
        ,V=function(e,t) {
            var n=t.ownerDocument,r=t;
            do {
                if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),L(e,r)) {
                    var i=N(e,r);
                    if(i[1]>i[2])return!0
                }
                r=r.parentNode
            }
            while(r&&r!==n.body);
            return!1
        }
        ,L=function(e,t) {
            return"v"===e?O(t,"overflowY"):O(t,"overflowX")
        }
        ,N=function(e,t) {
            return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]
        }
        ,F=function(e,t,n,r,i) {
            var o,s=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),a=s*r,l=n.target,u=t.contains(l),c=!1,d=a>0,h=0,p=0;
            do {
                if(!l)break;
                var f=N(e,l),m=f[0],v=f[1]-f[2]-s*m;
                (m||v)&&L(e,l)&&(h+=v,p+=m);
                var g=l.parentNode;
                l=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g
            }
            while(!u&&l!==document.body||u&&(t.contains(l)||t===l));
            return d&&(i&&1>Math.abs(h)||!i&&a>h)?c=!0:!d&&(i&&1>Math.abs(p)||!i&&-a>p)&&(c=!0),c
        }
        ,I=function(e) {
            return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]
        }
        ,B=function(e) {
            return[e.deltaX,e.deltaY]
        }
        ,W=function(e) {
            return e&&"current"in e?e.current:e
        }
        ,U=0,z=[];
        let $=(r=function(e) {
            var t=s.useRef([]),n=s.useRef([0,0]),r=s.useRef(),i=s.useState(U++)[0],a=s.useState(b)[0],l=s.useRef(e);
            s.useEffect(function() {
                l.current=e
            }
            ,[e]),s.useEffect(function() {
                if(e.inert) {
                    document.body.classList.add("block-interactivity-".concat(i));
                    var t=(0,o.fX)([e.lockRef.current],(e.shards||[]).map(W),!0).filter(Boolean);
                    return t.forEach(function(e) {
                        return e.classList.add("allow-interactivity-".concat(i))
                    }
                    ),function() {
                        document.body.classList.remove("block-interactivity-".concat(i)),t.forEach(function(e) {
                            return e.classList.remove("allow-interactivity-".concat(i))
                        }
                        )
                    }

                }

            }
            ,[e.inert,e.lockRef.current,e.shards]);
            var u=s.useCallback(function(e,t) {
                if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!l.current.allowPinchZoom;
                var i,o=I(e),s=n.current,a="deltaX"in e?e.deltaX:s[0]-o[0],u="deltaY"in e?e.deltaY:s[1]-o[1],c=e.target,d=Math.abs(a)>Math.abs(u)?"h":"v";
                if("touches"in e&&"h"===d&&"range"===c.type)return!1;
                var h=V(d,c);
                if(!h)return!0;
                if(h?i=d:(i="v"===d?"h":"v",h=V(d,c)),!h)return!1;
                if(!r.current&&"changedTouches"in e&&(a||u)&&(r.current=i),!i)return!0;
                var p=r.current||i;
                return F(p,t,e,"h"===p?a:u,!0)
            }
            ,[]),c=s.useCallback(function(e) {
                if(z.length&&z[z.length-1]===a) {
                    var n="deltaY"in e?B(e):I(e),r=t.current.filter(function(t) {
                        var r;
                        return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta,r[0]===n[0]&&r[1]===n[1])
                    }
                    )[0];
                    if(r&&r.should) {
                        e.cancelable&&e.preventDefault();
                        return
                    }
                    if(!r) {
                        var i=(l.current.shards||[]).map(W).filter(Boolean).filter(function(t) {
                            return t.contains(e.target)
                        }
                        );
                        (i.length>0?u(e,i[0]):!l.current.noIsolation)&&e.cancelable&&e.preventDefault()
                    }

                }

            }
            ,[]),d=s.useCallback(function(e,n,r,i) {
                var o= {
                    name:e,delta:n,target:r,should:i,shadowParent:function(e) {
                        for(var t=null;
                        null!==e;
                        )e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;
                        return t
                    }
                    (r)
                }
                ;
                t.current.push(o),setTimeout(function() {
                    t.current=t.current.filter(function(e) {
                        return e!==o
                    }
                    )
                }
                ,1)
            }
            ,[]),h=s.useCallback(function(e) {
                n.current=I(e),r.current=void 0
            }
            ,[]),p=s.useCallback(function(t) {
                d(t.type,B(t),t.target,u(t,e.lockRef.current))
            }
            ,[]),f=s.useCallback(function(t) {
                d(t.type,I(t),t.target,u(t,e.lockRef.current))
            }
            ,[]);
            s.useEffect(function() {
                return z.push(a),e.setCallbacks( {
                    onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:f
                }
                ),document.addEventListener("wheel",c,D),document.addEventListener("touchmove",c,D),document.addEventListener("touchstart",h,D),function() {
                    z=z.filter(function(e) {
                        return e!==a
                    }
                    ),document.removeEventListener("wheel",c,D),document.removeEventListener("touchmove",c,D),document.removeEventListener("touchstart",h,D)
                }

            }
            ,[]);
            var m=e.removeScrollBar,v=e.inert;
            return s.createElement(s.Fragment,null,v?s.createElement(a, {
                styles:"\n  .block-interactivity-".concat(i," {pointer-events: none;}\n  .allow-interactivity-").concat(i," {pointer-events: all;}\n")
            }
            ):null,m?s.createElement(M, {
                noRelative:e.noRelative,gapMode:e.gapMode
            }
            ):null)
        }
        ,p.useMedium(r),v);
        var _=s.forwardRef(function(e,t) {
            return s.createElement(m,(0,o.Cl)( {

            }
            ,e, {
                ref:t,sideCar:$
            }
            ))
        }
        );
        _.classNames=m.classNames;
        let G=_
    }
    ,32082:(e,t,n)=> {
        n.d(t, {
            xQ:()=>o
        }
        );
        var r=n(12115),i=n(80845);
        function o(e=!0) {
            let t=(0,r.useContext)(i.t);
            if(null===t)return[!0,null];
            let {
                isPresent:n,onExitComplete:s,register:a
            }
            =t,l=(0,r.useId)();
            (0,r.useEffect)(()=> {
                if(e)return a(l)
            }
            ,[e]);
            let u=(0,r.useCallback)(()=>e&&s&&s(l),[l,s,e]);
            return!n&&s?[!1,u]:[!0]
        }

    }
    ,33210:(e,t,n)=> {
        n.d(t, {
            k:()=>r
        }
        );
        let r=(e,t,n)=>e+(t-e)*n
    }
    ,34158:(e,t,n)=> {
        n.d(t, {
            KN:()=>o,gQ:()=>u,px:()=>s,uj:()=>i,vh:()=>a,vw:()=>l
        }
        );
        let r=e=>( {
            test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`$ {
                t
            }
            $ {
                e
            }
            `
        }
        ),i=r("deg"),o=r("%"),s=r("px"),a=r("vh"),l=r("vw"),u= {
            ...o,parse:e=>o.parse(e)/100,transform:e=>o.transform(100*e)
        }

    }
    ,34378:(e,t,n)=> {
        n.d(t, {
            Z:()=>l
        }
        );
        var r=n(12115),i=n(47650),o=n(63655),s=n(52712),a=n(95155),l=r.forwardRef((e,t)=> {
            var n,l;
            let {
                container:u,...c
            }
            =e,[d,h]=r.useState(!1);
            (0,s.N)(()=>h(!0),[]);
            let p=u||d&&(null==(l=globalThis)||null==(n=l.document)?void 0:n.body);
            return p?i.createPortal((0,a.jsx)(o.sG.div, {
                ...c,ref:t
            }
            ),p):null
        }
        );
        l.displayName="Portal"
    }
    ,35695:(e,t,n)=> {
        var r=n(18999);
        n.o(r,"usePathname")&&n.d(t, {
            usePathname:function() {
                return r.usePathname
            }

        }
        ),n.o(r,"useRouter")&&n.d(t, {
            useRouter:function() {
                return r.useRouter
            }

        }
        )
    }
    ,38168:(e,t,n)=> {
        n.d(t, {
            Eq:()=>c
        }
        );
        var r=function(e) {
            return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body
        }
        ,i=new WeakMap,o=new WeakMap,s= {

        }
        ,a=0,l=function(e) {
            return e&&(e.host||l(e.parentNode))
        }
        ,u=function(e,t,n,r) {
            var u=(Array.isArray(e)?e:[e]).map(function(e) {
                if(t.contains(e))return e;
                var n=l(e);
                return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)
            }
            ).filter(function(e) {
                return!!e
            }
            );
            s[n]||(s[n]=new WeakMap);
            var c=s[n],d=[],h=new Set,p=new Set(u),f=function(e) {
                !e||h.has(e)||(h.add(e),f(e.parentNode))
            }
            ;
            u.forEach(f);
            var m=function(e) {
                !e||p.has(e)||Array.prototype.forEach.call(e.children,function(e) {
                    if(h.has(e))m(e);
                    else try {
                        var t=e.getAttribute(r),s=null!==t&&"false"!==t,a=(i.get(e)||0)+1,l=(c.get(e)||0)+1;
                        i.set(e,a),c.set(e,l),d.push(e),1===a&&s&&o.set(e,!0),1===l&&e.setAttribute(n,"true"),s||e.setAttribute(r,"true")
                    }
                    catch(t) {
                        console.error("aria-hidden: cannot operate on ",e,t)
                    }

                }
                )
            }
            ;
            return m(t),h.clear(),a++,function() {
                d.forEach(function(e) {
                    var t=i.get(e)-1,s=c.get(e)-1;
                    i.set(e,t),c.set(e,s),t||(o.has(e)||e.removeAttribute(r),o.delete(e)),s||e.removeAttribute(n)
                }
                ),--a||(i=new WeakMap,i=new WeakMap,o=new WeakMap,s= {

                }
                )
            }

        }
        ,c=function(e,t,n) {
            void 0===n&&(n="data-aria-hidden");
            var i=Array.from(Array.isArray(e)?e:[e]),o=t||r(e);
            return o?(i.push.apply(i,Array.from(o.querySelectorAll("[aria-live], script"))),u(i,o,n,"aria-hidden")):function() {
                return null
            }

        }

    }
    ,39033:(e,t,n)=> {
        n.d(t, {
            c:()=>i
        }
        );
        var r=n(12115);
        function i(e) {
            let t=r.useRef(e);
            return r.useEffect(()=> {
                t.current=e
            }
            ),r.useMemo(()=>(...e)=>t.current?.(...e),[])
        }

    }
    ,39249:(e,t,n)=> {
        n.d(t, {
            Cl:()=>r,Tt:()=>i,fX:()=>s,sH:()=>o
        }
        );
        var r=function() {
            return(r=Object.assign||function(e) {
                for(var t,n=1,r=arguments.length;
                n<r;
                n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);
                return e
            }
            ).apply(this,arguments)
        }
        ;
        function i(e,t) {
            var n= {

            }
            ;
            for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);
            if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);
            i<r.length;
            i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);
            return n
        }
        function o(e,t,n,r) {
            return new(n||(n=Promise))(function(i,o) {
                function s(e) {
                    try {
                        l(r.next(e))
                    }
                    catch(e) {
                        o(e)
                    }

                }
                function a(e) {
                    try {
                        l(r.throw(e))
                    }
                    catch(e) {
                        o(e)
                    }

                }
                function l(e) {
                    var t;
                    e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e) {
                        e(t)
                    }
                    )).then(s,a)
                }
                l((r=r.apply(e,t||[])).next())
            }
            )
        }
        Object.create;
        function s(e,t,n) {
            if(n||2==arguments.length)for(var r,i=0,o=t.length;
            i<o;
            i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);
            return e.concat(r||Array.prototype.slice.call(t))
        }
        Object.create,"function"==typeof SuppressedError&&SuppressedError
    }
    ,39688:(e,t,n)=> {
        n.d(t, {
            QP:()=>H
        }
        );
        let r=e=> {
            let t=a(e), {
                conflictingClassGroups:n,conflictingClassGroupModifiers:r
            }
            =e;
            return {
                getClassGroupId:e=> {
                    let n=e.split("-");
                    return""===n[0]&&1!==n.length&&n.shift(),i(n,t)||s(e)
                }
                ,getConflictingClassGroupIds:(e,t)=> {
                    let i=n[e]||[];
                    return t&&r[e]?[...i,...r[e]]:i
                }

            }

        }
        ,i=(e,t)=> {
            if(0===e.length)return t.classGroupId;
            let n=e[0],r=t.nextPart.get(n),o=r?i(e.slice(1),r):void 0;
            if(o)return o;
            if(0===t.validators.length)return;
            let s=e.join("-");
            return t.validators.find(( {
                validator:e
            }
            )=>e(s))?.classGroupId
        }
        ,o=/^\[(.+)\]$/,s=e=> {
            if(o.test(e)) {
                let t=o.exec(e)[1],n=t?.substring(0,t.indexOf(":"));
                if(n)return"arbitrary.."+n
            }

        }
        ,a=e=> {
            let {
                theme:t,prefix:n
            }
            =e,r= {
                nextPart:new Map,validators:[]
            }
            ;
            return d(Object.entries(e.classGroups),n).forEach(([e,n])=> {
                l(n,r,e,t)
            }
            ),r
        }
        ,l=(e,t,n,r)=> {
            e.forEach(e=> {
                if("string"==typeof e) {
                    (""===e?t:u(t,e)).classGroupId=n;
                    return
                }
                if("function"==typeof e)return c(e)?void l(e(r),t,n,r):void t.validators.push( {
                    validator:e,classGroupId:n
                }
                );
                Object.entries(e).forEach(([e,i])=> {
                    l(i,u(t,e),n,r)
                }
                )
            }
            )
        }
        ,u=(e,t)=> {
            let n=e;
            return t.split("-").forEach(e=> {
                n.nextPart.has(e)||n.nextPart.set(e, {
                    nextPart:new Map,validators:[]
                }
                ),n=n.nextPart.get(e)
            }
            ),n
        }
        ,c=e=>e.isThemeGetter,d=(e,t)=>t?e.map(([e,n])=>[e,n.map(e=>"string"==typeof e?t+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,n])=>[t+e,n])):e)]):e,h=e=> {
            if(e<1)return {
                get:()=>void 0,set:()=> {

                }

            }
            ;
            let t=0,n=new Map,r=new Map,i=(i,o)=> {
                n.set(i,o),++t>e&&(t=0,r=n,n=new Map)
            }
            ;
            return {
                get(e) {
                    let t=n.get(e);
                    return void 0!==t?t:void 0!==(t=r.get(e))?(i(e,t),t):void 0
                }
                ,set(e,t) {
                    n.has(e)?n.set(e,t):i(e,t)
                }

            }

        }
        ,p=e=> {
            let {
                separator:t,experimentalParseClassName:n
            }
            =e,r=1===t.length,i=t[0],o=t.length,s=e=> {
                let n,s=[],a=0,l=0;
                for(let u=0;
                u<e.length;
                u++) {
                    let c=e[u];
                    if(0===a) {
                        if(c===i&&(r||e.slice(u,u+o)===t)) {
                            s.push(e.slice(l,u)),l=u+o;
                            continue
                        }
                        if("/"===c) {
                            n=u;
                            continue
                        }

                    }
                    "["===c?a++:"]"===c&&a--
                }
                let u=0===s.length?e:e.substring(l),c=u.startsWith("!"),d=c?u.substring(1):u;
                return {
                    modifiers:s,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:n&&n>l?n-l:void 0
                }

            }
            ;
            return n?e=>n( {
                className:e,parseClassName:s
            }
            ):s
        }
        ,f=e=> {
            if(e.length<=1)return e;
            let t=[],n=[];
            return e.forEach(e=> {
                "["===e[0]?(t.push(...n.sort(),e),n=[]):n.push(e)
            }
            ),t.push(...n.sort()),t
        }
        ,m=e=>( {
            cache:h(e.cacheSize),parseClassName:p(e),...r(e)
        }
        ),v=/\s+/,g=(e,t)=> {
            let {
                parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i
            }
            =t,o=[],s=e.trim().split(v),a="";
            for(let e=s.length-1;
            e>=0;
            e-=1) {
                let t=s[e], {
                    modifiers:l,hasImportantModifier:u,baseClassName:c,maybePostfixModifierPosition:d
                }
                =n(t),h=!!d,p=r(h?c.substring(0,d):c);
                if(!p) {
                    if(!h||!(p=r(c))) {
                        a=t+(a.length>0?" "+a:a);
                        continue
                    }
                    h=!1
                }
                let m=f(l).join(":"),v=u?m+"!":m,g=v+p;
                if(o.includes(g))continue;
                o.push(g);
                let y=i(p,h);
                for(let e=0;
                e<y.length;
                ++e) {
                    let t=y[e];
                    o.push(v+t)
                }
                a=t+(a.length>0?" "+a:a)
            }
            return a
        }
        ;
        function y() {
            let e,t,n=0,r="";
            for(;
            n<arguments.length;
            )(e=arguments[n++])&&(t=b(e))&&(r&&(r+=" "),r+=t);
            return r
        }
        let b=e=> {
            let t;
            if("string"==typeof e)return e;
            let n="";
            for(let r=0;
            r<e.length;
            r++)e[r]&&(t=b(e[r]))&&(n&&(n+=" "),n+=t);
            return n
        }
        ,x=e=> {
            let t=t=>t[e]||[];
            return t.isThemeGetter=!0,t
        }
        ,w=/^\[(?:([a-z-]+):)?(.+)\]$/i,E=/^\d+\/\d+$/,P=new Set(["px","full","screen"]),T=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,S=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,k=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,A=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,C=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,M=e=>R(e)||P.has(e)||E.test(e),j=e=>_(e,"length",G),R=e=>!!e&&!Number.isNaN(Number(e)),D=e=>_(e,"number",R),O=e=>!!e&&Number.isInteger(Number(e)),V=e=>e.endsWith("%")&&R(e.slice(0,-1)),L=e=>w.test(e),N=e=>T.test(e),F=new Set(["length","size","percentage"]),I=e=>_(e,F,q),B=e=>_(e,"position",q),W=new Set(["image","url"]),U=e=>_(e,W,X),z=e=>_(e,"",K),$=()=>!0,_=(e,t,n)=> {
            let r=w.exec(e);
            return!!r&&(r[1]?"string"==typeof t?r[1]===t:t.has(r[1]):n(r[2]))
        }
        ,G=e=>S.test(e)&&!k.test(e),q=()=>!1,K=e=>A.test(e),X=e=>C.test(e);
        Symbol.toStringTag;
        let H=function(e,...t) {
            let n,r,i,o=function(a) {
                return r=(n=m(t.reduce((e,t)=>t(e),e()))).cache.get,i=n.cache.set,o=s,s(a)
            }
            ;
            function s(e) {
                let t=r(e);
                if(t)return t;
                let o=g(e,n);
                return i(e,o),o
            }
            return function() {
                return o(y.apply(null,arguments))
            }

        }
        (()=> {
            let e=x("colors"),t=x("spacing"),n=x("blur"),r=x("brightness"),i=x("borderColor"),o=x("borderRadius"),s=x("borderSpacing"),a=x("borderWidth"),l=x("contrast"),u=x("grayscale"),c=x("hueRotate"),d=x("invert"),h=x("gap"),p=x("gradientColorStops"),f=x("gradientColorStopPositions"),m=x("inset"),v=x("margin"),g=x("opacity"),y=x("padding"),b=x("saturate"),w=x("scale"),E=x("sepia"),P=x("skew"),T=x("space"),S=x("translate"),k=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",L,t],F=()=>[L,t],W=()=>["",M,j],_=()=>["auto",R,L],G=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],X=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",L],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[R,L];
            return {
                cacheSize:500,separator:":",theme: {
                    colors:[$],spacing:[M,j],blur:["none","",N,L],brightness:Q(),borderColor:[e],borderRadius:["none","","full",N,L],borderSpacing:F(),borderWidth:W(),contrast:Q(),grayscale:H(),hueRotate:Q(),invert:H(),gap:F(),gradientColorStops:[e],gradientColorStopPositions:[V,j],inset:C(),margin:C(),opacity:Q(),padding:F(),saturate:Q(),scale:Q(),sepia:H(),skew:Q(),space:F(),translate:F()
                }
                ,classGroups: {
                    aspect:[ {
                        aspect:["auto","square","video",L]
                    }
                    ],container:["container"],columns:[ {
                        columns:[N]
                    }
                    ],"break-after":[ {
                        "break-after":Y()
                    }
                    ],"break-before":[ {
                        "break-before":Y()
                    }
                    ],"break-inside":[ {
                        "break-inside":["auto","avoid","avoid-page","avoid-column"]
                    }
                    ],"box-decoration":[ {
                        "box-decoration":["slice","clone"]
                    }
                    ],box:[ {
                        box:["border","content"]
                    }
                    ],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[ {
                        float:["right","left","none","start","end"]
                    }
                    ],clear:[ {
                        clear:["left","right","both","none","start","end"]
                    }
                    ],isolation:["isolate","isolation-auto"],"object-fit":[ {
                        object:["contain","cover","fill","none","scale-down"]
                    }
                    ],"object-position":[ {
                        object:[...G(),L]
                    }
                    ],overflow:[ {
                        overflow:A()
                    }
                    ],"overflow-x":[ {
                        "overflow-x":A()
                    }
                    ],"overflow-y":[ {
                        "overflow-y":A()
                    }
                    ],overscroll:[ {
                        overscroll:k()
                    }
                    ],"overscroll-x":[ {
                        "overscroll-x":k()
                    }
                    ],"overscroll-y":[ {
                        "overscroll-y":k()
                    }
                    ],position:["static","fixed","absolute","relative","sticky"],inset:[ {
                        inset:[m]
                    }
                    ],"inset-x":[ {
                        "inset-x":[m]
                    }
                    ],"inset-y":[ {
                        "inset-y":[m]
                    }
                    ],start:[ {
                        start:[m]
                    }
                    ],end:[ {
                        end:[m]
                    }
                    ],top:[ {
                        top:[m]
                    }
                    ],right:[ {
                        right:[m]
                    }
                    ],bottom:[ {
                        bottom:[m]
                    }
                    ],left:[ {
                        left:[m]
                    }
                    ],visibility:["visible","invisible","collapse"],z:[ {
                        z:["auto",O,L]
                    }
                    ],basis:[ {
                        basis:C()
                    }
                    ],"flex-direction":[ {
                        flex:["row","row-reverse","col","col-reverse"]
                    }
                    ],"flex-wrap":[ {
                        flex:["wrap","wrap-reverse","nowrap"]
                    }
                    ],flex:[ {
                        flex:["1","auto","initial","none",L]
                    }
                    ],grow:[ {
                        grow:H()
                    }
                    ],shrink:[ {
                        shrink:H()
                    }
                    ],order:[ {
                        order:["first","last","none",O,L]
                    }
                    ],"grid-cols":[ {
                        "grid-cols":[$]
                    }
                    ],"col-start-end":[ {
                        col:["auto", {
                            span:["full",O,L]
                        }
                        ,L]
                    }
                    ],"col-start":[ {
                        "col-start":_()
                    }
                    ],"col-end":[ {
                        "col-end":_()
                    }
                    ],"grid-rows":[ {
                        "grid-rows":[$]
                    }
                    ],"row-start-end":[ {
                        row:["auto", {
                            span:[O,L]
                        }
                        ,L]
                    }
                    ],"row-start":[ {
                        "row-start":_()
                    }
                    ],"row-end":[ {
                        "row-end":_()
                    }
                    ],"grid-flow":[ {
                        "grid-flow":["row","col","dense","row-dense","col-dense"]
                    }
                    ],"auto-cols":[ {
                        "auto-cols":["auto","min","max","fr",L]
                    }
                    ],"auto-rows":[ {
                        "auto-rows":["auto","min","max","fr",L]
                    }
                    ],gap:[ {
                        gap:[h]
                    }
                    ],"gap-x":[ {
                        "gap-x":[h]
                    }
                    ],"gap-y":[ {
                        "gap-y":[h]
                    }
                    ],"justify-content":[ {
                        justify:["normal",...X()]
                    }
                    ],"justify-items":[ {
                        "justify-items":["start","end","center","stretch"]
                    }
                    ],"justify-self":[ {
                        "justify-self":["auto","start","end","center","stretch"]
                    }
                    ],"align-content":[ {
                        content:["normal",...X(),"baseline"]
                    }
                    ],"align-items":[ {
                        items:["start","end","center","baseline","stretch"]
                    }
                    ],"align-self":[ {
                        self:["auto","start","end","center","stretch","baseline"]
                    }
                    ],"place-content":[ {
                        "place-content":[...X(),"baseline"]
                    }
                    ],"place-items":[ {
                        "place-items":["start","end","center","baseline","stretch"]
                    }
                    ],"place-self":[ {
                        "place-self":["auto","start","end","center","stretch"]
                    }
                    ],p:[ {
                        p:[y]
                    }
                    ],px:[ {
                        px:[y]
                    }
                    ],py:[ {
                        py:[y]
                    }
                    ],ps:[ {
                        ps:[y]
                    }
                    ],pe:[ {
                        pe:[y]
                    }
                    ],pt:[ {
                        pt:[y]
                    }
                    ],pr:[ {
                        pr:[y]
                    }
                    ],pb:[ {
                        pb:[y]
                    }
                    ],pl:[ {
                        pl:[y]
                    }
                    ],m:[ {
                        m:[v]
                    }
                    ],mx:[ {
                        mx:[v]
                    }
                    ],my:[ {
                        my:[v]
                    }
                    ],ms:[ {
                        ms:[v]
                    }
                    ],me:[ {
                        me:[v]
                    }
                    ],mt:[ {
                        mt:[v]
                    }
                    ],mr:[ {
                        mr:[v]
                    }
                    ],mb:[ {
                        mb:[v]
                    }
                    ],ml:[ {
                        ml:[v]
                    }
                    ],"space-x":[ {
                        "space-x":[T]
                    }
                    ],"space-x-reverse":["space-x-reverse"],"space-y":[ {
                        "space-y":[T]
                    }
                    ],"space-y-reverse":["space-y-reverse"],w:[ {
                        w:["auto","min","max","fit","svw","lvw","dvw",L,t]
                    }
                    ],"min-w":[ {
                        "min-w":[L,t,"min","max","fit"]
                    }
                    ],"max-w":[ {
                        "max-w":[L,t,"none","full","min","max","fit","prose", {
                            screen:[N]
                        }
                        ,N]
                    }
                    ],h:[ {
                        h:[L,t,"auto","min","max","fit","svh","lvh","dvh"]
                    }
                    ],"min-h":[ {
                        "min-h":[L,t,"min","max","fit","svh","lvh","dvh"]
                    }
                    ],"max-h":[ {
                        "max-h":[L,t,"min","max","fit","svh","lvh","dvh"]
                    }
                    ],size:[ {
                        size:[L,t,"auto","min","max","fit"]
                    }
                    ],"font-size":[ {
                        text:["base",N,j]
                    }
                    ],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[ {
                        font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",D]
                    }
                    ],"font-family":[ {
                        font:[$]
                    }
                    ],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[ {
                        tracking:["tighter","tight","normal","wide","wider","widest",L]
                    }
                    ],"line-clamp":[ {
                        "line-clamp":["none",R,D]
                    }
                    ],leading:[ {
                        leading:["none","tight","snug","normal","relaxed","loose",M,L]
                    }
                    ],"list-image":[ {
                        "list-image":["none",L]
                    }
                    ],"list-style-type":[ {
                        list:["none","disc","decimal",L]
                    }
                    ],"list-style-position":[ {
                        list:["inside","outside"]
                    }
                    ],"placeholder-color":[ {
                        placeholder:[e]
                    }
                    ],"placeholder-opacity":[ {
                        "placeholder-opacity":[g]
                    }
                    ],"text-alignment":[ {
                        text:["left","center","right","justify","start","end"]
                    }
                    ],"text-color":[ {
                        text:[e]
                    }
                    ],"text-opacity":[ {
                        "text-opacity":[g]
                    }
                    ],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[ {
                        decoration:[...q(),"wavy"]
                    }
                    ],"text-decoration-thickness":[ {
                        decoration:["auto","from-font",M,j]
                    }
                    ],"underline-offset":[ {
                        "underline-offset":["auto",M,L]
                    }
                    ],"text-decoration-color":[ {
                        decoration:[e]
                    }
                    ],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[ {
                        text:["wrap","nowrap","balance","pretty"]
                    }
                    ],indent:[ {
                        indent:F()
                    }
                    ],"vertical-align":[ {
                        align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",L]
                    }
                    ],whitespace:[ {
                        whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]
                    }
                    ],break:[ {
                        break:["normal","words","all","keep"]
                    }
                    ],hyphens:[ {
                        hyphens:["none","manual","auto"]
                    }
                    ],content:[ {
                        content:["none",L]
                    }
                    ],"bg-attachment":[ {
                        bg:["fixed","local","scroll"]
                    }
                    ],"bg-clip":[ {
                        "bg-clip":["border","padding","content","text"]
                    }
                    ],"bg-opacity":[ {
                        "bg-opacity":[g]
                    }
                    ],"bg-origin":[ {
                        "bg-origin":["border","padding","content"]
                    }
                    ],"bg-position":[ {
                        bg:[...G(),B]
                    }
                    ],"bg-repeat":[ {
                        bg:["no-repeat", {
                            repeat:["","x","y","round","space"]
                        }
                        ]
                    }
                    ],"bg-size":[ {
                        bg:["auto","cover","contain",I]
                    }
                    ],"bg-image":[ {
                        bg:["none", {
                            "gradient-to":["t","tr","r","br","b","bl","l","tl"]
                        }
                        ,U]
                    }
                    ],"bg-color":[ {
                        bg:[e]
                    }
                    ],"gradient-from-pos":[ {
                        from:[f]
                    }
                    ],"gradient-via-pos":[ {
                        via:[f]
                    }
                    ],"gradient-to-pos":[ {
                        to:[f]
                    }
                    ],"gradient-from":[ {
                        from:[p]
                    }
                    ],"gradient-via":[ {
                        via:[p]
                    }
                    ],"gradient-to":[ {
                        to:[p]
                    }
                    ],rounded:[ {
                        rounded:[o]
                    }
                    ],"rounded-s":[ {
                        "rounded-s":[o]
                    }
                    ],"rounded-e":[ {
                        "rounded-e":[o]
                    }
                    ],"rounded-t":[ {
                        "rounded-t":[o]
                    }
                    ],"rounded-r":[ {
                        "rounded-r":[o]
                    }
                    ],"rounded-b":[ {
                        "rounded-b":[o]
                    }
                    ],"rounded-l":[ {
                        "rounded-l":[o]
                    }
                    ],"rounded-ss":[ {
                        "rounded-ss":[o]
                    }
                    ],"rounded-se":[ {
                        "rounded-se":[o]
                    }
                    ],"rounded-ee":[ {
                        "rounded-ee":[o]
                    }
                    ],"rounded-es":[ {
                        "rounded-es":[o]
                    }
                    ],"rounded-tl":[ {
                        "rounded-tl":[o]
                    }
                    ],"rounded-tr":[ {
                        "rounded-tr":[o]
                    }
                    ],"rounded-br":[ {
                        "rounded-br":[o]
                    }
                    ],"rounded-bl":[ {
                        "rounded-bl":[o]
                    }
                    ],"border-w":[ {
                        border:[a]
                    }
                    ],"border-w-x":[ {
                        "border-x":[a]
                    }
                    ],"border-w-y":[ {
                        "border-y":[a]
                    }
                    ],"border-w-s":[ {
                        "border-s":[a]
                    }
                    ],"border-w-e":[ {
                        "border-e":[a]
                    }
                    ],"border-w-t":[ {
                        "border-t":[a]
                    }
                    ],"border-w-r":[ {
                        "border-r":[a]
                    }
                    ],"border-w-b":[ {
                        "border-b":[a]
                    }
                    ],"border-w-l":[ {
                        "border-l":[a]
                    }
                    ],"border-opacity":[ {
                        "border-opacity":[g]
                    }
                    ],"border-style":[ {
                        border:[...q(),"hidden"]
                    }
                    ],"divide-x":[ {
                        "divide-x":[a]
                    }
                    ],"divide-x-reverse":["divide-x-reverse"],"divide-y":[ {
                        "divide-y":[a]
                    }
                    ],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[ {
                        "divide-opacity":[g]
                    }
                    ],"divide-style":[ {
                        divide:q()
                    }
                    ],"border-color":[ {
                        border:[i]
                    }
                    ],"border-color-x":[ {
                        "border-x":[i]
                    }
                    ],"border-color-y":[ {
                        "border-y":[i]
                    }
                    ],"border-color-s":[ {
                        "border-s":[i]
                    }
                    ],"border-color-e":[ {
                        "border-e":[i]
                    }
                    ],"border-color-t":[ {
                        "border-t":[i]
                    }
                    ],"border-color-r":[ {
                        "border-r":[i]
                    }
                    ],"border-color-b":[ {
                        "border-b":[i]
                    }
                    ],"border-color-l":[ {
                        "border-l":[i]
                    }
                    ],"divide-color":[ {
                        divide:[i]
                    }
                    ],"outline-style":[ {
                        outline:["",...q()]
                    }
                    ],"outline-offset":[ {
                        "outline-offset":[M,L]
                    }
                    ],"outline-w":[ {
                        outline:[M,j]
                    }
                    ],"outline-color":[ {
                        outline:[e]
                    }
                    ],"ring-w":[ {
                        ring:W()
                    }
                    ],"ring-w-inset":["ring-inset"],"ring-color":[ {
                        ring:[e]
                    }
                    ],"ring-opacity":[ {
                        "ring-opacity":[g]
                    }
                    ],"ring-offset-w":[ {
                        "ring-offset":[M,j]
                    }
                    ],"ring-offset-color":[ {
                        "ring-offset":[e]
                    }
                    ],shadow:[ {
                        shadow:["","inner","none",N,z]
                    }
                    ],"shadow-color":[ {
                        shadow:[$]
                    }
                    ],opacity:[ {
                        opacity:[g]
                    }
                    ],"mix-blend":[ {
                        "mix-blend":[...K(),"plus-lighter","plus-darker"]
                    }
                    ],"bg-blend":[ {
                        "bg-blend":K()
                    }
                    ],filter:[ {
                        filter:["","none"]
                    }
                    ],blur:[ {
                        blur:[n]
                    }
                    ],brightness:[ {
                        brightness:[r]
                    }
                    ],contrast:[ {
                        contrast:[l]
                    }
                    ],"drop-shadow":[ {
                        "drop-shadow":["","none",N,L]
                    }
                    ],grayscale:[ {
                        grayscale:[u]
                    }
                    ],"hue-rotate":[ {
                        "hue-rotate":[c]
                    }
                    ],invert:[ {
                        invert:[d]
                    }
                    ],saturate:[ {
                        saturate:[b]
                    }
                    ],sepia:[ {
                        sepia:[E]
                    }
                    ],"backdrop-filter":[ {
                        "backdrop-filter":["","none"]
                    }
                    ],"backdrop-blur":[ {
                        "backdrop-blur":[n]
                    }
                    ],"backdrop-brightness":[ {
                        "backdrop-brightness":[r]
                    }
                    ],"backdrop-contrast":[ {
                        "backdrop-contrast":[l]
                    }
                    ],"backdrop-grayscale":[ {
                        "backdrop-grayscale":[u]
                    }
                    ],"backdrop-hue-rotate":[ {
                        "backdrop-hue-rotate":[c]
                    }
                    ],"backdrop-invert":[ {
                        "backdrop-invert":[d]
                    }
                    ],"backdrop-opacity":[ {
                        "backdrop-opacity":[g]
                    }
                    ],"backdrop-saturate":[ {
                        "backdrop-saturate":[b]
                    }
                    ],"backdrop-sepia":[ {
                        "backdrop-sepia":[E]
                    }
                    ],"border-collapse":[ {
                        border:["collapse","separate"]
                    }
                    ],"border-spacing":[ {
                        "border-spacing":[s]
                    }
                    ],"border-spacing-x":[ {
                        "border-spacing-x":[s]
                    }
                    ],"border-spacing-y":[ {
                        "border-spacing-y":[s]
                    }
                    ],"table-layout":[ {
                        table:["auto","fixed"]
                    }
                    ],caption:[ {
                        caption:["top","bottom"]
                    }
                    ],transition:[ {
                        transition:["none","all","","colors","opacity","shadow","transform",L]
                    }
                    ],duration:[ {
                        duration:Q()
                    }
                    ],ease:[ {
                        ease:["linear","in","out","in-out",L]
                    }
                    ],delay:[ {
                        delay:Q()
                    }
                    ],animate:[ {
                        animate:["none","spin","ping","pulse","bounce",L]
                    }
                    ],transform:[ {
                        transform:["","gpu","none"]
                    }
                    ],scale:[ {
                        scale:[w]
                    }
                    ],"scale-x":[ {
                        "scale-x":[w]
                    }
                    ],"scale-y":[ {
                        "scale-y":[w]
                    }
                    ],rotate:[ {
                        rotate:[O,L]
                    }
                    ],"translate-x":[ {
                        "translate-x":[S]
                    }
                    ],"translate-y":[ {
                        "translate-y":[S]
                    }
                    ],"skew-x":[ {
                        "skew-x":[P]
                    }
                    ],"skew-y":[ {
                        "skew-y":[P]
                    }
                    ],"transform-origin":[ {
                        origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",L]
                    }
                    ],accent:[ {
                        accent:["auto",e]
                    }
                    ],appearance:[ {
                        appearance:["none","auto"]
                    }
                    ],cursor:[ {
                        cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",L]
                    }
                    ],"caret-color":[ {
                        caret:[e]
                    }
                    ],"pointer-events":[ {
                        "pointer-events":["none","auto"]
                    }
                    ],resize:[ {
                        resize:["none","y","x",""]
                    }
                    ],"scroll-behavior":[ {
                        scroll:["auto","smooth"]
                    }
                    ],"scroll-m":[ {
                        "scroll-m":F()
                    }
                    ],"scroll-mx":[ {
                        "scroll-mx":F()
                    }
                    ],"scroll-my":[ {
                        "scroll-my":F()
                    }
                    ],"scroll-ms":[ {
                        "scroll-ms":F()
                    }
                    ],"scroll-me":[ {
                        "scroll-me":F()
                    }
                    ],"scroll-mt":[ {
                        "scroll-mt":F()
                    }
                    ],"scroll-mr":[ {
                        "scroll-mr":F()
                    }
                    ],"scroll-mb":[ {
                        "scroll-mb":F()
                    }
                    ],"scroll-ml":[ {
                        "scroll-ml":F()
                    }
                    ],"scroll-p":[ {
                        "scroll-p":F()
                    }
                    ],"scroll-px":[ {
                        "scroll-px":F()
                    }
                    ],"scroll-py":[ {
                        "scroll-py":F()
                    }
                    ],"scroll-ps":[ {
                        "scroll-ps":F()
                    }
                    ],"scroll-pe":[ {
                        "scroll-pe":F()
                    }
                    ],"scroll-pt":[ {
                        "scroll-pt":F()
                    }
                    ],"scroll-pr":[ {
                        "scroll-pr":F()
                    }
                    ],"scroll-pb":[ {
                        "scroll-pb":F()
                    }
                    ],"scroll-pl":[ {
                        "scroll-pl":F()
                    }
                    ],"snap-align":[ {
                        snap:["start","end","center","align-none"]
                    }
                    ],"snap-stop":[ {
                        snap:["normal","always"]
                    }
                    ],"snap-type":[ {
                        snap:["none","x","y","both"]
                    }
                    ],"snap-strictness":[ {
                        snap:["mandatory","proximity"]
                    }
                    ],touch:[ {
                        touch:["auto","none","manipulation"]
                    }
                    ],"touch-x":[ {
                        "touch-pan":["x","left","right"]
                    }
                    ],"touch-y":[ {
                        "touch-pan":["y","up","down"]
                    }
                    ],"touch-pz":["touch-pinch-zoom"],select:[ {
                        select:["none","text","all","auto"]
                    }
                    ],"will-change":[ {
                        "will-change":["auto","scroll","contents","transform",L]
                    }
                    ],fill:[ {
                        fill:[e,"none"]
                    }
                    ],"stroke-w":[ {
                        stroke:[M,j,D]
                    }
                    ],stroke:[ {
                        stroke:[e,"none"]
                    }
                    ],sr:["sr-only","not-sr-only"],"forced-color-adjust":[ {
                        "forced-color-adjust":["auto","none"]
                    }
                    ]
                }
                ,conflictingClassGroups: {
                    overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]
                }
                ,conflictingClassGroupModifiers: {
                    "font-size":["leading"]
                }

            }

        }
        )
    }
    ,41917:(e,t,n)=> {
        n.d(t, {
            p:()=>r
        }
        );
        function r(e) {
            let t;
            return()=>(void 0===t&&(t=e()),t)
        }

    }
    ,42198:(e,t,n)=> {
        n.d(t, {
            K:()=>r
        }
        );
        function r(e,t,n) {
            if(e instanceof EventTarget)return[e];
            if("string"==typeof e) {
                let r=document;
                t&&(r=t.current);
                let i=n?.[e]??r.querySelectorAll(e);
                return i?Array.from(i):[]
            }
            return Array.from(e)
        }

    }
    ,45818:(e,t,n)=> {
        n.d(t, {
            q:()=>r
        }
        );
        let r=(e,t,n)=> {
            let r=t-e;
            return 0===r?1:(n-e)/r
        }

    }
    ,46081:(e,t,n)=> {
        n.d(t, {
            A:()=>s,q:()=>o
        }
        );
        var r=n(12115),i=n(95155);
        function o(e,t) {
            let n=r.createContext(t),o=e=> {
                let {
                    children:t,...o
                }
                =e,s=r.useMemo(()=>o,Object.values(o));
                return(0,i.jsx)(n.Provider, {
                    value:s,children:t
                }
                )
            }
            ;
            return o.displayName=e+"Provider",[o,function(i) {
                let o=r.useContext(n);
                if(o)return o;
                if(void 0!==t)return t;
                throw Error(`\`$ {
                    i
                }
                \` must be used within \`$ {
                    e
                }
                \``)
            }
            ]
        }
        function s(e,t=[]) {
            let n=[],o=()=> {
                let t=n.map(e=>r.createContext(e));
                return function(n) {
                    let i=n?.[e]||t;
                    return r.useMemo(()=>( {
                        [`__scope$ {
                            e
                        }
                        `]: {
                            ...n,[e]:i
                        }

                    }
                    ),[n,i])
                }

            }
            ;
            return o.scopeName=e,[function(t,o) {
                let s=r.createContext(o),a=n.length;
                n=[...n,o];
                let l=t=> {
                    let {
                        scope:n,children:o,...l
                    }
                    =t,u=n?.[e]?.[a]||s,c=r.useMemo(()=>l,Object.values(l));
                    return(0,i.jsx)(u.Provider, {
                        value:c,children:o
                    }
                    )
                }
                ;
                return l.displayName=t+"Provider",[l,function(n,i) {
                    let l=i?.[e]?.[a]||s,u=r.useContext(l);
                    if(u)return u;
                    if(void 0!==o)return o;
                    throw Error(`\`$ {
                        n
                    }
                    \` must be used within \`$ {
                        t
                    }
                    \``)
                }
                ]
            }
            ,function(...e) {
                let t=e[0];
                if(1===e.length)return t;
                let n=()=> {
                    let n=e.map(e=>( {
                        useScope:e(),scopeName:e.scopeName
                    }
                    ));
                    return function(e) {
                        let i=n.reduce((t, {
                            useScope:n,scopeName:r
                        }
                        )=> {
                            let i=n(e)[`__scope$ {
                                r
                            }
                            `];
                            return {
                                ...t,...i
                            }

                        }
                        , {

                        }
                        );
                        return r.useMemo(()=>( {
                            [`__scope$ {
                                t.scopeName
                            }
                            `]:i
                        }
                        ),[i])
                    }

                }
                ;
                return n.scopeName=t.scopeName,n
            }
            (o,...t)]
        }

    }
    ,51362:(e,t,n)=> {
        n.d(t, {
            D:()=>u,N:()=>c
        }
        );
        var r=n(12115),i=(e,t,n,r,i,o,s,a)=> {
            let l=document.documentElement,u=["light","dark"];
            function c(t) {
                var n;
                (Array.isArray(e)?e:[e]).forEach(e=> {
                    let n="class"===e,r=n&&o?i.map(e=>o[e]||e):i;
                    n?(l.classList.remove(...r),l.classList.add(o&&o[t]?o[t]:t)):l.setAttribute(e,t)
                }
                ),n=t,a&&u.includes(n)&&(l.style.colorScheme=n)
            }
            if(r)c(r);
            else try {
                let e=localStorage.getItem(t)||n,r=s&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;
                c(r)
            }
            catch(e) {

            }

        }
        ,o=["light","dark"],s="(prefers-color-scheme: dark)",a=r.createContext(void 0),l= {
            setTheme:e=> {

            }
            ,themes:[]
        }
        ,u=()=> {
            var e;
            return null!=(e=r.useContext(a))?e:l
        }
        ,c=e=>r.useContext(a)?r.createElement(r.Fragment,null,e.children):r.createElement(h, {
            ...e
        }
        ),d=["light","dark"],h=e=> {
            let {
                forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:i=!0,enableColorScheme:l=!0,storageKey:u="theme",themes:c=d,defaultTheme:h=i?"system":"light",attribute:g="data-theme",value:y,children:b,nonce:x,scriptProps:w
            }
            =e,[E,P]=r.useState(()=>f(u,h)),[T,S]=r.useState(()=>"system"===E?v():E),k=y?Object.values(y):c,A=r.useCallback(e=> {
                let t=e;
                if(!t)return;
                "system"===e&&i&&(t=v());
                let r=y?y[t]:t,s=n?m(x):null,a=document.documentElement,u=e=> {
                    "class"===e?(a.classList.remove(...k),r&&a.classList.add(r)):e.startsWith("data-")&&(r?a.setAttribute(e,r):a.removeAttribute(e))
                }
                ;
                if(Array.isArray(g)?g.forEach(u):u(g),l) {
                    let e=o.includes(h)?h:null,n=o.includes(t)?t:e;
                    a.style.colorScheme=n
                }
                null==s||s()
            }
            ,[x]),C=r.useCallback(e=> {
                let t="function"==typeof e?e(E):e;
                P(t);
                try {
                    localStorage.setItem(u,t)
                }
                catch(e) {

                }

            }
            ,[E]),M=r.useCallback(e=> {
                S(v(e)),"system"===E&&i&&!t&&A("system")
            }
            ,[E,t]);
            r.useEffect(()=> {
                let e=window.matchMedia(s);
                return e.addListener(M),M(e),()=>e.removeListener(M)
            }
            ,[M]),r.useEffect(()=> {
                let e=e=> {
                    e.key===u&&(e.newValue?P(e.newValue):C(h))
                }
                ;
                return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)
            }
            ,[C]),r.useEffect(()=> {
                A(null!=t?t:E)
            }
            ,[t,E]);
            let j=r.useMemo(()=>( {
                theme:E,setTheme:C,forcedTheme:t,resolvedTheme:"system"===E?T:E,themes:i?[...c,"system"]:c,systemTheme:i?T:void 0
            }
            ),[E,C,t,T,i,c]);
            return r.createElement(a.Provider, {
                value:j
            }
            ,r.createElement(p, {
                forcedTheme:t,storageKey:u,attribute:g,enableSystem:i,enableColorScheme:l,defaultTheme:h,value:y,themes:c,nonce:x,scriptProps:w
            }
            ),b)
        }
        ,p=r.memo(e=> {
            let {
                forcedTheme:t,storageKey:n,attribute:o,enableSystem:s,enableColorScheme:a,defaultTheme:l,value:u,themes:c,nonce:d,scriptProps:h
            }
            =e,p=JSON.stringify([o,n,l,t,c,u,s,a]).slice(1,-1);
            return r.createElement("script", {
                ...h,suppressHydrationWarning:!0,nonce:"",dangerouslySetInnerHTML: {
                    __html:"(".concat(i.toString(),")(").concat(p,")")
                }

            }
            )
        }
        ),f=(e,t)=> {
            let n;
            try {
                n=localStorage.getItem(e)||void 0
            }
            catch(e) {

            }
            return n||t
        }
        ,m=e=> {
            let t=document.createElement("style");
            return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=> {
                window.getComputedStyle(document.body),setTimeout(()=> {
                    document.head.removeChild(t)
                }
                ,1)
            }

        }
        ,v=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")
    }
    ,51508:(e,t,n)=> {
        n.d(t, {
            Q:()=>r
        }
        );
        let r=(0,n(12115).createContext)( {
            transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"
        }
        )
    }
    ,52596:(e,t,n)=> {
        function r() {
            for(var e,t,n=0,r="",i=arguments.length;
            n<i;
            n++)(e=arguments[n])&&(t=function e(t) {
                var n,r,i="";
                if("string"==typeof t||"number"==typeof t)i+=t;
                else if("object"==typeof t)if(Array.isArray(t)) {
                    var o=t.length;
                    for(n=0;
                    n<o;
                    n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r)
                }
                else for(r in t)t[r]&&(i&&(i+=" "),i+=r);
                return i
            }
            (e))&&(r&&(r+=" "),r+=t);
            return r
        }
        n.d(t, {
            $:()=>r,A:()=>i
        }
        );
        let i=r
    }
    ,52712:(e,t,n)=> {
        n.d(t, {
            N:()=>i
        }
        );
        var r=n(12115),i=globalThis?.document?r.useLayoutEffect:()=> {

        }

    }
    ,53191:(e,t,n)=> {
        n.d(t, {
            F:()=>i
        }
        );
        let r=(e,t)=>n=>t(e(n)),i=(...e)=>e.reduce(r)
    }
    ,53678:(e,t,n)=> {
        n.d(t, {
            q:()=>r
        }
        );
        let r=(e,t,n)=>n>t?t:n<e?e:n
    }
    ,54416:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("X",[["path", {
            d:"M18 6 6 18",key:"1bl5f8"
        }
        ],["path", {
            d:"m6 6 12 12",key:"d8bk6v"
        }
        ]])
    }
    ,54542:(e,t,n)=> {
        n.d(t, {
            $:()=>r,V:()=>i
        }
        );
        let r=()=> {

        }
        ,i=()=> {

        }

    }
    ,55920:(e,t,n)=> {
        n.d(t, {
            $:()=>o,q:()=>s
        }
        );
        var r=n(30614);
        let i=/^(?:#[\da-f] {
            3,8
        }
        |(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+) {
            2
        }
        -?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,o=(e,t)=>n=>!!("string"==typeof n&&i.test(n)&&n.startsWith(e)||t&&null!=n&&Object.prototype.hasOwnProperty.call(n,t)),s=(e,t,n)=>i=> {
            if("string"!=typeof i)return i;
            let[o,s,a,l]=i.match(r.S);
            return {
                [e]:parseFloat(o),[t]:parseFloat(s),[n]:parseFloat(a),alpha:void 0!==l?parseFloat(l):1
            }

        }

    }
    ,56668:(e,t,n)=> {
        function r(e,t) {
            -1===e.indexOf(t)&&e.push(t)
        }
        function i(e,t) {
            let n=e.indexOf(t);
            n>-1&&e.splice(n,1)
        }
        n.d(t, {
            Ai:()=>i,Kq:()=>r
        }
        )
    }
    ,57100:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("PenTool",[["path", {
            d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"
        }
        ],["path", {
            d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"
        }
        ],["path", {
            d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"
        }
        ],["circle", {
            cx:"11",cy:"11",r:"2",key:"xmgehs"
        }
        ]])
    }
    ,57340:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("House",[["path", {
            d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"
        }
        ],["path", {
            d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"
        }
        ]])
    }
    ,57434:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("FileText",[["path", {
            d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"
        }
        ],["path", {
            d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"
        }
        ],["path", {
            d:"M10 9H8",key:"b1mrlr"
        }
        ],["path", {
            d:"M16 13H8",key:"t4e002"
        }
        ],["path", {
            d:"M16 17H8",key:"z1uh3a"
        }
        ]])
    }
    ,57887:(e,t,n)=> {
        n.d(t, {
            X4:()=>o,ai:()=>i,hs:()=>s
        }
        );
        var r=n(53678);
        let i= {
            test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e
        }
        ,o= {
            ...i,transform:e=>(0,r.q)(0,1,e)
        }
        ,s= {
            ...i,default:1
        }

    }
    ,58437:(e,t,n)=> {
        n.d(t, {
            I:()=>s
        }
        );
        var r=n(23387);
        let i=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];
        var o=n(24744);
        function s(e,t) {
            let n=!1,s=!0,a= {
                delta:0,timestamp:0,isProcessing:!1
            }
            ,l=()=>n=!0,u=i.reduce((e,n)=>(e[n]=function(e,t) {
                let n=new Set,r=new Set,i=!1,s=!1,a=new WeakSet,l= {
                    delta:0,timestamp:0,isProcessing:!1
                }
                ,u=0;
                function c(t) {
                    a.has(t)&&(d.schedule(t),e()),u++,t(l)
                }
                let d= {
                    schedule:(e,t=!1,o=!1)=> {
                        let s=o&&i?n:r;
                        return t&&a.add(e),s.has(e)||s.add(e),e
                    }
                    ,cancel:e=> {
                        r.delete(e),a.delete(e)
                    }
                    ,process:e=> {
                        if(l=e,i) {
                            s=!0;
                            return
                        }
                        i=!0,[n,r]=[r,n],n.forEach(c),t&&o.Q.value&&o.Q.value.frameloop[t].push(u),u=0,n.clear(),i=!1,s&&(s=!1,d.process(e))
                    }

                }
                ;
                return d
            }
            (l,t?n:void 0),e), {

            }
            ), {
                setup:c,read:d,resolveKeyframes:h,preUpdate:p,update:f,preRender:m,render:v,postRender:g
            }
            =u,y=()=> {
                let i=r.W.useManualTiming?a.timestamp:performance.now();
                n=!1,r.W.useManualTiming||(a.delta=s?1e3/60:Math.max(Math.min(i-a.timestamp,40),1)),a.timestamp=i,a.isProcessing=!0,c.process(a),d.process(a),h.process(a),p.process(a),f.process(a),m.process(a),v.process(a),g.process(a),a.isProcessing=!1,n&&t&&(s=!1,e(y))
            }
            ,b=()=> {
                n=!0,s=!0,a.isProcessing||e(y)
            }
            ;
            return {
                schedule:i.reduce((e,t)=> {
                    let r=u[t];
                    return e[t]=(e,t=!1,i=!1)=>(n||b(),r.schedule(e,t,i)),e
                }
                , {

                }
                ),cancel:e=> {
                    for(let t=0;
                    t<i.length;
                    t++)u[i[t]].cancel(e)
                }
                ,state:a,steps:u
            }

        }

    }
    ,60010:(e,t,n)=> {
        n.d(t, {
            V:()=>c,f:()=>f
        }
        );
        var r=n(4272);
        let i=/(?:#[\da-f] {
            3,8
        }
        |(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+) {
            2
        }
        -?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
        var o=n(30614),s=n(11557);
        let a="number",l="color",u=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f] {
            3,8
        }
        |(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+) {
            2
        }
        -?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function c(e) {
            let t=e.toString(),n=[],i= {
                color:[],number:[],var:[]
            }
            ,o=[],s=0,c=t.replace(u,e=>(r.y.test(e)?(i.color.push(s),o.push(l),n.push(r.y.parse(e))):e.startsWith("var(")?(i.var.push(s),o.push("var"),n.push(e)):(i.number.push(s),o.push(a),n.push(parseFloat(e))),++s,"${}")).split("${}");
            return {
                values:n,split:c,indexes:i,types:o
            }

        }
        function d(e) {
            return c(e).values
        }
        function h(e) {
            let {
                split:t,types:n
            }
            =c(e),i=t.length;
            return e=> {
                let o="";
                for(let u=0;
                u<i;
                u++)if(o+=t[u],void 0!==e[u]) {
                    let t=n[u];
                    t===a?o+=(0,s.a)(e[u]):t===l?o+=r.y.transform(e[u]):o+=e[u]
                }
                return o
            }

        }
        let p=e=>"number"==typeof e?0:r.y.test(e)?r.y.getAnimatableNone(e):e,f= {
            test:function(e) {
                return isNaN(e)&&"string"==typeof e&&(e.match(o.S)?.length||0)+(e.match(i)?.length||0)>0
            }
            ,parse:d,createTransformer:h,getAnimatableNone:function(e) {
                let t=d(e);
                return h(e)(t.map(p))
            }

        }

    }
    ,60098:(e,t,n)=> {
        n.d(t, {
            OQ:()=>c
        }
        );
        var r=n(75626),i=n(62923),o=n(74261),s=n(69515);
        let a=e=>!isNaN(parseFloat(e)),l= {
            current:void 0
        }
        ;
        class u {
            constructor(e,t= {

            }
            ) {
                this.canTrackVelocity=null,this.events= {

                }
                ,this.updateAndNotify=(e,t=!0)=> {
                    let n=o.k.now();
                    if(this.updatedAt!==n&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty();
                    t&&this.events.renderRequest?.notify(this.current)
                }
                ,this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner
            }
            setCurrent(e) {
                this.current=e,this.updatedAt=o.k.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=a(this.current))
            }
            setPrevFrameValue(e=this.current) {
                this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt
            }
            onChange(e) {
                return this.on("change",e)
            }
            on(e,t) {
                this.events[e]||(this.events[e]=new r.v);
                let n=this.events[e].add(t);
                return"change"===e?()=> {
                    n(),s.Gt.read(()=> {
                        this.events.change.getSize()||this.stop()
                    }
                    )
                }
                :n
            }
            clearListeners() {
                for(let e in this.events)this.events[e].clear()
            }
            attach(e,t) {
                this.passiveEffect=e,this.stopPassiveEffect=t
            }
            set(e,t=!0) {
                t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)
            }
            setWithVelocity(e,t,n) {
                this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n
            }
            jump(e,t=!0) {
                this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()
            }
            dirty() {
                this.events.change?.notify(this.current)
            }
            addDependent(e) {
                this.dependents||(this.dependents=new Set),this.dependents.add(e)
            }
            removeDependent(e) {
                this.dependents&&this.dependents.delete(e)
            }
            get() {
                return l.current&&l.current.push(this),this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                let e=o.k.now();
                if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;
                let t=Math.min(this.updatedAt-this.prevUpdatedAt,30);
                return(0,i.f)(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)
            }
            start(e) {
                return this.stop(),new Promise(t=> {
                    this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()
                }
                ).then(()=> {
                    this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()
            }
            isAnimating() {
                return!!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()
            }

        }
        function c(e,t) {
            return new u(e,t)
        }

    }
    ,60760:(e,t,n)=> {
        n.d(t, {
            N:()=>y
        }
        );
        var r=n(95155),i=n(12115),o=n(90869),s=n(82885),a=n(97494),l=n(80845),u=n(27351),c=n(51508);
        class d extends i.Component {
            getSnapshotBeforeUpdate(e) {
                let t=this.props.childRef.current;
                if(t&&e.isPresent&&!this.props.isPresent) {
                    let e=t.offsetParent,n=(0,u.s)(e)&&e.offsetWidth||0,r=this.props.sizeRef.current;
                    r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left
                }
                return null
            }
            componentDidUpdate() {

            }
            render() {
                return this.props.children
            }

        }
        function h(e) {
            let {
                children:t,isPresent:n,anchorX:o
            }
            =e,s=(0,i.useId)(),a=(0,i.useRef)(null),l=(0,i.useRef)( {
                width:0,height:0,top:0,left:0,right:0
            }
            ), {
                nonce:u
            }
            =(0,i.useContext)(c.Q);
            return(0,i.useInsertionEffect)(()=> {
                let {
                    width:e,height:t,top:r,left:i,right:c
                }
                =l.current;
                if(n||!a.current||!e||!t)return;
                a.current.dataset.motionPopId=s;
                let d=document.createElement("style");
                return u&&(d.nonce=u),document.head.appendChild(d),d.sheet&&d.sheet.insertRule('\n          [data-motion-pop-id="'.concat(s,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===o?"left: ".concat(i):"right: ".concat(c),"px !important;\n            top: ").concat(r,"px !important;\n          }\n        ")),()=> {
                    document.head.contains(d)&&document.head.removeChild(d)
                }

            }
            ,[n]),(0,r.jsx)(d, {
                isPresent:n,childRef:a,sizeRef:l,children:i.cloneElement(t, {
                    ref:a
                }
                )
            }
            )
        }
        let p=e=> {
            let {
                children:t,initial:n,isPresent:o,onExitComplete:a,custom:u,presenceAffectsLayout:c,mode:d,anchorX:p
            }
            =e,m=(0,s.M)(f),v=(0,i.useId)(),g=!0,y=(0,i.useMemo)(()=>(g=!1, {
                id:v,initial:n,isPresent:o,custom:u,onExitComplete:e=> {
                    for(let t of(m.set(e,!0),m.values()))if(!t)return;
                    a&&a()
                }
                ,register:e=>(m.set(e,!1),()=>m.delete(e))
            }
            ),[o,m,a]);
            return c&&g&&(y= {
                ...y
            }
            ),(0,i.useMemo)(()=> {
                m.forEach((e,t)=>m.set(t,!1))
            }
            ,[o]),i.useEffect(()=> {
                o||m.size||!a||a()
            }
            ,[o]),"popLayout"===d&&(t=(0,r.jsx)(h, {
                isPresent:o,anchorX:p,children:t
            }
            )),(0,r.jsx)(l.t.Provider, {
                value:y,children:t
            }
            )
        }
        ;
        function f() {
            return new Map
        }
        var m=n(32082);
        let v=e=>e.key||"";
        function g(e) {
            let t=[];
            return i.Children.forEach(e,e=> {
                (0,i.isValidElement)(e)&&t.push(e)
            }
            ),t
        }
        let y=e=> {
            let {
                children:t,custom:n,initial:l=!0,onExitComplete:u,presenceAffectsLayout:c=!0,mode:d="sync",propagate:h=!1,anchorX:f="left"
            }
            =e,[y,b]=(0,m.xQ)(h),x=(0,i.useMemo)(()=>g(t),[t]),w=h&&!y?[]:x.map(v),E=(0,i.useRef)(!0),P=(0,i.useRef)(x),T=(0,s.M)(()=>new Map),[S,k]=(0,i.useState)(x),[A,C]=(0,i.useState)(x);
            (0,a.E)(()=> {
                E.current=!1,P.current=x;
                for(let e=0;
                e<A.length;
                e++) {
                    let t=v(A[e]);
                    w.includes(t)?T.delete(t):!0!==T.get(t)&&T.set(t,!1)
                }

            }
            ,[A,w.length,w.join("-")]);
            let M=[];
            if(x!==S) {
                let e=[...x];
                for(let t=0;
                t<A.length;
                t++) {
                    let n=A[t],r=v(n);
                    w.includes(r)||(e.splice(t,0,n),M.push(n))
                }
                return"wait"===d&&M.length&&(e=M),C(g(e)),k(x),null
            }
            let {
                forceRender:j
            }
            =(0,i.useContext)(o.L);
            return(0,r.jsx)(r.Fragment, {
                children:A.map(e=> {
                    let t=v(e),i=(!h||!!y)&&(x===A||w.includes(t));
                    return(0,r.jsx)(p, {
                        isPresent:i,initial:(!E.current||!!l)&&void 0,custom:n,presenceAffectsLayout:c,mode:d,onExitComplete:i?void 0:()=> {
                            if(!T.has(t))return;
                            T.set(t,!0);
                            let e=!0;
                            T.forEach(t=> {
                                t||(e=!1)
                            }
                            ),e&&(null==j||j(),C(P.current),h&&(null==b||b()),u&&u())
                        }
                        ,anchorX:f,children:e
                    }
                    ,t)
                }
                )
            }
            )
        }

    }
    ,61285:(e,t,n)=> {
        n.d(t, {
            B:()=>l
        }
        );
        var r,i=n(12115),o=n(52712),s=(r||(r=n.t(i,2)))[" useId ".trim().toString()]||(()=>void 0),a=0;
        function l(e) {
            let[t,n]=i.useState(s());
            return(0,o.N)(()=> {
                e||n(e=>e??String(a++))
            }
            ,[e]),e||(t?`radix-$ {
                t
            }
            `:"")
        }

    }
    ,62098:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("Sun",[["circle", {
            cx:"12",cy:"12",r:"4",key:"4exip2"
        }
        ],["path", {
            d:"M12 2v2",key:"tus03m"
        }
        ],["path", {
            d:"M12 20v2",key:"1lh1kg"
        }
        ],["path", {
            d:"m4.93 4.93 1.41 1.41",key:"149t6j"
        }
        ],["path", {
            d:"m17.66 17.66 1.41 1.41",key:"ptbguv"
        }
        ],["path", {
            d:"M2 12h2",key:"1t8f8n"
        }
        ],["path", {
            d:"M20 12h2",key:"1q8mjw"
        }
        ],["path", {
            d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"
        }
        ],["path", {
            d:"m19.07 4.93-1.41 1.41",key:"1shlcs"
        }
        ]])
    }
    ,62923:(e,t,n)=> {
        n.d(t, {
            f:()=>r
        }
        );
        function r(e,t) {
            return t?1e3/t*e:0
        }

    }
    ,63655:(e,t,n)=> {
        n.d(t, {
            hO:()=>l,sG:()=>a
        }
        );
        var r=n(12115),i=n(47650),o=n(99708),s=n(95155),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=> {
            let n=(0,o.TL)(`Primitive.$ {
                t
            }
            `),i=r.forwardRef((e,r)=> {
                let {
                    asChild:i,...o
                }
                =e;
                return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(i?n:t, {
                    ...o,ref:r
                }
                )
            }
            );
            return i.displayName=`Primitive.$ {
                t
            }
            `, {
                ...e,[t]:i
            }

        }
        , {

        }
        );
        function l(e,t) {
            e&&i.flushSync(()=>e.dispatchEvent(t))
        }

    }
    ,66474:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("ChevronDown",[["path", {
            d:"m6 9 6 6 6-6",key:"qrunsl"
        }
        ]])
    }
    ,68972:(e,t,n)=> {
        n.d(t, {
            B:()=>r
        }
        );
        let r="undefined"!=typeof window
    }
    ,69515:(e,t,n)=> {
        n.d(t, {
            Gt:()=>i,PP:()=>a,WG:()=>o,uv:()=>s
        }
        );
        var r=n(19827);
        let {
            schedule:i,cancel:o,state:s,steps:a
        }
        =(0,n(58437).I)("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:r.l,!0)
    }
    ,69782:(e,t,n)=> {
        n.d(t, {
            x:()=>i
        }
        );
        var r=n(6983);
        function i(e) {
            return(0,r.G)(e)&&"ownerSVGElement"in e
        }

    }
    ,69991:(e,t)=> {
        Object.defineProperty(t,"__esModule", {
            value:!0
        }
        ),!function(e,t) {
            for(var n in t)Object.defineProperty(e,n, {
                enumerable:!0,get:t[n]
            }
            )
        }
        (t, {
            DecodeError:function() {
                return f
            }
            ,MiddlewareNotFoundError:function() {
                return y
            }
            ,MissingStaticPage:function() {
                return g
            }
            ,NormalizeError:function() {
                return m
            }
            ,PageNotFoundError:function() {
                return v
            }
            ,SP:function() {
                return h
            }
            ,ST:function() {
                return p
            }
            ,WEB_VITALS:function() {
                return n
            }
            ,execOnce:function() {
                return r
            }
            ,getDisplayName:function() {
                return l
            }
            ,getLocationOrigin:function() {
                return s
            }
            ,getURL:function() {
                return a
            }
            ,isAbsoluteUrl:function() {
                return o
            }
            ,isResSent:function() {
                return u
            }
            ,loadGetInitialProps:function() {
                return d
            }
            ,normalizeRepeatedSlashes:function() {
                return c
            }
            ,stringifyError:function() {
                return b
            }

        }
        );
        let n=["CLS","FCP","FID","INP","LCP","TTFB"];
        function r(e) {
            let t,n=!1;
            return function() {
                for(var r=arguments.length,i=Array(r),o=0;
                o<r;
                o++)i[o]=arguments[o];
                return n||(n=!0,t=e(...i)),t
            }

        }
        let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>i.test(e);
        function s() {
            let {
                protocol:e,hostname:t,port:n
            }
            =window.location;
            return e+"//"+t+(n?":"+n:"")
        }
        function a() {
            let {
                href:e
            }
            =window.location,t=s();
            return e.substring(t.length)
        }
        function l(e) {
            return"string"==typeof e?e:e.displayName||e.name||"Unknown"
        }
        function u(e) {
            return e.finished||e.headersSent
        }
        function c(e) {
            let t=e.split("?");
            return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")
        }
        async function d(e,t) {
            let n=t.res||t.ctx&&t.ctx.res;
            if(!e.getInitialProps)return t.ctx&&t.Component? {
                pageProps:await d(t.Component,t.ctx)
            }
            : {

            }
            ;
            let r=await e.getInitialProps(t);
            if(n&&u(n))return r;
            if(!r)throw Object.defineProperty(Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.'),"__NEXT_ERROR_CODE", {
                value:"E394",enumerable:!1,configurable:!0
            }
            );
            return r
        }
        let h="undefined"!=typeof performance,p=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);
        class f extends Error {

        }
        class m extends Error {

        }
        class v extends Error {
            constructor(e) {
                super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e
            }

        }
        class g extends Error {
            constructor(e,t) {
                super(),this.message="Failed to load static file for page: "+e+" "+t
            }

        }
        class y extends Error {
            constructor() {
                super(),this.code="ENOENT",this.message="Cannot find the middleware module"
            }

        }
        function b(e) {
            return JSON.stringify( {
                message:e.message,stack:e.stack
            }
            )
        }

    }
    ,71007:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("User",[["path", {
            d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"
        }
        ],["circle", {
            cx:"12",cy:"7",r:"4",key:"17ys0d"
        }
        ]])
    }
    ,71784:(e,t,n)=> {
        n.d(t, {
            Z:()=>o
        }
        );
        var r=n(45818),i=n(33210);
        function o(e) {
            let t=[0];
            return!function(e,t) {
                let n=e[e.length-1];
                for(let o=1;
                o<=t;
                o++) {
                    let s=(0,r.q)(0,t,o);
                    e.push((0,i.k)(n,1,s))
                }

            }
            (t,e.length-1),t
        }

    }
    ,73180:(e,t)=> {
        Object.defineProperty(t,"__esModule", {
            value:!0
        }
        ),Object.defineProperty(t,"errorOnce", {
            enumerable:!0,get:function() {
                return n
            }

        }
        );
        let n=e=> {

        }

    }
    ,74261:(e,t,n)=> {
        let r;
        n.d(t, {
            k:()=>a
        }
        );
        var i=n(23387),o=n(69515);
        function s() {
            r=void 0
        }
        let a= {
            now:()=>(void 0===r&&a.set(o.uv.isProcessing||i.W.useManualTiming?o.uv.timestamp:performance.now()),r),set:e=> {
                r=e,queueMicrotask(s)
            }

        }

    }
    ,74436:(e,t,n)=> {
        n.d(t, {
            k5:()=>c
        }
        );
        var r=n(12115),i= {
            color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0
        }
        ,o=r.createContext&&r.createContext(i),s=["attr","size","title"];
        function a() {
            return(a=Object.assign?Object.assign.bind():function(e) {
                for(var t=1;
                t<arguments.length;
                t++) {
                    var n=arguments[t];
                    for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])
                }
                return e
            }
            ).apply(this,arguments)
        }
        function l(e,t) {
            var n=Object.keys(e);
            if(Object.getOwnPropertySymbols) {
                var r=Object.getOwnPropertySymbols(e);
                t&&(r=r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e,t).enumerable
                }
                )),n.push.apply(n,r)
            }
            return n
        }
        function u(e) {
            for(var t=1;
            t<arguments.length;
            t++) {
                var n=null!=arguments[t]?arguments[t]: {

                }
                ;
                t%2?l(Object(n),!0).forEach(function(t) {
                    var r,i,o;
                    r=e,i=t,o=n[t],(i=function(e) {
                        var t=function(e,t) {
                            if("object"!=typeof e||!e)return e;
                            var n=e[Symbol.toPrimitive];
                            if(void 0!==n) {
                                var r=n.call(e,t||"default");
                                if("object"!=typeof r)return r;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return("string"===t?String:Number)(e)
                        }
                        (e,"string");
                        return"symbol"==typeof t?t:t+""
                    }
                    (i))in r?Object.defineProperty(r,i, {
                        value:o,enumerable:!0,configurable:!0,writable:!0
                    }
                    ):r[i]=o
                }
                ):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t) {
                    Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))
                }
                )
            }
            return e
        }
        function c(e) {
            return t=>r.createElement(d,a( {
                attr:u( {

                }
                ,e.attr)
            }
            ,t),function e(t) {
                return t&&t.map((t,n)=>r.createElement(t.tag,u( {
                    key:n
                }
                ,t.attr),e(t.child)))
            }
            (e.child))
        }
        function d(e) {
            var t=t=> {
                var n, {
                    attr:i,size:o,title:l
                }
                =e,c=function(e,t) {
                    if(null==e)return {

                    }
                    ;
                    var n,r,i=function(e,t) {
                        if(null==e)return {

                        }
                        ;
                        var n= {

                        }
                        ;
                        for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)) {
                            if(t.indexOf(r)>=0)continue;
                            n[r]=e[r]
                        }
                        return n
                    }
                    (e,t);
                    if(Object.getOwnPropertySymbols) {
                        var o=Object.getOwnPropertySymbols(e);
                        for(r=0;
                        r<o.length;
                        r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])
                    }
                    return i
                }
                (e,s),d=o||t.size||"1em";
                return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a( {
                    stroke:"currentColor",fill:"currentColor",strokeWidth:"0"
                }
                ,t.attr,i,c, {
                    className:n,style:u(u( {
                        color:e.color||t.color
                    }
                    ,t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"
                }
                ),l&&r.createElement("title",null,l),e.children)
            }
            ;
            return void 0!==o?r.createElement(o.Consumer,null,e=>t(e)):t(i)
        }

    }
    ,74466:(e,t,n)=> {
        n.d(t, {
            F:()=>s
        }
        );
        var r=n(52596);
        let i=e=>"boolean"==typeof e?`$ {
            e
        }
        `:0===e?"0":e,o=r.$,s=(e,t)=>n=> {
            var r;
            if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);
            let {
                variants:s,defaultVariants:a
            }
            =t,l=Object.keys(s).map(e=> {
                let t=null==n?void 0:n[e],r=null==a?void 0:a[e];
                if(null===t)return null;
                let o=i(t)||i(r);
                return s[e][o]
            }
            ),u=n&&Object.entries(n).reduce((e,t)=> {
                let[n,r]=t;
                return void 0===r||(e[n]=r),e
            }
            , {

            }
            );
            return o(e,l,null==t||null==(r=t.compoundVariants)?void 0:r.reduce((e,t)=> {
                let {
                    class:n,className:r,...i
                }
                =t;
                return Object.entries(i).every(e=> {
                    let[t,n]=e;
                    return Array.isArray(n)?n.includes( {
                        ...a,...u
                    }
                    [t]):( {
                        ...a,...u
                    }
                    )[t]===n
                }
                )?[...e,n,r]:e
            }
            ,[]),null==n?void 0:n.class,null==n?void 0:n.className)
        }

    }
    ,75626:(e,t,n)=> {
        n.d(t, {
            v:()=>i
        }
        );
        var r=n(56668);
        class i {
            constructor() {
                this.subscriptions=[]
            }
            add(e) {
                return(0,r.Kq)(this.subscriptions,e),()=>(0,r.Ai)(this.subscriptions,e)
            }
            notify(e,t,n) {
                let r=this.subscriptions.length;
                if(r)if(1===r)this.subscriptions[0](e,t,n);
                else for(let i=0;
                i<r;
                i++) {
                    let r=this.subscriptions[i];
                    r&&r(e,t,n)
                }

            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length=0
            }

        }

    }
    ,75684:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("Instagram",[["rect", {
            width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"
        }
        ],["path", {
            d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"
        }
        ],["line", {
            x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"
        }
        ]])
    }
    ,78606:(e,t,n)=> {
        n.d(t, {
            j:()=>i,p:()=>s
        }
        );
        let r=e=>t=>"string"==typeof t&&t.startsWith(e),i=r("--"),o=r("var(--"),s=e=>!!o(e)&&a.test(e.split("/*")[0].trim()),a=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
    }
    ,78859:(e,t)=> {
        function n(e) {
            let t= {

            }
            ;
            for(let[n,r]of e.entries()) {
                let e=t[n];
                void 0===e?t[n]=r:Array.isArray(e)?e.push(r):t[n]=[e,r]
            }
            return t
        }
        function r(e) {
            return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)
        }
        function i(e) {
            let t=new URLSearchParams;
            for(let[n,i]of Object.entries(e))if(Array.isArray(i))for(let e of i)t.append(n,r(e));
            else t.set(n,r(i));
            return t
        }
        function o(e) {
            for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;
            r<t;
            r++)n[r-1]=arguments[r];
            for(let t of n) {
                for(let n of t.keys())e.delete(n);
                for(let[n,r]of t.entries())e.append(n,r)
            }
            return e
        }
        Object.defineProperty(t,"__esModule", {
            value:!0
        }
        ),!function(e,t) {
            for(var n in t)Object.defineProperty(e,n, {
                enumerable:!0,get:t[n]
            }
            )
        }
        (t, {
            assign:function() {
                return o
            }
            ,searchParamsToUrlQuery:function() {
                return n
            }
            ,urlQueryToSearchParams:function() {
                return i
            }

        }
        )
    }
    ,80845:(e,t,n)=> {
        n.d(t, {
            t:()=>r
        }
        );
        let r=(0,n(12115).createContext)(null)
    }
    ,82757:(e,t,n)=> {
        Object.defineProperty(t,"__esModule", {
            value:!0
        }
        ),!function(e,t) {
            for(var n in t)Object.defineProperty(e,n, {
                enumerable:!0,get:t[n]
            }
            )
        }
        (t, {
            formatUrl:function() {
                return o
            }
            ,formatWithValidation:function() {
                return a
            }
            ,urlObjectKeys:function() {
                return s
            }

        }
        );
        let r=n(6966)._(n(78859)),i=/https?|ftp|gopher|file/;
        function o(e) {
            let {
                auth:t,hostname:n
            }
            =e,o=e.protocol||"",s=e.pathname||"",a=e.hash||"",l=e.query||"",u=!1;
            t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:n&&(u=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(r.urlQueryToSearchParams(l)));
            let c=e.search||l&&"?"+l||"";
            return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||i.test(o))&&!1!==u?(u="//"+(u||""),s&&"/"!==s[0]&&(s="/"+s)):u||(u=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),""+o+u+(s=s.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+a
        }
        let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];
        function a(e) {
            return o(e)
        }

    }
    ,82885:(e,t,n)=> {
        n.d(t, {
            M:()=>i
        }
        );
        var r=n(12115);
        function i(e) {
            let t=(0,r.useRef)(null);
            return null===t.current&&(t.current=e()),t.current
        }

    }
    ,85185:(e,t,n)=> {
        n.d(t, {
            m:()=>r
        }
        );
        function r(e,t, {
            checkForDefaultPrevented:n=!0
        }
        = {

        }
        ) {
            return function(r) {
                if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)
            }

        }

    }
    ,86151:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("ShoppingBag",[["path", {
            d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"
        }
        ],["path", {
            d:"M3 6h18",key:"d0wm0j"
        }
        ],["path", {
            d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"
        }
        ]])
    }
    ,90869:(e,t,n)=> {
        n.d(t, {
            L:()=>r
        }
        );
        let r=(0,n(12115).createContext)( {

        }
        )
    }
    ,91116:(e,t,n)=> {
        n.d(t, {
            J:()=>r
        }
        );
        let r=(0,n(41917).p)(()=>void 0!==window.ScrollTimeline)
    }
    ,92293:(e,t,n)=> {
        n.d(t, {
            Oh:()=>o
        }
        );
        var r=n(12115),i=0;
        function o() {
            r.useEffect(()=> {
                var e,t;
                let n=document.querySelectorAll("[data-radix-focus-guard]");
                return document.body.insertAdjacentElement("afterbegin",null!=(e=n[0])?e:s()),document.body.insertAdjacentElement("beforeend",null!=(t=n[1])?t:s()),i++,()=> {
                    1===i&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),i--
                }

            }
            ,[])
        }
        function s() {
            let e=document.createElement("span");
            return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e
        }

    }
    ,92664:(e,t,n)=> {
        Object.defineProperty(t,"__esModule", {
            value:!0
        }
        ),Object.defineProperty(t,"isLocalURL", {
            enumerable:!0,get:function() {
                return o
            }

        }
        );
        let r=n(69991),i=n(87102);
        function o(e) {
            if(!(0,r.isAbsoluteUrl)(e))return!0;
            try {
                let t=(0,r.getLocationOrigin)(),n=new URL(e,t);
                return n.origin===t&&(0,i.hasBasePath)(n.pathname)
            }
            catch(e) {
                return!1
            }

        }

    }
    ,93509:(e,t,n)=> {
        n.d(t, {
            A:()=>r
        }
        );
        let r=(0,n(19946).A)("Moon",[["path", {
            d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"
        }
        ]])
    }
    ,96848:(e,t,n)=> {
        function r(e) {
            return null!==e&&"object"==typeof e&&"function"==typeof e.start
        }
        function i(e) {
            let t=[ {

            }
            , {

            }
            ];
            return e?.values.forEach((e,n)=> {
                t[0][n]=e.get(),t[1][n]=e.getVelocity()
            }
            ),t
        }
        function o(e,t,n,r) {
            if("function"==typeof t) {
                let[o,s]=i(r);
                t=t(void 0!==n?n:e.custom,o,s)
            }
            if("string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t) {
                let[o,s]=i(r);
                t=t(void 0!==n?n:e.custom,o,s)
            }
            return t
        }
        function s(e,t,n) {
            let r=e.getProps();
            return o(r,t,void 0!==n?n:r.custom,e)
        }
        function a(e,t) {
            return e?.[t]??e?.default??e
        }
        n.d(t, {
            P:()=>iW
        }
        );
        var l,u,c=n(69515);
        let d=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],h=new Set(d),p=new Set(["width","height","top","left","right","bottom",...d]);
        var f=n(60098);
        let m=e=>Array.isArray(e);
        var v=n(23387);
        let g=e=>!!(e&&e.getVelocity);
        function y(e,t) {
            let n=e.getValue("willChange");
            if(g(n)&&n.add)return n.add(t);
            if(!n&&v.W.WillChange) {
                let n=new v.W.WillChange("auto");
                e.addValue("willChange",n),n.add(t)
            }

        }
        let b=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),x="data-"+b("framerAppearId");
        var w=n(53191),E=n(53678);
        let P=e=>1e3*e,T=e=>e/1e3;
        var S=n(74261);
        let k= {
            layout:0,mainThread:0,waapi:0
        }
        ;
        var A=n(26087);
        let C=e=> {
            let t=( {
                timestamp:t
            }
            )=>e(t);
            return {
                start:(e=!0)=>c.Gt.update(t,e),stop:()=>(0,c.WG)(t),now:()=>c.uv.isProcessing?c.uv.timestamp:S.k.now()
            }

        }
        ,M=(e,t,n=10)=> {
            let r="",i=Math.max(Math.round(t/n),2);
            for(let t=0;
            t<i;
            t++)r+=Math.round(1e4*e(t/(i-1)))/1e4+", ";
            return`linear($ {
                r.substring(0,r.length-2)
            }
            )`
        }
        ;
        function j(e) {
            let t=0,n=e.next(t);
            for(;
            !n.done&&t<2e4;
            )t+=50,n=e.next(t);
            return t>=2e4?1/0:t
        }
        var R=n(62923);
        function D(e,t,n) {
            let r=Math.max(t-5,0);
            return(0,R.f)(n-e(r),t-r)
        }
        let O= {
            stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed: {
                granular:.01,default:2
            }
            ,restDelta: {
                granular:.005,default:.5
            }
            ,minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1
        }
        ;
        var V=n(54542);
        function L(e,t) {
            return e*Math.sqrt(1-t*t)
        }
        let N=["duration","bounce"],F=["stiffness","damping","mass"];
        function I(e,t) {
            return t.some(t=>void 0!==e[t])
        }
        function B(e=O.visualDuration,t=O.bounce) {
            let n,r="object"!=typeof e? {
                visualDuration:e,keyframes:[0,1],bounce:t
            }
            :e, {
                restSpeed:i,restDelta:o
            }
            =r,s=r.keyframes[0],a=r.keyframes[r.keyframes.length-1],l= {
                done:!1,value:s
            }
            , {
                stiffness:u,damping:c,mass:d,duration:h,velocity:p,isResolvedFromDuration:f
            }
            =function(e) {
                let t= {
                    velocity:O.velocity,stiffness:O.stiffness,damping:O.damping,mass:O.mass,isResolvedFromDuration:!1,...e
                }
                ;
                if(!I(e,F)&&I(e,N))if(e.visualDuration) {
                    let n=2*Math.PI/(1.2*e.visualDuration),r=n*n,i=2*(0,E.q)(.05,1,1-(e.bounce||0))*Math.sqrt(r);
                    t= {
                        ...t,mass:O.mass,stiffness:r,damping:i
                    }

                }
                else {
                    let n=function( {
                        duration:e=O.duration,bounce:t=O.bounce,velocity:n=O.velocity,mass:r=O.mass
                    }
                    ) {
                        let i,o;
                        (0,V.$)(e<=P(O.maxDuration),"Spring duration must be 10 seconds or less");
                        let s=1-t;
                        s=(0,E.q)(O.minDamping,O.maxDamping,s),e=(0,E.q)(O.minDuration,O.maxDuration,T(e)),s<1?(i=t=> {
                            let r=t*s,i=r*e;
                            return .001-(r-n)/L(t,s)*Math.exp(-i)
                        }
                        ,o=t=> {
                            let r=t*s*e,o=Math.pow(s,2)*Math.pow(t,2)*e,a=Math.exp(-r),l=L(Math.pow(t,2),s);
                            return(r*n+n-o)*a*(-i(t)+.001>0?-1:1)/l
                        }
                        ):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),o=t=>e*e*(n-t)*Math.exp(-t*e));
                        let a=function(e,t,n) {
                            let r=n;
                            for(let n=1;
                            n<12;
                            n++)r-=e(r)/t(r);
                            return r
                        }
                        (i,o,5/e);
                        if(e=P(e),isNaN(a))return {
                            stiffness:O.stiffness,damping:O.damping,duration:e
                        }
                        ;
                         {
                            let t=Math.pow(a,2)*r;
                            return {
                                stiffness:t,damping:2*s*Math.sqrt(r*t),duration:e
                            }

                        }

                    }
                    (e);
                    (t= {
                        ...t,...n,mass:O.mass
                    }
                    ).isResolvedFromDuration=!0
                }
                return t
            }
            ( {
                ...r,velocity:-T(r.velocity||0)
            }
            ),m=p||0,v=c/(2*Math.sqrt(u*d)),g=a-s,y=T(Math.sqrt(u/d)),b=5>Math.abs(g);
            if(i||(i=b?O.restSpeed.granular:O.restSpeed.default),o||(o=b?O.restDelta.granular:O.restDelta.default),v<1) {
                let e=L(y,v);
                n=t=>a-Math.exp(-v*y*t)*((m+v*y*g)/e*Math.sin(e*t)+g*Math.cos(e*t))
            }
            else if(1===v)n=e=>a-Math.exp(-y*e)*(g+(m+y*g)*e);
            else {
                let e=y*Math.sqrt(v*v-1);
                n=t=> {
                    let n=Math.exp(-v*y*t),r=Math.min(e*t,300);
                    return a-n*((m+v*y*g)*Math.sinh(r)+e*g*Math.cosh(r))/e
                }

            }
            let x= {
                calculatedDuration:f&&h||null,next:e=> {
                    let t=n(e);
                    if(f)l.done=e>=h;
                    else {
                        let r=0===e?m:0;
                        v<1&&(r=0===e?P(m):D(n,e,t));
                        let s=Math.abs(a-t)<=o;
                        l.done=Math.abs(r)<=i&&s
                    }
                    return l.value=l.done?a:t,l
                }
                ,toString:()=> {
                    let e=Math.min(j(x),2e4),t=M(t=>x.next(e*t).value,e,30);
                    return e+"ms "+t
                }
                ,toTransition:()=> {

                }

            }
            ;
            return x
        }
        function W( {
            keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c
        }
        ) {
            let d,h,p=e[0],f= {
                done:!1,value:p
            }
            ,m=e=>void 0!==a&&e<a||void 0!==l&&e>l,v=e=>void 0===a?l:void 0===l||Math.abs(a-e)<Math.abs(l-e)?a:l,g=n*t,y=p+g,b=void 0===s?y:s(y);
            b!==y&&(g=b-p);
            let x=e=>-g*Math.exp(-e/r),w=e=>b+x(e),E=e=> {
                let t=x(e),n=w(e);
                f.done=Math.abs(t)<=u,f.value=f.done?b:n
            }
            ,P=e=> {
                m(f.value)&&(d=e,h=B( {
                    keyframes:[f.value,v(f.value)],velocity:D(w,e,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:c
                }
                ))
            }
            ;
            return P(0), {
                calculatedDuration:null,next:e=> {
                    let t=!1;
                    return(h||void 0!==d||(t=!0,E(e),P(e)),void 0!==d&&e>=d)?h.next(e-d):(t||E(e),f)
                }

            }

        }
        B.applyToOptions=e=> {
            let t=function(e,t=100,n) {
                let r=n( {
                    ...e,keyframes:[0,t]
                }
                ),i=Math.min(j(r),2e4);
                return {
                    type:"keyframes",ease:e=>r.next(i*e).value/t,duration:T(i)
                }

            }
            (e,100,B);
            return e.ease=t.ease,e.duration=P(t.duration),e.type="keyframes",e
        }
        ;
        var U=n(19827);
        let z=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;
        function $(e,t,n,r) {
            if(e===t&&n===r)return U.l;
            let i=t=>(function(e,t,n,r,i) {
                let o,s,a=0;
                do(o=z(s=t+(n-t)/2,r,i)-e)>0?n=s:t=s;
                while(Math.abs(o)>1e-7&&++a<12);
                return s
            }
            )(t,0,1,e,n);
            return e=>0===e||1===e?e:z(i(e),t,r)
        }
        let _=$(.42,0,1,1),G=$(0,0,.58,1),q=$(.42,0,.58,1),K=e=>Array.isArray(e)&&"number"!=typeof e[0],X=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,H=e=>t=>1-e(1-t),Y=$(.33,1.53,.69,.99),Q=H(Y),Z=X(Q),J=e=>(e*=2)<1?.5*Q(e):.5*(2-Math.pow(2,-10*(e-1))),ee=e=>1-Math.sin(Math.acos(e)),et=H(ee),en=X(ee),er=e=>Array.isArray(e)&&"number"==typeof e[0],ei= {
            linear:U.l,easeIn:_,easeInOut:q,easeOut:G,circIn:ee,circInOut:en,circOut:et,backIn:Q,backInOut:Z,backOut:Y,anticipate:J
        }
        ,eo=e=>"string"==typeof e,es=e=> {
            if(er(e)) {
                (0,V.V)(4===e.length,"Cubic bezier arrays must contain four numerical values.");
                let[t,n,r,i]=e;
                return $(t,n,r,i)
            }
            return eo(e)?((0,V.V)(void 0!==ei[e],`Invalid easing type '${e}'`),ei[e]):e
        }
        ;
        var ea=n(6775),el=n(71784);
        function eu( {
            duration:e=300,keyframes:t,times:n,ease:r="easeInOut"
        }
        ) {
            var i;
            let o=K(r)?r.map(es):es(r),s= {
                done:!1,value:t[0]
            }
            ,a=(i=n&&n.length===t.length?n:(0,el.Z)(t),i.map(t=>t*e)),l=(0,ea.G)(a,t, {
                ease:Array.isArray(o)?o:t.map(()=>o||q).splice(0,t.length-1)
            }
            );
            return {
                calculatedDuration:e,next:t=>(s.value=l(t),s.done=t>=e,s)
            }

        }
        let ec=e=>null!==e;
        function ed(e, {
            repeat:t,repeatType:n="loop"
        }
        ,r,i=1) {
            let o=e.filter(ec),s=i<0||t&&"loop"!==n&&t%2==1?0:o.length-1;
            return s&&void 0!==r?r:o[s]
        }
        let eh= {
            decay:W,inertia:W,tween:eu,keyframes:eu,spring:B
        }
        ;
        function ep(e) {
            "string"==typeof e.type&&(e.type=eh[e.type])
        }
        class ef {
            constructor() {
                this.updateFinished()
            }
            get finished() {
                return this._finished
            }
            updateFinished() {
                this._finished=new Promise(e=> {
                    this.resolve=e
                }
                )
            }
            notifyFinished() {
                this.resolve()
            }
            then(e,t) {
                return this.finished.then(e,t)
            }

        }
        let em=e=>e/100;
        class ev extends ef {
            constructor(e) {
                super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=> {
                    let {
                        motionValue:e
                    }
                    =this.options;
                    e&&e.updatedAt!==S.k.now()&&this.tick(S.k.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())
                }
                ,k.mainThread++,this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()
            }
            initAnimation() {
                let {
                    options:e
                }
                =this;
                ep(e);
                let {
                    type:t=eu,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:o=0
                }
                =e, {
                    keyframes:s
                }
                =e,a=t||eu;
                a!==eu&&"number"!=typeof s[0]&&(this.mixKeyframes=(0,w.F)(em,(0,A.j)(s[0],s[1])),s=[0,100]);
                let l=a( {
                    ...e,keyframes:s
                }
                );
                "mirror"===i&&(this.mirroredGenerator=a( {
                    ...e,keyframes:[...s].reverse(),velocity:-o
                }
                )),null===l.calculatedDuration&&(l.calculatedDuration=j(l));
                let {
                    calculatedDuration:u
                }
                =l;
                this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=l
            }
            updateTime(e) {
                let t=Math.round(e-this.startTime)*this.playbackSpeed;
                null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t
            }
            tick(e,t=!1) {
                let {
                    generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:o,resolvedDuration:s,calculatedDuration:a
                }
                =this;
                if(null===this.startTime)return n.next(0);
                let {
                    delay:l=0,keyframes:u,repeat:c,repeatType:d,repeatDelay:h,type:p,onUpdate:f,finalKeyframe:m
                }
                =this.options;
                this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);
                let v=this.currentTime-l*(this.playbackSpeed>=0?1:-1),g=this.playbackSpeed>=0?v<0:v>r;
                this.currentTime=Math.max(v,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=r);
                let y=this.currentTime,b=n;
                if(c) {
                    let e=Math.min(this.currentTime,r)/s,t=Math.floor(e),n=e%1;
                    !n&&e>=1&&(n=1),1===n&&t--,(t=Math.min(t,c+1))%2&&("reverse"===d?(n=1-n,h&&(n-=h/s)):"mirror"===d&&(b=o)),y=(0,E.q)(0,1,n)*s
                }
                let x=g? {
                    done:!1,value:u[0]
                }
                :b.next(y);
                i&&(x.value=i(x.value));
                let {
                    done:w
                }
                =x;
                g||null===a||(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);
                let P=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);
                return P&&p!==W&&(x.value=ed(u,this.options,m,this.speed)),f&&f(x.value),P&&this.finish(),x
            }
            then(e,t) {
                return this.finished.then(e,t)
            }
            get duration() {
                return T(this.calculatedDuration)
            }
            get time() {
                return T(this.currentTime)
            }
            set time(e) {
                e=P(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(e) {
                this.updateTime(S.k.now());
                let t=this.playbackSpeed!==e;
                this.playbackSpeed=e,t&&(this.time=T(this.currentTime))
            }
            play() {
                if(this.isStopped)return;
                let {
                    driver:e=C,startTime:t
                }
                =this.options;
                this.driver||(this.driver=e(e=>this.tick(e))),this.options.onPlay?.();
                let n=this.driver.now();
                "finished"===this.state?(this.updateFinished(),this.startTime=n):null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()
            }
            pause() {
                this.state="paused",this.updateTime(S.k.now()),this.holdTime=this.currentTime
            }
            complete() {
                "running"!==this.state&&this.play(),this.state="finished",this.holdTime=null
            }
            finish() {
                this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()
            }
            cancel() {
                this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()
            }
            teardown() {
                this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,k.mainThread--
            }
            stopDriver() {
                this.driver&&(this.driver.stop(),this.driver=void 0)
            }
            sample(e) {
                return this.startTime=0,this.tick(e,!0)
            }
            attachTimeline(e) {
                return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)
            }

        }
        let eg=e=>180*e/Math.PI,ey=e=>ex(eg(Math.atan2(e[1],e[0]))),eb= {
            x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:ey,rotateZ:ey,skewX:e=>eg(Math.atan(e[1])),skewY:e=>eg(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2
        }
        ,ex=e=>((e%=360)<0&&(e+=360),e),ew=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),eE=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),eP= {
            x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ew,scaleY:eE,scale:e=>(ew(e)+eE(e))/2,rotateX:e=>ex(eg(Math.atan2(e[6],e[5]))),rotateY:e=>ex(eg(Math.atan2(-e[2],e[0]))),rotateZ:ey,rotate:ey,skewX:e=>eg(Math.atan(e[4])),skewY:e=>eg(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2
        }
        ;
        function eT(e) {
            return+!!e.includes("scale")
        }
        function eS(e,t) {
            let n,r;
            if(!e||"none"===e)return eT(t);
            let i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
            if(i)n=eP,r=i;
            else {
                let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
                n=eb,r=t
            }
            if(!r)return eT(t);
            let o=n[t],s=r[1].split(",").map(eA);
            return"function"==typeof o?o(s):s[o]
        }
        let ek=(e,t)=> {
            let {
                transform:n="none"
            }
            =getComputedStyle(e);
            return eS(n,t)
        }
        ;
        function eA(e) {
            return parseFloat(e.trim())
        }
        var eC=n(57887),eM=n(34158);
        let ej=e=>e===eC.ai||e===eM.px,eR=new Set(["x","y","z"]),eD=d.filter(e=>!eR.has(e)),eO= {
            width:( {
                x:e
            }
            , {
                paddingLeft:t="0",paddingRight:n="0"
            }
            )=>e.max-e.min-parseFloat(t)-parseFloat(n),height:( {
                y:e
            }
            , {
                paddingTop:t="0",paddingBottom:n="0"
            }
            )=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e, {
                top:t
            }
            )=>parseFloat(t),left:(e, {
                left:t
            }
            )=>parseFloat(t),bottom:( {
                y:e
            }
            , {
                top:t
            }
            )=>parseFloat(t)+(e.max-e.min),right:( {
                x:e
            }
            , {
                left:t
            }
            )=>parseFloat(t)+(e.max-e.min),x:(e, {
                transform:t
            }
            )=>eS(t,"x"),y:(e, {
                transform:t
            }
            )=>eS(t,"y")
        }
        ;
        eO.translateX=eO.x,eO.translateY=eO.y;
        let eV=new Set,eL=!1,eN=!1,eF=!1;
        function eI() {
            if(eN) {
                let e=Array.from(eV).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;
                t.forEach(e=> {
                    let t=function(e) {
                        let t=[];
                        return eD.forEach(n=> {
                            let r=e.getValue(n);
                            void 0!==r&&(t.push([n,r.get()]),r.set(+!!n.startsWith("scale")))
                        }
                        ),t
                    }
                    (e);
                    t.length&&(n.set(e,t),e.render())
                }
                ),e.forEach(e=>e.measureInitialState()),t.forEach(e=> {
                    e.render();
                    let t=n.get(e);
                    t&&t.forEach(([t,n])=> {
                        e.getValue(t)?.set(n)
                    }
                    )
                }
                ),e.forEach(e=>e.measureEndState()),e.forEach(e=> {
                    void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)
                }
                )
            }
            eN=!1,eL=!1,eV.forEach(e=>e.complete(eF)),eV.clear()
        }
        function eB() {
            eV.forEach(e=> {
                e.readKeyframes(),e.needsMeasurement&&(eN=!0)
            }
            )
        }
        class eW {
            constructor(e,t,n,r,i,o=!1) {
                this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=o
            }
            scheduleResolve() {
                this.state="scheduled",this.isAsync?(eV.add(this),eL||(eL=!0,c.Gt.read(eB),c.Gt.resolveKeyframes(eI))):(this.readKeyframes(),this.complete())
            }
            readKeyframes() {
                let {
                    unresolvedKeyframes:e,name:t,element:n,motionValue:r
                }
                =this;
                if(null===e[0]) {
                    let i=r?.get(),o=e[e.length-1];
                    if(void 0!==i)e[0]=i;
                    else if(n&&t) {
                        let r=n.readValue(t,o);
                        null!=r&&(e[0]=r)
                    }
                    void 0===e[0]&&(e[0]=o),r&&void 0===i&&r.set(e[0])
                }
                for(let t=1;
                t<e.length;
                t++)e[t]??(e[t]=e[t-1])
            }
            setFinalKeyframe() {

            }
            measureInitialState() {

            }
            renderEndStyles() {

            }
            measureEndState() {

            }
            complete(e=!1) {
                this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),eV.delete(this)
            }
            cancel() {
                "scheduled"===this.state&&(eV.delete(this),this.state="pending")
            }
            resume() {
                "pending"===this.state&&this.scheduleResolve()
            }

        }
        let eU=e=>e.startsWith("--");
        var ez=n(91116),e$=n(24744),e_=n(41917);
        let eG= {

        }
        ,eq=function(e,t) {
            let n=(0,e_.p)(e);
            return()=>eG[t]??n()
        }
        (()=> {
            try {
                document.createElement("div").animate( {
                    opacity:0
                }
                , {
                    easing:"linear(0, 1)"
                }
                )
            }
            catch(e) {
                return!1
            }
            return!0
        }
        ,"linearEasing"),eK=([e,t,n,r])=>`cubic-bezier($ {
            e
        }
        , $ {
            t
        }
        , $ {
            n
        }
        , $ {
            r
        }
        )`,eX= {
            linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:eK([0,.65,.55,1]),circOut:eK([.55,0,1,.45]),backIn:eK([.31,.01,.66,-.59]),backOut:eK([.33,1.53,.69,.99])
        }
        ;
        function eH(e) {
            return"function"==typeof e&&"applyToOptions"in e
        }
        class eY extends ef {
            constructor(e) {
                if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;
                let {
                    element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:o=!1,finalKeyframe:s,onComplete:a
                }
                =e;
                this.isPseudoElement=!!i,this.allowFlatten=o,this.options=e,(0,V.V)("string"!=typeof e.type,'animateMini doesn\'t support "type" as a string. Did you mean to import { spring } from "motion"?');
                let l=function( {
                    type:e,...t
                }
                ) {
                    return eH(e)&&eq()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)
                }
                (e);
                this.animation=function(e,t,n, {
                    delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l
                }
                = {

                }
                ,u) {
                    let c= {
                        [t]:n
                    }
                    ;
                    l&&(c.offset=l);
                    let d=function e(t,n) {
                        if(t)return"function"==typeof t?eq()?M(t,n):"ease-out":er(t)?eK(t):Array.isArray(t)?t.map(t=>e(t,n)||eX.easeOut):eX[t]
                    }
                    (a,i);
                    Array.isArray(d)&&(c.easing=d),e$.Q.value&&k.waapi++;
                    let h= {
                        delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:"reverse"===s?"alternate":"normal"
                    }
                    ;
                    u&&(h.pseudoElement=u);
                    let p=e.animate(c,h);
                    return e$.Q.value&&p.finished.finally(()=> {
                        k.waapi--
                    }
                    ),p
                }
                (t,n,r,l,i),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=> {
                    if(this.finishedTime=this.time,!i) {
                        let e=ed(r,this.options,s,this.speed);
                        this.updateMotionValue?this.updateMotionValue(e):function(e,t,n) {
                            eU(t)?e.style.setProperty(t,n):e.style[t]=n
                        }
                        (t,n,e),this.animation.cancel()
                    }
                    a?.(),this.notifyFinished()
                }

            }
            play() {
                this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())
            }
            pause() {
                this.animation.pause()
            }
            complete() {
                this.animation.finish?.()
            }
            cancel() {
                try {
                    this.animation.cancel()
                }
                catch(e) {

                }

            }
            stop() {
                if(this.isStopped)return;
                this.isStopped=!0;
                let {
                    state:e
                }
                =this;
                "idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())
            }
            commitStyles() {
                this.isPseudoElement||this.animation.commitStyles?.()
            }
            get duration() {
                return T(Number(this.animation.effect?.getComputedTiming?.().duration||0))
            }
            get time() {
                return T(Number(this.animation.currentTime)||0)
            }
            set time(e) {
                this.finishedTime=null,this.animation.currentTime=P(e)
            }
            get speed() {
                return this.animation.playbackRate
            }
            set speed(e) {
                e<0&&(this.finishedTime=null),this.animation.playbackRate=e
            }
            get state() {
                return null!==this.finishedTime?"finished":this.animation.playState
            }
            get startTime() {
                return Number(this.animation.startTime)
            }
            set startTime(e) {
                this.animation.startTime=e
            }
            attachTimeline( {
                timeline:e,observe:t
            }
            ) {
                return(this.allowFlatten&&this.animation.effect?.updateTiming( {
                    easing:"linear"
                }
                ),this.animation.onfinish=null,e&&(0,ez.J)())?(this.animation.timeline=e,U.l):t(this)
            }

        }
        let eQ= {
            anticipate:J,backInOut:Z,circInOut:en
        }
        ;
        class eZ extends eY {
            constructor(e) {
                !function(e) {
                    "string"==typeof e.ease&&e.ease in eQ&&(e.ease=eQ[e.ease])
                }
                (e),ep(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e
            }
            updateMotionValue(e) {
                let {
                    motionValue:t,onUpdate:n,onComplete:r,element:i,...o
                }
                =this.options;
                if(!t)return;
                if(void 0!==e)return void t.set(e);
                let s=new ev( {
                    ...o,autoplay:!1
                }
                ),a=P(this.finishedTime??this.time);
                t.setWithVelocity(s.sample(a-10).value,s.sample(a).value,10),s.stop()
            }

        }
        var eJ=n(60010);
        let e0=(e,t)=>"zIndex"!==t&&!!("number"==typeof e||Array.isArray(e)||"string"==typeof e&&(eJ.f.test(e)||"0"===e)&&!e.startsWith("url("));
        var e1=n(27351);
        let e2=new Set(["opacity","clipPath","filter","transform"]),e5=(0,e_.p)(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));
        class e6 extends ef {
            constructor( {
                autoplay:e=!0,delay:t=0,type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o="loop",keyframes:s,name:a,motionValue:l,element:u,...c
            }
            ) {
                super(),this.stop=()=> {
                    this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()
                }
                ,this.createdAt=S.k.now();
                let d= {
                    autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:o,name:a,motionValue:l,element:u,...c
                }
                ,h=u?.KeyframeResolver||eW;
                this.keyframeResolver=new h(s,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),a,l,u),this.keyframeResolver?.scheduleResolve()
            }
            onKeyframesResolved(e,t,n,r) {
                this.keyframeResolver=void 0;
                let {
                    name:i,type:o,velocity:s,delay:a,isHandoff:l,onUpdate:u
                }
                =n;
                this.resolvedAt=S.k.now(),!function(e,t,n,r) {
                    let i=e[0];
                    if(null===i)return!1;
                    if("display"===t||"visibility"===t)return!0;
                    let o=e[e.length-1],s=e0(i,t),a=e0(o,t);
                    return(0,V.$)(s===a,`You are trying to animate $ {
                        t
                    }
                     from "${i}" to "${o}". $ {
                        i
                    }
                     is not an animatable value - to enable this animation set $ {
                        i
                    }
                     to a value animatable to $ {
                        o
                    }
                     via the \`style\` property.`),!!s&&!!a&&(function(e) {
                        let t=e[0];
                        if(1===e.length)return!0;
                        for(let n=0;
                        n<e.length;
                        n++)if(e[n]!==t)return!0
                    }
                    (e)||("spring"===n||eH(n))&&r)
                }
                (e,i,o,s)&&((v.W.instantAnimations||!a)&&u?.(ed(e,n,t)),e[0]=e[e.length-1],n.duration=0,n.repeat=0);
                let c= {
                    startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e
                }
                ,d=!l&&function(e) {
                    let {
                        motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s
                    }
                    =e;
                    if(!(0,e1.s)(t?.owner?.current))return!1;
                    let {
                        onUpdate:a,transformTemplate:l
                    }
                    =t.owner.getProps();
                    return e5()&&n&&e2.has(n)&&("transform"!==n||!l)&&!a&&!r&&"mirror"!==i&&0!==o&&"inertia"!==s
                }
                (c)?new eZ( {
                    ...c,element:c.motionValue.owner.current
                }
                ):new ev(c);
                d.finished.then(()=>this.notifyFinished()).catch(U.l),this.pendingTimeline&&(this.stopTimeline=d.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=d
            }
            get finished() {
                return this._animation?this.animation.finished:this._finished
            }
            then(e,t) {
                return this.finished.finally(e).then(()=> {

                }
                )
            }
            get animation() {
                return this._animation||(this.keyframeResolver?.resume(),eF=!0,eB(),eI(),eF=!1),this._animation
            }
            get duration() {
                return this.animation.duration
            }
            get time() {
                return this.animation.time
            }
            set time(e) {
                this.animation.time=e
            }
            get speed() {
                return this.animation.speed
            }
            get state() {
                return this.animation.state
            }
            set speed(e) {
                this.animation.speed=e
            }
            get startTime() {
                return this.animation.startTime
            }
            attachTimeline(e) {
                return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()
            }
            play() {
                this.animation.play()
            }
            pause() {
                this.animation.pause()
            }
            complete() {
                this.animation.complete()
            }
            cancel() {
                this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()
            }

        }
        let e9=e=>null!==e,e4= {
            type:"spring",stiffness:500,damping:25,restSpeed:10
        }
        ,e3=e=>( {
            type:"spring",stiffness:550,damping:0===e?2*Math.sqrt(550):30,restSpeed:10
        }
        ),e8= {
            type:"keyframes",duration:.8
        }
        ,e7= {
            type:"keyframes",ease:[.25,.1,.35,1],duration:.3
        }
        ,te=(e, {
            keyframes:t
        }
        )=>t.length>2?e8:h.has(e)?e.startsWith("scale")?e3(t[1]):e4:e7,tt=(e,t,n,r= {

        }
        ,i,o)=>s=> {
            let l=a(r,e)|| {

            }
            ,u=l.delay||r.delay||0, {
                elapsed:d=0
            }
            =r;
            d-=P(u);
            let h= {
                keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-d,onUpdate:e=> {
                    t.set(e),l.onUpdate&&l.onUpdate(e)
                }
                ,onComplete:()=> {
                    s(),l.onComplete&&l.onComplete()
                }
                ,name:e,motionValue:t,element:o?void 0:i
            }
            ;
            !function( {
                when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c
            }
            ) {
                return!!Object.keys(c).length
            }
            (l)&&Object.assign(h,te(e,h)),h.duration&&(h.duration=P(h.duration)),h.repeatDelay&&(h.repeatDelay=P(h.repeatDelay)),void 0!==h.from&&(h.keyframes[0]=h.from);
            let p=!1;
            if(!1!==h.type&&(0!==h.duration||h.repeatDelay)||(h.duration=0,0===h.delay&&(p=!0)),(v.W.instantAnimations||v.W.skipAnimations)&&(p=!0,h.duration=0,h.delay=0),h.allowFlatten=!l.type&&!l.ease,p&&!o&&void 0!==t.get()) {
                let e=function(e, {
                    repeat:t,repeatType:n="loop"
                }
                ,r) {
                    let i=e.filter(e9),o=t&&"loop"!==n&&t%2==1?0:i.length-1;
                    return i[o]
                }
                (h.keyframes,l);
                if(void 0!==e)return void c.Gt.update(()=> {
                    h.onUpdate(e),h.onComplete()
                }
                )
            }
            return l.isSync?new ev(h):new e6(h)
        }
        ;
        function tn(e,t, {
            delay:n=0,transitionOverride:r,type:i
        }
        = {

        }
        ) {
            let {
                transition:o=e.getDefaultTransition(),transitionEnd:l,...u
            }
            =t;
            r&&(o=r);
            let d=[],h=i&&e.animationState&&e.animationState.getState()[i];
            for(let t in u) {
                let r=e.getValue(t,e.latestValues[t]??null),i=u[t];
                if(void 0===i||h&&function( {
                    protectedKeys:e,needsAnimating:t
                }
                ,n) {
                    let r=e.hasOwnProperty(n)&&!0!==t[n];
                    return t[n]=!1,r
                }
                (h,t))continue;
                let s= {
                    delay:n,...a(o|| {

                    }
                    ,t)
                }
                ,l=r.get();
                if(void 0!==l&&!r.isAnimating&&!Array.isArray(i)&&i===l&&!s.velocity)continue;
                let f=!1;
                if(window.MotionHandoffAnimation) {
                    let n=e.props[x];
                    if(n) {
                        let e=window.MotionHandoffAnimation(n,t,c.Gt);
                        null!==e&&(s.startTime=e,f=!0)
                    }

                }
                y(e,t),r.start(tt(t,r,i,e.shouldReduceMotion&&p.has(t)? {
                    type:!1
                }
                :s,e,f));
                let m=r.animation;
                m&&d.push(m)
            }
            return l&&Promise.all(d).then(()=> {
                c.Gt.update(()=> {
                    l&&function(e,t) {
                        let {
                            transitionEnd:n= {

                            }
                            ,transition:r= {

                            }
                            ,...i
                        }
                        =s(e,t)|| {

                        }
                        ;
                        for(let t in i= {
                            ...i,...n
                        }
                        ) {
                            var o;
                            let n=m(o=i[t])?o[o.length-1]||0:o;
                            e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,(0,f.OQ)(n))
                        }

                    }
                    (e,l)
                }
                )
            }
            ),d
        }
        function tr(e,t,n= {

        }
        ) {
            let r=s(e,t,"exit"===n.type?e.presenceContext?.custom:void 0), {
                transition:i=e.getDefaultTransition()|| {

                }

            }
            =r|| {

            }
            ;
            n.transitionOverride&&(i=n.transitionOverride);
            let o=r?()=>Promise.all(tn(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(r=0)=> {
                let {
                    delayChildren:o=0,staggerChildren:s,staggerDirection:a
                }
                =i;
                return function(e,t,n=0,r=0,i=1,o) {
                    let s=[],a=(e.variantChildren.size-1)*r,l=1===i?(e=0)=>e*r:(e=0)=>a-e*r;
                    return Array.from(e.variantChildren).sort(ti).forEach((e,r)=> {
                        e.notify("AnimationStart",t),s.push(tr(e,t, {
                            ...o,delay:n+l(r)
                        }
                        ).then(()=>e.notify("AnimationComplete",t)))
                    }
                    ),Promise.all(s)
                }
                (e,t,o+r,s,a,n)
            }
            :()=>Promise.resolve(), {
                when:l
            }
            =i;
            if(!l)return Promise.all([o(),a(n.delay)]);
             {
                let[e,t]="beforeChildren"===l?[o,a]:[a,o];
                return e().then(()=>t())
            }

        }
        function ti(e,t) {
            return e.sortNodePosition(t)
        }
        function to(e,t) {
            if(!Array.isArray(t))return!1;
            let n=t.length;
            if(n!==e.length)return!1;
            for(let r=0;
            r<n;
            r++)if(t[r]!==e[r])return!1;
            return!0
        }
        function ts(e) {
            return"string"==typeof e||Array.isArray(e)
        }
        let ta=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],tl=["initial",...ta],tu=tl.length,tc=[...ta].reverse(),td=ta.length;
        function th(e=!1) {
            return {
                isActive:e,protectedKeys: {

                }
                ,needsAnimating: {

                }
                ,prevResolvedValues: {

                }

            }

        }
        function tp() {
            return {
                animate:th(!0),whileInView:th(),whileHover:th(),whileTap:th(),whileDrag:th(),whileFocus:th(),exit:th()
            }

        }
        class tf {
            constructor(e) {
                this.isMounted=!1,this.node=e
            }
            update() {

            }

        }
        class tm extends tf {
            constructor(e) {
                super(e),e.animationState||(e.animationState=function(e) {
                    let t=t=>Promise.all(t.map(( {
                        animation:t,options:n
                    }
                    )=>(function(e,t,n= {

                    }
                    ) {
                        let r;
                        if(e.notify("AnimationStart",t),Array.isArray(t))r=Promise.all(t.map(t=>tr(e,t,n)));
                        else if("string"==typeof t)r=tr(e,t,n);
                        else {
                            let i="function"==typeof t?s(e,t,n.custom):t;
                            r=Promise.all(tn(e,i,n))
                        }
                        return r.then(()=> {
                            e.notify("AnimationComplete",t)
                        }
                        )
                    }
                    )(e,t,n))),n=tp(),i=!0,o=t=>(n,r)=> {
                        let i=s(e,r,"exit"===t?e.presenceContext?.custom:void 0);
                        if(i) {
                            let {
                                transition:e,transitionEnd:t,...r
                            }
                            =i;
                            n= {
                                ...n,...r,...t
                            }

                        }
                        return n
                    }
                    ;
                    function a(a) {
                        let {
                            props:l
                        }
                        =e,u=function e(t) {
                            if(!t)return;
                            if(!t.isControllingVariants) {
                                let n=t.parent&&e(t.parent)|| {

                                }
                                ;
                                return void 0!==t.props.initial&&(n.initial=t.props.initial),n
                            }
                            let n= {

                            }
                            ;
                            for(let e=0;
                            e<tu;
                            e++) {
                                let r=tl[e],i=t.props[r];
                                (ts(i)||!1===i)&&(n[r]=i)
                            }
                            return n
                        }
                        (e.parent)|| {

                        }
                        ,c=[],d=new Set,h= {

                        }
                        ,p=1/0;
                        for(let t=0;
                        t<td;
                        t++) {
                            var f,v;
                            let s=tc[t],g=n[s],y=void 0!==l[s]?l[s]:u[s],b=ts(y),x=s===a?g.isActive:null;
                            !1===x&&(p=t);
                            let w=y===u[s]&&y!==l[s]&&b;
                            if(w&&i&&e.manuallyAnimateOnMount&&(w=!1),g.protectedKeys= {
                                ...h
                            }
                            ,!g.isActive&&null===x||!y&&!g.prevProp||r(y)||"boolean"==typeof y)continue;
                            let E=(f=g.prevProp,"string"==typeof(v=y)?v!==f:!!Array.isArray(v)&&!to(v,f)),P=E||s===a&&g.isActive&&!w&&b||t>p&&b,T=!1,S=Array.isArray(y)?y:[y],k=S.reduce(o(s), {

                            }
                            );
                            !1===x&&(k= {

                            }
                            );
                            let {
                                prevResolvedValues:A= {

                                }

                            }
                            =g,C= {
                                ...A,...k
                            }
                            ,M=t=> {
                                P=!0,d.has(t)&&(T=!0,d.delete(t)),g.needsAnimating[t]=!0;
                                let n=e.getValue(t);
                                n&&(n.liveStyle=!1)
                            }
                            ;
                            for(let e in C) {
                                let t=k[e],n=A[e];
                                if(h.hasOwnProperty(e))continue;
                                let r=!1;
                                (m(t)&&m(n)?to(t,n):t===n)?void 0!==t&&d.has(e)?M(e):g.protectedKeys[e]=!0:null!=t?M(e):d.add(e)
                            }
                            g.prevProp=y,g.prevResolvedValues=k,g.isActive&&(h= {
                                ...h,...k
                            }
                            ),i&&e.blockInitialAnimation&&(P=!1);
                            let j=!(w&&E)||T;
                            P&&j&&c.push(...S.map(e=>( {
                                animation:e,options: {
                                    type:s
                                }

                            }
                            )))
                        }
                        if(d.size) {
                            let t= {

                            }
                            ;
                            if("boolean"!=typeof l.initial) {
                                let n=s(e,Array.isArray(l.initial)?l.initial[0]:l.initial);
                                n&&n.transition&&(t.transition=n.transition)
                            }
                            d.forEach(n=> {
                                let r=e.getBaseTarget(n),i=e.getValue(n);
                                i&&(i.liveStyle=!0),t[n]=r??null
                            }
                            ),c.push( {
                                animation:t
                            }
                            )
                        }
                        let g=!!c.length;
                        return i&&(!1===l.initial||l.initial===l.animate)&&!e.manuallyAnimateOnMount&&(g=!1),i=!1,g?t(c):Promise.resolve()
                    }
                    return {
                        animateChanges:a,setActive:function(t,r) {
                            if(n[t].isActive===r)return Promise.resolve();
                            e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;
                            let i=a(t);
                            for(let e in n)n[e].protectedKeys= {

                            }
                            ;
                            return i
                        }
                        ,setAnimateFunction:function(n) {
                            t=n(e)
                        }
                        ,getState:()=>n,reset:()=> {
                            n=tp(),i=!0
                        }

                    }

                }
                (e))
            }
            updateAnimationControlsSubscription() {
                let {
                    animate:e
                }
                =this.node.getProps();
                r(e)&&(this.unmountControls=e.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {
                    animate:e
                }
                =this.node.getProps(), {
                    animate:t
                }
                =this.node.prevProps|| {

                }
                ;
                e!==t&&this.updateAnimationControlsSubscription()
            }
            unmount() {
                this.node.animationState.reset(),this.unmountControls?.()
            }

        }
        let tv=0;
        class tg extends tf {
            constructor() {
                super(...arguments),this.id=tv++
            }
            update() {
                if(!this.node.presenceContext)return;
                let {
                    isPresent:e,onExitComplete:t
                }
                =this.node.presenceContext, {
                    isPresent:n
                }
                =this.node.prevPresenceContext|| {

                }
                ;
                if(!this.node.animationState||e===n)return;
                let r=this.node.animationState.setActive("exit",!e);
                t&&!e&&r.then(()=> {
                    t(this.id)
                }
                )
            }
            mount() {
                let {
                    register:e,onExitComplete:t
                }
                =this.node.presenceContext|| {

                }
                ;
                t&&t(this.id),e&&(this.unmount=e(this.id))
            }
            unmount() {

            }

        }
        let ty= {
            x:!1,y:!1
        }
        ;
        var tb=n(33210);
        function tx(e,t,n,r= {
            passive:!0
        }
        ) {
            return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)
        }
        let tw=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;
        function tE(e) {
            return {
                point: {
                    x:e.pageX,y:e.pageY
                }

            }

        }
        let tP=e=>t=>tw(t)&&e(t,tE(t));
        function tT(e,t,n,r) {
            return tx(e,t,tP(n),r)
        }
        function tS( {
            top:e,left:t,right:n,bottom:r
        }
        ) {
            return {
                x: {
                    min:t,max:n
                }
                ,y: {
                    min:e,max:r
                }

            }

        }
        function tk(e) {
            return e.max-e.min
        }
        function tA(e,t,n,r=.5) {
            e.origin=r,e.originPoint=(0,tb.k)(t.min,t.max,e.origin),e.scale=tk(n)/tk(t),e.translate=(0,tb.k)(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)
        }
        function tC(e,t,n,r) {
            tA(e.x,t.x,n.x,r?r.originX:void 0),tA(e.y,t.y,n.y,r?r.originY:void 0)
        }
        function tM(e,t,n) {
            e.min=n.min+t.min,e.max=e.min+tk(t)
        }
        function tj(e,t,n) {
            e.min=t.min-n.min,e.max=e.min+tk(t)
        }
        function tR(e,t,n) {
            tj(e.x,t.x,n.x),tj(e.y,t.y,n.y)
        }
        let tD=()=>( {
            translate:0,scale:1,origin:0,originPoint:0
        }
        ),tO=()=>( {
            x:tD(),y:tD()
        }
        ),tV=()=>( {
            min:0,max:0
        }
        ),tL=()=>( {
            x:tV(),y:tV()
        }
        );
        function tN(e) {
            return[e("x"),e("y")]
        }
        function tF(e) {
            return void 0===e||1===e
        }
        function tI( {
            scale:e,scaleX:t,scaleY:n
        }
        ) {
            return!tF(e)||!tF(t)||!tF(n)
        }
        function tB(e) {
            return tI(e)||tW(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY
        }
        function tW(e) {
            var t,n;
            return(t=e.x)&&"0%"!==t||(n=e.y)&&"0%"!==n
        }
        function tU(e,t,n,r,i) {
            return void 0!==i&&(e=r+i*(e-r)),r+n*(e-r)+t
        }
        function tz(e,t=0,n=1,r,i) {
            e.min=tU(e.min,t,n,r,i),e.max=tU(e.max,t,n,r,i)
        }
        function t$(e, {
            x:t,y:n
        }
        ) {
            tz(e.x,t.translate,t.scale,t.originPoint),tz(e.y,n.translate,n.scale,n.originPoint)
        }
        function t_(e,t) {
            e.min=e.min+t,e.max=e.max+t
        }
        function tG(e,t,n,r,i=.5) {
            let o=(0,tb.k)(e.min,e.max,i);
            tz(e,t,n,o,r)
        }
        function tq(e,t) {
            tG(e.x,t.x,t.scaleX,t.scale,t.originX),tG(e.y,t.y,t.scaleY,t.scale,t.originY)
        }
        function tK(e,t) {
            return tS(function(e,t) {
                if(!t)return e;
                let n=t( {
                    x:e.left,y:e.top
                }
                ),r=t( {
                    x:e.right,y:e.bottom
                }
                );
                return {
                    top:n.y,left:n.x,bottom:r.y,right:r.x
                }

            }
            (e.getBoundingClientRect(),t))
        }
        let tX=( {
            current:e
        }
        )=>e?e.ownerDocument.defaultView:null;
        function tH(e) {
            return e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")
        }
        let tY=(e,t)=>Math.abs(e-t);
        class tQ {
            constructor(e,t, {
                transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1
            }
            = {

            }
            ) {
                if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers= {

                }
                ,this.contextWindow=window,this.updatePoint=()=> {
                    if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;
                    let e=t0(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t) {
                        return Math.sqrt(tY(e.x,t.x)**2+tY(e.y,t.y)**2)
                    }
                    (e.offset, {
                        x:0,y:0
                    }
                    )>=3;
                    if(!t&&!n)return;
                    let {
                        point:r
                    }
                    =e, {
                        timestamp:i
                    }
                    =c.uv;
                    this.history.push( {
                        ...r,timestamp:i
                    }
                    );
                    let {
                        onStart:o,onMove:s
                    }
                    =this.handlers;
                    t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),s&&s(this.lastMoveEvent,e)
                }
                ,this.handlePointerMove=(e,t)=> {
                    this.lastMoveEvent=e,this.lastMoveEventInfo=tZ(t,this.transformPagePoint),c.Gt.update(this.updatePoint,!0)
                }
                ,this.handlePointerUp=(e,t)=> {
                    this.end();
                    let {
                        onEnd:n,onSessionEnd:r,resumeAnimation:i
                    }
                    =this.handlers;
                    if(this.dragSnapToOrigin&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;
                    let o=t0("pointercancel"===e.type?this.lastMoveEventInfo:tZ(t,this.transformPagePoint),this.history);
                    this.startEvent&&n&&n(e,o),r&&r(e,o)
                }
                ,!tw(e))return;
                this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;
                let o=tZ(tE(e),this.transformPagePoint), {
                    point:s
                }
                =o, {
                    timestamp:a
                }
                =c.uv;
                this.history=[ {
                    ...s,timestamp:a
                }
                ];
                let {
                    onSessionStart:l
                }
                =t;
                l&&l(e,t0(o,this.history)),this.removeListeners=(0,w.F)(tT(this.contextWindow,"pointermove",this.handlePointerMove),tT(this.contextWindow,"pointerup",this.handlePointerUp),tT(this.contextWindow,"pointercancel",this.handlePointerUp))
            }
            updateHandlers(e) {
                this.handlers=e
            }
            end() {
                this.removeListeners&&this.removeListeners(),(0,c.WG)(this.updatePoint)
            }

        }
        function tZ(e,t) {
            return t? {
                point:t(e.point)
            }
            :e
        }
        function tJ(e,t) {
            return {
                x:e.x-t.x,y:e.y-t.y
            }

        }
        function t0( {
            point:e
        }
        ,t) {
            return {
                point:e,delta:tJ(e,t1(t)),offset:tJ(e,t[0]),velocity:function(e,t) {
                    if(e.length<2)return {
                        x:0,y:0
                    }
                    ;
                    let n=e.length-1,r=null,i=t1(e);
                    for(;
                    n>=0&&(r=e[n],!(i.timestamp-r.timestamp>P(.1)));
                    )n--;
                    if(!r)return {
                        x:0,y:0
                    }
                    ;
                    let o=T(i.timestamp-r.timestamp);
                    if(0===o)return {
                        x:0,y:0
                    }
                    ;
                    let s= {
                        x:(i.x-r.x)/o,y:(i.y-r.y)/o
                    }
                    ;
                    return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s
                }
                (t,.1)
            }

        }
        function t1(e) {
            return e[e.length-1]
        }
        var t2=n(45818);
        function t5(e,t,n) {
            return {
                min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0
            }

        }
        function t6(e,t) {
            let n=t.min-e.min,r=t.max-e.max;
            return t.max-t.min<e.max-e.min&&([n,r]=[r,n]), {
                min:n,max:r
            }

        }
        function t9(e,t,n) {
            return {
                min:t4(e,t),max:t4(e,n)
            }

        }
        function t4(e,t) {
            return"number"==typeof e?e:e[t]||0
        }
        let t3=new WeakMap;
        class t8 {
            constructor(e) {
                this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint= {
                    x:0,y:0
                }
                ,this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=tL(),this.visualElement=e
            }
            start(e, {
                snapToCursor:t=!1
            }
            = {

            }
            ) {
                let {
                    presenceContext:n
                }
                =this.visualElement;
                if(n&&!1===n.isPresent)return;
                let {
                    dragSnapToOrigin:r
                }
                =this.getProps();
                this.panSession=new tQ(e, {
                    onSessionStart:e=> {
                        let {
                            dragSnapToOrigin:n
                        }
                        =this.getProps();
                        n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(tE(e).point)
                    }
                    ,onStart:(e,t)=> {
                        let {
                            drag:n,dragPropagation:r,onDragStart:i
                        }
                        =this.getProps();
                        if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=function(e) {
                            if("x"===e||"y"===e)if(ty[e])return null;
                            else return ty[e]=!0,()=> {
                                ty[e]=!1
                            }
                            ;
                            return ty.x||ty.y?null:(ty.x=ty.y=!0,()=> {
                                ty.x=ty.y=!1
                            }
                            )
                        }
                        (n),!this.openDragLock))return;
                        this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tN(e=> {
                            let t=this.getAxisMotionValue(e).get()||0;
                            if(eM.KN.test(t)) {
                                let {
                                    projection:n
                                }
                                =this.visualElement;
                                if(n&&n.layout) {
                                    let r=n.layout.layoutBox[e];
                                    r&&(t=tk(r)*(parseFloat(t)/100))
                                }

                            }
                            this.originPoint[e]=t
                        }
                        ),i&&c.Gt.postRender(()=>i(e,t)),y(this.visualElement,"transform");
                        let {
                            animationState:o
                        }
                        =this.visualElement;
                        o&&o.setActive("whileDrag",!0)
                    }
                    ,onMove:(e,t)=> {
                        let {
                            dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:o
                        }
                        =this.getProps();
                        if(!n&&!this.openDragLock)return;
                        let {
                            offset:s
                        }
                        =t;
                        if(r&&null===this.currentDirection) {
                            this.currentDirection=function(e,t=10) {
                                let n=null;
                                return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n
                            }
                            (s),null!==this.currentDirection&&i&&i(this.currentDirection);
                            return
                        }
                        this.updateAxis("x",t.point,s),this.updateAxis("y",t.point,s),this.visualElement.render(),o&&o(e,t)
                    }
                    ,onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>tN(e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play())
                }
                , {
                    transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:tX(this.visualElement)
                }
                )
            }
            stop(e,t) {
                let n=this.isDragging;
                if(this.cancel(),!n)return;
                let {
                    velocity:r
                }
                =t;
                this.startAnimation(r);
                let {
                    onDragEnd:i
                }
                =this.getProps();
                i&&c.Gt.postRender(()=>i(e,t))
            }
            cancel() {
                this.isDragging=!1;
                let {
                    projection:e,animationState:t
                }
                =this.visualElement;
                e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;
                let {
                    dragPropagation:n
                }
                =this.getProps();
                !n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)
            }
            updateAxis(e,t,n) {
                let {
                    drag:r
                }
                =this.getProps();
                if(!n||!t7(e,r,this.currentDirection))return;
                let i=this.getAxisMotionValue(e),o=this.originPoint[e]+n[e];
                this.constraints&&this.constraints[e]&&(o=function(e, {
                    min:t,max:n
                }
                ,r) {
                    return void 0!==t&&e<t?e=r?(0,tb.k)(t,e,r.min):Math.max(e,t):void 0!==n&&e>n&&(e=r?(0,tb.k)(n,e,r.max):Math.min(e,n)),e
                }
                (o,this.constraints[e],this.elastic[e])),i.set(o)
            }
            resolveConstraints() {
                let {
                    dragConstraints:e,dragElastic:t
                }
                =this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;
                e&&tH(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&n?this.constraints=function(e, {
                    top:t,left:n,bottom:r,right:i
                }
                ) {
                    return {
                        x:t5(e.x,n,i),y:t5(e.y,t,r)
                    }

                }
                (n.layoutBox,e):this.constraints=!1,this.elastic=function(e=.35) {
                    return!1===e?e=0:!0===e&&(e=.35), {
                        x:t9(e,"left","right"),y:t9(e,"top","bottom")
                    }

                }
                (t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&tN(e=> {
                    !1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t) {
                        let n= {

                        }
                        ;
                        return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n
                    }
                    (n.layoutBox[e],this.constraints[e]))
                }
                )
            }
            resolveRefConstraints() {
                var e;
                let {
                    dragConstraints:t,onMeasureDragConstraints:n
                }
                =this.getProps();
                if(!t||!tH(t))return!1;
                let r=t.current;
                (0,V.V)(null!==r,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {
                    projection:i
                }
                =this.visualElement;
                if(!i||!i.layout)return!1;
                let o=function(e,t,n) {
                    let r=tK(e,n), {
                        scroll:i
                    }
                    =t;
                    return i&&(t_(r.x,i.offset.x),t_(r.y,i.offset.y)),r
                }
                (r,i.root,this.visualElement.getTransformPagePoint()),s=(e=i.layout.layoutBox, {
                    x:t6(e.x,o.x),y:t6(e.y,o.y)
                }
                );
                if(n) {
                    let e=n(function( {
                        x:e,y:t
                    }
                    ) {
                        return {
                            top:t.min,right:e.max,bottom:t.max,left:e.min
                        }

                    }
                    (s));
                    this.hasMutatedConstraints=!!e,e&&(s=tS(e))
                }
                return s
            }
            startAnimation(e) {
                let {
                    drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:s
                }
                =this.getProps(),a=this.constraints|| {

                }
                ;
                return Promise.all(tN(s=> {
                    if(!t7(s,t,this.currentDirection))return;
                    let l=a&&a[s]|| {

                    }
                    ;
                    o&&(l= {
                        min:0,max:0
                    }
                    );
                    let u= {
                        type:"inertia",velocity:n?e[s]:0,bounceStiffness:r?200:1e6,bounceDamping:r?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...i,...l
                    }
                    ;
                    return this.startAxisValueAnimation(s,u)
                }
                )).then(s)
            }
            startAxisValueAnimation(e,t) {
                let n=this.getAxisMotionValue(e);
                return y(this.visualElement,e),n.start(tt(e,n,0,t,this.visualElement,!1))
            }
            stopAnimation() {
                tN(e=>this.getAxisMotionValue(e).stop())
            }
            pauseAnimation() {
                tN(e=>this.getAxisMotionValue(e).animation?.pause())
            }
            getAnimationState(e) {
                return this.getAxisMotionValue(e).animation?.state
            }
            getAxisMotionValue(e) {
                let t=`_drag$ {
                    e.toUpperCase()
                }
                `,n=this.visualElement.getProps();
                return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)
            }
            snapToCursor(e) {
                tN(t=> {
                    let {
                        drag:n
                    }
                    =this.getProps();
                    if(!t7(t,n,this.currentDirection))return;
                    let {
                        projection:r
                    }
                    =this.visualElement,i=this.getAxisMotionValue(t);
                    if(r&&r.layout) {
                        let {
                            min:n,max:o
                        }
                        =r.layout.layoutBox[t];
                        i.set(e[t]-(0,tb.k)(n,o,.5))
                    }

                }
                )
            }
            scalePositionWithinConstraints() {
                if(!this.visualElement.current)return;
                let {
                    drag:e,dragConstraints:t
                }
                =this.getProps(), {
                    projection:n
                }
                =this.visualElement;
                if(!tH(t)||!n||!this.constraints)return;
                this.stopAnimation();
                let r= {
                    x:0,y:0
                }
                ;
                tN(e=> {
                    let t=this.getAxisMotionValue(e);
                    if(t&&!1!==this.constraints) {
                        let n=t.get();
                        r[e]=function(e,t) {
                            let n=.5,r=tk(e),i=tk(t);
                            return i>r?n=(0,t2.q)(t.min,t.max-r,e.min):r>i&&(n=(0,t2.q)(e.min,e.max-i,t.min)),(0,E.q)(0,1,n)
                        }
                        ( {
                            min:n,max:n
                        }
                        ,this.constraints[e])
                    }

                }
                );
                let {
                    transformTemplate:i
                }
                =this.visualElement.getProps();
                this.visualElement.current.style.transform=i?i( {

                }
                ,""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),tN(t=> {
                    if(!t7(t,e,null))return;
                    let n=this.getAxisMotionValue(t), {
                        min:i,max:o
                    }
                    =this.constraints[t];
                    n.set((0,tb.k)(i,o,r[t]))
                }
                )
            }
            addListeners() {
                if(!this.visualElement.current)return;
                t3.set(this.visualElement,this);
                let e=tT(this.visualElement.current,"pointerdown",e=> {
                    let {
                        drag:t,dragListener:n=!0
                    }
                    =this.getProps();
                    t&&n&&this.start(e)
                }
                ),t=()=> {
                    let {
                        dragConstraints:e
                    }
                    =this.getProps();
                    tH(e)&&e.current&&(this.constraints=this.resolveRefConstraints())
                }
                , {
                    projection:n
                }
                =this.visualElement,r=n.addEventListener("measure",t);
                n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),c.Gt.read(t);
                let i=tx(window,"resize",()=>this.scalePositionWithinConstraints()),o=n.addEventListener("didUpdate",( {
                    delta:e,hasLayoutChanged:t
                }
                )=> {
                    this.isDragging&&t&&(tN(t=> {
                        let n=this.getAxisMotionValue(t);
                        n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))
                    }
                    ),this.visualElement.render())
                }
                );
                return()=> {
                    i(),e(),r(),o&&o()
                }

            }
            getProps() {
                let e=this.visualElement.getProps(), {
                    drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=.35,dragMomentum:s=!0
                }
                =e;
                return {
                    ...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:s
                }

            }

        }
        function t7(e,t,n) {
            return(!0===t||t===e)&&(null===n||n===e)
        }
        class ne extends tf {
            constructor(e) {
                super(e),this.removeGroupControls=U.l,this.removeListeners=U.l,this.controls=new t8(e)
            }
            mount() {
                let {
                    dragControls:e
                }
                =this.node.getProps();
                e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||U.l
            }
            unmount() {
                this.removeGroupControls(),this.removeListeners()
            }

        }
        let nt=e=>(t,n)=> {
            e&&c.Gt.postRender(()=>e(t,n))
        }
        ;
        class nn extends tf {
            constructor() {
                super(...arguments),this.removePointerDownListener=U.l
            }
            onPointerDown(e) {
                this.session=new tQ(e,this.createPanHandlers(), {
                    transformPagePoint:this.node.getTransformPagePoint(),contextWindow:tX(this.node)
                }
                )
            }
            createPanHandlers() {
                let {
                    onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r
                }
                =this.node.getProps();
                return {
                    onSessionStart:nt(e),onStart:nt(t),onMove:n,onEnd:(e,t)=> {
                        delete this.session,r&&c.Gt.postRender(()=>r(e,t))
                    }

                }

            }
            mount() {
                this.removePointerDownListener=tT(this.node.current,"pointerdown",e=>this.onPointerDown(e))
            }
            update() {
                this.session&&this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),this.session&&this.session.end()
            }

        }
        var nr=n(95155);
        let {
            schedule:ni
        }
        =(0,n(58437).I)(queueMicrotask,!1);
        var no=n(12115),ns=n(32082),na=n(90869);
        let nl=(0,no.createContext)( {

        }
        ),nu= {
            hasAnimatedSinceResize:!0,hasEverUpdated:!1
        }
        ;
        function nc(e,t) {
            return t.max===t.min?0:e/(t.max-t.min)*100
        }
        let nd= {
            correct:(e,t)=> {
                if(!t.target)return e;
                if("string"==typeof e)if(!eM.px.test(e))return e;
                else e=parseFloat(e);
                let n=nc(e,t.target.x),r=nc(e,t.target.y);
                return`$ {
                    n
                }
                % $ {
                    r
                }
                %`
            }

        }
        ;
        var nh=n(78606);
        let np= {

        }
        ;
        class nf extends no.Component {
            componentDidMount() {
                let {
                    visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r
                }
                =this.props, {
                    projection:i
                }
                =e;
                for(let e in nv)np[e]=nv[e],(0,nh.j)(e)&&(np[e].isCSSVariable=!0);
                i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=> {
                    this.safeToRemove()
                }
                ),i.setOptions( {
                    ...i.options,onExitComplete:()=>this.safeToRemove()
                }
                )),nu.hasEverUpdated=!0
            }
            getSnapshotBeforeUpdate(e) {
                let {
                    layoutDependency:t,visualElement:n,drag:r,isPresent:i
                }
                =this.props, {
                    projection:o
                }
                =n;
                return o&&(o.isPresent=i,r||e.layoutDependency!==t||void 0===t||e.isPresent!==i?o.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?o.promote():o.relegate()||c.Gt.postRender(()=> {
                    let e=o.getStack();
                    e&&e.members.length||this.safeToRemove()
                }
                ))),null
            }
            componentDidUpdate() {
                let {
                    projection:e
                }
                =this.props.visualElement;
                e&&(e.root.didUpdate(),ni.postRender(()=> {
                    !e.currentAnimation&&e.isLead()&&this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {
                    visualElement:e,layoutGroup:t,switchLayoutGroup:n
                }
                =this.props, {
                    projection:r
                }
                =e;
                r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))
            }
            safeToRemove() {
                let {
                    safeToRemove:e
                }
                =this.props;
                e&&e()
            }
            render() {
                return null
            }

        }
        function nm(e) {
            let[t,n]=(0,ns.xQ)(),r=(0,no.useContext)(na.L);
            return(0,nr.jsx)(nf, {
                ...e,layoutGroup:r,switchLayoutGroup:(0,no.useContext)(nl),isPresent:t,safeToRemove:n
            }
            )
        }
        let nv= {
            borderRadius: {
                ...nd,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]
            }
            ,borderTopLeftRadius:nd,borderTopRightRadius:nd,borderBottomLeftRadius:nd,borderBottomRightRadius:nd,boxShadow: {
                correct:(e, {
                    treeScale:t,projectionDelta:n
                }
                )=> {
                    let r=eJ.f.parse(e);
                    if(r.length>5)return e;
                    let i=eJ.f.createTransformer(e),o=+("number"!=typeof r[0]),s=n.x.scale*t.x,a=n.y.scale*t.y;
                    r[0+o]/=s,r[1+o]/=a;
                    let l=(0,tb.k)(s,a,.5);
                    return"number"==typeof r[2+o]&&(r[2+o]/=l),"number"==typeof r[3+o]&&(r[3+o]/=l),i(r)
                }

            }

        }
        ;
        var ng=n(69782),ny=n(75626),nb=n(56668);
        let nx=(e,t)=>e.depth-t.depth;
        class nw {
            constructor() {
                this.children=[],this.isDirty=!1
            }
            add(e) {
                (0,nb.Kq)(this.children,e),this.isDirty=!0
            }
            remove(e) {
                (0,nb.Ai)(this.children,e),this.isDirty=!0
            }
            forEach(e) {
                this.isDirty&&this.children.sort(nx),this.isDirty=!1,this.children.forEach(e)
            }

        }
        function nE(e) {
            return g(e)?e.get():e
        }
        let nP=["TopLeft","TopRight","BottomLeft","BottomRight"],nT=nP.length,nS=e=>"string"==typeof e?parseFloat(e):e,nk=e=>"number"==typeof e||eM.px.test(e);
        function nA(e,t) {
            return void 0!==e[t]?e[t]:e.borderRadius
        }
        let nC=nj(0,.5,et),nM=nj(.5,.95,U.l);
        function nj(e,t,n) {
            return r=>r<e?0:r>t?1:n((0,t2.q)(e,t,r))
        }
        function nR(e,t) {
            e.min=t.min,e.max=t.max
        }
        function nD(e,t) {
            nR(e.x,t.x),nR(e.y,t.y)
        }
        function nO(e,t) {
            e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin
        }
        function nV(e,t,n,r,i) {
            return e-=t,e=r+1/n*(e-r),void 0!==i&&(e=r+1/i*(e-r)),e
        }
        function nL(e,t,[n,r,i],o,s) {
            !function(e,t=0,n=1,r=.5,i,o=e,s=e) {
                if(eM.KN.test(t)&&(t=parseFloat(t),t=(0,tb.k)(s.min,s.max,t/100)-s.min),"number"!=typeof t)return;
                let a=(0,tb.k)(o.min,o.max,r);
                e===o&&(a-=t),e.min=nV(e.min,t,n,a,i),e.max=nV(e.max,t,n,a,i)
            }
            (e,t[n],t[r],t[i],t.scale,o,s)
        }
        let nN=["x","scaleX","originX"],nF=["y","scaleY","originY"];
        function nI(e,t,n,r) {
            nL(e.x,t,nN,n?n.x:void 0,r?r.x:void 0),nL(e.y,t,nF,n?n.y:void 0,r?r.y:void 0)
        }
        function nB(e) {
            return 0===e.translate&&1===e.scale
        }
        function nW(e) {
            return nB(e.x)&&nB(e.y)
        }
        function nU(e,t) {
            return e.min===t.min&&e.max===t.max
        }
        function nz(e,t) {
            return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)
        }
        function n$(e,t) {
            return nz(e.x,t.x)&&nz(e.y,t.y)
        }
        function n_(e) {
            return tk(e.x)/tk(e.y)
        }
        function nG(e,t) {
            return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint
        }
        class nq {
            constructor() {
                this.members=[]
            }
            add(e) {
                (0,nb.Kq)(this.members,e),e.scheduleRender()
            }
            remove(e) {
                if((0,nb.Ai)(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead) {
                    let e=this.members[this.members.length-1];
                    e&&this.promote(e)
                }

            }
            relegate(e) {
                let t,n=this.members.findIndex(t=>e===t);
                if(0===n)return!1;
                for(let e=n;
                e>=0;
                e--) {
                    let n=this.members[e];
                    if(!1!==n.isPresent) {
                        t=n;
                        break
                    }

                }
                return!!t&&(this.promote(t),!0)
            }
            promote(e,t) {
                let n=this.lead;
                if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)) {
                    n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);
                    let {
                        crossfade:r
                    }
                    =e.options;
                    !1===r&&n.hide()
                }

            }
            exitAnimationComplete() {
                this.members.forEach(e=> {
                    let {
                        options:t,resumingFrom:n
                    }
                    =e;
                    t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(e=> {
                    e.instance&&e.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)
            }

        }
        let nK= {
            nodes:0,calculatedTargetDeltas:0,calculatedProjections:0
        }
        ,nX=["","X","Y","Z"],nH= {
            visibility:"hidden"
        }
        ,nY=0;
        function nQ(e,t,n,r) {
            let {
                latestValues:i
            }
            =t;
            i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))
        }
        function nZ( {
            attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i
        }
        ) {
            return class {
                constructor(e= {

                }
                ,n=t?.()) {
                    this.id=nY++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options= {

                    }
                    ,this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale= {
                        x:1,y:1
                    }
                    ,this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=> {
                        this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())
                    }
                    ,this.updateProjection=()=> {
                        this.projectionUpdateScheduled=!1,e$.Q.value&&(nK.nodes=nK.calculatedTargetDeltas=nK.calculatedProjections=0),this.nodes.forEach(n1),this.nodes.forEach(n8),this.nodes.forEach(n7),this.nodes.forEach(n2),e$.Q.addProjectionMetrics&&e$.Q.addProjectionMetrics(nK)
                    }
                    ,this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;
                    for(let e=0;
                    e<this.path.length;
                    e++)this.path[e].shouldResetTransform=!0;
                    this.root===this&&(this.nodes=new nw)
                }
                addEventListener(e,t) {
                    return this.eventHandlers.has(e)||this.eventHandlers.set(e,new ny.v),this.eventHandlers.get(e).add(t)
                }
                notifyListeners(e,...t) {
                    let n=this.eventHandlers.get(e);
                    n&&n.notify(...t)
                }
                hasListeners(e) {
                    return this.eventHandlers.has(e)
                }
                mount(t) {
                    if(this.instance)return;
                    this.isSVG=(0,ng.x)(t)&&(!(0,ng.x)(t)||"svg"!==t.tagName),this.instance=t;
                    let {
                        layoutId:n,layout:r,visualElement:i
                    }
                    =this.options;
                    if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e) {
                        let n,r=()=>this.root.updateBlockedByResize=!1;
                        e(t,()=> {
                            this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t) {
                                let n=S.k.now(),r=( {
                                    timestamp:i
                                }
                                )=> {
                                    let o=i-n;
                                    o>=250&&((0,c.WG)(r),e(o-t))
                                }
                                ;
                                return c.Gt.setup(r,!0),()=>(0,c.WG)(r)
                            }
                            (r,250),nu.hasAnimatedSinceResize&&(nu.hasAnimatedSinceResize=!1,this.nodes.forEach(n3))
                        }
                        )
                    }
                    n&&this.root.registerSharedNode(n,this),!1!==this.options.animate&&i&&(n||r)&&this.addEventListener("didUpdate",( {
                        delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r
                    }
                    )=> {
                        if(this.isTreeAnimationBlocked()) {
                            this.target=void 0,this.relativeTarget=void 0;
                            return
                        }
                        let o=this.options.transition||i.getDefaultTransition()||ro, {
                            onLayoutAnimationStart:s,onLayoutAnimationComplete:l
                        }
                        =i.getProps(),u=!this.targetLayout||!n$(this.targetLayout,r),c=!t&&n;
                        if(this.options.layoutRoot||this.resumeFrom||c||t&&(u||!this.currentAnimation)) {
                            this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);
                            let t= {
                                ...a(o,"layout"),onPlay:s,onComplete:l
                            }
                            ;
                            (i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,c)
                        }
                        else t||n3(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();
                        this.targetLayout=r
                    }
                    )
                }
                unmount() {
                    this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);
                    let e=this.getStack();
                    e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),(0,c.WG)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked=!0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked=!1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked||this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1
                }
                startUpdate() {
                    !this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(re),this.animationId++)
                }
                getTransformTemplate() {
                    let {
                        visualElement:e
                    }
                    =this.options;
                    return e&&e.getProps().transformTemplate
                }
                willUpdate(e=!0) {
                    if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()) {
                        this.options.onExitComplete&&this.options.onExitComplete();
                        return
                    }
                    if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&function e(t) {
                        if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;
                        let {
                            visualElement:n
                        }
                        =t.options;
                        if(!n)return;
                        let r=n.props[x];
                        if(window.MotionHasOptimisedAnimation(r,"transform")) {
                            let {
                                layout:e,layoutId:n
                            }
                            =t.options;
                            window.MotionCancelOptimisedAnimation(r,"transform",c.Gt,!(e||n))
                        }
                        let {
                            parent:i
                        }
                        =t;
                        i&&!i.hasCheckedOptimisedAppear&&e(i)
                    }
                    (this),this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;
                    this.isLayoutDirty=!0;
                    for(let e=0;
                    e<this.path.length;
                    e++) {
                        let t=this.path[e];
                        t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)
                    }
                    let {
                        layoutId:t,layout:n
                    }
                    =this.options;
                    if(void 0===t&&!n)return;
                    let r=this.getTransformTemplate();
                    this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")
                }
                update() {
                    if(this.updateScheduled=!1,this.isUpdateBlocked()) {
                        this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(n6);
                        return
                    }
                    if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(n9);
                    this.isUpdating||this.nodes.forEach(n9),this.animationCommitId=this.animationId,this.isUpdating=!1,this.nodes.forEach(n4),this.nodes.forEach(nJ),this.nodes.forEach(n0),this.clearAllSnapshots();
                    let e=S.k.now();
                    c.uv.delta=(0,E.q)(0,1e3/60,e-c.uv.timestamp),c.uv.timestamp=e,c.uv.isProcessing=!0,c.PP.update.process(c.uv),c.PP.preRender.process(c.uv),c.PP.render.process(c.uv),c.uv.isProcessing=!1
                }
                didUpdate() {
                    this.updateScheduled||(this.updateScheduled=!0,ni.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(n5),this.sharedNodes.forEach(rt)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,c.Gt.preRender(this.updateProjection,!1,!0))
                }
                scheduleCheckAfterUnmount() {
                    c.Gt.postRender(()=> {
                        this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||tk(this.snapshot.measuredBox.x)||tk(this.snapshot.measuredBox.y)||(this.snapshot=void 0))
                }
                updateLayout() {
                    if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;
                    if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;
                    e<this.path.length;
                    e++)this.path[e].updateScroll();
                    let e=this.layout;
                    this.layout=this.measure(!1),this.layoutCorrected=tL(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);
                    let {
                        visualElement:t
                    }
                    =this.options;
                    t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)
                }
                updateScroll(e="measure") {
                    let t=!!(this.options.layoutScroll&&this.instance);
                    if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance) {
                        let t=r(this.instance);
                        this.scroll= {
                            animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t
                        }

                    }

                }
                resetTransform() {
                    if(!i)return;
                    let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!nW(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,o=r!==this.prevTransformTemplateValue;
                    e&&this.instance&&(t||tB(this.latestValues)||o)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())
                }
                measure(e=!0) {
                    var t;
                    let n=this.measurePageBox(),r=this.removeElementScroll(n);
                    return e&&(r=this.removeTransform(r)),rl((t=r).x),rl(t.y), {
                        animationId:this.root.animationId,measuredBox:n,layoutBox:r,latestValues: {

                        }
                        ,source:this.id
                    }

                }
                measurePageBox() {
                    let {
                        visualElement:e
                    }
                    =this.options;
                    if(!e)return tL();
                    let t=e.measureViewportBox();
                    if(!(this.scroll?.wasRoot||this.path.some(rc))) {
                        let {
                            scroll:e
                        }
                        =this.root;
                        e&&(t_(t.x,e.offset.x),t_(t.y,e.offset.y))
                    }
                    return t
                }
                removeElementScroll(e) {
                    let t=tL();
                    if(nD(t,e),this.scroll?.wasRoot)return t;
                    for(let n=0;
                    n<this.path.length;
                    n++) {
                        let r=this.path[n], {
                            scroll:i,options:o
                        }
                        =r;
                        r!==this.root&&i&&o.layoutScroll&&(i.wasRoot&&nD(t,e),t_(t.x,i.offset.x),t_(t.y,i.offset.y))
                    }
                    return t
                }
                applyTransform(e,t=!1) {
                    let n=tL();
                    nD(n,e);
                    for(let e=0;
                    e<this.path.length;
                    e++) {
                        let r=this.path[e];
                        !t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&tq(n, {
                            x:-r.scroll.offset.x,y:-r.scroll.offset.y
                        }
                        ),tB(r.latestValues)&&tq(n,r.latestValues)
                    }
                    return tB(this.latestValues)&&tq(n,this.latestValues),n
                }
                removeTransform(e) {
                    let t=tL();
                    nD(t,e);
                    for(let e=0;
                    e<this.path.length;
                    e++) {
                        let n=this.path[e];
                        if(!n.instance||!tB(n.latestValues))continue;
                        tI(n.latestValues)&&n.updateSnapshot();
                        let r=tL();
                        nD(r,n.measurePageBox()),nI(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)
                    }
                    return tB(this.latestValues)&&nI(t,this.latestValues),t
                }
                setTargetDelta(e) {
                    this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0
                }
                setOptions(e) {
                    this.options= {
                        ...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade
                    }

                }
                clearMeasurements() {
                    this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==c.uv.timestamp&&this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(e=!1) {
                    let t=this.getLead();
                    this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);
                    let n=!!this.resumingFrom||this!==t;
                    if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;
                    let {
                        layout:r,layoutId:i
                    }
                    =this.options;
                    if(this.layout&&(r||i)) {
                        if(this.resolvedRelativeTargetAt=c.uv.timestamp,!this.targetDelta&&!this.relativeTarget) {
                            let e=this.getClosestProjectingParent();
                            e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tL(),this.relativeTargetOrigin=tL(),tR(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),nD(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0
                        }
                        if(this.relativeTarget||this.targetDelta) {
                            if(this.target||(this.target=tL(),this.targetWithTransforms=tL()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target) {
                                var o,s,a;
                                this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,a=this.relativeParent.target,tM(o.x,s.x,a.x),tM(o.y,s.y,a.y)
                            }
                            else this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):nD(this.target,this.layout.layoutBox),t$(this.target,this.targetDelta)):nD(this.target,this.layout.layoutBox);
                            if(this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget=!1;
                                let e=this.getClosestProjectingParent();
                                e&&!!e.resumingFrom==!!this.resumingFrom&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tL(),this.relativeTargetOrigin=tL(),tR(this.relativeTargetOrigin,this.target,e.target),nD(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0
                            }
                            e$.Q.value&&nK.calculatedTargetDeltas++
                        }

                    }

                }
                getClosestProjectingParent() {
                    if(!(!this.parent||tI(this.parent.latestValues)||tW(this.parent.latestValues)))if(this.parent.isProjecting())return this.parent;
                    else return this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)
                }
                calcProjection() {
                    let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;
                    if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===c.uv.timestamp&&(n=!1),n)return;
                    let {
                        layout:r,layoutId:i
                    }
                    =this.options;
                    if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;
                    nD(this.layoutCorrected,this.layout.layoutBox);
                    let o=this.treeScale.x,s=this.treeScale.y;
                    !function(e,t,n,r=!1) {
                        let i,o,s=n.length;
                        if(s) {
                            t.x=t.y=1;
                            for(let a=0;
                            a<s;
                            a++) {
                                o=(i=n[a]).projectionDelta;
                                let {
                                    visualElement:s
                                }
                                =i.options;
                                (!s||!s.props.style||"contents"!==s.props.style.display)&&(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&tq(e, {
                                    x:-i.scroll.offset.x,y:-i.scroll.offset.y
                                }
                                ),o&&(t.x*=o.x.scale,t.y*=o.y.scale,t$(e,o)),r&&tB(i.latestValues)&&tq(e,i.latestValues))
                            }
                            t.x<1.0000000000001&&t.x>.999999999999&&(t.x=1),t.y<1.0000000000001&&t.y>.999999999999&&(t.y=1)
                        }

                    }
                    (this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=tL());
                    let {
                        target:a
                    }
                    =e;
                    if(!a) {
                        this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());
                        return
                    }
                    this.projectionDelta&&this.prevProjectionDelta?(nO(this.prevProjectionDelta.x,this.projectionDelta.x),nO(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),tC(this.projectionDelta,this.layoutCorrected,a,this.latestValues),this.treeScale.x===o&&this.treeScale.y===s&&nG(this.projectionDelta.x,this.prevProjectionDelta.x)&&nG(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",a)),e$.Q.value&&nK.calculatedProjections++
                }
                hide() {
                    this.isVisible=!1
                }
                show() {
                    this.isVisible=!0
                }
                scheduleRender(e=!0) {
                    if(this.options.visualElement?.scheduleRender(),e) {
                        let e=this.getStack();
                        e&&e.scheduleRender()
                    }
                    this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)
                }
                createProjectionDeltas() {
                    this.prevProjectionDelta=tO(),this.projectionDelta=tO(),this.projectionDeltaWithTransform=tO()
                }
                setAnimationOrigin(e,t=!1) {
                    let n,r=this.snapshot,i=r?r.latestValues: {

                    }
                    ,o= {
                        ...this.latestValues
                    }
                    ,s=tO();
                    this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;
                    let a=tL(),l=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),u=this.getStack(),c=!u||u.members.length<=1,d=!!(l&&!c&&!0===this.options.crossfade&&!this.path.some(ri));
                    this.animationProgress=0,this.mixTargetDelta=t=> {
                        let r=t/1e3;
                        if(rn(s.x,e.x,r),rn(s.y,e.y,r),this.setTargetDelta(s),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout) {
                            var u,h,p,f,m,v;
                            tR(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),p=this.relativeTarget,f=this.relativeTargetOrigin,m=a,v=r,rr(p.x,f.x,m.x,v),rr(p.y,f.y,m.y,v),n&&(u=this.relativeTarget,h=n,nU(u.x,h.x)&&nU(u.y,h.y))&&(this.isProjectionDirty=!1),n||(n=tL()),nD(n,this.relativeTarget)
                        }
                        l&&(this.animationValues=o,function(e,t,n,r,i,o) {
                            i?(e.opacity=(0,tb.k)(0,n.opacity??1,nC(r)),e.opacityExit=(0,tb.k)(t.opacity??1,0,nM(r))):o&&(e.opacity=(0,tb.k)(t.opacity??1,n.opacity??1,r));
                            for(let i=0;
                            i<nT;
                            i++) {
                                let o=`border$ {
                                    nP[i]
                                }
                                Radius`,s=nA(t,o),a=nA(n,o);
                                (void 0!==s||void 0!==a)&&(s||(s=0),a||(a=0),0===s||0===a||nk(s)===nk(a)?(e[o]=Math.max((0,tb.k)(nS(s),nS(a),r),0),(eM.KN.test(a)||eM.KN.test(s))&&(e[o]+="%")):e[o]=a)
                            }
                            (t.rotate||n.rotate)&&(e.rotate=(0,tb.k)(t.rotate||0,n.rotate||0,r))
                        }
                        (o,i,this.latestValues,r,d,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=r
                    }
                    ,this.mixTargetDelta(1e3*!!this.options.layoutRoot)
                }
                startAnimation(e) {
                    this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&((0,c.WG)(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=c.Gt.update(()=> {
                        nu.hasAnimatedSinceResize=!0,k.layout++,this.motionValue||(this.motionValue=(0,f.OQ)(0)),this.currentAnimation=function(e,t,n) {
                            let r=g(e)?e:(0,f.OQ)(e);
                            return r.start(tt("",r,t,n)),r.animation
                        }
                        (this.motionValue,[0,1e3], {
                            ...e,velocity:0,isSync:!0,onUpdate:t=> {
                                this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)
                            }
                            ,onStop:()=> {
                                k.layout--
                            }
                            ,onComplete:()=> {
                                k.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()
                            }

                        }
                        ),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);
                    let e=this.getStack();
                    e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let e=this.getLead(), {
                        targetWithTransforms:t,target:n,layout:r,latestValues:i
                    }
                    =e;
                    if(t&&n&&r) {
                        if(this!==e&&this.layout&&r&&ru(this.options.animationType,this.layout.layoutBox,r.layoutBox)) {
                            n=this.target||tL();
                            let t=tk(this.layout.layoutBox.x);
                            n.x.min=e.target.x.min,n.x.max=n.x.min+t;
                            let r=tk(this.layout.layoutBox.y);
                            n.y.min=e.target.y.min,n.y.max=n.y.min+r
                        }
                        nD(t,n),tq(t,i),tC(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)
                    }

                }
                registerSharedNode(e,t) {
                    this.sharedNodes.has(e)||this.sharedNodes.set(e,new nq),this.sharedNodes.get(e).add(t);
                    let n=t.options.initialPromotionConfig;
                    t.promote( {
                        transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0
                    }
                    )
                }
                isLead() {
                    let e=this.getStack();
                    return!e||e.lead===this
                }
                getLead() {
                    let {
                        layoutId:e
                    }
                    =this.options;
                    return e&&this.getStack()?.lead||this
                }
                getPrevLead() {
                    let {
                        layoutId:e
                    }
                    =this.options;
                    return e?this.getStack()?.prevLead:void 0
                }
                getStack() {
                    let {
                        layoutId:e
                    }
                    =this.options;
                    if(e)return this.root.sharedNodes.get(e)
                }
                promote( {
                    needsReset:e,transition:t,preserveFollowOpacity:n
                }
                = {

                }
                ) {
                    let r=this.getStack();
                    r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions( {
                        transition:t
                    }
                    )
                }
                relegate() {
                    let e=this.getStack();
                    return!!e&&e.relegate(this)
                }
                resetSkewAndRotation() {
                    let {
                        visualElement:e
                    }
                    =this.options;
                    if(!e)return;
                    let t=!1, {
                        latestValues:n
                    }
                    =e;
                    if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;
                    let r= {

                    }
                    ;
                    n.z&&nQ("z",e,r,this.animationValues);
                    for(let t=0;
                    t<nX.length;
                    t++)nQ(`rotate$ {
                        nX[t]
                    }
                    `,e,r,this.animationValues),nQ(`skew$ {
                        nX[t]
                    }
                    `,e,r,this.animationValues);
                    for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);
                    e.scheduleRender()
                }
                getProjectionStyles(e) {
                    if(!this.instance||this.isSVG)return;
                    if(!this.isVisible)return nH;
                    let t= {
                        visibility:""
                    }
                    ,n=this.getTransformTemplate();
                    if(this.needsReset)return this.needsReset=!1,t.opacity="",t.pointerEvents=nE(e?.pointerEvents)||"",t.transform=n?n(this.latestValues,""):"none",t;
                    let r=this.getLead();
                    if(!this.projectionDelta||!this.layout||!r.target) {
                        let t= {

                        }
                        ;
                        return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=nE(e?.pointerEvents)||""),this.hasProjected&&!tB(this.latestValues)&&(t.transform=n?n( {

                        }
                        ,""):"none",this.hasProjected=!1),t
                    }
                    let i=r.animationValues||r.latestValues;
                    this.applyTransformsToTarget(),t.transform=function(e,t,n) {
                        let r="",i=e.x.translate/t.x,o=e.y.translate/t.y,s=n?.z||0;
                        if((i||o||s)&&(r=`translate3d($ {
                            i
                        }
                        px, $ {
                            o
                        }
                        px, $ {
                            s
                        }
                        px) `),(1!==t.x||1!==t.y)&&(r+=`scale($ {
                            1/t.x
                        }
                        , $ {
                            1/t.y
                        }
                        ) `),n) {
                            let {
                                transformPerspective:e,rotate:t,rotateX:i,rotateY:o,skewX:s,skewY:a
                            }
                            =n;
                            e&&(r=`perspective($ {
                                e
                            }
                            px) $ {
                                r
                            }
                            `),t&&(r+=`rotate($ {
                                t
                            }
                            deg) `),i&&(r+=`rotateX($ {
                                i
                            }
                            deg) `),o&&(r+=`rotateY($ {
                                o
                            }
                            deg) `),s&&(r+=`skewX($ {
                                s
                            }
                            deg) `),a&&(r+=`skewY($ {
                                a
                            }
                            deg) `)
                        }
                        let a=e.x.scale*t.x,l=e.y.scale*t.y;
                        return(1!==a||1!==l)&&(r+=`scale($ {
                            a
                        }
                        , $ {
                            l
                        }
                        )`),r||"none"
                    }
                    (this.projectionDeltaWithTransform,this.treeScale,i),n&&(t.transform=n(i,t.transform));
                    let {
                        x:o,y:s
                    }
                    =this.projectionDelta;
                    for(let e in t.transformOrigin=`$ {
                        100*o.origin
                    }
                    % $ {
                        100*s.origin
                    }
                    % 0`,r.animationValues?t.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:t.opacity=r===this?void 0!==i.opacity?i.opacity:"":void 0!==i.opacityExit?i.opacityExit:0,np) {
                        if(void 0===i[e])continue;
                        let {
                            correct:n,applyTo:o,isCSSVariable:s
                        }
                        =np[e],a="none"===t.transform?i[e]:n(i[e],r);
                        if(o) {
                            let e=o.length;
                            for(let n=0;
                            n<e;
                            n++)t[o[n]]=a
                        }
                        else s?this.options.visualElement.renderState.vars[e]=a:t[e]=a
                    }
                    return this.options.layoutId&&(t.pointerEvents=r===this?nE(e?.pointerEvents)||"":"none"),t
                }
                clearSnapshot() {
                    this.resumeFrom=this.snapshot=void 0
                }
                resetTree() {
                    this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(n6),this.root.sharedNodes.clear()
                }

            }

        }
        function nJ(e) {
            e.updateLayout()
        }
        function n0(e) {
            let t=e.resumeFrom?.snapshot||e.snapshot;
            if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")) {
                let {
                    layoutBox:n,measuredBox:r
                }
                =e.layout, {
                    animationType:i
                }
                =e.options,o=t.source!==e.layout.source;
                "size"===i?tN(e=> {
                    let r=o?t.measuredBox[e]:t.layoutBox[e],i=tk(r);
                    r.min=n[e].min,r.max=r.min+i
                }
                ):ru(i,t.layoutBox,n)&&tN(r=> {
                    let i=o?t.measuredBox[r]:t.layoutBox[r],s=tk(n[r]);
                    i.max=i.min+s,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+s)
                }
                );
                let s=tO();
                tC(s,n,t.layoutBox);
                let a=tO();
                o?tC(a,e.applyTransform(r,!0),t.measuredBox):tC(a,n,t.layoutBox);
                let l=!nW(s),u=!1;
                if(!e.resumeFrom) {
                    let r=e.getClosestProjectingParent();
                    if(r&&!r.resumeFrom) {
                        let {
                            snapshot:i,layout:o
                        }
                        =r;
                        if(i&&o) {
                            let s=tL();
                            tR(s,t.layoutBox,i.layoutBox);
                            let a=tL();
                            tR(a,n,o.layoutBox),n$(s,a)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=a,e.relativeTargetOrigin=s,e.relativeParent=r)
                        }

                    }

                }
                e.notifyListeners("didUpdate", {
                    layout:n,snapshot:t,delta:a,layoutDelta:s,hasLayoutChanged:l,hasRelativeLayoutChanged:u
                }
                )
            }
            else if(e.isLead()) {
                let {
                    onExitComplete:t
                }
                =e.options;
                t&&t()
            }
            e.options.transition=void 0
        }
        function n1(e) {
            e$.Q.value&&nK.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))
        }
        function n2(e) {
            e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1
        }
        function n5(e) {
            e.clearSnapshot()
        }
        function n6(e) {
            e.clearMeasurements()
        }
        function n9(e) {
            e.isLayoutDirty=!1
        }
        function n4(e) {
            let {
                visualElement:t
            }
            =e.options;
            t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()
        }
        function n3(e) {
            e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0
        }
        function n8(e) {
            e.resolveTargetDelta()
        }
        function n7(e) {
            e.calcProjection()
        }
        function re(e) {
            e.resetSkewAndRotation()
        }
        function rt(e) {
            e.removeLeadSnapshot()
        }
        function rn(e,t,n) {
            e.translate=(0,tb.k)(t.translate,0,n),e.scale=(0,tb.k)(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint
        }
        function rr(e,t,n,r) {
            e.min=(0,tb.k)(t.min,n.min,r),e.max=(0,tb.k)(t.max,n.max,r)
        }
        function ri(e) {
            return e.animationValues&&void 0!==e.animationValues.opacityExit
        }
        let ro= {
            duration:.45,ease:[.4,0,.1,1]
        }
        ,rs=e=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ra=rs("applewebkit/")&&!rs("chrome/")?Math.round:U.l;
        function rl(e) {
            e.min=ra(e.min),e.max=ra(e.max)
        }
        function ru(e,t,n) {
            return"position"===e||"preserve-aspect"===e&&!(.2>=Math.abs(n_(t)-n_(n)))
        }
        function rc(e) {
            return e!==e.root&&e.scroll?.wasRoot
        }
        let rd=nZ( {
            attachResizeListener:(e,t)=>tx(e,"resize",t),measureScroll:()=>( {
                x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop
            }
            ),checkIsScrollRoot:()=>!0
        }
        ),rh= {
            current:void 0
        }
        ,rp=nZ( {
            measureScroll:e=>( {
                x:e.scrollLeft,y:e.scrollTop
            }
            ),defaultParent:()=> {
                if(!rh.current) {
                    let e=new rd( {

                    }
                    );
                    e.mount(window),e.setOptions( {
                        layoutScroll:!0
                    }
                    ),rh.current=e
                }
                return rh.current
            }
            ,resetTransform:(e,t)=> {
                e.style.transform=void 0!==t?t:"none"
            }
            ,checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position
        }
        );
        var rf=n(42198);
        function rm(e,t) {
            let n=(0,rf.K)(e),r=new AbortController;
            return[n, {
                passive:!0,...t,signal:r.signal
            }
            ,()=>r.abort()]
        }
        function rv(e) {
            return!("touch"===e.pointerType||ty.x||ty.y)
        }
        function rg(e,t,n) {
            let {
                props:r
            }
            =e;
            e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);
            let i=r["onHover"+n];
            i&&c.Gt.postRender(()=>i(t,tE(t)))
        }
        class ry extends tf {
            mount() {
                let {
                    current:e
                }
                =this.node;
                e&&(this.unmount=function(e,t,n= {

                }
                ) {
                    let[r,i,o]=rm(e,n),s=e=> {
                        if(!rv(e))return;
                        let {
                            target:n
                        }
                        =e,r=t(n,e);
                        if("function"!=typeof r||!n)return;
                        let o=e=> {
                            rv(e)&&(r(e),n.removeEventListener("pointerleave",o))
                        }
                        ;
                        n.addEventListener("pointerleave",o,i)
                    }
                    ;
                    return r.forEach(e=> {
                        e.addEventListener("pointerenter",s,i)
                    }
                    ),o
                }
                (e,(e,t)=>(rg(this.node,t,"Start"),e=>rg(this.node,e,"End"))))
            }
            unmount() {

            }

        }
        class rb extends tf {
            constructor() {
                super(...arguments),this.isActive=!1
            }
            onFocus() {
                let e=!1;
                try {
                    e=this.node.current.matches(":focus-visible")
                }
                catch(t) {
                    e=!0
                }
                e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)
            }
            onBlur() {
                this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)
            }
            mount() {
                this.unmount=(0,w.F)(tx(this.node.current,"focus",()=>this.onFocus()),tx(this.node.current,"blur",()=>this.onBlur()))
            }
            unmount() {

            }

        }
        let rx=(e,t)=>!!t&&(e===t||rx(e,t.parentElement)),rw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),rE=new WeakSet;
        function rP(e) {
            return t=> {
                "Enter"===t.key&&e(t)
            }

        }
        function rT(e,t) {
            e.dispatchEvent(new PointerEvent("pointer"+t, {
                isPrimary:!0,bubbles:!0
            }
            ))
        }
        let rS=(e,t)=> {
            let n=e.currentTarget;
            if(!n)return;
            let r=rP(()=> {
                if(rE.has(n))return;
                rT(n,"down");
                let e=rP(()=> {
                    rT(n,"up")
                }
                );
                n.addEventListener("keyup",e,t),n.addEventListener("blur",()=>rT(n,"cancel"),t)
            }
            );
            n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)
        }
        ;
        function rk(e) {
            return tw(e)&&!(ty.x||ty.y)
        }
        function rA(e,t,n) {
            let {
                props:r
            }
            =e;
            if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;
            e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);
            let i=r["onTap"+("End"===n?"":n)];
            i&&c.Gt.postRender(()=>i(t,tE(t)))
        }
        class rC extends tf {
            mount() {
                let {
                    current:e
                }
                =this.node;
                e&&(this.unmount=function(e,t,n= {

                }
                ) {
                    let[r,i,o]=rm(e,n),s=e=> {
                        let r=e.currentTarget;
                        if(!rk(e))return;
                        rE.add(r);
                        let o=t(r,e),s=(e,t)=> {
                            window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",l),rE.has(r)&&rE.delete(r),rk(e)&&"function"==typeof o&&o(e, {
                                success:t
                            }
                            )
                        }
                        ,a=e=> {
                            s(e,r===window||r===document||n.useGlobalTarget||rx(r,e.target))
                        }
                        ,l=e=> {
                            s(e,!1)
                        }
                        ;
                        window.addEventListener("pointerup",a,i),window.addEventListener("pointercancel",l,i)
                    }
                    ;
                    return r.forEach(e=> {
                        ((n.useGlobalTarget?window:e).addEventListener("pointerdown",s,i),(0,e1.s)(e))&&(e.addEventListener("focus",e=>rS(e,i)),rw.has(e.tagName)||-1!==e.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))
                    }
                    ),o
                }
                (e,(e,t)=>(rA(this.node,t,"Start"),(e, {
                    success:t
                }
                )=>rA(this.node,e,t?"End":"Cancel")), {
                    useGlobalTarget:this.node.props.globalTapTarget
                }
                ))
            }
            unmount() {

            }

        }
        let rM=new WeakMap,rj=new WeakMap,rR=e=> {
            let t=rM.get(e.target);
            t&&t(e)
        }
        ,rD=e=> {
            e.forEach(rR)
        }
        ,rO= {
            some:0,all:1
        }
        ;
        class rV extends tf {
            constructor() {
                super(...arguments),this.hasEnteredView=!1,this.isInView=!1
            }
            startObserver() {
                this.unmount();
                let {
                    viewport:e= {

                    }

                }
                =this.node.getProps(), {
                    root:t,margin:n,amount:r="some",once:i
                }
                =e,o= {
                    root:t?t.current:void 0,rootMargin:n,threshold:"number"==typeof r?r:rO[r]
                }
                ;
                return function(e,t,n) {
                    let r=function( {
                        root:e,...t
                    }
                    ) {
                        let n=e||document;
                        rj.has(n)||rj.set(n, {

                        }
                        );
                        let r=rj.get(n),i=JSON.stringify(t);
                        return r[i]||(r[i]=new IntersectionObserver(rD, {
                            root:e,...t
                        }
                        )),r[i]
                    }
                    (t);
                    return rM.set(e,n),r.observe(e),()=> {
                        rM.delete(e),r.unobserve(e)
                    }

                }
                (this.node.current,o,e=> {
                    let {
                        isIntersecting:t
                    }
                    =e;
                    if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;
                    t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);
                    let {
                        onViewportEnter:n,onViewportLeave:r
                    }
                    =this.node.getProps(),o=t?n:r;
                    o&&o(e)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if("undefined"==typeof IntersectionObserver)return;
                let {
                    props:e,prevProps:t
                }
                =this.node;
                ["amount","margin","root"].some(function( {
                    viewport:e= {

                    }

                }
                , {
                    viewport:t= {

                    }

                }
                = {

                }
                ) {
                    return n=>e[n]!==t[n]
                }
                (e,t))&&this.startObserver()
            }
            unmount() {

            }

        }
        let rL=(0,no.createContext)( {
            strict:!1
        }
        );
        var rN=n(51508);
        let rF=(0,no.createContext)( {

        }
        );
        function rI(e) {
            return r(e.animate)||tl.some(t=>ts(e[t]))
        }
        function rB(e) {
            return!!(rI(e)||e.variants)
        }
        function rW(e) {
            return Array.isArray(e)?e.join(" "):e
        }
        var rU=n(68972);
        let rz= {
            animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]
        }
        ,r$= {

        }
        ;
        for(let e in rz)r$[e]= {
            isEnabled:t=>rz[e].some(e=>!!t[e])
        }
        ;
        let r_=Symbol.for("motionComponentSymbol");
        var rG=n(80845),rq=n(97494);
        function rK(e, {
            layout:t,layoutId:n
        }
        ) {
            return h.has(e)||e.startsWith("origin")||(t||void 0!==n)&&(!!np[e]||"opacity"===e)
        }
        let rX=(e,t)=>t&&"number"==typeof e?t.transform(e):e,rH= {
            ...eC.ai,transform:Math.round
        }
        ,rY= {
            rotate:eM.uj,rotateX:eM.uj,rotateY:eM.uj,rotateZ:eM.uj,scale:eC.hs,scaleX:eC.hs,scaleY:eC.hs,scaleZ:eC.hs,skew:eM.uj,skewX:eM.uj,skewY:eM.uj,distance:eM.px,translateX:eM.px,translateY:eM.px,translateZ:eM.px,x:eM.px,y:eM.px,z:eM.px,perspective:eM.px,transformPerspective:eM.px,opacity:eC.X4,originX:eM.gQ,originY:eM.gQ,originZ:eM.px
        }
        ,rQ= {
            borderWidth:eM.px,borderTopWidth:eM.px,borderRightWidth:eM.px,borderBottomWidth:eM.px,borderLeftWidth:eM.px,borderRadius:eM.px,radius:eM.px,borderTopLeftRadius:eM.px,borderTopRightRadius:eM.px,borderBottomRightRadius:eM.px,borderBottomLeftRadius:eM.px,width:eM.px,maxWidth:eM.px,height:eM.px,maxHeight:eM.px,top:eM.px,right:eM.px,bottom:eM.px,left:eM.px,padding:eM.px,paddingTop:eM.px,paddingRight:eM.px,paddingBottom:eM.px,paddingLeft:eM.px,margin:eM.px,marginTop:eM.px,marginRight:eM.px,marginBottom:eM.px,marginLeft:eM.px,backgroundPositionX:eM.px,backgroundPositionY:eM.px,...rY,zIndex:rH,fillOpacity:eC.X4,strokeOpacity:eC.X4,numOctaves:rH
        }
        ,rZ= {
            x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"
        }
        ,rJ=d.length;
        function r0(e,t,n) {
            let {
                style:r,vars:i,transformOrigin:o
            }
            =e,s=!1,a=!1;
            for(let e in t) {
                let n=t[e];
                if(h.has(e)) {
                    s=!0;
                    continue
                }
                if((0,nh.j)(e)) {
                    i[e]=n;
                    continue
                }
                 {
                    let t=rX(n,rQ[e]);
                    e.startsWith("origin")?(a=!0,o[e]=t):r[e]=t
                }

            }
            if(!t.transform&&(s||n?r.transform=function(e,t,n) {
                let r="",i=!0;
                for(let o=0;
                o<rJ;
                o++) {
                    let s=d[o],a=e[s];
                    if(void 0===a)continue;
                    let l=!0;
                    if(!(l="number"==typeof a?a===+!!s.startsWith("scale"):0===parseFloat(a))||n) {
                        let e=rX(a,rQ[s]);
                        if(!l) {
                            i=!1;
                            let t=rZ[s]||s;
                            r+=`$ {
                                t
                            }
                            ($ {
                                e
                            }
                            ) `
                        }
                        n&&(t[s]=e)
                    }

                }
                return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r
            }
            (t,e.transform,n):r.transform&&(r.transform="none")),a) {
                let {
                    originX:e="50%",originY:t="50%",originZ:n=0
                }
                =o;
                r.transformOrigin=`$ {
                    e
                }
                 $ {
                    t
                }
                 $ {
                    n
                }
                `
            }

        }
        let r1=()=>( {
            style: {

            }
            ,transform: {

            }
            ,transformOrigin: {

            }
            ,vars: {

            }

        }
        );
        function r2(e,t,n) {
            for(let r in t)g(t[r])||rK(r,n)||(e[r]=t[r])
        }
        let r5= {
            offset:"stroke-dashoffset",array:"stroke-dasharray"
        }
        ,r6= {
            offset:"strokeDashoffset",array:"strokeDasharray"
        }
        ;
        function r9(e, {
            attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...a
        }
        ,l,u,c) {
            if(r0(e,a,u),l) {
                e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);
                return
            }
            e.attrs=e.style,e.style= {

            }
            ;
            let {
                attrs:d,style:h
            }
            =e;
            d.transform&&(h.transform=d.transform,delete d.transform),(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=c?.transformBox??"fill-box",delete d.transformBox),void 0!==t&&(d.x=t),void 0!==n&&(d.y=n),void 0!==r&&(d.scale=r),void 0!==i&&function(e,t,n=1,r=0,i=!0) {
                e.pathLength=1;
                let o=i?r5:r6;
                e[o.offset]=eM.px.transform(-r);
                let s=eM.px.transform(t),a=eM.px.transform(n);
                e[o.array]=`$ {
                    s
                }
                 $ {
                    a
                }
                `
            }
            (d,i,o,s,!1)
        }
        let r4=()=>( {
            ...r1(),attrs: {

            }

        }
        ),r3=e=>"string"==typeof e&&"svg"===e.toLowerCase(),r8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);
        function r7(e) {
            return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||r8.has(e)
        }
        let ie=e=>!r7(e);
        try {
            !function(e) {
                "function"==typeof e&&(ie=t=>t.startsWith("on")?!r7(t):e(t))
            }
            (require("@emotion/is-prop-valid").default)
        }
        catch {

        }
        let it=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];
        function ir(e) {
            if("string"!=typeof e||e.includes("-"));
            else if(it.indexOf(e)>-1||/[A-Z]/u.test(e))return!0;
            return!1
        }
        var ii=n(82885);
        let io=e=>(t,n)=> {
            let i=(0,no.useContext)(rF),s=(0,no.useContext)(rG.t),a=()=>(function( {
                scrapeMotionValuesFromProps:e,createRenderState:t
            }
            ,n,i,s) {
                return {
                    latestValues:function(e,t,n,i) {
                        let s= {

                        }
                        ,a=i(e, {

                        }
                        );
                        for(let e in a)s[e]=nE(a[e]);
                        let {
                            initial:l,animate:u
                        }
                        =e,c=rI(e),d=rB(e);
                        t&&d&&!c&&!1!==e.inherit&&(void 0===l&&(l=t.initial),void 0===u&&(u=t.animate));
                        let h=!!n&&!1===n.initial,p=(h=h||!1===l)?u:l;
                        if(p&&"boolean"!=typeof p&&!r(p)) {
                            let t=Array.isArray(p)?p:[p];
                            for(let n=0;
                            n<t.length;
                            n++) {
                                let r=o(e,t[n]);
                                if(r) {
                                    let {
                                        transitionEnd:e,transition:t,...n
                                    }
                                    =r;
                                    for(let e in n) {
                                        let t=n[e];
                                        if(Array.isArray(t)) {
                                            let e=h?t.length-1:0;
                                            t=t[e]
                                        }
                                        null!==t&&(s[e]=t)
                                    }
                                    for(let t in e)s[t]=e[t]
                                }

                            }

                        }
                        return s
                    }
                    (n,i,s,e),renderState:t()
                }

            }
            )(e,t,i,s);
            return n?a():(0,ii.M)(a)
        }
        ;
        function is(e,t,n) {
            let {
                style:r
            }
            =e,i= {

            }
            ;
            for(let o in r)(g(r[o])||t.style&&g(t.style[o])||rK(o,e)||n?.getValue(o)?.liveStyle!==void 0)&&(i[o]=r[o]);
            return i
        }
        let ia= {
            useVisualState:io( {
                scrapeMotionValuesFromProps:is,createRenderState:r1
            }
            )
        }
        ;
        function il(e,t,n) {
            let r=is(e,t,n);
            for(let n in e)(g(e[n])||g(t[n]))&&(r[-1!==d.indexOf(n)?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n]=e[n]);
            return r
        }
        let iu= {
            useVisualState:io( {
                scrapeMotionValuesFromProps:il,createRenderState:r4
            }
            )
        }
        ,ic=e=>t=>t.test(e),id=[eC.ai,eM.px,eM.KN,eM.uj,eM.vw,eM.vh, {
            test:e=>"auto"===e,parse:e=>e
        }
        ],ih=e=>id.find(ic(e)),ip=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),im=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,iv=e=>/^0[^.\s]+$/u.test(e);
        var ig=n(30614);
        let iy=new Set(["brightness","contrast","saturate","opacity"]);
        function ib(e) {
            let[t,n]=e.slice(0,-1).split("(");
            if("drop-shadow"===t)return e;
            let[r]=n.match(ig.S)||[];
            if(!r)return e;
            let i=n.replace(r,""),o=+!!iy.has(t);
            return r!==n&&(o*=100),t+"("+o+i+")"
        }
        let ix=/\b([a-z-]*)\(.*?\)/gu,iw= {
            ...eJ.f,getAnimatableNone:e=> {
                let t=e.match(ix);
                return t?t.map(ib).join(" "):e
            }

        }
        ;
        var iE=n(4272);
        let iP= {
            ...rQ,color:iE.y,backgroundColor:iE.y,outlineColor:iE.y,fill:iE.y,stroke:iE.y,borderColor:iE.y,borderTopColor:iE.y,borderRightColor:iE.y,borderBottomColor:iE.y,borderLeftColor:iE.y,filter:iw,WebkitFilter:iw
        }
        ,iT=e=>iP[e];
        function iS(e,t) {
            let n=iT(e);
            return n!==iw&&(n=eJ.f),n.getAnimatableNone?n.getAnimatableNone(t):void 0
        }
        let ik=new Set(["auto","none","0"]);
        class iA extends eW {
            constructor(e,t,n,r,i) {
                super(e,t,n,r,i,!0)
            }
            readKeyframes() {
                let {
                    unresolvedKeyframes:e,element:t,name:n
                }
                =this;
                if(!t||!t.current)return;
                super.readKeyframes();
                for(let n=0;
                n<e.length;
                n++) {
                    let r=e[n];
                    if("string"==typeof r&&(r=r.trim(),(0,nh.p)(r))) {
                        let i=function e(t,n,r=1) {
                            (0,V.V)(r<=4,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                            let[i,o]=function(e) {
                                let t=im.exec(e);
                                if(!t)return[,];
                                let[,n,r,i]=t;
                                return[`--$ {
                                    n??r
                                }
                                `,i]
                            }
                            (t);
                            if(!i)return;
                            let s=window.getComputedStyle(n).getPropertyValue(i);
                            if(s) {
                                let e=s.trim();
                                return ip(e)?parseFloat(e):e
                            }
                            return(0,nh.p)(o)?e(o,n,r+1):o
                        }
                        (r,t.current);
                        void 0!==i&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)
                    }

                }
                if(this.resolveNoneKeyframes(),!p.has(n)||2!==e.length)return;
                let[r,i]=e,o=ih(r),s=ih(i);
                if(o!==s)if(ej(o)&&ej(s))for(let t=0;
                t<e.length;
                t++) {
                    let n=e[t];
                    "string"==typeof n&&(e[t]=parseFloat(n))
                }
                else eO[n]&&(this.needsMeasurement=!0)
            }
            resolveNoneKeyframes() {
                let {
                    unresolvedKeyframes:e,name:t
                }
                =this,n=[];
                for(let t=0;
                t<e.length;
                t++) {
                    var r;
                    (null===e[t]||("number"==typeof(r=e[t])?0===r:null===r||"none"===r||"0"===r||iv(r)))&&n.push(t)
                }
                n.length&&function(e,t,n) {
                    let r,i=0;
                    for(;
                    i<e.length&&!r;
                    ) {
                        let t=e[i];
                        "string"==typeof t&&!ik.has(t)&&(0,eJ.V)(t).values.length&&(r=e[i]),i++
                    }
                    if(r&&n)for(let i of t)e[i]=iS(n,r)
                }
                (e,n,t)
            }
            measureInitialState() {
                let {
                    element:e,unresolvedKeyframes:t,name:n
                }
                =this;
                if(!e||!e.current)return;
                "height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=eO[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;
                let r=t[t.length-1];
                void 0!==r&&e.getValue(n,r).jump(r,!1)
            }
            measureEndState() {
                let {
                    element:e,name:t,unresolvedKeyframes:n
                }
                =this;
                if(!e||!e.current)return;
                let r=e.getValue(t);
                r&&r.jump(this.measuredOrigin,!1);
                let i=n.length-1,o=n[i];
                n[i]=eO[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=> {
                    e.getValue(t).set(n)
                }
                ),this.resolveNoneKeyframes()
            }

        }
        let iC=[...id,iE.y,eJ.f],iM=e=>iC.find(ic(e)),ij= {
            current:null
        }
        ,iR= {
            current:!1
        }
        ,iD=new WeakMap,iO=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];
        class iV {
            scrapeMotionValuesFromProps(e,t,n) {
                return {

                }

            }
            constructor( {
                parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:o
            }
            ,s= {

            }
            ) {
                this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=eW,this.features= {

                }
                ,this.valueSubscriptions=new Map,this.prevMotionValues= {

                }
                ,this.events= {

                }
                ,this.propEventSubscriptions= {

                }
                ,this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=> {
                    this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))
                }
                ,this.renderScheduledAt=0,this.scheduleRender=()=> {
                    let e=S.k.now();
                    this.renderScheduledAt<e&&(this.renderScheduledAt=e,c.Gt.render(this.render,!1,!0))
                }
                ;
                let {
                    latestValues:a,renderState:l
                }
                =o;
                this.latestValues=a,this.baseTarget= {
                    ...a
                }
                ,this.initialValues=t.initial? {
                    ...a
                }
                : {

                }
                ,this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=s,this.blockInitialAnimation=!!i,this.isControllingVariants=rI(t),this.isVariantNode=rB(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);
                let {
                    willChange:u,...d
                }
                =this.scrapeMotionValuesFromProps(t, {

                }
                ,this);
                for(let e in d) {
                    let t=d[e];
                    void 0!==a[e]&&g(t)&&t.set(a[e],!1)
                }

            }
            mount(e) {
                this.current=e,iD.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),iR.current||function() {
                    if(iR.current=!0,rU.B)if(window.matchMedia) {
                        let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ij.current=e.matches;
                        e.addListener(t),t()
                    }
                    else ij.current=!1
                }
                (),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||ij.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)
            }
            unmount() {
                for(let e in this.projection&&this.projection.unmount(),(0,c.WG)(this.notifyUpdate),(0,c.WG)(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[e].clear();
                for(let e in this.features) {
                    let t=this.features[e];
                    t&&(t.unmount(),t.isMounted=!1)
                }
                this.current=null
            }
            bindToMotionValue(e,t) {
                let n;
                this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();
                let r=h.has(e);
                r&&this.onBindTransform&&this.onBindTransform();
                let i=t.on("change",t=> {
                    this.latestValues[e]=t,this.props.onUpdate&&c.Gt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)
                }
                ),o=t.on("renderRequest",this.scheduleRender);
                window.MotionCheckAppearSync&&(n=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=> {
                    i(),o(),n&&n(),t.owner&&t.stop()
                }
                )
            }
            sortNodePosition(e) {
                return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0
            }
            updateFeatures() {
                let e="animation";
                for(e in r$) {
                    let t=r$[e];
                    if(!t)continue;
                    let {
                        isEnabled:n,Feature:r
                    }
                    =t;
                    if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]) {
                        let t=this.features[e];
                        t.isMounted?t.update():(t.mount(),t.isMounted=!0)
                    }

                }

            }
            triggerBuild() {
                this.build(this.renderState,this.latestValues,this.props)
            }
            measureViewportBox() {
                return this.current?this.measureInstanceViewportBox(this.current,this.props):tL()
            }
            getStaticValue(e) {
                return this.latestValues[e]
            }
            setStaticValue(e,t) {
                this.latestValues[e]=t
            }
            update(e,t) {
                (e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;
                for(let t=0;
                t<iO.length;
                t++) {
                    let n=iO[t];
                    this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);
                    let r=e["on"+n];
                    r&&(this.propEventSubscriptions[n]=this.on(n,r))
                }
                this.prevMotionValues=function(e,t,n) {
                    for(let r in t) {
                        let i=t[r],o=n[r];
                        if(g(i))e.addValue(r,i);
                        else if(g(o))e.addValue(r,(0,f.OQ)(i, {
                            owner:e
                        }
                        ));
                        else if(o!==i)if(e.hasValue(r)) {
                            let t=e.getValue(r);
                            !0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)
                        }
                        else {
                            let t=e.getStaticValue(r);
                            e.addValue(r,(0,f.OQ)(void 0!==t?t:i, {
                                owner:e
                            }
                            ))
                        }

                    }
                    for(let r in n)void 0===t[r]&&e.removeValue(r);
                    return t
                }
                (this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(e) {
                return this.props.variants?this.props.variants[e]:void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0
            }
            addVariantChild(e) {
                let t=this.getClosestVariantNode();
                if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)
            }
            addValue(e,t) {
                let n=this.values.get(e);
                t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())
            }
            removeValue(e) {
                this.values.delete(e);
                let t=this.valueSubscriptions.get(e);
                t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)
            }
            hasValue(e) {
                return this.values.has(e)
            }
            getValue(e,t) {
                if(this.props.values&&this.props.values[e])return this.props.values[e];
                let n=this.values.get(e);
                return void 0===n&&void 0!==t&&(n=(0,f.OQ)(null===t?void 0:t, {
                    owner:this
                }
                ),this.addValue(e,n)),n
            }
            readValue(e,t) {
                let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];
                return null!=n&&("string"==typeof n&&(ip(n)||iv(n))?n=parseFloat(n):!iM(n)&&eJ.f.test(t)&&(n=iS(e,t)),this.setBaseTarget(e,g(n)?n.get():n)),g(n)?n.get():n
            }
            setBaseTarget(e,t) {
                this.baseTarget[e]=t
            }
            getBaseTarget(e) {
                let t, {
                    initial:n
                }
                =this.props;
                if("string"==typeof n||"object"==typeof n) {
                    let r=o(this.props,n,this.presenceContext?.custom);
                    r&&(t=r[e])
                }
                if(n&&void 0!==t)return t;
                let r=this.getBaseTargetFromProps(this.props,e);
                return void 0===r||g(r)?void 0!==this.initialValues[e]&&void 0===t?void 0:this.baseTarget[e]:r
            }
            on(e,t) {
                return this.events[e]||(this.events[e]=new ny.v),this.events[e].add(t)
            }
            notify(e,...t) {
                this.events[e]&&this.events[e].notify(...t)
            }

        }
        class iL extends iV {
            constructor() {
                super(...arguments),this.KeyframeResolver=iA
            }
            sortInstanceNodePosition(e,t) {
                return 2&e.compareDocumentPosition(t)?1:-1
            }
            getBaseTargetFromProps(e,t) {
                return e.style?e.style[t]:void 0
            }
            removeValueFromRenderState(e, {
                vars:t,style:n
            }
            ) {
                delete t[e],delete n[e]
            }
            handleChildMotionValue() {
                this.childSubscription&&(this.childSubscription(),delete this.childSubscription);
                let {
                    children:e
                }
                =this.props;
                g(e)&&(this.childSubscription=e.on("change",e=> {
                    this.current&&(this.current.textContent=`$ {
                        e
                    }
                    `)
                }
                ))
            }

        }
        function iN(e, {
            style:t,vars:n
        }
        ,r,i) {
            for(let o in Object.assign(e.style,t,i&&i.getProjectionStyles(r)),n)e.style.setProperty(o,n[o])
        }
        class iF extends iL {
            constructor() {
                super(...arguments),this.type="html",this.renderInstance=iN
            }
            readValueFromInstance(e,t) {
                if(h.has(t))return this.projection?.isProjecting?eT(t):ek(e,t);
                 {
                    let n=window.getComputedStyle(e),r=((0,nh.j)(t)?n.getPropertyValue(t):n[t])||0;
                    return"string"==typeof r?r.trim():r
                }

            }
            measureInstanceViewportBox(e, {
                transformPagePoint:t
            }
            ) {
                return tK(e,t)
            }
            build(e,t,n) {
                r0(e,t,n.transformTemplate)
            }
            scrapeMotionValuesFromProps(e,t,n) {
                return is(e,t,n)
            }

        }
        let iI=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);
        class iB extends iL {
            constructor() {
                super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=tL
            }
            getBaseTargetFromProps(e,t) {
                return e[t]
            }
            readValueFromInstance(e,t) {
                if(h.has(t)) {
                    let e=iT(t);
                    return e&&e.default||0
                }
                return t=iI.has(t)?t:b(t),e.getAttribute(t)
            }
            scrapeMotionValuesFromProps(e,t,n) {
                return il(e,t,n)
            }
            build(e,t,n) {
                r9(e,t,this.isSVGTag,n.transformTemplate,n.style)
            }
            renderInstance(e,t,n,r) {
                for(let n in iN(e,t,void 0,r),t.attrs)e.setAttribute(iI.has(n)?n:b(n),t.attrs[n])
            }
            mount(e) {
                this.isSVGTag=r3(e.tagName),super.mount(e)
            }

        }
        let iW=function(e) {
            if("undefined"==typeof Proxy)return e;
            let t=new Map;
            return new Proxy((...t)=>e(...t), {
                get:(n,r)=>"create"===r?e:(t.has(r)||t.set(r,e(r)),t.get(r))
            }
            )
        }
        ((l= {
            animation: {
                Feature:tm
            }
            ,exit: {
                Feature:tg
            }
            ,inView: {
                Feature:rV
            }
            ,tap: {
                Feature:rC
            }
            ,focus: {
                Feature:rb
            }
            ,hover: {
                Feature:ry
            }
            ,pan: {
                Feature:nn
            }
            ,drag: {
                Feature:ne,ProjectionNode:rp,MeasureLayout:nm
            }
            ,layout: {
                ProjectionNode:rp,MeasureLayout:nm
            }

        }
        ,u=(e,t)=>ir(e)?new iB(t):new iF(t, {
            allowProjection:e!==no.Fragment
        }
        ),function(e, {
            forwardMotionProps:t
        }
        = {
            forwardMotionProps:!1
        }
        ) {
            return function(e) {
                var t,n;
                let {
                    preloadedFeatures:r,createVisualElement:i,useRender:o,useVisualState:s,Component:a
                }
                =e;
                function l(e,t) {
                    var n,r,l;
                    let u,c= {
                        ...(0,no.useContext)(rN.Q),...e,layoutId:function(e) {
                            let {
                                layoutId:t
                            }
                            =e,n=(0,no.useContext)(na.L).id;
                            return n&&void 0!==t?n+"-"+t:t
                        }
                        (e)
                    }
                    , {
                        isStatic:d
                    }
                    =c,h=function(e) {
                        let {
                            initial:t,animate:n
                        }
                        =function(e,t) {
                            if(rI(e)) {
                                let {
                                    initial:t,animate:n
                                }
                                =e;
                                return {
                                    initial:!1===t||ts(t)?t:void 0,animate:ts(n)?n:void 0
                                }

                            }
                            return!1!==e.inherit?t: {

                            }

                        }
                        (e,(0,no.useContext)(rF));
                        return(0,no.useMemo)(()=>( {
                            initial:t,animate:n
                        }
                        ),[rW(t),rW(n)])
                    }
                    (e),p=s(e,d);
                    if(!d&&rU.B) {
                        r=0,l=0,(0,no.useContext)(rL).strict;
                        let e=function(e) {
                            let {
                                drag:t,layout:n
                            }
                            =r$;
                            if(!t&&!n)return {

                            }
                            ;
                            let r= {
                                ...t,...n
                            }
                            ;
                            return {
                                MeasureLayout:(null==t?void 0:t.isEnabled(e))||(null==n?void 0:n.isEnabled(e))?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode
                            }

                        }
                        (c);
                        u=e.MeasureLayout,h.visualElement=function(e,t,n,r,i) {
                            let {
                                visualElement:o
                            }
                            =(0,no.useContext)(rF),s=(0,no.useContext)(rL),a=(0,no.useContext)(rG.t),l=(0,no.useContext)(rN.Q).reducedMotion,u=(0,no.useRef)(null);
                            r=r||s.renderer,!u.current&&r&&(u.current=r(e, {
                                visualState:t,parent:o,props:n,presenceContext:a,blockInitialAnimation:!!a&&!1===a.initial,reducedMotionConfig:l
                            }
                            ));
                            let c=u.current,d=(0,no.useContext)(nl);
                            c&&!c.projection&&i&&("html"===c.type||"svg"===c.type)&&function(e,t,n,r) {
                                let {
                                    layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutCrossfade:c
                                }
                                =t;
                                e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:function e(t) {
                                    if(t)return!1!==t.options.allowProjection?t.projection:e(t.parent)
                                }
                                (e.parent)),e.projection.setOptions( {
                                    layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&tH(a),visualElement:e,animationType:"string"==typeof o?o:"both",initialPromotionConfig:r,crossfade:c,layoutScroll:l,layoutRoot:u
                                }
                                )
                            }
                            (u.current,n,i,d);
                            let h=(0,no.useRef)(!1);
                            (0,no.useInsertionEffect)(()=> {
                                c&&h.current&&c.update(n,a)
                            }
                            );
                            let p=n[x],f=(0,no.useRef)(!!p&&!window.MotionHandoffIsComplete?.(p)&&window.MotionHasOptimisedAnimation?.(p));
                            return(0,rq.E)(()=> {
                                c&&(h.current=!0,window.MotionIsMounted=!0,c.updateFeatures(),ni.render(c.render),f.current&&c.animationState&&c.animationState.animateChanges())
                            }
                            ),(0,no.useEffect)(()=> {
                                c&&(!f.current&&c.animationState&&c.animationState.animateChanges(),f.current&&(queueMicrotask(()=> {
                                    window.MotionHandoffMarkAsComplete?.(p)
                                }
                                ),f.current=!1))
                            }
                            ),c
                        }
                        (a,p,c,i,e.ProjectionNode)
                    }
                    return(0,nr.jsxs)(rF.Provider, {
                        value:h,children:[u&&h.visualElement?(0,nr.jsx)(u, {
                            visualElement:h.visualElement,...c
                        }
                        ):null,o(a,e,(n=h.visualElement,(0,no.useCallback)(e=> {
                            e&&p.onMount&&p.onMount(e),n&&(e?n.mount(e):n.unmount()),t&&("function"==typeof t?t(e):tH(t)&&(t.current=e))
                        }
                        ,[n])),p,d,h.visualElement)]
                    }
                    )
                }
                r&&function(e) {
                    for(let t in e)r$[t]= {
                        ...r$[t],...e[t]
                    }

                }
                (r),l.displayName="motion.".concat("string"==typeof a?a:"create(".concat(null!=(n=null!=(t=a.displayName)?t:a.name)?n:"",")"));
                let u=(0,no.forwardRef)(l);
                return u[r_]=a,u
            }
            ( {
                ...ir(e)?iu:ia,preloadedFeatures:l,useRender:function(e=!1) {
                    return(t,n,r, {
                        latestValues:i
                    }
                    ,o)=> {
                        let s=(ir(t)?function(e,t,n,r) {
                            let i=(0,no.useMemo)(()=> {
                                let n=r4();
                                return r9(n,t,r3(r),e.transformTemplate,e.style), {
                                    ...n.attrs,style: {
                                        ...n.style
                                    }

                                }

                            }
                            ,[t]);
                            if(e.style) {
                                let t= {

                                }
                                ;
                                r2(t,e.style,e),i.style= {
                                    ...t,...i.style
                                }

                            }
                            return i
                        }
                        :function(e,t) {
                            let n= {

                            }
                            ,r=function(e,t) {
                                let n=e.style|| {

                                }
                                ,r= {

                                }
                                ;
                                return r2(r,n,e),Object.assign(r,function( {
                                    transformTemplate:e
                                }
                                ,t) {
                                    return(0,no.useMemo)(()=> {
                                        let n=r1();
                                        return r0(n,t,e),Object.assign( {

                                        }
                                        ,n.vars,n.style)
                                    }
                                    ,[t])
                                }
                                (e,t)),r
                            }
                            (e,t);
                            return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":`pan-$ {
                                "x"===e.drag?"y":"x"
                            }
                            `),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n
                        }
                        )(n,i,o,t),a=function(e,t,n) {
                            let r= {

                            }
                            ;
                            for(let i in e)("values"!==i||"object"!=typeof e.values)&&(ie(i)||!0===n&&r7(i)||!t&&!r7(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);
                            return r
                        }
                        (n,"string"==typeof t,e),l=t!==no.Fragment? {
                            ...a,...s,ref:r
                        }
                        : {

                        }
                        , {
                            children:u
                        }
                        =n,c=(0,no.useMemo)(()=>g(u)?u.get():u,[u]);
                        return(0,no.createElement)(t, {
                            ...l,children:c
                        }
                        )
                    }

                }
                (t),createVisualElement:u,Component:e
            }
            )
        }
        ))
    }
    ,97494:(e,t,n)=> {
        n.d(t, {
            E:()=>i
        }
        );
        var r=n(12115);
        let i=n(68972).B?r.useLayoutEffect:r.useEffect
    }
    ,99708:(e,t,n)=> {
        n.d(t, {
            DX:()=>a,Dc:()=>u,TL:()=>s
        }
        );
        var r=n(12115),i=n(6101),o=n(95155);
        function s(e) {
            let t=function(e) {
                let t=r.forwardRef((e,t)=> {
                    let {
                        children:n,...o
                    }
                    =e;
                    if(r.isValidElement(n)) {
                        var s;
                        let e,a,l=(s=n,(a=(e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?s.ref:(a=(e=Object.getOwnPropertyDescriptor(s,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?s.props.ref:s.props.ref||s.ref),u=function(e,t) {
                            let n= {
                                ...t
                            }
                            ;
                            for(let r in t) {
                                let i=e[r],o=t[r];
                                /^on[A-Z]/.test(r)?i&&o?n[r]=(...e)=> {
                                    let t=o(...e);
                                    return i(...e),t
                                }
                                :i&&(n[r]=i):"style"===r?n[r]= {
                                    ...i,...o
                                }
                                :"className"===r&&(n[r]=[i,o].filter(Boolean).join(" "))
                            }
                            return {
                                ...e,...n
                            }

                        }
                        (o,n.props);
                        return n.type!==r.Fragment&&(u.ref=t?(0,i.t)(t,l):l),r.cloneElement(n,u)
                    }
                    return r.Children.count(n)>1?r.Children.only(null):null
                }
                );
                return t.displayName=`$ {
                    e
                }
                .SlotClone`,t
            }
            (e),n=r.forwardRef((e,n)=> {
                let {
                    children:i,...s
                }
                =e,a=r.Children.toArray(i),l=a.find(c);
                if(l) {
                    let e=l.props.children,i=a.map(t=>t!==l?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);
                    return(0,o.jsx)(t, {
                        ...s,ref:n,children:r.isValidElement(e)?r.cloneElement(e,void 0,i):null
                    }
                    )
                }
                return(0,o.jsx)(t, {
                    ...s,ref:n,children:i
                }
                )
            }
            );
            return n.displayName=`$ {
                e
            }
            .Slot`,n
        }
        var a=s("Slot"),l=Symbol("radix.slottable");
        function u(e) {
            let t=( {
                children:e
            }
            )=>(0,o.jsx)(o.Fragment, {
                children:e
            }
            );
            return t.displayName=`$ {
                e
            }
            .Slottable`,t.__radixId=l,t
        }
        function c(e) {
            return r.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===l
        }

    }

}
]);
