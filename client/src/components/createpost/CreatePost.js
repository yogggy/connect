import React from 'react'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const CreatePost = () => {
    const [img, setimg] = useState("")
    const [caption, setcaption] = useState("")


  return (
<div className="container">
      <header>
        <div>
            header
        </div>
      </header>
      <hr />
      <div >
        <form action="" >
        <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setItem({ ...item, image: base64 })}
          />
          <div className="desc">
            <input
              type="text"
              placeholder="Caption"
              value={caption}
              onChange={(e)=>setcaption(e.target.value)}
            />
          </div>
          <div >
            <button >post</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost