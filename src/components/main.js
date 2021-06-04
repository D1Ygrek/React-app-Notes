import React from 'react';
import "./main.css";
import PreviewList from "./preview"
import Note from './note'
import {Remarks} from './context'
const Main = () =>{
    const[MaxId,setMaxId]=React.useState(2);
    const[NowViewId,setNowViewId]=React.useState(0);
    const[remarks,setRemarks] = React.useState([
        {
            id:1,header:"Wake up",content:"", important: false,timeAdd:"00:00",img:null
        },
        {
            id:2,header:"Don't trust anyone",content:"They're watching me", important:true,timeAdd:"00:00",img:null
        }
    ]);
    console.log(remarks)
    const addItem = (id) =>{
        setMaxId(id)
        let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        if(hours<10){hours="0"+hours};
        if(minutes<10){minutes="0"+minutes};
        let res=hours+':'+minutes;
        const NewItem = {
            id:id,
            header:"Заголовок",
            content:'',
            important:false,
            timeAdd:res,
            img:null
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
                    <PreviewList toggleNote={(id)=>setNowViewId(id)} idNowRendering={NowViewId} setIdNowRendering={setNowViewId} />
                </Remarks.Provider>               
            </div>

            <div className="split_right">
                <div>
                    <Remarks.Provider value={[remarks,setRemarks]}>
                        <Note idNowRendering={NowViewId} setIdNowRendering={setNowViewId}/>
                    </Remarks.Provider>  

                </div>
            </div>
        </div>
    )
}
export default Main;