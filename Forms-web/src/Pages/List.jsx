import React, { useEffect, useState } from 'react'

const List = ({data}) => {

    const [dataholder, setdataholder] = useState([])
    useEffect(()=>{
        console.log(data);
        setdataholder([...dataholder, {
            name:data.dataholder.name,
            fatherName :data.dataholder.fatherName,
            age:data.dataholder.age,
            cast:data.dataholder.cast,
            degree:data.dataholder.degree,
            cgpa:data.dataholder.cgpa
        }])
    },[data])

  return (
    <div>
        <ul>
            {dataholder.map((data, index)=>(
                <li key={index}>{data.name}</li>
            ))}
        </ul>
        hello
    </div>
  )
}

export default List