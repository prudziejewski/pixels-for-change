import React from 'react'
import "./Pixel.scss";
import { Link } from 'react-router-dom';
const Pixel = ({arry}) => {
  
const handleClick = (event) => {
  // event.preventDefault()
  console.log(event.target.id)
}
  
  return (
    <Link className="pixel__link" to={`/company/${arry.charityid}`} onClick={handleClick}>
      <div className='pixel' id={arry.charityid} style={{background: `${arry.color}`, color: `${arry.textColor}`}}>{arry.text} </div>
    </Link>
  )
}

export default Pixel;