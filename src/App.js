import React, { useState, useEffect } from "react";
import fetchPosts from "./services/fetchPosts";

const App = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let mounted = true;

    const getPosts = async () => {
      const results = await fetchPosts();
      if (mounted) { //render only if componente is mounted
        setPosts(results);
      }
    };

    getPosts();
    return () => { mounted = false; };
  }, []);

  if (!posts) {
    return <span>Loading...</span>;
  }

  return (
    <ul>
      {posts.map(item => (
        <li key={item.key}>{item.title}</li>
      ))}
    </ul>
  );
};

export default App;
