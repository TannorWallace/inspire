import Todo from "../../models/todo.js";

// @ts-ignore
const _todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/tannor/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get Todos() {
		return _state.todos
	}


	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		_todoApi.get()
			.then(res => {
				let myTodos = res.data.data
				let todo = myTodos.map(t => new Todo(t))
				_setState('todos', todo)
				// WHAT DO YOU DO WITH THE RESPONSE?
			})

			// FIXME why am I getting an error about data?

			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		_todoApi.post('', todo)
			.then(res => {
				this.getTodos()
				// WHAT DO YOU DO AFTER CREATING A NEW TODO?
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		// debugger
		let todo = _state.todos.find(todo => todo._id == todoId)
		todo.completed = !todo.completed
		_todoApi.put(todoId, todo)
			.then(res => {
				this.getTodos()
				console.log(todo.completed)
			}).catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		// This one is on you to write.... 
		// The http method is delete at the todoId
		_todoApi.delete(todoId)
			.then(res => {
				console.log(res.data.message)
				this.getTodos()
				// _setState('todos', res.data.data)
			})

			.catch(err => console.error(err))
	}
}

