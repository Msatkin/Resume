import React, { Component } from 'react';
import './index.css';
import FontAwesome from 'react-fontawesome';

export default class EducationItem extends Component {
    constructor(props) {
        super(props);
        this.state = { education: props.education };
      }
      
    componentDidMount() {
        
    }
      
    componentWillUnmount() {
        
    }

    render() {
        return (
            <div className={"flex-container-row education-item-container"}>
                <div style={{flex: 1}}>
                    <img className={"education-item-image"} src={require("./../../resources/education/" + this.state.education.image)} alt="School Logo"/>
                </div>
                <div className={"education-item-info flex-container-col"} style={{flex: 3}}>
                    <span className={"flex education-name"}>{this.state.education.name}</span>
                    <span className={"flex education-location"}><FontAwesome name="map-marker"/>{" " + this.state.education.location}</span>
                    <span className={"flex education-dates"}>{this.state.education.dates}</span>
                    <span className={"flex education-major"}>{this.state.education.major}</span>
                    <span className={"flex education-description"}>{this.state.education.description}</span>
                </div>
            </div>
        );
    }
}