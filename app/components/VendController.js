import VendService from "./VendService";

//private
let vendService = new VendService()

function drawTotal(value) {
  document.getElementById('change').innerText = value
}

function drawItems() {
  let items = vendService.getItems()
}

//public
export default class VendController {
  addQuarter() {
    let total = vendService.addQuarter()
    drawTotal(total)
  }
  vendItem() {

  }
}