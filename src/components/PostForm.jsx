import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebaseConfig";

import { handleCreatePost } from "../redux";

const PostForm = ({ createPost }) => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);

  const handleSelectTags = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    } else {
      setTags(tags.filter((tagItem) => tagItem !== tag));
    }
  };

  const handleSubmit = () => {
    const postData = {
      title: title,
      tags: tags.length === 0 ? ["SportS"] : tags,
      author: {
        uid: auth.currentUser.uid,
      },
      likes: [],
    };
    createPost(postData, navigate);
  };

  return (
    <div>
      {auth ? (
        <React.Fragment>
          <h3>Create Post</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Enter a post title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <span>Tags</span>
            <select multiple>
              <option
                onClick={(event) => handleSelectTags(event.target.value)}
                value="Food"
              >
                Food
              </option>
              <option
                onClick={(event) => handleSelectTags(event.target.value)}
                value="Tech"
              >
                Tech
              </option>
              <option
                onClick={(event) => handleSelectTags(event.target.value)}
                value="Sport"
              >
                Sport
              </option>
              <option
                onClick={(event) => handleSelectTags(event.target.value)}
                value="Crypto"
              >
                Crypto
              </option>
            </select>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "5px",
              }}
            >
              {tags.map((tag, i) => (
                <div key={i}>{tag}</div>
              ))}
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </React.Fragment>
      ) : (
        "No auth pls refresh"
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.authUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (userPost, nav) => dispatch(handleCreatePost(userPost, nav)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
