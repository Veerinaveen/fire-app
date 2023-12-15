import React from 'react'

const Footer = ({ love }) => {
    
  return (
    <div className='footer'>
      <p>{love} list {love === 1 ? "item" :"items"}</p>
    </div>
  )
}

export default Footer
