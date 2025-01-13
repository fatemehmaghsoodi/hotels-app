import React from 'react'

function PageInfo({children, onClose}) {
  return (
    <div className="pageInfo">
        <div>
            <span>{children}</span> 
            <button onClick={onClose}>بستن</button>
        </div>
    </div>
  )
}

export default PageInfo
