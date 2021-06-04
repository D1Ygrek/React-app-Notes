import React, { useContext} from 'react';
import './note.css'
import {Remarks} from './context'
const Note = ({idNowRendering}) =>{
    
    const [remarks,setRemarks]=useContext(Remarks);
    const ChangeNote = (id) =>{
        const NewItem = {
            id:id,
            header:document.getElementById("header").value,
            content:document.getElementById("content").value,
            important:document.getElementById("important").checked
        }
        const indx=id-1;
        const before = remarks.slice(0,indx)
        const after = remarks.slice(indx+1)
        const newArr = [
            ...before,
            NewItem,
            ...after
        ]
        setRemarks(newArr)
    }
    const ThisRemark = remarks.filter((item) => item.id===idNowRendering)
    
    console.log(remarks)
    return(
        <div className="container">
            <div className="row">
                <input id="header" onChange={() => {ChangeNote(idNowRendering)}} type="text" placeholder="Заголовок" className="form-control" value={ThisRemark[0].header}/>
            </div>
            <div className="row">
                <textarea id="content" onChange={() => {ChangeNote(idNowRendering)}} rows="50" className="noteText" value={ThisRemark[0].content}></textarea>
            </div>
            <div className="row">
                <div className="form-check">
                <label className="form-check-label"><input id="important" onChange={() => {ChangeNote(idNowRendering)}} type="checkbox" className="form-check-input" checked={ThisRemark[0].important}/> Важно</label>
                </div>
            </div>
            <div className="row">
            </div>
        </div>
    )
}
export default Note;