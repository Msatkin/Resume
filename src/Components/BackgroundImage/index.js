import React, { Component } from 'react';
import './index.css';

export default class BackgroundImage extends Component {
    constructor(props) {
        super(props);
        this.state = { width: props.width, height: props.height, src: props.src, alt: props.alt };
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
            <div className={"no-overflow"}>
                <img src={this.state.src} style={{width: this.state.width, height: this.state.height }} className={"image"}  alt="Background" />
            </div>
        );
    }
}