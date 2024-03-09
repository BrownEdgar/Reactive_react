import React, { useState } from 'react'
import Photo from '../../assets/images/photo.jpg'

import './App.css'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className='App'>
      <img src={Photo} alt="" />
      <div className="info">
        <h2>Roberto Sanches</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem corporis quia omnis ex perferendis possimus doloribus, quos rerum alias aperiam impedit cupiditate reiciendis, deleniti mollitia facere ea quas aspernatur. Omnis, commodi. Impedit eius aliquid, tempora enim, dignissimos voluptates ducimus reiciendis, suscipit eligendi soluta repudiandae porro deserunt recusandae id aspernatur?</p>

        <p className={isOpen ? "active" : 'hide'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem autem dolores veniam eos incidunt quae corporis excepturi voluptatem harum vitae ullam fugiat officia possimus, ex sunt inventore quas molestias. Nemo, magnam at! Maxime facere libero quia eveniet. Obcaecati, id et!</p>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "show less" : "show more"}
        </button>
      </div>
    </div>
  )
}
