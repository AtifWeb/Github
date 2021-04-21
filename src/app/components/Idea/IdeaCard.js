import React from "react";
import { Link } from "react-router-dom";

function IdeaRow({ desc, id }) {
  return (
    <Link className="idea-card-link" to={`/idea/show/12`}>
      <div className="IdeaCard">
        <img src="https://cdn.pixabay.com/photo/2021/04/12/17/53/flower-6173483__340.jpg" />
        <p>desc</p>
      </div>
    </Link>
  );
}

export default IdeaRow;
