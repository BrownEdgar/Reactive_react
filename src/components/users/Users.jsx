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
          <Field type="text" name="name"/>
          <Field type="text" name="address"/>
          <Field type="text" name="phone"/>
          <Field type="email" name="email"/> 
          <input type="submit" value="Add user"/>
        </Form>
      </Formik>
      
      <div className="data">
        {users.data.map((item) => {
          return(
            <div className="data__info">
              <div className='data__userName data__user'>
                <span className='data__saved'>name:</span>
                <span>{item.name}</span>
              </div>
              <div className='data__address data__user'>
                <span className='data__saved'>address:</span>
                <span>{item.address}</span>
              </div>
              <div className='data__phone data__user'>
                <span className='data__saved'>phone:</span>
                <span>{item.phone}</span>
              </div>
              <div className="data__email data__user">
                <span className='data__saved'>Email:</span>
                <span>{item.email}</span>
              </div>
              
            </div>
          )
        })}
      </div>    
    </div>
  )
}
