import React from 'react';
const PreviewItem = (props) =>{
    const itemStyle = {
        color: props.important ? 'red' : 'black'
    }
    return(
        <span onClick={props.OnToggleNote}>
            <h1 style={itemStyle}>{props.header}</h1>
        </span>
    )
}
export default PreviewItem;