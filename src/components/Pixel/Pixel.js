import React from 'react'
import "./Pixel.scss";
const Pixel = ({arry, companyDetails}) => {
    console.log(companyDetails)
  
    return (
    <div className='pixel' style={{background: `${arry.color}`}}>{arry.text}</div>
  )
}

export default Pixel;