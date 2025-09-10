(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4895], {
    71789:(e,a,t)=> {
        "use strict";
        t.d(a, {
            k:()=>r
        }
        );
        var s=t(95155),n=t(53999);
        function r(e) {
            let {
                className:a
            }
            =e;
            return(0,s.jsx)("div", {
                className:(0,n.cn)("flex items-center justify-center",a),children:(0,s.jsx)("div", {
                    className:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"
                }
                )
            }
            )
        }

    }
    ,82369:(e,a,t)=> {
        "use strict";
        t.r(a),t.d(a, {
            default:()=>L
        }
        );
        var s=t(95155),n=t(12115),r=t(66766),l=t(47924),i=t(51154),o=t(54416),c=t(86151),d=t(12486),m=t(87712),u=t(84616),x=t(62525),p=t(71007),h=t(43332),g=t(81497),b=t(81284),f=t(97168),j=t(62720),y=t(96848),N=t(60760),k=t(3096),v=t(56671),w=t(57383),P=t(7828),S=t(71789),A=t(47746);
        let C=JSON.parse('[{"id":1,"title":"Pterodactyl Public Panel - Paket Basic","description":"Panel Pterodactyl untuk penggunaan publik dengan alokasi sumber daya terjamin: RAM 1GB, Disk 1GB.","price":1500,"image":"/placeholder.svg?height=200&width=400","category":"Hosting"},{"id":2,"title":"Pterodactyl Public Panel - Paket Standard","description":"Panel Pterodactyl untuk penggunaan publik dengan alokasi sumber daya terjamin: RAM 2GB, Disk 2GB.","price":2500,"image":"/placeholder.svg?height=200&width=400","category":"Hosting"},{"id":3,"title":"Pterodactyl Public Panel - Paket Premium","description":"Panel Pterodactyl untuk penggunaan publik dengan alokasi sumber daya terjamin: RAM 3GB, Disk 3GB.","price":3500,"image":"/placeholder.svg?height=200&width=400","category":"Hosting"},{"id":4,"title":"Pterodactyl Public Panel - Paket Ultimate","description":"Panel Pterodactyl untuk penggunaan publik dengan alokasi sumber daya terjamin: RAM 4GB, Disk 4GB.","price":4500,"image":"/placeholder.svg?height=200&width=400","category":"Hosting"},{"id":5,"title":"SMM Panel - Paket Basic","description":"Layanan Social Media Marketing dengan fitur lengkap untuk meningkatkan engagement sosial media Anda.","price":5000,"image":"/placeholder.svg?height=200&width=400","category":"Smm panel"},{"id":6,"title":"SMM Panel - Paket Pro","description":"Layanan Social Media Marketing premium dengan prioritas tinggi dan dukungan 24/7.","price":8000,"image":"/placeholder.svg?height=200&width=400","category":"Smm panel"},{"id":7,"title":"Source Code Toko Online","description":"Source code website toko online lengkap dengan sistem pembayaran dan manajemen produk.","price":12000,"image":"/placeholder.svg?height=200&width=400","category":"Source code"},{"id":8,"title":"Source Code Aplikasi Kasir","description":"Source code aplikasi kasir dengan fitur inventaris, laporan penjualan, dan multi-user.","price":9500,"image":"/placeholder.svg?height=200&width=400","category":"Source code"}]'),D="reztech_cart_items";
        function L() {
            let[e,a]=(0,n.useState)(!1),[t,b]=(0,n.useState)([]),[k,L]=(0,n.useState)(null),[R,B]=(0,n.useState)(!1),[K,$]=(0,n.useState)(!1),[z,M]=(0,n.useState)("All"),[O,E]=(0,n.useState)(""),[H,q]=(0,n.useState)(""),[_,G]=(0,n.useState)(null),[J,U]=(0,n.useState)(1),[F,I]=(0,n.useState)(C),[W,Y]=(0,n.useState)(C),[V,Q]=(0,n.useState)([]),[X,Z]=(0,n.useState)(!1),[ee,ea]=(0,n.useState)(!1),[et,es]=(0,n.useState)(""),[en,er]=(0,n.useState)(!1),[el,ei]=(0,n.useState)(C), {
                scrollY:eo
            }
            =(0,j.L)(),ec=(0,n.useRef)(null),ed=e=> {
                let a= {

                }
                ;
                e.forEach(e=> {
                    let t=e.category;
                    a[t]=(a[t]||0)+1
                }
                );
                let t=[ {
                    id:"All",label:"Semua Produk",count:e.length
                }
                ];
                return Object.entries(a).forEach(e=> {
                    let[a,s]=e;
                    t.push( {
                        id:a,label:a,count:s
                    }
                    )
                }
                ),t
            }
            ,em=e=> {
                w.A.set(D,JSON.stringify(e), {
                    expires:30
                }
                )
            }
            ,eu=()=> {
                try {
                    let e=w.A.get(D);
                    return e?JSON.parse(e):[]
                }
                catch(e) {
                    return console.error("Error loading cart from cookies:",e),[]
                }

            }
            ,ex=(0,n.useCallback)((e,a)=> {
                if(!e.trim())if("All"===a)return F;
                else return F.filter(e=>e.category===a);
                return F.filter(t=> {
                    let s=t.title.toLowerCase().includes(e.toLowerCase())||t.description.toLowerCase().includes(e.toLowerCase())||t.category.toLowerCase().includes(e.toLowerCase()),n="All"===a||t.category===a;
                    return s&&n
                }
                )
            }
            ,[F]),ep=(0,n.useCallback)(e=> {
                es(e),er(!0),setTimeout(()=> {
                    let a=ex(e,z);
                    ei(a),Y(a),er(!1)
                }
                ,800)
            }
            ,[ex,z]);
            (0,n.useEffect)(()=> {
                b(eu()),Q(ed(F));
                let e=setTimeout(()=> {
                    a(!0)
                }
                ,1e3);
                return()=>clearTimeout(e)
            }
            ,[]),(0,n.useEffect)(()=> {
                t.length>0?em(t):w.A.remove(D)
            }
            ,[t]),(0,n.useEffect)(()=> {
                Z(!0);
                let e=setTimeout(()=> {
                    let e=ex(et,z);
                    ei(e),Y(e),Z(!1)
                }
                ,500);
                return()=>clearTimeout(e)
            }
            ,[z,ex,et]),(0,n.useEffect)(()=> {
                Q(ed(F))
            }
            ,[F]);
            let eh=t.reduce((e,a)=>e+(a.quantity||1),0),eg=e=> {
                let a=t.findIndex(a=>a.id===e.id);
                if(a>=0) {
                    let e=[...t];
                    e[a].quantity=(e[a].quantity||1)+1,b(e)
                }
                else b([...t, {
                    ...e,quantity:1
                }
                ]);
                ea(!0),setTimeout(()=>ea(!1),300),v.o.success("".concat(e.title," berhasil ditambahkan ke keranjang!"))
            }
            ,eb=(e,a)=> {
                a<1||b(t.map(t=>t.id===e? {
                    ...t,quantity:a
                }
                :t))
            }
            ,ef=e=> {
                let a=t.find(a=>a.id===e);
                a&&(0,v.o)("Hapus ".concat(a.title," dari keranjang?"), {
                    description:"Produk akan dihapus dari keranjang belanja Anda",action: {
                        label:"Hapus",onClick:()=> {
                            b(t.filter(a=>a.id!==e)),v.o.success("".concat(a.title," berhasil dihapus dari keranjang"))
                        }

                    }
                    ,cancel: {
                        label:"Batal",onClick:()=> {
                            v.o.info("Produk tetap di keranjang")
                        }

                    }

                }
                )
            }
            ,ej=()=>t.reduce((e,a)=>e+a.price*(a.quantity||1),0),ey=e=> {
                L(e)
            }
            ,eN=e=> {
                G(e),U(1),$(!0)
            }
            ,ek=function() {
                let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a="Halo reztech,\n\n";
                return e?(a+="Saya ingin memesan produk berikut (Checkout):\n\n",a+="--------------------------------------\n",t.forEach((e,s)=> {
                    a+="\uD83D\uDCE6 *Produk:* ".concat(e.title,"\n"),a+="\uD83D\uDD22 *Jumlah:* ".concat(e.quantity||1," unit\n"),a+="\uD83D\uDCB0 *Harga Satuan:* Rp ".concat(e.price.toLocaleString(),"\n"),a+=" SUBTOTAL: Rp ".concat(((e.quantity||1)*e.price).toLocaleString(),"\n"),s<t.length-1&&(a+="--------------------------------------\n")
                }
                ),a+="--------------------------------------\n",a+="--------------------------------------\n",a+="\uD83D\uDCB3 *TOTAL PEMBAYARAN:* *Rp ".concat(ej().toLocaleString(),"*\n"),a+="--------------------------------------\n\n"):_&&(a+="Saya ingin memesan produk berikut (Pesan Langsung):\n\n",a+="--------------------------------------\n",a+="\uD83D\uDCE6 *Produk:* ".concat(_.title,"\n"),a+="\uD83D\uDC64 *Nama Penerima:* ".concat(O||"nene","\n"),a+="\uD83D\uDD22 *Jumlah:* ".concat(J," unit\n"),a+="\uD83D\uDCB0 *Harga Satuan:* Rp ".concat(_.price.toLocaleString(),"\n"),a+=" SUBTOTAL: Rp ".concat((J*_.price).toLocaleString(),"\n"),a+="--------------------------------------\n",a+="--------------------------------------\n",a+="\uD83D\uDCB3 *TOTAL PEMBAYARAN:* *Rp ".concat((J*_.price).toLocaleString(),"*\n"),a+="--------------------------------------\n\n"),encodeURIComponent(a+="Mohon informasi langkah selanjutnya untuk pembayaran.\n\nTerima kasih!")
            }
            ,ev=function() {
                let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=ek(e);
                window.open("https://wa.me/6283894064758?text=".concat(a),"_blank"),e?(B(!1),v.o.success("Pesanan dikirim ke WhatsApp!")):($(!1),v.o.success("Pesanan langsung dikirim ke WhatsApp!"))
            }
            ;
            return e?(0,s.jsxs)("div", {
                className:"flex flex-col min-h-screen bg-background text-foreground",ref:ec,children:[(0,s.jsx)(P.Navbar, {
                    cartItemsCount:eh,onCartClick:()=> {
                        B(!0)
                    }
                    ,cartAnimation:ee
                }
                ),(0,s.jsxs)(y.P.section, {
                    initial: {
                        opacity:0,y:20
                    }
                    ,animate: {
                        opacity:1,y:0
                    }
                    ,transition: {
                        duration:.5
                    }
                    ,className:"relative px-4 py-8 text-center bg-muted/50",children:[(0,s.jsx)("div", {
                        className:"absolute inset-0 z-0 opacity-20",children:(0,s.jsx)(r.default, {
                            src:"/placeholder.svg?height=400&width=400",alt:"Background pattern",fill:!0,className:"object-cover"
                        }
                        )
                    }
                    ),(0,s.jsxs)("div", {
                        className:"relative z-10 max-w-4xl mx-auto",children:[(0,s.jsxs)("h2", {
                            className:"text-3xl md:text-4xl font-black mb-2",children:["Solusi Digital ",(0,s.jsx)("span", {
                                className:"text-primary",children:"Terdepan"
                            }
                            )," ",(0,s.jsx)("br", {
                                className:"md:hidden"
                            }
                            ),"Untuk Kebutuhan Anda"]
                        }
                        ),(0,s.jsx)("p", {
                            className:"text-muted-foreground text-sm mt-2 mb-6 max-w-lg mx-auto",children:"Jelajahi koleksi Hosting, Source code, dan layanan smm terbaik dengan harga kompetitif dan dukungan penuh."
                        }
                        ),(0,s.jsx)(f.$, {
                            className:"bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 px-6 w-full max-w-xs h-14 font-black text-lg",children:"Lihat Katalog Produk"
                        }
                        )]
                    }
                    )]
                }
                ),(0,s.jsx)("div", {
                    className:"px-4 py-4 bg-background",children:(0,s.jsxs)("div", {
                        className:"relative max-w-4xl mx-auto",children:[(0,s.jsx)("input", {
                            type:"text",placeholder:"Cari VPS, Hosting, Script...",className:"w-full bg-card text-foreground rounded-xl py-4 px-4 pl-12 pr-14 h-16 focus:outline-none focus:ring-2 focus:ring-primary border border-border font-medium text-lg",value:et,onChange:e=>ep(e.target.value)
                        }
                        ),(0,s.jsx)(l.A, {
                            className:"absolute left-4 top-5 h-6 w-6 text-muted-foreground"
                        }
                        ),en&&(0,s.jsx)("div", {
                            className:"absolute right-4 top-5",children:(0,s.jsx)(i.A, {
                                className:"h-6 w-6 text-primary animate-spin"
                            }
                            )
                        }
                        )]
                    }
                    )
                }
                ),(0,s.jsx)("div", {
                    className:"px-4 py-8 bg-background",children:(0,s.jsx)("div", {
                        className:"max-w-4xl mx-auto",children:(0,s.jsx)("div", {
                            className:"flex flex-wrap justify-center gap-3",children:V.map(e=>(0,s.jsxs)(y.P.button, {
                                whileHover: {
                                    scale:1.05
                                }
                                ,whileTap: {
                                    scale:.95
                                }
                                ,onClick:()=>M(e.id),className:"\n                  relative overflow-hidden rounded-xl px-6 py-4 font-bold text-sm transition-all duration-300\n                  flex items-center gap-3 min-w-[140px] justify-center border-2\n                  ".concat(z===e.id?"bg-primary text-primary-foreground shadow-lg border-primary":"bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground border-border hover:border-primary/50","\n                "),children:[(0,s.jsxs)("div", {
                                    className:"flex flex-col items-center",children:[(0,s.jsx)("span", {
                                        className:"font-semibold",children:e.label
                                    }
                                    ),(0,s.jsxs)("span", {
                                        className:"text-xs opacity-75",children:["(",e.count,")"]
                                    }
                                    )]
                                }
                                ),z===e.id&&(0,s.jsx)(y.P.div, {
                                    layoutId:"category-indicator",className:"absolute inset-0 bg-primary/20 rounded-xl",transition: {
                                        type:"spring",stiffness:300,damping:30
                                    }

                                }
                                )]
                            }
                            ,e.id))
                        }
                        )
                    }
                    )
                }
                ),(0,s.jsx)("section", {
                    className:"px-4 pb-20 bg-background",children:(0,s.jsxs)("div", {
                        className:"max-w-4xl mx-auto",children:[(0,s.jsx)(y.P.h3, {
                            initial: {
                                opacity:0,y:20
                            }
                            ,animate: {
                                opacity:1,y:0
                            }
                            ,className:"text-2xl font-bold mb-8 text-center",children:et?(0,s.jsxs)(s.Fragment, {
                                children:[(0,s.jsx)("span", {
                                    className:"text-primary",children:"Hasil Pencarian"
                                }
                                ),' "',et,'"',(0,s.jsxs)("span", {
                                    className:"text-muted-foreground text-lg ml-2",children:["(",W.length," produk)"]
                                }
                                )]
                            }
                            ):(0,s.jsxs)(s.Fragment, {
                                children:[(0,s.jsx)("span", {
                                    className:"text-primary",children:"All"===z?"Semua":z
                                }
                                )," Produk Unggulan",(0,s.jsxs)("span", {
                                    className:"text-muted-foreground text-lg ml-2",children:["(","All"===z?F.length:W.length," produk)"]
                                }
                                )]
                            }
                            )
                        }
                        ,"".concat(z,"-").concat(et)),X||en?(0,s.jsx)("div", {
                            className:"flex justify-center py-12",children:(0,s.jsx)(S.k, {

                            }
                            )
                        }
                        ):0===W.length?(0,s.jsxs)("div", {
                            className:"text-center py-12",children:[(0,s.jsx)(l.A, {
                                className:"h-16 w-16 mx-auto text-muted-foreground mb-4"
                            }
                            ),(0,s.jsx)("h4", {
                                className:"text-xl font-bold mb-2",children:"Tidak ada produk ditemukan"
                            }
                            ),(0,s.jsx)("p", {
                                className:"text-muted-foreground",children:et?'Tidak ada produk yang cocok dengan "'.concat(et,'"'):"Tidak ada produk dalam kategori ini"
                            }
                            )]
                        }
                        ):(0,s.jsx)("div", {
                            className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:W.map((e,a)=>(0,s.jsx)(T, {
                                product:e,index:a,onAddToCart:eg,onShowDetails:ey,onOrderNow:eN
                            }
                            ,e.id))
                        }
                        )]
                    }
                    )
                }
                ),(0,s.jsx)(N.N, {
                    children:k&&(0,s.jsx)(y.P.div, {
                        initial: {
                            opacity:0
                        }
                        ,animate: {
                            opacity:1
                        }
                        ,exit: {
                            opacity:0
                        }
                        ,className:"fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4",onClick:()=>L(null),children:(0,s.jsx)(y.P.div, {
                            initial: {
                                scale:.9,opacity:0
                            }
                            ,animate: {
                                scale:1,opacity:1
                            }
                            ,exit: {
                                scale:.9,opacity:0
                            }
                            ,className:"bg-card rounded-xl w-full max-w-md overflow-hidden border border-border",onClick:e=>e.stopPropagation(),children:(0,s.jsxs)("div", {
                                className:"p-5",children:[(0,s.jsxs)("div", {
                                    className:"flex justify-between items-center mb-4",children:[(0,s.jsx)("h2", {
                                        className:"text-xl font-bold",children:"Detail Produk"
                                    }
                                    ),(0,s.jsx)(f.$, {
                                        variant:"ghost",size:"icon",onClick:()=>L(null),children:(0,s.jsx)(o.A, {
                                            className:"h-5 w-5"
                                        }
                                        )
                                    }
                                    )]
                                }
                                ),(0,s.jsxs)("div", {
                                    className:"space-y-4",children:[(0,s.jsxs)("div", {
                                        className:"relative h-48 w-full bg-primary rounded-xl overflow-hidden",children:[(0,s.jsx)(r.default, {
                                            src:k.image||"/placeholder.svg",alt:k.title,fill:!0,className:"object-cover"
                                        }
                                        ),(0,s.jsx)("div", {
                                            className:"absolute inset-0 flex items-center justify-center",children:(0,s.jsx)("div", {
                                                className:"text-center",children:(0,s.jsx)("div", {
                                                    className:"text-xl font-bold text-primary-foreground",children:"Panel PteroDactyl Public"
                                                }
                                                )
                                            }
                                            )
                                        }
                                        )]
                                    }
                                    ),(0,s.jsx)("h3", {
                                        className:"text-xl font-bold",children:k.title
                                    }
                                    ),(0,s.jsx)("p", {
                                        className:"text-muted-foreground",children:k.description
                                    }
                                    ),(0,s.jsxs)("div", {
                                        className:"text-primary text-2xl font-bold",children:["Rp ",k.price.toLocaleString()]
                                    }
                                    ),(0,s.jsxs)("div", {
                                        className:"flex gap-2 mt-4",children:[(0,s.jsxs)(f.$, {
                                            className:"flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-2 font-bold h-12",onClick:()=> {
                                                eg(k),L(null)
                                            }
                                            ,children:[(0,s.jsx)(c.A, {
                                                className:"h-4 w-4 mr-1"
                                            }
                                            )," Keranjang"]
                                        }
                                        ),(0,s.jsxs)(f.$, {
                                            variant:"outline",className:"flex-1 border-primary text-foreground rounded-xl py-2 font-bold h-12",onClick:()=> {
                                                eN(k),L(null)
                                            }
                                            ,children:[(0,s.jsx)(d.A, {
                                                className:"h-4 w-4 mr-1"
                                            }
                                            )," Pesan Kini"]
                                        }
                                        )]
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
                ),(0,s.jsx)(N.N, {
                    children:R&&(0,s.jsx)(y.P.div, {
                        initial: {
                            opacity:0
                        }
                        ,animate: {
                            opacity:1
                        }
                        ,exit: {
                            opacity:0
                        }
                        ,className:"fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4",onClick:()=>B(!1),children:(0,s.jsx)(y.P.div, {
                            initial: {
                                scale:.9,opacity:0
                            }
                            ,animate: {
                                scale:1,opacity:1
                            }
                            ,exit: {
                                scale:.9,opacity:0
                            }
                            ,className:"bg-card rounded-xl w-full max-w-md overflow-hidden border border-border",onClick:e=>e.stopPropagation(),children:(0,s.jsxs)("div", {
                                className:"p-5",children:[(0,s.jsxs)("div", {
                                    className:"flex justify-between items-center mb-6",children:[(0,s.jsx)("h2", {
                                        className:"text-3xl font-bold text-primary",children:"Keranjang Belanja Anda"
                                    }
                                    ),(0,s.jsx)(f.$, {
                                        variant:"ghost",size:"icon",onClick:()=>B(!1),children:(0,s.jsx)(o.A, {
                                            className:"h-6 w-6 text-muted-foreground"
                                        }
                                        )
                                    }
                                    )]
                                }
                                ),0===t.length?(0,s.jsxs)("div", {
                                    className:"text-center py-8",children:[(0,s.jsx)(c.A, {
                                        className:"h-12 w-12 mx-auto text-muted-foreground mb-4"
                                    }
                                    ),(0,s.jsx)("p", {
                                        className:"font-bold",children:"Keranjang belanja Anda kosong"
                                    }
                                    )]
                                }
                                ):(0,s.jsxs)(s.Fragment, {
                                    children:[t.map(e=>(0,s.jsxs)("div", {
                                        className:"flex gap-3 mb-4",children:[(0,s.jsx)("div", {
                                            className:"relative h-20 w-20 bg-primary rounded-xl overflow-hidden flex-shrink-0",children:(0,s.jsx)(r.default, {
                                                src:e.image||"/placeholder.svg",alt:e.title,fill:!0,className:"object-cover"
                                            }
                                            )
                                        }
                                        ),(0,s.jsxs)("div", {
                                            className:"flex-1",children:[(0,s.jsx)("h4", {
                                                className:"font-bold",children:e.title
                                            }
                                            ),(0,s.jsxs)("div", {
                                                className:"text-primary font-bold",children:["Rp ",e.price.toLocaleString()]
                                            }
                                            ),(0,s.jsxs)("div", {
                                                className:"flex items-center mt-2",children:[(0,s.jsx)(f.$, {
                                                    variant:"outline",size:"icon",className:"h-8 w-8 rounded-xl bg-muted border-border",onClick:()=>eb(e.id,(e.quantity||1)-1),children:(0,s.jsx)(m.A, {
                                                        className:"h-4 w-4"
                                                    }
                                                    )
                                                }
                                                ),(0,s.jsx)("span", {
                                                    className:"mx-3 font-bold",children:e.quantity||1
                                                }
                                                ),(0,s.jsx)(f.$, {
                                                    variant:"outline",size:"icon",className:"h-8 w-8 rounded-xl bg-muted border-border",onClick:()=>eb(e.id,(e.quantity||1)+1),children:(0,s.jsx)(u.A, {
                                                        className:"h-4 w-4"
                                                    }
                                                    )
                                                }
                                                ),(0,s.jsx)(f.$, {
                                                    variant:"ghost",size:"icon",className:"ml-auto text-red-500",onClick:()=>ef(e.id),children:(0,s.jsx)(x.A, {
                                                        className:"h-5 w-5"
                                                    }
                                                    )
                                                }
                                                )]
                                            }
                                            )]
                                        }
                                        )]
                                    }
                                    ,e.id)),(0,s.jsxs)("div", {
                                        className:"border-t border-border my-4 pt-4",children:[(0,s.jsxs)("div", {
                                            className:"mb-4",children:[(0,s.jsx)("label", {
                                                className:"block mb-2 font-bold",children:"Nama Penerima"
                                            }
                                            ),(0,s.jsxs)("div", {
                                                className:"relative",children:[(0,s.jsx)("input", {
                                                    type:"text",placeholder:"Masukkan nama lengkap Anda",className:"w-full bg-muted text-foreground rounded-xl py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary border border-border",value:O,onChange:e=>E(e.target.value)
                                                }
                                                ),(0,s.jsx)(p.A, {
                                                    className:"absolute left-3 top-3 h-5 w-5 text-muted-foreground"
                                                }
                                                )]
                                            }
                                            )]
                                        }
                                        ),(0,s.jsxs)("div", {
                                            className:"mb-4",children:[(0,s.jsx)("label", {
                                                className:"block mb-2 font-bold",children:"Kode Kupon (Opsional)"
                                            }
                                            ),(0,s.jsxs)("div", {
                                                className:"flex",children:[(0,s.jsxs)("div", {
                                                    className:"relative flex-1",children:[(0,s.jsx)("input", {
                                                        type:"text",placeholder:"Contoh: reztech",className:"w-full bg-muted text-foreground rounded-l-xl py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary border border-border",value:H,onChange:e=>q(e.target.value)
                                                    }
                                                    ),(0,s.jsx)(h.A, {
                                                        className:"absolute left-3 top-3 h-5 w-5 text-muted-foreground"
                                                    }
                                                    )]
                                                }
                                                ),(0,s.jsx)(f.$, {
                                                    className:"bg-primary hover:bg-primary/90 rounded-r-xl font-bold h-12",children:"% Terapkan"
                                                }
                                                )]
                                            }
                                            )]
                                        }
                                        ),(0,s.jsxs)("div", {
                                            className:"bg-muted rounded-xl p-4",children:[(0,s.jsxs)("div", {
                                                className:"flex justify-between mb-2",children:[(0,s.jsx)("span", {
                                                    className:"text-muted-foreground",children:"Subtotal Produk:"
                                                }
                                                ),(0,s.jsxs)("span", {
                                                    className:"font-bold",children:["Rp ",ej().toLocaleString()]
                                                }
                                                )]
                                            }
                                            ),(0,s.jsxs)("div", {
                                                className:"flex justify-between font-bold text-lg pt-2 border-t border-border",children:[(0,s.jsx)("span", {
                                                    children:"Total Pembayaran:"
                                                }
                                                ),(0,s.jsxs)("span", {
                                                    className:"text-primary",children:["Rp ",ej().toLocaleString()]
                                                }
                                                )]
                                            }
                                            )]
                                        }
                                        ),(0,s.jsxs)(f.$, {
                                            variant:"outline",className:"w-full mt-4 border-border text-muted-foreground rounded-xl py-3 flex items-center justify-center gap-2 font-bold h-12",onClick:()=> {
                                                0!==t.length&&(0,v.o)("Kosongkan seluruh keranjang?", {
                                                    description:"Semua produk akan dihapus dari keranjang belanja",action: {
                                                        label:"Kosongkan",onClick:()=> {
                                                            b([]),B(!1),v.o.success("Keranjang berhasil dikosongkan")
                                                        }

                                                    }
                                                    ,cancel: {
                                                        label:"Batal",onClick:()=> {
                                                            v.o.info("Keranjang tetap tersimpan")
                                                        }

                                                    }

                                                }
                                                )
                                            }
                                            ,children:[(0,s.jsx)(x.A, {
                                                className:"h-5 w-5"
                                            }
                                            )," Kosongkan Keranjang"]
                                        }
                                        ),(0,s.jsxs)(f.$, {
                                            className:"w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 mt-4 font-bold flex items-center justify-center gap-2 h-12",onClick:()=>ev(!0),children:[(0,s.jsx)(g.A, {
                                                className:"h-5 w-5"
                                            }
                                            )," Lanjut ke Pembayaran (Rp"," ",ej().toLocaleString(),")"]
                                        }
                                        )]
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
                ),(0,s.jsx)(N.N, {
                    children:K&&(0,s.jsx)(y.P.div, {
                        initial: {
                            opacity:0
                        }
                        ,animate: {
                            opacity:1
                        }
                        ,exit: {
                            opacity:0
                        }
                        ,className:"fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4",onClick:()=>$(!1),children:(0,s.jsx)(y.P.div, {
                            initial: {
                                scale:.9,opacity:0
                            }
                            ,animate: {
                                scale:1,opacity:1
                            }
                            ,exit: {
                                scale:.9,opacity:0
                            }
                            ,className:"bg-card rounded-xl w-full max-w-md overflow-hidden border border-border",onClick:e=>e.stopPropagation(),children:(0,s.jsxs)("div", {
                                className:"p-5",children:[(0,s.jsxs)("div", {
                                    className:"flex justify-between items-center mb-6",children:[(0,s.jsx)("h2", {
                                        className:"text-3xl font-bold text-primary",children:"Pesan Langsung"
                                    }
                                    ),(0,s.jsx)(f.$, {
                                        variant:"ghost",size:"icon",onClick:()=>$(!1),children:(0,s.jsx)(o.A, {
                                            className:"h-6 w-6 text-muted-foreground"
                                        }
                                        )
                                    }
                                    )]
                                }
                                ),_&&(0,s.jsxs)(s.Fragment, {
                                    children:[(0,s.jsxs)("p", {
                                        className:"text-muted-foreground mb-6",children:["Anda memesan: ",(0,s.jsx)("span", {
                                            className:"font-bold text-foreground",children:_.title
                                        }
                                        )]
                                    }
                                    ),(0,s.jsxs)("div", {
                                        className:"mb-4",children:[(0,s.jsx)("label", {
                                            className:"block mb-2 font-bold",children:"Nama Penerima"
                                        }
                                        ),(0,s.jsxs)("div", {
                                            className:"relative",children:[(0,s.jsx)("input", {
                                                type:"text",placeholder:"Masukkan nama lengkap Anda",className:"w-full bg-muted text-foreground rounded-xl py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary border border-border",value:O,onChange:e=>E(e.target.value)
                                            }
                                            ),(0,s.jsx)(p.A, {
                                                className:"absolute left-3 top-3 h-5 w-5 text-muted-foreground"
                                            }
                                            )]
                                        }
                                        )]
                                    }
                                    ),(0,s.jsxs)("div", {
                                        className:"mb-4",children:[(0,s.jsx)("label", {
                                            className:"block mb-2 font-bold",children:"Jumlah"
                                        }
                                        ),(0,s.jsxs)("div", {
                                            className:"flex items-center",children:[(0,s.jsx)(f.$, {
                                                variant:"outline",size:"icon",className:"h-10 w-10 rounded-xl bg-muted border-border",onClick:()=>J>1&&U(J-1),children:(0,s.jsx)(m.A, {
                                                    className:"h-5 w-5"
                                                }
                                                )
                                            }
                                            ),(0,s.jsx)("div", {
                                                className:"mx-3 w-20 text-center",children:(0,s.jsx)("input", {
                                                    type:"text",className:"w-full bg-muted text-center text-foreground rounded-xl py-2 focus:outline-none focus:ring-2 focus:ring-primary border border-border font-bold",value:J,readOnly:!0
                                                }
                                                )
                                            }
                                            ),(0,s.jsx)(f.$, {
                                                variant:"outline",size:"icon",className:"h-10 w-10 rounded-xl bg-muted border-border",onClick:()=>U(J+1),children:(0,s.jsx)(u.A, {
                                                    className:"h-5 w-5"
                                                }
                                                )
                                            }
                                            )]
                                        }
                                        )]
                                    }
                                    ),(0,s.jsxs)("div", {
                                        className:"mb-4",children:[(0,s.jsx)("label", {
                                            className:"block mb-2 font-bold",children:"Kode Kupon (Opsional)"
                                        }
                                        ),(0,s.jsxs)("div", {
                                            className:"flex",children:[(0,s.jsxs)("div", {
                                                className:"relative flex-1",children:[(0,s.jsx)("input", {
                                                    type:"text",placeholder:"Contoh: reztech",className:"w-full bg-muted text-foreground rounded-l-xl py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary border border-border",value:H,onChange:e=>q(e.target.value)
                                                }
                                                ),(0,s.jsx)(h.A, {
                                                    className:"absolute left-3 top-3 h-5 w-5 text-muted-foreground"
                                                }
                                                )]
                                            }
                                            ),(0,s.jsx)(f.$, {
                                                className:"bg-primary hover:bg-primary/90 rounded-r-xl font-bold h-12",children:"% Terapkan"
                                            }
                                            )]
                                        }
                                        )]
                                    }
                                    ),(0,s.jsxs)("div", {
                                        className:"bg-muted rounded-xl p-4",children:[(0,s.jsxs)("div", {
                                            className:"flex justify-between mb-2",children:[(0,s.jsx)("span", {
                                                className:"text-muted-foreground",children:"Harga Satuan:"
                                            }
                                            ),(0,s.jsxs)("span", {
                                                className:"font-bold",children:["Rp ",_.price.toLocaleString()]
                                            }
                                            )]
                                        }
                                        ),(0,s.jsxs)("div", {
                                            className:"flex justify-between mb-2",children:[(0,s.jsx)("span", {
                                                className:"text-muted-foreground",children:"Jumlah Item:"
                                            }
                                            ),(0,s.jsx)("span", {
                                                className:"font-bold",children:J
                                            }
                                            )]
                                        }
                                        ),(0,s.jsxs)("div", {
                                            className:"flex justify-between mb-2",children:[(0,s.jsx)("span", {
                                                className:"text-muted-foreground",children:"Subtotal:"
                                            }
                                            ),(0,s.jsxs)("span", {
                                                className:"font-bold",children:["Rp ",(_.price*J).toLocaleString()]
                                            }
                                            )]
                                        }
                                        ),(0,s.jsxs)("div", {
                                            className:"flex justify-between font-bold text-lg pt-2 border-t border-border",children:[(0,s.jsx)("span", {
                                                children:"Total Pembayaran:"
                                            }
                                            ),(0,s.jsxs)("span", {
                                                className:"text-primary",children:["Rp ",(_.price*J).toLocaleString()]
                                            }
                                            )]
                                        }
                                        )]
                                    }
                                    ),(0,s.jsxs)(f.$, {
                                        className:"w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 mt-4 font-bold flex items-center justify-center gap-2 h-12",onClick:()=>ev(!1),children:[(0,s.jsx)(g.A, {
                                            className:"h-5 w-5"
                                        }
                                        )," Kirim Pesanan Langsung via WhatsApp"]
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
                ),(0,s.jsx)(A.Footer, {

                }
                )]
            }
            ):(0,s.jsx)("div", {
                className:"min-h-screen flex items-center justify-center bg-background",children:(0,s.jsx)(S.k, {

                }
                )
            }
            )
        }
        function T(e) {
            let {
                product:a,index:t,onAddToCart:n,onShowDetails:l,onOrderNow:i
            }
            =e,[o,m]=(0,k.Wx)( {
                triggerOnce:!1,threshold:.1
            }
            );
            return(0,s.jsxs)(y.P.div, {
                ref:o,initial: {
                    opacity:0,y:50
                }
                ,animate:m? {
                    opacity:1,y:0
                }
                : {
                    opacity:0,y:50
                }
                ,exit: {
                    opacity:0,y:-50
                }
                ,transition: {
                    duration:.5,delay:.1*t
                }
                ,className:"bg-card rounded-xl overflow-hidden border border-border",children:[(0,s.jsxs)("div", {
                    className:"relative h-60 w-full bg-primary",children:[(0,s.jsx)(r.default, {
                        src:a.image||"/placeholder.svg",alt:a.title,fill:!0,className:"object-cover"
                    }
                    ),(0,s.jsx)("div", {
                        className:"absolute inset-0 flex items-center justify-center",children:(0,s.jsx)("div", {
                            className:"text-center",children:(0,s.jsx)("div", {
                                className:"text-xl font-bold text-primary-foreground",children:"Panel PteroDactyl Public"
                            }
                            )
                        }
                        )
                    }
                    )]
                }
                ),(0,s.jsxs)("div", {
                    className:"p-4",children:[(0,s.jsx)("h4", {
                        className:"text-lg font-bold",children:a.title
                    }
                    ),(0,s.jsx)("p", {
                        className:"text-sm text-muted-foreground mt-1 line-clamp-2",children:a.description
                    }
                    ),(0,s.jsxs)("div", {
                        className:"mt-2 text-primary text-xl font-bold",children:["Rp ",a.price.toLocaleString()]
                    }
                    ),(0,s.jsx)("div", {
                        className:"flex justify-center mt-4",children:(0,s.jsxs)(f.$, {
                            variant:"ghost",className:"text-foreground flex items-center justify-center w-full font-bold",onClick:()=>l(a),children:[(0,s.jsx)(b.A, {
                                className:"h-4 w-4 mr-2"
                            }
                            ),(0,s.jsx)("span", {
                                children:"Detail Produk"
                            }
                            )]
                        }
                        )
                    }
                    ),(0,s.jsxs)("div", {
                        className:"flex gap-2 mt-2",children:[(0,s.jsxs)(f.$, {
                            className:"flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-2 font-bold h-12",onClick:()=>n(a),children:[(0,s.jsx)(c.A, {
                                className:"h-4 w-4 mr-1"
                            }
                            )," Keranjang"]
                        }
                        ),(0,s.jsxs)(f.$, {
                            variant:"outline",className:"flex-1 border-primary text-foreground rounded-xl py-2 font-bold h-12",onClick:()=>i(a),children:[(0,s.jsx)(d.A, {
                                className:"h-4 w-4 mr-1"
                            }
                            )," Pesan Kini"]
                        }
                        )]
                    }
                    )]
                }
                )]
            }
            )
        }

    }
    ,98498:(e,a,t)=> {
        Promise.resolve().then(t.bind(t,82369))
    }

}
,e=> {
    var a=a=>e(e.s=a);
    e.O(0,[6711,9003,3063,6671,3231,2315,8441,1684,7358],()=>a(98498)),_N_E=e.O()
}
]);
