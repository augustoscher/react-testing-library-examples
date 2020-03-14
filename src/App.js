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
    //data-testid="list" so we can use getByTestId on test case
    <>
      <button>Filter</button>
      <ul data-testid="list"> 
        {posts.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
