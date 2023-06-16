import React from "react";

const VideoCard = ({ info }) => {
    if (info === undefined) {
        return <h1></h1>;
    }

    const { channelTitle, title, thumbnails, id } = info?.snippet;
    console.log(info.id.videoId);
    return (
        <div className="video-card">
            <img src={thumbnails.medium.url}></img>

            <div>
                <h3>{title}</h3>

                {channelTitle}
            </div>
        </div>
    );
};

export default VideoCard;
