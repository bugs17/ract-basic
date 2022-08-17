import React from 'react';

const List = () => {

    // nah ini ibarat data yg tong ambil dari server.
    // jadi ceritanya data ini dari server trus data ini tong 
    // mau looping dia dalam DOM nya jadi ketika datanya bertambah elementya juga 
    // bertambah otomatis bgtu..
    const buahan = [
        'Mangga',
        'jeruk',
        'pepaya',
        'apel',
        'sirsak',
    ]

    return (
        <>
        <ul>

            {/* 
            nah untuk merender element berulang kali sesuai dengan jumlah datanya tong bisa gunakan 
            method map().. lalu di dalam map ada funtion yg return setiap data. map ini kaya foreach tpi map ini mendukung return sedangkan foreach tidak bisa
            makanya tong pake map()... ok jadi setiap kali di looping data dalam variabel array buahan maka akan return sebuah element dengan textCOntentnya di ambil dari
            setiap data yg ada didalam array. dan map ini mempunyai satu persyaratan wajib di react yaitu datanya harus mempunya unik key. nah tong kan tau
            kalo array tidak punya key kecuali object kan ada key:value.. nah di array ni sebenarnya tong bisa pake urutan index dari array itu sebagai key
            tpi itu bahaya kalau semisal tong mau tidak ada data yg duplikat, jadi mending tong pasang saja datanya sebagai key. biar datanya
            tidak ada yg duplikat, kalo ko tra percaya ko baca code baik" baru ko duplikat data dalam array di atas dan ko inspect element di browser untuk
            cek de punya pesan error.
            */}
            {buahan.map((buah)=>{
                return <li key={buah}>{buah}</li>
            })}    
              
        </ul>  
        </>
    );
}

export default List;
