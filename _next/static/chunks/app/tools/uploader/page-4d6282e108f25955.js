(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6165], {
    5196:(e,t,r)=> {
        "use strict";
        r.d(t, {
            A:()=>s
        }
        );
        let s=(0,r(19946).A)("Check",[["path", {
            d:"M20 6 9 17l-5-5",key:"1gmf2c"
        }
        ]])
    }
    ,24357:(e,t,r)=> {
        "use strict";
        r.d(t, {
            A:()=>s
        }
        );
        let s=(0,r(19946).A)("Copy",[["rect", {
            width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"
        }
        ],["path", {
            d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"
        }
        ]])
    }
    ,43425:(e,t,r)=> {
        "use strict";
        r.r(t),r.d(t, {
            default:()=>h
        }
        );
        var s=r(95155),a=r(12115),l=r(7828),i=r(47746),o=r(97168),d=r(71789),n=r(29869),c=r(5196),u=r(24357);
        let m=(0,r(19946).A)("Eye",[["path", {
            d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"
        }
        ],["circle", {
            cx:"12",cy:"12",r:"3",key:"1v7zrd"
        }
        ]]);
        var p=r(13568),x=r(41046);
        function h() {
            let[e,t]=(0,a.useState)(null),[r,h]=(0,a.useState)(null),[f,g]=(0,a.useState)(null),[j,y]=(0,a.useState)(null),[b,N]=(0,a.useState)(!1),[v,w]=(0,a.useState)(!1),[k,M]=(0,a.useState)(!0);
            (0,a.useEffect)(()=> {
                let e=setTimeout(()=>M(!1),1e3);
                return()=>clearTimeout(e)
            }
            ,[]);
            let {
                getRootProps:S,getInputProps:A,isDragActive:F
            }
            =(0,x.VB)( {
                accept: {
                    "image/*":[],"video/mp4":[],"audio/mpeg":[]
                }
                ,maxFiles:1,onDrop:e=> {
                    let r=e[0];
                    t(r),h( {
                        name:r.name,size:r.size,type:r.type,lastModified:r.lastModified
                    }
                    )
                }

            }
            ),B=async()=> {
                if(!e)return void p.oR.error("Please select a file", {
                    position:"top-right"
                }
                );
                N(!0);
                let t=new FormData;
                t.append("file",e);
                try {
                    let e=await fetch("/api/upload", {
                        method:"POST",body:t
                    }
                    );
                    if(!e.ok)throw Error("Upload failed");
                    let r=await e.json();
                    g(r.url),y(r.raw),p.oR.success("File uploaded successfully!", {
                        position:"top-right"
                    }
                    )
                }
                catch(e) {
                    p.oR.error("Upload failed. Please try again.", {
                        position:"top-right"
                    }
                    )
                }
                finally {
                    N(!1)
                }

            }
            ;
            return k?(0,s.jsx)("div", {
                className:"min-h-screen flex items-center justify-center",children:(0,s.jsx)(d.k, {

                }
                )
            }
            ):(0,s.jsxs)("div", {
                className:"min-h-screen flex flex-col",children:[(0,s.jsx)(l.Navbar, {

                }
                ),(0,s.jsx)("main", {
                    className:"flex-grow container mx-auto px-4 py-8",children:(0,s.jsxs)("div", {
                        className:"w-full max-w-2xl mx-auto bg-card shadow-lg rounded-lg p-6",children:[(0,s.jsxs)("div", {
                            ...S(),className:"border-2 border-dashed rounded-lg p-6 flex items-center justify-center text-center cursor-pointer transition ".concat(F?"border-primary bg-primary/10":"border-muted bg-muted/50"),children:[(0,s.jsx)("input", {
                                ...A()
                            }
                            ),(0,s.jsx)("p", {
                                className:"text-muted-foreground",children:F?"Drop the file here...":"Drag & drop a file, or click to select"
                            }
                            )]
                        }
                        ),r&&(0,s.jsxs)("div", {
                            className:"mt-4 bg-muted p-4 rounded-lg text-sm text-muted-foreground",children:[(0,s.jsx)("p", {
                                className:"font-semibold",children:"File Details:"
                            }
                            ),(0,s.jsxs)("p", {
                                children:["Name: ",r.name]
                            }
                            ),(0,s.jsxs)("p", {
                                children:["Size: ",(e=> {
                                    if(0===e)return"0 Bytes";
                                    let t=Math.floor(Math.log(e)/Math.log(1024));
                                    return Number.parseFloat((e/Math.pow(1024,t)).toFixed(2))+" "+["Bytes","KB","MB","GB","TB"][t]
                                }
                                )(r.size)]
                            }
                            ),(0,s.jsxs)("p", {
                                children:["Type: ",r.type]
                            }
                            ),(0,s.jsxs)("p", {
                                children:["Last Modified: ",new Date(r.lastModified).toLocaleString()]
                            }
                            )]
                        }
                        ),(0,s.jsx)(o.$, {
                            onClick:B,className:"w-full mt-4",disabled:b,children:b?(0,s.jsx)(d.k, {

                            }
                            ):(0,s.jsxs)(s.Fragment, {
                                children:[(0,s.jsx)(n.A, {
                                    className:"mr-2 h-4 w-4"
                                }
                                )," Upload"]
                            }
                            )
                        }
                        ),f&&(0,s.jsxs)("div", {
                            className:"relative mt-6 bg-muted p-4 rounded-lg text-sm text-muted-foreground",children:[(0,s.jsxs)("div", {
                                className:"absolute top-2 right-2 flex gap-2",children:[(0,s.jsx)("button", {
                                    onClick:()=> {
                                        f&&(navigator.clipboard.writeText(f),w(!0),setTimeout(()=>w(!1),2e3),p.oR.success("URL copied to clipboard", {
                                            position:"top-right"
                                        }
                                        ))
                                    }
                                    ,className:"text-muted-foreground hover:text-foreground transition",children:v?(0,s.jsx)(c.A, {
                                        className:"h-5 w-5 text-primary"
                                    }
                                    ):(0,s.jsx)(u.A, {
                                        className:"h-5 w-5"
                                    }
                                    )
                                }
                                ),(0,s.jsx)("a", {
                                    href:f,target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-foreground transition",children:(0,s.jsx)(m, {
                                        className:"h-5 w-5"
                                    }
                                    )
                                }
                                )]
                            }
                            ),(0,s.jsx)("p", {
                                className:"mt-6 break-all",children:f
                            }
                            )]
                        }
                        )]
                    }
                    )
                }
                ),(0,s.jsx)(i.Footer, {

                }
                )]
            }
            )
        }

    }
    ,48542:(e,t,r)=> {
        Promise.resolve().then(r.bind(r,43425))
    }
    ,71789:(e,t,r)=> {
        "use strict";
        r.d(t, {
            k:()=>l
        }
        );
        var s=r(95155),a=r(53999);
        function l(e) {
            let {
                className:t
            }
            =e;
            return(0,s.jsx)("div", {
                className:(0,a.cn)("flex items-center justify-center",t),children:(0,s.jsx)("div", {
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
    e.O(0,[6711,9003,3568,9130,2315,8441,1684,7358],()=>t(48542)),_N_E=e.O()
}
]);
