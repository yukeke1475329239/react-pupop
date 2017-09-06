import React,{Component} from "react";
import Dialog from './modal/dialog';
const title = "jack"
export default class Test extends Component{
    constructor(props){
        super(props)
        this.dialogShow=this.dialogShow.bind(this)
        this.afterClose=this.afterClose.bind(this)
      } 
      dialogShow(){
      
        this.refs.tips.show()
      }
      afterClose(){
       console.log("close")
      }
    render(){
        return (<div>
            <p>111</p>
            <button onClick={this.dialogShow}>弹出框</button>
            <Dialog title={title} ref='tips' onclose={this.afterClose}>
                让我猜一下
            </Dialog>
        </div>)
    }
   
}