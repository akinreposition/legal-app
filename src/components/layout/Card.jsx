import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='wrapper'>
        <div className='login-layout'>
            <main>{ children }</main>
        </div>
    </div>   
  )
}

export default Card