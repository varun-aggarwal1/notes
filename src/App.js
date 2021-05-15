import React, { Component } from 'react'
import InputText from './components/inputText';
import NoteList from './components/NoteList';
import './Views/style.css'
import Navbar from './components/navbar';

export class App extends Component {
  
 constructor(props) {
   super(props)
 
   this.state = {
      notes:[

      ],
      
   }
   this.newNote = this.newNote.bind(this);
  //  this.update = this.update.bind(this);
   this.deleted = this.deleted.bind(this);
   this.updatedNotes = this.updatedNotes.bind(this);
 }

 newNote(obj){
 
  this.setState(prevState => {
    return (
      {
        notes: [obj, ...prevState.notes]
      }
    )
  });
  
 }

 updatedNotes(obj){

  this.setState({
    notes: obj
  });
 }


 deleted(id){
  const deletedNote = this.state.notes.filter(note=> note.id!==id);
  this.setState({
    notes: deletedNote
  });
 }

 
  render() {
    console.log(this.state.notes);
    return (
      <>
       <Navbar />
        <div className = "main-container">
          <InputText newNote = {this.newNote} notes = {this.state.notes} deleted ={this.deleted} updatedNotes = {this.updatedNotes}/>
        </div>
     </>
    
      
    );
  }
}

export default App;
