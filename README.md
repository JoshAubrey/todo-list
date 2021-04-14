# todo-list

A fully featured todo list app that utilizes Object Constructors, ES6 Modules, webpack, localStorage, npm, and more!

> ## From The Odin Project's [curriculum](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/todo-list)

> ## [Live Demo](https://joshaubrey.github.io/todo-list/) :shipit:

## Project Requirements

1. Your ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them.
2. Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.
3. Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.
4. You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.
5. The look of the User Interface is up to you, but it should be able to do the following: view all projects, view all todos in each project (probably just the title and due date.. perhaps changing color for different priorities), expand a single todo to see/edit its details, and delete a todo.
6. Use localStorage to save user’s projects and todos between sessions.

## Getting Started

### Installing and running

```bash
git clone https://github.com/JoshAubrey/todo-list.git
cd todo-list
npm install
npm run build
cd dist
open index.html with browser of choice
```

## Built With

* html 
* css
* javascript
* js Object Constructors
* js ES6 Modules
* localStorage
* webpack
* npm
* normalize.css
