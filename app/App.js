import { ExampleController } from './controllers/ExampleController.js';
import { SnacksController } from './controllers/SnacksController.js';



class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

  SnacksController = new SnacksController()
}

window['app'] = new App()


