require("./styles/style")
import store from "./store"
import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import Blog from "./components/containers/blogcontainer"


render(
  <Provider store={store}>
    <Blog/>
  </Provider>,

  document.getElementById("app")
)



/****************************SERVICE WORKER***************************/
require("./registerService")
