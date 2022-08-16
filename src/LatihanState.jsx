import React from 'react';

const LatihanState = () => {


    // jadi didalam react.usestate ini isinya ada array, yg pertama tu state saat ini yg tong ada set nilai awalnya 0 itu sebenarnya tong ofor nilai itu ke nilai awal dari
    // fungsi usestate ini dan yg keduanya tu ada satu fungsi/method yg gunanya tu untuk update statenya. nah karna tong tau usestate ini array dng value ada dua. makanya tong
    // destruct saja keduanya ke dua buah variable di dalam tanda [stateawal, updatestate] <<==== lihat di contoh diabawah ini.
    // nah dengan begitu variabel updateNilai yg tong set ini isinya tu method untuk rubah state jadi tinggal tong pake di event listener saja
    // trus variable nilaiAwal itu nilai awal dari state yg tong set disini nilainya 0
    const [nilai, setNilai] = React.useState(0);

    
    
    

    return (
        <>
            <button onClick={()=>{
                setNilai(nilai + 1)
            }}>+ TAMBAH</button>
            {nilai}
            <button onClick={()=>{
                if(nilai > 0){
                    setNilai(nilai - 1)
                };
            }}>- KURANG</button>
        </>
    );
}

export default LatihanState;
