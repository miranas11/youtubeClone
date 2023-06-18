import React from "react";

import logo from "../img/user-icon.png";

const commentData = [
    {
        name: "Anas",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        replies: [
            {
                name: "Anas",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
                replies: [],
            },
            {
                name: "Anas",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
                replies: [
                    {
                        name: "Anas",
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
                        replies: [],
                    },

                    {
                        name: "Anas",
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
                        replies: [
                            {
                                name: "Anas",
                                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
                                replies: [],
                            },
                            {
                                name: "Anas",
                                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
                                replies: [
                                    {
                                        name: "Anas",
                                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "Anas",
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
                        replies: [
                            {
                                name: "Anas",
                                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Anas",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        replies: [],
    },
    {
        name: "Anas",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        replies: [
            {
                name: "Anas",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
                replies: [],
            },
        ],
    },
    {
        name: "Anas",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        replies: [],
    },
    {
        name: "Anas",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        replies: [],
    },
];

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className="comment-box">
            <img className="logo-image" src={logo} />
            <div>
                <p>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} key={index} />
            <div className="comment-replies">
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ));
};

const CommentContainer = () => {
    return (
        <div className="comment-container">
            <h3>Comments</h3>
            <CommentList comments={commentData} />
        </div>
    );
};

export default CommentContainer;
