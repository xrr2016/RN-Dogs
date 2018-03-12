import { observable, computed, action } from 'mobx'

class LikeList {
  @observable list = []
  
  @computed get 
  likesCount () {
    return this.list.length
  }

  @action removeLike (id) {
    const idx = this.list.findIndex(like => like.id === id)
    this.list.splice(idx, 1)
  }

  @action addLike (like) {
    this.list.unshift(like)
  }

}

export default new LikeList()