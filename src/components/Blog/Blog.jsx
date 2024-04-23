import React, { useState } from 'react'
import './Blog.css'

export default function Blog() {
  const [more, setMore] = useState(false)
  return (
    <div className='Blog'>
      <h1>Our Blog</h1>
      <div className='Container'>
        <div className='Container_div'>
          <span>ACXODJR | 01 AUG | 2019</span>
          <h2>Aliquam Hendrerit Mi Metus</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatum molestias eligendi exercitationem, quidem praesentium quos porro obcaecati reiciendis doloribus repellendus commodi, vel voluptas natus nam at aut necessitatibus...</p>
          {/* {
            more ? (
              {
                title: `<h2 className="active hide">Mikdhcre</h2>`,
                body:  `<p className="active hide">Consequuntur voluptatum molestias eligendi exercitationem</p>`
              }
            ) : null
          }
          <button onClick={() => setMore(!more)}>Read More</button> */}
        </div>
        <div className='Container_div'>
          <span>ACXODJR | 01 AUG | 2019</span>
          <h2>Mauris Vulputate Cras Amet</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatum molestias eligendi exercitationem, quidem praesentium quos porro obcaecati reiciendis doloribus repellendus commodi, vel voluptas natus nam at aut necessitatibus...</p>
          {/* {
            more ? (
              {
                title: `<h2 className="active hide">Mikdhcre</h2>`,
                body: `<p className="active hide">Consequuntur voluptatum molestias eligendi exercitationem</p>`
              }
            ) : null
          }
          <button onClick={() => setMore(!more)}>Read More</button> */}
        </div>
        <div className='Container_div'>
          <span>ACXODJR | 01 AUG | 2019</span>
          <h2>Suspendisse Nullam Sodales</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatum molestias eligendi exercitationem, quidem praesentium quos porro obcaecati reiciendis doloribus repellendus commodi, vel voluptas natus nam at aut necessitatibus...</p>
          {/* <h2 className="active hide">Mikdhcre</h2> */}
          <p className={more ? "active" : "hide"}>Consequuntur voluptatum molestias eligendi exercitationem</p>
          <button onClick={() => setMore(!more)}>Read More</button>
        </div>
      </div>
    </div>
  )
}
