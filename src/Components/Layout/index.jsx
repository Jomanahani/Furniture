import React from 'react'

const Layout = ({ children ,className}) => {
  return (
    <section className={`p-20 max-w-full mx-auto ${className}`}>{ children }</section>
  )
}

export default Layout