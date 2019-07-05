//NOTE make your OWN to dos like how cars has its own data defined in its model page!



export default class Todo {
  constructor(data) {
    console.log("eh to dos?")
    this.user = data.user
    this.completed = data.completed
    this._id = data._id
    this.description = data.description || '';




  }
  get Template() {
    if (this.completed == false) {
      return `
<div class="container-fluid d-flexm-2">
  <div class="row text-center ">
	<div class=" d-flex col-ms-12 overflow-auto">
		<div class="card">
			<div class="card-body todo-bg border border-dark">
      <p class="to-do-color border border-dark">
      ${this.description}
      </p>
            <button class="btn btn-sm btn-success border border-dark" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">completed?</button>
					</div>
		</div>
	</div>
</div>
    </div
    `

    }
    else {
      return `
      <div class="container-fluid d-flex m-2">
    <div class="row text-center">
	<div class=" d-flex col-ms-12 overflow-auto">
		<div class="card">
			<div class="card-body todo-bg">
      <p class="to-do-color border border-dark">
      ${this.description}s
      </p>
      <button class="btn btn-sm btn-danger border border-dark" onclick="app.controllers.todoController.removeTodo('${this._id}')">delete</button>

			</div>
		</div>
	</div>
</div>
    </div>
    `
    }

    // I cannot get the todo background to go transparent and show the background image on the body >:(

  }

}