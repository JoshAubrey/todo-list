import {
    projectArray, 
    todoArray, 
    checkForStorage, 
    Todo, 
    addProject, 
    addTodo, 
    removeProject, 
    removeTodo, 
    seed
} from './logic.js'


checkForStorage()
seed()

todoArray.forEach(todo => todo.toggleDone())
//Uncaught TypeError: todo.toggleDone is not a function

console.table(todoArray)
