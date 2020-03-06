import React from 'react';

import classes from './notes.module.css';

const note = (props) => {
    return (
        <li className={classes.note}>
            <div onClick={props.updateNote} id={props.id}>
                <p>{props.text}</p>
            </div>
            <div onClick={props.removeNote}>-</div>
        </li>
    );
}
export default note;
