import WeatherController from "./components/weather/weather-controller.js";
import TodoController from "./components/todo/todo-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      // quoteController: new QuoteController(),
      // imageController: new ImageService()
    }
  }
}

window['app'] = new App()  