import React, {Component} from 'react';
import Header from './header';
import Layout from './layout';
import { Input,TextareaAutosize } from '@material-ui/core';
import {UserContext} from './UserContext';

import { connect } from 'react-redux';

class PlaceOrder extends Component {

    static contextType = UserContext;
    constructor(props, context) {
        super(props);
        this.state = {
            job_name:'',
            paper_type:'',
            corners:'',
            size:'',
            quantity:'',
            address:''
        }
        this.changeAction = this.changeAction.bind(this);
    }

    changeAction(e) {
        const {name, value} = e.target;
        this.setState({[name]:value});
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="sidebar">
                    <Layout/>
                </div>
                <div className="main">
                    <h1>Place order {this.context.user.name}</h1>
                    <h3>Counter :{this.props.ctr}</h3>
                    <form>
                        <div className='fieldbox'><Input type="text" placeholder="Job Name" name="job_name" onChange={this.changeAction} value={this.state.job_name}/></div>
                        <div className="row">
                            <div className='fieldbox'>
                                <select name="paper_type" onChange={this.changeAction} value={this.state.paper_type}> 
                                <option value="">-- Select Paper Type --</option>
                                    <option value="glossy">Glossy</option>
                                    <option value="matte">Matte</option>
                                </select>
                            </div>
                            <div className='fieldbox'>
                                <select name="corners" onChange={this.changeAction} value={this.state.corners}> 
                                <option value="">-- Select Corners --</option>
                                    <option value="standard">Standard</option>
                                    <option value="rounded">Rounded</option>
                                </select>
                            </div>
                            <div className='fieldbox'>
                                <select name="size" onChange={this.changeAction} value={this.state.size}> 
                                <option value="">-- Select Size --</option>
                                    <option value="55x55">55x55mm</option>
                                    <option value="85x55">85x55mm</option>
                                    <option value="90x50">90x50mm</option>
                                    <option value="90x55">90x55mm</option>
                                    <option value="170x55">170x55mm</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='fieldbox'><Input type="text" placeholder="Quantity" name="quantity" onChange={this.changeAction} value={this.state.quantity}/></div>
                            <div className='fieldbox'>
                                <TextareaAutosize aria-label="minimum height" rowsMin={2} placeholder="Address" name="address" onChange={this.changeAction} value={this.state.address}/>
                            </div>
                        </div>
                    </form>
                    <div className="quotation">
                        <h4>Quotation</h4>
                        <h3>{this.state.job_name}</h3>
                        <p>
                            Card paper to be print on <strong>{this.state.paper_type}</strong> surface and corners should be <strong>{this.state.corners}</strong>. <br/>
                            Size will be <strong>{this.state.size}mm</strong>. Quantity required is <strong>{this.state.quantity}</strong>. <br/>
                            Order to be deliver on <strong>{this.state.address}</strong>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const counterState = state => {
    return {
        ctr : state.counter
    }
}

export default connect(counterState)(PlaceOrder)
