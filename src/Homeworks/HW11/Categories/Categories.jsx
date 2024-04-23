import React from 'react'
import Title from "../../../examples/utils/UI/Title/Title"
// import Image from '../../../../public/images'
import './Categories.scss'
export default function Categories() {
  return (
    <div className='Categories'>
      <Title title="Categories" center variant={'light'}/>
      <div className="Categories__groups">
        <div className="Categories__group">
          <img src="../../../../public/images/vases(1).jpg" alt="" />
        </div>
        <div className="Categories__group"></div>
        <div className="Categories__group"></div>
        <div className="Categories__group"></div>
        <div className="Categories__group"></div>
      </div>
    </div>
  )
}
