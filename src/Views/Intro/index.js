import React, { Component } from 'react';
import './index.css';
import BackgroundImage from './../../Components/BackgroundImage';
import PersonalTitle from './../../Components/PersonalTitle';
import image from './../../resources/Berlin3.gif';
import { titleInfo } from './../../resources/resumeInfo';

export default class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = { width: '0', height: '0' };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        console.log('resize');
    }

    render() {
        return (
            <div>
                <BackgroundImage width={this.state.width} height={this.state.height} src={image}/>
                <PersonalTitle width={this.state.width} height={this.state.height} titleInfo={titleInfo}/>
            </div>
        );
    }
}