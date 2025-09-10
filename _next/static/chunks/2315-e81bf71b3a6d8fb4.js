"use strict";
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2315], {
    7828:(e,t,s)=> {
        s.d(t, {
            Navbar:()=>$
        }
        );
        var a=s(95155),r=s(6874),l=s.n(r),n=s(86151),i=s(12115),o=s(62098),c=s(93509),d=s(51362),h=s(97168),x=s(60760),m=s(96848);
        function f() {
            let {
                theme:e,setTheme:t
            }
            =(0,d.D)(),[s,r]=i.useState(!1);
            return(i.useEffect(()=> {
                r(!0)
            }
            ,[]),s)?(0,a.jsx)(h.$, {
                variant:"ghost",size:"icon",onClick:()=>t("light"===e?"dark":"light"),className:"relative h-10 w-10",children:(0,a.jsx)(x.N, {
                    mode:"wait",children:"light"===e?(0,a.jsx)(m.P.div, {
                        initial: {
                            scale:0,rotate:90
                        }
                        ,animate: {
                            scale:1,rotate:0
                        }
                        ,exit: {
                            scale:0,rotate:90
                        }
                        ,transition: {
                            duration:.2
                        }
                        ,children:(0,a.jsx)(o.A, {
                            className:"h-6 w-6 font-black"
                        }
                        )
                    }
                    ,"sun"):(0,a.jsx)(m.P.div, {
                        initial: {
                            scale:0,rotate:90
                        }
                        ,animate: {
                            scale:1,rotate:0
                        }
                        ,exit: {
                            scale:0,rotate:90
                        }
                        ,transition: {
                            duration:.2
                        }
                        ,children:(0,a.jsx)(c.A, {
                            className:"h-6 w-6 font-black"
                        }
                        )
                    }
                    ,"moon")
                }
                )
            }
            ):null
        }
        var u=s(75684),p=s(54416),g=s(57340),b=s(71007),j=s(5040),v=s(57434),N=s(29621),w=s(57100),y=s(66474),k=s(60209),C=s(15452),A=s(74466),z=s(53999);
        let P=C.bL,I=C.l9;
        C.bm;
        let B=e=> {
            let {
                className:t,...s
            }
            =e;
            return(0,a.jsx)(C.ZL, {
                className:(0,z.cn)(t),...s
            }
            )
        }
        ;
        B.displayName=C.ZL.displayName;
        let T=i.forwardRef((e,t)=> {
            let {
                className:s,...r
            }
            =e;
            return(0,a.jsx)(C.hJ, {
                className:(0,z.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...r,ref:t
            }
            )
        }
        );
        T.displayName=C.hJ.displayName;
        let D=(0,A.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
            variants: {
                side: {
                    top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
                }

            }
            ,defaultVariants: {
                side:"right"
            }

        }
        ),F=i.forwardRef((e,t)=> {
            let {
                side:s="right",className:r,children:l,...n
            }
            =e;
            return(0,a.jsxs)(B, {
                children:[(0,a.jsx)(T, {

                }
                ),(0,a.jsx)(C.UC, {
                    ref:t,className:(0,z.cn)(D( {
                        side:s
                    }
                    ),r),...n,children:l
                }
                )]
            }
            )
        }
        );
        F.displayName=C.UC.displayName;
        let S=e=> {
            let {
                className:t,...s
            }
            =e;
            return(0,a.jsx)("div", {
                className:(0,z.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...s
            }
            )
        }
        ;
        S.displayName="SheetHeader";
        let H=i.forwardRef((e,t)=> {
            let {
                className:s,...r
            }
            =e;
            return(0,a.jsx)(C.hE, {
                ref:t,className:(0,z.cn)("text-lg font-semibold text-foreground",s),...r
            }
            )
        }
        );
        H.displayName=C.hE.displayName,i.forwardRef((e,t)=> {
            let {
                className:s,...r
            }
            =e;
            return(0,a.jsx)(C.VY, {
                ref:t,className:(0,z.cn)("text-sm text-muted-foreground",s),...r
            }
            )
        }
        ).displayName=C.VY.displayName;
        var O=s(35695);
        let R=[ {
            icon:u.A,href:"https://instagram.com/kiicodeit",label:"Instagram",color:"bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500"
        }
        , {
            icon:function(e) {
                return(0,a.jsx)("svg", {
                    xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,a.jsx)("path", {
                        d:"M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"
                    }
                    )
                }
                )
            }
            ,href:"https://tiktok.com/@kiicodeproject",label:"TikTok",color:"bg-black"
        }
        , {
            icon:k.m,href:"https://chat.whatsapp.com/F8ffS5sazP60LYpG0IACEE",label:"WhatsApp",color:"bg-[#25D366]"
        }
        ];
        function E(e) {
            let {
                href:t,icon:s,children:r,setIsOpen:n
            }
            =e,i=(0,O.usePathname)()===t;
            return(0,a.jsx)(m.P.div, {
                whileTap: {
                    scale:.95
                }
                ,children:(0,a.jsxs)(l(), {
                    href:t,className:(0,z.cn)("flex items-center gap-3 text-lg font-black text-muted-foreground transition-colors hover:text-foreground","group relative overflow-hidden rounded-lg p-3","hover:bg-accent hover:text-accent-foreground",i&&"bg-accent text-accent-foreground"),onClick:()=>n(!1),children:[(0,a.jsx)(s, {
                        className:"h-6 w-6"
                    }
                    ),(0,a.jsx)("span", {
                        children:r
                    }
                    ),i&&(0,a.jsx)(m.P.div, {
                        className:"absolute bottom-0 left-0 h-1 w-full bg-primary",layoutId:"sidebar-underline",transition: {
                            type:"spring",stiffness:380,damping:30
                        }

                    }
                    )]
                }
                )
            }
            )
        }
        function L() {
            let[e,t]=(0,i.useState)(!1),[s,r]=(0,i.useState)(!1);
            return(0,a.jsxs)(P, {
                open:e,onOpenChange:t,children:[(0,a.jsx)(I, {
                    asChild:!0,children:(0,a.jsx)(h.$, {
                        variant:"ghost",size:"icon",className:"h-12 w-12",onClick:()=> {
                            t(!e)
                        }
                        ,children:(0,a.jsx)("svg", {
                            width:"24",height:"24",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",children:(0,a.jsx)("path", {
                                d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"
                            }
                            )
                        }
                        )
                    }
                    )
                }
                ),(0,a.jsxs)(F, {
                    side:"right",className:"w-[300px] sm:w-[400px] flex flex-col",children:[(0,a.jsx)(S, {
                        children:(0,a.jsxs)(H, {
                            className:"flex items-center justify-between",children:[(0,a.jsx)("span", {
                                className:"text-2xl font-black",style: {
                                    fontFamily:"Blood, sans-serif"
                                }
                                ,children:"/reztech"
                            }
                            ),(0,a.jsx)(h.$, {
                                variant:"ghost",size:"icon",onClick:()=>t(!1),className:"h-10 w-10",children:(0,a.jsx)(p.A, {
                                    className:"h-6 w-6"
                                }
                                )
                            }
                            )]
                        }
                        )
                    }
                    ),(0,a.jsxs)("div", {
                        className:"flex flex-col flex-1 overflow-y-auto mt-4 pb-4",children:[(0,a.jsxs)("nav", {
                            className:"flex flex-col gap-4",children:[(0,a.jsx)(E, {
                                href:"/",icon:g.A,setIsOpen:t,children:"Beranda"
                            }
                            ),(0,a.jsx)(E, {
                                href:"/about",icon:b.A,setIsOpen:t,children:"Tentang saya"
                            }
                            ),(0,a.jsx)(E, {
                                href:"/blog",icon:j.A,setIsOpen:t,children:"Blog"
                            }
                            ),(0,a.jsx)(E, {
                                href:"/docs",icon:v.A,setIsOpen:t,children:"Dokumentasi Api"
                            }
                            ),(0,a.jsx)(E, {
                                href:"/download/sc-free",icon:j.A,setIsOpen:t,children:"Download Sc Free"
                            }
                            ),(0,a.jsx)(E, {
                                href:"/shop",icon:n.A,setIsOpen:t,children:"Shop"
                            }
                            ),(0,a.jsx)(E, {
                                href:"/ai-code",icon:N.A,setIsOpen:t,children:"AI Code Generator"
                            }
                            ),(0,a.jsx)(E, {
                                href:"https://host.reztech.biz.id",icon:w.A,setIsOpen:t,children:"Buy Panel Private"
                            }
                            )]
                        }
                        ),(0,a.jsxs)("div", {
                            className:"relative mt-4",children:[(0,a.jsxs)("button", {
                                className:"flex items-center gap-3 text-lg font-black text-muted-foreground transition-colors hover:text-foreground group relative overflow-hidden rounded-lg p-3 hover:bg-accent hover:text-accent-foreground w-full",onClick:()=>r(!s),children:[(0,a.jsxs)("span", {
                                    className:"flex items-center gap-3",children:[(0,a.jsx)(w.A, {
                                        className:"h-6 w-6"
                                    }
                                    ),"Tools"]
                                }
                                ),(0,a.jsx)(m.P.div, {
                                    animate: {
                                        rotate:180*!!s
                                    }
                                    ,transition: {
                                        duration:.2
                                    }
                                    ,className:"ml-auto",children:(0,a.jsx)(y.A, {
                                        className:"h-4 w-4"
                                    }
                                    )
                                }
                                )]
                            }
                            ),(0,a.jsx)(x.N, {
                                children:s&&(0,a.jsxs)(m.P.div, {
                                    initial: {
                                        opacity:0,height:0
                                    }
                                    ,animate: {
                                        opacity:1,height:"auto"
                                    }
                                    ,exit: {
                                        opacity:0,height:0
                                    }
                                    ,transition: {
                                        duration:.2
                                    }
                                    ,className:"mt-2 bg-background border border-input rounded-md shadow-lg overflow-hidden",children:[(0,a.jsx)(l(), {
                                        href:"/tools/remini",className:"block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",onClick:()=>t(!1),children:"Remini (Image Upscale)"
                                    }
                                    ),(0,a.jsx)(l(), {
                                        href:"/tools/download",className:"block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",onClick:()=>t(!1),children:"Download Tiktok"
                                    }
                                    ),(0,a.jsx)(l(), {
                                        href:"/tools/uploader",className:"block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",onClick:()=>t(!1),children:"File Uploader"
                                    }
                                    ),(0,a.jsx)(l(), {
                                        href:"/upload",className:"block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",onClick:()=>t(!1),children:"Upload Sc Free"
                                    }
                                    )]
                                }
                                )
                            }
                            )]
                        }
                        )]
                    }
                    ),(0,a.jsx)("div", {
                        className:"mt-auto -mx-6 px-6 py-4 border-t",children:(0,a.jsx)("div", {
                            className:"grid grid-cols-3 gap-4",children:R.map((e,t)=>(0,a.jsxs)(l(), {
                                href:e.href,className:"flex items-center justify-center p-3 rounded-full transition-colors hover:opacity-80 ".concat(e.color," text-white"),children:[(0,a.jsx)(e.icon, {
                                    className:"h-6 w-6"
                                }
                                ),(0,a.jsx)("span", {
                                    className:"sr-only",children:e.label
                                }
                                )]
                            }
                            ,t))
                        }
                        )
                    }
                    )]
                }
                )]
            }
            )
        }
        function U(e) {
            let {
                href:t,children:s
            }
            =e,r=(0,O.usePathname)();
            return(0,a.jsxs)(l(), {
                href:t,className:"relative px-3 py-2",children:[s,r===t&&(0,a.jsx)(m.P.div, {
                    className:"absolute bottom-0 left-0 h-1 w-full bg-primary",layoutId:"navbar-underline",transition: {
                        type:"spring",stiffness:380,damping:30
                    }

                }
                )]
            }
            )
        }
        function $(e) {
            let {
                cartItemsCount:t,onCartClick:s,cartAnimation:r
            }
            =e;
            return(0,a.jsx)("header", {
                className:"sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:(0,a.jsx)("div", {
                    className:"container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24",children:(0,a.jsxs)("div", {
                        className:"flex h-16 items-center justify-between",children:[(0,a.jsx)(l(), {
                            href:"/",className:"flex items-center space-x-2",children:(0,a.jsx)("span", {
                                className:"text-2xl font-black",style: {
                                    fontFamily:"Blood, sans-serif"
                                }
                                ,children:"/reztech"
                            }
                            )
                        }
                        ),(0,a.jsxs)("nav", {
                            className:"hidden md:flex items-center space-x-6",children:[(0,a.jsx)(U, {
                                href:"/",children:"Beranda"
                            }
                            ),(0,a.jsx)(U, {
                                href:"/about",children:"Tentang Saya"
                            }
                            ),(0,a.jsx)(U, {
                                href:"/blog",children:"Blog"
                            }
                            ),(0,a.jsx)(U, {
                                href:"/contact",children:"Kontak"
                            }
                            )]
                        }
                        ),(0,a.jsxs)("div", {
                            className:"flex items-center gap-4",children:[(0,a.jsx)(m.P.div, {
                                animate:r? {
                                    scale:[1,1.2,1]
                                }
                                : {
                                    scale:1
                                }
                                ,transition: {
                                    duration:.3
                                }
                                ,children:(0,a.jsxs)(h.$, {
                                    variant:"ghost",size:"icon",className:"relative h-10 w-10",onClick:s,children:[(0,a.jsx)(n.A, {
                                        className:"h-5 w-5"
                                    }
                                    ),(0,a.jsx)(x.N, {
                                        children:t>0&&(0,a.jsx)(m.P.div, {
                                            initial: {
                                                scale:0,opacity:0
                                            }
                                            ,animate: {
                                                scale:1,opacity:1
                                            }
                                            ,exit: {
                                                scale:0,opacity:0
                                            }
                                            ,transition: {
                                                type:"spring",stiffness:500,damping:30
                                            }
                                            ,className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold",children:t>99?"99+":t
                                        }
                                        )
                                    }
                                    )]
                                }
                                )
                            }
                            ),(0,a.jsx)(f, {

                            }
                            ),(0,a.jsx)("div", {
                                className:"md:hidden",children:(0,a.jsx)(L, {

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

    }
    ,47746:(e,t,s)=> {
        s.d(t, {
            Footer:()=>d
        }
        );
        var a=s(95155),r=s(6874),l=s.n(r),n=s(75684),i=s(96848),o=s(29911),c=s(60209);
        function d() {
            let e=[ {
                icon:n.A,href:"",label:"Instagram",color:"bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500"
            }
            , {
                icon:o.kkU,href:"",label:"TikTok",color:"bg-black"
            }
            , {
                icon:c.m,href:"https://wa.me/6283191348966",label:"WhatsApp",color:"bg-[#25D366]"
            }
            ];
            return(0,a.jsx)("footer", {
                className:"bg-muted/30",children:(0,a.jsxs)("div", {
                    className:"mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-8",children:[(0,a.jsxs)("div", {
                        className:"grid md:grid-cols-3 gap-8",children:[(0,a.jsxs)("div", {
                            children:[(0,a.jsx)("h3", {
                                className:"text-xl font-black mb-4",style: {
                                    fontFamily:"Blood, sans-serif"
                                }
                                ,children:"/reztech"
                            }
                            ),(0,a.jsx)("h4", {
                                className:"font-black mb-4",children:"Hubungi Saya"
                            }
                            ),(0,a.jsx)("div", {
                                className:"flex gap-4",children:e.map((e,t)=>(0,a.jsx)(i.P.div, {
                                    whileHover: {
                                        scale:1.1
                                    }
                                    ,whileTap: {
                                        scale:.9
                                    }
                                    ,children:(0,a.jsxs)(l(), {
                                        href:e.href,className:"flex items-center justify-center p-2 rounded-full transition-colors hover:opacity-80 ".concat(e.color),children:[(0,a.jsx)(e.icon, {
                                            className:"h-5 w-5 text-white"
                                        }
                                        ),(0,a.jsx)("span", {
                                            className:"sr-only",children:e.label
                                        }
                                        )]
                                    }
                                    )
                                }
                                ,t))
                            }
                            )]
                        }
                        ),(0,a.jsxs)("div", {
                            children:[(0,a.jsx)("h4", {
                                className:"font-black mb-4",children:"Tag"
                            }
                            ),(0,a.jsxs)("div", {
                                className:"space-y-2",children:[(0,a.jsx)("div", {
                                    className:"text-muted-foreground",children:"Programming"
                                }
                                ),(0,a.jsx)("div", {
                                    className:"text-muted-foreground",children:"Web Development"
                                }
                                )]
                            }
                            )]
                        }
                        ),(0,a.jsxs)("div", {
                            children:[(0,a.jsx)("h4", {
                                className:"font-black mb-4",children:"Reza Devs"
                            }
                            ),(0,a.jsx)("address", {
                                className:"text-muted-foreground not-italic",children:"Wibu Tapi Ga Ngaku"
                            }
                            )]
                        }
                        )]
                    }
                    ),(0,a.jsx)("div", {
                        className:"mt-8 pt-8 border-t border-gray-200",children:(0,a.jsx)("p", {
                            className:"text-center text-muted-foreground",children:"\xa9 2025 reztech Developer. All rights reserved."
                        }
                        )
                    }
                    )]
                }
                )
            }
            )
        }

    }
    ,53999:(e,t,s)=> {
        s.d(t, {
            cn:()=>l
        }
        );
        var a=s(52596),r=s(39688);
        function l() {
            for(var e=arguments.length,t=Array(e),s=0;
            s<e;
            s++)t[s]=arguments[s];
            return(0,r.QP)((0,a.$)(t))
        }

    }
    ,60209:(e,t,s)=> {
        s.d(t, {
            m:()=>r
        }
        );
        var a=s(95155);
        let r=e=>(0,a.jsx)("svg", {
            xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",...e,children:(0,a.jsx)("path", {
                d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            }
            )
        }
        )
    }
    ,97168:(e,t,s)=> {
        s.d(t, {
            $:()=>c
        }
        );
        var a=s(95155),r=s(12115),l=s(99708),n=s(74466),i=s(53999);
        let o=(0,n.F)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
            variants: {
                variant: {
                    default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"
                }
                ,size: {
                    default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"
                }

            }
            ,defaultVariants: {
                variant:"default",size:"default"
            }

        }
        ),c=r.forwardRef((e,t)=> {
            let {
                className:s,variant:r,size:n,asChild:c=!1,...d
            }
            =e,h=c?l.DX:"button";
            return(0,a.jsx)(h, {
                className:(0,i.cn)(o( {
                    variant:r,size:n,className:s
                }
                )),ref:t,...d
            }
            )
        }
        );
        c.displayName="Button"
    }

}
]);
