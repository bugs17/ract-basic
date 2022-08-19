import React from 'react';
import { Routes, Route,Link } from 'react-router-dom';
import TodoList from './TodoList';
import About from './About';
import Home from './Home';

const Main = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/todolist">Todo List</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='todolist' element={<TodoList/>}/>
            </Routes> 
        </>
    );
}

export default Main;
