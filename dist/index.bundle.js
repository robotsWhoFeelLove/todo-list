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
    width: 300px;
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
    cursor: grab;
    height: 1.5rem;
    display: flex;
    /* gap: 10px; */
    justify-content: space-between;
}
.to-do>input{
    cursor: pointer;
    width: 40px;
}

.over{
    opacity: .6;
}

.to-do:hover{
    font-weight: 800;
    font-size: 17pt;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,gBAAgB;EAClB;;AAEF;IACI,yCAAyC;IACzC,eAAe;IACf,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,iCAAiC;IACjC,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,cAAc;AAClB;;;;AAIA;IACI,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,aAAa;IACb,kBAAkB;IAClB,mCAAmC;IACnC,uCAAuC;AAC3C;AACA;IACI,sCAAsC;IACtC,eAAe;AACnB;AACA;;IAEI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,6BAA6B;IAC7B,YAAY;IACZ,UAAU;IACV,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,kBAAkB;;AAEtB;;;;AAIA;;IAEI,yCAAyC;IACzC,cAAc;AAClB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;IAC7B,oCAAoC;;AAExC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,aAAa;IACb,eAAe;IACf,8BAA8B;AAClC;AACA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB","sourcesContent":[":root {\n    --blue: rgb(2, 140, 232);\n    --white: #ffffff;\n  }\n\nbody{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15pt;\n    background-color: whitesmoke;\n}\n.nav{\n    display: flex;\n    justify-content: space-around;\n    background-color: rgb(41, 36, 34);\n    height: 10vh;\n    align-items: center;\n    font-size: 20pt;\n    color: whitesmoke;\n    font-weight: 700;\n}\n.nav>div:hover{\n    cursor: pointer;\n}\n.nav>div:first-letter{\n    font-size: 170%;\n    color: rgb(195, 62, 36);\n}\n\n.container{\n    margin-top: 50px;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: 80vh;\n}\n\n.sidebar{\n    border: 2px solid black;\n}\n.cards{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    padding:0 25px;\n}\n\n\n\n.card{\n    width: 300px;\n    height: 250px;\n    background-color: rgb(220, 219, 219);\n    padding: 50px;\n    border-radius: 5px;\n    border-left: 10px solid var(--blue);\n    box-shadow: 5px 5px 3px rgb(94, 93, 93);\n}\n.card-title{\n    text-decoration: underline var(--blue);\n    font-size: 20pt;\n}\n.add-project,\n.add-to-do{\n    position: absolute;\n    height: 300px;\n    width: 400px;\n    background-color: white;\n    border: 3px solid var(--blue);\n    margin: 25vh;\n    z-index: 1;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    justify-content: center;\n    border-radius: 5px;\n   \n}\n\n\n\ninput[type=\"text\"],\ninput[type=\"date\"]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:25px;\n}\n\n.add-project>form,\n.add-to-do>form{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    width: 250px;\n    margin-top: 40px;\n    font-size: 22pt;\n    color:var(--blue);\n    font-weight: 600;\n}\n\n.check{\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-to-do{\n    height: 450px;\n}\n\n.add-to-do>form{\n    font-size: 16pt;    \n}\n\n.add-project input,\n.add-to-do input{\n    height: 40px;\n    width: 300px;\n    border-radius: 7px;\n    border: 2px solid var(--blue);\n    background-color: rgb(220, 219, 219);\n\n}\n\ninput[type=\"checkbox\"]{\n    width: 100px;\n}\n\nbutton{\n    width: 200px;\n    height:60px;\n    border-radius: 30px;\n    border: none;\n    background-color: var(--blue);\n    color: white;\n    font-size: 18pt;\n}\n\n.hidden{\n    display: none;\n}\n\n.to-do{\n    cursor: grab;\n    height: 1.5rem;\n    display: flex;\n    /* gap: 10px; */\n    justify-content: space-between;\n}\n.to-do>input{\n    cursor: pointer;\n    width: 40px;\n}\n\n.over{\n    opacity: .6;\n}\n\n.to-do:hover{\n    font-weight: 800;\n    font-size: 17pt;\n}"],"sourceRoot":""}]);
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
    let projects =[];
    let toDoItems = [];
    if (getProj() != undefined){
        projects = getProj();
    } else {projects = []};
    if (getToDos() != undefined){
        toDoItems = getToDos();
    } else {toDoItems = []};

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
        saveAll();
        console.log(toDoItems)
    }

    function assignToDo(project,toDoItem){
        let toDoIndex = toDoItems.findIndex(obj => obj.title == toDoItem);
        let projIndex = projects.findIndex(obj => obj.project == project);
        projects[projIndex].toDoItems.push(toDoItems[toDoIndex]);
        saveAll();
        console.log(projects[projIndex]);
    }
    
    function removeToDo(project,toDoItem){
        let toDoIndex = toDoItems.findIndex(obj => obj.title == toDoItem);
        let projIndex = projects.findIndex(obj => obj.project == project);
        projects[projIndex].toDoItems.splice(toDoItems[toDoIndex],1);
        saveAll();
        console.log(projects[projIndex]);
    }

    function removeUnassigned(toDoItem){
        let toDoIndex = toDoItems.findIndex(obj => obj.title == toDoItem);
        toDoItems.splice(toDoIndex,1);
        saveAll();
    }

    function changeProject(oldProj,newProj,toDoItem){
        removeToDo(oldProj,toDoItem);
        assignToDo(newProj,toDoItem);
        saveAll();

    }
        return{
            addProject,
            addToDo,
            assignToDo,
            removeToDo,
            changeProject,
            removeUnassigned,
            projects,
            toDoItems
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
        document.querySelector(".sidebar").innerHTML = ""
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
            const toDoText = document.createElement('div');
            toDoText.textContent = toDo.title
            const complete = document.createElement("input");
            complete.setAttribute('type', 'checkbox');
            const dueDate = document.createElement('div');
            dueDate.textContent= toDo.dueDate;
            
            // item.addEventListener('dragstart', handleDragStart);
            // item.addEventListener('drop',handleDragEnd);
            // item.setAttribute('ondragstart', drag(e));
            // item.textContent = toDo.title
            item.appendChild(toDoText);
            item.appendChild(dueDate);
            item.appendChild(complete);
            

            card.appendChild(item)
        })

        document.querySelector(".cards").appendChild(card);
 
    }
    ) 
    controller.toDoItems.forEach((item)=>{
        if(!JSON.stringify(controller.projects).includes(item.title)){
            newToDo(item.title);
        }

    })
}

        function newToDo(item){
            // const toDo = document.createElement('div');
            // toDo.classList.add("to-do");
            // toDo.setAttribute('draggable', true);
            // toDo.textContent = item;
            // document.querySelector(".sidebar").appendChild(toDo)
            let toDoIndex = controller.toDoItems.findIndex(obj => obj.title == item);
            const toDo = document.createElement("div");
            toDo.classList.add("to-do");
            toDo.setAttribute('draggable', true);
            const toDoText = document.createElement('div');
            toDoText.textContent = item
            const complete = document.createElement("input");
            complete.setAttribute('type', 'checkbox');
            const dueDate = document.createElement('div');
            dueDate.textContent= controller.toDoItems[toDoIndex].dueDate;
            
            // item.addEventListener('dragstart', handleDragStart);
            // item.addEventListener('drop',handleDragEnd);
            // item.setAttribute('ondragstart', drag(e));
            // item.textContent = toDo.title
            toDo.appendChild(toDoText);
            toDo.appendChild(dueDate);
            toDo.appendChild(complete);

               document.querySelector(".sidebar").appendChild(toDo);
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
            controller.assignToDo(e.target.firstElementChild.textContent,dragItem.firstElementChild.textContent);
            dragItem.parentNode.removeChild(dragItem);
            e.target.classList.remove("over")
            return e.target.appendChild(dragItem);
        } else {
        // parentText(dragItem.parentNode);
        // parentText(e.target);
        controller.changeProject(dragItem.parentNode.firstElementChild.textContent,
            e.target.firstElementChild.textContent,dragItem.firstElementChild.textContent);
        dragItem.parentNode.removeChild(dragItem);
        e.target.classList.remove("over")
        return e.target.appendChild(dragItem);
        } 
    } else {
        if (e.target.className == "sidebar over"){
            controller.removeToDo(dragItem.parentNode.firstElementChild.textContent,
            dragItem.firstElementChild.textContent);
        dragItem.parentNode.removeChild(dragItem);
        e.target.classList.remove("over")
        return e.target.appendChild(dragItem);
        }
    }
 });

})();

