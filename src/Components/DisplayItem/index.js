import React, { Component } from 'react';
import './index.css';

export default class DisplayItem extends Component {
    constructor(props) {
        super(props);
        switch(props.type) {
            case "text":
                this.state = { type: props.type, title: props.title, text: props.text };
                break;

            case "bar":
                this.state = { type: props.type, title: props.title, progress: props.progress};
                break;

            default:
                break;
        }
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
        switch(this.state.type) {
            case "text":
                return (
                    <div className={"display-item"}>
                        <span className={"display-item-title"}>{this.state.title + ": "}</span>
                        <span className={"display-item-text"}>{this.state.text}</span>
                    </div>
                );

            case "bar":
                return (
                    <div className={"progress display-item-bar"}>
                        <div className={"progress-bar display-item-bar-progress flex-container-row"} role="progressbar" aria-valuenow={this.state.progress + ""}
                        aria-valuemin="0" aria-valuemax="100" style={{width: this.state.progress + "%"}}>
                        <span className={"display-item-bar-title"}>{this.state.title}</span>
                        </div>
                    </div>
                );
                /*return (
                    <div className={"flex-container-row display-item"}>
                        <div className={"flex-container-row display-item-bar"} style={{ flex: this.state.progress }}><p className={"display-item-bar-title"}>{this.state.title}</p></div>
                        <span style={{ flex: 100 - this.state.progress }}/>
                    </div>
                );*/
            default:
                return;
        }
        
    }
}