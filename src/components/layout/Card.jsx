import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='wrapper'>
        <div className='layout'>
            <main>{ children }</main>
        </div>
    </div>   
  )
}

export default Card