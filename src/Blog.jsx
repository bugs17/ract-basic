import React from 'react';
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <>
            <h1>Blog Page</h1>
            <ul>
                <li><Link to="content-1">content 1</Link></li>
                <li><Link to="content-2">content 2</Link></li>
                <li><Link to="content-3">content 3</Link></li>
                
            </ul>
            
        </>
    );
}

export default Blog;
