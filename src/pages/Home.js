import React, {Fragment, useContext, useEffect} from 'react'
import {Form} from "../components/Form"
import {Todos} from "../components/Todos"
import {Loader} from "../components/Loader"
import {FirebaseContext} from "../context/firebase/FirebaseContext"

export const Home = () => {
    const {loading, todos, fetchTodos, removeTodo} = useContext(FirebaseContext)

    useEffect(() => {
        fetchTodos()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <Form/>
            <hr/>
            {loading ? <Loader/> : <Todos todos={todos} onRemove={removeTodo}/>}
        </Fragment>
    )
}
