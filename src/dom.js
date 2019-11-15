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

let currentProject = projectArray[0]

const projectMenu = document.getElementById('projectMenu')
const todoTable = document.getElementById('todoTable')

function renderProjectMenu() {
    projectMenu.innerHTML = ''
    const projects = projectArray.map((project, index) => renderProject(project, index, currentProject))
    projects.forEach(project => projectMenu.appendChild(project))

    const projectSpan = document.getElementById('currentProject')
    projectSpan.textContent = currentProject

    const header = document.getElementById('header')
    if (currentProject == null) {
        header.classList.add('hide')
    }
    else if (header.classList.contains('hide')){
        header.classList.remove('hide')
    }

    //console.clear()
    //console.table(projectArray)
    //console.log('currentProject: ' + currentProject)
}

function renderProject(project, index) {
    const button = document.createElement('button')
    button.textContent = project
    button.dataset.index = index
    button.classList.add('sidebar-item')
    if (project == currentProject) {
        button.classList.add('active-project')
    }
    button.onclick = () => {
        currentProject = project
        renderTodoTable()
        renderProjectMenu()
        // const sidebar = document.getElementById('sidebar')
        // if (sidebar.classList.contains('mobile')) {
        //     sidebar.classList.remove('mobile')
        // }
    }
    return button
}

function renderTodoTable() {
    todoTable.innerHTML = ''
    const todos = todoArray
        .filter(todo => todo.project == currentProject)
        .map((todo, index) => renderTodo(todo, index))
    todos.forEach(todo => todoTable.appendChild(todo))
    
    // console.clear()
    // console.table(todoArray.filter(todo => todo.project == currentProject))
    
}

function renderTodo(todo, index) {
    
    const rowContainer = document.createElement('div')
    rowContainer.classList.add('row-container')

        const tableRow = document.createElement('div')
        tableRow.classList.add('table-row')
        tableRow.dataset.index = index
        
            const checkbox = document.createElement('label')
            checkbox.htmlFor = index
            checkbox.classList.add('si')
            checkbox.classList.add('si-checkbox')
            checkbox.onclick = () => {
                toggleDone(todo)
                renderTodoTable()
            }
                
                const checkboxInput = document.createElement('input')
                checkboxInput.type = 'checkbox'
                checkboxInput.id = index
                if (todo.done == true) {
                    checkboxInput.checked = true
                }
                else if (todo.done == false) {
                    checkboxInput.checked = false
                }
                checkbox.appendChild(checkboxInput)

                const checkboxSpan = document.createElement('span')
                checkboxSpan.classList.add('si-label')
                checkbox.appendChild(checkboxSpan)

            tableRow.appendChild(checkbox)

            const important = document.createElement('div')
            important.classList.add('todo-control')
            important.classList.add('material-icons')
            important.textContent = 'star_border'
            if (todo.important == true) {
                important.classList.add('important')
                important.textContent = 'star'
            }
            important.onclick = () => {
                toggleImportant(todo)
                renderTodoTable()
            }
            tableRow.appendChild(important)

            const title = document.createElement('div')
            title.classList.add('todo-title')
            title.textContent = todo.title
            title.onclick = () => {
                if (title.parentElement.nextSibling.classList.contains('show')){
                    title.parentElement.nextSibling.classList.remove('show')
                    title.nextSibling.textContent = 'expand_more'
                }
                else {
                    title.parentElement.nextSibling.classList.add('show')
                    title.nextSibling.textContent = 'expand_less'
                }
            }
            tableRow.appendChild(title)

            const expand = document.createElement('div')
            expand.classList.add('todo-control')
            expand.classList.add('material-icons')
            expand.textContent = 'expand_more'
            expand.onclick = () => {
                if (expand.parentElement.nextSibling.classList.contains('show')){
                    expand.parentElement.nextSibling.classList.remove('show')
                    expand.textContent = 'expand_more'
                }
                else {
                    expand.parentElement.nextSibling.classList.add('show')
                    expand.textContent = 'expand_less'
                }
            }
            tableRow.appendChild(expand)

            const edit = document.createElement('div')
            edit.classList.add('todo-control')
            edit.classList.add('float-right')
            edit.classList.add('material-icons')
            edit.textContent = 'edit'
            edit.onclick = () => {
                const editTodoWindow = document.getElementById('edit-todo-window')
            }
            tableRow.appendChild(edit)

            const deleteTodo =  document.createElement('div')
            deleteTodo.classList.add('todo-control')
            deleteTodo.classList.add('float-right')
            deleteTodo.classList.add('material-icons')
            deleteTodo.textContent = 'delete_outline'
            deleteTodo.onclick = () => {
                removeTodo(todoArray.indexOf(todo))
                renderTodoTable()
            }
            tableRow.appendChild(deleteTodo)

        
        rowContainer.appendChild(tableRow)
        
        const todoComment = document.createElement('div')
        todoComment.classList.add('todo-comment')
        todoComment.textContent = todo.comment
        rowContainer.appendChild(todoComment)

    return rowContainer
}

const newProject = document.getElementById('newProject')
const addProjectWindow = document.getElementById('add-project-window')

const editProject = document.getElementById('edit-todo-window')
const editProjectWindow = document.getElementById('add-project-window')

const deleteProject = document.getElementById('deleteProject')
deleteProject.onclick = () => {
    removeProject(projectArray.indexOf(currentProject))
    seed()
    currentProject = projectArray[0]
    renderProjectMenu()
    renderTodoTable()
}

const addTodoButton = document.getElementById('addTodoButton')
const addTodoWindow = document.getElementById('add-todo-window')

const toggleMenu = document.getElementById('toggleMenu')
const sidebar = document.getElementById('sidebar')
toggleMenu.onclick = () => {
    if (sidebar.classList.contains('mobile')) {
        sidebar.classList.remove('mobile')
    }
    else {
        sidebar.classList.add('mobile')
    }
}
projectMenu.onclick = () => {
    if (sidebar.classList.contains('mobile')) {
        sidebar.classList.remove('mobile')
    }
}

export {
    renderProjectMenu, 
    renderTodoTable,
    currentProject
}