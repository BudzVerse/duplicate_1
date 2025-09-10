(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4779], {
    30416:(e,t,s)=> {
        "use strict";
        s.d(t, {
            default:()=>m
        }
        );
        var a=s(95155),l=s(12115),r=s(96848),i=s(60760),n=s(29911),c=s(66766);
        let o=e=> {
            let {
                result:t
            }
            =e,[s,i]=(0,l.useState)([]),o=async(e,t)=> {
                try {
                    let s=await fetch(e),a=await s.blob(),l=window.URL.createObjectURL(a),r=document.createElement("a");
                    r.href=l,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(l)
                }
                catch(e) {
                    console.error("Download error:",e)
                }

            }
            ,d=e=> {
                e.forEach((e,t)=> {
                    o(e,"photo_".concat(t+1,".jpg"))
                }
                )
            }
            ,x=e=> {
                i(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])
            }
            ;
            return t&&t.author?(0,a.jsxs)("div", {
                className:"bg-gray-800 dark:bg-gray-900 rounded-xl p-6 shadow-lg max-w-4xl mx-auto",children:[(0,a.jsxs)("div", {
                    className:"flex items-center mb-6",children:[(0,a.jsx)(c.default, {
                        src:t.author.avatar||"/placeholder.svg",alt:t.author.nickname,width:64,height:64,className:"rounded-full mr-4"
                    }
                    ),(0,a.jsxs)("div", {
                        children:[(0,a.jsx)("h3", {
                            className:"text-lg font-semibold text-white",children:t.author.fullname||"Unknown"
                        }
                        ),(0,a.jsx)("p", {
                            className:"text-sm text-gray-300",children:t.author.nickname||"Unknown"
                        }
                        ),(0,a.jsxs)("p", {
                            className:"text-xs text-gray-400",children:["ID: ",t.author.id||"Unknown"]
                        }
                        )]
                    }
                    )]
                }
                ),(0,a.jsxs)("div", {
                    className:"grid grid-cols-2 gap-4 mb-6",children:[(0,a.jsxs)("div", {
                        className:"flex items-center",children:[(0,a.jsx)(n.Ny1, {
                            className:"text-blue-500 mr-2"
                        }
                        ),(0,a.jsx)("span", {
                            className:"text-white",children:t.stats.views||0
                        }
                        )]
                    }
                    ),(0,a.jsxs)("div", {
                        className:"flex items-center",children:[(0,a.jsx)(n.Mbv, {
                            className:"text-red-500 mr-2"
                        }
                        ),(0,a.jsx)("span", {
                            className:"text-white",children:t.stats.likes||0
                        }
                        )]
                    }
                    ),(0,a.jsxs)("div", {
                        className:"flex items-center",children:[(0,a.jsx)(n.j1Q, {
                            className:"text-green-500 mr-2"
                        }
                        ),(0,a.jsx)("span", {
                            className:"text-white",children:t.stats.comment||0
                        }
                        )]
                    }
                    ),(0,a.jsxs)("div", {
                        className:"flex items-center",children:[(0,a.jsx)(n.Zzu, {
                            className:"text-yellow-500 mr-2"
                        }
                        ),(0,a.jsx)("span", {
                            className:"text-white",children:t.stats.share||0
                        }
                        )]
                    }
                    )]
                }
                ),(0,a.jsx)("h2", {
                    className:"text-xs font-semibold mb-4 text-white",children:t.title||"No title"
                }
                ),"photo"===t.data[0].type?(0,a.jsxs)("div", {
                    children:[(0,a.jsx)("div", {
                        className:"overflow-x-auto whitespace-nowrap flex space-x-4 mb-4",children:t.data.map((e,t)=>(0,a.jsxs)("div", {
                            className:"relative flex-shrink-0 w-48",children:[(0,a.jsx)(c.default, {
                                src:e.url,alt:"Photo ".concat(t+1),width:192,height:192,className:"rounded-xl w-full h-auto"
                            }
                            ),(0,a.jsx)("input", {
                                type:"checkbox",checked:s.includes(e.url),onChange:()=>x(e.url),className:"absolute top-2 right-2 w-5 h-5 border-2 rounded-md ".concat(s.includes(e.url)?"border-blue-500 bg-blue-500":"border-gray-300"," focus:outline-none")
                            }
                            )]
                        }
                        ,t))
                    }
                    ),(0,a.jsxs)("div", {
                        className:"flex flex-col sm:flex-row justify-between gap-4",children:[(0,a.jsxs)(r.P.button, {
                            onClick:()=> {
                                s.forEach((e,t)=> {
                                    o(e,"photo_".concat(t+1,".jpg"))
                                }
                                )
                            }
                            ,className:"bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center flex-1 ".concat(0===s.length&&"opacity-50 cursor-not-allowed"),whileHover: {
                                scale:s.length>0?1.05:1
                            }
                            ,whileTap: {
                                scale:s.length>0?.95:1
                            }
                            ,disabled:0===s.length,children:[(0,a.jsx)(n.WCW, {
                                className:"mr-2"
                            }
                            )," Download Selected Photos (",s.length,")"]
                        }
                        ),(0,a.jsxs)(r.P.button, {
                            onClick:()=>d(t.data.map(e=>e.url)),className:"bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center flex-1",whileHover: {
                                scale:1.05
                            }
                            ,whileTap: {
                                scale:.95
                            }
                            ,children:[(0,a.jsx)(n.WCW, {
                                className:"mr-2"
                            }
                            )," Download All Photos"]
                        }
                        )]
                    }
                    )]
                }
                ):(0,a.jsxs)("div", {
                    children:[(0,a.jsx)("video", {
                        src:t.data[0].url,controls:!0,className:"w-full rounded-xl mb-4"
                    }
                    ),(0,a.jsxs)("div", {
                        className:"flex flex-col sm:flex-row justify-between gap-4",children:[(0,a.jsxs)(r.P.button, {
                            onClick:()=>o(t.data[0].url,"video.mp4"),className:"bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center flex-1",whileHover: {
                                scale:1.05
                            }
                            ,whileTap: {
                                scale:.95
                            }
                            ,children:[(0,a.jsx)(n.WCW, {
                                className:"mr-2"
                            }
                            )," Download Video"]
                        }
                        ),t.data[1]&&(0,a.jsxs)(r.P.button, {
                            onClick:()=>o(t.data[1].url,"video_hd.mp4"),className:"bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center flex-1",whileHover: {
                                scale:1.05
                            }
                            ,whileTap: {
                                scale:.95
                            }
                            ,children:[(0,a.jsx)(n.WCW, {
                                className:"mr-2"
                            }
                            )," Download HD Video"]
                        }
                        )]
                    }
                    )]
                }
                ),t.music_info&&(0,a.jsxs)(r.P.button, {
                    onClick:()=> {
                        var e;
                        return(null==(e=t.music_info)?void 0:e.url)&&o(t.music_info.url,"music.mp3")
                    }
                    ,className:"mt-4 bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center w-full",whileHover: {
                        scale:1.05
                    }
                    ,whileTap: {
                        scale:.95
                    }
                    ,children:[(0,a.jsx)(n.BHn, {
                        className:"mr-2"
                    }
                    )," Download Music"]
                }
                )]
            }
            ):(0,a.jsx)("div", {
                className:"text-white",children:"No data available"
            }
            )
        }
        ;
        var d=s(7828),x=s(47746),u=s(71789);
        let m=()=> {
            let[e,t]=(0,l.useState)(""),[s,c]=(0,l.useState)(null),[m,h]=(0,l.useState)(!1),[f,p]=(0,l.useState)(!0);
            (0,l.useEffect)(()=> {
                let e=setTimeout(()=>p(!1),1e3);
                return()=>clearTimeout(e)
            }
            ,[]);
            let b=async t=> {
                t.preventDefault(),h(!0),c(null);
                try {
                    let t=await fetch("/api/tiktok", {
                        method:"POST",headers: {
                            "Content-Type":"application/json"
                        }
                        ,body:JSON.stringify( {
                            url:e
                        }
                        )
                    }
                    ),s=await t.json();
                    c(s.result)
                }
                catch(e) {
                    console.error(e)
                }
                h(!1)
            }
            ;
            return f?(0,a.jsx)("div", {
                className:"min-h-screen flex items-center justify-center bg-white dark:bg-gray-900",children:(0,a.jsx)(u.k, {

                }
                )
            }
            ):(0,a.jsxs)("div", {
                className:"flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white",children:[(0,a.jsx)(d.Navbar, {

                }
                ),(0,a.jsx)("main", {
                    className:"flex-grow flex items-start justify-center pt-20 px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div", {
                        className:"w-full max-w-3xl",children:[(0,a.jsxs)(r.P.div, {
                            initial: {
                                opacity:0,y:20
                            }
                            ,animate: {
                                opacity:1,y:0
                            }
                            ,transition: {
                                duration:.5
                            }
                            ,className:"bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[(0,a.jsx)("div", {
                                className:"relative flex justify-center mb-6",children:(0,a.jsx)("div", {
                                    className:"inline-flex shadow-sm relative",role:"group",children:(0,a.jsxs)("button", {
                                        type:"button",className:"px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-full flex items-center space-x-2",children:[(0,a.jsx)(n.kkU, {

                                        }
                                        ),(0,a.jsx)("span", {
                                            children:"TikTok"
                                        }
                                        )]
                                    }
                                    )
                                }
                                )
                            }
                            ),(0,a.jsxs)("form", {
                                onSubmit:b,className:"space-y-4",children:[(0,a.jsxs)("div", {
                                    className:"relative",children:[(0,a.jsx)("input", {
                                        type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Masukkan URL TikTok",className:"w-full px-4 py-4 rounded-xl bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    }
                                    ),(0,a.jsx)(n.KSO, {
                                        className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    }
                                    )]
                                }
                                ),(0,a.jsx)(r.P.button, {
                                    type:"submit",className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl text-lg",whileHover: {
                                        scale:1.05
                                    }
                                    ,whileTap: {
                                        scale:.95
                                    }
                                    ,disabled:m,children:m?"Processing...":"Download"
                                }
                                )]
                            }
                            )]
                        }
                        ),(0,a.jsx)(i.N, {
                            children:m&&(0,a.jsx)(r.P.div, {
                                initial: {
                                    opacity:0
                                }
                                ,animate: {
                                    opacity:1
                                }
                                ,exit: {
                                    opacity:0
                                }
                                ,className:"mt-8 flex justify-center",children:(0,a.jsx)(u.k, {

                                }
                                )
                            }
                            )
                        }
                        ),(0,a.jsx)(i.N, {
                            children:s&&(0,a.jsx)(r.P.div, {
                                initial: {
                                    opacity:0,y:20
                                }
                                ,animate: {
                                    opacity:1,y:0
                                }
                                ,exit: {
                                    opacity:0,y:-20
                                }
                                ,transition: {
                                    duration:.5
                                }
                                ,className:"mt-8",children:(0,a.jsx)(o, {
                                    result:s
                                }
                                )
                            }
                            )
                        }
                        )]
                    }
                    )
                }
                ),(0,a.jsx)(x.Footer, {

                }
                )]
            }
            )
        }

    }
    ,66766:(e,t,s)=> {
        "use strict";
        s.d(t, {
            default:()=>l.a
        }
        );
        var a=s(71469),l=s.n(a)
    }
    ,71469:(e,t,s)=> {
        "use strict";
        Object.defineProperty(t,"__esModule", {
            value:!0
        }
        ),!function(e,t) {
            for(var s in t)Object.defineProperty(e,s, {
                enumerable:!0,get:t[s]
            }
            )
        }
        (t, {
            default:function() {
                return c
            }
            ,getImageProps:function() {
                return n
            }

        }
        );
        let a=s(88229),l=s(38883),r=s(33063),i=a._(s(51193));
        function n(e) {
            let {
                props:t
            }
            =(0,l.getImgProps)(e, {
                defaultLoader:i.default,imgConf: {
                    deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0
                }

            }
            );
            for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];
            return {
                props:t
            }

        }
        let c=r.Image
    }
    ,71789:(e,t,s)=> {
        "use strict";
        s.d(t, {
            k:()=>r
        }
        );
        var a=s(95155),l=s(53999);
        function r(e) {
            let {
                className:t
            }
            =e;
            return(0,a.jsx)("div", {
                className:(0,l.cn)("flex items-center justify-center",t),children:(0,a.jsx)("div", {
                    className:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"
                }
                )
            }
            )
        }

    }
    ,90622:(e,t,s)=> {
        Promise.resolve().then(s.bind(s,30416))
    }

}
,e=> {
    var t=t=>e(e.s=t);
    e.O(0,[6711,9003,3063,2315,8441,1684,7358],()=>t(90622)),_N_E=e.O()
}
]);
