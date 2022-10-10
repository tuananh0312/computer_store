import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Homepage from '../pages/Homepage'
import { NoMatch } from '../pages/PageError'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Product from '../pages/Product'
<<<<<<< HEAD
=======
import CateLog from '../pages/CateLog'
>>>>>>> 6c4e8ef71f4b232713a84c3dce9ea04f81844b39
const Routerslink = () => {
    return (
        <>
        <Routes>
            <Route exact path='/' element={<Homepage />}/>
            <Route exact path='/Homepage' element={<Homepage />}/>
            <Route exact path='/product' element={<Product />}/>
            <Route exact path='*' element={<NoMatch />}/>
<<<<<<< HEAD
=======
            <Route exact path='/catelog' element={<CateLog />}/>
            <Route exact path='/SignIn' element={<SignIn />}/>
>>>>>>> 6c4e8ef71f4b232713a84c3dce9ea04f81844b39
        </Routes>
        </>
    )
}

export default Routerslink
<<<<<<< HEAD
const RoutesOutsite = () => {
    <>
        <Routes>
            <Route exact path='/register' element={<SignUp/>} />
            <Route exact path='/register' element={<SignIn/>} />
        </Routes>
    </>
}
=======
>>>>>>> 6c4e8ef71f4b232713a84c3dce9ea04f81844b39
