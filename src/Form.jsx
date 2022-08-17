import React from 'react';


// nah disini tong akan latihan bgmna caranya berurusan dengan form kalau di react, seperti biasanya tong mau ambil
// value ketika submit form tong mau ambil value yg user inputkan tong mau tangkan ceritanya.. bgni caranya
const Form = () => {

    // // nah ingat di react ada yg namanya useRef to nah tong bisa pake useRef ini untuk ambil valuenya
    // // dan nanti tong bisa pasang atribut ref di element html input yg tong mau ambil de punya value
    // //
    // const namaRef = React.useRef(null)

    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     // nah trus cara ambil valuenya kaya bgni ni
    //     const nama = namaRef.current.value;

    //     // dengan demikian skrng value dari form input tong su tangkap dan su ada
    //     // dalam variable nama..
    //     console.log(nama);
    // }

    // return (
    //     <>
    //     <p>Latihan form pada react</p>

    //     <form onSubmit={handleSubmit}>
    //         <div>
    //             <label htmlFor="nama">nama: </label>
    //             {/* ini ada ref disini yg tong pasing ke useRef diatas otomatis valuenya sudah ada didalam variabel
    //             namaRef yg tong buat to.. */}
    //             <input type="text" name='nama' ref={namaRef} />
    //         </div>
    //             <button type='submit'>Kirim</button>
    //     </form>

            
    //     </>
    // );



    // nah cara yg diatas tu salah saatu cara yg ada tpi itu terlalu JS skali nah kali ini ada cara yg lain
    // tong pake gayanya react. kalo yg di atas tong pake useRef. kalo kali ini tong bikin useState

    // nilai default dari state yg nanti mau disi dengan value tong set dng empty string dulu.
    const [nama, setNama] = React.useState('')


     const handleSubmit = (e)=>{
            e.preventDefault()
           console.log(nama)
        }
    

    return (
        <>
        <p>Latihan form pada react</p>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nama">nama: </label>
                {/* nah kalo di cara sebelumnya tong pake atribut ref pada element input kali ini tong pake
                method onChange lalu tong kasih function seperti biasa.. trus kalo di cara ini tong harus set atribut value di element ke statenya kaya dibawah ni
                 */}
                <input type="text" name='nama' value={nama} onChange={(event)=>{
                    // valuenya ada didalam event.target.value
                    // jadi tong tinggal set statenya saja pake setNama
                    if(event.target.value !== ''){
                        setNama(event.target.value)
                    }
                }} />
            </div>
                <button type='submit'>Kirim</button>
        </form>
        

            
        </>
    );
}

export default Form;
