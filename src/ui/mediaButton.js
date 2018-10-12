import React from "react";

export class MediaButton extends React.Component {
    constructor() {
        super();
        this.onButtonClick = (e) => {
            e.preventDefault();
            this.props.onMediaButtonClick(this.props.mediaType);
        };
    }

    render() {
        let className = '';
        if (this.props.active && this.props.mediaType === "link") {
            className += ' RichEditor-activeButton';
        } else {
            if (this.props.disabled) {
                className = className + ' ' + 'RichEditor-disableButton';
            }
        }
        className = className + ' ' + this.props.icon;
        let fontSize = {
            fontSize: "32px"
        };
        return (
            <i style={fontSize} title={this.props.label} className={className} onClick={this.onButtonClick}/>
        );
    }
}