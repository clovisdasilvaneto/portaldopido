import React from "react";
import Header from "../components/layout/Header";

export default class Layout extends React.Component{
  render(){
    return (
        <div>
          <Header />

          <div class="mg-top">
            {this.props.children}
          </div>
        </div>
    )
  }
}
