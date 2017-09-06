import React,{Component} from "react";
import Titles from "./title";
import Content from "./content";
import Btns from "../buttons/button"
const boxStyle={
           position:"absolute",
           top:"50%",
           left:"50%",
           transform:"translate3d(-50%,-50%,0)",
           background:"#fff",
           padding:"10px",
           zIndex:110,
           width:"50%",
   }
   const Buts={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",

}
   
     export default class Model extends Component{
         constructor(props){
             super(props)
     }
      render(){
         return (<div style={boxStyle}>
                       <Titles title={this.props.title} />
                       <Content>{this.props.children}</Content>
                    <div className="btns" style={Buts}>
                        <Btns type="certain" isflag={this.props.isflag}></Btns>
                        <Btns type="cancel"  isflag={this.props.isflag}></Btns>
                    </div> 
                  </div>)
         }
     }