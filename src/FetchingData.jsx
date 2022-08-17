import React from 'react';

const FetchingData = () => {

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    // nah ingat karna tong mau ambil data dari server jadi tong pake useEfect trus kasi argument array kosong
    // supaya de di eksekusi sekali saja pertama kali di render

    React.useEffect(()=>{
         
        async function getData(){
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs')
            
            const response = await request.json()
            setData(response)
            setLoading(false)
        }

        getData();
        
        
    }, [])

    return (
        <>
           <p>Latihan data fetching atau mengambil data dari server backend</p>

            {/* ini sama saja dengan if statement itu cara bacanya tu
            jika loading tampilkan element p else baru tampilkan yg setelah titik dua : nah kalau mau cek jika tidak loading berarti tambahkan tanda seruh di depan
            variable loading.. ko pasti su tau ekspresi ini. sa juga luoa de pu nama apa tpi bisa inline code kaya bgni */}
           {loading ? <p>Loading...</p> :
            <ul>
                {data.map((item)=>{
                   
                   return <>
                   <li key={item.id}>{item.title}</li>
                   <a href={item.url}>Go to news..</a>
                   </>


                })}
            </ul> 
            }
        </>
    );
}

export default FetchingData;
