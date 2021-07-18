import React, {Component} from 'react';
import Header from './header';
import Layout from './layout';
import { connect } from 'react-redux';

class Home extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="sidebar">
                    <Layout/>
                </div>
                <div className="main">
                home
                Counter {this.props.ctr}
                <button onClick={this.props.incrementCounter}>Increment Counter</button>
                </div>
            </div>
        );
    }
}


const mapStateToProp = state => {
    return {
        ctr : state.counter
    }
}

const mapDispatchToProp = dispatch => {
    return {
        incrementCounter : () => {
            dispatch({type:'ADD'})
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(Home)