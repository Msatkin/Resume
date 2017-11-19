import React, { Component } from 'react';
import './index.css';
import DisplayItem from './../DisplayItem';
import EducationItem from './../EducationItem';
import ExperienceItem from './../ExperienceItem';
import ContactItem from './../ContactItem';

export default class DisplayList extends Component {
    constructor(props) {
        super(props);
        this.state = { type: props.type, data: props.data, horizontal: props.horizontal };
    }
      
    componentDidMount() {
        
    }
      
    componentWillUnmount() {

    }

    componentWillReceiveProps(props) {
        if (props !== this.state) {
            this.setState(props);
        }
      }

    render() {
        let type = this.state.type;
        let displayItems = this.state.data.map(function(element, index) {
            switch(type) {
                case "text":
                    return <DisplayItem key={index} type={"text"} title={element.title} text={element.text}/>

                case "bar":
                    return <DisplayItem key={index} type={"bar"} title={element.title} progress={element.progress}/>
                
                case "education":
                    return <EducationItem key={index} education={element}/>
                    
                case "experience":
                    return <ExperienceItem key={index} experience={element}/>
                
                case "contact":
                    return <ContactItem key={index} contact={element}/>
                
                default:
                    return(<div/>);
            }
        });

        let flexDirection = "flex-container-col";

        if (this.state.horizontal) {
            flexDirection = "flex-container-row";
        }

        return (
            <div className={flexDirection}>
                {displayItems}
            </div>
        );
    }
}