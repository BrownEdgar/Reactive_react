import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.scss';
import Modal from '../../components/ModalPage/Modal';
// const DB_URL = import.meta.env.VITE_DB_URL;


function App() {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentPostId, setCurrentPostId] = useState(null)

    const toggleModal = () => setIsOpen(!isOpen);

    const deletePostById = () => {
        setData(data.filter(elem => elem.id !== currentPostId))
        setCurrentPostId(null);
        toggleModal()
    }

    useEffect(() => {
      axios("https://jsonplaceholder.typicode.com/todos?_limit=9")
      .then(res => setData(res.data))
    }, [])
    

  return (
    <div className='App'>
        {
            isOpen ? <Modal toggleModal={toggleModal} deletePostById={deletePostById} />: null
        }
        <h1 className='App_title'>React Modal Example</h1>
        <div className="App_posts">
            {data.map(elem => {
                return (
                    <div key={elem.id}>
                        <i className='bx bxs-message-square-x' onClick={() => {
                            toggleModal();
                            setCurrentPostId(elem.id)
                        }}></i>
                        <h2>{elem.title}</h2>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default App