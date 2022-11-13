import { action, configure, makeObservable } from 'mobx'


configure({ enforceActions: 'observed' })

class RootStore {
  constructor({ listStore }) {
    makeObservable(this, {
  
    })
   
    this.listStore = listStore

  }

  register() {}

  
}

export default RootStore
