import React, { Component } from 'react';
import './index.css';

export default class Title extends Component {
    constructor(props) {
        super(props);
        this.state = { title: props.title };
    }
      
    componentDidMount() {
        
    }
      
    componentWillUnmount() {

    }

    componentWillReceiveProps(props) {
        if (props !== this.state) {
            this.setState(props);
        }
      }

    render() {
        return (
            <div className={"title-container"} style={{ }}>
                <p className={"title"}>{this.state.title}</p>
            </div>
        );
    }
}