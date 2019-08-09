import React, { useEffect, useState } from "react";
import "./Main.css";

import api from "../services/api";

import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";

export default function Main({ match }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get("/devs", {
                headers: {
                    user: match.params.id
                }
            });
            //console.log(response.data);
            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id]);

    // match.params.id
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                {users.map(u => (
                    <li key={u._id}>
                        <img src={u.avatar} alt={u.name} />
                        <footer>
                            <strong>{u.name}</strong>
                            <p>{u.bio}</p>
                        </footer>

                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="Dislike" />
                            </button>
                            <button type="button">
                                <img src={like} alt="Like" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
