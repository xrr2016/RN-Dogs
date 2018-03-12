import { observable } from 'mobx'

class Theme {
  @observable type = 0

  @action toggleTheme (newType) {
    this.type = newType
  }

}

export default new Theme()