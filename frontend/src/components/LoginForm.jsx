import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";
import "../styles/RegisterLogin.css"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginForm({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Sign-in" : "Sign-up";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="login-register-form container">
        <div className="row justify-content-center align-items-center min-vh-100">
            <div className="container-fluid">
                <div className="form-container">
                    <img className="mic-logo" src="/src/static/92003285.png" alt="MIC Logo" />
            <h3 className="display-4 fw-bold text-center">{name}</h3>
        <Form onSubmit={handleSubmit} method="POST" className="mt-4">
            <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="mb-3"
            />
            <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-3"
            />
            {loading && <LoadingIndicator />}
        <Button variant="secondary" type="submit" className="w-100">{name}</Button>
        </Form>
        </div>
        </div>
        </div>
        </div>
    );
}

export default LoginForm