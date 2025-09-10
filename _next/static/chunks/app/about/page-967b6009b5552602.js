(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7220], {
    269:(e,a,n)=> {
        Promise.resolve().then(n.bind(n,97323))
    }
    ,66766:(e,a,n)=> {
        "use strict";
        n.d(a, {
            default:()=>r.a
        }
        );
        var i=n(71469),r=n.n(i)
    }
    ,71469:(e,a,n)=> {
        "use strict";
        Object.defineProperty(a,"__esModule", {
            value:!0
        }
        ),!function(e,a) {
            for(var n in a)Object.defineProperty(e,n, {
                enumerable:!0,get:a[n]
            }
            )
        }
        (a, {
            default:function() {
                return d
            }
            ,getImageProps:function() {
                return l
            }

        }
        );
        let i=n(88229),r=n(38883),t=n(33063),s=i._(n(51193));
        function l(e) {
            let {
                props:a
            }
            =(0,r.getImgProps)(e, {
                defaultLoader:s.default,imgConf: {
                    deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0
                }

            }
            );
            for(let[e,n]of Object.entries(a))void 0===n&&delete a[e];
            return {
                props:a
            }

        }
        let d=t.Image
    }
    ,71789:(e,a,n)=> {
        "use strict";
        n.d(a, {
            k:()=>t
        }
        );
        var i=n(95155),r=n(53999);
        function t(e) {
            let {
                className:a
            }
            =e;
            return(0,i.jsx)("div", {
                className:(0,r.cn)("flex items-center justify-center",a),children:(0,i.jsx)("div", {
                    className:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"
                }
                )
            }
            )
        }

    }
    ,88145:(e,a,n)=> {
        "use strict";
        n.d(a, {
            E:()=>l
        }
        );
        var i=n(95155);
        n(12115);
        var r=n(74466),t=n(53999);
        let s=(0,r.F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
            variants: {
                variant: {
                    default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"
                }

            }
            ,defaultVariants: {
                variant:"default"
            }

        }
        );
        function l(e) {
            let {
                className:a,variant:n,...r
            }
            =e;
            return(0,i.jsx)("div", {
                className:(0,t.cn)(s( {
                    variant:n
                }
                ),a),...r
            }
            )
        }

    }
    ,88482:(e,a,n)=> {
        "use strict";
        n.d(a, {
            Wu:()=>o,ZB:()=>d,Zp:()=>s,aR:()=>l
        }
        );
        var i=n(95155),r=n(12115),t=n(53999);
        let s=r.forwardRef((e,a)=> {
            let {
                className:n,...r
            }
            =e;
            return(0,i.jsx)("div", {
                ref:a,className:(0,t.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...r
            }
            )
        }
        );
        s.displayName="Card";
        let l=r.forwardRef((e,a)=> {
            let {
                className:n,...r
            }
            =e;
            return(0,i.jsx)("div", {
                ref:a,className:(0,t.cn)("flex flex-col space-y-1.5 p-6",n),...r
            }
            )
        }
        );
        l.displayName="CardHeader";
        let d=r.forwardRef((e,a)=> {
            let {
                className:n,...r
            }
            =e;
            return(0,i.jsx)("div", {
                ref:a,className:(0,t.cn)("text-2xl font-semibold leading-none tracking-tight",n),...r
            }
            )
        }
        );
        d.displayName="CardTitle",r.forwardRef((e,a)=> {
            let {
                className:n,...r
            }
            =e;
            return(0,i.jsx)("div", {
                ref:a,className:(0,t.cn)("text-sm text-muted-foreground",n),...r
            }
            )
        }
        ).displayName="CardDescription";
        let o=r.forwardRef((e,a)=> {
            let {
                className:n,...r
            }
            =e;
            return(0,i.jsx)("div", {
                ref:a,className:(0,t.cn)("p-6 pt-0",n),...r
            }
            )
        }
        );
        o.displayName="CardContent",r.forwardRef((e,a)=> {
            let {
                className:n,...r
            }
            =e;
            return(0,i.jsx)("div", {
                ref:a,className:(0,t.cn)("flex items-center p-6 pt-0",n),...r
            }
            )
        }
        ).displayName="CardFooter"
    }
    ,97323:(e,a,n)=> {
        "use strict";
        n.r(a),n.d(a, {
            default:()=>g
        }
        );
        var i=n(95155),r=n(12115),t=n(66766),s=n(96848),l=n(88482),d=n(88145),o=n(7828),c=n(47746),u=n(71789);
        let m=[ {
            name:"React",level:"Jago Banget (Bisa Ngoding Sambil Merem, Tapi Tetep tanya GPT)"
        }
        , {
            name:"Next.js",level:"Udah Hafal Sampai Dokumentasi (Tapi Masih Nyari Jawaban di GPT)"
        }
        , {
            name:"TypeScript",level:"Mahir (Tapi Kadang Berantem Sama Type Error, Solusinya? GPT)"
        }
        , {
            name:"Node.js",level:"Cukup Bisa (Asal Ga Disuruh Ngurus Server, Kalau Kepaksa ya Tanya GPT)"
        }
        , {
            name:"Python",level:"Bisa Ngoding, Tapi Kagak Hafal Sintaks (Untung Ada GPT)"
        }
        , {
            name:"Docker",level:"Pernah Pake, Tapi Tiap Kali Setup Ulang Lupa Command-nya (GPT to the rescue)"
        }
        ],p=[ {
            title:"Backend Engineer (Tapi Bohongan)",company:"GakPasti Corp",period:"2021 - Present",description:"Ngebangun backend yang lebih sering ngambek daripada mantan. Kadang jalan, kadang enggak, tergantung mood server. Teknologi utama: `console.log` debugging, database berbasis file TXT, dan skill andalan—ngeprompt GPT buat nyari solusi bug yang bahkan gue sendiri gak ngerti kenapa bisa muncul."
        }
        , {
            title:"Frontend Tukang Tambal",company:"Web Solusyen",period:"2023 - Present",description:"Kerjaannya bukan cuma ngoding, tapi juga jadi dukun buat debug bug misterius. Spesialis bikin UI kece, tapi sering dibilang 'kok beda sama desainnya?' Keahlian utama: React, Next.js, CSS Magic™, dan tentu saja, jago banget ngeprompt GPT buat nyari solusi instan."
        }
        ];
        function g() {
            let[e,a]=(0,r.useState)(!0);
            return((0,r.useEffect)(()=> {
                let e=setTimeout(()=> {
                    a(!1)
                }
                ,1e3);
                return()=>clearTimeout(e)
            }
            ,[]),e)?(0,i.jsx)("div", {
                className:"min-h-screen flex items-center justify-center",children:(0,i.jsx)(u.k, {

                }
                )
            }
            ):(0,i.jsxs)("div", {
                className:"min-h-screen flex flex-col",children:[(0,i.jsx)(o.Navbar, {

                }
                ),(0,i.jsx)("main", {
                    className:"flex-grow",children:(0,i.jsx)("div", {
                        className:"container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-12",children:(0,i.jsx)(s.P.div, {
                            initial: {
                                opacity:0,y:20
                            }
                            ,animate: {
                                opacity:1,y:0
                            }
                            ,transition: {
                                delay:.2
                            }
                            ,className:"max-w-4xl mx-auto",children:(0,i.jsxs)("div", {
                                className:"grid gap-8 md:grid-cols-[300px_1fr]",children:[(0,i.jsxs)("aside", {
                                    className:"space-y-4",children:[(0,i.jsx)(s.P.div, {
                                        initial: {
                                            opacity:0,y:20
                                        }
                                        ,animate: {
                                            opacity:1,y:0
                                        }
                                        ,transition: {
                                            delay:.3
                                        }
                                        ,className:"relative aspect-square overflow-hidden rounded-xl",children:(0,i.jsx)(t.default, {
                                            src:"/profile.jpg",alt:"Profile",fill:!0,className:"object-cover"
                                        }
                                        )
                                    }
                                    ),(0,i.jsxs)(s.P.div, {
                                        initial: {
                                            opacity:0,y:20
                                        }
                                        ,animate: {
                                            opacity:1,y:0
                                        }
                                        ,transition: {
                                            delay:.4
                                        }
                                        ,className:"space-y-2",children:[(0,i.jsx)("h1", {
                                            className:"text-2xl font-bold",children:"Reza Tech Developer"
                                        }
                                        ),(0,i.jsx)("p", {
                                            className:"text-muted-foreground",children:"Web Developer"
                                        }
                                        )]
                                    }
                                    )]
                                }
                                ),(0,i.jsxs)("div", {
                                    className:"space-y-8",children:[(0,i.jsx)(s.P.div, {
                                        initial: {
                                            opacity:0,y:20
                                        }
                                        ,animate: {
                                            opacity:1,y:0
                                        }
                                        ,transition: {
                                            delay:.5
                                        }
                                        ,children:(0,i.jsxs)(l.Zp, {
                                            children:[(0,i.jsx)(l.aR, {
                                                children:(0,i.jsx)(l.ZB, {
                                                    children:"Tentang Saya"
                                                }
                                                )
                                            }
                                            ),(0,i.jsx)(l.Wu, {
                                                children:(0,i.jsx)("p", {
                                                    className:"text-muted-foreground",children:"Saya adalah seorang web developer yang udah makan asam garam dunia ngoding (alias 4 tahun kejebak di bug yang sama). Punya passion dalam bikin user interface yang bukan cuma cakep, tapi juga bikin frontend developer lain nangis pas harus maintain. Keahlian spesial? Ngoding sambil rebahan, debug pake insting, dan tentu aja, jago ngeprompt GPT buat nyari code biar kerjaan kelar lebih cepet."
                                                }
                                                )
                                            }
                                            )]
                                        }
                                        )
                                    }
                                    ),(0,i.jsx)(s.P.div, {
                                        initial: {
                                            opacity:0,y:20
                                        }
                                        ,animate: {
                                            opacity:1,y:0
                                        }
                                        ,transition: {
                                            delay:.6
                                        }
                                        ,children:(0,i.jsxs)(l.Zp, {
                                            children:[(0,i.jsx)(l.aR, {
                                                children:(0,i.jsx)(l.ZB, {
                                                    children:"Keahlian"
                                                }
                                                )
                                            }
                                            ),(0,i.jsx)(l.Wu, {
                                                children:(0,i.jsx)("div", {
                                                    className:"flex flex-wrap gap-2",children:m.map(e=>(0,i.jsxs)(d.E, {
                                                        variant:"secondary",children:[e.name," - ",e.level]
                                                    }
                                                    ,e.name))
                                                }
                                                )
                                            }
                                            )]
                                        }
                                        )
                                    }
                                    ),(0,i.jsx)(s.P.div, {
                                        initial: {
                                            opacity:0,y:20
                                        }
                                        ,animate: {
                                            opacity:1,y:0
                                        }
                                        ,transition: {
                                            delay:.7
                                        }
                                        ,children:(0,i.jsxs)(l.Zp, {
                                            children:[(0,i.jsx)(l.aR, {
                                                children:(0,i.jsx)(l.ZB, {
                                                    children:"Pengalaman"
                                                }
                                                )
                                            }
                                            ),(0,i.jsx)(l.Wu, {
                                                children:(0,i.jsx)("div", {
                                                    className:"space-y-4",children:p.map((e,a)=>(0,i.jsxs)("div", {
                                                        className:"border-l-2 pl-4 pb-4",children:[(0,i.jsx)("h3", {
                                                            className:"font-bold",children:e.title
                                                        }
                                                        ),(0,i.jsxs)("p", {
                                                            className:"text-sm text-muted-foreground",children:[e.company," • ",e.period]
                                                        }
                                                        ),(0,i.jsx)("p", {
                                                            className:"mt-2 text-muted-foreground",children:e.description
                                                        }
                                                        )]
                                                    }
                                                    ,a))
                                                }
                                                )
                                            }
                                            )]
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
                ),(0,i.jsx)(c.Footer, {

                }
                )]
            }
            )
        }

    }

}
,e=> {
    var a=a=>e(e.s=a);
    e.O(0,[6711,9003,3063,2315,8441,1684,7358],()=>a(269)),_N_E=e.O()
}
]);
