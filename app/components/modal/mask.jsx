import React,{Component} from "react";
const zheStyle={
        width:"100%",
        height:"100%",
        background:"rgba(0,0,0,0.7)",
        zIndex:100,
          position:"absolute",
          left:0,
          top:0
    }
    // 遮罩层
  class Mask extends Component{
    constructor(props){
            super(props)
        }
        render(){
            return <div className='box' style={zheStyle} >{this.props.children}</div>
        }
    }
    export { Mask }   
     