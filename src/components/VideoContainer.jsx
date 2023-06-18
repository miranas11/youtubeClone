import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const jsonData = await data.json();
        setVideos(jsonData.items);
    };

    return (
        <div className="video-container">
            {videos.map((vid) => (
                <Link key={vid.id.videoId} to={"/watch?v=" + vid.id.videoId}>
                    <VideoCard info={vid} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
