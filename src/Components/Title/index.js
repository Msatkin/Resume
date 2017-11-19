import React, { Component } from 'react';
import './index.css';

export default class Title extends Component {
    render() {
        return (
            <div className={"title-container"} style={{color: this.props.color ? this.props.color : "Black" }}>
                <p className={"title"}>{this.props.title}</p>
            </div>
        );
    }
}