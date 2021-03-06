import React from "react";
import {fontSizeForBtn} from "../utils/constants";

export class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        let fontSize = {
            fontSize: fontSizeForBtn
        };
        let className = '';
        if (this.props.active) {
            className += ' richEditorActiveButton';
        }
        className += ' ' + this.props.icon;
        return (
            <i style={fontSize} title={this.props.label} className={className} onMouseDown={this.onToggle}/>
        );
    }
}