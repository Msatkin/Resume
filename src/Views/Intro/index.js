import React, { Component } from 'react';
import './index.css';
import BackgroundImage from './../../Components/BackgroundImage';
import PersonalTitle from './../../Components/PersonalTitle';
import image from './../../resources/Berlin3.gif';
import { titleInfo } from './../../resources/resumeInfo';

export default class Intro extends Component {
    render() {
        return (
            <div>
                <BackgroundImage width={this.props.width} height={this.props.height} src={image}/>
                <PersonalTitle width={this.props.width} height={this.props.height} titleInfo={titleInfo}/>
            </div>
        );
    }
}