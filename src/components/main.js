import React from 'react';
import "./main.css";
import PreviewList from "./preview"
import Note from './note'
import {Remarks} from './context'
const Main = () =>{
    const[MaxId,setMaxId]=React.useState(2);
    const[NowViewId,setNowViewId]=React.useState(2);
    const[remarks,setRemarks] = React.useState([
        {
            id:1,header:"Wake up",content:"", important: false
        },
        {
            id:2,header:"Don't trust anyone",content:"They're watching me", important:true
        }
    ]);
    console.log(remarks)
    const addItem = (id) =>{
        setMaxId(id)
        const NewItem = {
            id:id,
            header:"Заголовок",
            content:'',
            important:false
        }
        const newArr = [
            ...remarks,
            NewItem
        ]
        console.log(newArr)
        setRemarks(newArr)
        setNowViewId(id)
    }
    
    return(
        <div>
            <div className="split_left">
                <button className="add btn" onClick={() =>{addItem(MaxId+1);}}><h1>+</h1></button>
                <Remarks.Provider value={[remarks,setRemarks]}>
                    <PreviewList toggleNote={(id)=>setNowViewId(id)} />
                </Remarks.Provider>               
            </div>

            <div className="split_right">
                <div>
                    <Remarks.Provider value={[remarks,setRemarks]}>
                        <Note idNowRendering={NowViewId}/>
                    </Remarks.Provider>  

                </div>
            </div>
        </div>
    )
}
export default Main;