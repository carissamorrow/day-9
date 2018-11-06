//private
import VendingMachine from "./VendMachine";




let vm = new VendingMachine(100, [{
  name: 'fritos',
  price: 1,
  quantity: 3
}, {
  name: 'tab',
  price: .75,
  quantity: 10
}])


//public
export default class VendService {
  addQuarter() {

  }
  vendItem(item) {

  }
  giveChange() {
  }
  getItems() {

  }
}
