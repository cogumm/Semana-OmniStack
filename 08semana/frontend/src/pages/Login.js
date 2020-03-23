import React, { useState } from "react";
import "./Login.css";
import api from "../services/api";

import logo from "../assets/logo.svg";

export default function Login({ history }) {
    const [username, setUsername] = useState("");

    // Função que será chamada quando o usuário der um submit
    async function handleSubmit(e) {
        e.preventDefault();
        //console.log(username);

        const response = await api.post("/devs", {
            username
        });

        //console.log(response);
        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuário do Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
