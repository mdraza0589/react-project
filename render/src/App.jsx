import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [items,setItems]=  useState([])
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_start=3`)
      setItems(res.data)
    }
    fetchData();
  }, [])
  
  console.log(items);

  return (
    <div>
      {
        items.map((item,index)=>(
          <h1 key={index}>{item.id}</h1>
        ))
      }
    </div>
  )
}

export default App

