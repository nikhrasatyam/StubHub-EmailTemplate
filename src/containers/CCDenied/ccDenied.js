import React, { Component } from 'react';
import { Button, Select, Input, Icon, List, Checkbox,TextArea } from 'semantic-ui-react';
import CCDeniedPreview from './ccDeniedPreview'

class ToDo extends Component {
    state = {
    
        template :'',
        firstName : '',
        orderAmount:'',
        orderId:'',
        lastCCDigit:'',
        preview : '',
        tempTemplate:`Dear #firstName#,

        Unfortunately, we were not able to obtained funds from you credit card in the amount of: #orderAmount# for order: #orderId#.  The credit card we have on record for you ending with :#lastCCDigit#.  If you would still like to purchase these tickets, please call us back at: 1-800-333-1111.  
        
        Sincerely,
        StubHub`
    }

    addTask = () => {
        this.setState({template:this.state.tempTemplate})
    }
    onPreview = () => {
            let tmp ='this.state.tempTemplate';
            tmp = this.state.tempTemplate
            tmp = tmp.replace(new RegExp('#firstName#', 'g'),this.state.firstName);
            tmp = tmp.replace(new RegExp('#orderAmount#', 'g'),this.state.orderAmount);
            tmp = tmp.replace(new RegExp('#orderId#', 'g'),this.state.orderId);
            tmp = tmp.replace(new RegExp('#lastCCDigit#', 'g'),this.state.lastCCDigit);
            this.setState({template : tmp});   
            this.setState({firstName:'',orderAmount:'',orderId:'',lastCCDigit:''})
    }

    render() {
        return (
            <div>
                <div className ="add-todo">
                    <h2>CCDenied</h2>
                <TextArea className = "add-input" value={this.state.tempTemplate} onChange = {(event)=>this.setState({tempTemplate:event.target.value})}  >
                </TextArea>
                <Button   onClick={() => this.addTask()}>Save</Button>
                </div>
                <hr />
                <form >
                    <label>
                        First Name (#firstName#): <input  class="form-control" type="text" value={this.state.firstName} onChange = {(event)=>this.setState({firstName:event.target.value})} />
                    </label>
                    <label>
                        Order Amount (#orderAmount#): <input class="form-control" type="text" value={this.state.orderAmount} onChange = {(event)=>this.setState({orderAmount:event.target.value})}/>
                    </label>
                    <label>
                        Order Id (#orderId#): <input class="form-control" type="text" value={this.state.orderId} onChange = {(event)=>this.setState({orderId:event.target.value})}/>
                    </label>
                    <label>
                        Last CC Digit (#lastCCDigit#): <input class="form-control" type="text" value={this.state.lastCCDigit} onChange = {(event)=>this.setState({lastCCDigit:event.target.value})}/>
                    </label>
                    <Button className ="add-todo" type="button" onClick = {this.onPreview} >Preview </Button>
                </form>
                <hr/>
                <CCDeniedPreview template= {this.state.template}/>
            </div>
        );
    }
}

export default ToDo;