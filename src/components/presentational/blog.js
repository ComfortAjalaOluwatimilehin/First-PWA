import React, {PropTypes} from "react"
import EachBlog from "./eachblog"
const Blog = ({data}) =>{
      return (
            <div>

                    {data.map((blog,i)=>{
                        return <EachBlog {...blog} key={i}/>
                    })}
            </div>
      )
}

Blog.PropTypes = {
  data:PropTypes.array.isRequired
}

export default Blog
