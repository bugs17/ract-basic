import React from 'react';


// nah disini tong akan latihan bgmna caranya berurusan dengan form kalau di react, seperti biasanya tong mau ambil
// value ketika submit form tong mau ambil value yg user inputkan tong mau tangkan ceritanya.. bgni caranya
const Form = () => {

    // nah ingat di react ada yg namanya useRef to nah tong bisa pake useRef ini untuk ambil valuenya
    // dan nanti tong bisa pasang atribut ref di element html input yg tong mau ambil de punya value
    //
    const namaRef = React.useRef(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
        // nah trus cara ambil valuenya kaya bgni ni
        const nama = namaRef.current.value;

        // dengan demikian skrng value dari form input tong su tangkap dan su ada
        // dalam variable nama..
        console.log(nama);
    }

    return (
        <>
        <p>Latihan form pada react</p>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nama">nama: </label>
                {/* ini ada ref disini yg tong pasing ke useRef diatas otomatis valuenya sudah ada didalam variabel
                namaRef yg tong buat to.. */}
                <input type="text" name='nama' ref={namaRef} />
            </div>
                <button type='submit'>Kirim</button>

        </form>
            
        </>
    );
}

export default Form;
