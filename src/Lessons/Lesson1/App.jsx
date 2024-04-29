import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '@/Todos/Todos';
import './App.scss';
import { Field, Form, Formik } from 'formik';
import { addUser } from '@f/users/usersSlice';

function App() {
    const dispatch = useDispatch()
    const handleSubmit = (values, formik) => {
      dispatch(addUser(values));
      formik.resetForm()
    }
    
  return (
    <div>
        <Formik 
          onSubmit={handleSubmit}
          initalValues={{username: ''}}
          >
          <Form>
            <Field name="username"/>
            <input type="submit" value={'save user'}/>
          </Form>
        </Formik>
        <Todos />
    </div>
  )
}

export default App;