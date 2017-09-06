import React,{Component} from "react";
import Model from "./box";
import { Mask } from "./mask";


export default class Dialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false
        }
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
    }
    show() {
        this.setState(function (state) {
            state.flag = true
        })
    }
    hide() {
        this.setState(function (state) {
            this.props.onclose()
            state.flag = false
        })
    }
    render() {
        return (this.state.flag && <Mask>
            <Model title={this.props.title} isflag={this.hide}>
                {this.props.children}
            </Model>
        </Mask>)
    }
}