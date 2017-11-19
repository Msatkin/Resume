import React, { Component } from 'react';
import './index.css';

export default class ContactItem extends Component {
    componentDidMount() {
        
    }
      
    componentWillUnmount() {
        
    }

    render() {
        return (
            <div id={this.props.name} className={"modal fade"} role="dialog">
                <div className={"modal-dialog"}>
                    <div className={"modal-content"}>
                        <div className={"modal-header"}>
                            <button type="button" className={"close"} data-dismiss="modal">&times;</button>
                            <h2 className={"modal-title"}>{this.props.content.header}</h2>
                        </div>
                        <div className={"modal-body"}>
                            {this.props.content.body}
                        </div>
                        <div className={"modal-footer"}>
                            {this.props.content.footer}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}