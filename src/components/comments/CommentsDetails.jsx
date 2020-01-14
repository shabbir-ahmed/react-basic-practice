import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const CommentsDetails = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    dateTime="Today at 6:00 PM" 
                    content="Nice Blog Post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="ED Sheeran" 
                    dateTime="Yestarday at 6:00 PM" 
                    content="Another Nice Blog Post!"
                />
            </ApprovalCard>
            {/* <CommentDetail />
            <CommentDetail />
            <CommentDetail /> */}
        </div>
    );
};

export default CommentsDetails;