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


checkForStorage()
seed()

console.table(todoArray)

todoArray.forEach(todo => toggleImportant(todo))

console.table(todoArray)
