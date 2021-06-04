import React, { useContext} from 'react';
import './note.css'
import {Remarks} from './context'
import BlankPage from './blankPage'
const Note = ({idNowRendering,setIdNowRendering}) =>{
    
    const [remarks,setRemarks]=useContext(Remarks);
    const ThisRemark = remarks.filter((item) => item.id===idNowRendering)
    const ChangeNote = (id) =>{
        let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        if(hours<10){hours="0"+hours};
        if(minutes<10){minutes="0"+minutes};
        let res=hours+':'+minutes;
        let imgURL=ThisRemark[0].img
        if(imgURL!=null){
            try{
                imgURL=URL.createObjectURL(document.getElementById(idNowRendering+"file").files[0]);
                document.getElementById('image').src=imgURL
            }
            catch{console.log('done nothing')}
        }
        else{
        try{
            imgURL=URL.createObjectURL(document.getElementById(idNowRendering+"file").files[0]);
            document.getElementById('image').src=imgURL
        }
        catch{
            imgURL=null
        }
        
        }
        console.log(imgURL)
        
        const NewItem = {
            id:id,
            header:document.getElementById("header").value,
            content:document.getElementById("content").value,
            important:document.getElementById("checkbox-one").checked,
            timeAdd:res,
            img:imgURL
        }
        const indx=remarks.findIndex((el)=>el.id===id)
        const before = remarks.slice(0,indx)
        const after = remarks.slice(indx+1)
        const newArr = [
            ...before,
            NewItem,
            ...after
        ]
        setRemarks(newArr)
    }
    
    
    console.log(remarks)
    if((idNowRendering!==0)&(ThisRemark!==undefined)){
        let StyleNames=''
        let idName=idNowRendering+"file"
        let ImageStyle='none'
        if(ThisRemark[0].img!==null){ImageStyle='block'}
        if(ThisRemark[0].important){StyleNames+='important'}
        else{StyleNames+='notImportant'}
    return (
      <div className="container">
        <div className="row">
          <input
            id="header"
            onChange={() => {
              ChangeNote(idNowRendering);
            }}
            type="text"
            placeholder="Заголовок"
            className="form-control"
            value={ThisRemark[0].header}
          />
        </div>
        <div className="row">
          <textarea
            id="content"
            onChange={() => {
              ChangeNote(idNowRendering);
            }}
            rows="50"
            className="noteText"
            value={ThisRemark[0].content}
          ></textarea>
        </div>
        <div className="row">
          <div className={StyleNames}>
            <div className="checkbox-first">
              <label for="checkbox-one" className="checkbox-first__label">
                <input
                  onChange={() => {
                    ChangeNote(idNowRendering);
                  }}
                  checked={ThisRemark[0].important}
                  id="checkbox-one"
                  type="checkbox"
                  className="checkbox-first__input"
                />
                <div class="checkbox">
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                  </svg>
                </div>
                <span>Важно</span>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <input
            type="file"
            value=""
            id={idName}
            onChange={() => {
              ChangeNote(idNowRendering);
            }}
          ></input>
          <img
            src={ThisRemark[0].img}
            id="image"
            style={{ display: ImageStyle }}
          ></img>
        </div>
      </div>
    );
}
else if(ThisRemark===undefined){
    setIdNowRendering(0)
    console.log('ауф')
}else if(idNowRendering===0){
    return(
        <BlankPage/>
    )
}

}
export default Note;