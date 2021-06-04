import React from 'react'
export const Remarks = React.createContext()
/*export function addItem(newid){
    const NewItem = {
        id:newid,
        header:"Заголовок",
        content:'',
        important:false
    }
    const newArr = [
        ...Remarks,
        NewItem
    ]
    console.log(newArr)
    Remarks=newArr
}
export function changeItem(itemId){
    const NewItem = {
        id:itemId,
        header:document.getElementById("header").value,
        content:document.getElementById("content").value,
        important:document.getElementById("important").checked
    }
    const indx=itemId-1;
    const before = Remarks.slice(0,indx)
    const after = Remarks.slice(indx+1)
    const newArr = [
        ...before,
        NewItem,
        ...after
    ]
    console.log(newArr)
    Remarks=newArr
}
export const RemarksContext = React.createContext(Remarks)*/
