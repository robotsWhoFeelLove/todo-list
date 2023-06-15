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
    margin: 0;
}
.nav{
    grid-row: 1;
    /* display: flex;
    flex-direction: column;
    justify-content: space-around; */
    background-color: var(--blue);
    /* background-color: rgb(41, 36, 34); */
    /* height: 10vh; */
    align-items: center;
    font-size: 20pt;
    color: var(--white);
    font-weight: 700;
    box-shadow: 0px 5px  rgb(94, 93, 93);
}

.nav>div:hover{
    cursor: pointer;
}
.nav>div:first-letter{
    font-size: 170%;
    /* color: var(--blue); */
    /* color: rgb(195, 62, 36); */
}

.container{
    /* margin-top: 50px; */
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100vh;
}
.side-menu{
    display: grid;
    grid-template-rows: 15rem 40rem;
    background-color: var(--blue);
    color: white;
    font-size: 18pt;
    font-weight: 700;

}

.side-menu>:nth-child(1){
    align-self: end ;
    padding-left: 20px;
    /* text-decoration: underline white; */
}

.sidebar{

    background-color: var(--blue);
    color: white;
    padding: 20px;
    grid-row: 2;
    font-size: 15pt;
}
.cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:0 25px;
    margin-top: 20px;
}



.card,
.add-project,
.add-to-do{
    width: 300px;
    height: 250px;
    background-color: rgb(247, 243, 243);
    /* background-color: white; */
    padding: 50px;
    border-radius: 10px;
    border-left: 10px solid var(--blue);
    /* box-shadow: 5px 5px 3px rgb(94, 93, 93); */
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.45), 0 0 5px #aaa inset,inset 0 -3em 3em rgba(0, 0, 0, 0.1);
}
.card-title{
    text-decoration: underline var(--blue);
    font-size: 20pt;
}
.add-project,
.add-to-do{
    position: absolute;
    /* height: 300px;
    width: 400px;
    background-color: white;
    border: 3px solid var(--blue); */
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
    gap: 15px;
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



button{
    width: 180px;
    height:50px;
    border-radius: 30px;
    border: none;
    background-color: var(--blue);
    color: white;
    font-size: 17pt;
    box-shadow:  4px 4px 4px -2px rgba(0, 0, 0, 0.8),
        inset 3px 3px 3px 0 rgba(255,255,255,0.9);


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
    margin-top: 10px;
}
.to-do>input{
    cursor: pointer;
    width: 40px;
}

/* .card{
    opacity: .6;
   

} */

.card.over{
    /* transition: 200ms cubic-bezier(.5, 1, 1, 2.5);
    transform:  rotate(-10deg); */
    animation: shake 0.3s;
    opacity: .6;
}



.to-do:hover{
    font-weight: 800;
    font-size: 17pt;
    animation: pop 0.3s linear .3;
}

.to-do.shake{
    animation: shake 0.3s;
}

.shake{
    animation: shake 0.3s;
}

.priority{
    font-weight: 800;
    /* font-size: 120%; */
   
}

input[type="checkbox"]{
    width: 30px;
    height: 30px;
    box-shadow: inset 4px 4px 2px rgba(255,255,255,.9);
    border: 0;
    margin: 0;
    padding: 0;
}

.x-out{
    position: absolute;
    margin-top: -65px;
    margin-left: 290px;
    padding: 6px 10px;
    border-radius: 100%;
    background-color: var(--blue);
    color: white;
    border: 1px solid white;
    cursor: pointer;
    box-shadow: inset 0 3px 3px 2px rgba(0, 0, 0, 0.4),
        inset 0 0 7px 0 rgba(255,255,255,0.9);
}
.yellow{
 
    background-color: rgb(255, 255, 0,.4);
}
#pulse:hover{
    animation: pulse 0.5s ease-in infinite;
  }
  #push:hover{
    animation: pulse 0.3s linear 1;
  }
 .push{
    animation: pulse 0.3s linear 1;
  }
  #pop:hover{
    animation: pop 0.3s linear .3;
  }
  @keyframes pulse{
    25%  {transform: scale(0.9);}
    75%  {transform: scale(1.1);}
  }
  @keyframes push{
    50%  {transform: scale(0.8);}
  }
  @keyframes pop{
    50%  {transform: scale(1.2);}
  }

