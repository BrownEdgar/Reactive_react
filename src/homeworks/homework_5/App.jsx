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
  city: string().matches(/^[A-Z]/, "must start with uppercase").required(),
  floorOrUnit: string().required(),
  countries: string().required()
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
          city: '',
          floorOrUnit: '',
          countries: ''
        }
      }
      validationSchema={validationSchema}
      >
        <Form>
          <h1>Data logging</h1>
          <div className="form">
            <label htmlFor="Name">Name</label>
            <div className='form__name'>
              <div>
                <Field type="text" placeholder="First name" name="firstName" />
                <ErrorMessage name="firstName" component='p' className='error' />
              </div>
              <div>
                <Field type="text" placeholder="Last name" name="lastName" />
                <ErrorMessage name="lastName" component='p' className='error' />
              </div>
            </div>
            <div className="form__address">
              <label htmlFor="Address">Address</label>
              <div className="form__row">
                <div className="streetName">
                  <Field type="text" name="streetName" placeholder="Street name"  required />
                  <ErrorMessage name="streetName" component="p" className='error' />
                </div>    
                <div className="number">
                  <Field type="text" name="number" placeholder="number"  required />
                  <ErrorMessage name="number" component="p" className='error'/>
                </div>
                <div className="floorOrUnit">
                  <Field type="text" name="floorOrUnit" placeholder="Floor, unit,.." />
                  <ErrorMessage name="floorOrUnit" component="p" className='error'/>
                </div>
              </div>
              <div className="form__row">
                <div>
                  <Field type="text" name="postalCode" placeholder="Postal code" required />
                  <ErrorMessage name="postalCode" component="p" className='error'/>
                </div>  
                <div>
                  <Field type="text" name="city" placeholder="city" required />
                  <ErrorMessage name="city" component="p" className='error'/>
                </div>
              </div>
              <div className="form__row">
                <div>
                  <Field type="text" name="state" placeholder="State" required />
                  <ErrorMessage name="state" component="p" className='error'/>
                </div>   
                <div>
                  <Field as="select" name="countries" className="select" placeholder="Country" required>
                    {countries.map(elem => {
                      return(
                        <option value={elem} key={elem}>{elem}</option>
                      )
                    })}
                  </Field>
                  <ErrorMessage name="country" component="p" className='error'/>
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
