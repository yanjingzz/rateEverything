import React, {useState} from 'react';
import './Comment.css';
import {ReactComponent as StarIcon} from './StarIcon.svg';

export type CommentProps = {
  user: string;
  rating: Number;
  comment: string;

};

function Comment({user, rating, comment}: CommentProps) {
  const starIcons = [1,2,3,4,5].map((number) => 
    <div className="comment-rating" key={number}>
      <div className={"star-icon d-inline " + ((number <= rating) ? "star-icon-yellow" : "")}>
        <StarIcon/>
      </div>
    </div>
  );
  return (
    <div className="row mt-4">
      <h2 className="h4 mb-0 inline"> 
        {user} 
        <span className="badge badge-secondary">
          {starIcons}
        </span>
      </h2>
      <p> {comment} </p>
    </div>
    );
}

export default Comment;