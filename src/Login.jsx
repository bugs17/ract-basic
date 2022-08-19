import React from 'react';
import {  useNavigate } from 'react-router-dom';





// coba beberapa simulasi ketika login funtion berhasil lalu cara meredirect bgmna.. nah disini menggunakan useNavigate() dari react-router-dom
// masukan dalam variabel redirect lalu arahkan ke link tujuan..
// ini bukan fokus ke fungsi login. cuma melihat bgmna skenario cara meredirect user kesebuah halaman 
const Login = () => {
    const redirect = useNavigate()
    const [message, setMessage] = React.useState('')

    const handleLogin = (e)=>{
        e.preventDefault()
        const checkLogin = true
        if(checkLogin){
            redirect('/blog')
        }else{
            setMessage('Login gagal')
        }
    }
    
    return (
        <>
         <h1>Halaman Login testing....</h1>
        {message ? <p>{message}</p> : ''}
         <form onSubmit={handleLogin}>
            <label htmlFor="username">
                USERNAME : 
                <input type="text" name='username' />    
            </label>    
            <label htmlFor="password">
                PASSWORD : 
                <input type="password" name='password' />    
            </label>
            <button type='submit'>Login</button>    
        </form> 
        </>
    );
}

export default Login;
