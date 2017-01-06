import React from "react"
import {connect} from "react-redux"
import Blog from "../presentational/blog"


const mapToState = (state) =>{

    return {

      data:state

    }
}




export default connect(mapToState,null)(Blog)
