"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --blue: rgb(2, 140, 232);
    --white: #ffffff;
  }

body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15pt;
    background-color: whitesmoke;
}
.nav{
    display: flex;
    justify-content: space-around;
    background-color: rgb(41, 36, 34);
    height: 10vh;
    align-items: center;
    font-size: 20pt;
    color: whitesmoke;
    font-weight: 700;
}
.nav>div:hover{
    cursor: pointer;
}
.nav>div:first-letter{
    font-size: 170%;
    color: rgb(195, 62, 36);
}

.container{
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 80vh;
}

.sidebar{
    border: 2px solid black;
}
.cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:0 25px;
}



.card{
    width: 250px;
    height: 250px;
    background-color: rgb(220, 219, 219);
    padding: 50px;
    border-radius: 5px;
    border-left: 10px solid var(--blue);
    box-shadow: 5px 5px 3px rgb(94, 93, 93);
}
.card-title{
    text-decoration: underline var(--blue);
    font-size: 20pt;
}
.add-project,
.add-to-do{
    position: absolute;
    height: 300px;
    width: 400px;
    background-color: white;
    border: 3px solid var(--blue);
    margin: 25vh;
    z-index: 1;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    border-radius: 5px;
   
}



input[type="text"],
input[type="date"]{
    font-family: Arial, Helvetica, sans-serif;
    font-size:25px;
}

.add-project>form,
.add-to-do>form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 250px;
    margin-top: 40px;
    font-size: 22pt;
    color:var(--blue);
    font-weight: 600;
}

.check{
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: center;
    align-items: center;
}

.add-to-do{
    height: 450px;
}

.add-to-do>form{
    font-size: 16pt;    
}

.add-project input,
.add-to-do input{
    height: 40px;
    width: 300px;
    border-radius: 7px;
    border: 2px solid var(--blue);
    background-color: rgb(220, 219, 219);

}

input[type="checkbox"]{
    width: 100px;
}

button{
    width: 200px;
    height:60px;
    border-radius: 30px;
    border: none;
    background-color: var(--blue);
    color: white;
    font-size: 18pt;
}

.hidden{
    display: none;
}

.to-do{
    cursor: move;
    height: 1.5rem;
}

.over{
    opacity: .6;
}

