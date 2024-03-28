import {ErrorMessage, Field, Formik, Form } from 'formik'
import { string, object } from 'yup'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import "./App.scss"

const validationSchema = object({
  firstName: string().matches(/^[A-Z]/, "must start with uppercase").min(4, "too short first name").max(14, "too long first name").required(),
  lastName: string().matches(/^[A-Z]/, "must start with uppercase").min(5, "too short last name").max(15, "too long last name").required(),
  streetName: string().matches(/^[A-Z]/, "must start with uppercase").required(),
  postalCode: string().matches(/[0-9]/, "must be only numbers").required(),
  state: string().matches(/^[A-Z]/, "must start with uppercase").required(),
  number: string().matches(/[0-9]/, "must be only numbers").required(),
  city: string().matches(/^[A-Z]/, "must start with uppercase").required()
})

const countries = ["Japan", "USA", "France", "Germany", "Russia"]

export default function App() {
  const [persons, setPersons] = useState([])

  const handleSubmit = (formik, value) => {
    const person = {
      id: nanoid(4),
      ...value
    }
    setPersons([...persons, person])
    formik.resetForm()
  }

  return (
    <div className='App'>
      <Formik 
      onSubmit={handleSubmit}
      initialValues={ 
        {
          first_name: '', 
          last_name: '',
          street_name: '',
          postal_code: '',
          state: '',
          number: '',
          city: ''
        }
      }
      validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="Name">Name</label>
          <div className='App__name'>
            <Field type="text" placeholder="First name" name="firstName" />
            <ErrorMessage name="firstName" component='p' className='error' />
            <Field type="text" placeholder="Last name" name="lastName" />
            <ErrorMessage name="lastName" component='p' className='error' />
          </div>
          <label htmlFor="Address">Address</label>
          <div className='App__address'>
            <Field type="text" placeholder="Street name" name="streetName" />
            <ErrorMessage name="streetName" component='p' className='error' />
            <Field type="text" placeholder="Postal code" name="postalCode" />
            <ErrorMessage name="postalCode" component='p' className='error' />
            <Field type="text" placeholder="State" name="state" />
            <ErrorMessage name="state" component='p' className='error' />
            <Field type="text" placeholder="Number" name="number" />
            <ErrorMessage name="number" component='p' className='error' />
            <Field type="text" placeholder="City" name="city" />
            <ErrorMessage name="city" component='p' className='error' />
            <Field as="select" name="country">
              {countries.map(elem => {
                return <option value={elem} key={elem}>{elem}</option>
              })}
            </Field>
            <input type='submit' value="add" />
          </div>
        </Form>
      </Formik>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(elem => {
            return(
              <tr key={elem.id}>
                <td>{elem.firstName}</td>
                <td>{elem.lastName}</td>
                <td>{elem.city}</td>
                <td>{elem.country}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
