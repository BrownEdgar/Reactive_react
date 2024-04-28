import { addUser } from '@/RdObject/rdobject'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'


export default function App() {
  const dispatch = useDispatch()
  const handleSubmit = (values, formik) => {
    dispatch(addUser(values))
    formik.resetForm()
    console.log(values);
  }


  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={{username: ""} }>
        <Form>
          <Field name="username"/>
          <input type="submit" value="add user" />
        </Form>
      </Formik>
    </div>
  )
}
