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

  const handleSubmit = (value, formik) => {
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
          <h1>Data logging</h1>
          <div className="form">
            <div className='form__name'>
              <div>
                <label htmlFor="Name">Name</label>
                <Field type="text" placeholder="First name" name="firstName" />
                <ErrorMessage name="firstName" component='p' className='error' />
              </div>
              <div>
                <Field type="text" placeholder="Last name" name="lastName" />
                <ErrorMessage name="lastName" component='p' className='error' />
              </div>
            </div>
            <div className="form__address">
              <div className="form__row">
                <div className="streetName">
                    <Field type="text" name="address.street" placeholder="Street name"  required />
                    <ErrorMessage name="address.street" component="p" className='form__error' />
                </div>
                      
                <div className="number">
                    <Field type="text" name="address.number" placeholder="number"  required />
                    <ErrorMessage name="address.number" component="p" className='form__error'/>
                </div>
      
                <div className="floorOrUnit">
                    <Field type="text" name="address.floorOrUnit" placeholder="Floor, unit,.." />
                    <ErrorMessage name="address.floorOrUnit" component="p" className='form__error'/>
                </div>
              </div>
              <div className="form__row">
                <div>
                    <Field type="text" name="address.postalCode" placeholder="Postal code" required />
                    <ErrorMessage name="address.postalCode" component="p" className='form__error'/>
                </div>
                      
                <div>
                    <Field type="text" name="address.city" placeholder="city" required />
                    <ErrorMessage name="address.city" component="p" className='form__error'/>
                </div>
              </div>
              <div className="form__row">
                <div>
                    <Field type="text" name="address.state" placeholder="State" required />
                    <ErrorMessage name="address.state" component="p" className='form__error'/>
                </div>
                      
                <div>
                    <Field type="text" name="address.country" placeholder="Country" required />
                    <ErrorMessage name="address.country" component="p" className='form__error'/>
                </div>
              </div>
            </div>
            <input type='submit' value="Add" />
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
