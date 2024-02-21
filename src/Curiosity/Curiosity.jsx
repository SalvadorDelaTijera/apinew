import React from 'react'

const Curiosity = ({image, fullname, name, Id}) => {
  return (
    <>
    <div>
      <img src={image} alt="" />
      <h3>{fullname}</h3>
      <h5>{name}</h5>
      <p>{Id}</p>
    </div>

    </>
  )
}

export default Curiosity