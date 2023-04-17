"use strict";
exports.id = 295;
exports.ids = [295];
exports.modules = {

/***/ 9295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/popup/ContentModal.js



const Content = ({ content , close  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-fade popup-box-inline mfp-ready"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap content_popup_warp mfp-close-btn-in mfp-auto-cursor mfp-fade popup-box-inline mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-inline-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: "popup-2",
                                className: "popup-box mfp-fade",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: content.outerHTML
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>close(),
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        children: "\xd7"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ContentModal = ()=>{
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [content, setContent] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const popupLink = document.querySelectorAll(".has-popup-media");
            for(let i = 0; i < popupLink.length; i++){
                const element = popupLink[i];
                element.addEventListener("click", ()=>{
                    setOpen(true);
                    const boxItem = element.closest(".box-item"), hidedItem = boxItem.getElementsByClassName("mfp-hide")[0], content = hidedItem.getElementsByClassName("content")[0];
                    setContent(content);
                });
            }
        }, 500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: open && /*#__PURE__*/ jsx_runtime_.jsx(Content, {
            content: content,
            close: ()=>{
                setContent(null);
                setOpen(false);
            }
        })
    });
};
/* harmony default export */ const popup_ContentModal = (ContentModal);

;// CONCATENATED MODULE: ./src/components/popup/ImageGallery.js


const ImgView = ({ close , imgs  })=>{
    const images = imgs.length > 0 ? imgs : [
        "images/works/work6.jpg",
        "images/works/work1.jpg",
        "images/works/work5.jpg"
    ];
    const [photoIndex, setPhotoIndex] = (0,external_react_.useState)(0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "postion-realtive",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-fade mfp-ready",
                onClick: ()=>close()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                className: "mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-image-holder",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mfp-content imgGallery_popup",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mfp-iframe-scaler",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img-container",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                style: {
                                                    width: `100%`
                                                },
                                                className: "mfp-img",
                                                src: images[photoIndex]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mfp-preloader",
                                    children: "Loading..."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            title: "Previous (Left arrow key)",
                            type: "button",
                            className: "mfp-arrow mfp-arrow-left mfp-prevent-close",
                            onClick: ()=>setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            title: "Next (Right arrow key)",
                            type: "button",
                            className: "mfp-arrow mfp-arrow-right mfp-prevent-close",
                            onClick: ()=>{
                                setPhotoIndex((photoIndex + 1) % images.length);
                            // console.log(photoIndex, images[photoIndex]);
                            }
                        })
                    ]
                })
            })
        ]
    });
};
const ImageGallery = ()=>{
    const [imgs, setImgs] = (0,external_react_.useState)([]);
    const [view, setView] = (0,external_react_.useState)(false);
    const [imgContainer, setImgContainer] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const imgGallery = document.querySelectorAll(".has-popup-gallery");
            for(let i = 0; i < imgGallery.length; i++){
                const gallery = imgGallery[i];
                gallery.addEventListener("click", ()=>{
                    setView(true);
                    let img_ = [];
                    let parentElement = gallery.closest(".image");
                    let mfpHideItem = parentElement.getElementsByClassName("mfp-hide")[0];
                    let img = mfpHideItem.getElementsByTagName("a");
                    for(let i = 0; i < img.length; i++){
                        const imgHref = img[i].getAttribute("href");
                        img_.push(imgHref);
                    }
                    setImgs(img_);
                });
            }
        }, 1000);
        console.log(imgs);
    }, [
        view
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: view && /*#__PURE__*/ jsx_runtime_.jsx(ImgView, {
            imgs: imgs,
            close: ()=>{
                setView(false);
                setImgs([]);
            }
        })
    });
};
/* harmony default export */ const popup_ImageGallery = (ImageGallery);

