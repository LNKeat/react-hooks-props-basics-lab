import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
const {name, city, bio, color} = user;
console.log(user)

function App() {
  return (
    <div>
      <NavBar />
      <Home username={name} city={city} color={color}   />
      <About bio={bio} />
    </div>
  );
}

export default App;
 