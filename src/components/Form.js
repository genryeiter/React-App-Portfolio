import React, {useState, useContext} from 'react';
import {AlertContext} from '../context/alert/AlertContext';
import {FirebaseContext} from "../context/firebase/FirebaseContext"

export const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            firebase.addTodo(value.trim()).then(() => {
                alert.show('ToDo added', 'success')
            }).catch(() => {
                alert.show('Something went wrong :(', 'danger')
            })
            setValue('')
        } else {
            alert.show('ToDo can not be empty')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text"
                       className="form-control"
                       placeholder="Write new Todo"
                       value={value}
                       onChange={e => setValue(e.target.value)}/>
            </div>
        </form>
    )
}
