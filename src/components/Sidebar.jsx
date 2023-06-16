import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if (!isMenuOpen) return null;
    return (
        <div className="sidebar-container">
            <ul>
                <li>
                    <Link to={"/"}> Home </Link>
                </li>

                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h3>Subscriptions</h3>
            <ul>
                <li>Akshay Saini</li>
                <li>PewdiePie</li>
                <li>Sidemen</li>
                <li>IGN</li>
                <li>Adult Swim</li>
            </ul>
            <h3>Explore</h3>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
            </ul>
        </div>
    );
};

export default Sidebar;
