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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: renderProjectMenu, renderTodoTable, currentProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjectMenu\", function() { return renderProjectMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTodoTable\", function() { return renderTodoTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentProject\", function() { return currentProject; });\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\r\n\r\nObject(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"checkForStorage\"])()\r\nObject(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"seed\"])()\r\n\r\nlet currentProject = _logic_js__WEBPACK_IMPORTED_MODULE_0__[\"projectArray\"][0]\r\n\r\nconst projectMenu = document.getElementById('projectMenu')\r\nconst todoTable = document.getElementById('todoTable')\r\n\r\nfunction renderProjectMenu() {\r\n    projectMenu.innerHTML = ''\r\n    const projects = _logic_js__WEBPACK_IMPORTED_MODULE_0__[\"projectArray\"].map((project, index) => renderProject(project, index, currentProject))\r\n    projects.forEach(project => projectMenu.appendChild(project))\r\n\r\n    const projectSpan = document.getElementById('currentProject')\r\n    projectSpan.textContent = currentProject\r\n\r\n    const header = document.getElementById('header')\r\n    if (currentProject == null) {\r\n        header.classList.add('hide')\r\n    }\r\n    else if (header.classList.contains('hide')){\r\n        header.classList.remove('hide')\r\n    }\r\n\r\n    //console.clear()\r\n    //console.table(projectArray)\r\n    //console.log('currentProject: ' + currentProject)\r\n}\r\n\r\nfunction renderProject(project, index) {\r\n    const button = document.createElement('button')\r\n    button.textContent = project\r\n    button.dataset.index = index\r\n    button.classList.add('sidebar-item')\r\n    if (project == currentProject) {\r\n        button.classList.add('active-project')\r\n    }\r\n    button.onclick = () => {\r\n        currentProject = project\r\n        renderTodoTable()\r\n        renderProjectMenu()\r\n        // const sidebar = document.getElementById('sidebar')\r\n        // if (sidebar.classList.contains('mobile')) {\r\n        //     sidebar.classList.remove('mobile')\r\n        // }\r\n    }\r\n    return button\r\n}\r\n\r\nfunction renderTodoTable() {\r\n    todoTable.innerHTML = ''\r\n    const todos = _logic_js__WEBPACK_IMPORTED_MODULE_0__[\"todoArray\"]\r\n        .filter(todo => todo.project == currentProject)\r\n        .map((todo, index) => renderTodo(todo, index))\r\n    todos.forEach(todo => todoTable.appendChild(todo))\r\n    \r\n    // console.clear()\r\n    // console.table(todoArray.filter(todo => todo.project == currentProject))\r\n    \r\n}\r\n\r\nfunction renderTodo(todo, index) {\r\n    \r\n    const rowContainer = document.createElement('div')\r\n    rowContainer.classList.add('row-container')\r\n\r\n        const tableRow = document.createElement('div')\r\n        tableRow.classList.add('table-row')\r\n        tableRow.dataset.index = index\r\n        \r\n            const checkbox = document.createElement('label')\r\n            checkbox.htmlFor = index\r\n            checkbox.classList.add('si')\r\n            checkbox.classList.add('si-checkbox')\r\n            checkbox.onclick = () => {\r\n                Object(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleDone\"])(todo)\r\n                renderTodoTable()\r\n            }\r\n                \r\n                const checkboxInput = document.createElement('input')\r\n                checkboxInput.type = 'checkbox'\r\n                checkboxInput.id = index\r\n                if (todo.done == true) {\r\n                    checkboxInput.checked = true\r\n                }\r\n                else if (todo.done == false) {\r\n                    checkboxInput.checked = false\r\n                }\r\n                checkbox.appendChild(checkboxInput)\r\n\r\n                const checkboxSpan = document.createElement('span')\r\n                checkboxSpan.classList.add('si-label')\r\n                checkbox.appendChild(checkboxSpan)\r\n\r\n            tableRow.appendChild(checkbox)\r\n\r\n            const important = document.createElement('div')\r\n            important.classList.add('todo-control')\r\n            important.classList.add('material-icons')\r\n            important.textContent = 'star_border'\r\n            if (todo.important == true) {\r\n                important.classList.add('important')\r\n                important.textContent = 'star'\r\n            }\r\n            important.onclick = () => {\r\n                Object(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleImportant\"])(todo)\r\n                renderTodoTable()\r\n            }\r\n            tableRow.appendChild(important)\r\n\r\n            const title = document.createElement('div')\r\n            title.classList.add('todo-title')\r\n            title.textContent = todo.title\r\n            title.onclick = () => {\r\n                if (title.parentElement.nextSibling.classList.contains('show')){\r\n                    title.parentElement.nextSibling.classList.remove('show')\r\n                    title.nextSibling.textContent = 'expand_more'\r\n                }\r\n                else {\r\n                    title.parentElement.nextSibling.classList.add('show')\r\n                    title.nextSibling.textContent = 'expand_less'\r\n                }\r\n            }\r\n            tableRow.appendChild(title)\r\n\r\n            const expand = document.createElement('div')\r\n            expand.classList.add('todo-control')\r\n            expand.classList.add('material-icons')\r\n            expand.textContent = 'expand_more'\r\n            expand.onclick = () => {\r\n                if (expand.parentElement.nextSibling.classList.contains('show')){\r\n                    expand.parentElement.nextSibling.classList.remove('show')\r\n                    expand.textContent = 'expand_more'\r\n                }\r\n                else {\r\n                    expand.parentElement.nextSibling.classList.add('show')\r\n                    expand.textContent = 'expand_less'\r\n                }\r\n            }\r\n            tableRow.appendChild(expand)\r\n\r\n            const edit = document.createElement('div')\r\n            edit.classList.add('todo-control')\r\n            edit.classList.add('float-right')\r\n            edit.classList.add('material-icons')\r\n            edit.textContent = 'edit'\r\n            edit.onclick = () => {\r\n                const editTodoWindow = document.getElementById('edit-todo-window')\r\n            }\r\n            tableRow.appendChild(edit)\r\n\r\n            const deleteTodo =  document.createElement('div')\r\n            deleteTodo.classList.add('todo-control')\r\n            deleteTodo.classList.add('float-right')\r\n            deleteTodo.classList.add('material-icons')\r\n            deleteTodo.textContent = 'delete_outline'\r\n            deleteTodo.onclick = () => {\r\n                Object(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"removeTodo\"])(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"todoArray\"].indexOf(todo))\r\n                renderTodoTable()\r\n            }\r\n            tableRow.appendChild(deleteTodo)\r\n\r\n        \r\n        rowContainer.appendChild(tableRow)\r\n        \r\n        const todoComment = document.createElement('div')\r\n        todoComment.classList.add('todo-comment')\r\n        todoComment.textContent = todo.comment\r\n        rowContainer.appendChild(todoComment)\r\n\r\n    return rowContainer\r\n}\r\n\r\nconst newProject = document.getElementById('newProject')\r\nconst addProjectWindow = document.getElementById('add-project-window')\r\n\r\nconst editProject = document.getElementById('edit-todo-window')\r\nconst editProjectWindow = document.getElementById('add-project-window')\r\n\r\nconst deleteProject = document.getElementById('deleteProject')\r\ndeleteProject.onclick = () => {\r\n    Object(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"removeProject\"])(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"projectArray\"].indexOf(currentProject))\r\n    Object(_logic_js__WEBPACK_IMPORTED_MODULE_0__[\"seed\"])()\r\n    currentProject = _logic_js__WEBPACK_IMPORTED_MODULE_0__[\"projectArray\"][0]\r\n    renderProjectMenu()\r\n    renderTodoTable()\r\n}\r\n\r\nconst addTodoButton = document.getElementById('addTodoButton')\r\nconst addTodoWindow = document.getElementById('add-todo-window')\r\n\r\nconst toggleMenu = document.getElementById('toggleMenu')\r\nconst sidebar = document.getElementById('sidebar')\r\ntoggleMenu.onclick = () => {\r\n    if (sidebar.classList.contains('mobile')) {\r\n        sidebar.classList.remove('mobile')\r\n    }\r\n    else {\r\n        sidebar.classList.add('mobile')\r\n    }\r\n}\r\nprojectMenu.onclick = () => {\r\n    if (sidebar.classList.contains('mobile')) {\r\n        sidebar.classList.remove('mobile')\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\r\n\r\n\r\n\r\nObject(_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"renderProjectMenu\"])()\r\nObject(_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"renderTodoTable\"])()\r\n\r\n// console.table(projectArray)\r\n// console.log('currentProject: ' + currentProject)\r\n// console.table(todoArray)\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! exports provided: projectArray, todoArray, checkForStorage, Todo, toggleDone, toggleImportant, addProject, addTodo, removeProject, removeTodo, seed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectArray\", function() { return projectArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoArray\", function() { return todoArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForStorage\", function() { return checkForStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleDone\", function() { return toggleDone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleImportant\", function() { return toggleImportant; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProject\", function() { return removeProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTodo\", function() { return removeTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"seed\", function() { return seed; });\nlet projectArray = []\r\nlet todoArray = []\r\n\r\n//console.clear()\r\n//localStorage.removeItem('projectArray')\r\n//localStorage.removeItem('todoArray')\r\n//json.stringify drops functions for localstorage such as class and prototype methods (toggledone, toggleimportant).\r\n//Solution: Created independent functions that take the objects and updates them. \r\n\r\nfunction checkForStorage() {\r\n    //check for and then create or read localStorage\r\n    if (storageAvailable('localStorage') && (JSON.parse(localStorage.getItem('projectArray')) == null)) {\r\n        localStorage.setItem('projectArray', JSON.stringify(projectArray))\r\n    }\r\n    else if (storageAvailable('localStorage')) {\r\n        projectArray = JSON.parse(localStorage.getItem('projectArray'))\r\n        //console.table(projectArray)\r\n    }\r\n    if (storageAvailable('localStorage') && (JSON.parse(localStorage.getItem('todoArray')) == null)) {\r\n        localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n    }\r\n    else if (storageAvailable('localStorage')) {\r\n        todoArray = JSON.parse(localStorage.getItem('todoArray'))\r\n        //console.table(todoArray)\r\n    }\r\n}\r\n\r\nfunction Todo(title, project, done, important, comment) {\r\n    this.title = title\r\n    this.project = project\r\n    this.done = done\r\n    this.important = important\r\n    this.comment = comment\r\n}\r\n\r\n// Todo.prototype.toggleDone = function() {\r\n//     this.done = !this.done\r\n\r\n//     if (storageAvailable('localStorage')) {\r\n//         localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n//         }\r\n// }\r\n\r\n// Todo.prototype.toggleImportant = function() {\r\n//     this.important = !this.important\r\n\r\n//     if (storageAvailable('localStorage')) {\r\n//         localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n//         }\r\n// }\r\n\r\n// class Todo {\r\n//     constructor(title, project, done, important, comment) {\r\n//         this.title = title\r\n//         this.project = project\r\n//         this.done = done\r\n//         this.important = important\r\n//         this.comment = comment\r\n//     }\r\n\r\n//     toggleDone() {\r\n//         this.done = !this.done\r\n\r\n//         if (storageAvailable('localStorage')) {\r\n//             localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n//             }\r\n//     }\r\n\r\n//     toggleImportant() {\r\n//         this.important = !this.important\r\n\r\n//         if (storageAvailable('localStorage')) {\r\n//             localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n//             }\r\n//     }\r\n\r\n// }\r\n\r\nfunction toggleDone(todo) {\r\n\r\n    todo.done = !todo.done\r\n\r\n    if (storageAvailable('localStorage')) {\r\n        localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n      }\r\n}\r\n\r\nfunction toggleImportant(todo) {\r\n\r\n    todo.important = !todo.important\r\n\r\n    if (storageAvailable('localStorage')) {\r\n        localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n      }\r\n}\r\n\r\nfunction addProject(project) {\r\n    projectArray.push(project)\r\n\r\n    if (storageAvailable('localStorage')) {\r\n        localStorage.setItem('projectArray', JSON.stringify(projectArray))\r\n      }\r\n}\r\n\r\nfunction addTodo(todo) {\r\n    //Could check if project is new project, but not needed with current UI.\r\n\r\n    todoArray.push(todo)\r\n\r\n    if (storageAvailable('localStorage')) {\r\n        localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n      }\r\n}\r\n\r\nfunction removeProject(index) {\r\n\r\n    //first remove project's todos\r\n    for (let i=0; i<todoArray.length; i++){\r\n        if (todoArray[i].project == projectArray[index]){\r\n            removeTodo(i)\r\n            i-- //avoid skipping index because of remoteTodo's splicing\r\n        }\r\n        else {\r\n            console.log(todoArray[i].project + ' != ' + projectArray[index])\r\n        }\r\n    }\r\n\r\n    projectArray.splice(index, 1)\r\n\r\n    if (storageAvailable('localStorage')) {\r\n        localStorage.setItem('projectArray', JSON.stringify(projectArray))\r\n      }\r\n}\r\n\r\nfunction removeTodo(index) {\r\n    todoArray.splice(index, 1)\r\n\r\n    if (storageAvailable('localStorage')) {\r\n        localStorage.setItem('todoArray', JSON.stringify(todoArray))\r\n      }\r\n}\r\n\r\nfunction seed() {\r\n    //set default projectArray and todoArray if there are none\r\n    if (projectArray == '' && todoArray == '')\r\n    {\r\n        addProject('Project Alpha')\r\n        addProject('Project Beta')\r\n        addProject('Project Gamma')\r\n        addTodo(new Todo('Investigate Beta', 'Project Alpha', false, true, 'See what Beta is up to.'))\r\n        addTodo(new Todo('Observe Gamma', 'Project Alpha', true, false, 'Keep an eye on Gamma.'))\r\n        addTodo(new Todo('Destroy Alpha', 'Project Beta', false, true, 'Eliminate all traces.'))\r\n        addTodo(new Todo('Hide from Beta', 'Project Gamma', true, true, 'Keep it secret, keep it safe.'))\r\n        addTodo(new Todo('Find Gamma', 'Project Beta', false, true, 'Locate for assimilation.'))\r\n\r\n    }\r\n}\r\n\r\n//check for storage, source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability\r\nfunction storageAvailable(type) {\r\n    let storage;\r\n    try {\r\n        storage = window[type];\r\n        let x = '__storage_test__';\r\n        storage.setItem(x, x);\r\n        storage.removeItem(x);\r\n        return true;\r\n    }\r\n    catch(e) {\r\n        return e instanceof DOMException && (\r\n            // everything except Firefox\r\n            e.code === 22 ||\r\n            // Firefox\r\n            e.code === 1014 ||\r\n            // test name field too, because code might not be present\r\n            // everything except Firefox\r\n            e.name === 'QuotaExceededError' ||\r\n            // Firefox\r\n            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\r\n            // acknowledge QuotaExceededError only if there's something already stored\r\n            (storage && storage.length !== 0);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ })

/******/ });