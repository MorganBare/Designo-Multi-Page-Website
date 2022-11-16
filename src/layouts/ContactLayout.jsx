import React from 'react'
import { FooterContact } from '../components'

export default function ContactLayout({ children }) {
  return (
    <>
        {children}
        <FooterContact/>
    </>
  )
}
