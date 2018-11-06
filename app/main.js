import VendController from './components/VendController.js'


class App {
  constructor() {
    this.controllers = {
      vendrController: new VendController()
    }
  }
}

window.app = new App()