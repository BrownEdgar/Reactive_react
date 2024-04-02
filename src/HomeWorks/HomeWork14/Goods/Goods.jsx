import React from 'react'
import "./Goods.scss"
export default function Goods({ goods }) {
  return (
    <div className='Goods'>
      <div className="Goods__sofa">
        <img src={goods.image} alt="" />
        <div className="Goods__content">
          <div className="Goods__textAndPrice">
            <p>{goods.title}</p>
            <p>{goods.price}</p>
          </div>
          <div className="Goods__desc">
            <p>{goods.desc}</p>
          </div>


        </div>
      </div>
    </div>
  )
}
