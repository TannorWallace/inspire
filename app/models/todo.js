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


    return `
  <div class="row text-center">
	<div class=" d-flex col-ms-4 border border-dark">
		<div class="card">
			<div class="card-body">
      <p class="border border-dark">
      <li>${this.description}</li>
      </p>
      <button class="btn btn-sm btn-secondary" onclick="app.controllers.todoController.removeTodo('${this._id}')">Task Complete</button>
      
				
			</div>
		</div>
	</div>
</div>
    
    `
  }
}