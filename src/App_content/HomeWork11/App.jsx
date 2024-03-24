import React, { useState } from 'react'
import { nanoid } from "nanoid";
import './App.scss'


function App() {
    const [users, setUsers] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target;
        const user = {
            id: nanoid(5),
            email: email.value,
            password: password.value,
        };
        setUsers([...users, user]);
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='App__content'>
            <div className="App">
                <form onSubmit={handleSubmit} className="Form">
                    <div className="Form__group">
                        <input type="email" id="email" placeholder='Email *' required />
                    </div>
                    <div className="Form__group Form__group-password">
                        <input
                            type={`${showPassword ? "text" : "password"}`}
                            id="password" placeholder='Password *'
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
                        <div className='App__text'>
                            <p>Forgot Password ?</p>
                        </div>
                    </div>
                    <div className="Form__group">
                        <input type="submit" value="Log in" />
                    </div>

                    <div className='App__buttons'>
                        <div className='App__btn-facebook'>
                            <span>
                                <i class="fa-brands fa-square-facebook"></i>
                            </span>
                            <input type="submit" id="facebook"  value="Log in with Facebook"/>
                        </div>
                        <div className="App__btn-google">
                            <span>
                                <i class="fa-brands fa-google"></i>
                            </span>
                            <input type="submit" id="google" value="Log in with Google" />
                        </div>
                </div>
                </form>
            </div>
        </div>
    );
}

export default App;