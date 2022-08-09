import { Avatar, Button, Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMyProfile, getMyPosts, logoutUser } from "../../Actions/User";
import Loader from "../Loader/Loader";
import Post from "../Post/Post";
import User from "../User/User";
import "./Account.css";

const Account = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { user, loading: userLoading } = useSelector((state) => state.user);
  const { loading, error, posts } = useSelector((state) => state.myPosts);
  const {
    error: likeError,
    message,
    loading: deleteLoading,
  } = useSelector((state) => state.like);

  const [followersToggle, setFollowersToggle] = useState(false);

  const [followingToggle, setFollowingToggle] = useState(false);
  const logoutHandler = () => {
    dispatch(logoutUser());
    alert.success("Logged out successfully");
  };

  const deleteProfileHandler = async () => {
    await dispatch(deleteMyProfile());
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (likeError) {
      alert.error(likeError);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, message, likeError, dispatch]);

  return loading === true || userLoading === true ? (
    <Loader />
  ) : (
    <div className="account">
      <div className="accountleft">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post._id}
              postId={post._id}
              caption={post.caption}
              postImage={post.image.url}
              likes={post.likes}
              comments={post.comments}
              ownerImage={post.owner.avatar.url}
              ownerName={post.owner.name}
              ownerId={post.owner._id}
              isAccount={true}
              isDelete={true}
            />
          ))
        ) : (
          <Typography variant="h6" style={{ fontFamily: "monospace" }}>
            You have not made any post
          </Typography>
        )}
      </div>
      <div className="accountright">
        <Avatar
          src={user.avatar.url}
          sx={{ height: "8vmax", width: "8vmax" }}
        />

        <Typography variant="h5" style={{ fontFamily: "monospace" }}>
          {user.name}
        </Typography>
        <div className="userInfodash">
          <div>
            
          <Typography className="accinfo1" style={{ fontFamily: "monospace", fontSize:"200%" }}>
              {user.followers.length}
            </Typography>
            <Typography
              style={{ fontFamily: "monospace" ,cursor:"pointer"}}
              onClick={() => setFollowersToggle(!followersToggle)}
            >
              Followers
            </Typography>

          </div>

          <div>
          <Typography className="accinfo1" style={{ fontFamily: "monospace", fontSize:"200%" }}>
              {user.following.length}
            </Typography>
            <Typography
              style={{ fontFamily: "monospace" ,cursor:"pointer"}}
              onClick={() => setFollowingToggle(!followingToggle)}
            >
              Following
            </Typography>


          </div>

          <div>
          <Typography className="accinfo1" style={{ fontFamily: "monospace" , fontSize:"200%"}}>
              {user.posts.length}
            </Typography>
            <Typography style={{ fontFamily: "monospace" }}>Posts</Typography>

          </div>
        </div>

        <Button
          style={{ fontFamily: "monospace" }}
          variant="contained"
          onClick={logoutHandler}
        >
          Logout
        </Button>

        <Link style={{ fontFamily: "monospace" }} to="/update/profile">
          Edit Profile
        </Link>
        <Link style={{ fontFamily: "monospace" }} to="/update/password">
          Change Password
        </Link>

        <Button
          variant="text"
          style={{ color: "red", margin: "2vmax", fontFamily: "monospace" }}
          onClick={deleteProfileHandler}
          disabled={deleteLoading}
        >
          Delete My Profile
        </Button>

        <Dialog
          open={followersToggle}
          onClose={() => setFollowersToggle(!followersToggle)}
        >
          <div className="DialogBox">
            <Typography variant="h4" style={{ fontFamily: "monospace" }}>
              Followers
            </Typography>

            {user && user.followers.length > 0 ? (
              user.followers.map((follower) => (
                <User
                  key={follower._id}
                  userId={follower._id}
                  name={follower.name}
                  avatar={follower.avatar.url}
                />
              ))
            ) : (
              <Typography style={{ margin: "2vmax", fontFamily: "monospace" }}>
                You have no followers
              </Typography>
            )}
          </div>
        </Dialog>

        <Dialog
          open={followingToggle}
          onClose={() => setFollowingToggle(!followingToggle)}
        >
          <div className="DialogBox">
            <Typography variant="h4" style={{ fontFamily: "monospace" }}>
              Following
            </Typography>

            {user && user.following.length > 0 ? (
              user.following.map((follow) => (
                <User
                  key={follow._id}
                  userId={follow._id}
                  name={follow.name}
                  avatar={follow.avatar.url}
                />
              ))
            ) : (
              <Typography style={{ margin: "2vmax", fontFamily: "monospace" }}>
                You're not following anyone
              </Typography>
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Account;
