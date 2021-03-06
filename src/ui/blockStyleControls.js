import DropDown from "./dropdown";
import {BLOCK_TYPE_HEADINGS, BLOCK_TYPES} from "../utils/constants";
import React from "react";
import {StyleButton} from "./styleButton.js";
import style from "../App.css";

export const BlockStyleControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className={style.richEditorControls}>


            {BLOCK_TYPES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                    icon={type.icon}
                />
            )}
            <DropDown options={BLOCK_TYPE_HEADINGS} active={blockType} onToggle={props.onToggle} />

        </div>
    );
};