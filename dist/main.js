/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\r\n\r\n\r\nObject(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"checkForStorage\"])()\r\nObject(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"seed\"])()\r\n\r\nconsole.table(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"todoArray\"])\r\n\r\n_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"todoArray\"].forEach(todo => todo.toggleDone())\r\n\r\nconsole.table(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"todoArray\"])\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! exports provided: projectArray, todoArray, checkForStorage, Todo, addProject, addTodo, removeProject, removeTodo, seed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectArray\", function() { return projectArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoArray\", function() { return todoArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForStorage\", function() { return checkForStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProject\", function() { return removeProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTodo\", function() { return removeTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"seed\", function() { return seed; });\nlet projectArray = []\r\nlet todoArray = []\r\n\r\nconsole.clear();\r\nlocalStorage.removeItem('projectArray')\r\nlocalStorage.removeItem('todoArray')\r\n//json does not stringify functions \r\n\r\n\r\nfunction checkForStorage() {\r\n    //check for and then create or read localStorage\r\n    if (storageAvailable('localStorage') && (JSON.parse(localStorage.getItem('projectArray')) == null)) {\r\n        localStorage.setItem('projectArray', JSON.stringify(projectArray))\r\n    }\r\n    else if (storageAvailable('localStorage')) {\r\n        projectArray = JSON.parse(localStorage.getItem('projectArray'))\r\n        console.table(projectArray)\r\n    }\r\n    if (storageAvailable('localStorage') && (JSON.parse(localStorage.getItem('todoArray')) == null)) {\r\n        localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n    }\r\n    else if (storageAvailable('localStorage')) {\r\n        todoArray = JSON.parse(localStorage.getItem('todoArray'))\r\n        console.table(todoArray)\r\n    }\r\n}\r\n\r\nfunction Todo(title, project, done, important, comment) {\r\n    this.title = title\r\n    this.project = project\r\n    this.done = done\r\n    this.important = important\r\n    this.comment = comment\r\n}\r\n\r\nTodo.prototype.toggleDone = function() {\r\n    this.done = !this.done\r\n\r\n    if (storageAvailable('localStorage')) {\r\n        localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n        }\r\n}\r\n\r\nTodo.prototype.toggleImportant = function() {\r\n    this.important = !this.important\r\n\r\n    if (storageAvailable('localStorage')) {\r\n        localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n        }\r\n}\r\n\r\n// class Todo {\r\n//     constructor(title, project, done, important, comment) {\r\n//         this.title = title\r\n//         this.project = project\r\n//         this.done = done\r\n//         this.important = important\r\n//         this.comment = comment\r\n//     }\r\n\r\n//     toggleDone() {\r\n//         this.done = !this.done\r\n\r\n//         if (storageAvailable('localStorage')) {\r\n//             localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n//             }\r\n//     }\r\n\r\n//     toggleImportant() {\r\n//         this.important = !this.important\r\n\r\n//         if (storageAvailable('localStorage')) {\r\n//             localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n//             }\r\n//     }\r\n\r\n// }\r\n\r\nfunction addProject(project){\r\n    projectArray.push(project)\r\n\r\n    if (storageAvailable('localStorage')) {\r\n        localStorage.setItem('projectArray', JSON.stringify(projectArray))\r\n      }\r\n}\r\n\r\nfunction addTodo(todo) {\r\n    //Could check if project is new project, but not needed with current UI.\r\n\r\n    todoArray.push(todo)\r\n\r\n    if (storageAvailable('localStorage')) {\r\n        localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n      }\r\n}\r\n\r\nfunction removeProject(index) {\r\n\r\n    //first remove project's todos\r\n    for (let i=0; i<todoArray.length; i++){\r\n        if (todoArray[i].project == projectArray[index]){\r\n            removeTodo(i)\r\n        }\r\n    }\r\n\r\n    projectArray.splice(index, 1)\r\n\r\n    if (storageAvailable('localStorage')) {\r\n        localStorage.setItem('projectArray', JSON.stringify(projectArray))\r\n      }\r\n}\r\n\r\nfunction removeTodo(index) {\r\n    todoArray.splice(index, 1)\r\n\r\n    if (storageAvailable('localStorage')) {\r\n        localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n      }\r\n}\r\n\r\nfunction seed() {\r\n    //set default projectArray if there are none\r\n    if (projectArray == '')\r\n    {\r\n        addProject('Project Alpha')\r\n        addProject('Project Beta')\r\n        addProject('Project Gamma')\r\n    }\r\n    //set default todoArray if there are none\r\n    if (todoArray == '') {\r\n        addTodo(new Todo('Investigate Beta', 'Project Alpha', false, true, 'See what Beta is up to.'))\r\n        addTodo(new Todo('Observe Gamma', 'Project Alpha', true, false, 'Keep an eye on Gamma.'))\r\n    }\r\n    \r\n}\r\n\r\n//check for storage, source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability\r\nfunction storageAvailable(type) {\r\n    let storage;\r\n    try {\r\n        storage = window[type];\r\n        let x = '__storage_test__';\r\n        storage.setItem(x, x);\r\n        storage.removeItem(x);\r\n        return true;\r\n    }\r\n    catch(e) {\r\n        return e instanceof DOMException && (\r\n            // everything except Firefox\r\n            e.code === 22 ||\r\n            // Firefox\r\n            e.code === 1014 ||\r\n            // test name field too, because code might not be present\r\n            // everything except Firefox\r\n            e.name === 'QuotaExceededError' ||\r\n            // Firefox\r\n            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\r\n            // acknowledge QuotaExceededError only if there's something already stored\r\n            (storage && storage.length !== 0);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ })

/******/ });