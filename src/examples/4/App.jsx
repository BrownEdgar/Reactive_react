import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.scss";

function App() {
    const [users, setUsers] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = e.target;
        const user = {
            id: nanoid(5),
            username: username.value,
            password: password.value,
        };
        setUsers([...users, user]);
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="App">
            <h1 className="App__title">React forms</h1>
            <form onSubmit={handleSubmit} className="Form">
                <div className="Form__group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" required />
                </div>
                <div className="Form__group Form__group-password">
                    <label htmlFor="password">Password</label>
                    <input
                        type={`${showPassword ? "text" : "password"}`}
                        id="password"
                        required
                    />
                    <span>
                        <i
                            className={`bi ${
                                showPassword ? "bi-eye-slash" : "bi bi-eye"
                            }`}
                            onClick={togglePassword}
                        ></i>
                    </span>
                </div>
                <div className="Form__group">
                    <input type="submit" value="register" />
                </div>
            </form>
            <table>
                <caption>OUR USERS</caption>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((elem) => {
                        return (
                            <tr key={elem.id}>
                                <td>{elem.id}</td>
                                <td>{elem.username}</td>
                                <td>{elem.password}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
