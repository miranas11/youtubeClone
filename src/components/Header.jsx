import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheResults } from "./utils/searchSlice";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSearchSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();

        setSearchSuggestions(json[1]);

        dispatch(
            cacheResults({
                [searchQuery]: json[1],
            })
        );
    };

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="head-container">
            <div className="menu-logo">
                <img
                    alt="menu"
                    src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png"
                    onClick={() => toggleMenuHandler()}
                />
                <a href="/">
                    <img
                        alt="logo"
                        src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
                    />
                </a>
            </div>
            <div>
                <div className="search-box">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(v) => setSearchQuery(v.target.value)}
                        onFocus={() => {
                            setShowSuggestions(true);
                        }}
                        onBlur={() => {
                            setShowSuggestions(false);
                        }}
                    />
                    <button>Search</button>
                </div>
                {showSuggestions &&
                    searchQuery.length != 0 &&
                    searchSuggestions.length > 0 && (
                        <div className="search-suggestions">
                            <ul>
                                {searchSuggestions.map((suggestion, index) => (
                                    <li key={index}>{suggestion}</li>
                                ))}
                                {/* <li>Iphone</li>
                        <li>Iphone</li>
                        <li>Iphone</li>
                        <li>Iphone</li>
                        <li>Iphone</li>
                        <li>Iphone</li> */}
                            </ul>
                        </div>
                    )}
            </div>

            <div>
                <img
                    alt="user-logo"
                    src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
                />
            </div>
        </div>
    );
};

export default Header;
