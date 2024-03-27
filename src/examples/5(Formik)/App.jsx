import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { nanoid } from 'nanoid'
import { string, object } from 'yup'
import data from './data.json'
import './App.scss'
import classNames from 'classnames'


const languages = ['html', 'css', "javascript", 'react', 'node']

const validationSchema = object({
  username: string()
    .matches(/^[A-Z]/, "must start with uppercase")
    .min(3, "too short username")
    .max(13, "too long username")
    .required(),
  email: string().email().required(),
  language: string().oneOf(languages).required()
})

export default function App() {
  const [users, setUsers] = useState(data)

  const handleSubmit = (values, formik) => {
    const user = {
      id: nanoid(5),
      ...values
    }

    setUsers([...users, user])
    formik.resetForm()
  }

  console.log(users)
  return (
    <div className='App'>
      <Formik
        onSubmit={handleSubmit}
        initialValues={
          { username: '', email: '', language: '' }
        }
        validationSchema={validationSchema}
      >
        <Form>
          <Field type="email" name="email" placeholder='email' />
          <ErrorMessage name="email" component='p' className='error' />
          <Field type="text" name="username" placeholder='username' />
          <ErrorMessage name="username" component='p' className='error' />
          <Field as='select' name='language' >
            {languages.map(item => {
              return <option value={item} key={item}>{item}</option>
            })}
          </Field>
          <input type='submit' value="save" />
        </Form>
      </Formik>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>username</th>
              <th>language</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((elem, index) => {
                return (
                  <tr key={elem.id} className={classNames('row', {
                    [`row-${elem.language}`]: true
                  })}>
                    <td>{index + 1}</td>
                    <td>{elem.email}</td>
                    <td>{elem.username}</td>
                    <td>{elem.language}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
