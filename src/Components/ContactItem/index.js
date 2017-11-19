import React, { Component } from 'react';
import './index.css';
import FontAwesome from 'react-fontawesome';
import ContactModal from './../ContactModal';

export default class ContactItem extends Component {
    componentDidMount() {
        
    }
      
    componentWillUnmount() {
        
    }

    render() {
        if(this.props.contact.modal) {
            return (
                <div className={"contact-item-container"}>
                    <div className={"contact-item-image"}>
                    <a href={this.props.contact.link} data-toggle="modal" data-target={"#" + this.props.contact.name}>
                        <FontAwesome
                            className={"icon"}
                            name={this.props.contact.icon}
                            size="3x"
                            style={{ backgroundColor: this.props.contact.color, borderColor: this.props.contact.color}}
                            inverse={true}
                            border={true}
                        />
                    </a>
                    </div>
                    <ContactModal name={this.props.contact.name} content={this.props.contact.modalInfo}/>
                </div>
            );
        }        

        return (
            <div className={"contact-item-container"}>
                <div className={"contact-item-image"}>
                    <a href={this.props.contact.link}>
                    <FontAwesome
                        className={"icon"}
                        name={this.props.contact.icon}
                        size="3x"
                        style={{ backgroundColor: this.props.contact.color, borderColor: this.props.contact.color}}
                        inverse={true}
                        border={true}
                    />
                </a>
                </div>
            </div>
        );
    }    
}