import React from 'react'
import Navbar from './Navbar'

const App = ({ children }) => {
  return (
    <div
      className='App text-white'
      style={{ backgroundColor: '#1C2833', minHeight: '100vh' }}>
      <Navbar />
      <div className='container mx-auto'>{children}</div>
    </div>
  )
}

export default App
