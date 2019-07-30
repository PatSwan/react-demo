import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Reduxtest extends Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    getChildren = () => {
        this.props.children('children');
    }
    render(){
        return(
            <div>
                我是test
                <span onClick={() => this.getChildren()}>greet</span>
            </div>
        );
    }
}
Reduxtest.propTypes = {
    children:PropTypes.func,
};

export default Reduxtest;