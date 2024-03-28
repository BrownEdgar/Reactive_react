import { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid';
import { string, number, object } from 'yup';

import "./App.scss";

const validationSchema = object({
  name: object({
    firstName: string()
      .min(2, "Is too short!")
      .max(15, "Is too long!")
      .required(""),
    lastName: string()
      .min(2, "Is too short!")
      .max(20, "Is too long!")
      .required(""),
  }),
  address: object({
    street: string("This should be string"),
    number: number().typeError("This should be number"),
    floorOrUnit: number().typeError("This should be number"),
    postalCode: number().typeError("This should be number"),
    city: string("This should be string"),
    state: string("This should be string"),
    country: string("This should be string"),
  }),
});

export default function App() {
   const [users, setUsers] = useState([]);

   const handleSubmit = (values) => {
      const { firstName, lastName } = values.name;

      if (
        !users.some(
          (user) =>
            user.name.firstName === firstName &&
            user.name.lastName === lastName
        )
      ) {
         const user = {
           id: nanoid(10),
           ...values,
         };
   
         setUsers([...users, user]);
      }
   };
   console.log(users);

  return (
    <div className="app">
      <h1 className="app__title">Address for template</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: {
            firstName: ""  ,
            lastName: "",
          },
          address: {
            street: "",
            number: "",
            floorOrUnit: "",
            postalCode: "",
            city: "",
            state: "",
            country: "",
          },
           }}
           validationSchema={validationSchema}
      >
        <Form className="form">
          <div className="form__name">
            <div className="form__row">
               <div>
                  <Field type="text" name="name.firstName" placeholder="First name" required />
                  <ErrorMessage name="name.firstName" component="p" className='form__error' />
               </div>
               
               <div>
                  <Field type="text" name="name.lastName" placeholder="Last name" required />
                  <ErrorMessage name="name.lastName" component="p" className='form__error'/>
               </div>
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
          <div className="form__btn">
            <input type="submit" value="Submit" />
            <i className="bi bi-arrow-right-short"></i>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
