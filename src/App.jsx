import { useState } from 'react'
import { FAQ, Header, Pricing, Testimonial } from './components'
import { SignIn } from './functions/auth'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import logo from './assets/icon-192-maskable.png'
import './App.css'

export default function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
      // const uid = user.uid;
    } else {
      setUser(null)
    }
  });
  return (
    <>
      {
        user === null 
        ?
        <div className='space-y-5'>
          <div className="flex items-center justify-center">
            <img src={logo} className='rounded-xl w-16'/>
            <h1 className='text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ml-4'>LeaseLure</h1>
          </div>
          <SignIn/>
          <Testimonial/>
          <FAQ/>
        </div>
        :
        <>
          <Header/>
          <Pricing/>
        </>
      }
    </>
  )
}
