import React, { useContext} from 'react';
import {Remarks} from './context';
import PreviewItem from './preview-item';



const PreviewList = ({toggleNote,idNowRendering,setIdNowRendering}) =>{
    const [remarks,setRemarks] = useContext(Remarks)
    const delItem = (id) =>{
        const indx=remarks.findIndex((el)=>el.id===id)
        if(id===idNowRendering){setIdNowRendering(0)}
        const before = remarks.slice(0,indx)
        const after = remarks.slice(indx+1)
        const newArr = [
            ...before,
            ...after
        ]
        setRemarks(newArr)
    }
    
    const elements = remarks.map((item) =>{
        const {id,timeAdd,...itemProps} = item;
        let ClassNames="list-group-item "
        if(id===idNowRendering) { ClassNames+="NowRendering"}
        return(
            <li key={id}   className={ClassNames}>
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            < PreviewItem {...itemProps} OnToggleNote={()=>toggleNote(id)}/>
                        </div>
                        <div className="col-1">
                            <span>изм. {timeAdd}</span>
                        </div>
                        <div className="col-1">
                            <button id="delete" className="btn delBut" onClick={()=>{delItem(id)}}>X</button>
                        </div>
                    </div>
                </div>
                
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