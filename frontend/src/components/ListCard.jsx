import React, { useEffect, useState } from "react";
import ShowCards from "./ShowCards";

function ListCard() {
  const [posts, setPosts] = useState([
    {
      title: "",
      latitude: "",
      longitude: "",
      description: "",
      thumbnail: "",
      alibaba: "",
      wikipedia: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/locations")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setPosts(jsonRes));
  },posts);

  return (
    <div>
      {posts.map((post) => (
        <ShowCards title={post.title} description={post.description} thumbnail={post.thumbnail} alibaba={post.alibaba} wikipedia={post.wikipedia}/>
      ))}
    </div>
  );
}

export default ListCard;
