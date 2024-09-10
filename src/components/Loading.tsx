import React from 'react'
import './loading.css'
import { div } from 'framer-motion/client'

export const Loading = () => {
  return (
    <div className='grid place-content-center h-screen ' ><div className="loader">loading...</div></div>
  )
}
