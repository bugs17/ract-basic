import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const urlParams = useParams();
    console.log(urlParams);
    
    return (
        <>
           <h1>Hallo ini adalah detail {urlParams.slug}</h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod perspiciatis, veritatis laborum velit quas ullam autem commodi doloremque eius expedita sit quia eligendi dicta ratione officia asperiores ad aspernatur saepe? Harum id quis sed nihil natus illo voluptatem officiis beatae soluta quam labore temporibus, et nulla distinctio! Necessitatibus, sapiente facere.</p> 
        </>
    );
}

export default BlogDetails;
