import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from 'nanoid';
import { string, object } from 'yup';
import './App.scss';

const validationSchema = object({
  email: string().email("this should be email!").required("this field is required"),
  username: string("this should be string!").min(2, "is too short!").required("this field is required"),
  password: string().min(3, "is too short!").required("this field is required"),
})

export default function App() {
  const [users, setUsers] = useState([]);
  const [eyeOpen, setEyeOpen] = useState(false);
  const [currIndex, setCurrIndex] = useState(null);
  
  const handleEye = (index) => {
    setEyeOpen(!eyeOpen);
    setCurrIndex(index);
  };

  const handleSubmit = (values, formik) => {
    const { email } = values;

    if (!users.some(user => user.email === email)) {
      const user = {
         id: nanoid(10),
         ...values,
      }

      setUsers([...users, user]);
    }

    formik.resetForm();
   };
  
  console.log(users);

  return (
    <div className="app">
      <>
        <Formik
          initialValues={{
            email: "",
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form className="form">
              <div className="form__email form__group">
                <Field as="label" htmlFor="email">
                  Email
                </Field>
                <Field type="email" name="email" />
                <ErrorMessage
                  name="email"
                  className="form__error"
                  component="span"
                />
              </div>

              <div className="form__username form__group">
                <Field as="label" htmlFor="username">
                  Username
                </Field>
                <Field type="text" name="username" />
                <ErrorMessage
                  name="username"
                  className="form__error"
                  component="span"
                />
              </div>

              <div className="form__password form__group">
                <Field as="label">Password</Field>
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  className="form__error"
                  component="span"
                />
              </div>

              <input type="submit" value="save" className="form__btn" />
            </Form>
          )}
        </Formik>

        <hr />

        <div className="users">
          {users.map((user, index) => (
            <div key={user.id} className="users__user-info user-info">
              <div className="user-info__email user-info__group">
                <span className="user-info__title">email:</span>
                <span>{user.email}</span>
              </div>
              <div className="user-info__username user-info__group">
                <span className="user-info__title">username:</span>
                <span>{user.username}</span>
              </div>
              <div className="user-info__password user-info__group">
                <span className="user-info__title">password:</span>
                <span>
                  {eyeOpen && currIndex === index
                    ? user.password : "*".repeat(10)}
                </span>
                <i
                  class={`bi bi-eye${
                    eyeOpen && currIndex === index ? "-slash" : ""
                  }`}
                  onClick={() => handleEye(index)}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}
