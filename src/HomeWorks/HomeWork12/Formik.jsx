import React, { useState } from 'react'
import { nanoid } from "nanoid"
import { Formik, Form, Field, ErrorMessage } from "formik"
import "./Formik.scss";
import { string, object, number } from "yup"

const countries = ["Armavir", "Armenia", "Russia", "USA", "Georgy", "Mexica", "Moldova", "Prednestrovie"];

const validationSchema = object({
  name: string().matches(/^[A-Z]/, "must start with uppercase").required(),
  lastname: string().matches(/^[A-Z]/, "must start with uppercase").required(),
  post: number().required(),
  state: string().required(),
  number: number().required(),
  city: string().required(),
  country: string().oneOf(countries).required()
})



export default function Registration() {
  const [users, setusers] = useState([])
  const handleSubmit = (values, formik) => {

    const user = {
      id: nanoid(5),
      ...values
    }
    setusers([...users, user])
    console.log(values)
  }
  console.log(users);

  return (
    <div className='Registration'>
      <h1> Address fron template</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={
          { name: "", lastname: "", street: "", post: "", state: "", number: "", floor: "", city: "", country: "" }
        }
        validationSchema={validationSchema} >
        {
          (formik) => {
            console.log(formik.errors)
            return (
              <Form className='Form'>
                <h4>Name</h4>
                <div className="Form__fullName">
                  <div className="Form__fullName-inputs">
                    <Field type="text" placeholder="First name" className="Form__name" name="name" required />
                    <ErrorMessage name="name" component="p" className="error" />
                    <Field type="text" placeholder="Last name" className="Form__surname" name="lastname" required />
                    <ErrorMessage name="lastname" component="p" className="error" />
                  </div>
                </div>
                <div className="Form__Address">
                  <h4>Address</h4>
                  <div className="Form__street_num_floor">
                    <Field type="text" placeholder="Street name" className="Form__street" name="street" required />
                    <div className='Form__num_floor'>
                      <Field type="text" placeholder="number" className="Form__number" name="number" required />
                      <Field type="text" placeholder="Floor,unit,..." className="Form__floor" name="floor" />
                    </div>
                  </div>
                  <div className="Form__post_city">
                    <Field type="text" placeholder="Postal code" className="Form__post" name="post" required />
                    <Field type="text" placeholder="City" className="Form__city" name="city" required />
                  </div>

                  <div className='Form__state_country'>
                    <Field type="text" placeholder="State" className="Form__state" name="state" required />
                    <Field as="select" name="country">
                      <option value="country">Select Your Country</option>
                      {
                        countries.map(elem => {
                          return <option value={elem} key={elem}>{elem}</option>
                        })
                      }
                    </Field>
                  </div>
                </div>
                <input type="submit" value="Submit" className='sumbit' />
              </Form>
            )
          }
        }
      </Formik>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(elem => {
              return (
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.name}</td>
                  <td>{elem.lastname}</td>
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
