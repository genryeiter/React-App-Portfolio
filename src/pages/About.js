import React from 'react';
import {NavLink} from 'react-router-dom'


export const About = () => (
    <div className="p-5 bg-light rounded-3 mt-5">
        <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">This is Test React App0 About page</h1>
            <p className="col-md-8 fs-4 mt-4 mb-4">My name is German Eiter. If you see this text, it means that I was
                engaging basics of the React :0 <br/> <strong>Used instruments: </strong>React, JSX, SASS, Bootstrap</p>
            <NavLink className="btn btn-primary btn-dark fw-bolder" to="/" type="button">Back to Home Page</NavLink>
        </div>
    </div>
)
