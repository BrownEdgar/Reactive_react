import React, { useState, useEffect } from 'react'
import instance from './axios'
import classNames from 'classnames'
import axios from 'axios'

import './App.scss'
import Posts from '../../../../components/Posts/Posts'
import PostLoader from '../../../../components/Loaders/PostsLoader'

const arr = ['posts', 'todos', 'comments', 'users',]

export default function App() {
  const [data, setData] = useState([])
  const [option, setOption] = useState('posts')
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getData = () => {
      // axios(`https://jsonplaceholder.typicode.com/${option}`, {
      //   params: {
      //     _limit: 9,
      //     _start: 49
      //   }
      // })
      // axios({
      //   baseURL: 'https://jsonplaceholder.typicode.com/',
      //   url: option,
      //   params: {
      //     _limit: 12
      //   }
      // })
      setLoading(true)
      instance(option, {
        params: {
          _limit: 9
        }
      })
        .then((res) => setData(res.data))
        .finally(() => setLoading(false))
    }
    // const data = {
    //   userId: 1,
    //   title: 'Lorem ipsum dolor sit.',
    //   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae totam ad obcaecati quidem?'
    // }
    // axios.post('https://jsonplaceholder.typicode.com/posts', data)
    //   .then((res) => console.log(res));

    getData()
  }, [option])

  return (
    <div className='App'>
      <div className='App__btn'>
        {arr.map(elem => {
          return <button
            className={classNames('btn', {
              active: elem === option,
            })}
            onClick={() => setOption(elem)}
          >Get {elem}</button>
        })}
      </div>

      <Posts data={data} loading={loading} />

    </div>
  )
}
