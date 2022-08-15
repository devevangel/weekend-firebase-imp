import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logOut, handleFetchPosts } from "../redux";

const HomePage = ({ handleLogOut, user, fetchPosts, posts }) => {
  let navigate = useNavigate();

  useEffect(() => {
    fetchPosts("");
  }, [fetchPosts]);

  return (
    <div>
      <div>
        <h4>Welcome, {user.email}</h4>
        <button onClick={() => navigate("/addPost")}>Create Post</button>
        <button onClick={handleLogOut}>Logout</button>
      </div>
      <React.Fragment>
        <h4>Your Feeds</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            {posts.map((post) => (
              <div key={post.id} style={{ border: "1px solid gray" }}>
                {post.title}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    columnGap: "3px",
                  }}
                >
                  Tags:
                  {post.tags.map((tag, i) => (
                    <div
                      style={{
                        backgroundColor: "pink",
                        borderRadius: "10px",
                        padding: "0px 5px",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                      }}
                      key={i}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "5px",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ marginLeft: "5px" }}>
                    &#10084;
                    {post.likes.length}
                  </div>
                  <button style={{ marginRight: "5px" }}>&#10084;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.authUser,
    posts: state.post.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogOut: () => dispatch(logOut()),
    fetchPosts: (query) => dispatch(handleFetchPosts(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
