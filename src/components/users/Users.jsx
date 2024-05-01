import React from 'react'
import { addUser, getUsers } from '@f/users/usersSlice'
import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import './Users.scss'

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector(getUsers)

  const handleSubmit = (values, formik) => {
    const data = {
      name: values.name,
      contact:{
        address: values.address,
        phone: values.phone,
        email: values.email
      }
    }
    dispatch(addUser(data))
    formik.resetForm()
  }

  return (
    <div className='Users'>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{username: ''}}
      >
        <Form>
          <Field name="name"/>
          <Field name="address"/>
          <Field name="phone"/>
          <Field name="email"/> 
          <input type="submit" value="Add user"/>
        </Form>
      </Formik>
      
    </div>
  )
}
