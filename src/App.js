import React, { Component } from "react";
import store from './stors/Stortest';
import Reduxtest from './components/Reduxtest';
import * as Action from './Action';
import { connect } from 'react-redux';
class App extends Component {

constructor(props) {
          super(props);
          // this.state = {
          //       count: store.getState()
          // };
        }
        getChildren = (children) =>{
            console.log(children);
        }
onIncrement = () => {
     console.log([1,2,3,4,5].find((n) => n <5));
          store.dispatch({
               type: "increment",
               a:5
          });
        };
onProduct =() => {
    store.dispatch({
        'type':'product',
        'a' :1
    })
}

onDecrement = () => {
          store.dispatch({
                type: "decrement",
                a:6
          });
        };
    render() {
        store.subscribe(() =>
            this.setState({
                count: store.getState()
            })
        );
        //{}花括号解析一个数组对象的时候会出现found object with keys
        return (
            <React.Fragment>
            <div className="container">
                <h1 className="text-center mt-5">{ store.getState().reducer1}<span style={{color:"red"}}>{store.getState().reducer2}</span></h1>
                <p className="text-center">
                    <button className="btn btn-primary mr-2" onClick={this.onIncrement}>
                        Increase
                    </button>
                    <button className="btn btn-danger my-2" onClick={this.onDecrement}>
                        Decrease
                    </button>
                    <button className="btn btn-danger my-2" onClick={this.onProduct}>
                        product
                    </button>
                </p>
                <Reduxtest age={12} children={() => this.getChildren}/>
            </div>
        </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    count: state
});
export default connect(mapStateToProps,{increment:'increment',decrement:'decrement'})(App);