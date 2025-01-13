import React from 'react'
import seprator from '../assets/images/div1.png'
function PagesHeader({title}) {
  return (
    <div className="seprator">
        <h1>{title}</h1>
        <img src={seprator} alt="" />
    </div>
  )
}

export default PagesHeader
