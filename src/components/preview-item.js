import React from 'react';
const PreviewItem = (props) =>{
    const itemStyle = {
        color: props.important ? 'purple' : 'black',
        bold: props.important ? 'bold' : 'normal',
        fontSize: props.important ? '20pt' : '14pt'
    }

    return(           
        <span onClick={props.OnToggleNote} style={itemStyle}>
            {props.header}
        </span>
    )
}
export default PreviewItem;