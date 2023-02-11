import React, {useState} from 'react';
import Stars from '../components/Stars';
import {useParams} from "react-router-dom";
import Comment, {CommentProps} from '../components/Comment'
import 'bootstrap/dist/css/bootstrap.css';

type RatePageProps = {
  title: String; // not used, use useParams().title instead
};

function RatePage({title} : RatePageProps) {
  const url = useParams();
  const [rating, setRating] = useState<Number>(0);
  const [comment, setComment] = useState<string>("");
  const comments: CommentProps[] = [
    {user: 'Anynomous 123', rating: 3, comment: "not worth it"},
    {user: 'Jason', rating: 5, comment: "Best decision of my life~!"}
    ];

  const onCommentChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setComment(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // https://bobbyhadz.com/blog/react-redirect-after-form-submit
    console.log(`submitting ${rating},${comment}`);
    
  };
  const titleComponent = (
    <div className="row py-4">
      <p className="lead">
        Is it worth it to get into...
      </p>
      <h1 className="h1">
        {url.title}
      </h1>
    </div>
  );
  const formComponent = (
    <div className="row gx-4">
      <form>
        <div className="mb-3">
          <Stars rating={rating} setRating={setRating}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea className="form-control" id="comment" onChange={onCommentChange} value={comment}/>
        </div>
        <button type="submit" className="btn btn-primary" onSubmit={onSubmit} disabled={rating == 0}>Submit</button>
      </form>
    </div>
  );
  return (
    <div className="container py-4">
      {titleComponent}
      {formComponent}
      {comments.map((comment) => (
        <Comment user={comment.user} rating={comment.rating} comment={comment.comment} key={comment.user}/>
      ))}
    </div>
    );
}

export default RatePage;