import { useState } from 'react'
import { CheckoutForm } from './components'
import './App.css'

export default function App() {
  return (
    <>
      <h1 className='text-2xl font-bold'>LeaseLure</h1>

      <h2 className='text-xl font-semibold'>Pricing</h2>
      <CheckoutForm/>
    </>
  )
}
