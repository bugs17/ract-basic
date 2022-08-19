import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const About = () => {
    return (
        <>
            <h1>Halaman About!!!!</h1>
            <ul>
                <li><Link to="/about/team">About Team</Link></li>
                <li><Link to="/about/form">form</Link></li>
            </ul>
            <Outlet/>
        </>
    );
}

export default About;
