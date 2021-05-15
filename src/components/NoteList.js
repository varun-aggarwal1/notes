import React from 'react'
import '../Views/style.css'

function NoteList(props) {
    const list = props.list;
    const arr = list.map((note)=>{
        return(
            <div className = "Inner-container" key = {note.id}>
                 <div className = "Note-container" >
               <div id = "textPart">

                <div><b>{note.title}</b></div>
                <hr></hr>
                <p>{note.text}</p>
                
                </div>  
                <div id = "buttons">
                <button className="edit" onClick = {()=>props.update(note.id)}>Edit</button>
                <button className = "delete" onClick = {()=>props.delete(note.id)}>Delete</button>
                </div>
               
            </div>
            </div>
           
        )
    });
    // console.log(arr);
    return (
        <>
          {arr}  
        </>
    )
}

export default NoteList
