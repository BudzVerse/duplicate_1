(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5994], {
    26368:(e,a,l)=> {
        "use strict";
        l.r(a),l.d(a, {
            default:()=>h
        }
        );
        var i=l(95155),r=l(12115),t=l(35695),s=l(7828),n=l(47746),d=l(97168),o=l(89852),u=l(99474),c=l(63655),f=r.forwardRef((e,a)=>(0,i.jsx)(c.sG.label, {
            ...e,ref:a,onMouseDown:a=> {
                var l;
                a.target.closest("button, input, select, textarea")||(null==(l=e.onMouseDown)||l.call(e,a),!a.defaultPrevented&&a.detail>1&&a.preventDefault())
            }

        }
        ));
        f.displayName="Label";
        var p=l(74466),m=l(53999);
        let b=(0,p.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),g=r.forwardRef((e,a)=> {
            let {
                className:l,...r
            }
            =e;
            return(0,i.jsx)(f, {
                ref:a,className:(0,m.cn)(b(),l),...r
            }
            )
        }
        );
        g.displayName=f.displayName;
        var x=l(96848);
        function h() {
            let e=(0,t.useRouter)(),[a,l]=(0,r.useState)( {
                name:"",desc:"",file:null,badge:"SC Free"
            }
            ),[c,f]=(0,r.useState)(!1),[p,m]=(0,r.useState)(null),b=e=> {
                l( {
                    ...a,[e.target.name]:e.target.value
                }
                )
            }
            ,h=async i=> {
                if(i.preventDefault(),f(!0),m(null),!a.file) {
                    m("❌ Mohon pilih file untuk diupload."),f(!1);
                    return
                }
                let r=new FormData;
                r.append("name",a.name),r.append("desc",a.desc),r.append("badge",a.badge),r.append("file",a.file);
                try {
                    let a=await fetch("/api/upload-sc", {
                        method:"POST",body:r
                    }
                    ),i=await a.json();
                    i.status?(m("✅ Upload berhasil!"),l( {
                        name:"",desc:"",file:null,badge:"SC Free"
                    }
                    ),e.refresh()):m("❌ Gagal upload: "+i.message)
                }
                catch(e) {
                    console.error(e),m("❌ Terjadi kesalahan saat mengirim data")
                }
                finally {
                    f(!1)
                }

            }
            ;
            return(0,i.jsxs)("div", {
                className:"min-h-screen flex flex-col bg-background text-foreground",children:[(0,i.jsx)(s.Navbar, {

                }
                ),(0,i.jsxs)("main", {
                    className:"flex-grow container mx-auto px-4 py-12 max-w-xl",children:[(0,i.jsx)(x.P.h1, {
                        initial: {
                            opacity:0,y:-20
                        }
                        ,animate: {
                            opacity:1,y:0
                        }
                        ,transition: {
                            delay:.1
                        }
                        ,className:"text-3xl font-bold mb-8",children:"Upload Source Code Gratis"
                    }
                    ),(0,i.jsxs)("form", {
                        onSubmit:h,className:"space-y-6",children:[(0,i.jsxs)("div", {
                            children:[(0,i.jsx)(g, {
                                htmlFor:"name",children:"Nama Script"
                            }
                            ),(0,i.jsx)(o.p, {
                                name:"name",placeholder:"Contoh: Script WhatsApp Bot",value:a.name,onChange:b,required:!0
                            }
                            )]
                        }
                        ),(0,i.jsxs)("div", {
                            children:[(0,i.jsx)(g, {
                                htmlFor:"desc",children:"Deskripsi"
                            }
                            ),(0,i.jsx)(u.T, {
                                name:"desc",placeholder:"Deskripsi singkat tentang SC ini",value:a.desc,onChange:b,required:!0
                            }
                            )]
                        }
                        ),(0,i.jsxs)("div", {
                            children:[(0,i.jsx)(g, {
                                htmlFor:"file",children:"Pilih File Source Code (ZIP, RAR, dll.)"
                            }
                            ),(0,i.jsx)("input", {
                                id:"file",type:"file",name:"file",onChange:e=> {
                                    e.target.files&&e.target.files.length>0?l( {
                                        ...a,file:e.target.files[0]
                                    }
                                    ):l( {
                                        ...a,file:null
                                    }
                                    )
                                }
                                ,className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",required:!0
                            }
                            ),a.file&&(0,i.jsxs)("p", {
                                className:"text-sm text-muted-foreground mt-1",children:["File terpilih: ",a.file.name," (",(a.file.size/1024/1024).toFixed(2)," MB)"]
                            }
                            )]
                        }
                        ),(0,i.jsxs)("div", {
                            children:[(0,i.jsx)(g, {
                                htmlFor:"badge",children:"Label/Badge"
                            }
                            ),(0,i.jsx)(o.p, {
                                name:"badge",value:a.badge,onChange:b
                            }
                            )]
                        }
                        ),(0,i.jsx)(d.$, {
                            type:"submit",disabled:c,className:"w-full",children:c?"Uploading...":"Upload Sekarang"
                        }
                        ),p&&(0,i.jsx)("p", {
                            className:"text-sm text-center pt-2",children:p
                        }
                        )]
                    }
                    )]
                }
                ),(0,i.jsx)(n.Footer, {

                }
                )]
            }
            )
        }

    }
    ,31809:(e,a,l)=> {
        Promise.resolve().then(l.bind(l,26368))
    }
    ,89852:(e,a,l)=> {
        "use strict";
        l.d(a, {
            p:()=>s
        }
        );
        var i=l(95155),r=l(12115),t=l(53999);
        let s=r.forwardRef((e,a)=> {
            let {
                className:l,type:r,...s
            }
            =e;
            return(0,i.jsx)("input", {
                type:r,className:(0,t.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",l),ref:a,...s
            }
            )
        }
        );
        s.displayName="Input"
    }
    ,99474:(e,a,l)=> {
        "use strict";
        l.d(a, {
            T:()=>s
        }
        );
        var i=l(95155),r=l(12115),t=l(53999);
        let s=r.forwardRef((e,a)=> {
            let {
                className:l,...r
            }
            =e;
            return(0,i.jsx)("textarea", {
                className:(0,t.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",l),ref:a,...r
            }
            )
        }
        );
        s.displayName="Textarea"
    }

}
,e=> {
    var a=a=>e(e.s=a);
    e.O(0,[6711,9003,2315,8441,1684,7358],()=>a(31809)),_N_E=e.O()
}
]);
