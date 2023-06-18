import React from "react";
import logo from "../img/user-icon.png";

const ChatMessages = ({ name, text }) => {
    return (
        <div className="chat-card">
            <img className="logo-image" src={logo} />
            <span>{name}</span>
            <span>{text}</span>
        </div>
    );
};

export default ChatMessages;
