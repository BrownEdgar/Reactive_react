import React, { useState } from 'react'
import './App.scss'

export default function App() {
  const [data, setdata] = useState([
    {
      id: 1,
      date: "O6 MARCH 2024",
      title: "Aliquam Hendrerit Mi Metus",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil est nesciunt, architecto fuga molestiae sit.",
      body2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit enim officiis odio ut harum. Soluta, vitae fugit!"
    },
    {
      id: 2,
      date: "07 MARCH 2024",
      title: "Mauris Vulputates Cras Amet",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil est nesciunt, architecto fuga molestiae sit.",
      body2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit enim officiis odio ut harum. Soluta, vitae fugit!"
    },
    {
      id: 3,
      date: "O8 MARCH 2024",
      title: "Suspendisse Nullam Sodales",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil est nesciunt, architecto fuga molestiae sit.",
      body2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit enim officiis odio ut harum. Soluta, vitae fugit!"
    }
  ])
  const [currentId, setCurrentId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    if (currentId === id) {
      setIsOpen(!isOpen);
      return;
    }
    setIsOpen(true);
    setCurrentId(id);
  }

  return (
    <div className='App'>
      <h1 className='App__title'>Our Blog</h1>
      <div className="App__content">
        {data.map(elem => {
          const classname = `App__extra ${((currentId === elem.id) && isOpen) ? 'App__extra-active' : ''}`;
          return (
            <div key={elem.id}>
              <span>AXONVIP | {elem.date}</span>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
              <p className={classname}>{elem.body2}</p>
              <button
                className='App__btn'
                onClick={() => handleClick(elem.id)}>Read more</button>

            </div>
          )
        })}
      </div>

    </div>
  )
}
