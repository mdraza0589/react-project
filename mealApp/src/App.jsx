import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import React from 'react'

const App = () => {
  const [inputValue, setinputValue] = useState('')
  const [meal, setMeal] = useState([]);
  const [wait, setWait] = useState('');
  const [clickedItem, setClickedItem] = useState('')

  const hadleSearch = async () => {
    try {
      setWait("Fatching....!!");
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
      setMeal(res?.data?.meals)
    }
    catch (error) {
      console.log(error);
    }
    setWait('')
  }

  const handleChange = (e) => {
    setinputValue(e.target.value)
  }
  const handleView = (index) => {
    setClickedItem(meal[index])
  }
  useEffect(() => {
    console.log(clickedItem);

  }, [clickedItem])
  return (
    <div className='main-container'>
      <div className='pt-4 gap-3 flex justify-center'>
        <input onChange={handleChange} onKeyUp={hadleSearch} type="text" className='border p-2 pl-4 rounded-2xl text-white' placeholder='Enter Meal Name' />
        <button onClick={hadleSearch} className='w-[70px] bg-gray-300 flex justify-center items-center hover:bg-gray-200 text-center p-2 rounded-2xl font-bold cursor-pointer'>{wait.length > 0 ? <div className='w-4 h-4 rounded-full border-2  border-l-white animate-spin ' ></div> : <div>search</div>}</button>
      </div>
      <div className='text-white grid text-center grid-cols-3 gap-5 rounded-2xl'>
        {
          meal && meal.length > 0 ?
            meal.map((item, index) => {
              return <div key={index} className='p-2 overflow-hidden'>
                <img className='rounded-2xl' src={item.strMealThumb} alt="meal image" />
                <div>{item.strMeal}</div>
                <div className='my-2'>{item.strTags}</div>
                <button onClick={() => handleView(index)} className='border w-full rounded-2xl cursor-pointer py-2'>View Details</button>
              </div>
            })
            :
            <div className='text-center font-bold text-red-600 col-span-3 h-60 pt-10'>{wait.length > 0 ? <h1>{wait}</h1> : <h1>No data Available</h1>}</div>
        }
      </div>
      <div className={`w-[50%] h-[40%] p-2 rounded-2xl bg-red-300 fixed top-50 overflow-scroll left-50 ${clickedItem ? 'visible' : 'novisible'}`}>
        {clickedItem && <div>
          <div><span className='font-bold'>Name :- </span>{clickedItem.strMeal}</div>
          <div className='py-2'><span className='font-bold'>Famous for : -</span>{clickedItem.strTags}</div>
          <div><span className='font-bold'>Reciepy :- </span>{clickedItem.strInstructions}</div>
          <button onClick={() => setClickedItem('')} className='border absolute top-0 right-0 m-2 w-10 h-10 rounded-full cursor-pointer font-black'>X</button>
        </div>}
      </div>
    </div>
  )
}

export default App
