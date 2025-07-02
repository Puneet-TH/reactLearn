import React ,{ useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import{login, logout} from "./store/authSlice"
import './App.css'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        authService.getCurrentUser()
        .then((userData) => {
            if (userData) {
                dispatch(login({ userData }))
            } else {
                dispatch(logout())
            }
        })
        .finally(() => setLoading(false))
    }, [dispatch])
  
    return !loading ? (
        <div className='min-h-screen flex flex-wrap content-between bg-[url(./src/assets/darksouls3.jpg)] bg-cover'>
            <div className='w-full block'>
                <Header/>
                <main>
                    <Outlet />
                </main>
                <Footer/>
            </div>
        </div>
    ) : null
}

export default App
