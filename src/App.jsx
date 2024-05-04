import { useEffect, useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import axios  from 'axios'
import { addUser, addUsers } from '@f/users/usersSlice'
import { addCounter } from '@f/counter/counterSlice'
import Todos from '@/Todos/Todos'
import { Field, Form, Formik } from 'formik'



function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => dispatch(addUsers(res.data)))
  }, [])

  
  const handleSubmit = (values, formik) => {
    dispatch(addUser(values))
    formik.resetForm()
  }
  
  return (
    <div className='App'>
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(addCounter(3))}>Plus</button>
      <Formik
      onSubmit={handleSubmit}
      initialValues={{username: ''}}
      >
        <Form>
          <Field name="username" />
          <input type="submit" value="save" />
        </Form>
      </Formik>
      <Todos />
    </div>
  )
}

export default App