import React from 'react';
import { Routes, Route,Link } from 'react-router-dom';
import TodoList from './TodoList';
import About from './About';
import AboutTeam from './AboutTeam';
import Home from './Home';
import Form from './Form';
import Blog from './Blog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

const Main = () => {
    return (
        <div className='App'>
        {/* jadi cara penggunaan router kaya begini nanti tinggal import Routes, Route dan Link
        dan pada halaman index bungkus halam ini dengan BrowseRouter, jadi dibandingkan pake tag <a> langsung saja pake Link dari react-router-dom */}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/todolist">Todo List</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={<About/>}>
                    <Route path='team' element={<AboutTeam/>}/>
                    <Route path='Form' element={<Form/>}/>
                </Route>
                <Route path='blog' element={<Blog/>}/>
                {/* ini contoh dynamic url seperti meminta detail artikel product dan sebagainya */}
                <Route path='blog/:slug' element={<BlogDetails/>}/>
                <Route path='todolist' element={<TodoList/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes> 
        </div>
    );
}

export default Main;
