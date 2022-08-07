import React, { useEffect, useState } from "react";
import "./PostDetails.css";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div>
      <h1>This Post For:{postId} </h1>
      <h4>{post.title}</h4>
      <h6>{post.body}</h6>
    </div>
  );
};

export default PostDetails;
