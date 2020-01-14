import React from 'react';
import faker from 'faker';

const CommentDetail = (prop) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
            <img src={faker.image.avatar()} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {prop.author}
                </a>
                <div className="metadata">
                    <span className="date">{prop.dateTime}</span>
                </div>
                <div className="text">
                    {prop.content}
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;