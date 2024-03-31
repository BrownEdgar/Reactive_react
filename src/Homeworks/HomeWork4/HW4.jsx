import "./HW4.css"
import React, { useState } from 'react'

export default function HW4() {
  let count = 1
  const [more, setMore] = useState(false);
  const [moreInfo, setMoreInfo] = useState(null);
  const handleClick = (index) => {
    setMore(!more);
    setMoreInfo(index)
  }
  const [base, setbase] = useState([
    {
      id:1,
      buttonId:1,
      date: "O6 MARCH 2024",
      title: "Aliquam Hendrerit Mi Metus",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil est nesciunt, architecto fuga molestiae sit.",
      body2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit enim officiis odio ut harum. Soluta, vitae fugit!"
    },
    {
      id:2,
      buttonId: 1,
      date: "07 MARCH 2024",
      title: "Mauris Vulputates Cras Amet",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil est nesciunt, architecto fuga molestiae sit.",
      body2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit enim officiis odio ut harum. Soluta, vitae fugit!"
      
    },
    {
      id:3,
      buttonId: 1,
      date: "O8 MARCH 2024",
      title: "Suspendisse Nullam Sodales",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil est nesciunt, architecto fuga molestiae sit.",
      body2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit enim officiis odio ut harum. Soluta, vitae fugit!"
    }
  ]);

  
  return (
    <div className='HW4'>
      <ul className='HW4__list'>
        {
          base.map((elem,index) => {
           return (
             <li className='HW4__list_li' key={elem.id}>
               <p>AXONVIP | {elem.date}</p>
               <h3>{elem.title}</h3>
               <p>{elem.body}</p>
               <p className={moreInfo === index && more ? "active" : "hide"}>{elem.body2}</p>
               <button className="HW4__list_button"  onClick={() => handleClick(index)} >
               {moreInfo === index && more ? "CLOSE" : "READ MORE"}
               </button>
             </li>
           )
          })
        }
      </ul>
      
    </div>
  )
}
