webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cart */ \"./components/cart.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_restaurantList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/restaurantList */ \"./components/restaurantList.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _components_dishes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dishes */ \"./components/dishes.js\");\nvar _jsxFileName = \"/Users/roxykotzin/Downloads/setting-up-graphql-with-apollo_starter (2)/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:1337\";\n  console.log(\"URL: \".concat(API_URL));\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var link = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"HttpLink\"]({\n    uri: \"\".concat(API_URL, \"/graphql\")\n  });\n  var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"]();\n  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloClient\"]({\n    link: link,\n    cache: cache\n  });\n  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n    client: client,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"search\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 15\n    }\n  }, \" Local Restaurants\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"InputGroup\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"InputGroupAddon\"], {\n    addonType: \"append\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, \" Search \"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n    onChange: function onChange(e) {\n      return setQuery(e.target.value.toLocaleLowerCase());\n    },\n    value: query,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  })), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 30\n    }\n  })), __jsx(_components_restaurantList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    search: query,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }), __jsx(_components_dishes__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    search: query,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \" \"));\n}\n\n_s(Home, \"HYX2QbDDdTtlu7GfoQbAPZOIM6k=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvTG9jYWxlTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUNaLE1BQU1DLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUFaLElBQW1DLHVCQUFuRDtBQUNBQyxTQUFPLENBQUNDLEdBQVIsZ0JBQW9CTCxPQUFwQjs7QUFGWSxrQkFHY00sc0RBQVEsQ0FBQyxFQUFELENBSHRCO0FBQUEsTUFHTEMsS0FISztBQUFBLE1BR0VDLFFBSEY7O0FBSVosTUFBTUMsSUFBSSxHQUFHLElBQUlDLHVEQUFKLENBQWE7QUFBRUMsT0FBRyxZQUFLWCxPQUFMO0FBQUwsR0FBYixDQUFiO0FBQ0EsTUFBTVksS0FBSyxHQUFHLElBQUlDLDREQUFKLEVBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFBQ04sUUFBSSxFQUFKQSxJQUFEO0FBQU1HLFNBQUssRUFBTEE7QUFBTixHQUFqQixDQUFmO0FBR0EsU0FDSSxNQUFDLDZEQUFEO0FBQWdCLFVBQU0sRUFBRUUsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosRUFFTSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDBEQUFEO0FBQWlCLGFBQVMsRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBRUEsTUFBQyxnREFBRDtBQUNJLFlBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLGFBQ1ZSLFFBQVEsQ0FBQ1EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsaUJBQWYsRUFBRCxDQURFO0FBQUEsS0FEZDtBQUlJLFNBQUssRUFBRVosS0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsQ0FGTixFQVVtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVm5CLENBREYsRUFhSSxNQUFDLGtFQUFEO0FBQWdCLFVBQU0sRUFBRUEsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJKLEVBY0ksTUFBQywwREFBRDtBQUFRLFVBQU0sRUFBRUEsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRKLEVBZUksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZkosQ0FESjtBQW1CRDs7R0E1Qk1SLEk7O0tBQUFBLEk7QUE2QlFBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRcIlxuaW1wb3J0IHtBcG9sbG9Qcm92aWRlcixBcG9sbG9DbGllbnQsSHR0cExpbmssIEluTWVtb3J5Q2FjaGV9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBSZXN0YXVyYW50TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3RhdXJhbnRMaXN0JztcbmltcG9ydCB7IElucHV0R3JvdXAsIElucHV0R3JvdXBBZGRvbixJbnB1dH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGlzaGVzXCI7XG5cblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuICAgIGNvbnNvbGUubG9nKGBVUkw6ICR7QVBJX1VSTH1gKVxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgbGluayA9IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX1VSTH0vZ3JhcGhxbGB9KVxuICAgIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKVxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe2xpbmssY2FjaGV9KTtcbiBcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICA8aDI+IExvY2FsIFJlc3RhdXJhbnRzPC9oMj5cbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCA+XG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJhcHBlbmRcIj4gU2VhcmNoIDwvSW5wdXRHcm91cEFkZG9uPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPjxicj48L2JyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8UmVzdGF1cmFudExpc3Qgc2VhcmNoPXtxdWVyeX0gLz5cbiAgICAgICAgICAgIDxEaXNoZXMgc2VhcmNoPXtxdWVyeX0gLz5cbiAgICAgICAgICAgIDxDYXJ0PiA8L0NhcnQ+XG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxuICBleHBvcnQgZGVmYXVsdCBIb21lO1xuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})