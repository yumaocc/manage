import App from '../App'
import Edit from "../pages/Edit";
import List from "../pages/List";
import Login from "../pages/Login";
import Means from "../pages/Means";
import Register from "../pages/Register";
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'

import React from 'react'

export default function BaseRouter() {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='list' element={<List />}></Route>
                    <Route path='edit' element={<Edit />}></Route>
                    <Route path='means' element={<Means />}></Route>
                </Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register  />}></Route>

            </Routes>
        </Router>
    </>
  )
}
