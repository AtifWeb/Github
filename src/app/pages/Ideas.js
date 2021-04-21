import React, { useEffect } from "react";
import IdeaCard from "../components/Idea/IdeaCard";
import "../../assets/css/idea.css";
import axios from "axios";
function Ideas() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/show")
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Ideas">
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />
    </div>
  );
}

export default Ideas;
