import React from 'react'
import { Footer } from '../components'

export default function MainLayout({ children }) {
  return (
    <>
        {children}
        <Footer/>
    </>
  )
}
