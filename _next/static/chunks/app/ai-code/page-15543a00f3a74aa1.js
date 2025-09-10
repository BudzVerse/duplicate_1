(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7129], {
    14250:(e,a,r)=> {
        Promise.resolve().then(r.bind(r,39107))
    }
    ,39107:(e,a,r)=> {
        "use strict";
        r.r(a),r.d(a, {
            default:()=>w
        }
        );
        var t=r(95155),d=r(12115),s=r(7828),o=r(47746),l=r(97168),n=r(88482),i=r(99474),c=r(89613),g=r(53999);
        let m=c.Kq,x=c.bL,u=c.l9,b=d.forwardRef((e,a)=> {
            let {
                className:r,sideOffset:d=4,...s
            }
            =e;
            return(0,t.jsx)(c.UC, {
                ref:a,sideOffset:d,className:(0,g.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...s
            }
            )
        }
        );
        b.displayName=c.UC.displayName;
        var h=r(58497),p=r(38391),f=r(71539),y=r(51154),k=r(24357),j=r(13568);
        function w() {
            let[e,a]=(0,d.useState)(""),[r,c]=(0,d.useState)(""),[g,w]=(0,d.useState)(!1),[N,v]=(0,d.useState)("text"),C=async a=> {
                a.preventDefault(),w(!0),c(""),v("text"),j.oR.loading("Menganalisa dan membuat kode...", {
                    id:"code-gen-toast"
                }
                );
                try {
                    let a=await fetch("/api/ai-code", {
                        method:"POST",headers: {
                            "Content-Type":"application/json"
                        }
                        ,body:JSON.stringify( {
                            prompt:e
                        }
                        )
                    }
                    );
                    if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));
                    let r=await a.json();
                    if(r.result) {
                        let e=r.result.match(/^```([a-zA-Z0-9]+)?\n([\s\S]*?)\n```$/);
                        e?(v(e[1]||"clike"),c(e[2].trim())):(c(r.result.trim()),v("clike")),j.oR.success("Kode berhasil dibuat!", {
                            id:"code-gen-toast"
                        }
                        )
                    }
                    else c("Tidak ada hasil atau AI tidak dapat menghasilkan kode."),v("text"),j.oR.error("Tidak ada hasil.", {
                        id:"code-gen-toast"
                    }
                    )
                }
                catch(e) {
                    console.error("Error fetching AI code:",e),c("Terjadi kesalahan saat menghubungi server AI."),v("text"),j.oR.error("Terjadi kesalahan!", {
                        id:"code-gen-toast"
                    }
                    )
                }
                finally {
                    w(!1)
                }

            }
            ,R=async()=> {
                try {
                    await navigator.clipboard.writeText(r),j.oR.success("Kode disalin!", {
                        icon:"\uD83D\uDCCB"
                    }
                    )
                }
                catch(e) {
                    console.error("Failed to copy code:",e),j.oR.error("Gagal menyalin kode.")
                }

            }
            ;
            return(0,t.jsx)(m, {
                children:(0,t.jsxs)("div", {
                    className:"min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-850 text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out",children:[(0,t.jsx)(s.Navbar, {

                    }
                    ),(0,t.jsxs)("main", {
                        className:"flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-center",children:[(0,t.jsx)(j.l$, {
                            position:"top-right",reverseOrder:!1
                        }
                        ),(0,t.jsxs)(n.Zp, {
                            className:"w-full max-w-4xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-700 hover:shadow-2xl",children:[(0,t.jsxs)(n.aR, {
                                className:"p-8 pb-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 dark:from-gray-800 to-indigo-50 dark:to-gray-750",children:[(0,t.jsxs)(n.ZB, {
                                    className:"text-5xl font-extrabold text-center text-blue-700 dark:text-blue-400 drop-shadow-lg",children:[(0,t.jsx)(f.A, {
                                        className:"inline-block h-10 w-10 mr-3 align-middle text-blue-500 dark:text-blue-300"
                                    }
                                    ),"AI Code Spark"]
                                }
                                ),(0,t.jsx)("p", {
                                    className:"text-center text-gray-600 dark:text-gray-400 mt-4 text-xl leading-relaxed",children:"Hasilkan kode instan dari deskripsi sederhana dengan kecerdasan buatan. Cepat, akurat, dan cerdas."
                                }
                                )]
                            }
                            ),(0,t.jsxs)(n.Wu, {
                                className:"p-8 space-y-10",children:[(0,t.jsxs)("form", {
                                    onSubmit:C,className:"flex flex-col gap-6",children:[(0,t.jsx)(i.T, {
                                        className:"min-h-[160px] w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-5 py-4 text-lg text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:border-blue-500 transition-all duration-300 ease-in-out resize-y shadow-inner hover:shadow-md focus:shadow-lg",placeholder:"Contoh: 'Buat komponen React untuk tombol Dark Mode', 'Kode Python untuk mem-parsing data JSON', 'Fungsi JavaScript untuk memvalidasi email', dll.",value:e,onChange:e=>a(e.target.value),rows:7,required:!0
                                    }
                                    ),(0,t.jsx)(l.$, {
                                        type:"submit",className:"w-full py-4 text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md",disabled:g||!e.trim(),children:g?(0,t.jsxs)(t.Fragment, {
                                            children:[(0,t.jsx)(y.A, {
                                                className:"mr-2 h-6 w-6 animate-spin"
                                            }
                                            ),"Memproses..."]
                                        }
                                        ):(0,t.jsxs)(t.Fragment, {
                                            children:[(0,t.jsx)(f.A, {
                                                className:"mr-2 h-6 w-6 animate-pulse"
                                            }
                                            ),"Hasilkan Kode Sekarang!"]
                                        }
                                        )
                                    }
                                    )]
                                }
                                ),(0,t.jsxs)("div", {
                                    className:"flex flex-col gap-6",children:[(0,t.jsx)("h3", {
                                        className:"text-2xl font-bold text-gray-800 dark:text-gray-200 border-b pb-3 border-gray-200 dark:border-gray-700",children:"Hasil Kode:"
                                    }
                                    ),g&&(0,t.jsxs)("div", {
                                        className:"relative mt-2 bg-gray-900 dark:bg-gray-950 rounded-xl shadow-inner overflow-hidden animate-pulse border border-gray-700 dark:border-gray-800",children:[(0,t.jsxs)("div", {
                                            className:"flex items-center justify-between px-5 py-3 bg-gray-800 dark:bg-gray-850 border-b border-gray-700 dark:border-gray-750 rounded-t-xl",children:[(0,t.jsx)("span", {
                                                className:"text-md font-medium text-gray-400",children:"Memuat Kode..."
                                            }
                                            ),(0,t.jsx)("div", {
                                                className:"w-24 h-5 bg-gray-700 rounded-md"
                                            }
                                            )]
                                        }
                                        ),(0,t.jsxs)("div", {
                                            className:"p-6 text-gray-400 font-mono text-base leading-relaxed",children:[(0,t.jsx)("div", {
                                                className:"h-5 bg-gray-700 rounded w-full mb-3"
                                            }
                                            ),(0,t.jsx)("div", {
                                                className:"h-5 bg-gray-700 rounded w-5/6 mb-3"
                                            }
                                            ),(0,t.jsx)("div", {
                                                className:"h-5 bg-gray-700 rounded w-full mb-3"
                                            }
                                            ),(0,t.jsx)("div", {
                                                className:"h-5 bg-gray-700 rounded w-2/3 mb-3"
                                            }
                                            ),(0,t.jsx)("div", {
                                                className:"h-5 bg-gray-700 rounded w-full mb-3"
                                            }
                                            ),(0,t.jsx)("div", {
                                                className:"h-5 bg-gray-700 rounded w-4/5"
                                            }
                                            )]
                                        }
                                        )]
                                    }
                                    ),!g&&r&&(0,t.jsxs)("div", {
                                        className:"relative bg-gray-900 dark:bg-gray-950 rounded-xl shadow-2xl overflow-hidden border border-gray-700 dark:border-gray-800 group transition-all duration-300",children:[(0,t.jsxs)("div", {
                                            className:"flex items-center justify-between px-5 py-3 bg-gray-800 dark:bg-gray-850 border-b border-gray-700 dark:border-gray-750",children:[(0,t.jsx)("span", {
                                                className:"text-md font-semibold text-blue-300 dark:text-blue-400 uppercase tracking-wide",children:"text"===N?"Plain Text":N
                                            }
                                            ),(0,t.jsxs)(x, {
                                                children:[(0,t.jsx)(u, {
                                                    asChild:!0,children:(0,t.jsxs)(l.$, {
                                                        onClick:R,variant:"ghost",size:"sm",className:"text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-750 dark:hover:text-white transition-colors duration-200 text-sm px-3 py-1.5",children:[(0,t.jsx)(k.A, {
                                                            className:"h-4 w-4 mr-2"
                                                        }
                                                        )," Salin Kode"]
                                                    }
                                                    )
                                                }
                                                ),(0,t.jsx)(b, {
                                                    className:"bg-gray-800 text-white text-xs px-2 py-1 rounded-md",children:(0,t.jsx)("p", {
                                                        children:"Salin kode ke clipboard"
                                                    }
                                                    )
                                                }
                                                )]
                                            }
                                            )]
                                        }
                                        ),(0,t.jsx)(h.A, {
                                            language:N,style:p.A,showLineNumbers:!0,customStyle: {
                                                padding:"1.75rem",margin:0,backgroundColor:"transparent",fontSize:"0.95rem",lineHeight:"1.6",overflowX:"auto",borderBottomLeftRadius:"0.75rem",borderBottomRightRadius:"0.75rem"
                                            }
                                            ,codeTagProps: {
                                                style: {
                                                    fontFamily:"Fira Code, Cascadia Code, monospace"
                                                }

                                            }
                                            ,children:r
                                        }
                                        )]
                                    }
                                    ),!g&&!r&&!e.trim()&&(0,t.jsxs)("div", {
                                        className:"mt-4 p-8 text-center bg-blue-50 dark:bg-blue-900/10 border-2 border-blue-200 dark:border-blue-800 rounded-xl shadow-md",children:[(0,t.jsx)(f.A, {
                                            className:"h-14 w-14 text-blue-500 dark:text-blue-400 mx-auto mb-6 drop-shadow-lg"
                                        }
                                        ),(0,t.jsx)("p", {
                                            className:"text-2xl font-bold text-blue-700 dark:text-blue-300 mb-3",children:"Siap menghasilkan kode?"
                                        }
                                        ),(0,t.jsx)("p", {
                                            className:"text-gray-700 dark:text-gray-400 text-lg leading-relaxed",children:"Berikan deskripsi singkat namun jelas di kotak teks di atas, dan biarkan AI kami yang melakukan sisanya!"
                                        }
                                        ),(0,t.jsxs)("div", {
                                            className:"mt-8 text-left p-6 bg-gray-100 dark:bg-gray-750 rounded-lg text-gray-700 dark:text-gray-300 text-base italic border border-gray-200 dark:border-gray-700",children:[(0,t.jsx)("p", {
                                                className:"font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200",children:"Contoh output yang bisa Anda dapatkan:"
                                            }
                                            ),(0,t.jsx)(h.A, {
                                                language:"javascript",style:p.A,showLineNumbers:!1,customStyle: {
                                                    backgroundColor:"transparent",padding:"0.75rem",margin:0,fontSize:"0.9rem",lineHeight:"1.5",border:"none",overflowX:"auto",borderRadius:"0.5rem"
                                                }
                                                ,children:"\nfunction factorial(n) {\n  if (n === 0) {\n    return 1;\n  }\n  return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5));\n  ".trim()
                                            }
                                            )]
                                        }
                                        )]
                                    }
                                    ),!g&&!r&&e.trim()&&(0,t.jsxs)("div", {
                                        className:"mt-4 p-6 text-center text-red-600 bg-red-50 dark:bg-red-900/15 border-2 border-red-200 dark:border-red-800 rounded-lg shadow-sm",children:[(0,t.jsx)("p", {
                                            className:"text-xl font-semibold mb-2",children:"Oops, tidak ada hasil!"
                                        }
                                        ),(0,t.jsx)("p", {
                                            className:"text-lg",children:"AI tidak dapat menghasilkan kode untuk deskripsi tersebut. Coba deskripsi yang lebih spesifik atau format ulang permintaan Anda!"
                                        }
                                        )]
                                    }
                                    )]
                                }
                                )]
                            }
                            )]
                        }
                        )]
                    }
                    ),(0,t.jsx)(o.Footer, {

                    }
                    )]
                }
                )
            }
            )
        }

    }
    ,88482:(e,a,r)=> {
        "use strict";
        r.d(a, {
            Wu:()=>i,ZB:()=>n,Zp:()=>o,aR:()=>l
        }
        );
        var t=r(95155),d=r(12115),s=r(53999);
        let o=d.forwardRef((e,a)=> {
            let {
                className:r,...d
            }
            =e;
            return(0,t.jsx)("div", {
                ref:a,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...d
            }
            )
        }
        );
        o.displayName="Card";
        let l=d.forwardRef((e,a)=> {
            let {
                className:r,...d
            }
            =e;
            return(0,t.jsx)("div", {
                ref:a,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...d
            }
            )
        }
        );
        l.displayName="CardHeader";
        let n=d.forwardRef((e,a)=> {
            let {
                className:r,...d
            }
            =e;
            return(0,t.jsx)("div", {
                ref:a,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...d
            }
            )
        }
        );
        n.displayName="CardTitle",d.forwardRef((e,a)=> {
            let {
                className:r,...d
            }
            =e;
            return(0,t.jsx)("div", {
                ref:a,className:(0,s.cn)("text-sm text-muted-foreground",r),...d
            }
            )
        }
        ).displayName="CardDescription";
        let i=d.forwardRef((e,a)=> {
            let {
                className:r,...d
            }
            =e;
            return(0,t.jsx)("div", {
                ref:a,className:(0,s.cn)("p-6 pt-0",r),...d
            }
            )
        }
        );
        i.displayName="CardContent",d.forwardRef((e,a)=> {
            let {
                className:r,...d
            }
            =e;
            return(0,t.jsx)("div", {
                ref:a,className:(0,s.cn)("flex items-center p-6 pt-0",r),...d
            }
            )
        }
        ).displayName="CardFooter"
    }
    ,99474:(e,a,r)=> {
        "use strict";
        r.d(a, {
            T:()=>o
        }
        );
        var t=r(95155),d=r(12115),s=r(53999);
        let o=d.forwardRef((e,a)=> {
            let {
                className:r,...d
            }
            =e;
            return(0,t.jsx)("textarea", {
                className:(0,s.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:a,...d
            }
            )
        }
        );
        o.displayName="Textarea"
    }

}
,e=> {
    var a=a=>e(e.s=a);
    e.O(0,[6711,9003,605,3568,3214,4576,2315,8441,1684,7358],()=>a(14250)),_N_E=e.O()
}
]);
