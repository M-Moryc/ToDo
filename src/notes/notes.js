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
        notesTable: []
    };
 
    addNote = () => {
        const test = new NoteData (prompt());
        console.log(test)
        this.setState({
            notesTable:[...this.state.notesTable, test]
        });
    }

    render() {
        return (
        <div className={classes.notes__box}>
            <Note addNote={this.addNote} />
        </div>
        );
    }
}

export default notes;