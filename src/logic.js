let projectArray = []
let todoArray = []

function checkForStorage() {
    //check for and then create or read localStorage
    if (storageAvailable('localStorage') && (JSON.parse(localStorage.getItem('projectArray')) == null)) {
        localStorage.setItem('projectArray', JSON.stringify(projectArray))
    }
    else if (storageAvailable('localStorage')) {
        projectArray = JSON.parse(localStorage.getItem('projectArray'))
        //console.table(projectArray)
    }
    if (storageAvailable('localStorage') && (JSON.parse(localStorage.getItem('todoArray')) == null)) {
        localStorage.setItem('todoArray', JSON.stringify(todoArray))
    }
    else if (storageAvailable('localStorage')) {
        todoArray = JSON.parse(localStorage.getItem('todoArray'))
        //console.table(todoArray)
    }
}

function Todo(title, project, done, important, comment) {
    this.title = title
    this.project = project
    this.done = done
    this.important = important
    this.comment = comment
}

//json.stringify drops functions for localstorage such as class and prototype methods (toggledone, toggleimportant).
//Solution: Created independent functions that take the objects and updates them. 
//console.clear()
//localStorage.removeItem('projectArray')
//localStorage.removeItem('todoArray')

// Todo.prototype.toggleDone = function() {
//     this.done = !this.done

//     if (storageAvailable('localStorage')) {
//         localStorage.setItem('todoArray', JSON.stringify(todoArray))
//         }
// }

// Todo.prototype.toggleImportant = function() {
//     this.important = !this.important

//     if (storageAvailable('localStorage')) {
//         localStorage.setItem('todoArray', JSON.stringify(todoArray))
//         }
// }

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

function toggleDone(todo) {

    todo.done = !todo.done

    if (storageAvailable('localStorage')) {
        localStorage.setItem('todoArray', JSON.stringify(todoArray))
      }
}

function toggleImportant(todo) {

    todo.important = !todo.important

    if (storageAvailable('localStorage')) {
        localStorage.setItem('todoArray', JSON.stringify(todoArray))
      }
}

function addProject(project) {
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

function editProject (index, updatedProject) {
    
    //first update project's todos
    for (let i=0; i<todoArray.length; i++){
        if (todoArray[i].project == projectArray[index]){
            editTodo(i, new Todo(
                todoArray[i].title,
                updatedProject,
                todoArray[i].done,
                todoArray[i].important,
                todoArray[i].comment
                ))
        }
    }

    projectArray.splice(index, 1, updatedProject)

    if (storageAvailable('localStorage')) {
        localStorage.setItem('projectArray', JSON.stringify(projectArray))
          }
}

function editTodo (index, updatedTodo) {
    
    todoArray.splice(index, 1, updatedTodo)
    // todoArray.splice(index, 1, addTodo(new Todo(
    //         updatedTodo.title,
    //         updatedTodo.project,
    //         updatedTodo.done,
    //         updatedTodo.important,
    //         updatedTodo.comment
    //     ))
    //     )

    if (storageAvailable('localStorage')) {
        localStorage.setItem('todoArray', JSON.stringify(todoArray))
      }
}

function removeProject(index) {

    //first remove project's todos
    for (let i=0; i<todoArray.length; i++){
        if (todoArray[i].project == projectArray[index]){
            removeTodo(i)
            i-- //avoid skipping index because of remoteTodo's splicing
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
    //set default projectArray and todoArray if there are none
    if (projectArray == '' && todoArray == '')
    {
        //demo 
        addProject('Default Project')
        addTodo(new Todo('Hi, I\'m a todo! Click me to view my notes!', 'Default Project', false, false, 'You\'ve expanded my notes/comments!'))
        addTodo(new Todo('Mark me important!', 'Default Project', false, true, 'Click the star!'))
        addTodo(new Todo('Mark me as done!', 'Default Project', true, false, 'Click the checkbox!'))
        addTodo(new Todo('Add a new todo!', 'Default Project', false, false, 'Click the + icon straight above!'))
        addTodo(new Todo('Add a new Project!', 'Default Project', false, false, 'Click \"Add New Project...\" on the top left! If on mobile, first click the menu icon on the top left!'))
        addTodo(new Todo('Edit or delete anything!', 'Default Project', false, false, 'Click the pencil or trash icons. If everything is deleted, the default project will return on page refresh!'))

        //testing
        // addProject('Project Alpha')
        // addProject('Project Beta')
        // addProject('Project Gamma')
        // addTodo(new Todo('Investigate Beta', 'Project Alpha', false, true, 'See what Beta is up to.'))
        // addTodo(new Todo('Observe Gamma', 'Project Alpha', true, false, 'Keep an eye on Gamma.'))
        // addTodo(new Todo('Destroy Alpha', 'Project Beta', false, true, 'Eliminate all traces.'))
        // addTodo(new Todo('Hide from Beta', 'Project Gamma', true, true, 'Keep it secret, keep it safe.'))
        // addTodo(new Todo('Find Gamma', 'Project Beta', false, true, 'Locate for assimilation.'))

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
    toggleDone,
    toggleImportant, 
    addProject, 
    addTodo,
    editProject,
    editTodo, 
    removeProject, 
    removeTodo, 
    seed
}