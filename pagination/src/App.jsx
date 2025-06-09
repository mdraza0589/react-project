// import Pagination from './component/Pagination'
import './App.css'
import React, { Suspense } from 'react'
const Lazy = React.lazy(() => import('./component/Pagination'))
function App() {
  return (
    <>
      <Suspense fallback={<div className='loadingText'>Loading....</div>}>
        <Lazy />
      </Suspense>
    </>
  )
}

export default App
