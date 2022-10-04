import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Homepage from '../pages/Homepage'
import { NoMatch } from '../pages/PageError'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Product from '../pages/Product'
const Routerslink = () => {
    return (
        <>
        <Routes>
            <Route exact path='/' element={<Homepage />}/>
            <Route exact path='/Homepage' element={<Homepage />}/>
            <Route exact path='/product' element={<Product />}/>
            <Route exact path='*' element={<NoMatch />}/>
        </Routes>
        </>
    )
}

export default Routerslink
const RoutesOutsite = () => {
    <>
        <Routes>
            <Route exact path='/register' element={<SignUp/>} />
            <Route exact path='/register' element={<SignIn/>} />
        </Routes>
    </>
}