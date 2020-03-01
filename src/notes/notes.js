import React, {Component} from 'react';
import Note from './note';

import classes from './notes.module.css';

class NoteData {
    constructor (text) {
        this.text = text;
    }
}

class notes extends Component {
    state ={
        notesTable: [" "]
    };

    addNote = () => {
        const test = new NoteData (prompt());
        console.log(test)
        this.setState({
            notesTable:[...this.state.notesTable, test]
        });
    }
    updateNote = (e) => {
      let array = this.state.notesTable;
      array[parseInt(e.target.id)] = new NoteData(prompt());
      this.setState({
        notesTable: array
      })
      console.log(this.state.notesTable);
    }

    render() {
        return (
        <div className={classes.notes__box}>
            {
              this.state.notesTable.map((item, i) => <Note addNote={this.addNote} updateNote={this.updateNote} text={item.text} key={i} id={i}/>
            )}
        </div>
        );
    }
}

export default notes;
