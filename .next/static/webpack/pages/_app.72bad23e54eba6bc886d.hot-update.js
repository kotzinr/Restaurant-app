webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/react-google-login/dist/google-login.js":
false,

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/auth */ \"./components/auth.js\");\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n\n\nvar _jsxFileName = \"/Users/roxykotzin/Downloads/setting-up-graphql-with-apollo_starter (2)/pages/login.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* /pages/login.js */\n\n\n\n\n // import { GoogleLogin } from 'react-google-login';\n// const clientId ='YOUR_CLIENT_ID.apps.googleusercontent.com';\n// function Googlelogin() {\n//   const onSuccess = (res) => {\n//     console.log('[Login Success] currentUser:', res.profileObj);\n//   };\n//   const onFailure = (res) => {\n//     console.log('[Login failed] res:', res);\n//   };\n//   return (\n//     <div>\n//       <GoogleLogin\n//         clientId={clientId}\n//         buttonText=\"Google login\"\n//         onSuccess={onSuccess}\n//         onFailure={onFailure}\n//         cookiePolicy={'single_host_origin'}\n//         style={{ marginTop: '100px' }}\n//         isSignedIn={true}\n//         />\n//     </div>\n//   );\n// };\n\nfunction Login(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    identifier: \"\",\n    password: \"\"\n  }),\n      data = _useState[0],\n      updateData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_components_context__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (appContext.isAuthenticated) {\n      router.push(\"/\"); // redirect if you're already logged in\n    }\n  }, []);\n\n  function _onChange(event) {\n    updateData(_objectSpread(_objectSpread({}, data), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, event.target.value)));\n  }\n\n  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    sm: \"12\",\n    md: {\n      size: 5,\n      offset: 3\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1470127334\" + \" \" + \"paper\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1470127334\" + \" \" + \"header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"/imagesRestaurant/broccoli.png\",\n    style: {\n      width: 100,\n      backgroundcolor: \"blue\"\n    },\n    className: \"jsx-1470127334\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  })), __jsx(\"section\", {\n    className: \"jsx-1470127334\" + \" \" + \"wrapper\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, Object.entries(error).length !== 0 && error.constructor === Object && error.message.map(function (error) {\n    return __jsx(\"div\", {\n      key: error.messages[0].id,\n      style: {\n        marginBottom: 10\n      },\n      className: \"jsx-1470127334\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 21\n      }\n    }, __jsx(\"small\", {\n      style: {\n        color: \"red\"\n      },\n      className: \"jsx-1470127334\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 23\n      }\n    }, error.messages[0].message));\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }, __jsx(\"fieldset\", {\n    disabled: loading,\n    className: \"jsx-1470127334\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"FormGroup\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 19\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Label\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 21\n    }\n  }, \"Email:\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n    onChange: function onChange(event) {\n      return _onChange(event);\n    },\n    name: \"identifier\",\n    style: {\n      height: 50,\n      fontSize: \"1.2em\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 21\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"FormGroup\"], {\n    style: {\n      marginBottom: 30\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 19\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Label\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 21\n    }\n  }, \"Password:\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n    onChange: function onChange(event) {\n      return _onChange(event);\n    },\n    type: \"password\",\n    name: \"password\",\n    style: {\n      height: 50,\n      fontSize: \"1.2em\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 21\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"FormGroup\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 19\n    }\n  }, __jsx(\"span\", {\n    className: \"jsx-1470127334\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    href: \"\",\n    className: \"jsx-1470127334\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 23\n    }\n  }, __jsx(\"small\", {\n    className: \"jsx-1470127334\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 25\n    }\n  }, \"Forgot Password?\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    style: {\n      \"float\": \"right\",\n      width: 120\n    },\n    color: \"success\",\n    onClick: function onClick() {\n      setLoading(true);\n      Object(_components_auth__WEBPACK_IMPORTED_MODULE_5__[\"login\"])(data.identifier, data.password).then(function (res) {\n        setLoading(false); // set authed User in global context to update header/app state\n\n        appContext.setUser(res.data.user);\n      })[\"catch\"](function (error) {\n        //setError(error.response.data);\n        setLoading(false);\n      });\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 21\n    }\n  }, loading ? \"Loading... \" : \"Submit\")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"1470127334\",\n    __self: this\n  }, \".paper.jsx-1470127334{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);border-radius:6px;margin-top:90px;}.notification.jsx-1470127334{color:#ab003c;}.header.jsx-1470127334{width:100%;height:120px;background-color:#2196f3;margin-bottom:30px;border-radius-top:6px;}.wrapper.jsx-1470127334{padding:10px 30px 20px 30px !important;}a.jsx-1470127334{color:blue !important;}img.jsx-1470127334{margin:15px 30px 10px 50px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb3h5a290emluL0Rvd25sb2Fkcy9zZXR0aW5nLXVwLWdyYXBocWwtd2l0aC1hcG9sbG9fc3RhcnRlciAoMikvcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOElTLEFBR3dDLEFBUWIsQUFHSCxBQU80QixBQUdqQixBQUdLLFdBWmQsR0FIZixRQWFBLEVBVDJCLEdBVmEsQUFzQnhDLFlBTkEsVUFMcUIsbUJBQ0csc0JBQ3hCLGlEQVpvQixrQkFDRixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3JveHlrb3R6aW4vRG93bmxvYWRzL3NldHRpbmctdXAtZ3JhcGhxbC13aXRoLWFwb2xsb19zdGFydGVyICgyKS9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9wYWdlcy9sb2dpbi5qcyAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sLFxuICBCdXR0b24sXG4gIEZvcm0sXG4gIEZvcm1Hcm91cCxcbiAgTGFiZWwsXG4gIElucHV0LFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgbG9naW4sIGxvZ291dCwgd2l0aEF1dGhTeW5jIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuLy8gaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xuXG4vLyBjb25zdCBjbGllbnRJZCA9J1lPVVJfQ0xJRU5UX0lELmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcblxuLy8gZnVuY3Rpb24gR29vZ2xlbG9naW4oKSB7XG4vLyAgIGNvbnN0IG9uU3VjY2VzcyA9IChyZXMpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygnW0xvZ2luIFN1Y2Nlc3NdIGN1cnJlbnRVc2VyOicsIHJlcy5wcm9maWxlT2JqKTtcbi8vICAgfTtcblxuLy8gICBjb25zdCBvbkZhaWx1cmUgPSAocmVzKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coJ1tMb2dpbiBmYWlsZWRdIHJlczonLCByZXMpO1xuICBcbi8vICAgfTtcbiAgXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIDxHb29nbGVMb2dpblxuLy8gICAgICAgICBjbGllbnRJZD17Y2xpZW50SWR9XG4vLyAgICAgICAgIGJ1dHRvblRleHQ9XCJHb29nbGUgbG9naW5cIlxuLy8gICAgICAgICBvblN1Y2Nlc3M9e29uU3VjY2Vzc31cbi8vICAgICAgICAgb25GYWlsdXJlPXtvbkZhaWx1cmV9XG4vLyAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XG4vLyAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzEwMHB4JyB9fVxuLy8gICAgICAgICBpc1NpZ25lZEluPXt0cnVlfVxuLy8gICAgICAgICAvPlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuXG5mdW5jdGlvbiBMb2dpbihwcm9wcykge1xuICBjb25zdCBbZGF0YSwgdXBkYXRlRGF0YV0gPSB1c2VTdGF0ZSh7IGlkZW50aWZpZXI6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXBwQ29udGV4dC5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTsgLy8gcmVkaXJlY3QgaWYgeW91J3JlIGFscmVhZHkgbG9nZ2VkIGluXG4gICAgfVxuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICB1cGRhdGVEYXRhKHsgLi4uZGF0YSwgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9e3sgc2l6ZTogNSwgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlc1Jlc3RhdXJhbnQvYnJvY2NvbGkucG5nXCIgc3R5bGU9e3sgd2lkdGg6IDEwMCwgYmFja2dyb3VuZGNvbG9yOiBcImJsdWVcIiB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhlcnJvcikubGVuZ3RoICE9PSAwICYmXG4gICAgICAgICAgICAgICAgZXJyb3IuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJlxuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZXJyb3IubWVzc2FnZXNbMF0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2VzWzBdLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPkVtYWlsOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWRlbnRpZmllclwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1MCwgZm9udFNpemU6IFwiMS4yZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5QYXNzd29yZDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiBcIjEuMmVtXCIgfX1cblxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkZvcmdvdCBQYXNzd29yZD88L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgd2lkdGg6IDEyMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luKGRhdGEuaWRlbnRpZmllciwgZGF0YS5wYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBhdXRoZWQgVXNlciBpbiBnbG9iYWwgY29udGV4dCB0byB1cGRhdGUgaGVhZGVyL2FwcCBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbnRleHQuc2V0VXNlcihyZXMuZGF0YS51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IFwiTG9hZGluZy4uLiBcIiA6IFwiU3VibWl0XCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICNhYjAwM2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzLXRvcDogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHggMjBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAzMHB4IDEwcHggNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsgR29vZ2xlbG9naW47XG4iXX0= */\\n/*@ sourceURL=/Users/roxykotzin/Downloads/setting-up-graphql-with-apollo_starter (2)/pages/login.js */\"));\n}\n\n_s(Login, \"IjF++1o97NpQVVWCTD4JX3a/TOA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nGooglelogin;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/M2I2OSJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwidXNlU3RhdGUiLCJpZGVudGlmaWVyIiwicGFzc3dvcmQiLCJkYXRhIiwidXBkYXRlRGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsImFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsInVzZUVmZmVjdCIsImlzQXV0aGVudGljYXRlZCIsInB1c2giLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2l6ZSIsIm9mZnNldCIsIndpZHRoIiwiYmFja2dyb3VuZGNvbG9yIiwiT2JqZWN0IiwiZW50cmllcyIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwibWVzc2FnZSIsIm1hcCIsIm1lc3NhZ2VzIiwiaWQiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImhlaWdodCIsImZvbnRTaXplIiwibG9naW4iLCJ0aGVuIiwicmVzIiwic2V0VXNlciIsInVzZXIiLCJHb29nbGVsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVVBO0NBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQztBQUFFQyxjQUFVLEVBQUUsRUFBZDtBQUFrQkMsWUFBUSxFQUFFO0FBQTVCLEdBQUQsQ0FEZjtBQUFBLE1BQ2JDLElBRGE7QUFBQSxNQUNQQyxVQURPOztBQUFBLG1CQUVVSixzREFBUSxDQUFDLEtBQUQsQ0FG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TixFQUFrQkUsSUFBSSxDQUFDRCxRQUF2QixDQUFMLENBQ0dxQyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JsQyxrQkFBVSxDQUFDLEtBQUQsQ0FBVixDQURhLENBRWI7O0FBQ0FLLGtCQUFVLENBQUM4QixPQUFYLENBQW1CRCxHQUFHLENBQUNyQyxJQUFKLENBQVN1QyxJQUE1QjtBQUNELE9BTEgsV0FNUyxVQUFDbkMsS0FBRCxFQUFXO0FBQ2hCO0FBQ0FELGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsT0FUSDtBQVVELEtBZkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWlCR0QsT0FBTyxHQUFHLGFBQUgsR0FBbUIsUUFqQjdCLENBTkYsQ0F0QkYsQ0FERixDQWZGLENBSkYsQ0FERixDQURGLENBREY7QUFBQTtBQUFBO0FBQUEsKzRRQURGO0FBK0dEOztHQWhJUVAsSztVQUlRWSxxRDs7O0tBSlJaLEs7QUFrSU1BLG9FQUFmO0FBQXNCNkMsV0FBVyIsImZpbGUiOiIuL3BhZ2VzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL3BhZ2VzL2xvZ2luLmpzICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG4gIEJ1dHRvbixcbiAgRm9ybSxcbiAgRm9ybUdyb3VwLFxuICBMYWJlbCxcbiAgSW5wdXQsXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyBsb2dpbiwgbG9nb3V0LCB3aXRoQXV0aFN5bmMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0XCI7XG4vLyBpbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XG5cbi8vIGNvbnN0IGNsaWVudElkID0nWU9VUl9DTElFTlRfSUQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xuXG4vLyBmdW5jdGlvbiBHb29nbGVsb2dpbigpIHtcbi8vICAgY29uc3Qgb25TdWNjZXNzID0gKHJlcykgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKCdbTG9naW4gU3VjY2Vzc10gY3VycmVudFVzZXI6JywgcmVzLnByb2ZpbGVPYmopO1xuLy8gICB9O1xuXG4vLyAgIGNvbnN0IG9uRmFpbHVyZSA9IChyZXMpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygnW0xvZ2luIGZhaWxlZF0gcmVzOicsIHJlcyk7XG4gIFxuLy8gICB9O1xuICBcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPEdvb2dsZUxvZ2luXG4vLyAgICAgICAgIGNsaWVudElkPXtjbGllbnRJZH1cbi8vICAgICAgICAgYnV0dG9uVGV4dD1cIkdvb2dsZSBsb2dpblwiXG4vLyAgICAgICAgIG9uU3VjY2Vzcz17b25TdWNjZXNzfVxuLy8gICAgICAgICBvbkZhaWx1cmU9e29uRmFpbHVyZX1cbi8vICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cbi8vICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTAwcHgnIH19XG4vLyAgICAgICAgIGlzU2lnbmVkSW49e3RydWV9XG4vLyAgICAgICAgIC8+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG5cbmZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XG4gIGNvbnN0IFtkYXRhLCB1cGRhdGVEYXRhXSA9IHVzZVN0YXRlKHsgaWRlbnRpZmllcjogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBhcHBDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhcHBDb250ZXh0LmlzQXV0aGVudGljYXRlZCkge1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpOyAvLyByZWRpcmVjdCBpZiB5b3UncmUgYWxyZWFkeSBsb2dnZWQgaW5cbiAgICB9XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgIHVwZGF0ZURhdGEoeyAuLi5kYXRhLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNtPVwiMTJcIiBtZD17eyBzaXplOiA1LCBvZmZzZXQ6IDMgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzUmVzdGF1cmFudC9icm9jY29saS5wbmdcIiBzdHlsZT17eyB3aWR0aDogMTAwLCBiYWNrZ3JvdW5kY29sb3I6IFwiYmx1ZVwiIH19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGVycm9yKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtlcnJvci5tZXNzYWdlc1swXS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IubWVzc2FnZXNbMF0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+RW1haWw6PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25DaGFuZ2UoZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpZGVudGlmaWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogXCIxLjJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPlBhc3N3b3JkOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1MCwgZm9udFNpemU6IFwiMS4yZW1cIiB9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+Rm9yZ290IFBhc3N3b3JkPzwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCB3aWR0aDogMTIwIH19XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW4oZGF0YS5pZGVudGlmaWVyLCBkYXRhLnBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGF1dGhlZCBVc2VyIGluIGdsb2JhbCBjb250ZXh0IHRvIHVwZGF0ZSBoZWFkZXIvYXBwIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29udGV4dC5zZXRVc2VyKHJlcy5kYXRhLnVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gXCJMb2FkaW5nLi4uIFwiIDogXCJTdWJtaXRcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5wYXBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogI2FiMDAzYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMtdG9wOiA2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDMwcHggMTBweCA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luOyBHb29nbGVsb2dpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

})