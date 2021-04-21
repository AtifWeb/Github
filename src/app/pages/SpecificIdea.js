import React from "react";
import SmsIcon from "@material-ui/icons/Sms";
function SpecificIdea() {
  return (
    <div className="SpecificIdea">
      <img src="https://cdn.pixabay.com/photo/2021/04/12/17/53/flower-6173483__340.jpg" />
      <div className="comment-area">
        <div
          className="comments-presentation"
          onClick={(e) => {
            document.querySelector(".comments").classList.toggle("active");
          }}>
          <SmsIcon />
          <p>Comments</p>
        </div>
        <div className="comments">
          <form>
            <input
              type="text"
              className="comment-box"
              placeholder="Write your comment"
            />
          </form>
        </div>
      </div>
      <p className="SpecificIdea-Description">Desc</p>
    </div>
  );
}

export default SpecificIdea;
