import { addUser } from '@f/users/usersSlice'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function Users() {
  const dispatch = useDispatch()

  const handleSubmit = (values, formik) => {
    dispatch(addUser(values))
    formik.resetForm()
    console.log(values);
  }

  return (
    <div className='Users'>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{username: ''}}
      >
        <Form>
          <Field name="username"/>
          <input type="submit" value="Add user"/>
        </Form>
      </Formik>
    </div>
  )
}
