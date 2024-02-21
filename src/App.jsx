import React, { useEffect, useState } from 'react'
import Curiosity from './Curiosity/Curiosity';

const App = () => {
const [dataMars, setDataMars] = useState()

const mars = async ()=>{
  let res = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=9icajt1S0iZCKJqlWML0OBh0ON8x7eZ7RXIuRZ55');
  res = await res.json();
  setDataMars(res);
};

useEffect(()=>{
mars();
},[]);
//console.log(dataMars);

  return (
    <>
      {
        dataMars?.photos?.map((photo)=>{
          return(
           <Curiosity  image={photo.img_src} fullname={photo.camera.full_name} name={photo.camera.name} Id={photo.camera.id}/>
          )

        })
      }

    </>
  )
}

export default App

/**
 *
 *    <div>
              <img src={photo.img_src} alt="" />
              </div>
              <h4>{photo.camera.full_name}</h4>
              <li>{photo.camera.name}</li>
              <li>Id: {photo.camera.id}</li>
 */