document.querySelector(".sidebar").onclick = function(ev){
    if(ev.target.parentNode.classList == "to-do" && ev.target.checked){
        controller.removeUnassigned(ev.target.parentNode.firstElementChild.textContent);
        viewEngine.cardBuild();
        
    }
}

document.querySelector(".cards").onclick = function(ev){
    if(ev.target.parentNode.classList == "to-do" && ev.target.checked){
        console.log(ev.target + ev.target.parentNode.textContent + ev.target.parentNode.parentNode.textContent)
        controller.removeToDo(ev.target.parentNode.parentNode.firstElementChild.textContent,ev.target.parentNode.firstElementChild.textContent);
         viewEngine.cardBuild();
    }
}


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

// project("Daily Things");

// project("This Week");

// toDoItem("Get groceries","6/17/24","high");

// controller.assignToDo("Daily Things","Get groceries");

// controller.changeProject("Daily Things","This Week","Get groceries");

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
    viewEngine.cardBuild();
    // viewEngine.newToDo(document.querySelector("#to-do-name").value);
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

function saveAll (){
    localStorage.clear();
    let f = JSON.stringify(controller.projects);
    console.log(f);
    window.localStorage.setItem("projects", f);
    let g = JSON.stringify(controller.toDoItems);
    console.log(g);
    if (g != "undefined")
    window.localStorage.setItem("toDoItems", g)
}
function getProj (){
    let f = window.localStorage.getItem("projects");
   if (f) return JSON.parse(f);
}
function getToDos (){
    let g = window.localStorage.getItem("toDoItems");
   if (g && g != "undefined") return JSON.parse(g);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sTUFBTTtBQUNaO0FBQ0E7QUFDQSxNQUFNLE1BQU07O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkM7O0FBRUEsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCLDBCQUEwQjtBQUMxQztBQUNBLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWJsdWU6IHJnYigyLCAxNDAsIDIzMik7XG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcbiAgfVxuXG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVwdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLm5hdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgMzYsIDM0KTtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHQ7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5uYXY+ZGl2OmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXY+ZGl2OmZpcnN0LWxldHRlcntcbiAgICBmb250LXNpemU6IDE3MCU7XG4gICAgY29sb3I6IHJnYigxOTUsIDYyLCAzNik7XG59XG5cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICBoZWlnaHQ6IDgwdmg7XG59XG5cbi5zaWRlYmFye1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuLmNhcmRze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBwYWRkaW5nOjAgMjVweDtcbn1cblxuXG5cbi5jYXJke1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIxOSwgMjE5KTtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDNweCByZ2IoOTQsIDkzLCA5Myk7XG59XG4uY2FyZC10aXRsZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSB2YXIoLS1ibHVlKTtcbiAgICBmb250LXNpemU6IDIwcHQ7XG59XG4uYWRkLXByb2plY3QsXG4uYWRkLXRvLWRve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICBtYXJnaW46IDI1dmg7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgIFxufVxuXG5cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6MjVweDtcbn1cblxuLmFkZC1wcm9qZWN0PmZvcm0sXG4uYWRkLXRvLWRvPmZvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMjJwdDtcbiAgICBjb2xvcjp2YXIoLS1ibHVlKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2hlY2t7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC10by1kb3tcbiAgICBoZWlnaHQ6IDQ1MHB4O1xufVxuXG4uYWRkLXRvLWRvPmZvcm17XG4gICAgZm9udC1zaXplOiAxNnB0OyAgICBcbn1cblxuLmFkZC1wcm9qZWN0IGlucHV0LFxuLmFkZC10by1kbyBpbnB1dHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMTksIDIxOSk7XG5cbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuYnV0dG9ue1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6NjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB0O1xufVxuXG4uaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50by1kb3tcbiAgICBjdXJzb3I6IGdyYWI7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBnYXA6IDEwcHg7ICovXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnRvLWRvPmlucHV0e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuLm92ZXJ7XG4gICAgb3BhY2l0eTogLjY7XG59XG5cbi50by1kbzpob3ZlcntcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMTdwdDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0VBQ2xCOztBQUVGO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGNBQWM7QUFDbEI7Ozs7QUFJQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixVQUFVO0lBQ1YsT0FBTztJQUNQLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0Qjs7OztBQUlBOztJQUVJLHlDQUF5QztJQUN6QyxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLG9DQUFvQzs7QUFFeEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJsdWU6IHJnYigyLCAxNDAsIDIzMik7XFxuICAgIC0td2hpdGU6ICNmZmZmZmY7XFxuICB9XFxuXFxuYm9keXtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVwdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuLm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgMzYsIDM0KTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHQ7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2PmRpdjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2PmRpdjpmaXJzdC1sZXR0ZXJ7XFxuICAgIGZvbnQtc2l6ZTogMTcwJTtcXG4gICAgY29sb3I6IHJnYigxOTUsIDYyLCAzNik7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcbi5jYXJkc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgcGFkZGluZzowIDI1cHg7XFxufVxcblxcblxcblxcbi5jYXJke1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIxOSwgMjE5KTtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggcmdiKDk0LCA5MywgOTMpO1xcbn1cXG4uY2FyZC10aXRsZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgdmFyKC0tYmx1ZSk7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG59XFxuLmFkZC1wcm9qZWN0LFxcbi5hZGQtdG8tZG97XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICAgIG1hcmdpbjogMjV2aDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgXFxufVxcblxcblxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl17XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6MjVweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0PmZvcm0sXFxuLmFkZC10by1kbz5mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZm9udC1zaXplOiAyMnB0O1xcbiAgICBjb2xvcjp2YXIoLS1ibHVlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNoZWNre1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRvLWRve1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cXG4uYWRkLXRvLWRvPmZvcm17XFxuICAgIGZvbnQtc2l6ZTogMTZwdDsgICAgXFxufVxcblxcbi5hZGQtcHJvamVjdCBpbnB1dCxcXG4uYWRkLXRvLWRvIGlucHV0e1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMjE5LCAyMTkpO1xcblxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJde1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6NjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE4cHQ7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50by1kb3tcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZ2FwOiAxMHB4OyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50by1kbz5pbnB1dHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNDBweDtcXG59XFxuXFxuLm92ZXJ7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4udG8tZG86aG92ZXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogMTdwdDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuY29uc3QgdG9Eb0l0ZW0gPSAodGl0bGUsZHVlRGF0ZSxwcmlvcml0eSkgPT4ge1xuICAgIGNvbnRyb2xsZXIuYWRkVG9Ebyh0aXRsZSxkdWVEYXRlLHByaW9yaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSA6IHRpdGxlLFxuICAgICAgICBkdWVEYXRlIDogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHkgOiBwcmlvcml0eVxuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT57XG4gICAgbGV0IHRvRG9JdGVtcyA9IFtdO1xuICAgIGNvbnRyb2xsZXIuYWRkUHJvamVjdChwcm9qZWN0TmFtZSwgdG9Eb0l0ZW1zKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0OiBwcm9qZWN0TmFtZSxcbiAgICAgICAgdG9Eb0l0ZW1zOltdLFxuICAgIH1cbn1cblxuY29uc3QgY29udHJvbGxlciA9ICgoKT0+e1xuICAgIGxldCBwcm9qZWN0cyA9W107XG4gICAgbGV0IHRvRG9JdGVtcyA9IFtdO1xuICAgIGlmIChnZXRQcm9qKCkgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcHJvamVjdHMgPSBnZXRQcm9qKCk7XG4gICAgfSBlbHNlIHtwcm9qZWN0cyA9IFtdfTtcbiAgICBpZiAoZ2V0VG9Eb3MoKSAhPSB1bmRlZmluZWQpe1xuICAgICAgICB0b0RvSXRlbXMgPSBnZXRUb0RvcygpO1xuICAgIH0gZWxzZSB7dG9Eb0l0ZW1zID0gW119O1xuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCAocHJvamVjdCx0b0RvSXRlbXMpe1xuICAgICAgICBjb25zdCBwcm9qID0ge1xuICAgICAgICAgICAgcHJvamVjdCA6IHByb2plY3QsXG4gICAgICAgICAgICB0b0RvSXRlbXMgOiB0b0RvSXRlbXNcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2opO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qKTt9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0RvICh0aXRsZSxkdWVEYXRlLHByaW9yaXR5KXtcbiAgICAgICAgY29uc3QgdG9EbyA9IHtcbiAgICAgICAgICAgIHRpdGxlIDogdGl0bGUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHk6cHJpb3JpdHlcbiAgICAgICAgfVxuICAgICAgICB0b0RvSXRlbXMucHVzaCh0b0RvKTtcbiAgICAgICAgc2F2ZUFsbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b0RvSXRlbXMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXNzaWduVG9Ebyhwcm9qZWN0LHRvRG9JdGVtKXtcbiAgICAgICAgbGV0IHRvRG9JbmRleCA9IHRvRG9JdGVtcy5maW5kSW5kZXgob2JqID0+IG9iai50aXRsZSA9PSB0b0RvSXRlbSk7XG4gICAgICAgIGxldCBwcm9qSW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgob2JqID0+IG9iai5wcm9qZWN0ID09IHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0c1twcm9qSW5kZXhdLnRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtc1t0b0RvSW5kZXhdKTtcbiAgICAgICAgc2F2ZUFsbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1twcm9qSW5kZXhdKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9Ebyhwcm9qZWN0LHRvRG9JdGVtKXtcbiAgICAgICAgbGV0IHRvRG9JbmRleCA9IHRvRG9JdGVtcy5maW5kSW5kZXgob2JqID0+IG9iai50aXRsZSA9PSB0b0RvSXRlbSk7XG4gICAgICAgIGxldCBwcm9qSW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgob2JqID0+IG9iai5wcm9qZWN0ID09IHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0c1twcm9qSW5kZXhdLnRvRG9JdGVtcy5zcGxpY2UodG9Eb0l0ZW1zW3RvRG9JbmRleF0sMSk7XG4gICAgICAgIHNhdmVBbGwoKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbcHJvakluZGV4XSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVW5hc3NpZ25lZCh0b0RvSXRlbSl7XG4gICAgICAgIGxldCB0b0RvSW5kZXggPSB0b0RvSXRlbXMuZmluZEluZGV4KG9iaiA9PiBvYmoudGl0bGUgPT0gdG9Eb0l0ZW0pO1xuICAgICAgICB0b0RvSXRlbXMuc3BsaWNlKHRvRG9JbmRleCwxKTtcbiAgICAgICAgc2F2ZUFsbCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZVByb2plY3Qob2xkUHJvaixuZXdQcm9qLHRvRG9JdGVtKXtcbiAgICAgICAgcmVtb3ZlVG9EbyhvbGRQcm9qLHRvRG9JdGVtKTtcbiAgICAgICAgYXNzaWduVG9EbyhuZXdQcm9qLHRvRG9JdGVtKTtcbiAgICAgICAgc2F2ZUFsbCgpO1xuXG4gICAgfVxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICAgICAgYWRkVG9EbyxcbiAgICAgICAgICAgIGFzc2lnblRvRG8sXG4gICAgICAgICAgICByZW1vdmVUb0RvLFxuICAgICAgICAgICAgY2hhbmdlUHJvamVjdCxcbiAgICAgICAgICAgIHJlbW92ZVVuYXNzaWduZWQsXG4gICAgICAgICAgICBwcm9qZWN0cyxcbiAgICAgICAgICAgIHRvRG9JdGVtc1xuICAgIH1cblxufSApKCk7XG5cbmNvbnN0IHZpZXdFbmdpbmUgPSAoKCkgPT4ge1xuICAgIC8vIGZ1bmN0aW9uIGFsbG93RHJvcChlKXtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIH1cbiAgICAvLyBmdW5jdGlvbiBkcmFnKGUpe1xuICAgIC8vICAgICBlLmRhdGFUcmFuc2ZlclxuICAgIC8vIH1cbiAgICBmdW5jdGlvbiBjYXJkQnVpbGQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgY29udHJvbGxlci5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICAgICAgLy8gY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBoYW5kbGVEcmFnRW50ZXIpO1xuICAgICAgICAvLyBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGhhbmRsZURyYWdMZWF2ZSk7XG4gICAgICAgIC8vIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3ApO1xuICAgICAgICAvLyBjYXJkLml0ZW0uc2V0QXR0cmlidXRlKCdvbmRyb3AnLCAnZHJvcChlKScpO1xuICAgICAgICAvLyBjYXJkLml0ZW0uc2V0QXR0cmlidXRlKCdvbmRyYWdvdmVyJywgYWxsb3dEcm9wKGUpKTtcblxuICAgICAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKTtcbiAgICAgICAgcHJvai50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdDtcblxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByb2opO1xuXG4gICAgICAgIHByb2plY3QudG9Eb0l0ZW1zLmZvckVhY2goKHRvRG8pPT57XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInRvLWRvXCIpO1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvRG9UZXh0LnRleHRDb250ZW50ID0gdG9Eby50aXRsZVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjb21wbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQ9IHRvRG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xuICAgICAgICAgICAgLy8gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJyxoYW5kbGVEcmFnRW5kKTtcbiAgICAgICAgICAgIC8vIGl0ZW0uc2V0QXR0cmlidXRlKCdvbmRyYWdzdGFydCcsIGRyYWcoZSkpO1xuICAgICAgICAgICAgLy8gaXRlbS50ZXh0Q29udGVudCA9IHRvRG8udGl0bGVcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodG9Eb1RleHQpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY29tcGxldGUpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzXCIpLmFwcGVuZENoaWxkKGNhcmQpO1xuIFxuICAgIH1cbiAgICApIFxuICAgIGNvbnRyb2xsZXIudG9Eb0l0ZW1zLmZvckVhY2goKGl0ZW0pPT57XG4gICAgICAgIGlmKCFKU09OLnN0cmluZ2lmeShjb250cm9sbGVyLnByb2plY3RzKS5pbmNsdWRlcyhpdGVtLnRpdGxlKSl7XG4gICAgICAgICAgICBuZXdUb0RvKGl0ZW0udGl0bGUpO1xuICAgICAgICB9XG5cbiAgICB9KVxufVxuXG4gICAgICAgIGZ1bmN0aW9uIG5ld1RvRG8oaXRlbSl7XG4gICAgICAgICAgICAvLyBjb25zdCB0b0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAvLyB0b0RvLmNsYXNzTGlzdC5hZGQoXCJ0by1kb1wiKTtcbiAgICAgICAgICAgIC8vIHRvRG8uc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIHRvRG8udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmFwcGVuZENoaWxkKHRvRG8pXG4gICAgICAgICAgICBsZXQgdG9Eb0luZGV4ID0gY29udHJvbGxlci50b0RvSXRlbXMuZmluZEluZGV4KG9iaiA9PiBvYmoudGl0bGUgPT0gaXRlbSk7XG4gICAgICAgICAgICBjb25zdCB0b0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvRG8uY2xhc3NMaXN0LmFkZChcInRvLWRvXCIpO1xuICAgICAgICAgICAgdG9Eby5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvRG9UZXh0LnRleHRDb250ZW50ID0gaXRlbVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjb21wbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQ9IGNvbnRyb2xsZXIudG9Eb0l0ZW1zW3RvRG9JbmRleF0uZHVlRGF0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xuICAgICAgICAgICAgLy8gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJyxoYW5kbGVEcmFnRW5kKTtcbiAgICAgICAgICAgIC8vIGl0ZW0uc2V0QXR0cmlidXRlKCdvbmRyYWdzdGFydCcsIGRyYWcoZSkpO1xuICAgICAgICAgICAgLy8gaXRlbS50ZXh0Q29udGVudCA9IHRvRG8udGl0bGVcbiAgICAgICAgICAgIHRvRG8uYXBwZW5kQ2hpbGQodG9Eb1RleHQpO1xuICAgICAgICAgICAgdG9Eby5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgIHRvRG8uYXBwZW5kQ2hpbGQoY29tcGxldGUpO1xuXG4gICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikuYXBwZW5kQ2hpbGQodG9Ebyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgY2FyZEJ1aWxkLFxuICAgICAgICAgICAgbmV3VG9Eb1xuICAgICAgICB9XG4gfSApKCk7XG5cbi8vICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGhhbmRsZURyYWdFbnRlcik7XG4vLyAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBoYW5kbGVEcmFnTGVhdmUpO1xuLy8gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3ApO1xuXG4gKGZ1bmN0aW9uIGRyYWdEcm9wKCkge1xuIGxldCBkcmFnSXRlbSwgbGlzdGVuZXIgXG4gXG4gZHJhZ0l0ZW0gPSBudWxsO1xuXG4gbGlzdGVuZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyO1xuXG5cbiBsaXN0ZW5lcignZHJhZ2VudGVyJyxmdW5jdGlvbiBoYW5kbGVEcmFnRW50ZXIoZSl7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xuIH0pO1xuIFxuIGxpc3RlbmVyKCdkcmFnbGVhdmUnLGZ1bmN0aW9uIGhhbmRsZURyYWdMZWF2ZSAoZSl7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuIH0pO1xuXG4gbGlzdGVuZXIoJ2RyYWdlbmQnLGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQgKGUpe1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiB9KTtcblxuIGxpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmN0aW9uKGUpe1xuICAgIC8vIGNvbnNvbGUubG9nKGBEcmFnb3ZlciA6ICR7ZX1gKTtcbiAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gfSk7XG5cbiBsaXN0ZW5lcignZHJhZ3N0YXJ0JyxmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSl7XG4gICAgZHJhZ0l0ZW0gPSBlLnRhcmdldFxuICAgIC8vIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgLy8gZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9odG1sJyx0aGlzLm91dGVySFRNTCk7XG4gICAgY29uc29sZS5sb2coZHJhZ0l0ZW0pO1xuICAgIHJldHVybiBkcmFnSXRlbTtcbiB9KTtcblxuIGxpc3RlbmVyKCdkcm9wJyxmdW5jdGlvbiBoYW5kbGVEcm9wKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5jbGFzc05hbWUpO1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImNhcmQgb3ZlclwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJvcHpvbmVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib2xkIHByb2plY3QgaXMgXCIrZHJhZ0l0ZW0ucGFyZW50Tm9kZS50ZXh0Q29udGVudCArIFwiIG5ldyBwcm9qIGlzIFwiICsgZS50YXJnZXQudGV4dENvbnRlbnQgKyBcIiB0b2RvIGlzIFwiICtkcmFnSXRlbS50ZXh0Q29udGVudCk7XG4gICAgICAgIGlmIChkcmFnSXRlbS5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSBcInNpZGViYXJcIil7XG4gICAgICAgICAgICBjb250cm9sbGVyLmFzc2lnblRvRG8oZS50YXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQsZHJhZ0l0ZW0uZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgZHJhZ0l0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnSXRlbSk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlclwiKVxuICAgICAgICAgICAgcmV0dXJuIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdJdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGFyZW50VGV4dChkcmFnSXRlbS5wYXJlbnROb2RlKTtcbiAgICAgICAgLy8gcGFyZW50VGV4dChlLnRhcmdldCk7XG4gICAgICAgIGNvbnRyb2xsZXIuY2hhbmdlUHJvamVjdChkcmFnSXRlbS5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50LFxuICAgICAgICAgICAgZS50YXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQsZHJhZ0l0ZW0uZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICBkcmFnSXRlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdJdGVtKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJcIilcbiAgICAgICAgcmV0dXJuIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdJdGVtKTtcbiAgICAgICAgfSBcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwic2lkZWJhciBvdmVyXCIpe1xuICAgICAgICAgICAgY29udHJvbGxlci5yZW1vdmVUb0RvKGRyYWdJdGVtLnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQsXG4gICAgICAgICAgICBkcmFnSXRlbS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgICAgIGRyYWdJdGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ0l0ZW0pO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlclwiKVxuICAgICAgICByZXR1cm4gZS50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ0l0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuIH0pO1xuXG59KSgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikub25jbGljayA9IGZ1bmN0aW9uKGV2KXtcbiAgICBpZihldi50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QgPT0gXCJ0by1kb1wiICYmIGV2LnRhcmdldC5jaGVja2VkKXtcbiAgICAgICAgY29udHJvbGxlci5yZW1vdmVVbmFzc2lnbmVkKGV2LnRhcmdldC5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50KTtcbiAgICAgICAgdmlld0VuZ2luZS5jYXJkQnVpbGQoKTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzXCIpLm9uY2xpY2sgPSBmdW5jdGlvbihldil7XG4gICAgaWYoZXYudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0ID09IFwidG8tZG9cIiAmJiBldi50YXJnZXQuY2hlY2tlZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2LnRhcmdldCArIGV2LnRhcmdldC5wYXJlbnROb2RlLnRleHRDb250ZW50ICsgZXYudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS50ZXh0Q29udGVudClcbiAgICAgICAgY29udHJvbGxlci5yZW1vdmVUb0RvKGV2LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQsZXYudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICAgdmlld0VuZ2luZS5jYXJkQnVpbGQoKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcGFyZW50VGV4dChlbCl7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG5vZGUgPSBlbC5jaGlsZE5vZGVzW2ldO1xuICAgIGNvbnNvbGUubG9nKHtub2RlfSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSAgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHQgKz0gbm9kZS5kYXRhO1xuICAgIH1cbn1cbmNvbnNvbGUubG9nKFwicGFyZW50IHRleHQgaXNcIiArdGV4dCk7XG59XG5cbi8vIHByb2plY3QoXCJEYWlseSBUaGluZ3NcIik7XG5cbi8vIHByb2plY3QoXCJUaGlzIFdlZWtcIik7XG5cbi8vIHRvRG9JdGVtKFwiR2V0IGdyb2Nlcmllc1wiLFwiNi8xNy8yNFwiLFwiaGlnaFwiKTtcblxuLy8gY29udHJvbGxlci5hc3NpZ25Ub0RvKFwiRGFpbHkgVGhpbmdzXCIsXCJHZXQgZ3JvY2VyaWVzXCIpO1xuXG4vLyBjb250cm9sbGVyLmNoYW5nZVByb2plY3QoXCJEYWlseSBUaGluZ3NcIixcIlRoaXMgV2Vla1wiLFwiR2V0IGdyb2Nlcmllc1wiKTtcblxudmlld0VuZ2luZS5jYXJkQnVpbGQoKTtcblxubGV0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdj4ubmV3LXByb2plY3RcIilcbm5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT5zaG93VGhpbmcoXCIuYWRkLXByb2plY3RcIilcbilcblxubGV0IG5ld1RvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdj4ubmV3LXRvZG9cIilcbm5ld1RvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT5zaG93VGhpbmcoXCIuYWRkLXRvLWRvXCIpXG4pXG5cbmZ1bmN0aW9uIHNob3dUaGluZyh0aGluZyl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGluZykuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtcHJvamVjdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICBwcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIsKS52YWx1ZSk7XG4gICAgc2hvd1RoaW5nKFwiLmFkZC1wcm9qZWN0XCIpO1xuICAgIHZpZXdFbmdpbmUuY2FyZEJ1aWxkKCk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtdG8tZG9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgdG9Eb0l0ZW0oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0by1kby1uYW1lXCIpLnZhbHVlLFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0by1kby1kYXRlXCIpLnZhbHVlLFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZSk7XG4gICAgc2hvd1RoaW5nKFwiLmFkZC10by1kb1wiKTtcbiAgICB2aWV3RW5naW5lLmNhcmRCdWlsZCgpO1xuICAgIC8vIHZpZXdFbmdpbmUubmV3VG9Ebyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvLWRvLW5hbWVcIikudmFsdWUpO1xufSk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXYpPT57XG4vLyAgICAgY29uc29sZS5sb2coZXYpOyBcbi8vICAgICBmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSl7XG4vLyAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IC40O1xuLy8gICAgIH1cblxuXG4vLyBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8nKTtcbi8vIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4vLyAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLGhhbmRsZURyYWdTdGFydCgpKTtcbi8vIH0pXG4vLyB9KVxuXG5mdW5jdGlvbiBzYXZlQWxsICgpe1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIGxldCBmID0gSlNPTi5zdHJpbmdpZnkoY29udHJvbGxlci5wcm9qZWN0cyk7XG4gICAgY29uc29sZS5sb2coZik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgZik7XG4gICAgbGV0IGcgPSBKU09OLnN0cmluZ2lmeShjb250cm9sbGVyLnRvRG9JdGVtcyk7XG4gICAgY29uc29sZS5sb2coZyk7XG4gICAgaWYgKGcgIT0gXCJ1bmRlZmluZWRcIilcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvSXRlbXNcIiwgZylcbn1cbmZ1bmN0aW9uIGdldFByb2ogKCl7XG4gICAgbGV0IGYgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgIGlmIChmKSByZXR1cm4gSlNPTi5wYXJzZShmKTtcbn1cbmZ1bmN0aW9uIGdldFRvRG9zICgpe1xuICAgIGxldCBnID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0l0ZW1zXCIpO1xuICAgaWYgKGcgJiYgZyAhPSBcInVuZGVmaW5lZFwiKSByZXR1cm4gSlNPTi5wYXJzZShnKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=