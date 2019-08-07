import React, { Component } from "react";
import api from "../services/api";
import io from "socket.io-client";

import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
    state = {
        feed: [],
    };

    async componentDidMount() {
        this.registerToSocket();
        const response = await api.get("posts");

        this.setState({ feed: response.data });
    }

    registerToSocket = () => {
        const socket = io("http://localhost:3001");

        // post, like
        socket.on("post", newPost => {
            this.setState({ feed: [newPost, ...this.state.feed] });
        })

        socket.on("like", likedPost => {
            this.setState({
                feed: this.state.feed.map(p =>
                    p._id === likedPost._id ? likedPost : p
                )
            })
        })
    }

    handleLike = id => {
        api.post(`/posts/${id}/like`);
    }

    render() {
        return (
            <section id="post-list">
                { this.state.feed.map(p => (
                    <article key={p._id}>
                        <header>
                            <div className="user-info">
                                <span>{p.author}</span>
                                <span className="place">{p.place}</span>
                            </div>

                            <img src={more} alt="Mais" />
                        </header>
                        <img src={`http://localhost:3001/files/${p.image}`} alt="" />
                        <footer>
                            <div className="actions">
                                <button type="button" onClick={() => this.handleLike(p._id)} >
                                    <img src={like} alt="" />
                                </button>
                                <img src={comment} alt="" />
                                <img src={send} alt="" />
                            </div>
                            <strong>{p.likes} curtidas</strong>
                            <p>
                                {p.description}
                                <span>{p.hashtags}</span>
                            </p>
                        </footer>
                    </article>
                )) }
            </section>
        );
    }
}

export default Feed;