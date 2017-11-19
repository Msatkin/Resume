import React, { Component } from 'react';
import './index.css';
import FontAwesome from 'react-fontawesome';

export default class ExperienceItem extends Component {
    constructor(props) {
        super(props);
        this.state = { experience: props.experience };
      }
      
    componentDidMount() {
        
    }
      
    componentWillUnmount() {
        
    }

    render() {
        return (
            <div className={"flex-container-row experience-item-container"}>
                <div style={{flex: 1}}>
                    <img className={"experience-item-image"} src={require("./../../resources/experience/" + this.state.experience.image)} alt="School Logo"/>
                </div>
                <div className={"experience-item-info flex-container-col"} style={{flex: 3}}>
                    <span className={"flex experience-name"}>{this.state.experience.name}</span>
                    <span className={"flex experience-location"}><FontAwesome name="map-marker"/>{" " + this.state.experience.location}</span>
                    <span className={"flex experience-dates"}>{this.state.experience.dates}</span>
                    <span className={"flex experience-position"}>{this.state.experience.position}</span>
                    <span className={"flex experience-description"}>{this.state.experience.description}</span>
                </div>
            </div>
        );
    }
}