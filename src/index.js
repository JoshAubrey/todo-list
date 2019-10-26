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

console.table(todoArray)

todoArray.forEach(todo => todo.toggleDone())

console.table(todoArray)
