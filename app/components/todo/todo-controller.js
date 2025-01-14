import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	//WHAT IS MY PURPOSE? answer: to draw the todos on the page
	// NOTE if the todos in this section are always red check if the need an S at the end or no S at the end
	let todoElem = document.querySelector("#do-it-to-it")
	let template = ''
	let mytodos = _todoService.Todos
	document.querySelector("#todoCounter").innerHTML = mytodos.length.toString()
	mytodos.forEach(todo => {
		template += todo.Template
	})
	todoElem.innerHTML = template
}

export default class TodoController {
	constructor() {
		// _todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			description: form.description.value
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}
		form.reset()
		_todoService.addTodo(todo)
	}
	//NOTE START HERE FOR DELETEING A TODO
	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}



}
