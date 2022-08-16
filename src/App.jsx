

function App() {


  // ini funtion tong buat untuk event click di button di kode react di elemt button dibawah tu.. jadi pass button diclick
  // nanti funtion/method ini yg dipanggil isinya terserah tergantung apa yg ko mau buat disini sa cuma cek saja event nya jalan k tdk
  //  jadi sa cuma pasang alert saj kalo button diclick alert muncu dengan string didalamnya
  const handleClick = (pesan)=>{
    alert(pesan);
  };


  return (
    <>

      {/* begini cara handle event di react event globalnya di tulis di element sesuai nama eventnya disini tong
      pake event click makanya namanya onClick dan penulisan nama event pake pascalCase.. dan didalam tanda kurung itu ekpresi JS nya
      disini tong panggil function/method yg tong kasih nama handleClick, tong juga bisa langsung deklarasi fution didalam situ sekalian kalau mau tinggal pake arrow function saja */}
      {/* atau kalau ko mau pake argumen dalam funtion itu berarti ko tinggal bungkus saja dalam arrow funtion baru di dalamnya ko isi dengan funtion handleClick itu
      atau pake yg namanya bind jdi tinggal pake bind saja kalo tramau pake arrow funtion */}
      
      <button onClick={handleClick.bind(this,'pesan dari dalam argumen!')}>Click Me!</button>
    </>
  );
}

export default App;