@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
  
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --blue: rgb(2, 140, 232);\n    --white: #ffffff;\n  }\n\nbody{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15pt;\n    background-color: whitesmoke;\n    margin: 0;\n}\n.nav{\n    grid-row: 1;\n    /* display: flex;\n    flex-direction: column;\n    justify-content: space-around; */\n    background-color: var(--blue);\n    /* background-color: rgb(41, 36, 34); */\n    /* height: 10vh; */\n    align-items: center;\n    font-size: 20pt;\n    color: var(--white);\n    font-weight: 700;\n    box-shadow: 0px 5px  rgb(94, 93, 93);\n}\n\n.nav>div:hover{\n    cursor: pointer;\n}\n.nav>div:first-letter{\n    font-size: 170%;\n    /* color: var(--blue); */\n    /* color: rgb(195, 62, 36); */\n}\n\n.container{\n    /* margin-top: 50px; */\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: 100vh;\n}\n.side-menu{\n    display: grid;\n    grid-template-rows: 15rem 40rem;\n    background-color: var(--blue);\n    color: white;\n    font-size: 18pt;\n    font-weight: 700;\n\n}\n\n.side-menu>:nth-child(1){\n    align-self: end ;\n    padding-left: 20px;\n    /* text-decoration: underline white; */\n}\n\n.sidebar{\n\n    background-color: var(--blue);\n    color: white;\n    padding: 20px;\n    grid-row: 2;\n    font-size: 15pt;\n}\n.cards{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    padding:0 25px;\n    margin-top: 20px;\n}\n\n\n\n.card,\n.add-project,\n.add-to-do{\n    width: 300px;\n    height: 250px;\n    background-color: rgb(247, 243, 243);\n    /* background-color: white; */\n    padding: 50px;\n    border-radius: 10px;\n    border-left: 10px solid var(--blue);\n    /* box-shadow: 5px 5px 3px rgb(94, 93, 93); */\n    box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.45), 0 0 5px #aaa inset,inset 0 -3em 3em rgba(0, 0, 0, 0.1);\n}\n.card-title{\n    text-decoration: underline var(--blue);\n    font-size: 20pt;\n}\n.add-project,\n.add-to-do{\n    position: absolute;\n    /* height: 300px;\n    width: 400px;\n    background-color: white;\n    border: 3px solid var(--blue); */\n    margin: 25vh;\n    z-index: 1;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    justify-content: center;\n    border-radius: 5px;\n   \n}\n\n\n\ninput[type=\"text\"],\ninput[type=\"date\"]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:25px;\n}\n\n.add-project>form,\n.add-to-do>form{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    width: 250px;\n    margin-top: 40px;\n    font-size: 22pt;\n    color:var(--blue);\n    font-weight: 600;\n}\n\n.check{\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n\n.add-to-do{\n    height: 450px;\n}\n\n.add-to-do>form{\n    font-size: 16pt;    \n}\n\n.add-project input,\n.add-to-do input{\n    height: 40px;\n    width: 300px;\n    border-radius: 7px;\n    border: 2px solid var(--blue);\n    background-color: rgb(220, 219, 219);\n\n}\n\n\n\nbutton{\n    width: 180px;\n    height:50px;\n    border-radius: 30px;\n    border: none;\n    background-color: var(--blue);\n    color: white;\n    font-size: 17pt;\n    box-shadow:  4px 4px 4px -2px rgba(0, 0, 0, 0.8),\n        inset 3px 3px 3px 0 rgba(255,255,255,0.9);\n\n\n}\n\n.hidden{\n    display: none;\n}\n\n.to-do{\n    cursor: grab;\n    height: 1.5rem;\n    display: flex;\n    /* gap: 10px; */\n    justify-content: space-between;\n    margin-top: 10px;\n}\n.to-do>input{\n    cursor: pointer;\n    width: 40px;\n}\n\n/* .card{\n    opacity: .6;\n   \n\n} */\n\n.card.over{\n    /* transition: 200ms cubic-bezier(.5, 1, 1, 2.5);\n    transform:  rotate(-10deg); */\n    animation: shake 0.3s;\n    opacity: .6;\n}\n\n\n\n.to-do:hover{\n    font-weight: 800;\n    font-size: 17pt;\n    animation: pop 0.3s linear .3;\n}\n\n.to-do.shake{\n    animation: shake 0.3s;\n}\n\n.shake{\n    animation: shake 0.3s;\n}\n\n.priority{\n    font-weight: 800;\n    /* font-size: 120%; */\n   \n}\n\ninput[type=\"checkbox\"]{\n    width: 30px;\n    height: 30px;\n    box-shadow: inset 4px 4px 2px rgba(255,255,255,.9);\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\n.x-out{\n    position: absolute;\n    margin-top: -65px;\n    margin-left: 290px;\n    padding: 6px 10px;\n    border-radius: 100%;\n    background-color: var(--blue);\n    color: white;\n    border: 1px solid white;\n    cursor: pointer;\n    box-shadow: inset 0 3px 3px 2px rgba(0, 0, 0, 0.4),\n        inset 0 0 7px 0 rgba(255,255,255,0.9);\n}\n.yellow{\n \n    background-color: rgb(255, 255, 0,.4);\n}\n#pulse:hover{\n    animation: pulse 0.5s ease-in infinite;\n  }\n  #push:hover{\n    animation: pulse 0.3s linear 1;\n  }\n .push{\n    animation: pulse 0.3s linear 1;\n  }\n  #pop:hover{\n    animation: pop 0.3s linear .3;\n  }\n  @keyframes pulse{\n    25%  {transform: scale(0.9);}\n    75%  {transform: scale(1.1);}\n  }\n  @keyframes push{\n    50%  {transform: scale(0.8);}\n  }\n  @keyframes pop{\n    50%  {transform: scale(1.2);}\n  }\n\n@keyframes shake {\n    0% { transform: translate(1px, 1px) rotate(0deg); }\n    10% { transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { transform: translate(-3px, 0px) rotate(1deg); }\n    30% { transform: translate(3px, 2px) rotate(0deg); }\n    40% { transform: translate(1px, -1px) rotate(1deg); }\n    50% { transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { transform: translate(-3px, 1px) rotate(0deg); }\n    70% { transform: translate(3px, 1px) rotate(-1deg); }\n    80% { transform: translate(-1px, -1px) rotate(1deg); }\n    90% { transform: translate(1px, 2px) rotate(0deg); }\n    100% { transform: translate(1px, -2px) rotate(-1deg); }\n  }\n  \n"],"sourceRoot":""}]);
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

    function removeProject(project){
        let projIndex = projects.findIndex(obj => obj.project == project);
        projects.splice(projIndex,1);
        saveAll();
    }

    function changeProject(oldProj,newProj,toDoItem){
        removeToDo(oldProj,toDoItem);
        assignToDo(newProj,toDoItem);
        saveAll();

    }

    function checkDueToday(){

    }
        return{
            addProject,
            addToDo,
            assignToDo,
            removeToDo,
            changeProject,
            removeUnassigned,
            removeProject,
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
        const xOut = document.createElement("div");
        xOut.classList.add("x-out");
        xOut.textContent = "X";
        // card.addEventListener('dragenter', handleDragEnter);
        // card.addEventListener('dragleave', handleDragLeave);
        // card.addEventListener('drop', handleDrop);
        // card.item.setAttribute('ondrop', 'drop(e)');
        // card.item.setAttribute('ondragover', allowDrop(e));

        const proj = document.createElement("div");
        proj.classList.add("card-title");
        proj.textContent = project.project;

        card.appendChild(proj);
        card.appendChild(xOut);

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
            if(toDo.priority) item.classList.add("priority");
            item.classList.add(checkStatus(toDo.dueDate));

            
            
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
            if(controller.toDoItems[toDoIndex].priority) toDo.classList.add("priority")
            const dueDate = document.createElement('div');
            dueDate.textContent= controller.toDoItems[toDoIndex].dueDate;
           toDo.classList.add(checkStatus(dueDate.textContent));
            
            // item.addEventListener('dragstart', handleDragStart);
            // item.addEventListener('drop',handleDragEnd);
            // item.setAttribute('ondragstart', drag(e));
            // item.textContent = toDo.title
            toDo.appendChild(toDoText);
            toDo.appendChild(dueDate);
            toDo.appendChild(complete);

               document.querySelector(".sidebar").appendChild(toDo);
        }
       

        function flattenToday(){
           let date = new Date();
            date = "_" + date.getFullYear() + (date.getMonth()+1) + date.getDate();
           date = date.replace("_","");
            console.log(date)
            return date;
        }

        function flattenDate(date){
            let flatDate = date.replace("-0","",2);
            flatDate = flatDate.replace("-","",2);
            return flatDate;
        }

        function checkStatus(dueDate){
            // const date = new Date();
            let today = flattenToday();        //(date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate())
         
            // today = today.replaceAll("-","",2);
            let checkDate;
            if(dueDate){ 
                checkDate = flattenDate(dueDate)
            }
            if(today == checkDate-1) return("yellow");
            if(today > checkDate) return("red");
            if(today <  checkDate-1) return("green");
            if(today == checkDate) {
                // dueToday = dueToday +1;
                // document.querySelector(".due").textContent = dueToday;
                return("dueToday")
            }
        }

        return{
            cardBuild,
            newToDo,
            checkStatus,
            // dueToday
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
    // e.target.classList.toggle('over');
    // e.target.classList.toggle('over');
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
    if(ev.target.parentNode.classList.contains("to-do")&& ev.target.checked){
        controller.removeUnassigned(ev.target.parentNode.firstElementChild.textContent);
        viewEngine.cardBuild();
        
    }
}

