import React from "react"

import Icon from "../images/github.png"
import StaticIcon from "file-loader!../images/github.png"

const IndexPage = () => (
  <>
    <p>Image in base64:</p>
    <img src={Icon} width="32" alt="" />
    <p>Image as an URL:</p>
    <img src={StaticIcon} width="32" alt="" />
  </>
)

export default IndexPage
