(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3831], {
    5956:(e,s,t)=> {
        "use strict";
        t.r(s),t.d(s, {
            default:()=>k
        }
        );
        var a=t(95155),l=t(12115),r=t(7828),i=t(47746),n=t(6874),c=t.n(n),o=t(66766),d=t(88482),m=t(97168),x=t(89852),u=t(14186),f=t(70333),p=t(15580),g=t(47924);
        let h=(0,t(19946).A)("ChevronRight",[["path", {
            d:"m9 18 6-6-6-6",key:"mthhwq"
        }
        ]]);
        var j=t(96848),N=t(3096),v=t(67470),b=t(71789);
        function y(e) {
            let {
                post:s,index:t
            }
            =e,[r,i]=(0,N.Wx)( {
                triggerOnce:!0,threshold:.1
            }
            ),[n,x]=(0,l.useState)(null),[g,h]=(0,l.useState)(0),[v,b]=(0,l.useState)(0),[y,k]=(0,l.useState)(null);
            (0,l.useEffect)(()=> {
                let e=localStorage.getItem("lastRead_".concat(s.slug));
                e&&x(e);
                let t=localStorage.getItem("likes_".concat(s.slug));
                t&&h(Number.parseInt(t,10));
                let a=localStorage.getItem("dislikes_".concat(s.slug));
                a&&b(Number.parseInt(a,10));
                let l=localStorage.getItem("interaction_".concat(s.slug));
                l&&k(l)
            }
            ,[s.slug]);
            let w=()=> {
                let e=g+1;
                if(h(e),localStorage.setItem("likes_".concat(s.slug),e.toString()),k("like"),localStorage.setItem("interaction_".concat(s.slug),"like"),"dislike"===y) {
                    let e=v-1;
                    b(e),localStorage.setItem("dislikes_".concat(s.slug),e.toString())
                }

            }
            ,S=()=> {
                let e=v+1;
                if(b(e),localStorage.setItem("dislikes_".concat(s.slug),e.toString()),k("dislike"),localStorage.setItem("interaction_".concat(s.slug),"dislike"),"like"===y) {
                    let e=g-1;
                    h(e),localStorage.setItem("likes_".concat(s.slug),e.toString())
                }

            }
            ,I=s.readTime||function(e) {
                let s=Math.ceil(e.split(/\s+/).length/200);
                return"".concat(s," min read")
            }
            (s.content);
            return(0,a.jsx)(j.P.div, {
                ref:r,initial: {
                    opacity:0,y:20
                }
                ,animate:i? {
                    opacity:1,y:0
                }
                : {

                }
                ,transition: {
                    duration:.5,delay:.1*t
                }
                ,children:(0,a.jsx)(d.Zp, {
                    className:"overflow-hidden hover:shadow-lg transition-shadow",children:(0,a.jsxs)(c(), {
                        href:"/blog/posts/".concat(s.slug),className:"block",children:[(0,a.jsx)("div", {
                            className:"aspect-video relative",children:(0,a.jsx)(o.default, {
                                src:s.thumbnail||"/placeholder.svg",alt:s.title,fill:!0,className:"object-cover"
                            }
                            )
                        }
                        ),(0,a.jsx)(d.Wu, {
                            className:"p-6",children:(0,a.jsxs)("div", {
                                className:"space-y-4",children:[(0,a.jsxs)("div", {
                                    className:"space-y-2",children:[(0,a.jsx)("h3", {
                                        className:"text-xl font-semibold",children:s.title
                                    }
                                    ),(0,a.jsx)("p", {
                                        className:"text-muted-foreground",children:s.description
                                    }
                                    )]
                                }
                                ),(0,a.jsxs)("div", {
                                    className:"flex items-center justify-between",children:[(0,a.jsxs)("div", {
                                        className:"flex items-center gap-2 text-sm text-muted-foreground",children:[(0,a.jsx)(u.A, {
                                            className:"h-4 w-4"
                                        }
                                        ),(0,a.jsx)("span", {
                                            children:n?"Last read: ".concat(n):I
                                        }
                                        )]
                                    }
                                    ),(0,a.jsxs)("div", {
                                        className:"flex items-center gap-2",children:[(0,a.jsxs)(m.$, {
                                            variant:"ghost",size:"icon",onClick:e=> {
                                                e.preventDefault(),w()
                                            }
                                            ,className:"like"===y?"text-green-500":"",children:[(0,a.jsx)(f.A, {
                                                className:"h-4 w-4"
                                            }
                                            ),(0,a.jsx)("span", {
                                                className:"ml-1",children:g
                                            }
                                            )]
                                        }
                                        ),(0,a.jsxs)(m.$, {
                                            variant:"ghost",size:"icon",onClick:e=> {
                                                e.preventDefault(),S()
                                            }
                                            ,className:"dislike"===y?"text-red-500":"",children:[(0,a.jsx)(p.A, {
                                                className:"h-4 w-4"
                                            }
                                            ),(0,a.jsx)("span", {
                                                className:"ml-1",children:v
                                            }
                                            )]
                                        }
                                        )]
                                    }
                                    )]
                                }
                                ),(0,a.jsxs)("div", {
                                    className:"flex justify-between items-end pt-4",children:[(0,a.jsx)("div", {
                                        className:"flex flex-wrap gap-2",children:s.tags.map(e=>(0,a.jsx)("span", {
                                            className:"bg-muted px-3 py-1 rounded-full text-sm",children:e
                                        }
                                        ,e))
                                    }
                                    ),(0,a.jsx)("time", {
                                        className:"text-sm text-muted-foreground",children:s.date
                                    }
                                    )]
                                }
                                )]
                            }
                            )
                        }
                        )]
                    }
                    )
                }
                )
            }
            )
        }
        function k() {
            let[e,s]=(0,l.useState)([]),[t,n]=(0,l.useState)(0),[o,d]=(0,l.useState)(""),[u,f]=(0,l.useState)(!0);
            (0,l.useEffect)(()=> {
                p()
            }
            ,[]);
            let p=async()=> {
                f(!0);
                try {
                    let e=await fetch("/api/posts?limit=10");
                    if(!e.ok)throw Error("Failed to fetch posts");
                    let t=await e.json();
                    s(t.posts),n(t.total)
                }
                catch(e) {
                    console.error("Failed to fetch posts:",e)
                }
                finally {
                    f(!1)
                }

            }
            ;
            return u?(0,a.jsx)("div", {
                className:"min-h-screen flex items-center justify-center",children:(0,a.jsx)(b.k, {

                }
                )
            }
            ):(0,a.jsxs)("div", {
                className:"min-h-screen flex flex-col",children:[(0,a.jsx)(r.Navbar, {

                }
                ),(0,a.jsx)("main", {
                    className:"flex-grow",children:(0,a.jsx)("section", {
                        className:"py-20 md:py-28",children:(0,a.jsxs)("div", {
                            className:"container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-7xl",children:[(0,a.jsxs)("div", {
                                className:"mb-8 flex items-center",children:[(0,a.jsx)("span", {
                                    className:"text-xl sm:text-2xl font-bold mr-2",children:"Topik -"
                                }
                                ),(0,a.jsx)(v.d, {
                                    sequence:["Pemrograman",2e3,"Teknologi",2e3,"Web Development",2e3,"AI",2e3],wrapper:"span",speed:50,repeat:Number.POSITIVE_INFINITY,className:"text-xl sm:text-2xl font-bold text-primary"
                                }
                                )]
                            }
                            ),(0,a.jsxs)("form", {
                                onSubmit:e=> {
                                    e.preventDefault(),console.log("Searching for:",o)
                                }
                                ,className:"relative mb-12",children:[(0,a.jsx)(x.p, {
                                    type:"search",placeholder:"Cari artikel...",className:"pl-10 h-12 rounded-xl",value:o,onChange:e=>d(e.target.value)
                                }
                                ),(0,a.jsx)(g.A, {
                                    className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                                }
                                )]
                            }
                            ),u?(0,a.jsx)("div", {
                                className:"flex justify-center items-center h-64",children:(0,a.jsx)(b.k, {

                                }
                                )
                            }
                            ):(0,a.jsxs)(a.Fragment, {
                                children:[(0,a.jsx)("div", {
                                    className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:e&&e.length>0?e.map((e,s)=>(0,a.jsx)(y, {
                                        post:e,index:s
                                    }
                                    ,e.slug)):(0,a.jsx)("p", {
                                        children:"Tidak ada postingan yang tersedia."
                                    }
                                    )
                                }
                                ),t>10&&(0,a.jsx)("div", {
                                    className:"mt-12 flex justify-center",children:(0,a.jsx)(c(), {
                                        href:"/blog/posts",children:(0,a.jsxs)(m.$, {
                                            size:"lg",className:"group relative overflow-hidden rounded-full px-8 py-2 transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground",children:[(0,a.jsx)("span", {
                                                className:"relative z-10",children:"Lihat Semua"
                                            }
                                            ),(0,a.jsx)("span", {
                                                className:"absolute inset-0 z-0 bg-primary opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                                            }
                                            ),(0,a.jsx)(h, {
                                                className:"ml-2 h-5 w-5 transform transition-transform duration-300 ease-out group-hover:translate-x-1"
                                            }
                                            )]
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
                ),(0,a.jsx)(i.Footer, {

                }
                )]
            }
            )
        }

    }
    ,32302:(e,s,t)=> {
        Promise.resolve().then(t.bind(t,5956))
    }
    ,71789:(e,s,t)=> {
        "use strict";
        t.d(s, {
            k:()=>r
        }
        );
        var a=t(95155),l=t(53999);
        function r(e) {
            let {
                className:s
            }
            =e;
            return(0,a.jsx)("div", {
                className:(0,l.cn)("flex items-center justify-center",s),children:(0,a.jsx)("div", {
                    className:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"
                }
                )
            }
            )
        }

    }
    ,88482:(e,s,t)=> {
        "use strict";
        t.d(s, {
            Wu:()=>o,ZB:()=>c,Zp:()=>i,aR:()=>n
        }
        );
        var a=t(95155),l=t(12115),r=t(53999);
        let i=l.forwardRef((e,s)=> {
            let {
                className:t,...l
            }
            =e;
            return(0,a.jsx)("div", {
                ref:s,className:(0,r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...l
            }
            )
        }
        );
        i.displayName="Card";
        let n=l.forwardRef((e,s)=> {
            let {
                className:t,...l
            }
            =e;
            return(0,a.jsx)("div", {
                ref:s,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",t),...l
            }
            )
        }
        );
        n.displayName="CardHeader";
        let c=l.forwardRef((e,s)=> {
            let {
                className:t,...l
            }
            =e;
            return(0,a.jsx)("div", {
                ref:s,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",t),...l
            }
            )
        }
        );
        c.displayName="CardTitle",l.forwardRef((e,s)=> {
            let {
                className:t,...l
            }
            =e;
            return(0,a.jsx)("div", {
                ref:s,className:(0,r.cn)("text-sm text-muted-foreground",t),...l
            }
            )
        }
        ).displayName="CardDescription";
        let o=l.forwardRef((e,s)=> {
            let {
                className:t,...l
            }
            =e;
            return(0,a.jsx)("div", {
                ref:s,className:(0,r.cn)("p-6 pt-0",t),...l
            }
            )
        }
        );
        o.displayName="CardContent",l.forwardRef((e,s)=> {
            let {
                className:t,...l
            }
            =e;
            return(0,a.jsx)("div", {
                ref:s,className:(0,r.cn)("flex items-center p-6 pt-0",t),...l
            }
            )
        }
        ).displayName="CardFooter"
    }
    ,89852:(e,s,t)=> {
        "use strict";
        t.d(s, {
            p:()=>i
        }
        );
        var a=t(95155),l=t(12115),r=t(53999);
        let i=l.forwardRef((e,s)=> {
            let {
                className:t,type:l,...i
            }
            =e;
            return(0,a.jsx)("input", {
                type:l,className:(0,r.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:s,...i
            }
            )
        }
        );
        i.displayName="Input"
    }

}
,e=> {
    var s=s=>e(e.s=s);
    e.O(0,[6711,9003,3063,6583,2315,8441,1684,7358],()=>s(32302)),_N_E=e.O()
}
]);
