import React from 'react'

const Curiosity = ({image, fullname, name, Id}) => {
  return (
    <div className=''>
    <div className=''>
      <img className='' src={image} alt="" />
      <p className=''>{fullname}</p>
      <p className='font-serif"'> {name}</p>
      <p className='text-sm text-slate-700'>{Id}</p>
    </div>

    </div>
  )
}

export default Curiosity