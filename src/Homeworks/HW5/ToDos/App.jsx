import React from 'react'
import './App.scss'
import PostLoader from '../loader/PostLoader'

export default function Posts({ data, loading }) {

  if (loading) {
    return <div className="ToDos">
      <PostLoader />
      <PostLoader />
      <PostLoader />
    </div>
  }

  // return (
  //   <div className='ToDos'>
  //     {
  //       data.map(elem => {
  //         return (
  //           <div key={elem.id}>
  //             <h1>{elem.title}</h1>
  //             <button>
  //               <i className='bx bx-message-minus bx-md' onClick={() => handleDelete(elem.id)}></i>
  //             </button>
  //           </div>
  //         )
  //       })
  //     }
  //   </div>
  // )
}