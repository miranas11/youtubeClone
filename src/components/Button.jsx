import React from "react";

const Button = ({ name }) => {
    return (
        <div>
            <button className="button">{name}</button>
        </div>
    );
};

export default Button;
