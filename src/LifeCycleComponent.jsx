import React from 'react';



const LifeCycleComponent = () => {
    // lifecycle component ini ni dimana tong bisa bikin sebuah funtion diamana akan dieksekusi pada saat component di render
    // nah agar supaya mau menjalankan fungsi yg akan dipanggil setiap kali komponent dirender tong bisa pake yg namanya useEffect di react
    // nah di useEffect ini tong masukan sebuah funtion setiap kali komponen di render tetap funtion itu ikut dipangil juga biarpun delay juga de akan
    // tunggu pas dirender baru de di panggil. contohnya kaya dibawah ini..

    // kalo di dalam useEffect begini biar component di render lambat funtion ini juga de akan tunggu ketika component dirender baru de di panggil
    // de tidak akan jalan deluan sampai komponen di render baru de juga ikut di panggil. jdi kalo kaya bgni tong tidak perlu takut untuk akses elemtn
    // karna takut jng sampai tong akses tpi elementnya belum di render pasti tong dapat null karna funtionnya jalan lebih dulu sebelum
    // komponen di render, tpi kalo skrng de akan bersamaan saat komponen dirender baru funtion juga di panggil, tong coba getsatu element by id disini
    // biar tau bisa dapat elementnya atau tidak..
    // dan ini juga tong bisa set untuk kira" function mana yg mau di listen bgtu jadi kaya tong tentukan bgtu mana yg mau dipantau bgtu
    // contohnya disini tong coba bikin state dulu

    const [diclick, setDiclick] = React.useState(false);
    const [count, setCount] = React.useState(1);

    React.useEffect(()=>{
        console.log(document.getElementById('judul'))

    // nah kalau tong tambah di blakang kaya bgni itu artinya tong kasih tau kira" mana yg mau di pantau terus ni sama useefect.
    // nah kalau kaya bgni berarti cuma perubahan di count saja yg di pantau jadi setiap ada perubahan di count maka funtion dalam useefect akan ikut di
    // panggil juga, sedangkan state diclick tidak dipantau lagi.. tong bisa juga masukan dua" dalam list array ni supaya dua" dipantau statenya
    // pas tiba" ada perubahan distate pas dirender domnya useeffect juga panggil funtion yg ada didalamnya..

    // nah trus kalo kasih array kosong saja itu berarti funion hanya di panggil sekali saja pada saat pertama kali dirender 
    // jadi ketika ada perubahan di state lagi de tidak akan di panggil lagi. jdi itu bedanya. pake array kosong dan ada isinya, atau tidak pake array sama skali
    // biasanya array kosong di useefect ini di pake kalo mau fecthing data keserver. kan hanya ambil sekali saja to buat requestnya jadi pake array kosng bgni.
    },[diclick,])
 

    return (
        <div>
            <button onClick={()=>{
                setDiclick(true);
            }}>click me</button>
            <button onClick={()=>{
                setCount(count + 1);
            }}>Plush</button>
            <p>{count}</p>
            <h1 id='judul'>Hallo ini latihan laifecycle component</h1>
        </div>
    );
}

export default LifeCycleComponent;

