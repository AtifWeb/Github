import React, { useState } from "react";
import axios from "axios";
import "../../assets/css/home.css";
function Main() {
  const [Description, setDescription] = useState("");
  const [File, setFile] = useState({});
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("working");
    axios
      .post("http://localhost:4000/api/post", {
        image: File,
        description: Description,
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="main-page">
      <h1>Share Your Ideas</h1>
      <form>
        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}></textarea>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <input type="submit" className="submit-button" onClick={HandleSubmit} />
      </form>
    </div>
  );
}

export default Main;
