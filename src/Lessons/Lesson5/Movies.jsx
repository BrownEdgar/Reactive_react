import React, {useState} from 'react'
import './Movies.scss'


function Movies() {
    const deleteList = () => {
        const randomLi = Math.floor(Math.random() * data.length)
        setData(data.toSpliced(randomLi - 1, randomLi))
    }
    const [data, setData] = useState([
        {
            id: 1,
            title: "Terminator",
            genre: "Action",
            stock: 6,
            rate: 2.5,
           },
           {
            id: 2,
            title: "Die Hard",
            genre: "Action",
            stock: 5,
            rate: 2.5,
           },
           {
            id: 3,
            title: "Get Out",
            genre: "Thriller",
            stock: 8,
            rate: 3.5,
           },
           {
            id: 4,
            title: "Trip to Italy",
            genre: "Comedy",
            stock: 7,
            rate: 3.5,
           },
           {
            id: 5,
            title: "Airplane",
            genre: "Comedy",
            stock: 7,
            rate: 3.5,
           },
    ])
  return (
    <div className='Movies'>
        <div className='Movies__content'>
            <div className='Movies__head'>
                <ul className='Movies__parentList'>
                    <li className='Movies__list-first'></li>
                    <li className='Movies__list'></li>
                    <li className='Movies__list'></li>
                    <li className='Movies__list'></li>
                </ul>
            </div>
        {
            data.map(elem => {
                return (
                    <div key={elem.id}>
                        <button className='Movie__btn' onClick={deleteList}>Delete</button>

                    <ul className='Movie__parentList-body'>
                        <li className='Movie__list-body'>{elem.title}</li>
                    </ul>

                    <ul className='Movie__parentList-bodySecond'>
                        <li className='Movie__list-body'>{elem.genre}</li>
                    </ul>

                    <ul className='Movie__parentList-bodyThird'>
                        <li className='Movie__list-body'>{elem.stock}</li>
                    </ul>

                    <ul className='Movie__parentList-bodyFor'>
                        <li className='Movie__list-body'>{elem.rate}</li>
                    </ul>

                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Movies