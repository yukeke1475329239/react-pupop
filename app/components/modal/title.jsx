import React,{Component} from "react";
 const titleStyle={
          height:"45px",
          lineHeight:"45px",
          textAlign:"center",
     }

export default class Titles extends Component{
          constructor(props){
             super(props)
          }
          render(){
            return <div className="title" style={titleStyle}>{this.props.title}</div>
          }
    }
   
 