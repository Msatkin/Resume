import React, { Component } from 'react';
import './index.css';
import Title from './../../Components/Title';
import DisplayList from './../../Components/DisplayList';
import { education } from './../../resources/resumeInfo';

export default class Education extends Component {
    render() {
        return (
            <div className={"section"} style={{backgroundColor: this.props.backgroundColor}}>
                <Title title="Education"/>
                <div className={"section-content flex-container-row education-container"}>
                    <DisplayList type="education" data={education}/>
                </div>
            </div>
        );
    }
}