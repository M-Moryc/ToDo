import React, {Component} from 'react';
import {Note, AddNote} from './note';

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

    addNote = (data) => {
        let newNote = new NoteData(data);
        this.setState({
            notesTable:[...this.state.notesTable, newNote]
        });
    }
    updateNote = (index, data) => {
      const array = [...this.state.notesTable];
      array[parseInt(index)] = new NoteData(data);
      this.setState({
        notesTable: array
      })
    }
    removeNote = (index) => {
      const array = [...this.state.notesTable];
      array.splice(parseInt(index), 1);
      this.setState({
        notesTable: array
      });
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                notesTable : this.userData.notesTable
            })
        } else {
            this.setState({
                notesTable: [" "]
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        return (
        <div>
          <AddNote addnote={this.addNote}/>
          <div className={classes.noteslist}>
              {
                this.state.notesTable.map((item, i) =>
                <Note updateNote={(data) => this.updateNote(i, data)}
                      removeNote={() => this.removeNote(i)}
                      text={item.text}
                      key={i}
                />
              )}
          </div>
        </div>
        );
    }
}

export default notes;
