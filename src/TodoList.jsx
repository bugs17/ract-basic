import React from 'react';

const TodoList = () => {

  const [todos, setTodos] = React.useState(''); // state awal dari inputan.. disni nanti yg mengontrol form input.
  const [datas, setData] = React.useState([]); // disni empty array karna memang mau di tampung data yg di masukan dan di map di element li.
  const [edit, setEdit] = React.useState({}); // disini empti object karna memang datanya berbentuk object ada id dan datanya.
  const [cekTodos, setCekTodos] = React.useState('') // untuk memberikan pesan kalau form tidak boleh kosong
  
  //ini untuk generate id karna datanya tidak memiliki unik id jdi tong pake milisecond jadi unik id
  const generateID = ()=>{
    return Date.now()
  }

  // funtion handle submit.
  const handleSubmit = (e)=>{
    e.preventDefault();
    
    // edit
    if(edit.id){
        const dataBaru = {
          ...edit,
          todos: todos,
        }
        const simpandataEdit = datas.findIndex((data)=>{
          return data.id === edit.id;
        })
        
        const finalData = [...datas]
          finalData[simpandataEdit] = dataBaru;
          setData(finalData);
          setTodos('')
          handleBatal()
          setCekTodos('')


    }
    // tong kasih validasi kalau submit data kosong tidak akan di tempung ke dalam state.
    else if(todos !== ''){
     setData([...datas, {
      id: generateID(),
      todos: todos,
      done: false,
    }
  ]);
    setTodos('')
    setCekTodos('')
    }else if(todos === '') {
      setCekTodos('Aktifitas tidak boleh kosong!!')
    }
  }

  // function handle hapus.
  const handleHapus = (id) =>{
    // ok jadi di dlam func ini tong seperti bikin array baru tpi didalamnya tidak termasuk data yg sudah kena filter.
    // nah yg kena filter itu yg nanti di hapus.. id di argumen handleHapus ini di dapat dari onclick di button di bawah yg di bind.
    // lalu di cocokan dengan id yg ada di dalam state datas. jadi ibaratnya tong keluarkan id yg di pilih dari dalam array.
    const filterData = datas.filter((data)=>{
      return data.id !== id
    });
    setData(filterData);
    handleBatal()  
    
  }

    // funtion handle edit.
    const handleEdit = (data)=>{
      
      setTodos(data.todos)
      setEdit(data);
    }

    // handle batal
    const handleBatal = ()=>{
      setEdit({})
      setTodos('')
    }

   function handleDone(data){
    const updateData = {
      ...data,
      done: data.done ? false : true,
    }
    const simpandataEdit = datas.findIndex((datasekarang)=>{
      return datasekarang.id === data.id;
    })
    const finalData = [...datas]
    finalData[simpandataEdit] = updateData;
    setData(finalData)
    console.log(datas)
   }

    return (
        <>
          <h1>Todo List...</h1> 
          {cekTodos && <p>{cekTodos}</p> }
          <form onSubmit={handleSubmit}>
            <label htmlFor="todo">
              
              <input value={todos}type="text" onChange={(event)=>{
                setTodos(event.target.value)
              }} name='todo' placeholder='masukan aktifitas anda' />  
            </label>
            <button type='submit'>
            {edit.id ? 'Simpan' : 'Add' }  
            </button>
            {edit.id &&
               <button onClick={handleBatal}>Batal</button>
            }

            </form> 
            {datas.length > 0 ? 
           (<ul>
            {datas.map((data)=>{
              return ( 
              <li key={data.id}>
                <input type="checkbox" checked={data.done} onChange={handleDone.bind(this, data)} />
                {data.done ? '(Selesai) ' : ''}
                {data.todos}
               <button onClick={handleEdit.bind(this, data)}>Edit</button>
               <button onClick={handleHapus.bind(this, data.id)}>Hapus</button>
              </li>
              
              )  
            })}
          
          </ul>)
            : (<p>belum ada data</p>)
          }
        </>
    );
}

export default TodoList;
