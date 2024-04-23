import axios from 'axios'
import React, { useEffect, useState } from 'react'
import classNames from "classnames";
import "./Todo.scss"
import { FaTrashAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import Modal1 from '../Modals/Modal1/Modal1';
import Modal2 from '../Modals/Modal2/Modal2';

export default function Todo() {
  const DB_URL = import.meta.env.VITE_DB_URL;
  const user = "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg";
  const [currentId, setcurrentId] = useState([])
  const [deleteId, setdeleteId] = useState(null);
  const [isOpen, setisOpen] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      baseURL: DB_URL,
      url: "todos",
      params: {
        _limit: 30
      }

    })
      .then(res => setData(res.data.todos));
    <Modal2 toggleModal={toggleModal} />
  })

  const handleClick = (index) => {
    if (!currentId.includes(index)) {
      setcurrentId([...currentId, index])
    } else {
      setcurrentId(currentId.filter((elem) => elem !== index))
    }
  }

  const toggleModal = () => {
    setisOpen(!isOpen)
  }

  const DeletePostById = () => {
    setData(data.filter(elem => elem.id !== deleteId))
    setdeleteId(null);
    toggleModal()
  }

  return (
    <div className='Todos'>
    {
        isOpen ? <Modal1 toggleModal={toggleModal} DeletePostById={DeletePostById}/> : null
    }
      <h1>Todos to do today</h1>
      <div className='Todos__fother'>
          {
            data.map((todos) => {
              return (
                <div className='Todos__container' key={todos.id}>
                  <div className='Todos__btns'>
                    <button className='Todos__Delete' onClick={() => { 
                      toggleModal(); setdeleteId(todos.id)
                      }} ><FaTrashAlt /></button>
                    <button className='Todos__Done' onClick={() => handleClick(todos.id)}><FaCalendarCheck /></button>
                  </div>
                  <div className="Todos__content">
                    <div className='Todos__UserPart'>
                      <img src={user} alt="" className='Todos__user' />
                      <span className='Todos__Name'>Todo from user {todos.userId}</span>
                    </div>
                    <div className="Todos__deal">
                      <p className='Todos__todo'>{todos.todo}</p>
                      <b className={classNames("Todos__complate", {
                        "Todos__complate-inProcess": todos.completed === false,
                        "Todos__complate-completed": todos.completed
                      })}>{todos.completed ? "completed" : "in process"} {currentId.includes(todos.id) ? todos.completed = true : ""}</b>
                    </div>
                  </div>
                </div>
              )
            })
          }
      </div>
     </div>
  )
}
