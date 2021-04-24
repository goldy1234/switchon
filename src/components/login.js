import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authenticate } from '../actions';
import { useHistory } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();

    const authenticateUser = () => {
        let data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        try {
            dispatch(authenticate(data))
                .then((response) => {
                    console.log(response.payload);
                    response.payload.error ? setErrorMessage(response.payload) : history.push("/home")
                })
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="login-container">

            <div className="logo-wrapper">
                <div className="logo">SWITCH ON ASSIGNMENT</div>
            </div>
            <div className="sign-in-wrapper">
                <div className="title">To- Do App</div>
                <div className="login-form">
                    {
                        errorMessage && <div className="error-message">{errorMessage.error}</div>
                    }
                    <div><input type="text" placeholder="Email ID" ref={emailRef} /></div>
                    <div><input type="password" placeholder="Password" ref={passwordRef} /></div>
                    <input type="submit" value="Login" className="submit" onClick={authenticateUser} />
                </div>
            </div>

        </div>
    )
}