import React from "react";
import useData from "./useData";

function App() {
  return (
    <div>
      {useData("photos").map((post) => (
        <p key={post.id}>{post.id}</p>
      ))}
    </div>
  );
}

export default App;
