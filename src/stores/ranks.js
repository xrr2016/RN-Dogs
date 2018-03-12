import { observable } from 'mobx'
import BiliRanks from '../api'

function  mapRanks(rank) {
  switch (rank) {
    case 0: return 'all'
    case 1: return 'origin'
    case 2: return 'all'
    case 3: return 'all'
    case 4: return 'all'
    default: return 'all'
  }
}

export default class RankDatas {
  
  @observable currentRank = 0
  @observable wholeStieRank = {}
  @observable originalRank = {}
  @observable newFanRank = {}
  @observable televisionRank = {}
  @observable rookieRank = {}

  @action changeRank (e) {
    console.log(e)
    this.currentRank = e.target
  }

  @action getDatas (rank = 0, catelogy = 0) {

  }

  @action setDatas () {

  }
  
}