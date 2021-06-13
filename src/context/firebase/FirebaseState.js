import React, {useReducer} from 'react'
import axios from 'axios'
import {FirebaseContext} from "./FirebaseContext"
import {FirebaseReducer} from "./FirebaseReducer"
import {ADD_TODO, SHOW_LOADER, FETCH_TODOS, REMOVE_TODO} from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
    const initialState = {
        todos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(FirebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchTodos = async () => {
        showLoader()

        const res = await axios.get(`${url}/todos.json`)

        const payload = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })
        dispatch({type: FETCH_TODOS, payload})
    }

    const addTodo = async title => {
        const todo = {
            title, date: new Date().toJSON()
        }
        try {
            const res = await axios.post(`${url}/todos.json`, todo)
            console.log('add todo', res.data)
            const payload = {
                ...todo,
                id: res.data.name
            }
            dispatch({type: ADD_TODO, payload})
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const removeTodo = async id => {
        dispatch({type: REMOVE_TODO, payload: id})
        await axios.delete(`${url}/todos/${id}.json`)
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, addTodo, removeTodo, fetchTodos, loading: state.loading, todos: state.todos
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}
