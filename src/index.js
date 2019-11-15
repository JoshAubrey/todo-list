import {
    projectArray, 
    todoArray, 
    checkForStorage, 
    Todo,
    toggleDone,
    toggleImportant, 
    addProject, 
    addTodo, 
    removeProject, 
    removeTodo, 
    seed
} from './logic.js'

import {
    renderProjectMenu, 
    renderTodoTable,
    currentProject
} from './dom.js'

renderProjectMenu()
renderTodoTable()

// console.table(projectArray)
// console.log('currentProject: ' + currentProject)
// console.table(todoArray)
