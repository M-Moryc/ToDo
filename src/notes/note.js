import React, {useState} from 'react';

import classes from './notes.module.css';

const Note = (props) => {

    const [content, setContent] = useState('');

    const handleChange = (e) => {
        props.updateNote(e.target.value);
    }

    return (
        <div className={classes.note}>
            <input className={classes.noteDisplay} onChange={handleChange} value={props.text}></input>
            <span onClick={props.removeNote}>-</span>
        </div>
    );
}
class AddNote extends React.Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addnote(this.state.content);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className={classes.addnote_box}>
                    <input type="text" onChange={this.handleChange} value={this.state.content} placeholder="Create a simple note..."/>
                    <button type="submit">Add new note</button>
                </form>
            </div>
        )
    }
}
export {Note, AddNote};
