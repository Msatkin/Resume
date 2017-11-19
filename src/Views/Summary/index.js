import React, { Component } from 'react';
import './index.css';
import Title from './../../Components/Title';
import DisplayList from './../../Components/DisplayList';
import { summary, basicInfo } from './../../resources/resumeInfo';
import image from './../../resources/Personal_Image.png';

export default class Summary extends Component {
    render() {
        return (
            <div id="Summary" className={"section"} style={{backgroundColor: this.props.backgroundColor, minHeight: this.props.height}}>
                <Title title="Summary"/>
                <div className={ "section-content flex-container-row summary-container" }>
                    <div className={"summary"}>
                        <p>{ summary }</p>
                    </div>
                    <div className={"image-container"}>
                        <img className={"circle-image summary-image"} src={image} alt="Personal Shot"/>
                    </div>
                    <div className={"basicInfo"}>
                        <DisplayList type="text" data={basicInfo}/>
                    </div>
                </div>
            </div>
        );
    }
}