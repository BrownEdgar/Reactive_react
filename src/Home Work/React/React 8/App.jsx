import React from 'react'
import { Field, Form, Formik } from 'formik'
import './App.scss'

export default function App() {
  const country = ['Armenian', 'Russia', 'Georgia', 'Italia', 'Ispania', 'Germany']


  return (
    <div className='App'>
      <h1 className='App__title'>Address form template</h1>
      <Formik>
        <Form>
          <label htmlFor="Name" className='name'>Name</label>
          <span className='App__name'>
            <Field className='App__name-field' type='text' placeholder='First name' />
            <Field className='App__name-field' type='text' placeholder='Last name' />
          </span>

          <label htmlFor="Address" className='name'>Address</label>
          <span className='App__address'>
            <Field className='App__name-field' type='text' placeholder='Street name' />
            <Field className='App__address-number' type='text' placeholder='number' />
            <Field className='App__address-floor' type='text' placeholder='Floor,unit' />
          </span>
          <div className='App__info'>
            <Field className='App__info-field' type='text' placeholder='Postal code' />
            <Field className='App__info-field' type='text' placeholder='City' />
            <Field className='App__info-field' type='text' placeholder='State' />
            <Field as='select' placeholder='Country' name='country'>

              {
                country.map(elem => {
                  return <option value={elem} key={elem}>{elem}</option>
                })
              }
            </Field>
          </div>

        </Form>
      </Formik>
    </div>
  )
}
