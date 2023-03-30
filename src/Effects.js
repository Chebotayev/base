import React, { useCallback, useEffect, useState, memo } from "react";
import api from "./api";
const Effects = memo(() => {
  console.log("render Effects");
  const [number, setNumber] = useState(1);
  const [posts,setPosts] = useState([])

  const handleClick = useCallback(() => {}, [])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await  api("/posts")
      console.log(response)
      setPosts(response);
    };

    setTimeout(() => setNumber(2), 1000)

    fetchPosts();

    handleClick()

    return () => {
      console.log("unmount");
    };
  }, [handleClick]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.post(`/posts/${number}`, { })
      console.log(response)
    };

    fetchPosts()
    
  }, [number]);

  return <div>
    This is effect {number}
    <ul>
      {posts.map(post => <li>{post.title}</li>)}
    </ul>
  
  </div>;
});

export default Effects;
