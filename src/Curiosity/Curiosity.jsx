import React from 'react'

const Curiosity = ({image, fullname, name, Id}) => {
  return (
    <div className=''>
    <div className=''>
      <img className='' src={image} alt="" />
      <h3 className=''>{fullname}</h3>
      <h5 className=''> {name}</h5>
      <p className=''>{Id}</p>
    </div>

    </div>
  )
}

export default Curiosity