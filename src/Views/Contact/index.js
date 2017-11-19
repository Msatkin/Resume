import React, { Component } from 'react';
import './index.css';
import Title from './../../Components/Title';
import DisplayList from './../../Components/DisplayList';
import { contact } from './../../resources/resumeInfo';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { backgroundColor: props.backgroundColor };
      }
      
    componentDidMount() {
        
    }
      
    componentWillUnmount() {
        
    }

    render() {
        return (
            <div className={"section"} style={{backgroundColor: this.state.backgroundColor}}>
                <Title title="Contact" color={"GhostWhite"}/>
                <div className={"section-content flex-container-row"}>
                    <DisplayList type="contact" data={contact} horizontal="true"/>
                </div>
            </div>
        );
    }
}