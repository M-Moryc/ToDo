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
    updateNote = (index) => {
      let array = this.state.notesTable;
      array[parseInt(index)] = new NoteData(prompt());
      this.setState({
        notesTable: array
      })
      console.log(this.state.notesTable);
    }
    removeNote = (index) => {
      console.log("removed");
      let array = this.state.notesTable;
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
        <div className={classes.notes__box}>
        <ul>
            {
              this.state.notesTable.map((item, i) =>
              <Note addNote={this.addNote}
                    updateNote={() => this.updateNote(i)}
                    removeNote={() => this.removeNote(i)}
                    text={item.text}
                    key={i}
              />
            )}
          </ul>
            <div className={classes.add_note_button} onClick={this.addNote}>+</div>
        </div>
        );
    }
}

export default notes;
