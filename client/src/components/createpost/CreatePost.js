import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import axios from "axios";
import "./CreatePost.css";

const CreatePost = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    image: "",
    caption: "",
  });
  // const [items, setItems] = useState([]);
  const onSubmitHandler = async (e) => {
    navigate("/");
    e.preventDefault();
    const newpost = { username: "xyz", caption: item.caption, img: item.image };
    axios
      .post("http://localhost:3002/createpost", newpost, {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        if (res.data.message.includes("successfully")) {
        } else {
          alert(res.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container1">
      <div className="">
        <h1>HEADER</h1>
      </div>
      <hr/>

      <div className="d-flex flex-column align-items-center border border-dark box1 ">
        <form action="" onSubmit={onSubmitHandler}>
          <div className="input-file mb-2">
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => setItem({ ...item, image: base64 })}
            />
          </div>
          <div className="mb-2">
            <input
            className="input"
              type="text"
              placeholder="Caption"
              value={item.caption}
              onChange={(e) => setItem({ ...item, caption: e.target.value })}
            />
          </div>
          <div>
            <button className="btn btn-primary custom">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
