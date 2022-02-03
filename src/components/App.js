import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About"

// console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About/>
    </div>
  );
}

export default App;
