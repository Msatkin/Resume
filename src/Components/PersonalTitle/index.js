import React, { Component } from 'react';
import './index.css';
import FontAwesome from 'react-fontawesome';
import scrollToElement from 'scroll-to-element';

export default class PersonalTitle extends Component {
    render() {
        return (
            <div>
                <div className={"container personal-title"} style={{ position: "absolute", top: (this.props.height/2 - (this.props.height * .2)) }}>
                    <p className={"name"}>{this.props.titleInfo.name}</p>
                    <p className={"profession"}>{this.props.titleInfo.profession}</p>
                    <p className={"location"}>{this.props.titleInfo.location}</p>
                </div>
                <a id="skip-intro" onClick={this.scrollToSummary}>
                    <FontAwesome name="chevron-circle-down" size="5x" />
                </a>
            </div>
        );
    }
    scrollToSummary = () => {
        scrollToElement('#Summary');
    }
}