document.querySelector(".cards").onclick = function(ev){
    if(ev.target.classList.contains("x-out")){
        controller.removeProject(ev.target.parentNode.firstElementChild.textContent);
        ev.target.parentNode.classList.add("push");
        setTimeout(()=>{
            viewEngine.cardBuild()
        },400);
    }
    if(ev.target.parentNode.classList.contains("to-do") && ev.target.checked){
        console.log(ev.target + ev.target.parentNode.textContent + ev.target.parentNode.parentNode.textContent)
        controller.removeToDo(ev.target.parentNode.parentNode.firstElementChild.textContent,ev.target.parentNode.firstElementChild.textContent);
        controller.removeUnassigned(ev.target.parentNode.firstElementChild.textContent); 
        ev.target.parentNode.classList.add("shake")
        setTimeout(()=>{
            viewEngine.cardBuild()
        }, 300);
    }
}


// function parentText(el){
//     let text = "";
// for (let i = 0; i < el.childNodes.length; i++) {
//     let node = el.childNodes[i];
//     console.log({node})
//     if (node.nodeType  === Node.TEXT_NODE) {
//         text += node.data;
//     }
// }
// console.log("parent text is" +text);
// }

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
            document.querySelector("#priority").checked)
            viewEngine.checkStatus(document.querySelector("#to-do-date").value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxTQUFTLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxRQUFRLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsU0FBUyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLFNBQVMsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssU0FBUyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLEtBQUssT0FBTyxhQUFhLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLE9BQU8sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsTUFBTSxLQUFLLHNCQUFz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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0Esb0JBQW9CLEtBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1ibHVlOiByZ2IoMiwgMTQwLCAyMzIpO1xuICAgIC0td2hpdGU6ICNmZmZmZmY7XG4gIH1cblxuYm9keXtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBtYXJnaW46IDA7XG59XG4ubmF2e1xuICAgIGdyaWQtcm93OiAxO1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDM2LCAzNCk7ICovXG4gICAgLyogaGVpZ2h0OiAxMHZoOyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3gtc2hhZG93OiAwcHggNXB4ICByZ2IoOTQsIDkzLCA5Myk7XG59XG5cbi5uYXY+ZGl2OmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXY+ZGl2OmZpcnN0LWxldHRlcntcbiAgICBmb250LXNpemU6IDE3MCU7XG4gICAgLyogY29sb3I6IHZhcigtLWJsdWUpOyAqL1xuICAgIC8qIGNvbG9yOiByZ2IoMTk1LCA2MiwgMzYpOyAqL1xufVxuXG4uY29udGFpbmVye1xuICAgIC8qIG1hcmdpbi10b3A6IDUwcHg7ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5zaWRlLW1lbnV7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1cmVtIDQwcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE4cHQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcblxufVxuXG4uc2lkZS1tZW51PjpudGgtY2hpbGQoMSl7XG4gICAgYWxpZ24tc2VsZjogZW5kIDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgd2hpdGU7ICovXG59XG5cbi5zaWRlYmFye1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgZm9udC1zaXplOiAxNXB0O1xufVxuLmNhcmRze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBwYWRkaW5nOjAgMjVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5cblxuLmNhcmQsXG4uYWRkLXByb2plY3QsXG4uYWRkLXRvLWRve1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0MywgMjQzKTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgLyogYm94LXNoYWRvdzogNXB4IDVweCAzcHggcmdiKDk0LCA5MywgOTMpOyAqL1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDRweCA2cHggcmdiYSgwLDAsMCwwLjQ1KSwgMCAwIDVweCAjYWFhIGluc2V0LGluc2V0IDAgLTNlbSAzZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmNhcmQtdGl0bGV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgdmFyKC0tYmx1ZSk7XG4gICAgZm9udC1zaXplOiAyMHB0O1xufVxuLmFkZC1wcm9qZWN0LFxuLmFkZC10by1kb3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmx1ZSk7ICovXG4gICAgbWFyZ2luOiAyNXZoO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICBcbn1cblxuXG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuaW5wdXRbdHlwZT1cImRhdGVcIl17XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOjI1cHg7XG59XG5cbi5hZGQtcHJvamVjdD5mb3JtLFxuLmFkZC10by1kbz5mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBmb250LXNpemU6IDIycHQ7XG4gICAgY29sb3I6dmFyKC0tYmx1ZSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNoZWNre1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4uYWRkLXRvLWRve1xuICAgIGhlaWdodDogNDUwcHg7XG59XG5cbi5hZGQtdG8tZG8+Zm9ybXtcbiAgICBmb250LXNpemU6IDE2cHQ7ICAgIFxufVxuXG4uYWRkLXByb2plY3QgaW5wdXQsXG4uYWRkLXRvLWRvIGlucHV0e1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIxOSwgMjE5KTtcblxufVxuXG5cblxuYnV0dG9ue1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxN3B0O1xuICAgIGJveC1zaGFkb3c6ICA0cHggNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC44KSxcbiAgICAgICAgaW5zZXQgM3B4IDNweCAzcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XG5cblxufVxuXG4uaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50by1kb3tcbiAgICBjdXJzb3I6IGdyYWI7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBnYXA6IDEwcHg7ICovXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udG8tZG8+aW5wdXR7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4vKiAuY2FyZHtcbiAgICBvcGFjaXR5OiAuNjtcbiAgIFxuXG59ICovXG5cbi5jYXJkLm92ZXJ7XG4gICAgLyogdHJhbnNpdGlvbjogMjAwbXMgY3ViaWMtYmV6aWVyKC41LCAxLCAxLCAyLjUpO1xuICAgIHRyYW5zZm9ybTogIHJvdGF0ZSgtMTBkZWcpOyAqL1xuICAgIGFuaW1hdGlvbjogc2hha2UgMC4zcztcbiAgICBvcGFjaXR5OiAuNjtcbn1cblxuXG5cbi50by1kbzpob3ZlcntcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMTdwdDtcbiAgICBhbmltYXRpb246IHBvcCAwLjNzIGxpbmVhciAuMztcbn1cblxuLnRvLWRvLnNoYWtle1xuICAgIGFuaW1hdGlvbjogc2hha2UgMC4zcztcbn1cblxuLnNoYWtle1xuICAgIGFuaW1hdGlvbjogc2hha2UgMC4zcztcbn1cblxuLnByaW9yaXR5e1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgLyogZm9udC1zaXplOiAxMjAlOyAqL1xuICAgXG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgNHB4IDRweCAycHggcmdiYSgyNTUsMjU1LDI1NSwuOSk7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ueC1vdXR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IC02NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyOTBweDtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCksXG4gICAgICAgIGluc2V0IDAgMCA3cHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XG59XG4ueWVsbG93e1xuIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMCwuNCk7XG59XG4jcHVsc2U6aG92ZXJ7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAwLjVzIGVhc2UtaW4gaW5maW5pdGU7XG4gIH1cbiAgI3B1c2g6aG92ZXJ7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAwLjNzIGxpbmVhciAxO1xuICB9XG4gLnB1c2h7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAwLjNzIGxpbmVhciAxO1xuICB9XG4gICNwb3A6aG92ZXJ7XG4gICAgYW5pbWF0aW9uOiBwb3AgMC4zcyBsaW5lYXIgLjM7XG4gIH1cbiAgQGtleWZyYW1lcyBwdWxzZXtcbiAgICAyNSUgIHt0cmFuc2Zvcm06IHNjYWxlKDAuOSk7fVxuICAgIDc1JSAge3RyYW5zZm9ybTogc2NhbGUoMS4xKTt9XG4gIH1cbiAgQGtleWZyYW1lcyBwdXNoe1xuICAgIDUwJSAge3RyYW5zZm9ybTogc2NhbGUoMC44KTt9XG4gIH1cbiAgQGtleWZyYW1lcyBwb3B7XG4gICAgNTAlICB7dHJhbnNmb3JtOiBzY2FsZSgxLjIpO31cbiAgfVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoMGRlZyk7IH1cbiAgICAxMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpOyB9XG4gICAgMjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KSByb3RhdGUoMWRlZyk7IH1cbiAgICAzMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDJweCkgcm90YXRlKDBkZWcpOyB9XG4gICAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAycHgpIHJvdGF0ZSgtMWRlZyk7IH1cbiAgICA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAxcHgpIHJvdGF0ZSgwZGVnKTsgfVxuICAgIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpOyB9XG4gICAgODAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTFweCkgcm90YXRlKDFkZWcpOyB9XG4gICAgOTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAycHgpIHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cbiAgfVxuICBcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSx5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWDs7b0NBRWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDOztBQUVBOztJQUVJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7Ozs7QUFJQTs7O0lBR0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLDZDQUE2QztJQUM3QyxnSUFBZ0k7QUFDcEk7QUFDQTtJQUNJLHNDQUFzQztJQUN0QyxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCOzs7b0NBR2dDO0lBQ2hDLFlBQVk7SUFDWixVQUFVO0lBQ1YsT0FBTztJQUNQLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0Qjs7OztBQUlBOztJQUVJLHlDQUF5QztJQUN6QyxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixvQ0FBb0M7O0FBRXhDOzs7O0FBSUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0lBQ2Y7aURBQzZDOzs7QUFHakQ7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7Ozs7R0FJRzs7QUFFSDtJQUNJO2lDQUM2QjtJQUM3QixxQkFBcUI7SUFDckIsV0FBVztBQUNmOzs7O0FBSUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrREFBa0Q7SUFDbEQsU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZjs2Q0FDeUM7QUFDN0M7QUFDQTs7SUFFSSxxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLHNDQUFzQztFQUN4QztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0NBQ0Q7SUFDRyw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsTUFBTSxxQkFBcUIsQ0FBQztJQUM1QixNQUFNLHFCQUFxQixDQUFDO0VBQzlCO0VBQ0E7SUFDRSxNQUFNLHFCQUFxQixDQUFDO0VBQzlCO0VBQ0E7SUFDRSxNQUFNLHFCQUFxQixDQUFDO0VBQzlCOztBQUVGO0lBQ0ksS0FBSywyQ0FBMkMsRUFBRTtJQUNsRCxNQUFNLDhDQUE4QyxFQUFFO0lBQ3RELE1BQU0sNENBQTRDLEVBQUU7SUFDcEQsTUFBTSwyQ0FBMkMsRUFBRTtJQUNuRCxNQUFNLDRDQUE0QyxFQUFFO0lBQ3BELE1BQU0sNkNBQTZDLEVBQUU7SUFDckQsTUFBTSw0Q0FBNEMsRUFBRTtJQUNwRCxNQUFNLDRDQUE0QyxFQUFFO0lBQ3BELE1BQU0sNkNBQTZDLEVBQUU7SUFDckQsTUFBTSwyQ0FBMkMsRUFBRTtJQUNuRCxPQUFPLDZDQUE2QyxFQUFFO0VBQ3hEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ibHVlOiByZ2IoMiwgMTQwLCAyMzIpO1xcbiAgICAtLXdoaXRlOiAjZmZmZmZmO1xcbiAgfVxcblxcbmJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm5hdntcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCAzNiwgMzQpOyAqL1xcbiAgICAvKiBoZWlnaHQ6IDEwdmg7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAgcmdiKDk0LCA5MywgOTMpO1xcbn1cXG5cXG4ubmF2PmRpdjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2PmRpdjpmaXJzdC1sZXR0ZXJ7XFxuICAgIGZvbnQtc2l6ZTogMTcwJTtcXG4gICAgLyogY29sb3I6IHZhcigtLWJsdWUpOyAqL1xcbiAgICAvKiBjb2xvcjogcmdiKDE5NSwgNjIsIDM2KTsgKi9cXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgLyogbWFyZ2luLXRvcDogNTBweDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uc2lkZS1tZW51e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1cmVtIDQwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE4cHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxufVxcblxcbi5zaWRlLW1lbnU+Om50aC1jaGlsZCgxKXtcXG4gICAgYWxpZ24tc2VsZjogZW5kIDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSB3aGl0ZTsgKi9cXG59XFxuXFxuLnNpZGViYXJ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBmb250LXNpemU6IDE1cHQ7XFxufVxcbi5jYXJkc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgcGFkZGluZzowIDI1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcblxcblxcbi5jYXJkLFxcbi5hZGQtcHJvamVjdCxcXG4uYWRkLXRvLWRve1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0MywgMjQzKTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgICAvKiBib3gtc2hhZG93OiA1cHggNXB4IDNweCByZ2IoOTQsIDkzLCA5Myk7ICovXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDRweCA2cHggcmdiYSgwLDAsMCwwLjQ1KSwgMCAwIDVweCAjYWFhIGluc2V0LGluc2V0IDAgLTNlbSAzZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG4uY2FyZC10aXRsZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgdmFyKC0tYmx1ZSk7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG59XFxuLmFkZC1wcm9qZWN0LFxcbi5hZGQtdG8tZG97XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLyogaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmx1ZSk7ICovXFxuICAgIG1hcmdpbjogMjV2aDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgXFxufVxcblxcblxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl17XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6MjVweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0PmZvcm0sXFxuLmFkZC10by1kbz5mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZm9udC1zaXplOiAyMnB0O1xcbiAgICBjb2xvcjp2YXIoLS1ibHVlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNoZWNre1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5hZGQtdG8tZG97XFxuICAgIGhlaWdodDogNDUwcHg7XFxufVxcblxcbi5hZGQtdG8tZG8+Zm9ybXtcXG4gICAgZm9udC1zaXplOiAxNnB0OyAgICBcXG59XFxuXFxuLmFkZC1wcm9qZWN0IGlucHV0LFxcbi5hZGQtdG8tZG8gaW5wdXR7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMTksIDIxOSk7XFxuXFxufVxcblxcblxcblxcbmJ1dHRvbntcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6NTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE3cHQ7XFxuICAgIGJveC1zaGFkb3c6ICA0cHggNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC44KSxcXG4gICAgICAgIGluc2V0IDNweCAzcHggM3B4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcblxcblxcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG8tZG97XFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGdhcDogMTBweDsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4udG8tZG8+aW5wdXR7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi8qIC5jYXJke1xcbiAgICBvcGFjaXR5OiAuNjtcXG4gICBcXG5cXG59ICovXFxuXFxuLmNhcmQub3ZlcntcXG4gICAgLyogdHJhbnNpdGlvbjogMjAwbXMgY3ViaWMtYmV6aWVyKC41LCAxLCAxLCAyLjUpO1xcbiAgICB0cmFuc2Zvcm06ICByb3RhdGUoLTEwZGVnKTsgKi9cXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjNzO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuXFxuXFxuLnRvLWRvOmhvdmVye1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IDE3cHQ7XFxuICAgIGFuaW1hdGlvbjogcG9wIDAuM3MgbGluZWFyIC4zO1xcbn1cXG5cXG4udG8tZG8uc2hha2V7XFxuICAgIGFuaW1hdGlvbjogc2hha2UgMC4zcztcXG59XFxuXFxuLnNoYWtle1xcbiAgICBhbmltYXRpb246IHNoYWtlIDAuM3M7XFxufVxcblxcbi5wcmlvcml0eXtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgLyogZm9udC1zaXplOiAxMjAlOyAqL1xcbiAgIFxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJde1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCA0cHggNHB4IDJweCByZ2JhKDI1NSwyNTUsMjU1LC45KTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi54LW91dHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiAtNjVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI5MHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCksXFxuICAgICAgICBpbnNldCAwIDAgN3B4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcbn1cXG4ueWVsbG93e1xcbiBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAwLC40KTtcXG59XFxuI3B1bHNlOmhvdmVye1xcbiAgICBhbmltYXRpb246IHB1bHNlIDAuNXMgZWFzZS1pbiBpbmZpbml0ZTtcXG4gIH1cXG4gICNwdXNoOmhvdmVye1xcbiAgICBhbmltYXRpb246IHB1bHNlIDAuM3MgbGluZWFyIDE7XFxuICB9XFxuIC5wdXNoe1xcbiAgICBhbmltYXRpb246IHB1bHNlIDAuM3MgbGluZWFyIDE7XFxuICB9XFxuICAjcG9wOmhvdmVye1xcbiAgICBhbmltYXRpb246IHBvcCAwLjNzIGxpbmVhciAuMztcXG4gIH1cXG4gIEBrZXlmcmFtZXMgcHVsc2V7XFxuICAgIDI1JSAge3RyYW5zZm9ybTogc2NhbGUoMC45KTt9XFxuICAgIDc1JSAge3RyYW5zZm9ybTogc2NhbGUoMS4xKTt9XFxuICB9XFxuICBAa2V5ZnJhbWVzIHB1c2h7XFxuICAgIDUwJSAge3RyYW5zZm9ybTogc2NhbGUoMC44KTt9XFxuICB9XFxuICBAa2V5ZnJhbWVzIHBvcHtcXG4gICAgNTAlICB7dHJhbnNmb3JtOiBzY2FsZSgxLjIpO31cXG4gIH1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCkgcm90YXRlKDBkZWcpOyB9XFxuICAgIDEwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXG4gICAgMjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KSByb3RhdGUoMWRlZyk7IH1cXG4gICAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKTsgfVxcbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTsgfVxcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7IH1cXG4gICAgNzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAxcHgpIHJvdGF0ZSgtMWRlZyk7IH1cXG4gICAgODAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTFweCkgcm90YXRlKDFkZWcpOyB9XFxuICAgIDkwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTJweCkgcm90YXRlKC0xZGVnKTsgfVxcbiAgfVxcbiAgXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuY29uc3QgdG9Eb0l0ZW0gPSAodGl0bGUsZHVlRGF0ZSxwcmlvcml0eSkgPT4ge1xuICAgIGNvbnRyb2xsZXIuYWRkVG9Ebyh0aXRsZSxkdWVEYXRlLHByaW9yaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSA6IHRpdGxlLFxuICAgICAgICBkdWVEYXRlIDogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHkgOiBwcmlvcml0eVxuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT57XG4gICAgbGV0IHRvRG9JdGVtcyA9IFtdO1xuICAgIGNvbnRyb2xsZXIuYWRkUHJvamVjdChwcm9qZWN0TmFtZSwgdG9Eb0l0ZW1zKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0OiBwcm9qZWN0TmFtZSxcbiAgICAgICAgdG9Eb0l0ZW1zOltdLFxuICAgIH1cbn1cblxuY29uc3QgY29udHJvbGxlciA9ICgoKT0+e1xuICAgIGxldCBwcm9qZWN0cyA9W107XG4gICAgbGV0IHRvRG9JdGVtcyA9IFtdO1xuICAgIGlmIChnZXRQcm9qKCkgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcHJvamVjdHMgPSBnZXRQcm9qKCk7XG4gICAgfSBlbHNlIHtwcm9qZWN0cyA9IFtdfTtcbiAgICBpZiAoZ2V0VG9Eb3MoKSAhPSB1bmRlZmluZWQpe1xuICAgICAgICB0b0RvSXRlbXMgPSBnZXRUb0RvcygpO1xuICAgIH0gZWxzZSB7dG9Eb0l0ZW1zID0gW119O1xuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCAocHJvamVjdCx0b0RvSXRlbXMpe1xuICAgICAgICBjb25zdCBwcm9qID0ge1xuICAgICAgICAgICAgcHJvamVjdCA6IHByb2plY3QsXG4gICAgICAgICAgICB0b0RvSXRlbXMgOiB0b0RvSXRlbXNcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2opO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qKTt9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0RvICh0aXRsZSxkdWVEYXRlLHByaW9yaXR5KXtcbiAgICAgICAgY29uc3QgdG9EbyA9IHtcbiAgICAgICAgICAgIHRpdGxlIDogdGl0bGUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHk6cHJpb3JpdHlcbiAgICAgICAgfVxuICAgICAgICB0b0RvSXRlbXMucHVzaCh0b0RvKTtcbiAgICAgICAgc2F2ZUFsbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b0RvSXRlbXMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXNzaWduVG9Ebyhwcm9qZWN0LHRvRG9JdGVtKXtcbiAgICAgICAgbGV0IHRvRG9JbmRleCA9IHRvRG9JdGVtcy5maW5kSW5kZXgob2JqID0+IG9iai50aXRsZSA9PSB0b0RvSXRlbSk7XG4gICAgICAgIGxldCBwcm9qSW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgob2JqID0+IG9iai5wcm9qZWN0ID09IHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0c1twcm9qSW5kZXhdLnRvRG9JdGVtcy5wdXNoKHRvRG9JdGVtc1t0b0RvSW5kZXhdKTtcbiAgICAgICAgc2F2ZUFsbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1twcm9qSW5kZXhdKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9Ebyhwcm9qZWN0LHRvRG9JdGVtKXtcbiAgICAgICAgbGV0IHRvRG9JbmRleCA9IHRvRG9JdGVtcy5maW5kSW5kZXgob2JqID0+IG9iai50aXRsZSA9PSB0b0RvSXRlbSk7XG4gICAgICAgIGxldCBwcm9qSW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgob2JqID0+IG9iai5wcm9qZWN0ID09IHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0c1twcm9qSW5kZXhdLnRvRG9JdGVtcy5zcGxpY2UodG9Eb0l0ZW1zW3RvRG9JbmRleF0sMSk7XG4gICAgICAgIHNhdmVBbGwoKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbcHJvakluZGV4XSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVW5hc3NpZ25lZCh0b0RvSXRlbSl7XG4gICAgICAgIGxldCB0b0RvSW5kZXggPSB0b0RvSXRlbXMuZmluZEluZGV4KG9iaiA9PiBvYmoudGl0bGUgPT0gdG9Eb0l0ZW0pO1xuICAgICAgICB0b0RvSXRlbXMuc3BsaWNlKHRvRG9JbmRleCwxKTtcbiAgICAgICAgc2F2ZUFsbCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCl7XG4gICAgICAgIGxldCBwcm9qSW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgob2JqID0+IG9iai5wcm9qZWN0ID09IHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvakluZGV4LDEpO1xuICAgICAgICBzYXZlQWxsKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUHJvamVjdChvbGRQcm9qLG5ld1Byb2osdG9Eb0l0ZW0pe1xuICAgICAgICByZW1vdmVUb0RvKG9sZFByb2osdG9Eb0l0ZW0pO1xuICAgICAgICBhc3NpZ25Ub0RvKG5ld1Byb2osdG9Eb0l0ZW0pO1xuICAgICAgICBzYXZlQWxsKCk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0R1ZVRvZGF5KCl7XG5cbiAgICB9XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgICAgICBhZGRUb0RvLFxuICAgICAgICAgICAgYXNzaWduVG9EbyxcbiAgICAgICAgICAgIHJlbW92ZVRvRG8sXG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0LFxuICAgICAgICAgICAgcmVtb3ZlVW5hc3NpZ25lZCxcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgICAgICBwcm9qZWN0cyxcbiAgICAgICAgICAgIHRvRG9JdGVtc1xuICAgIH1cblxufSApKCk7XG5cbmNvbnN0IHZpZXdFbmdpbmUgPSAoKCkgPT4ge1xuICAgIC8vIGZ1bmN0aW9uIGFsbG93RHJvcChlKXtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIH1cbiAgICAvLyBmdW5jdGlvbiBkcmFnKGUpe1xuICAgIC8vICAgICBlLmRhdGFUcmFuc2ZlclxuICAgIC8vIH1cbiAgICBmdW5jdGlvbiBjYXJkQnVpbGQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgY29udHJvbGxlci5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICAgICAgY29uc3QgeE91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHhPdXQuY2xhc3NMaXN0LmFkZChcIngtb3V0XCIpO1xuICAgICAgICB4T3V0LnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIC8vIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgaGFuZGxlRHJhZ0VudGVyKTtcbiAgICAgICAgLy8gY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBoYW5kbGVEcmFnTGVhdmUpO1xuICAgICAgICAvLyBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBoYW5kbGVEcm9wKTtcbiAgICAgICAgLy8gY2FyZC5pdGVtLnNldEF0dHJpYnV0ZSgnb25kcm9wJywgJ2Ryb3AoZSknKTtcbiAgICAgICAgLy8gY2FyZC5pdGVtLnNldEF0dHJpYnV0ZSgnb25kcmFnb3ZlcicsIGFsbG93RHJvcChlKSk7XG5cbiAgICAgICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2ouY2xhc3NMaXN0LmFkZChcImNhcmQtdGl0bGVcIik7XG4gICAgICAgIHByb2oudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3Q7XG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh4T3V0KTtcblxuICAgICAgICBwcm9qZWN0LnRvRG9JdGVtcy5mb3JFYWNoKCh0b0RvKT0+e1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInRvLWRvXCIpO1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvRG9UZXh0LnRleHRDb250ZW50ID0gdG9Eby50aXRsZVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjb21wbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQ9IHRvRG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIGlmKHRvRG8ucHJpb3JpdHkpIGl0ZW0uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKGNoZWNrU3RhdHVzKHRvRG8uZHVlRGF0ZSkpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xuICAgICAgICAgICAgLy8gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJyxoYW5kbGVEcmFnRW5kKTtcbiAgICAgICAgICAgIC8vIGl0ZW0uc2V0QXR0cmlidXRlKCdvbmRyYWdzdGFydCcsIGRyYWcoZSkpO1xuICAgICAgICAgICAgLy8gaXRlbS50ZXh0Q29udGVudCA9IHRvRG8udGl0bGVcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodG9Eb1RleHQpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY29tcGxldGUpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzXCIpLmFwcGVuZENoaWxkKGNhcmQpO1xuIFxuICAgIH1cbiAgICApIFxuICAgIGNvbnRyb2xsZXIudG9Eb0l0ZW1zLmZvckVhY2goKGl0ZW0pPT57XG4gICAgICAgIGlmKCFKU09OLnN0cmluZ2lmeShjb250cm9sbGVyLnByb2plY3RzKS5pbmNsdWRlcyhpdGVtLnRpdGxlKSl7XG4gICAgICAgICAgICBuZXdUb0RvKGl0ZW0udGl0bGUpO1xuICAgICAgICB9XG5cbiAgICB9KVxufVxuXG4gICAgICAgIGZ1bmN0aW9uIG5ld1RvRG8oaXRlbSl7XG4gICAgICAgICAgICAvLyBjb25zdCB0b0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAvLyB0b0RvLmNsYXNzTGlzdC5hZGQoXCJ0by1kb1wiKTtcbiAgICAgICAgICAgIC8vIHRvRG8uc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIHRvRG8udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmFwcGVuZENoaWxkKHRvRG8pXG4gICAgICAgICAgICBsZXQgdG9Eb0luZGV4ID0gY29udHJvbGxlci50b0RvSXRlbXMuZmluZEluZGV4KG9iaiA9PiBvYmoudGl0bGUgPT0gaXRlbSk7XG4gICAgICAgICAgICBjb25zdCB0b0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvRG8uY2xhc3NMaXN0LmFkZChcInRvLWRvXCIpO1xuICAgICAgICAgICAgdG9Eby5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvRG9UZXh0LnRleHRDb250ZW50ID0gaXRlbVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjb21wbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGlmKGNvbnRyb2xsZXIudG9Eb0l0ZW1zW3RvRG9JbmRleF0ucHJpb3JpdHkpIHRvRG8uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50PSBjb250cm9sbGVyLnRvRG9JdGVtc1t0b0RvSW5kZXhdLmR1ZURhdGU7XG4gICAgICAgICAgIHRvRG8uY2xhc3NMaXN0LmFkZChjaGVja1N0YXR1cyhkdWVEYXRlLnRleHRDb250ZW50KSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgICAgICAgICAgIC8vIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsaGFuZGxlRHJhZ0VuZCk7XG4gICAgICAgICAgICAvLyBpdGVtLnNldEF0dHJpYnV0ZSgnb25kcmFnc3RhcnQnLCBkcmFnKGUpKTtcbiAgICAgICAgICAgIC8vIGl0ZW0udGV4dENvbnRlbnQgPSB0b0RvLnRpdGxlXG4gICAgICAgICAgICB0b0RvLmFwcGVuZENoaWxkKHRvRG9UZXh0KTtcbiAgICAgICAgICAgIHRvRG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgICAgICB0b0RvLmFwcGVuZENoaWxkKGNvbXBsZXRlKTtcblxuICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmFwcGVuZENoaWxkKHRvRG8pO1xuICAgICAgICB9XG4gICAgICAgXG5cbiAgICAgICAgZnVuY3Rpb24gZmxhdHRlblRvZGF5KCl7XG4gICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGRhdGUgPSBcIl9cIiArIGRhdGUuZ2V0RnVsbFllYXIoKSArIChkYXRlLmdldE1vbnRoKCkrMSkgKyBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgZGF0ZSA9IGRhdGUucmVwbGFjZShcIl9cIixcIlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGUpXG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZsYXR0ZW5EYXRlKGRhdGUpe1xuICAgICAgICAgICAgbGV0IGZsYXREYXRlID0gZGF0ZS5yZXBsYWNlKFwiLTBcIixcIlwiLDIpO1xuICAgICAgICAgICAgZmxhdERhdGUgPSBmbGF0RGF0ZS5yZXBsYWNlKFwiLVwiLFwiXCIsMik7XG4gICAgICAgICAgICByZXR1cm4gZmxhdERhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja1N0YXR1cyhkdWVEYXRlKXtcbiAgICAgICAgICAgIC8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgbGV0IHRvZGF5ID0gZmxhdHRlblRvZGF5KCk7ICAgICAgICAvLyhkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIChkYXRlLmdldE1vbnRoKCkrMSkgKyBcIi1cIiArIGRhdGUuZ2V0RGF0ZSgpKVxuICAgICAgICAgXG4gICAgICAgICAgICAvLyB0b2RheSA9IHRvZGF5LnJlcGxhY2VBbGwoXCItXCIsXCJcIiwyKTtcbiAgICAgICAgICAgIGxldCBjaGVja0RhdGU7XG4gICAgICAgICAgICBpZihkdWVEYXRlKXsgXG4gICAgICAgICAgICAgICAgY2hlY2tEYXRlID0gZmxhdHRlbkRhdGUoZHVlRGF0ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRvZGF5ID09IGNoZWNrRGF0ZS0xKSByZXR1cm4oXCJ5ZWxsb3dcIik7XG4gICAgICAgICAgICBpZih0b2RheSA+IGNoZWNrRGF0ZSkgcmV0dXJuKFwicmVkXCIpO1xuICAgICAgICAgICAgaWYodG9kYXkgPCAgY2hlY2tEYXRlLTEpIHJldHVybihcImdyZWVuXCIpO1xuICAgICAgICAgICAgaWYodG9kYXkgPT0gY2hlY2tEYXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZHVlVG9kYXkgPSBkdWVUb2RheSArMTtcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1ZVwiKS50ZXh0Q29udGVudCA9IGR1ZVRvZGF5O1xuICAgICAgICAgICAgICAgIHJldHVybihcImR1ZVRvZGF5XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICBjYXJkQnVpbGQsXG4gICAgICAgICAgICBuZXdUb0RvLFxuICAgICAgICAgICAgY2hlY2tTdGF0dXMsXG4gICAgICAgICAgICAvLyBkdWVUb2RheVxuICAgICAgICB9XG4gfSApKCk7XG5cbi8vICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGhhbmRsZURyYWdFbnRlcik7XG4vLyAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBoYW5kbGVEcmFnTGVhdmUpO1xuLy8gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3ApO1xuXG4gKGZ1bmN0aW9uIGRyYWdEcm9wKCkge1xuIGxldCBkcmFnSXRlbSwgbGlzdGVuZXIgXG4gXG4gZHJhZ0l0ZW0gPSBudWxsO1xuXG4gbGlzdGVuZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyO1xuXG5cbiBsaXN0ZW5lcignZHJhZ2VudGVyJyxmdW5jdGlvbiBoYW5kbGVEcmFnRW50ZXIoZSl7XG4gICAgXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xuIH0pO1xuIFxuIGxpc3RlbmVyKCdkcmFnbGVhdmUnLGZ1bmN0aW9uIGhhbmRsZURyYWdMZWF2ZSAoZSl7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuIH0pO1xuXG4gbGlzdGVuZXIoJ2RyYWdlbmQnLGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQgKGUpe1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiB9KTtcblxuIGxpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmN0aW9uKGUpe1xuICAgIC8vIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ292ZXInKTtcbiAgICAvLyBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdvdmVyJyk7XG4gICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiB9KTtcblxuIGxpc3RlbmVyKCdkcmFnc3RhcnQnLGZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydChlKXtcbiAgICBkcmFnSXRlbSA9IGUudGFyZ2V0XG4gICAgLy8gZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbiAgICAvLyBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L2h0bWwnLHRoaXMub3V0ZXJIVE1MKTtcbiAgICBjb25zb2xlLmxvZyhkcmFnSXRlbSk7XG4gICAgcmV0dXJuIGRyYWdJdGVtO1xuIH0pO1xuXG4gbGlzdGVuZXIoJ2Ryb3AnLGZ1bmN0aW9uIGhhbmRsZURyb3AoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTmFtZSk7XG4gICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiY2FyZCBvdmVyXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcm9wem9uZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbGQgcHJvamVjdCBpcyBcIitkcmFnSXRlbS5wYXJlbnROb2RlLnRleHRDb250ZW50ICsgXCIgbmV3IHByb2ogaXMgXCIgKyBlLnRhcmdldC50ZXh0Q29udGVudCArIFwiIHRvZG8gaXMgXCIgK2RyYWdJdGVtLnRleHRDb250ZW50KTtcbiAgICAgICAgaWYgKGRyYWdJdGVtLnBhcmVudE5vZGUuY2xhc3NOYW1lID09IFwic2lkZWJhclwiKXtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYXNzaWduVG9EbyhlLnRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCxkcmFnSXRlbS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBkcmFnSXRlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdJdGVtKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyXCIpXG4gICAgICAgICAgICByZXR1cm4gZS50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ0l0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwYXJlbnRUZXh0KGRyYWdJdGVtLnBhcmVudE5vZGUpO1xuICAgICAgICAvLyBwYXJlbnRUZXh0KGUudGFyZ2V0KTtcbiAgICAgICAgY29udHJvbGxlci5jaGFuZ2VQcm9qZWN0KGRyYWdJdGVtLnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQsXG4gICAgICAgICAgICBlLnRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCxkcmFnSXRlbS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgICAgIGRyYWdJdGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ0l0ZW0pO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlclwiKVxuICAgICAgICByZXR1cm4gZS50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ0l0ZW0pO1xuICAgICAgICB9IFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJzaWRlYmFyIG92ZXJcIil7XG4gICAgICAgICAgICBjb250cm9sbGVyLnJlbW92ZVRvRG8oZHJhZ0l0ZW0ucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIGRyYWdJdGVtLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50KTtcbiAgICAgICAgZHJhZ0l0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnSXRlbSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyXCIpXG4gICAgICAgIHJldHVybiBlLnRhcmdldC5hcHBlbmRDaGlsZChkcmFnSXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gfSk7XG5cbn0pKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKS5vbmNsaWNrID0gZnVuY3Rpb24oZXYpe1xuICAgIGlmKGV2LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcInRvLWRvXCIpJiYgZXYudGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICBjb250cm9sbGVyLnJlbW92ZVVuYXNzaWduZWQoZXYudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICB2aWV3RW5naW5lLmNhcmRCdWlsZCgpO1xuICAgICAgICBcbiAgICB9XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNcIikub25jbGljayA9IGZ1bmN0aW9uKGV2KXtcbiAgICBpZihldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwieC1vdXRcIikpe1xuICAgICAgICBjb250cm9sbGVyLnJlbW92ZVByb2plY3QoZXYudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICBldi50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwicHVzaFwiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgdmlld0VuZ2luZS5jYXJkQnVpbGQoKVxuICAgICAgICB9LDQwMCk7XG4gICAgfVxuICAgIGlmKGV2LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcInRvLWRvXCIpICYmIGV2LnRhcmdldC5jaGVja2VkKXtcbiAgICAgICAgY29uc29sZS5sb2coZXYudGFyZ2V0ICsgZXYudGFyZ2V0LnBhcmVudE5vZGUudGV4dENvbnRlbnQgKyBldi50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnRleHRDb250ZW50KVxuICAgICAgICBjb250cm9sbGVyLnJlbW92ZVRvRG8oZXYudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCxldi50YXJnZXQucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgICAgIGNvbnRyb2xsZXIucmVtb3ZlVW5hc3NpZ25lZChldi50YXJnZXQucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCk7IFxuICAgICAgICBldi50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2hha2VcIilcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgdmlld0VuZ2luZS5jYXJkQnVpbGQoKVxuICAgICAgICB9LCAzMDApO1xuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiBwYXJlbnRUZXh0KGVsKXtcbi8vICAgICBsZXQgdGV4dCA9IFwiXCI7XG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IGVsLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICBsZXQgbm9kZSA9IGVsLmNoaWxkTm9kZXNbaV07XG4vLyAgICAgY29uc29sZS5sb2coe25vZGV9KVxuLy8gICAgIGlmIChub2RlLm5vZGVUeXBlICA9PT0gTm9kZS5URVhUX05PREUpIHtcbi8vICAgICAgICAgdGV4dCArPSBub2RlLmRhdGE7XG4vLyAgICAgfVxuLy8gfVxuLy8gY29uc29sZS5sb2coXCJwYXJlbnQgdGV4dCBpc1wiICt0ZXh0KTtcbi8vIH1cblxuLy8gcHJvamVjdChcIkRhaWx5IFRoaW5nc1wiKTtcblxuLy8gcHJvamVjdChcIlRoaXMgV2Vla1wiKTtcblxuLy8gdG9Eb0l0ZW0oXCJHZXQgZ3JvY2VyaWVzXCIsXCI2LzE3LzI0XCIsXCJoaWdoXCIpO1xuXG4vLyBjb250cm9sbGVyLmFzc2lnblRvRG8oXCJEYWlseSBUaGluZ3NcIixcIkdldCBncm9jZXJpZXNcIik7XG5cbi8vIGNvbnRyb2xsZXIuY2hhbmdlUHJvamVjdChcIkRhaWx5IFRoaW5nc1wiLFwiVGhpcyBXZWVrXCIsXCJHZXQgZ3JvY2VyaWVzXCIpO1xuXG52aWV3RW5naW5lLmNhcmRCdWlsZCgpO1xuXG5sZXQgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2Pi5uZXctcHJvamVjdFwiKVxubmV3UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PnNob3dUaGluZyhcIi5hZGQtcHJvamVjdFwiKVxuKVxuXG5sZXQgbmV3VG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2Pi5uZXctdG9kb1wiKVxubmV3VG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PnNob3dUaGluZyhcIi5hZGQtdG8tZG9cIilcbilcblxuZnVuY3Rpb24gc2hvd1RoaW5nKHRoaW5nKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaW5nKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1wcm9qZWN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgIHByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWVcIiwpLnZhbHVlKTtcbiAgICBzaG93VGhpbmcoXCIuYWRkLXByb2plY3RcIik7XG4gICAgdmlld0VuZ2luZS5jYXJkQnVpbGQoKTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10by1kb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICB0b0RvSXRlbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvLWRvLW5hbWVcIikudmFsdWUsXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvLWRvLWRhdGVcIikudmFsdWUsXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLmNoZWNrZWQpXG4gICAgICAgICAgICB2aWV3RW5naW5lLmNoZWNrU3RhdHVzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG8tZG8tZGF0ZVwiKS52YWx1ZSk7XG4gICAgc2hvd1RoaW5nKFwiLmFkZC10by1kb1wiKTtcbiAgICB2aWV3RW5naW5lLmNhcmRCdWlsZCgpO1xuICAgIC8vIHZpZXdFbmdpbmUubmV3VG9Ebyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvLWRvLW5hbWVcIikudmFsdWUpO1xufSk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXYpPT57XG4vLyAgICAgY29uc29sZS5sb2coZXYpOyBcbi8vICAgICBmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSl7XG4vLyAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IC40O1xuLy8gICAgIH1cblxuXG4vLyBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8nKTtcbi8vIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4vLyAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLGhhbmRsZURyYWdTdGFydCgpKTtcbi8vIH0pXG4vLyB9KVxuXG5mdW5jdGlvbiBzYXZlQWxsICgpe1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIGxldCBmID0gSlNPTi5zdHJpbmdpZnkoY29udHJvbGxlci5wcm9qZWN0cyk7XG4gICAgY29uc29sZS5sb2coZik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgZik7XG4gICAgbGV0IGcgPSBKU09OLnN0cmluZ2lmeShjb250cm9sbGVyLnRvRG9JdGVtcyk7XG4gICAgY29uc29sZS5sb2coZyk7XG4gICAgaWYgKGcgIT0gXCJ1bmRlZmluZWRcIilcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvSXRlbXNcIiwgZylcbn1cbmZ1bmN0aW9uIGdldFByb2ogKCl7XG4gICAgbGV0IGYgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgIGlmIChmKSByZXR1cm4gSlNPTi5wYXJzZShmKTtcbn1cbmZ1bmN0aW9uIGdldFRvRG9zICgpe1xuICAgIGxldCBnID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0l0ZW1zXCIpO1xuICAgaWYgKGcgJiYgZyAhPSBcInVuZGVmaW5lZFwiKSByZXR1cm4gSlNPTi5wYXJzZShnKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=