import React, { useEffect, useState } from 'react'
import List from './Pages/List';

const App = () => {

  const [dataholder, setdataholder] = useState([]);
  const [data, setdata] = useState({
    name:"",
    fatherName :"",
    age:"",
    cast:"",
    degree:"",
    cgpa:""
  });

  function handler(e){
    e.preventDefault();
    setdataholder([...dataholder, {
      name:data.name,
      fatherName :data.fatherName,
      age:data.age,
      cast:data.cast,
      degree:data.degree,
      cgpa:data.cgpa
    }]);
    console.log(dataholder);
  }

  function updateValues(e){
    setdata({...data, [e.target.name] : e.target.value});
  }
  return (
    <div>
      <form onSubmit={handler}>
        <input type='text' placeholder='Name' name='name' onChange={updateValues}/>
        <input type='text' placeholder='fatherName' name='fatherName' onChange={updateValues}/>
        <input type='text' placeholder='Age' name='age' onChange={updateValues}/>
        <input type='text' placeholder='Cast' name='cast' onChange={updateValues}/>
        <input type='text' placeholder='Degree' name='degree' onChange={updateValues}/>
        <input type='text' placeholder='CGPA' name='cgpa' onChange={updateValues}/>
        <button>Submit</button>
      </form>
      <hr/>
      <ul>
        {dataholder.map((val, index)=>(
          <li key={index}>{val.name}</li>
        ))}
      </ul>
      {/* <List data={{data}}/> */}
    </div>
  )
}

export default App