(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/layouts/MyourHead.js


const MyourHead = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Myour - CV/Resume React NextJS Template"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "https://fonts.googleapis.com/css?family=Mr+Dafoe&display=swap",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/basic.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/layout.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/magnific-popup.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/animate.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/jarallax.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/owl.carousel.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/swiper.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "css/fontawesome.css"
            }),
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "images/favicons/favicon.ico"
            })
        ]
    });
};
/* harmony default export */ const layouts_MyourHead = (MyourHead);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/layouts/Preloader.js


const Preloader = ()=>{
    (0,external_react_.useEffect)(()=>{
    // window.velocity = require("velocity-animate/velocity.js");
    // const preload = document.querySelector(".preloader");
    // setTimeout(function () {
    //   preload.getElementsByClassName("spinner")[0].velocity(
    //     {
    //       opacity: "0",
    //       translateY: "-40px",
    //     },
    //     {
    //       duration: 400,
    //       complete: function () {
    //         preload.getElementsByClassName("box-1")[0].velocity(
    //           {
    //             translateY: "-100%",
    //           },
    //           {
    //             duration: 1000,
    //             easing: [0.7, 0, 0.3, 1],
    //           }
    //         );
    //         preload.getElementsByClassName("box-2")[0].velocity(
    //           {
    //             translateY: "-100%",
    //           },
    //           {
    //             duration: 400,
    //             easing: [0.7, 0, 0.3, 1],
    //           }
    //         );
    //       },
    //     }
    //   );
    // }, 1000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "preloader",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "box-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "centrize full-width",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "vertical-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "spinner",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "lines"
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "box-2"
            })
        ]
    });
};
/* harmony default export */ const layouts_Preloader = (Preloader);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js





const App = ({ Component , pageProps  })=>{
    const [loader, setLoader] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoader(false);
        }, 2000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_MyourHead, {}),
            loader && /*#__PURE__*/ jsx_runtime_.jsx(layouts_Preloader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(467));
module.exports = __webpack_exports__;

})();