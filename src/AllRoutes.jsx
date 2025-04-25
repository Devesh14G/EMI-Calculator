import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomeLoan from './HomeLoan'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        {/* <Route path='/carloan' element={<CarLoan/>}/> */}
        <Route path='/' element={<HomeLoan/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes