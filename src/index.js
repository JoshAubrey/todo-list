import {
    projectArray, 
    todoArray, 
    checkForStorage, 
    Todo,
    toggleDone,
    toggleImportant, 
    addProject, 
    addTodo,
    editProject,
    editTodo, 
    removeProject, 
    removeTodo, 
    seed
} from './logic.js'

import {
    currentProject,
    renderProjectMenu, 
    renderTodoTable,
    addEventListeners,
    initializeDOM
} from './dom.js'

initializeDOM()
