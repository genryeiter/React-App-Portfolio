import React from 'react';

export const Todos = ({todos, onRemove}) => {
    return (
        <div className="list-group">
            {todos.map(todo => (
                <a key={todo.id} href="#" className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <p className="mb-0 align-self-center fw-bold">{todo.title}</p>
                        <div className="">
                            <small>{todo.date}</small> &nbsp;
                            <button onClick={() => onRemove(todo.id)} type="button" className="btn btn-outline-success btn-sm">&#10003;</button>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}
