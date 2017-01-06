import {createStore} from "redux"
import reducer from "./reducers/blog"

var store = createStore(reducer)

export default store
