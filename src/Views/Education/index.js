import React, { Component } from 'react';
import './index.css';
import Title from './../../Components/Title';
import DisplayList from './../../Components/DisplayList';
import { education } from './../../resources/resumeInfo';

export default class Education extends Component {
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
                <Title title="Education"/>
                <div className={"section-content flex-container-row"}>
                    <DisplayList type="education" data={education}/>
                </div>
            </div>
        );
    }
}