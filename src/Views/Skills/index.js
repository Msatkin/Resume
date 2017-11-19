import React, { Component } from 'react';
import './index.css';
import Title from './../../Components/Title';
import DisplayList from './../../Components/DisplayList';
import { skills } from './../../resources/resumeInfo';

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { backgroundColor: props.backgroundColor };
      }
      
    componentDidMount() {
        
    }
      
    componentWillUnmount() {
        
    }

    render() {
        let rightSkills = skills;
        let leftSkills = rightSkills.splice(0, Math.floor(rightSkills.length / 2));

        return (
            <div className={"section"} style={{backgroundColor: this.state.backgroundColor}}>
                <Title title="Skills"/>
                <div className={"section-content skills-container"}>
                    <div className={"skills"}>
                        <DisplayList type="bar" data={rightSkills}/>
                    </div>
                    <div className={"skills"}>
                        <DisplayList type="bar" data={leftSkills}/>
                    </div>
                </div>
            </div>
        );
    }
}