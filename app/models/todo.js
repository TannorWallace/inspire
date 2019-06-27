//NOTE make your OWN to dos like how cars has its own data defined in its model page!



export default class Todo {
  constructor(data) {
    console.log("eh to dos?")
    this.title = data.title
    this.description = data.description



  }
  get Template() {
    return `
    
    
    `
  }
}