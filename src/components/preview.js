import React, { useContext} from 'react';
import {Remarks} from './context';
import PreviewItem from './preview-item';



const PreviewList = ({toggleNote}) =>{
    const [remarks,setRemarks] = useContext(Remarks)
    const elements = remarks.map((item) =>{
        const {id,...itemProps} = item;
        return(
            <li key={id}   className="list-group-item">
                < PreviewItem {...itemProps} OnToggleNote={()=>toggleNote(id)}/>
            </li>
        )
    })
    return(
        <div>
            <ul className="list-group">
                {elements}
            </ul>
        </div>
    )
}

export default PreviewList;