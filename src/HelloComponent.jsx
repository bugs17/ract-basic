


import React from 'react';

const HelloComponent = (props) => {
    return (
        <>
        {/* gara penulisan kaya bgni cocok skali kalau tong mau buat komponen yg ada punya children di dalamnya yg seperti div h1 button juga.
        pokoknya yg ada punya konten didalamnya */}
          <h1>{props.children}</h1>  
        </>
    );
}

export default HelloComponent;
