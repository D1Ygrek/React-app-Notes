import React, { useContext } from 'react';
import {Remarks} from './context';
const PreviewItem = (props) =>{
    const itemStyle = {
        color: props.important ? 'red' : 'black'
    }

    return(           
        <span onClick={props.OnToggleNote}>
            <h3 style={itemStyle}>{props.header}</h3>
        </span>
    )
}
export default PreviewItem;