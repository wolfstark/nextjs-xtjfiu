/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/parametric";
exports.ids = ["pages/parametric"];
exports.modules = {

/***/ "./pages/parametric.js":
/*!*****************************!*\
  !*** ./pages/parametric.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Parametric; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\nvar _jsxFileName = \"/home/projects/nextjs-xtjfiu/pages/parametric.js\";\n\n\nfunction Parametric() {\n  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const canvas = ref.current;\n    const ctx = canvas.getContext('2d');\n    const {\n      width,\n      height\n    } = canvas;\n    ctx.translate(0.5 * width, 0.5 * height);\n    ctx.scale(1, -1);\n    const LINE_SEGMENTS = 60;\n\n    function parabola(x0, y0, p, min, max) {\n      const ret = [];\n\n      for (let i = 0; i <= LINE_SEGMENTS; i++) {\n        const s = i / 60;\n        const t = min * (1 - s) + max * s;\n        const x = x0 + 2 * p * t ** 2;\n        const y = y0 + 2 * p * t;\n        ret.push([x, y]);\n      }\n\n      return ret;\n    }\n\n    draw(parabola(0, 0, 5.5, -10, 10));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n    width: \"512\",\n    height: \"512\",\n    ref: ref\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL3BhcmFtZXRyaWMuanM/Y2NhZSJdLCJuYW1lcyI6WyJQYXJhbWV0cmljIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY2FudmFzIiwiY3VycmVudCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zbGF0ZSIsInNjYWxlIiwiTElORV9TRUdNRU5UUyIsInBhcmFib2xhIiwieDAiLCJ5MCIsInAiLCJtaW4iLCJtYXgiLCJyZXQiLCJpIiwicyIsInQiLCJ4IiwieSIsInB1c2giLCJkcmF3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQ25DLFFBQU1DLEdBQUcsR0FBR0MsNkNBQU0sRUFBbEI7QUFDQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsTUFBTSxHQUFHSCxHQUFHLENBQUNJLE9BQW5CO0FBQ0EsVUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLFVBQU07QUFBRUMsV0FBRjtBQUFTQztBQUFULFFBQW9CTCxNQUExQjtBQUVBRSxPQUFHLENBQUNJLFNBQUosQ0FBYyxNQUFNRixLQUFwQixFQUEyQixNQUFNQyxNQUFqQztBQUNBSCxPQUFHLENBQUNLLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBQyxDQUFkO0FBRUEsVUFBTUMsYUFBYSxHQUFHLEVBQXRCOztBQUNBLGFBQVNDLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQkMsQ0FBMUIsRUFBNkJDLEdBQTdCLEVBQWtDQyxHQUFsQyxFQUF1QztBQUNyQyxZQUFNQyxHQUFHLEdBQUcsRUFBWjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUlSLGFBQXJCLEVBQW9DUSxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDLGNBQU1DLENBQUMsR0FBR0QsQ0FBQyxHQUFHLEVBQWQ7QUFDQSxjQUFNRSxDQUFDLEdBQUdMLEdBQUcsSUFBSSxJQUFJSSxDQUFSLENBQUgsR0FBZ0JILEdBQUcsR0FBR0csQ0FBaEM7QUFDQSxjQUFNRSxDQUFDLEdBQUdULEVBQUUsR0FBRyxJQUFJRSxDQUFKLEdBQVFNLENBQUMsSUFBSSxDQUE1QjtBQUNBLGNBQU1FLENBQUMsR0FBR1QsRUFBRSxHQUFHLElBQUlDLENBQUosR0FBUU0sQ0FBdkI7QUFDQUgsV0FBRyxDQUFDTSxJQUFKLENBQVMsQ0FBQ0YsQ0FBRCxFQUFJQyxDQUFKLENBQVQ7QUFDRDs7QUFDRCxhQUFPTCxHQUFQO0FBQ0Q7O0FBQ0RPLFFBQUksQ0FBQ2IsUUFBUSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sR0FBUCxFQUFZLENBQUMsRUFBYixFQUFpQixFQUFqQixDQUFULENBQUo7QUFDRCxHQXJCUSxFQXFCTixFQXJCTSxDQUFUO0FBc0JBLHNCQUFPO0FBQVEsU0FBSyxFQUFDLEtBQWQ7QUFBb0IsVUFBTSxFQUFDLEtBQTNCO0FBQWlDLE9BQUcsRUFBRVo7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9wYXJhbWV0cmljLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBwYXJhbWV0cmljIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbWV0cmljKCkge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSByZWYuY3VycmVudDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhcztcblxuICAgIGN0eC50cmFuc2xhdGUoMC41ICogd2lkdGgsIDAuNSAqIGhlaWdodCk7XG4gICAgY3R4LnNjYWxlKDEsIC0xKTtcblxuICAgIGNvbnN0IExJTkVfU0VHTUVOVFMgPSA2MDtcbiAgICBmdW5jdGlvbiBwYXJhYm9sYSh4MCwgeTAsIHAsIG1pbiwgbWF4KSB7XG4gICAgICBjb25zdCByZXQgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IExJTkVfU0VHTUVOVFM7IGkrKykge1xuICAgICAgICBjb25zdCBzID0gaSAvIDYwO1xuICAgICAgICBjb25zdCB0ID0gbWluICogKDEgLSBzKSArIG1heCAqIHM7XG4gICAgICAgIGNvbnN0IHggPSB4MCArIDIgKiBwICogdCAqKiAyO1xuICAgICAgICBjb25zdCB5ID0geTAgKyAyICogcCAqIHQ7XG4gICAgICAgIHJldC5wdXNoKFt4LCB5XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBkcmF3KHBhcmFib2xhKDAsIDAsIDUuNSwgLTEwLCAxMCkpO1xuICB9LCBbXSk7XG4gIHJldHVybiA8Y2FudmFzIHdpZHRoPVwiNTEyXCIgaGVpZ2h0PVwiNTEyXCIgcmVmPXtyZWZ9PjwvY2FudmFzPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/parametric.js\n");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parametric\": function() { return /* binding */ parametric; }\n/* harmony export */ });\nfunction draw(points, context, {\n  strokeStyle = 'black',\n  fillStyle = null,\n  close = false\n} = {}) {\n  context.strokeStyle = strokeStyle;\n  context.beginPath();\n  context.moveTo(...points[0]);\n\n  for (let i = 1; i < points.length; i++) {\n    context.lineTo(...points[i]);\n  }\n\n  if (close) context.closePath();\n\n  if (fillStyle) {\n    context.fillStyle = fillStyle;\n    context.fill();\n  }\n\n  context.stroke();\n}\n\nfunction parametric(sFunc, tFunc, rFunc) {\n  return function (start, end, seg = 100, ...args) {\n    const points = [];\n\n    for (let i = 0; i <= seg; i++) {\n      const p = i / seg;\n      const t = start * (1 - p) + end * p;\n      const x = sFunc(t, ...args);\n      const y = tFunc(t, ...args);\n\n      if (rFunc) {\n        points.push(rFunc(x, y));\n      } else {\n        points.push([x, y]);\n      }\n    }\n\n    return {\n      draw: draw.bind(null, points),\n      points\n    };\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3V0aWxzL2luZGV4LmpzPzQyMmQiXSwibmFtZXMiOlsiZHJhdyIsInBvaW50cyIsImNvbnRleHQiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImNsb3NlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiaSIsImxlbmd0aCIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJzdHJva2UiLCJwYXJhbWV0cmljIiwic0Z1bmMiLCJ0RnVuYyIsInJGdW5jIiwic3RhcnQiLCJlbmQiLCJzZWciLCJhcmdzIiwicCIsInQiLCJ4IiwieSIsInB1c2giLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsSUFBVCxDQUNFQyxNQURGLEVBRUVDLE9BRkYsRUFHRTtBQUFFQyxhQUFXLEdBQUcsT0FBaEI7QUFBeUJDLFdBQVMsR0FBRyxJQUFyQztBQUEyQ0MsT0FBSyxHQUFHO0FBQW5ELElBQTZELEVBSC9ELEVBSUU7QUFDQUgsU0FBTyxDQUFDQyxXQUFSLEdBQXNCQSxXQUF0QjtBQUNBRCxTQUFPLENBQUNJLFNBQVI7QUFDQUosU0FBTyxDQUFDSyxNQUFSLENBQWUsR0FBR04sTUFBTSxDQUFDLENBQUQsQ0FBeEI7O0FBQ0EsT0FBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUCxNQUFNLENBQUNRLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDTixXQUFPLENBQUNRLE1BQVIsQ0FBZSxHQUFHVCxNQUFNLENBQUNPLENBQUQsQ0FBeEI7QUFDRDs7QUFDRCxNQUFJSCxLQUFKLEVBQVdILE9BQU8sQ0FBQ1MsU0FBUjs7QUFDWCxNQUFJUCxTQUFKLEVBQWU7QUFDYkYsV0FBTyxDQUFDRSxTQUFSLEdBQW9CQSxTQUFwQjtBQUNBRixXQUFPLENBQUNVLElBQVI7QUFDRDs7QUFDRFYsU0FBTyxDQUFDVyxNQUFSO0FBQ0Q7O0FBRU0sU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkJDLEtBQTNCLEVBQWtDQyxLQUFsQyxFQUF5QztBQUM5QyxTQUFPLFVBQVVDLEtBQVYsRUFBaUJDLEdBQWpCLEVBQXNCQyxHQUFHLEdBQUcsR0FBNUIsRUFBaUMsR0FBR0MsSUFBcEMsRUFBMEM7QUFDL0MsVUFBTXBCLE1BQU0sR0FBRyxFQUFmOztBQUNBLFNBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSVksR0FBckIsRUFBMEJaLENBQUMsRUFBM0IsRUFBK0I7QUFDN0IsWUFBTWMsQ0FBQyxHQUFHZCxDQUFDLEdBQUdZLEdBQWQ7QUFDQSxZQUFNRyxDQUFDLEdBQUdMLEtBQUssSUFBSSxJQUFJSSxDQUFSLENBQUwsR0FBa0JILEdBQUcsR0FBR0csQ0FBbEM7QUFDQSxZQUFNRSxDQUFDLEdBQUdULEtBQUssQ0FBQ1EsQ0FBRCxFQUFJLEdBQUdGLElBQVAsQ0FBZjtBQUNBLFlBQU1JLENBQUMsR0FBR1QsS0FBSyxDQUFDTyxDQUFELEVBQUksR0FBR0YsSUFBUCxDQUFmOztBQUNBLFVBQUlKLEtBQUosRUFBVztBQUNUaEIsY0FBTSxDQUFDeUIsSUFBUCxDQUFZVCxLQUFLLENBQUNPLENBQUQsRUFBSUMsQ0FBSixDQUFqQjtBQUNELE9BRkQsTUFFTztBQUNMeEIsY0FBTSxDQUFDeUIsSUFBUCxDQUFZLENBQUNGLENBQUQsRUFBSUMsQ0FBSixDQUFaO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPO0FBQ0x6QixVQUFJLEVBQUVBLElBQUksQ0FBQzJCLElBQUwsQ0FBVSxJQUFWLEVBQWdCMUIsTUFBaEIsQ0FERDtBQUVMQTtBQUZLLEtBQVA7QUFJRCxHQWpCRDtBQWtCRCIsImZpbGUiOiIuL3V0aWxzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZHJhdyhcbiAgcG9pbnRzLFxuICBjb250ZXh0LFxuICB7IHN0cm9rZVN0eWxlID0gJ2JsYWNrJywgZmlsbFN0eWxlID0gbnVsbCwgY2xvc2UgPSBmYWxzZSB9ID0ge31cbikge1xuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGNvbnRleHQubW92ZVRvKC4uLnBvaW50c1swXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29udGV4dC5saW5lVG8oLi4ucG9pbnRzW2ldKTtcbiAgfVxuICBpZiAoY2xvc2UpIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIGlmIChmaWxsU3R5bGUpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgfVxuICBjb250ZXh0LnN0cm9rZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldHJpYyhzRnVuYywgdEZ1bmMsIHJGdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgc2VnID0gMTAwLCAuLi5hcmdzKSB7XG4gICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc2VnOyBpKyspIHtcbiAgICAgIGNvbnN0IHAgPSBpIC8gc2VnO1xuICAgICAgY29uc3QgdCA9IHN0YXJ0ICogKDEgLSBwKSArIGVuZCAqIHA7XG4gICAgICBjb25zdCB4ID0gc0Z1bmModCwgLi4uYXJncyk7XG4gICAgICBjb25zdCB5ID0gdEZ1bmModCwgLi4uYXJncyk7XG4gICAgICBpZiAockZ1bmMpIHtcbiAgICAgICAgcG9pbnRzLnB1c2gockZ1bmMoeCwgeSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9pbnRzLnB1c2goW3gsIHldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRyYXc6IGRyYXcuYmluZChudWxsLCBwb2ludHMpLFxuICAgICAgcG9pbnRzLFxuICAgIH07XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/parametric.js"));
module.exports = __webpack_exports__;

})();