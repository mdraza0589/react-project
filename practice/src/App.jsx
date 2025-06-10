import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div>
        {count}
      </div> <br />
      <button className='border p-2 cursor-pointer rounded-2xl' onClick={()=>setCount(count+1)}>increase</button>
    </div>
  )
}

export default App;

