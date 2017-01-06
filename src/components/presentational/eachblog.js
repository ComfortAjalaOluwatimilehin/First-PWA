import React, {PropTypes} from "react"

const EachBlog = ({text,image}) =>{

      return (

          <figure>
              <img src={image} />
              <figcaption>
                {text}
              </figcaption>
          </figure>

      )
}

EachBlog.PropTypes = {
  text:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired
}

export default EachBlog
