import React from "react";
import { useNavigate } from "react-router-dom";

import PostForm from "../components/PostForm";

const AddPostPage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <button onClick={() => navigate("/feeds")}>Feeds</button>
      </div>
      <PostForm />
    </div>
  );
};

export default AddPostPage;
