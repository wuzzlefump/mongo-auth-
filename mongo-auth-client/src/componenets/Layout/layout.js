import React from "react"
import "./style.css"

const Layout = (props)=>{
    <div>
    <Navbar />
    <main>{props.children}</main>
  </div>
}