;// CONCATENATED MODULE: ./src/components/popup/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: ` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const [img, setImg] = (0,external_react_.useState)(false);
    const [imgValue, setImgValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const popup_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/popup/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container popup-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: videoID,
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const [video, setVideo] = (0,external_react_.useState)(false);
    const [videoValue, setVideoValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const popup_VideoPopup = (VideoPopup);

;// CONCATENATED MODULE: ./src/layouts/Footer.js

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "socials",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    href: "https://www.facebook.com/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "icon fab fa-facebook-f"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    href: "https://www.instagram.com/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "icon fab fa-instagram"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    href: "https://dribbble.com/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "icon fab fa-dribbble"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layouts_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(8603);
;// CONCATENATED MODULE: ./src/layouts/Header.js




const Menu = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "menu",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "menu-item current-menu-item menu-item-has-children",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#section-started",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "animated-button",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Home"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "sub-menu",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "menu-item current-menu-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "//",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Home 1"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "menu-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/index-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Home 2"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "menu-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/index-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Home 3"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "menu-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/index-slider",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Home Slider"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "menu-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/index-video",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "index-video",
                                        children: "Home Video"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "menu-item",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#section-about",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "animated-button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "About"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "menu-item",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#section-experience",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "animated-button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Resume"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "menu-item",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#section-portfolio",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "animated-button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Portfolio"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "menu-item",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#section-contacts",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "animated-button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Contact"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "menu-item menu-item-has-children",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        legacyBehavior: true,
                        href: "/blog",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "animated-button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Blog"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "sub-menu",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "menu-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/blog",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Blog Posts"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "menu-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/single-post",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Single Post"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
const Header = ()=>{
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", utils/* stickyNav */.h4);
        window.addEventListener("scroll", utils/* activeSection */.j1);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DaskTopHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MobileHeader, {})
        ]
    });
};
/* harmony default export */ const layouts_Header = (Header);
const DaskTopHeader = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "desktopHeader header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "logo",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "logo-img",
                            src: "images/logo.png",
                            alt: ""
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "logo-lnk",
                            children: [
                                "Jo\xe9 ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "Wilson"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                className: "menu-btn",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "#",
                className: "btn download-cv-btn",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "animated-button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Download CV"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "icon fas fa-download"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-sidebar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "top-menu",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "top-menu-nav",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-topmenu-container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                        })
                    })
                })
            })
        ]
    });
const MobileHeader = ()=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: `header mobileHeader ${toggle ? "active" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "logo",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "logo-img",
                            src: "images/logo.png",
                            alt: ""
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "logo-lnk",
                            children: [
                                "Jo\xe9 ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "Wilson"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                className: "menu-btn",
                onClick: ()=>setToggle(!toggle),
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "#",
                className: "btn download-cv-btn",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "animated-button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Download CV"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "icon fas fa-download"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-sidebar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "top-menu",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "top-menu-nav",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-topmenu-container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                        })
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/layouts/Layout.js








const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(popup_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ImageView, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ImageGallery, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ContentModal, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layouts_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "wrapper",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layouts_Footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layouts_Layout = (Layout);


/***/ }),

/***/ 8603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "av": () => (/* binding */ dotResize),
/* harmony export */   "bR": () => (/* binding */ createSkillsDot),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "j1": () => (/* binding */ activeSection)
/* harmony export */ });
const createSkillsDot = ()=>{
    var skills_dotted = document.querySelectorAll(".skills .progress");
    skills_dotted.forEach((skill)=>{
        skill.insertAdjacentHTML("beforeend", '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
        let percentage = skill.getElementsByClassName("percentage")[0];
        percentage.insertAdjacentHTML("beforeend", '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
        let width = skill.clientWidth, da = percentage.getElementsByClassName("da")[0];
        da.style.width = `${width}px`;
    });
};
const dotResize = ()=>{
    window.addEventListener("resize", ()=>{
        var skills_dotted = document.querySelectorAll(".skills-list.dotted .progress");
        skills_dotted.forEach((skill)=>{
            let width = skill.clientWidth, da = skill.getElementsByClassName("da")[0];
            da.style.width = `${width + 1}px`;
        });
    });
};
// Header
const stickyNav = ()=>{
    let offset = window.scrollY;
    const sticky = document.querySelectorAll("header");
    sticky.forEach((sticky)=>{
        if (sticky) {
            if (offset > 100) {
                sticky.classList.add("fixed");
                document.querySelector("body").classList.remove("background-enabled");
            } else {
                sticky.classList.remove("fixed");
                document.querySelector("body").classList.add("background-enabled");
            }
        }
    });
};
const activeSection = (value)=>{
    const sections = document.querySelectorAll(".section");
    const navLi = document.querySelectorAll(".top-menu ul li");
    let current = "";
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((li)=>{
        if (current !== null) {
            li.classList.remove("current-menu-item");
        }
        if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
            li.classList.add("current-menu-item");
        }
    });
};


/***/ })

};
;