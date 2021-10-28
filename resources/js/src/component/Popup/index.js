import React from 'react'

const index = ({ children,className }) => {
  return (
    <div className={`popup ${className ? 'd-block' : 'd-none'}`}>
      {children}
    </div>
  )
}

export default index
