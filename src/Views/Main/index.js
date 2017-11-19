import React, { Component } from 'react';
import Intro from './../Intro';
import Summary from './../Summary';
import Skills from './../Skills';
import Education from './../Education';
import Experience from './../Experience';
import Contact from './../Contact';

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Intro/>
                <Summary backgroundColor={'White'} />
                <Skills backgroundColor={'#f9f9f9'}/>
                <Education backgroundColor={'White'}/>
                <Experience backgroundColor={'#f9f9f9'}/>
                <Contact backgroundColor={"DimGrey"}/>
            </div>
        );
    }
}