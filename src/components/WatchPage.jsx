import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";

import CommentContainer from "./CommentContainer";
import ChatMessages from "./ChatMessages";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className="watch-container">
            <div className="watch-top-half">
                <div>
                    <iframe
                        className="watch-card"
                        width="1300"
                        height="650"
                        src={"https://www.youtube.com/embed/" + videoId}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="chat-section">
                    <LiveChat />
                </div>
            </div>
            <div>
                <CommentContainer />
            </div>
        </div>
    );
};

export default WatchPage;
