import React,{Component} from "react";
const contentStyle={
           lineHeight:"35px",
           textAlign:"center",
           wordWrap:"break-word"
     }

     export default class Content extends Component{
          constructor(props){
             super(props)
          }
          render(){
             return <div className="content" style={contentStyle}>{this.props.children}</div>
    }
}     
