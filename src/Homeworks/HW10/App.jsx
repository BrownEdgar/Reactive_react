import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import {Field, Form, Formik} from 'formik';
import './App.scss'

const country = ['Los Angelos', 'London', 'New-York', 'Tokio', 'Sydney'];

export default function App() {
  const [users, setUsers] = useState([])

  const handleSubmit = (values, formik) => {
    const user = {
      id: nanoid(5),
      ...values
    }

    setUsers([...users, user])
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
            number: '', 
            floor: '',
            postal_code: '',
            city: '',
            state: '',
            country: ''
          }
        }
      >
        <Form>
          <Field as='h1'>Addres form template</Field>
          <Field as='label'>Name</Field>
          <Field placeholder='First Name' type='text' name='first_name'/>
          <Field placeholder='Last Name' type='text' name='last_name'/>
          <Field as="div">
            <Field as='label'>Address</Field>
            <Field placeholder='Street name' type='text' name='street_name'/>
            <Field placeholder='number' type='number' name='number'/>
            <Field placeholder='Floor, unit,...' type='text' name='floor'/>
            <Field placeholder='Postal code' type='text' name='postal_code'/>
            <Field placeholder='City' type='text' name='city'/>
            <Field placeholder='State' type='text' name='state'/>
            <Field as='select' name="country">
              <option value="" disabled>Select Country</option>
              {
                country.map(elem => {
                  return <option value={elem} key={elem}>{elem}</option>
                })
              }
            </Field>
          </Field>
          <input type="submit" value='Submit ->' />
        </Form>
      </Formik>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Street name</th>
            <th>number</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((elem, index) => {
              return (
                <tr key={elem.id}>
                  <td>{index + 1}</td>
                  <td>{elem.first_name}</td>
                  <td>{elem.last_name}</td>
                  <td>{elem.street_name}</td>
                  <td>{elem.number}</td>
                  <td>{elem.city}</td>
                  <td>{elem.country}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
