import React from "react";
import NavBar  from "./component/NavBar";
import Home from "./component/home";
import SocialLink from "./component/SocialLink";
import About from "./component/About";
import Project from "./component/Project"
import Skills from "./component/Skills";
import Contact from "./component/Contact";

function App() {
  return (
<>
<NavBar></NavBar>
<Home></Home>
<SocialLink></SocialLink>
<Skills></Skills>
<About></About>
<Project></Project>
<Contact></Contact>

</>
  );
}

export default App;
