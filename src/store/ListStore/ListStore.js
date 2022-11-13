import { observable, makeObservable, action, configure } from 'mobx'
import list from './list.json'

class ListStore {
 itemList = list
 shoppingList = []
    constructor() {
      makeObservable(this, {
        itemList: observable,
        shoppingList: observable,
  
        /* Actions */
        addToShoppingList: action,
      })
    }
   
    addToShoppingList = (string) => {
      this.shoppingList = [...this.shoppingList, string]
    }
   
  }
  
  export default ListStore
  