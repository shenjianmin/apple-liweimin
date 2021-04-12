import { makeAutoObservable,runInAction } from 'mobx'

class AppleBasketStore {
  apples = []
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  appleAdd(weight) {
    this.isLoading = true
    setTimeout(() => {
      runInAction(() => {
        this.apples.push({
          index: this.apples.length + 1,
          weight,
          isEatUp: false
        })
        this.isLoading = false
      })
    }, 500)

  }

  appleSatusChange(index, flag) {
    this.apples[index - 1].isEatUp = flag
  }

  get filterApples() {
    return this.apples.filter(apple => apple.isEatUp === false)
  }

  get unEatUpsWeight() {
    return this.filterApples.reduce((sum, item) => {
      return sum += item.weight
    }, 0)
  }

  get eatUpCount() {
    return this.apples.filter(apple => apple.isEatUp === true)
  }

  get eatUpWeight() {
    return this.eatUpCount.reduce((sum, item) => {
      return sum += item.weight
    }, 0)
  }

}

export default AppleBasketStore