(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7777], {
    2580:(e,t,r)=> {
        "use strict";
        r.r(t),r.d(t, {
            default:()=>O
        }
        );
        var n=r(95155),a=r(12115),i=r(7828),o=r(47746),s=r(71789),l=r(13568),c=r(41046),d=r(66766),u=r(29869),f=r(91788),p=r(19946);
        let h=(0,p.A)("SquareSplitVertical",[["path", {
            d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"
        }
        ],["path", {
            d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"
        }
        ],["line", {
            x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"
        }
        ]]),m=(0,p.A)("RefreshCw",[["path", {
            d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"
        }
        ],["path", {
            d:"M21 3v5h-5",key:"1q7to0"
        }
        ],["path", {
            d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"
        }
        ],["path", {
            d:"M8 16H3v5",key:"1cv678"
        }
        ]]);
        var x=r(97168),v=r(88482),g=(0,a.forwardRef)((e,t)=> {
            let {
                transition:r,...a
            }
            =e;
            return(0,n.jsx)("div", {
                ...a,style: {
                    position:"absolute",top:0,left:0,width:"100%",height:"100%",transition:r?"clip-path ".concat(r):void 0,userSelect:"none",willChange:"clip-path, transition",KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"
                }
                ,"data-rcs":"clip-item",ref:t
            }
            )
        }
        );
        g.displayName="ContainerClip";
        var y=(0,a.forwardRef)((e,t)=> {
            let {
                children:r,disabled:a,portrait:i,position:o,transition:s
            }
            =e,l= {
                position:"absolute",top:0,width:i?"100%":void 0,height:i?void 0:"100%",background:"none",border:0,padding:0,pointerEvents:"all",appearance:"none",WebkitAppearance:"none",MozAppearance:"none",outline:0,transform:i?"translate3d(0, -50% ,0)":"translate3d(-50%, 0, 0)",transition:s?"".concat(i?"top":"left"," ").concat(s):void 0
            }
            ;
            return(0,n.jsx)("button", {
                ref:t,"aria-label":"Drag to move or focus and use arrow keys","aria-orientation":i?"vertical":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":o,"data-rcs":"handle-container",disabled:a,role:"slider",style:l,children:r
            }
            )
        }
        );
        y.displayName="ThisHandleContainer";
        var b=e=> {
            let {
                flip:t
            }
            =e;
            return(0,n.jsx)("div", {
                className:"__rcs-handle-arrow",style: {
                    width:0,height:0,borderTop:"8px solid transparent",borderRight:"10px solid",borderBottom:"8px solid transparent",transform:t?"rotate(180deg)":void 0
                }

            }
            )
        }
        ,w=e=> {
            let {
                className:t="__rcs-handle-root",disabled:r,buttonStyle:a,linesStyle:i,portrait:o,style:s,...l
            }
            =e,c= {
                display:"flex",flexDirection:o?"row":"column",placeItems:"center",height:"100%",cursor:r?"not-allowed":o?"ns-resize":"ew-resize",pointerEvents:"none",color:"#fff",...s
            }
            ,d= {
                flexGrow:1,height:o?2:"100%",width:o?"100%":2,backgroundColor:"currentColor",pointerEvents:"auto",boxShadow:"0 0 4px rgba(0,0,0,.5)",...i
            }
            ,u= {
                display:"grid",gridAutoFlow:"column",gap:8,placeContent:"center",flexShrink:0,width:56,height:56,borderRadius:"50%",borderStyle:"solid",borderWidth:2,pointerEvents:"auto",backdropFilter:"blur(7px)",WebkitBackdropFilter:"blur(7px)",backgroundColor:"rgba(0, 0, 0, 0.125)",boxShadow:"0 0 4px rgba(0,0,0,.35)",transform:o?"rotate(90deg)":void 0,...a
            }
            ;
            return(0,n.jsxs)("div", {
                ...l,className:t,style:c,children:[(0,n.jsx)("div", {
                    className:"__rcs-handle-line",style:d
                }
                ),(0,n.jsxs)("div", {
                    className:"__rcs-handle-button",style:u,children:[(0,n.jsx)(b, {

                    }
                    ),(0,n.jsx)(b, {
                        flip:!0
                    }
                    )]
                }
                ),(0,n.jsx)("div", {
                    className:"__rcs-handle-line",style:d
                }
                )]
            }
            )
        }
        ,j=(e=>(e.ARROW_LEFT="ArrowLeft",e.ARROW_RIGHT="ArrowRight",e.ARROW_UP="ArrowUp",e.ARROW_DOWN="ArrowDown",e))(j|| {

        }
        ),k=function() {
            let {
                boxSizing:e="border-box",objectFit:t="cover",objectPosition:r="center center",...n
            }
            =arguments.length>0&&void 0!==arguments[0]?arguments[0]: {

            }
            ;
            return {
                display:"block",width:"100%",height:"100%",maxWidth:"100%",boxSizing:e,objectFit:t,objectPosition:r,...n
            }

        }
        ,R=e=> {
            let t=(0,a.useRef)(e);
            return(0,a.useEffect)(()=> {
                t.current=e
            }
            ),t.current
        }
        ,C=(e,t,r,n)=> {
            let i=(0,a.useRef)();
            (0,a.useEffect)(()=> {
                i.current=t
            }
            ,[t]),(0,a.useEffect)(()=> {
                if(!(r&&r.addEventListener))return;
                let t=e=>i.current&&i.current(e);
                return r.addEventListener(e,t,n),()=> {
                    r.removeEventListener(e,t,n)
                }

            }
            ,[e,r,n])
        }
        ,N="u">typeof window&&"u">typeof window.document&&"u">typeof window.document.createElement?a.useLayoutEffect:a.useEffect,E=(e,t)=> {
            let r=(0,a.useRef)(),n=(0,a.useCallback)(()=> {
                e.current&&r.current&&r.current.observe(e.current)
            }
            ,[e]);
            N(()=>(r.current=new ResizeObserver(e=> {
                let[r]=e;
                return t(r.contentRect)
            }
            ),n(),()=> {
                r.current&&r.current.disconnect()
            }
            ),[t,n])
        }
        ,S= {
            capture:!1,passive:!0
        }
        ,A= {
            capture:!0,passive:!1
        }
        ,L=e=> {
            e.preventDefault(),e.currentTarget.focus()
        }
        ,U=(0,a.forwardRef)((e,t)=> {
            let {
                boundsPadding:r=0,browsingContext:i=globalThis,changePositionOnHover:o=!1,disabled:s=!1,handle:l,itemOne:c,itemTwo:d,keyboardIncrement:u="5%",onlyHandleDraggable:f=!1,onPositionChange:p,portrait:h=!1,position:m=50,style:x,transition:v,...b
            }
            =e,k=(0,a.useRef)(null),N=(0,a.useRef)(null),U=(0,a.useRef)(null),_=(0,a.useRef)(m),[O,M]=(0,a.useState)(!1),[z,P]=(0,a.useState)(!0),D=(0,a.useRef)(!1),[F,W]=(0,a.useState)(),B=R(m),T=(0,a.useCallback)(function(e) {
                let {
                    x:t,y:n,isOffset:a
                }
                =e,o=k.current,s=U.current,l=N.current, {
                    width:c,height:d,left:u,top:f
                }
                =o.getBoundingClientRect();
                if(0===c||0===d)return;
                let m=Math.min(Math.max((h?a?n-f-i.scrollY:n:a?t-u-i.scrollX:t)/(h?d:c)*100,0),100),x=h?d/(o.offsetHeight||1):c/(o.offsetWidth||1),v=r*x/(h?d:c)*100,g=Math.min(Math.max(m,v*x),100-v*x);
                _.current=m,s.setAttribute("aria-valuenow","".concat(Math.round(_.current))),s.style.top=h?"".concat(g,"%"):"0",s.style.left=h?"0":"".concat(g,"%"),l.style.clipPath=h?"inset(".concat(g,"% 0 0 0)"):"inset(0 0 0 ".concat(g,"%)"),p&&p(_.current)
            }
            ,[r,p,h,i]);
            (0,a.useEffect)(()=> {
                let {
                    width:e,height:t
                }
                =k.current.getBoundingClientRect(),r=m===B?_.current:m;
                T( {
                    x:e/100*r,y:t/100*r
                }
                )
            }
            ,[r,m,h,B,T]);
            let I=(0,a.useCallback)(e=> {
                e.preventDefault(),s||0!==e.button||(T( {
                    isOffset:!0,x:e.pageX,y:e.pageY
                }
                ),M(!0),P(!0))
            }
            ,[s,T]),H=(0,a.useCallback)(function(e) {
                T( {
                    isOffset:!0,x:e.pageX,y:e.pageY
                }
                ),P(!1)
            }
            ,[T]),q=(0,a.useCallback)(()=> {
                M(!1),P(!0)
            }
            ,[]),V=(0,a.useCallback)(e=> {
                let {
                    width:t,height:r
                }
                =e, {
                    width:n,height:a
                }
                =k.current.getBoundingClientRect();
                T( {
                    x:t/100*_.current*n/t,y:r/100*_.current*a/r
                }
                )
            }
            ,[T]),Z=(0,a.useCallback)(e=> {
                if(!Object.values(j).includes(e.key))return;
                e.preventDefault(),P(!0);
                let {
                    top:t,left:r
                }
                =U.current.getBoundingClientRect(), {
                    width:n,height:a
                }
                =k.current.getBoundingClientRect(),i="string"==typeof u?parseFloat(u):u/n*100,o=Math.min(Math.max((h?"ArrowLeft"===e.key||"ArrowDown"===e.key:"ArrowRight"===e.key||"ArrowUp"===e.key)?_.current+i:_.current-i,0),100);
                T( {
                    x:h?r:n*o/100,y:h?a*o/100:t
                }
                )
            }
            ,[u,h,T]);
            (0,a.useEffect)(()=> {
                W(f?U.current:k.current)
            }
            ,[f]),(0,a.useEffect)(()=> {
                let e=k.current,t=()=> {
                    O||q()
                }
                ;
                return o&&(e.addEventListener("pointermove",H,S),e.addEventListener("pointerleave",t,S)),()=> {
                    e.removeEventListener("pointermove",H),e.removeEventListener("pointerleave",t)
                }

            }
            ,[o,H,q,O]),(0,a.useEffect)(()=>(O&&!D.current&&(i.addEventListener("pointermove",H,S),i.addEventListener("pointerup",q,S),D.current=!0),()=> {
                D.current&&(i.removeEventListener("pointermove",H),i.removeEventListener("pointerup",q),D.current=!1)
            }
            ),[H,q,O,i]),(0,a.useImperativeHandle)(t,()=>( {
                rootContainer:k.current,handleContainer:U.current,setPosition(e) {
                    let {
                        width:t,height:r
                    }
                    =k.current.getBoundingClientRect();
                    T( {
                        x:t/100*e,y:r/100*e
                    }
                    )
                }

            }
            ),[T]),E(k,V),C("keydown",Z,U.current,A),C("click",L,U.current,A),C("pointerdown",I,F,A);
            let $=l||(0,n.jsx)(w, {
                disabled:s,portrait:h
            }
            ),G=z?v:void 0,X= {
                position:"relative",display:"flex",overflow:"hidden",cursor:O?h?"ns-resize":"ew-resize":void 0,touchAction:"none",userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",...x
            }
            ;
            return(0,n.jsxs)("div", {
                ...b,ref:k,style:X,"data-rcs":"root",children:[c,(0,n.jsx)(g, {
                    ref:N,transition:G,children:d
                }
                ),(0,n.jsx)(y, {
                    disabled:s,portrait:h,position:Math.round(_.current),ref:U,transition:G,children:$
                }
                )]
            }
            )
        }
        );
        U.displayName="ReactCompareSlider";
        var _=(0,a.forwardRef)((e,t)=> {
            let {
                style:r,...a
            }
            =e,i=k(r);
            return(0,n.jsx)("img", {
                ref:t,...a,style:i,"data-rcs":"image"
            }
            )
        }
        );
        function O() {
            let[e,t]=(0,a.useState)(null),[r,p]=(0,a.useState)(null),[g,y]=(0,a.useState)(null),[b,w]=(0,a.useState)(!1),[j,k]=(0,a.useState)(!0),[R,C]=(0,a.useState)(!1);
            (0,a.useEffect)(()=> {
                let e=setTimeout(()=>k(!1),1e3);
                return()=>clearTimeout(e)
            }
            ,[]);
            let {
                getRootProps:N,getInputProps:E
            }
            =(0,c.VB)( {
                accept: {
                    "image/*":[]
                }
                ,maxFiles:1,onDrop:e=> {
                    let r=e[0];
                    t(r),p(URL.createObjectURL(r))
                }

            }
            ),S=async()=> {
                if(!e)return void l.oR.error("Please select an image file", {
                    position:"top-right"
                }
                );
                w(!0);
                let t=new FormData;
                t.append("file",e);
                try {
                    let e=await fetch("/api/upload", {
                        method:"POST",body:t
                    }
                    );
                    if(!e.ok)throw Error("Upload failed");
                    let r=(await e.json()).url,n=await fetch("/api/remini?url=".concat(encodeURIComponent(r)));
                    if(!n.ok)throw Error("Upscale failed");
                    let a=await n.json();
                    if(200!==a.status)throw Error(a.error||"Upscale failed");
                    y(a.result),l.oR.success("Image upscaled successfully!", {
                        position:"top-right"
                    }
                    )
                }
                catch(e) {
                    console.error("Upscale error:",e),l.oR.error("Upscale failed: ".concat(e instanceof Error?e.message:"Please try again."), {
                        position:"top-right"
                    }
                    )
                }
                finally {
                    w(!1)
                }

            }
            ,A=async(e,t)=> {
                try {
                    let r=await fetch(e),n=await r.blob(),a=window.URL.createObjectURL(n),i=document.createElement("a");
                    i.href=a,i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(a)
                }
                catch(e) {
                    console.error("Download error:",e),l.oR.error("Download failed. Please try again.", {
                        position:"top-right"
                    }
                    )
                }

            }
            ;
            return j?(0,n.jsx)("div", {
                className:"min-h-screen flex items-center justify-center",children:(0,n.jsx)(s.k, {

                }
                )
            }
            ):(0,n.jsxs)("div", {
                className:"min-h-screen flex flex-col",children:[(0,n.jsx)(i.Navbar, {

                }
                ),(0,n.jsx)("main", {
                    className:"flex-grow container mx-auto px-4 py-8",children:(0,n.jsxs)(v.Zp, {
                        className:"w-full max-w-2xl mx-auto",children:[(0,n.jsx)(v.aR, {
                            children:(0,n.jsx)(v.ZB, {
                                className:"text-3xl font-bold text-center",children:"Remini (Upscale)"
                            }
                            )
                        }
                        ),(0,n.jsx)(v.Wu, {
                            className:"space-y-4",children:g?(0,n.jsxs)("div", {
                                className:"relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden",children:[(0,n.jsx)(U, {
                                    itemOne:(0,n.jsx)(_, {
                                        src:r||"/placeholder.svg",alt:"Before"
                                    }
                                    ),itemTwo:(0,n.jsx)(_, {
                                        src:g,alt:"After"
                                    }
                                    ),className:"absolute inset-0",position:R?50:100,onPositionChange:e=>C(e<100)
                                }
                                ),(0,n.jsxs)("div", {
                                    className:"absolute bottom-4 right-4 flex space-x-2 z-10",children:[(0,n.jsx)(x.$, {
                                        onClick:()=>g&&A(g,"upscaled-image.png"),size:"icon",variant:"secondary",children:(0,n.jsx)(f.A, {
                                            className:"h-4 w-4"
                                        }
                                        )
                                    }
                                    ),(0,n.jsx)(x.$, {
                                        onClick:()=>C(!R),size:"icon",variant:"secondary",children:(0,n.jsx)(h, {
                                            className:"h-4 w-4"
                                        }
                                        )
                                    }
                                    ),(0,n.jsx)(x.$, {
                                        onClick:()=> {
                                            t(null),p(null),y(null),C(!1)
                                        }
                                        ,size:"icon",variant:"secondary",children:(0,n.jsx)(m, {
                                            className:"h-4 w-4"
                                        }
                                        )
                                    }
                                    )]
                                }
                                )]
                            }
                            ):(0,n.jsxs)(n.Fragment, {
                                children:[(0,n.jsxs)("div", {
                                    ...N(),className:"border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center text-center cursor-pointer transition hover:border-gray-400",children:[(0,n.jsx)("input", {
                                        ...E()
                                    }
                                    ),r?(0,n.jsx)("div", {
                                        className:"relative w-full aspect-square",children:(0,n.jsx)(d.default, {
                                            src:r||"/placeholder.svg",alt:"Selected Image",layout:"fill",objectFit:"contain"
                                        }
                                        )
                                    }
                                    ):(0,n.jsx)("p", {
                                        className:"text-muted-foreground",children:"Drag & drop an image, or click to select"
                                    }
                                    )]
                                }
                                ),(0,n.jsx)(x.$, {
                                    onClick:S,className:"w-full",disabled:b||!e,children:b?(0,n.jsx)(s.k, {

                                    }
                                    ):(0,n.jsxs)(n.Fragment, {
                                        children:[(0,n.jsx)(u.A, {
                                            className:"mr-2 h-4 w-4"
                                        }
                                        )," Upscale"]
                                    }
                                    )
                                }
                                )]
                            }
                            )
                        }
                        )]
                    }
                    )
                }
                ),(0,n.jsx)(o.Footer, {

                }
                )]
            }
            )
        }
        _.displayName="ReactCompareSliderImage"
    }
    ,59642:(e,t,r)=> {
        Promise.resolve().then(r.bind(r,2580))
    }
    ,66766:(e,t,r)=> {
        "use strict";
        r.d(t, {
            default:()=>a.a
        }
        );
        var n=r(71469),a=r.n(n)
    }
    ,71469:(e,t,r)=> {
        "use strict";
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
                return l
            }
            ,getImageProps:function() {
                return s
            }

        }
        );
        let n=r(88229),a=r(38883),i=r(33063),o=n._(r(51193));
        function s(e) {
            let {
                props:t
            }
            =(0,a.getImgProps)(e, {
                defaultLoader:o.default,imgConf: {
                    deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0
                }

            }
            );
            for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];
            return {
                props:t
            }

        }
        let l=i.Image
    }
    ,71789:(e,t,r)=> {
        "use strict";
        r.d(t, {
            k:()=>i
        }
        );
        var n=r(95155),a=r(53999);
        function i(e) {
            let {
                className:t
            }
            =e;
            return(0,n.jsx)("div", {
                className:(0,a.cn)("flex items-center justify-center",t),children:(0,n.jsx)("div", {
                    className:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"
                }
                )
            }
            )
        }

    }
    ,88482:(e,t,r)=> {
        "use strict";
        r.d(t, {
            Wu:()=>c,ZB:()=>l,Zp:()=>o,aR:()=>s
        }
        );
        var n=r(95155),a=r(12115),i=r(53999);
        let o=a.forwardRef((e,t)=> {
            let {
                className:r,...a
            }
            =e;
            return(0,n.jsx)("div", {
                ref:t,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a
            }
            )
        }
        );
        o.displayName="Card";
        let s=a.forwardRef((e,t)=> {
            let {
                className:r,...a
            }
            =e;
            return(0,n.jsx)("div", {
                ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...a
            }
            )
        }
        );
        s.displayName="CardHeader";
        let l=a.forwardRef((e,t)=> {
            let {
                className:r,...a
            }
            =e;
            return(0,n.jsx)("div", {
                ref:t,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a
            }
            )
        }
        );
        l.displayName="CardTitle",a.forwardRef((e,t)=> {
            let {
                className:r,...a
            }
            =e;
            return(0,n.jsx)("div", {
                ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...a
            }
            )
        }
        ).displayName="CardDescription";
        let c=a.forwardRef((e,t)=> {
            let {
                className:r,...a
            }
            =e;
            return(0,n.jsx)("div", {
                ref:t,className:(0,i.cn)("p-6 pt-0",r),...a
            }
            )
        }
        );
        c.displayName="CardContent",a.forwardRef((e,t)=> {
            let {
                className:r,...a
            }
            =e;
            return(0,n.jsx)("div", {
                ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",r),...a
            }
            )
        }
        ).displayName="CardFooter"
    }
    ,91788:(e,t,r)=> {
        "use strict";
        r.d(t, {
            A:()=>n
        }
        );
        let n=(0,r(19946).A)("Download",[["path", {
            d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"
        }
        ],["polyline", {
            points:"7 10 12 15 17 10",key:"2ggqvy"
        }
        ],["line", {
            x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"
        }
        ]])
    }

}
,e=> {
    var t=t=>e(e.s=t);
    e.O(0,[6711,9003,3063,3568,9130,2315,8441,1684,7358],()=>t(59642)),_N_E=e.O()
}
]);
