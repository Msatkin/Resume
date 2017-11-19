import React, { Component } from 'react';
import './index.css';
import Title from './../../Components/Title';
import DisplayList from './../../Components/DisplayList';
import { skills } from './../../resources/resumeInfo';

export default class Skills extends Component {
    constructor(props) {
        super(props);

        let leftSkills = skills;
        let rightSkills = leftSkills.splice(0, Math.floor(leftSkills.length / 2));

        this.state = { leftSkills: leftSkills, rightSkills: rightSkills };
    }
      
    componentDidMount() {
        
    }
      
    componentWillUnmount() {
        
    }

    render() {

        return (
            <div className={"section"} style={{backgroundColor: this.props.backgroundColor, minHeight: this.props.height}}>
                <Title title="Skills"/>
                <div className={"section-content skills-container"}>
                    <div className={"skills"}>
                        <DisplayList type="bar" data={this.state.rightSkills}/>
                    </div>
                    <div className={"skills"}>
                        <DisplayList type="bar" data={this.state.leftSkills}/>
                    </div>
                </div>
            </div>
        );
    }
}