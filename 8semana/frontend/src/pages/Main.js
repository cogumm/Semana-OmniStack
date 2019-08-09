import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

    async function handleLike(id) {
        //console.log("like", id);
        await api.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id }
        });

        setUsers(users.filter(u => u._id !== id));
    }

    async function handleDislike(id) {
        //console.log("dislike", id);
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: match.params.id }
        });

        setUsers(users.filter(u => u._id !== id));
    }

    // match.params.id
    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="Tindev" />
            </Link>
            {users.length > 0 ? (
                <ul>
                    {users.map(u => (
                        <li key={u._id}>
                            <img src={u.avatar} alt={u.name} />
                            <footer>
                                <strong>{u.name}</strong>
                                <p>{u.bio}</p>
                            </footer>

                            <div className="buttons">
                                <button
                                    type="button"
                                    onClick={() => handleDislike(u._id)}
                                >
                                    <img src={dislike} alt="Dislike" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleLike(u._id)}
                                >
                                    <img src={like} alt="Like" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="empty">Acabou :(</div>
            )}
        </div>
    );
}
