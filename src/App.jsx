import "./App.scss";
import { Formik, Form, Field, ErrorMessage } from "Formik";
import { nanoid } from "nanoid";
import { useState } from "react";
import { string, object } from "yup";

const validationSchema = object({
    username: string().min(3).max(13).required().matches(/^[A-Z]/, "glglgl"),
    email: string().email().required(),
});

const languages = ['html', 'css', "javascript", "node", "react"];

function App() {
    const [users, setUsers] = useState([]);

    const handleSubmit = (values) => {
        const user = {
            id: nanoid(5),
            ...values,
        };
        setUsers([...users, user]);
    };
    console.log(users);
    return (
        <div className="App">
            <Formik
                onSubmit={handleSubmit}
                initialValues={{
                  username: "",
                  email: "",
                  languages: []
                }}
                validationSchema={validationSchema}
            >
                <Form>
                    <Field type="email" name="email" placeholder="email" />
                    <ErrorMessage
                        name="email"
                        component="p"
                        className="error"
                    />
                    <Field type="text" name="username" placeholder="username" />
                    <ErrorMessage
                        name="username"
                        component="p"
                        className="error"
                    />
                    <input type="submit" value="save" />
                    
                </Form>
            </Formik>
        </div>
    );
}

export default App;