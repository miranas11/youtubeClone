import React from "react";

const Header = () => {
    return (
        <div className="head-container">
            <div className="menu-logo">
                <img src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png" />
                <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" />
            </div>
            <div className="search-box">
                <input type="text" />
                <button>Search</button>
            </div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" />
            </div>
        </div>
    );
};

export default Header;
