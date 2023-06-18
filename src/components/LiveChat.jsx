import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomSentence, getRandomName } from "./utils/helper";
import logo from "../img/user-icon.png";
import { CURRENT_USER } from "./utils/constants";

const LiveChat = (props) => {
    const [liveText, setLiveText] = useState("");

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            //instead of disoatch we will fetch from api and the dispatch
            dispatch(
                addMessage({
                    name: getRandomName(),
                    message: generateRandomSentence(),
                })
            );
        }, 1500);

        return () => {
            clearInterval(i);
        };
    }, []);
    return (
        <div>
            <div className="chat-container">
                {chatMessages.map((message, index) => (
                    <ChatMessages
                        key={index}
                        name={message.name}
                        text={message.message}
                    />
                ))}
            </div>
            <div className="chat-send">
                <div>
                    <img className="logo-image" src={logo} />
                    <h4>Anas Mir</h4>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(
                            addMessage({
                                name: CURRENT_USER,
                                message: liveText,
                            })
                        );
                        setLiveText("");
                    }}
                >
                    <input
                        type="text"
                        placeholder="type something..."
                        value={liveText}
                        onChange={(e) => setLiveText(e.target.value)}
                    ></input>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default LiveChat;
