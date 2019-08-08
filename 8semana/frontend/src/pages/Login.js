import React from "react";
import "./Login.css";

import logo from "../assets/logo.svg";

export default function Login() {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="Tindev" />
                <input placeholder="Digite seu usuário do Github" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
