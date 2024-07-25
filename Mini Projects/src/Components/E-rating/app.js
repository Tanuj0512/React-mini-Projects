import React, { useState } from "react";
import './app.css'

const ReviewAndRating = () => {
  const [rating, setRating] = useState(0);
  const [selectedTag, setSelectedTag] = useState(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStarHover = (value) => {
    setRating(value);
  };

  const handleStarClick = (value, message) => {
    setRating(value);
    setSelectedTag(message);
  };

  const handleTagClick = () => {
    if (selectedTag) {
      setSelectedTag(null);
    } else {
      setSelectedTag("choosed");
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    // Perform submit logic here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 1500);
  };

  return (
    <div className="wrapper">
      <div className="master">
        <h1>Review And rating</h1>
        <h2>How was your experience about our product?</h2>

        <div className="rating-component">
          <div className="status-msg">
            <input className="rating_msg" type="hidden" name="rating_msg" value={selectedTag || ""} />
          </div>
          <div className="stars-box">
            {[1, 2, 3, 4, 5].map((value) => (
              <i
                key={value}
                className={`star fa fa-star ${value <= rating ? "selected" : ""}`}
                title={`${value} star`}
                data-message={
                  value === 1
                    ? "Poor"
                    : value === 2
                    ? "Too bad"
                    : value === 3
                    ? "Average quality"
                    : value === 4
                    ? "Nice"
                    : "very good qality"
                }
                data-value={value}
                onMouseOver={() => handleStarHover(value)}
                onClick={() => handleStarClick(value, `${value} stars`)}
              ></i>
            ))}
          </div>
          <div className="starrate">
            <input className="ratevalue" type="hidden" name="rate_value" value={rating} />
          </div>
        </div>

        <div className="feedback-tags">
          <div className="tags-container" data-tag-set="1">
            <div className="question-tag">Why was your experience so bad?</div>
          </div>
          <div className="tags-container" data-tag-set="2">
            <div className="question-tag">Why was your experience so bad?</div>
          </div>
          <div className="tags-container" data-tag-set="3">
            <div className="question-tag">Why was your average rating experience?</div>
          </div>
          <div className="tags-container" data-tag-set="4">
            <div className="question-tag">Why was your experience good?</div>
          </div>
          <div className="tags-container" data-tag-set="5">
            <div className="make-compliment">
              <div className="compliment-container" onClick={handleTagClick}>
                Give a compliment
                <i className="far fa-smile-wink"></i>
              </div>
            </div>
          </div>
          <div className="tags-box">
            <input
              type="text"
              className="tag form-control"
              name="comment"
              id="inlineFormInputName"
              placeholder="please enter your review"
              value={comment}
              onChange={handleCommentChange}
            />
            <input type="hidden" name="product_id" value="1" />
          </div>
        </div>

        <div className="button-box">
          <input
            type="submit"
            className={`done btn btn-warning ${!selectedTag && !comment ? "disabled" : ""}`}
            disabled={!selectedTag && !comment}
            value="Add review"
            onClick={handleSubmit}
          />
        </div>

        <div className="submited-box" style={{ display: submitted ? "block" : "none" }}>
          <div className="loader"></div>
          <div className="success-message">Thank you!</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndRating;