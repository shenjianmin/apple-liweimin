import AppleBasketStore from "./AppleBasketStore"
import { createContext, useContext } from "react"

class RootStore {
  constructor() {
    this.appleBasketStore = new AppleBasketStore()
  }
}

const RootStoreContext = createContext()

const RootStoreProvider = ({ store, children }) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  )
}

const useRootStore = () => {
  return useContext(RootStoreContext)
}

export { RootStore, RootStoreProvider, useRootStore }
