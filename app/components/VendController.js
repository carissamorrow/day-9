import VendService from "./VendService";

//private
let vendService = new VendService()

function drawTotal(value) {

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