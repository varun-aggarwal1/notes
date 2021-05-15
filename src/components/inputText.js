import React from 'react';
import uuid from 'uuid/dist/v1';
import NoteList from './NoteList'
// let i = 0;

class inputText extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            id: "",
             title: "",
             text: "",
             
        }
        this.handleChange = this.handleChange.bind(this);
        this.addNote = this.addNote.bind(this);
        this.update = this.update.bind(this);
         this.delete = this.delete.bind(this);
    }

    handleChange(e){
        const {value, name} = e.target;
        this.setState({

            [name]: value
        });
    }

    addNote(e, obj){
         e.preventDefault();
         const {newNote,updatedNotes} = this.props;
         const note = {
             ...this.state
         };
         
        
        const index = this.props.notes.findIndex(note =>note.id===obj.id)
       
        if(index===-1){
            const n = {...note, id:uuid()};
            //console.log(n);
            newNote(n);  
            this.setState({
                id: "",
                title: "",
                text:""
            });
            return;
        }
        
        const noteArray = this.props.notes.map((note) =>{
            if(note.id===obj.id){
                const newObj = {id: note.id, title: this.state.title, text: this.state.text };  
                return newObj;
            }
            return note;
        });

        updatedNotes(noteArray);
        this.setState({
            id: "",
            title: "",
            text:""
        });
        return;

       
        // console.log(this.props.notes);
    }

    delete(id){
        const {deleted} = this.props;
        console.log(id);
        deleted(id);
    }

    update(id){

        // console.log(typeof(id));
        

       const editedNote = this.props.notes.filter(note=> note.id===id);
       const [num1] = editedNote;
       console.log(num1);
        this.setState({
            id:   num1.id,
            title: num1.title,
            text: num1.text
        });

     }



    render(){
   // const {title,text} = this.state;
    //console.log(this.props.notes);
    // console.log(this.props);
    return (
        <>
        <div className = "Input">
            <form onSubmit = {(e)=> this.addNote( e, this.state)}>
                <input  name = "title" type ="text" placeholder = "Title" onChange = {this.handleChange} value = {this.state.title} required></input>
                <br/>
                <textarea  name = "text" type ="text" placeholder = "Description" onChange = {this.handleChange} value = {this.state.text} required></textarea>
                <br />
                {/* <button onClick = {() => this.props.newNote(this.state)} >Create</button> */}
                <button >Create</button>
            </form>

        </div>
        <div className = "Note-List">
        <NoteList list = {this.props.notes} update = {this.update} delete = {this.delete}  />
        </div>
            
        </>
    )
    }
    
}

export default inputText

