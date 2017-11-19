import React, { Component } from 'react';
import Intro from './../Intro';
import Summary from './../Summary';
import Skills from './../Skills';
import Education from './../Education';
import Experience from './../Experience';
import Contact from './../Contact';

export default class Main extends Component {
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
            <div className="Main">
                <Intro height={this.state.height} width={this.state.width}/>
                <Summary height={this.state.height} backgroundColor={'White'} />
                <Skills height={this.state.height} backgroundColor={'#f9f9f9'}/>
                <Education height={this.state.height} backgroundColor={'White'}/>
                <Experience height={this.state.height} backgroundColor={'#f9f9f9'}/>
                <Contact height={this.state.height} backgroundColor={"DimGrey"}/>
            </div>
        );
    }
}