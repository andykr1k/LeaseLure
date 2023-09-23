import { useState } from 'react'
import { CTA, Chat, Error, FAQ, Header, Pricing, Settings, Testimonial } from './components'
import { SignIn } from './functions/auth'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import logo from './assets/icon-192-maskable.png'
import { Routes, Route } from 'react-router-dom'

import './App.css'

export default function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  });
  return (
    <>
      {
        user === null 
        ?
        <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-5'>
          <div className="flex items-center justify-center">
            <img alt='Purple House - LeaseLure Logo' src={logo} className='rounded-xl w-16'/>
            <h1 className='text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ml-4'>LeaseLure</h1>
          </div>
          <CTA/>
          <SignIn/>
          <Testimonial/>
          <FAQ/>
        </div>
        :
        <div className='h-100dvh'>
          <Header/>
          <Routes>
            <Route path='/' element={<Chat/>} />
            <Route path="/pricing"  element={<Pricing/>} />
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/*' element={<Error />}/>
          </Routes>
        </div>
      }
    </>
  )
}
