import React from "react";
import Button from "./Button";

const nameList = [
    "All",
    "Web Development",
    "All",
    "Computer Science",
    "Music",
    "Comedy",
    "Live",
    "Podcasts",
    "Gamings",
    "Cricket",
    "Sports",
    "Football",
];

const ButtonList = () => {
    return (
        <div className="button-list">
            {nameList.map((name, index) => (
                <Button key={index} name={name} />
            ))}
        </div>
    );
};

export default ButtonList;
