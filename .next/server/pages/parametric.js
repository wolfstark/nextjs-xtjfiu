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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Parametric; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\nvar _jsxFileName = \"/Users/wangxiang07/www/nextjs-xtjfiu/pages/parametric.js\";\n\n\nfunction Parametric() {\n  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const canvas = ref.current;\n    const ctx = canvas.getContext(\"2d\");\n    const {\n      width,\n      height\n    } = canvas;\n    const w = 0.5 * width;\n    const h = 0.5 * height;\n    ctx.translate(w, h);\n    ctx.scale(1, -1);\n\n    function drawAxis() {\n      ctx.save();\n      ctx.strokeStyle = \"#ccc\";\n      ctx.beginPath();\n      ctx.moveTo(-w, 0);\n      ctx.lineTo(w, 0);\n      ctx.stroke();\n      ctx.beginPath();\n      ctx.moveTo(0, -h);\n      ctx.lineTo(0, h);\n      ctx.stroke();\n      ctx.restore();\n    }\n\n    drawAxis();\n    const quadricBezier = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.parametric)((t, [{\n      x: x0\n    }, {\n      x: x1\n    }, {\n      x: x2\n    }]) => (1 - t) ** 2 * x0 + 2 * t * (1 - t) * x1 + t ** 2 * x2, (t, [{\n      y: y0\n    }, {\n      y: y1\n    }, {\n      y: y2\n    }]) => (1 - t) ** 2 * y0 + 2 * t * (1 - t) * y1 + t ** 2 * y2);\n    const p0 = new _utils__WEBPACK_IMPORTED_MODULE_2__.Vector2D(0, 0);\n    const p1 = new _utils__WEBPACK_IMPORTED_MODULE_2__.Vector2D(100, 0);\n    p1.rotate(0.75);\n    const p2 = new _utils__WEBPACK_IMPORTED_MODULE_2__.Vector2D(200, 0);\n    const count = 30;\n\n    for (let i = 0; i < count; i++) {\n      // 绘制30条从圆心出发，旋转不同角度的二阶贝塞尔曲线\n      p1.rotate(2 / count * Math.PI);\n      p2.rotate(2 / count * Math.PI);\n      quadricBezier(0, 1, 100, [p0, p1, p2]).draw(ctx);\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n    width: \"512\",\n    height: \"512\" // style={{ background: \"yellow\" }}\n    ,\n    ref: ref\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL3BhcmFtZXRyaWMuanM/Y2NhZSJdLCJuYW1lcyI6WyJQYXJhbWV0cmljIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY2FudmFzIiwiY3VycmVudCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsInciLCJoIiwidHJhbnNsYXRlIiwic2NhbGUiLCJkcmF3QXhpcyIsInNhdmUiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInJlc3RvcmUiLCJxdWFkcmljQmV6aWVyIiwicGFyYW1ldHJpYyIsInQiLCJ4IiwieDAiLCJ4MSIsIngyIiwieSIsInkwIiwieTEiLCJ5MiIsInAwIiwiVmVjdG9yMkQiLCJwMSIsInJvdGF0ZSIsInAyIiwiY291bnQiLCJpIiwiTWF0aCIsIlBJIiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUNuQyxRQUFNQyxHQUFHLEdBQUdDLDZDQUFNLEVBQWxCO0FBQ0FDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLE1BQU0sR0FBR0gsR0FBRyxDQUFDSSxPQUFuQjtBQUNBLFVBQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxVQUFNO0FBQUVDLFdBQUY7QUFBU0M7QUFBVCxRQUFvQkwsTUFBMUI7QUFFQSxVQUFNTSxDQUFDLEdBQUcsTUFBTUYsS0FBaEI7QUFDQSxVQUFNRyxDQUFDLEdBQUcsTUFBTUYsTUFBaEI7QUFDQUgsT0FBRyxDQUFDTSxTQUFKLENBQWNGLENBQWQsRUFBaUJDLENBQWpCO0FBQ0FMLE9BQUcsQ0FBQ08sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFDLENBQWQ7O0FBRUEsYUFBU0MsUUFBVCxHQUFvQjtBQUNsQlIsU0FBRyxDQUFDUyxJQUFKO0FBQ0FULFNBQUcsQ0FBQ1UsV0FBSixHQUFrQixNQUFsQjtBQUNBVixTQUFHLENBQUNXLFNBQUo7QUFDQVgsU0FBRyxDQUFDWSxNQUFKLENBQVcsQ0FBQ1IsQ0FBWixFQUFlLENBQWY7QUFDQUosU0FBRyxDQUFDYSxNQUFKLENBQVdULENBQVgsRUFBYyxDQUFkO0FBQ0FKLFNBQUcsQ0FBQ2MsTUFBSjtBQUNBZCxTQUFHLENBQUNXLFNBQUo7QUFDQVgsU0FBRyxDQUFDWSxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQUNQLENBQWY7QUFDQUwsU0FBRyxDQUFDYSxNQUFKLENBQVcsQ0FBWCxFQUFjUixDQUFkO0FBQ0FMLFNBQUcsQ0FBQ2MsTUFBSjtBQUNBZCxTQUFHLENBQUNlLE9BQUo7QUFDRDs7QUFFRFAsWUFBUTtBQUVSLFVBQU1RLGFBQWEsR0FBR0Msa0RBQVUsQ0FDOUIsQ0FBQ0MsQ0FBRCxFQUFJLENBQUM7QUFBRUMsT0FBQyxFQUFFQztBQUFMLEtBQUQsRUFBWTtBQUFFRCxPQUFDLEVBQUVFO0FBQUwsS0FBWixFQUF1QjtBQUFFRixPQUFDLEVBQUVHO0FBQUwsS0FBdkIsQ0FBSixLQUNFLENBQUMsSUFBSUosQ0FBTCxLQUFXLENBQVgsR0FBZUUsRUFBZixHQUFvQixJQUFJRixDQUFKLElBQVMsSUFBSUEsQ0FBYixJQUFrQkcsRUFBdEMsR0FBMkNILENBQUMsSUFBSSxDQUFMLEdBQVNJLEVBRnhCLEVBRzlCLENBQUNKLENBQUQsRUFBSSxDQUFDO0FBQUVLLE9BQUMsRUFBRUM7QUFBTCxLQUFELEVBQVk7QUFBRUQsT0FBQyxFQUFFRTtBQUFMLEtBQVosRUFBdUI7QUFBRUYsT0FBQyxFQUFFRztBQUFMLEtBQXZCLENBQUosS0FDRSxDQUFDLElBQUlSLENBQUwsS0FBVyxDQUFYLEdBQWVNLEVBQWYsR0FBb0IsSUFBSU4sQ0FBSixJQUFTLElBQUlBLENBQWIsSUFBa0JPLEVBQXRDLEdBQTJDUCxDQUFDLElBQUksQ0FBTCxHQUFTUSxFQUp4QixDQUFoQztBQU9BLFVBQU1DLEVBQUUsR0FBRyxJQUFJQyw0Q0FBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBWDtBQUNBLFVBQU1DLEVBQUUsR0FBRyxJQUFJRCw0Q0FBSixDQUFhLEdBQWIsRUFBa0IsQ0FBbEIsQ0FBWDtBQUNBQyxNQUFFLENBQUNDLE1BQUgsQ0FBVSxJQUFWO0FBQ0EsVUFBTUMsRUFBRSxHQUFHLElBQUlILDRDQUFKLENBQWEsR0FBYixFQUFrQixDQUFsQixDQUFYO0FBQ0EsVUFBTUksS0FBSyxHQUFHLEVBQWQ7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFwQixFQUEyQkMsQ0FBQyxFQUE1QixFQUFnQztBQUM5QjtBQUNBSixRQUFFLENBQUNDLE1BQUgsQ0FBVyxJQUFJRSxLQUFMLEdBQWNFLElBQUksQ0FBQ0MsRUFBN0I7QUFDQUosUUFBRSxDQUFDRCxNQUFILENBQVcsSUFBSUUsS0FBTCxHQUFjRSxJQUFJLENBQUNDLEVBQTdCO0FBQ0FuQixtQkFBYSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sR0FBUCxFQUFZLENBQUNXLEVBQUQsRUFBS0UsRUFBTCxFQUFTRSxFQUFULENBQVosQ0FBYixDQUF1Q0ssSUFBdkMsQ0FBNENwQyxHQUE1QztBQUNEO0FBQ0YsR0E1Q1EsRUE0Q04sRUE1Q00sQ0FBVDtBQTZDQSxzQkFDRTtBQUNFLFNBQUssRUFBQyxLQURSO0FBRUUsVUFBTSxFQUFDLEtBRlQsQ0FHRTtBQUhGO0FBSUUsT0FBRyxFQUFFTDtBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEIiwiZmlsZSI6Ii4vcGFnZXMvcGFyYW1ldHJpYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBwYXJhbWV0cmljLCBWZWN0b3IyRCB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbWV0cmljKCkge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSByZWYuY3VycmVudDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzO1xuXG4gICAgY29uc3QgdyA9IDAuNSAqIHdpZHRoO1xuICAgIGNvbnN0IGggPSAwLjUgKiBoZWlnaHQ7XG4gICAgY3R4LnRyYW5zbGF0ZSh3LCBoKTtcbiAgICBjdHguc2NhbGUoMSwgLTEpO1xuXG4gICAgZnVuY3Rpb24gZHJhd0F4aXMoKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjY2NjXCI7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKC13LCAwKTtcbiAgICAgIGN0eC5saW5lVG8odywgMCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKDAsIC1oKTtcbiAgICAgIGN0eC5saW5lVG8oMCwgaCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGRyYXdBeGlzKCk7XG5cbiAgICBjb25zdCBxdWFkcmljQmV6aWVyID0gcGFyYW1ldHJpYyhcbiAgICAgICh0LCBbeyB4OiB4MCB9LCB7IHg6IHgxIH0sIHsgeDogeDIgfV0pID0+XG4gICAgICAgICgxIC0gdCkgKiogMiAqIHgwICsgMiAqIHQgKiAoMSAtIHQpICogeDEgKyB0ICoqIDIgKiB4MixcbiAgICAgICh0LCBbeyB5OiB5MCB9LCB7IHk6IHkxIH0sIHsgeTogeTIgfV0pID0+XG4gICAgICAgICgxIC0gdCkgKiogMiAqIHkwICsgMiAqIHQgKiAoMSAtIHQpICogeTEgKyB0ICoqIDIgKiB5MlxuICAgICk7XG5cbiAgICBjb25zdCBwMCA9IG5ldyBWZWN0b3IyRCgwLCAwKTtcbiAgICBjb25zdCBwMSA9IG5ldyBWZWN0b3IyRCgxMDAsIDApO1xuICAgIHAxLnJvdGF0ZSgwLjc1KTtcbiAgICBjb25zdCBwMiA9IG5ldyBWZWN0b3IyRCgyMDAsIDApO1xuICAgIGNvbnN0IGNvdW50ID0gMzA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAvLyDnu5jliLYzMOadoeS7juWchuW/g+WHuuWPke+8jOaXi+i9rOS4jeWQjOinkuW6pueahOS6jOmYtui0neWhnuWwlOabsue6v1xuICAgICAgcDEucm90YXRlKCgyIC8gY291bnQpICogTWF0aC5QSSk7XG4gICAgICBwMi5yb3RhdGUoKDIgLyBjb3VudCkgKiBNYXRoLlBJKTtcbiAgICAgIHF1YWRyaWNCZXppZXIoMCwgMSwgMTAwLCBbcDAsIHAxLCBwMl0pLmRyYXcoY3R4KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8Y2FudmFzXG4gICAgICB3aWR0aD1cIjUxMlwiXG4gICAgICBoZWlnaHQ9XCI1MTJcIlxuICAgICAgLy8gc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ5ZWxsb3dcIiB9fVxuICAgICAgcmVmPXtyZWZ9XG4gICAgPjwvY2FudmFzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/parametric.js\n");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parametric\": function() { return /* binding */ parametric; },\n/* harmony export */   \"Vector2D\": function() { return /* binding */ Vector2D; }\n/* harmony export */ });\nfunction draw(points, context, {\n  strokeStyle = \"black\",\n  fillStyle = null,\n  close = false\n} = {}) {\n  context.strokeStyle = strokeStyle;\n  context.beginPath();\n  context.moveTo(...points[0]);\n\n  for (let i = 1; i < points.length; i++) {\n    context.lineTo(...points[i]);\n  }\n\n  if (close) context.closePath();\n\n  if (fillStyle) {\n    context.fillStyle = fillStyle;\n    context.fill();\n  }\n\n  context.stroke();\n}\n\nfunction parametric(sFunc, tFunc, rFunc) {\n  return function (start, end, seg = 100, ...args) {\n    const points = [];\n\n    for (let i = 0; i <= seg; i++) {\n      const p = i / seg;\n      const t = start * (1 - p) + end * p;\n      const x = sFunc(t, ...args);\n      const y = tFunc(t, ...args);\n\n      if (rFunc) {\n        points.push(rFunc(x, y));\n      } else {\n        points.push([x, y]);\n      }\n    }\n\n    return {\n      draw: draw.bind(null, points),\n      points\n    };\n  };\n}\nclass Vector2D extends Array {\n  constructor(x = 1, y = 0) {\n    super(x, y);\n  }\n\n  set x(v) {\n    this[0] = v;\n  }\n\n  set y(v) {\n    this[1] = v;\n  }\n\n  get x() {\n    return this[0];\n  }\n\n  get y() {\n    return this[1];\n  }\n\n  get length() {\n    return Math.hypot(this.x, this.y);\n  }\n\n  get dir() {\n    return Math.atan2(this.y, this.x);\n  }\n\n  copy() {\n    return new Vector2D(this.x, this.y);\n  }\n\n  add(v) {\n    this.x += v.x;\n    this.y += v.y;\n    return this;\n  }\n\n  sub(v) {\n    this.x -= v.x;\n    this.y -= v.y;\n    return this;\n  }\n\n  scale(a) {\n    this.x *= a;\n    this.y *= a;\n    return this;\n  }\n\n  cross(v) {\n    return this.x * v.y - v.x * this.y;\n  }\n\n  dot(v) {\n    return this.x * v.x + v.y * this.y;\n  }\n\n  normalize() {\n    return this.scale(1 / this.length);\n  }\n\n  rotate(rad) {\n    const c = Math.cos(rad);\n    const s = Math.sin(rad);\n    const [x, y] = this;\n    this.x = x * c + y * -s;\n    this.y = x * s + y * c;\n    return this;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3V0aWxzL2luZGV4LmpzPzQyMmQiXSwibmFtZXMiOlsiZHJhdyIsInBvaW50cyIsImNvbnRleHQiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImNsb3NlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiaSIsImxlbmd0aCIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJzdHJva2UiLCJwYXJhbWV0cmljIiwic0Z1bmMiLCJ0RnVuYyIsInJGdW5jIiwic3RhcnQiLCJlbmQiLCJzZWciLCJhcmdzIiwicCIsInQiLCJ4IiwieSIsInB1c2giLCJiaW5kIiwiVmVjdG9yMkQiLCJBcnJheSIsImNvbnN0cnVjdG9yIiwidiIsIk1hdGgiLCJoeXBvdCIsImRpciIsImF0YW4yIiwiY29weSIsImFkZCIsInN1YiIsInNjYWxlIiwiYSIsImNyb3NzIiwiZG90Iiwibm9ybWFsaXplIiwicm90YXRlIiwicmFkIiwiYyIsImNvcyIsInMiLCJzaW4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsSUFBVCxDQUNFQyxNQURGLEVBRUVDLE9BRkYsRUFHRTtBQUFFQyxhQUFXLEdBQUcsT0FBaEI7QUFBeUJDLFdBQVMsR0FBRyxJQUFyQztBQUEyQ0MsT0FBSyxHQUFHO0FBQW5ELElBQTZELEVBSC9ELEVBSUU7QUFDQUgsU0FBTyxDQUFDQyxXQUFSLEdBQXNCQSxXQUF0QjtBQUNBRCxTQUFPLENBQUNJLFNBQVI7QUFDQUosU0FBTyxDQUFDSyxNQUFSLENBQWUsR0FBR04sTUFBTSxDQUFDLENBQUQsQ0FBeEI7O0FBQ0EsT0FBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUCxNQUFNLENBQUNRLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDTixXQUFPLENBQUNRLE1BQVIsQ0FBZSxHQUFHVCxNQUFNLENBQUNPLENBQUQsQ0FBeEI7QUFDRDs7QUFDRCxNQUFJSCxLQUFKLEVBQVdILE9BQU8sQ0FB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LElBQVVnQixDQUFWO0FBQ0EsU0FBS2YsQ0FBTCxJQUFVZSxDQUFWO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRURDLE9BQUssQ0FBQ1YsQ0FBRCxFQUFJO0FBQ1AsV0FBTyxLQUFLUCxDQUFMLEdBQVNPLENBQUMsQ0FBQ04sQ0FBWCxHQUFlTSxDQUFDLENBQUNQLENBQUYsR0FBTSxLQUFLQyxDQUFqQztBQUNEOztBQUVEaUIsS0FBRyxDQUFDWCxDQUFELEVBQUk7QUFDTCxXQUFPLEtBQUtQLENBQUwsR0FBU08sQ0FBQyxDQUFDUCxDQUFYLEdBQWVPLENBQUMsQ0FBQ04sQ0FBRixHQUFNLEtBQUtBLENBQWpDO0FBQ0Q7O0FBRURrQixXQUFTLEdBQUc7QUFDVixXQUFPLEtBQUtKLEtBQUwsQ0FBVyxJQUFJLEtBQUs5QixNQUFwQixDQUFQO0FBQ0Q7O0FBRURtQyxRQUFNLENBQUNDLEdBQUQsRUFBTTtBQUNWLFVBQU1DLENBQUMsR0FBR2QsSUFBSSxDQUFDZSxHQUFMLENBQVNGLEdBQVQsQ0FBVjtBQUNBLFVBQU1HLENBQUMsR0FBR2hCLElBQUksQ0FBQ2lCLEdBQUwsQ0FBU0osR0FBVCxDQUFWO0FBQ0EsVUFBTSxDQUFDckIsQ0FBRCxFQUFJQyxDQUFKLElBQVMsSUFBZjtBQUVBLFNBQUtELENBQUwsR0FBU0EsQ0FBQyxHQUFHc0IsQ0FBSixHQUFRckIsQ0FBQyxHQUFHLENBQUN1QixDQUF0QjtBQUNBLFNBQUt2QixDQUFMLEdBQVNELENBQUMsR0FBR3dCLENBQUosR0FBUXZCLENBQUMsR0FBR3FCLENBQXJCO0FBRUEsV0FBTyxJQUFQO0FBQ0Q7O0FBeEVpQyIsImZpbGUiOiIuL3V0aWxzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZHJhdyhcbiAgcG9pbnRzLFxuICBjb250ZXh0LFxuICB7IHN0cm9rZVN0eWxlID0gXCJibGFja1wiLCBmaWxsU3R5bGUgPSBudWxsLCBjbG9zZSA9IGZhbHNlIH0gPSB7fVxuKSB7XG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgY29udGV4dC5tb3ZlVG8oLi4ucG9pbnRzWzBdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb250ZXh0LmxpbmVUbyguLi5wb2ludHNbaV0pO1xuICB9XG4gIGlmIChjbG9zZSkgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgaWYgKGZpbGxTdHlsZSkge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICB9XG4gIGNvbnRleHQuc3Ryb2tlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0cmljKHNGdW5jLCB0RnVuYywgckZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdGFydCwgZW5kLCBzZWcgPSAxMDAsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCBwb2ludHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzZWc7IGkrKykge1xuICAgICAgY29uc3QgcCA9IGkgLyBzZWc7XG4gICAgICBjb25zdCB0ID0gc3RhcnQgKiAoMSAtIHApICsgZW5kICogcDtcbiAgICAgIGNvbnN0IHggPSBzRnVuYyh0LCAuLi5hcmdzKTtcbiAgICAgIGNvbnN0IHkgPSB0RnVuYyh0LCAuLi5hcmdzKTtcbiAgICAgIGlmIChyRnVuYykge1xuICAgICAgICBwb2ludHMucHVzaChyRnVuYyh4LCB5KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb2ludHMucHVzaChbeCwgeV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZHJhdzogZHJhdy5iaW5kKG51bGwsIHBvaW50cyksXG4gICAgICBwb2ludHMsXG4gICAgfTtcbiAgfTtcbn1cbmV4cG9ydCBjbGFzcyBWZWN0b3IyRCBleHRlbmRzIEFycmF5IHtcbiAgY29uc3RydWN0b3IoeCA9IDEsIHkgPSAwKSB7XG4gICAgc3VwZXIoeCwgeSk7XG4gIH1cblxuICBzZXQgeCh2KSB7XG4gICAgdGhpc1swXSA9IHY7XG4gIH1cblxuICBzZXQgeSh2KSB7XG4gICAgdGhpc1sxXSA9IHY7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpc1swXTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzWzFdO1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gTWF0aC5oeXBvdCh0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICBnZXQgZGlyKCkge1xuICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgfVxuXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICBhZGQodikge1xuICAgIHRoaXMueCArPSB2Lng7XG4gICAgdGhpcy55ICs9IHYueTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN1Yih2KSB7XG4gICAgdGhpcy54IC09IHYueDtcbiAgICB0aGlzLnkgLT0gdi55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2NhbGUoYSkge1xuICAgIHRoaXMueCAqPSBhO1xuICAgIHRoaXMueSAqPSBhO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY3Jvc3Modikge1xuICAgIHJldHVybiB0aGlzLnggKiB2LnkgLSB2LnggKiB0aGlzLnk7XG4gIH1cblxuICBkb3Qodikge1xuICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB2LnkgKiB0aGlzLnk7XG4gIH1cblxuICBub3JtYWxpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NhbGUoMSAvIHRoaXMubGVuZ3RoKTtcbiAgfVxuXG4gIHJvdGF0ZShyYWQpIHtcbiAgICBjb25zdCBjID0gTWF0aC5jb3MocmFkKTtcbiAgICBjb25zdCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgICBjb25zdCBbeCwgeV0gPSB0aGlzO1xuXG4gICAgdGhpcy54ID0geCAqIGMgKyB5ICogLXM7XG4gICAgdGhpcy55ID0geCAqIHMgKyB5ICogYztcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/index.js\n");

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