.to-do:hover{
    font-weight: 800;
    font-size: 17pt;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,gBAAgB;EAClB;;AAEF;IACI,yCAAyC;IACzC,eAAe;IACf,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,iCAAiC;IACjC,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,cAAc;AAClB;;;;AAIA;IACI,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,aAAa;IACb,kBAAkB;IAClB,mCAAmC;IACnC,uCAAuC;AAC3C;AACA;IACI,sCAAsC;IACtC,eAAe;AACnB;AACA;;IAEI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,6BAA6B;IAC7B,YAAY;IACZ,UAAU;IACV,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,kBAAkB;;AAEtB;;;;AAIA;;IAEI,yCAAyC;IACzC,cAAc;AAClB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;IAC7B,oCAAoC;;AAExC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB","sourcesContent":[":root {\n    --blue: rgb(2, 140, 232);\n    --white: #ffffff;\n  }\n\nbody{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15pt;\n    background-color: whitesmoke;\n}\n.nav{\n    display: flex;\n    justify-content: space-around;\n    background-color: rgb(41, 36, 34);\n    height: 10vh;\n    align-items: center;\n    font-size: 20pt;\n    color: whitesmoke;\n    font-weight: 700;\n}\n.nav>div:hover{\n    cursor: pointer;\n}\n.nav>div:first-letter{\n    font-size: 170%;\n    color: rgb(195, 62, 36);\n}\n\n.container{\n    margin-top: 50px;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: 80vh;\n}\n\n.sidebar{\n    border: 2px solid black;\n}\n.cards{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    padding:0 25px;\n}\n\n\n\n.card{\n    width: 250px;\n    height: 250px;\n    background-color: rgb(220, 219, 219);\n    padding: 50px;\n    border-radius: 5px;\n    border-left: 10px solid var(--blue);\n    box-shadow: 5px 5px 3px rgb(94, 93, 93);\n}\n.card-title{\n    text-decoration: underline var(--blue);\n    font-size: 20pt;\n}\n.add-project,\n.add-to-do{\n    position: absolute;\n    height: 300px;\n    width: 400px;\n    background-color: white;\n    border: 3px solid var(--blue);\n    margin: 25vh;\n    z-index: 1;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    justify-content: center;\n    border-radius: 5px;\n   \n}\n\n\n\ninput[type=\"text\"],\ninput[type=\"date\"]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:25px;\n}\n\n.add-project>form,\n.add-to-do>form{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    width: 250px;\n    margin-top: 40px;\n    font-size: 22pt;\n    color:var(--blue);\n    font-weight: 600;\n}\n\n.check{\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-to-do{\n    height: 450px;\n}\n\n.add-to-do>form{\n    font-size: 16pt;    \n}\n\n.add-project input,\n.add-to-do input{\n    height: 40px;\n    width: 300px;\n    border-radius: 7px;\n    border: 2px solid var(--blue);\n    background-color: rgb(220, 219, 219);\n\n}\n\ninput[type=\"checkbox\"]{\n    width: 100px;\n}\n\nbutton{\n    width: 200px;\n    height:60px;\n    border-radius: 30px;\n    border: none;\n    background-color: var(--blue);\n    color: white;\n    font-size: 18pt;\n}\n\n.hidden{\n    display: none;\n}\n\n.to-do{\n    cursor: move;\n    height: 1.5rem;\n}\n\n.over{\n    opacity: .6;\n}\n\n.to-do:hover{\n    font-weight: 800;\n    font-size: 17pt;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

// import controller from './controller';

const toDoItem = (title,dueDate,priority) => {
    controller.addToDo(title,dueDate,priority);
    return {
        title : title,
        dueDate : dueDate,
        priority : priority
    }
}

const project = (projectName) =>{
    let toDoItems = [];
    controller.addProject(projectName, toDoItems);
    return {
        project: projectName,
        toDoItems:[],
    }
}

const controller = (()=>{
    let projects=[];
    let toDoItems=[];

    function addProject (project,toDoItems){
        const proj = {
            project : project,
            toDoItems : toDoItems
        }
        projects.push(proj);
        console.log(proj);}

    function addToDo (title,dueDate,priority){
        const toDo = {
            title : title,
            dueDate: dueDate,
            priority:priority
        }
        toDoItems.push(toDo);
        console.log(toDoItems)
    }

    function assignToDo(project,toDoItem){
        let toDoIndex = toDoItems.findIndex(obj => obj.title == toDoItem);
        let projIndex = projects.findIndex(obj => obj.project == project);
        projects[projIndex].toDoItems.push(toDoItems[toDoIndex]);
        console.log(projects[projIndex]);
    }
    
    function removeToDo(project,toDoItem){
        let toDoIndex = toDoItems.findIndex(obj => obj.title == toDoItem);
        let projIndex = projects.findIndex(obj => obj.project == project);
        projects[projIndex].toDoItems.splice(toDoItems[toDoIndex],1);
        console.log(projects[projIndex]);
    }

    function changeProject(oldProj,newProj,toDoItem){
        removeToDo(oldProj,toDoItem);
        assignToDo(newProj,toDoItem);

    }
        return{
            addProject,
            addToDo,
            assignToDo,
            removeToDo,
            changeProject,
            projects
    }

} )();

const viewEngine = (() => {
    // function allowDrop(e){
    //     e.preventDefault();
    // }
    // function drag(e){
    //     e.dataTransfer
    // }
    function cardBuild() {
        document.querySelector(".cards").innerHTML = "";
        controller.projects.forEach((project)=>{
        const card = document.createElement("div");
        card.classList.add("card");
        // card.addEventListener('dragenter', handleDragEnter);
        // card.addEventListener('dragleave', handleDragLeave);
        // card.addEventListener('drop', handleDrop);
        // card.item.setAttribute('ondrop', 'drop(e)');
        // card.item.setAttribute('ondragover', allowDrop(e));

        const proj = document.createElement("div");
        proj.classList.add("card-title");
        proj.textContent = project.project;

        card.appendChild(proj);

        project.toDoItems.forEach((toDo)=>{
            const item = document.createElement("div");
            item.classList.add("to-do");
            item.setAttribute('draggable', true);
            // item.addEventListener('dragstart', handleDragStart);
            // item.addEventListener('drop',handleDragEnd);
            // item.setAttribute('ondragstart', drag(e));
            item.textContent = toDo.title

            card.appendChild(item)
        })

        document.querySelector(".cards").appendChild(card);
 
    }
    ) 

}

        function newToDo(item){
            const toDo = document.createElement('div');
            toDo.classList.add("to-do");
            toDo.setAttribute('draggable', true);
            toDo.textContent = item;
            document.querySelector(".sidebar").appendChild(toDo)
        }
        return{
            cardBuild,
            newToDo
        }
 } )();

//  card.addEventListener('dragenter', handleDragEnter);
//  card.addEventListener('dragleave', handleDragLeave);
//  card.addEventListener('drop', handleDrop);

 (function dragDrop() {
 let dragItem, listener 
 
 dragItem = null;

 listener = document.addEventListener;


 listener('dragenter',function handleDragEnter(e){
    e.target.classList.add('over');
 });
 
 listener('dragleave',function handleDragLeave (e){
    e.target.classList.remove('over');
 });

 listener('dragend',function handleDragEnd (e){
    e.target.classList.remove('over');
 });

 listener('dragover', function(e){
    // console.log(`Dragover : ${e}`);
    return e.preventDefault();

 });

 listener('dragstart',function handleDragStart(e){
    dragItem = e.target
    // e.dataTransfer.effectAllowed = 'move';
    // e.dataTransfer.setData('text/html',this.outerHTML);
    console.log(dragItem);
    return dragItem;
 });

 listener('drop',function handleDrop(e){
    e.preventDefault();
    console.log(e.target.className);
    if(e.target.className == "card over") {
        console.log("dropzone");
        console.log("old project is "+dragItem.parentNode.textContent + " new proj is " + e.target.textContent + " todo is " +dragItem.textContent);
        if (dragItem.parentNode.className == "sidebar"){
            controller.assignToDo(e.target.firstElementChild.textContent,dragItem.textContent);
            dragItem.parentNode.removeChild(dragItem);
            e.target.classList.remove("over")
            return e.target.appendChild(dragItem);
        } else {
        // parentText(dragItem.parentNode);
        // parentText(e.target);
        controller.changeProject(dragItem.parentNode.firstElementChild.textContent,
            e.target.firstElementChild.textContent,dragItem.textContent);
        dragItem.parentNode.removeChild(dragItem);
        e.target.classList.remove("over")
        return e.target.appendChild(dragItem);
        } 
    } else {
        if (e.target.className == "sidebar over"){
            controller.removeToDo(dragItem.parentNode.firstElementChild.textContent.replace(dragItem.textContent,""),
            dragItem.textContent);
        dragItem.parentNode.removeChild(dragItem);
        e.target.classList.remove("over")
        return e.target.appendChild(dragItem);
        }
    }
 });

})();

function parentText(el){
    let text = "";
for (let i = 0; i < el.childNodes.length; i++) {
    let node = el.childNodes[i];
    console.log({node})
    if (node.nodeType  === Node.TEXT_NODE) {
        text += node.data;
    }
}
console.log("parent text is" +text);
}

project("Daily Things");

project("This Week");

toDoItem("Get groceries","6/17/24","high");

controller.assignToDo("Daily Things","Get groceries");

controller.changeProject("Daily Things","This Week","Get groceries");

viewEngine.cardBuild();

let newProj = document.querySelector(".nav>.new-project")
newProj.addEventListener("click", ()=>showThing(".add-project")
)

let newToDo = document.querySelector(".nav>.new-todo")
newToDo.addEventListener("click", ()=>showThing(".add-to-do")
)

function showThing(thing){
    document.querySelector(thing).classList.toggle("hidden");
}

document.getElementById("submit-project").addEventListener("click", function(){
    project(document.querySelector("#project-name",).value);
    showThing(".add-project");
    viewEngine.cardBuild();
});

document.getElementById("submit-to-do").addEventListener("click", function(){
    toDoItem(document.querySelector("#to-do-name").value,
            document.querySelector("#to-do-date").value,
            document.querySelector("#priority").value);
    showThing(".add-to-do");
    viewEngine.newToDo(document.querySelector("#to-do-name").value);
});

// document.addEventListener('DOMContentLoaded', (ev)=>{
//     console.log(ev); 
//     function handleDragStart(e){
//         this.style.opacity = .4;
//     }


// let items = document.querySelectorAll('.to-do');
// items.forEach(function(item){
//     item.addEventListener('dragstart',handleDragStart());
// })
// })


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQzs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGdCQUFnQiwwQkFBMEI7QUFDMUM7QUFDQSxpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1ibHVlOiByZ2IoMiwgMTQwLCAyMzIpO1xuICAgIC0td2hpdGU6ICNmZmZmZmY7XG4gIH1cblxuYm9keXtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5uYXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDM2LCAzNCk7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubmF2PmRpdjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2PmRpdjpmaXJzdC1sZXR0ZXJ7XG4gICAgZm9udC1zaXplOiAxNzAlO1xuICAgIGNvbG9yOiByZ2IoMTk1LCA2MiwgMzYpO1xufVxuXG4uY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICAgaGVpZ2h0OiA4MHZoO1xufVxuXG4uc2lkZWJhcntcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cbi5jYXJkc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgcGFkZGluZzowIDI1cHg7XG59XG5cblxuXG4uY2FyZHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMTksIDIxOSk7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggcmdiKDk0LCA5MywgOTMpO1xufVxuLmNhcmQtdGl0bGV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgdmFyKC0tYmx1ZSk7XG4gICAgZm9udC1zaXplOiAyMHB0O1xufVxuLmFkZC1wcm9qZWN0LFxuLmFkZC10by1kb3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgbWFyZ2luOiAyNXZoO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICBcbn1cblxuXG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuaW5wdXRbdHlwZT1cImRhdGVcIl17XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOjI1cHg7XG59XG5cbi5hZGQtcHJvamVjdD5mb3JtLFxuLmFkZC10by1kbz5mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBmb250LXNpemU6IDIycHQ7XG4gICAgY29sb3I6dmFyKC0tYmx1ZSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNoZWNre1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtdG8tZG97XG4gICAgaGVpZ2h0OiA0NTBweDtcbn1cblxuLmFkZC10by1kbz5mb3Jte1xuICAgIGZvbnQtc2l6ZTogMTZwdDsgICAgXG59XG5cbi5hZGQtcHJvamVjdCBpbnB1dCxcbi5hZGQtdG8tZG8gaW5wdXR7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMjE5LCAyMTkpO1xuXG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbmJ1dHRvbntcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OjYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThwdDtcbn1cblxuLmhpZGRlbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udG8tZG97XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGhlaWdodDogMS41cmVtO1xufVxuXG4ub3ZlcntcbiAgICBvcGFjaXR5OiAuNjtcbn1cblxuLnRvLWRvOmhvdmVye1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxN3B0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSx5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsY0FBYztBQUNsQjs7OztBQUlBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsZUFBZTtBQUNuQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFVBQVU7SUFDVixPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7O0FBRXRCOzs7O0FBSUE7O0lBRUkseUNBQXlDO0lBQ3pDLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0Isb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJsdWU6IHJnYigyLCAxNDAsIDIzMik7XFxuICAgIC0td2hpdGU6ICNmZmZmZmY7XFxuICB9XFxuXFxuYm9keXtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVwdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuLm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgMzYsIDM0KTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHQ7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2PmRpdjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2PmRpdjpmaXJzdC1sZXR0ZXJ7XFxuICAgIGZvbnQtc2l6ZTogMTcwJTtcXG4gICAgY29sb3I6IHJnYigxOTUsIDYyLCAzNik7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcbi5jYXJkc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgcGFkZGluZzowIDI1cHg7XFxufVxcblxcblxcblxcbi5jYXJke1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIxOSwgMjE5KTtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggcmdiKDk0LCA5MywgOTMpO1xcbn1cXG4uY2FyZC10aXRsZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgdmFyKC0tYmx1ZSk7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG59XFxuLmFkZC1wcm9qZWN0LFxcbi5hZGQtdG8tZG97XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICAgIG1hcmdpbjogMjV2aDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgXFxufVxcblxcblxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl17XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6MjVweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0PmZvcm0sXFxuLmFkZC10by1kbz5mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZm9udC1zaXplOiAyMnB0O1xcbiAgICBjb2xvcjp2YXIoLS1ibHVlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNoZWNre1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRvLWRve1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cXG4uYWRkLXRvLWRvPmZvcm17XFxuICAgIGZvbnQtc2l6ZTogMTZwdDsgICAgXFxufVxcblxcbi5hZGQtcHJvamVjdCBpbnB1dCxcXG4uYWRkLXRvLWRvIGlucHV0e1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMjE5LCAyMTkpO1xcblxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJde1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6NjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE4cHQ7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50by1kb3tcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLm92ZXJ7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4udG8tZG86aG92ZXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogMTdwdDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuY29uc3QgdG9Eb0l0ZW0gPSAodGl0bGUsZHVlRGF0ZSxwcmlvcml0eSkgPT4ge1xuICAgIGNvbnRyb2xsZXIuYWRkVG9Ebyh0aXRsZSxkdWVEYXRlLHByaW9yaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSA6IHRpdGxlLFxuICAgICAgICBkdWVEYXRlIDogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHkgOiBwcmlvcml0eVxuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT57XG4gICAgbGV0IHRvRG9JdGVtcyA9IFtdO1xuICAgIGNvbnRyb2xsZXIuYWRkUHJvamVjdChwcm9qZWN0TmFtZSwgdG9Eb0l0ZW1zKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0OiBwcm9qZWN0TmFtZSxcbiAgICAgICAgdG9Eb0l0ZW1zOltdLFxuICAgIH1cbn1cblxuY29uc3QgY29udHJvbGxlciA9ICgoKT0+e1xuICAgIGxldCBwcm9qZWN0cz1bXTtcbiAgICBsZXQgdG9Eb0l0ZW1zPVtdO1xuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCAocHJvamVjdCx0b0RvSXRlbXMpe1xuICAgICAgICBjb25zdCBwcm9qID0ge1xuICAgICAgICAgICAgcHJvamVjdCA6IHByb2plY3QsXG4gICAgICAgICAgICB0b0RvSXRlbXMgOiB0b0RvSXRlbXNcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2opO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qKTt9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0RvICh0aXRsZSxkdWVEYXRlLHByaW9yaXR5KXtcbiAgICAgICAgY29uc3QgdG9EbyA9IHtcbiAgICAgICAgICAgIHRpdGxlIDogdGl0bGUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHk6cHJpb3JpdHlcbiAgICAgICAgfVxuICAgICAgICB0b0RvSXRlbXMucHVzaCh0b0RvKTtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb0l0ZW1zKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFzc2lnblRvRG8ocHJvamVjdCx0b0RvSXRlbSl7XG4gICAgICAgIGxldCB0b0RvSW5kZXggPSB0b0RvSXRlbXMuZmluZEluZGV4KG9iaiA9PiBvYmoudGl0bGUgPT0gdG9Eb0l0ZW0pO1xuICAgICAgICBsZXQgcHJvakluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KG9iaiA9PiBvYmoucHJvamVjdCA9PSBwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHNbcHJvakluZGV4XS50b0RvSXRlbXMucHVzaCh0b0RvSXRlbXNbdG9Eb0luZGV4XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW3Byb2pJbmRleF0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVUb0RvKHByb2plY3QsdG9Eb0l0ZW0pe1xuICAgICAgICBsZXQgdG9Eb0luZGV4ID0gdG9Eb0l0ZW1zLmZpbmRJbmRleChvYmogPT4gb2JqLnRpdGxlID09IHRvRG9JdGVtKTtcbiAgICAgICAgbGV0IHByb2pJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChvYmogPT4gb2JqLnByb2plY3QgPT0gcHJvamVjdCk7XG4gICAgICAgIHByb2plY3RzW3Byb2pJbmRleF0udG9Eb0l0ZW1zLnNwbGljZSh0b0RvSXRlbXNbdG9Eb0luZGV4XSwxKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbcHJvakluZGV4XSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUHJvamVjdChvbGRQcm9qLG5ld1Byb2osdG9Eb0l0ZW0pe1xuICAgICAgICByZW1vdmVUb0RvKG9sZFByb2osdG9Eb0l0ZW0pO1xuICAgICAgICBhc3NpZ25Ub0RvKG5ld1Byb2osdG9Eb0l0ZW0pO1xuXG4gICAgfVxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICAgICAgYWRkVG9EbyxcbiAgICAgICAgICAgIGFzc2lnblRvRG8sXG4gICAgICAgICAgICByZW1vdmVUb0RvLFxuICAgICAgICAgICAgY2hhbmdlUHJvamVjdCxcbiAgICAgICAgICAgIHByb2plY3RzXG4gICAgfVxuXG59ICkoKTtcblxuY29uc3Qgdmlld0VuZ2luZSA9ICgoKSA9PiB7XG4gICAgLy8gZnVuY3Rpb24gYWxsb3dEcm9wKGUpe1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gfVxuICAgIC8vIGZ1bmN0aW9uIGRyYWcoZSl7XG4gICAgLy8gICAgIGUuZGF0YVRyYW5zZmVyXG4gICAgLy8gfVxuICAgIGZ1bmN0aW9uIGNhcmRCdWlsZCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb250cm9sbGVyLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgICAgICAvLyBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGhhbmRsZURyYWdFbnRlcik7XG4gICAgICAgIC8vIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgaGFuZGxlRHJhZ0xlYXZlKTtcbiAgICAgICAgLy8gY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlRHJvcCk7XG4gICAgICAgIC8vIGNhcmQuaXRlbS5zZXRBdHRyaWJ1dGUoJ29uZHJvcCcsICdkcm9wKGUpJyk7XG4gICAgICAgIC8vIGNhcmQuaXRlbS5zZXRBdHRyaWJ1dGUoJ29uZHJhZ292ZXInLCBhbGxvd0Ryb3AoZSkpO1xuXG4gICAgICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXRpdGxlXCIpO1xuICAgICAgICBwcm9qLnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0O1xuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJvaik7XG5cbiAgICAgICAgcHJvamVjdC50b0RvSXRlbXMuZm9yRWFjaCgodG9Ebyk9PntcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwidG8tZG9cIik7XG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICAgICAgICAvLyBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGhhbmRsZURyYWdTdGFydCk7XG4gICAgICAgICAgICAvLyBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLGhhbmRsZURyYWdFbmQpO1xuICAgICAgICAgICAgLy8gaXRlbS5zZXRBdHRyaWJ1dGUoJ29uZHJhZ3N0YXJ0JywgZHJhZyhlKSk7XG4gICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gdG9Eby50aXRsZVxuXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGl0ZW0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc1wiKS5hcHBlbmRDaGlsZChjYXJkKTtcbiBcbiAgICB9XG4gICAgKSBcblxufVxuXG4gICAgICAgIGZ1bmN0aW9uIG5ld1RvRG8oaXRlbSl7XG4gICAgICAgICAgICBjb25zdCB0b0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b0RvLmNsYXNzTGlzdC5hZGQoXCJ0by1kb1wiKTtcbiAgICAgICAgICAgIHRvRG8uc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICAgICAgICAgIHRvRG8udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmFwcGVuZENoaWxkKHRvRG8pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgY2FyZEJ1aWxkLFxuICAgICAgICAgICAgbmV3VG9Eb1xuICAgICAgICB9XG4gfSApKCk7XG5cbi8vICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGhhbmRsZURyYWdFbnRlcik7XG4vLyAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBoYW5kbGVEcmFnTGVhdmUpO1xuLy8gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3ApO1xuXG4gKGZ1bmN0aW9uIGRyYWdEcm9wKCkge1xuIGxldCBkcmFnSXRlbSwgbGlzdGVuZXIgXG4gXG4gZHJhZ0l0ZW0gPSBudWxsO1xuXG4gbGlzdGVuZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyO1xuXG5cbiBsaXN0ZW5lcignZHJhZ2VudGVyJyxmdW5jdGlvbiBoYW5kbGVEcmFnRW50ZXIoZSl7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xuIH0pO1xuIFxuIGxpc3RlbmVyKCdkcmFnbGVhdmUnLGZ1bmN0aW9uIGhhbmRsZURyYWdMZWF2ZSAoZSl7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuIH0pO1xuXG4gbGlzdGVuZXIoJ2RyYWdlbmQnLGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQgKGUpe1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiB9KTtcblxuIGxpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmN0aW9uKGUpe1xuICAgIC8vIGNvbnNvbGUubG9nKGBEcmFnb3ZlciA6ICR7ZX1gKTtcbiAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gfSk7XG5cbiBsaXN0ZW5lcignZHJhZ3N0YXJ0JyxmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSl7XG4gICAgZHJhZ0l0ZW0gPSBlLnRhcmdldFxuICAgIC8vIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgLy8gZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9odG1sJyx0aGlzLm91dGVySFRNTCk7XG4gICAgY29uc29sZS5sb2coZHJhZ0l0ZW0pO1xuICAgIHJldHVybiBkcmFnSXRlbTtcbiB9KTtcblxuIGxpc3RlbmVyKCdkcm9wJyxmdW5jdGlvbiBoYW5kbGVEcm9wKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5jbGFzc05hbWUpO1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImNhcmQgb3ZlclwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJvcHpvbmVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib2xkIHByb2plY3QgaXMgXCIrZHJhZ0l0ZW0ucGFyZW50Tm9kZS50ZXh0Q29udGVudCArIFwiIG5ldyBwcm9qIGlzIFwiICsgZS50YXJnZXQudGV4dENvbnRlbnQgKyBcIiB0b2RvIGlzIFwiICtkcmFnSXRlbS50ZXh0Q29udGVudCk7XG4gICAgICAgIGlmIChkcmFnSXRlbS5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSBcInNpZGViYXJcIil7XG4gICAgICAgICAgICBjb250cm9sbGVyLmFzc2lnblRvRG8oZS50YXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQsZHJhZ0l0ZW0udGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgZHJhZ0l0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnSXRlbSk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlclwiKVxuICAgICAgICAgICAgcmV0dXJuIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdJdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGFyZW50VGV4dChkcmFnSXRlbS5wYXJlbnROb2RlKTtcbiAgICAgICAgLy8gcGFyZW50VGV4dChlLnRhcmdldCk7XG4gICAgICAgIGNvbnRyb2xsZXIuY2hhbmdlUHJvamVjdChkcmFnSXRlbS5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50LFxuICAgICAgICAgICAgZS50YXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQsZHJhZ0l0ZW0udGV4dENvbnRlbnQpO1xuICAgICAgICBkcmFnSXRlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdJdGVtKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJcIilcbiAgICAgICAgcmV0dXJuIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdJdGVtKTtcbiAgICAgICAgfSBcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwic2lkZWJhciBvdmVyXCIpe1xuICAgICAgICAgICAgY29udHJvbGxlci5yZW1vdmVUb0RvKGRyYWdJdGVtLnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQucmVwbGFjZShkcmFnSXRlbS50ZXh0Q29udGVudCxcIlwiKSxcbiAgICAgICAgICAgIGRyYWdJdGVtLnRleHRDb250ZW50KTtcbiAgICAgICAgZHJhZ0l0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnSXRlbSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyXCIpXG4gICAgICAgIHJldHVybiBlLnRhcmdldC5hcHBlbmRDaGlsZChkcmFnSXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gfSk7XG5cbn0pKCk7XG5cbmZ1bmN0aW9uIHBhcmVudFRleHQoZWwpe1xuICAgIGxldCB0ZXh0ID0gXCJcIjtcbmZvciAobGV0IGkgPSAwOyBpIDwgZWwuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBub2RlID0gZWwuY2hpbGROb2Rlc1tpXTtcbiAgICBjb25zb2xlLmxvZyh7bm9kZX0pXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0ICs9IG5vZGUuZGF0YTtcbiAgICB9XG59XG5jb25zb2xlLmxvZyhcInBhcmVudCB0ZXh0IGlzXCIgK3RleHQpO1xufVxuXG5wcm9qZWN0KFwiRGFpbHkgVGhpbmdzXCIpO1xuXG5wcm9qZWN0KFwiVGhpcyBXZWVrXCIpO1xuXG50b0RvSXRlbShcIkdldCBncm9jZXJpZXNcIixcIjYvMTcvMjRcIixcImhpZ2hcIik7XG5cbmNvbnRyb2xsZXIuYXNzaWduVG9EbyhcIkRhaWx5IFRoaW5nc1wiLFwiR2V0IGdyb2Nlcmllc1wiKTtcblxuY29udHJvbGxlci5jaGFuZ2VQcm9qZWN0KFwiRGFpbHkgVGhpbmdzXCIsXCJUaGlzIFdlZWtcIixcIkdldCBncm9jZXJpZXNcIik7XG5cbnZpZXdFbmdpbmUuY2FyZEJ1aWxkKCk7XG5cbmxldCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXY+Lm5ldy1wcm9qZWN0XCIpXG5uZXdQcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+c2hvd1RoaW5nKFwiLmFkZC1wcm9qZWN0XCIpXG4pXG5cbmxldCBuZXdUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXY+Lm5ldy10b2RvXCIpXG5uZXdUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+c2hvd1RoaW5nKFwiLmFkZC10by1kb1wiKVxuKVxuXG5mdW5jdGlvbiBzaG93VGhpbmcodGhpbmcpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpbmcpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LXByb2plY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgcHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiLCkudmFsdWUpO1xuICAgIHNob3dUaGluZyhcIi5hZGQtcHJvamVjdFwiKTtcbiAgICB2aWV3RW5naW5lLmNhcmRCdWlsZCgpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LXRvLWRvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgIHRvRG9JdGVtKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG8tZG8tbmFtZVwiKS52YWx1ZSxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG8tZG8tZGF0ZVwiKS52YWx1ZSxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWUpO1xuICAgIHNob3dUaGluZyhcIi5hZGQtdG8tZG9cIik7XG4gICAgdmlld0VuZ2luZS5uZXdUb0RvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG8tZG8tbmFtZVwiKS52YWx1ZSk7XG59KTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldik9Pntcbi8vICAgICBjb25zb2xlLmxvZyhldik7IFxuLy8gICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydChlKXtcbi8vICAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gLjQ7XG4vLyAgICAgfVxuXG5cbi8vIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kbycpO1xuLy8gaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbi8vICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsaGFuZGxlRHJhZ1N0YXJ0KCkpO1xuLy8gfSlcbi8vIH0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=