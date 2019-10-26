let projectArray = []
let todoArray = []

console.clear();
localStorage.removeItem('projectArray')
localStorage.removeItem('todoArray')
//json.stringify drops functions for localstorage
//solution 1: take the function out and change it so that it will take the object and update it instead.
//solution 2: another option besides json.stringify?

function checkForStorage() {
    //check for and then create or read localStorage
    if (storageAvailable('localStorage') && (JSON.parse(localStorage.getItem('projectArray')) == null)) {
        localStorage.setItem('projectArray', JSON.stringify(projectArray))
    }
    else if (storageAvailable('localStorage')) {
        projectArray = JSON.parse(localStorage.getItem('projectArray'))
        console.table(projectArray)
    }
    if (storageAvailable('localStorage') && (JSON.parse(localStorage.getItem('todoArray')) == null)) {
        localStorage.setItem('todoArray', JSON.stringify(todoArray))
    }
    else if (storageAvailable('localStorage')) {
        todoArray = JSON.parse(localStorage.getItem('todoArray'))
        console.table(todoArray)
    }
}

function Todo(title, project, done, important, comment) {
    this.title = title
    this.project = project
    this.done = done
    this.important = important
    this.comment = comment
}

Todo.prototype.toggleDone = function() {
    this.done = !this.done

    if (storageAvailable('localStorage')) {
        localStorage.setItem('todoArray', JSON.stringify(todoArray))
        }
}

Todo.prototype.toggleImportant = function() {
    this.important = !this.important

    if (storageAvailable('localStorage')) {
        localStorage.setItem('todoArray', JSON.stringify(todoArray))
        }
}

// class Todo {
//     constructor(title, project, done, important, comment) {
//         this.title = title
//         this.project = project
//         this.done = done
//         this.important = important
//         this.comment = comment
//     }

//     toggleDone() {
//         this.done = !this.done

//         if (storageAvailable('localStorage')) {
//             localStorage.setItem('todoArray', JSON.stringify(todoArray))
//             }
//     }

//     toggleImportant() {
//         this.important = !this.important

//         if (storageAvailable('localStorage')) {
//             localStorage.setItem('todoArray', JSON.stringify(todoArray))
//             }
//     }

// }

function addProject(project){
    projectArray.push(project)

    if (storageAvailable('localStorage')) {
        localStorage.setItem('projectArray', JSON.stringify(projectArray))
      }
}

function addTodo(todo) {
    //Could check if project is new project, but not needed with current UI.

    todoArray.push(todo)

    if (storageAvailable('localStorage')) {
        localStorage.setItem('todoArray', JSON.stringify(todoArray))
      }
}

function removeProject(index) {

    //first remove project's todos
    for (let i=0; i<todoArray.length; i++){
        if (todoArray[i].project == projectArray[index]){
            removeTodo(i)
        }
    }

    projectArray.splice(index, 1)

    if (storageAvailable('localStorage')) {
        localStorage.setItem('projectArray', JSON.stringify(projectArray))
      }
}

function removeTodo(index) {
    todoArray.splice(index, 1)

    if (storageAvailable('localStorage')) {
        localStorage.setItem('todoArray', JSON.stringify(todoArray))
      }
}

function seed() {
    //set default projectArray if there are none
    if (projectArray == '')
    {
        addProject('Project Alpha')
        addProject('Project Beta')
        addProject('Project Gamma')
    }
    //set default todoArray if there are none
    if (todoArray == '') {
        addTodo(new Todo('Investigate Beta', 'Project Alpha', false, true, 'See what Beta is up to.'))
        addTodo(new Todo('Observe Gamma', 'Project Alpha', true, false, 'Keep an eye on Gamma.'))
    }
    
}

//check for storage, source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

export {
    projectArray, 
    todoArray, 
    checkForStorage, 
    Todo, 
    addProject, 
    addTodo, 
    removeProject, 
    removeTodo, 
    seed
}