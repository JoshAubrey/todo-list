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

let currentProject
const projectMenu = document.getElementById('projectMenu')

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
    const todoTable = document.getElementById('todoTable')

    todoTable.innerHTML = ''
    const todos = todoArray
        .filter(todo => todo.project == currentProject)
        .map(todo => renderTodo(todo, todoArray.indexOf(todo)))
    todos.forEach(todo => todoTable.appendChild(todo))
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
                editTodoWindow.style.visibility = 'visible'
                
                const editTodoTitle = document.getElementById('editTodoTitle')
                const editTodoComments = document.getElementById('editTodoComments')
                editTodoTitle.value = todo.title
                editTodoTitle.dataset.index = index
                editTodoComments.value = todo.comment
            }

            tableRow.appendChild(edit)

            const deleteTodo =  document.createElement('div')
            deleteTodo.classList.add('todo-control')
            deleteTodo.classList.add('float-right')
            deleteTodo.classList.add('material-icons')
            deleteTodo.textContent = 'delete_outline'
            deleteTodo.onclick = () => {
                removeTodo(index)
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

function addEventListeners () {

    const newProject = document.getElementById('newProject')
    const addProjectWindow = document.getElementById('add-project-window')
    const newProjectTitle = document.getElementById('newProjectTitle')
    const addProjectButton = document.getElementById('add-project')
    const cancelAddProjectButton = document.getElementById('close-new-project-form')
    newProject.onclick = () => {
        addProjectWindow.style.visibility = 'visible'
    }
    addProjectButton.addEventListener('click', (e) => {
        e.preventDefault() //prevent page refresh
        if (newProjectTitle.value !== '') {
            addProject(newProjectTitle.value)
            currentProject = newProjectTitle.value
            newProjectTitle.value = ''
            renderTodoTable()
            renderProjectMenu()
            addProjectWindow.style.visibility = 'hidden'
        }
    })
    cancelAddProjectButton.addEventListener('click', (e) => {
        e.preventDefault()
        newProjectTitle.value = ''
        addProjectWindow.style.visibility = 'hidden'
    })

    const editProjectButton = document.getElementById('editProject')
    const editProjectWindow = document.getElementById('edit-project-window')
    const editProjectTitle = document.getElementById('editProjectTitle')
    const updateProjectButton = document.getElementById('update-project')
    const cancelEditProjectButton = document.getElementById('close-edit-project-form')
    editProjectButton.onclick = () => {
        editProjectTitle.value = currentProject
        editProjectWindow.style.visibility = 'visible'
    }
    updateProjectButton.addEventListener('click', (e) => {
        e.preventDefault() //prevent page refresh

        let index = projectArray.indexOf(currentProject)

        if (editProjectTitle.value !== '') {
            editProject(index, editProjectTitle.value)
            currentProject = editProjectTitle.value
            editProjectTitle.value = ''
            renderProjectMenu()
            renderTodoTable()
            editProjectWindow.style.visibility = 'hidden'
        }
    })
    cancelEditProjectButton.addEventListener('click', (e) => {
        e.preventDefault()
        editProjectTitle.value = ''
        editProjectWindow.style.visibility = 'hidden'
    })

    const editTodoWindow = document.getElementById('edit-todo-window')
    const editTodoTitle = document.getElementById('editTodoTitle')
    const editTodoComments = document.getElementById('editTodoComments')
    const updateTodoButton = document.getElementById('update-todo')
    const cancelEditTodoButton = document.getElementById('close-edit-todo-form')
    updateTodoButton.addEventListener('click', (e) => {
        e.preventDefault() //prevent page refresh

        let index = editTodoTitle.dataset.index

        if (editTodoTitle.value !== '') {
            editTodo(index, new Todo(
                editTodoTitle.value,
                currentProject,
                todoArray[index].done,
                todoArray[index].important,
                editTodoComments.value
            ))
            editTodoTitle.value = ''
            editTodoComments.value = ''
            renderTodoTable()
            editTodoWindow.style.visibility = 'hidden'
        }
    })
    cancelEditTodoButton.addEventListener('click', (e) => {
        e.preventDefault()
        editTodoTitle.value = ''
        editTodoComments.value = ''
        editTodoWindow.style.visibility = 'hidden'
    })

    const deleteProject = document.getElementById('deleteProject')
    deleteProject.onclick = () => {
        removeProject(projectArray.indexOf(currentProject))
        //seed() //comment for seed to only happen on page refresh
        currentProject = projectArray[0]
        renderProjectMenu()
        renderTodoTable()
    }

    const addTodoButton = document.getElementById('addTodoButton')
    const addTodoWindow = document.getElementById('add-todo-window')
    const newTodoTitle = document.getElementById('newTodoTitle')
    const newTodoComments = document.getElementById('newTodoComments')
    const addNewTodoButton = document.getElementById('add-todo')
    const cancelAddNewTodoButton = document.getElementById('close-add-todo-form')
    addTodoButton.onclick = () => {
        addTodoWindow.style.visibility = 'visible'
    }
    addNewTodoButton.addEventListener('click', (e) => {
        e.preventDefault() //prevent page refresh
        if (newTodoTitle.value !== '') {
            addTodo(new Todo(
                newTodoTitle.value,
                currentProject,
                false,
                false,
                newTodoComments.value
            ))
            newTodoTitle.value = ''
            newTodoComments.value = ''
            renderTodoTable()
            addTodoWindow.style.visibility = 'hidden'
        }
    })
    cancelAddNewTodoButton.addEventListener('click', (e) => {
        e.preventDefault()
        newTodoTitle.value = ''
        newTodoComments.value = ''
        addTodoWindow.style.visibility = 'hidden'
    })

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
}

function initializeDOM () {
    checkForStorage()
    seed()

    currentProject = projectArray[0]
    
    renderProjectMenu()
    renderTodoTable()
    addEventListeners()
}

export {
    currentProject,
    renderProjectMenu, 
    renderTodoTable,
    addEventListeners,
    initializeDOM
}