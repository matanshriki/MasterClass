import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
    <ul className="link-bar">
        {/* <li><Link to="/" className="nav-link">Home Page</Link></li> */}
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/course:id" >Course</Link></li>
    </ul>
)