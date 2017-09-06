import React,{Component} from "react";

    const BtnComponStyle={
         width:"80px",
          height:'35px',
          border:0,
          marginLeft:"10px",
          color:"#fff"
    }
    function extend(_super,_cur){
        return Object.assign({},_cur,_super)
    }
    const CertainStyle=extend(BtnComponStyle,{
         background:"plum"
    })
    const CancelStyle=extend(BtnComponStyle,{
        background:"pink"
   })
    export default class Btns extends Component{
       constructor(props){
         super(props)
         this.close=this.close.bind(this)
       }
       close(){
       this.props.isflag()
         
       }
       render(){
           let type=this.props.type
           switch(type){
               case 'certain':
                  return <button className="btn" style={CertainStyle} onClick={this.close}>确定</button>
                  break;
               case 'cancel':
                  return  <button className="btn" style={CancelStyle} onClick={this.close}>取消</button> 
                  break; 
               case 'close':
                  return  <button className="btn">关闭</button> 
                  break; 
           }
        }
    }