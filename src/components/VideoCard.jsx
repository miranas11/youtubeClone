import React from "react";

const VideoCard = ({ info }) => {
    if (info === undefined) {
        return <h1> </h1>;
    }

    const { channelTitle, title, thumbnails, id } = info?.snippet;

    return (
        <div className="video-card">
            <img alt="thumbnail" src={thumbnails.medium.url}></img>

            <div>
                <h3>{title}</h3>
                <h4>{channelTitle}</h4>
            </div>
        </div>
    );
};

export default VideoCard;
