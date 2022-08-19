import React from 'react';


const Image = () => {
    return (
        <>
        {/* cara import gambar begini saja react otomatis sudah tau kalau gambarnya di taruh di folder public */}
           <img src="/logo.png" alt="Logo" /> 
        </>
    );
}

export default Image;
