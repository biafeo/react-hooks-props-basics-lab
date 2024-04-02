import React from "react";
import NavBar from "./NavBar.js";
import Home from "./Home.jsx";
import About from "./About.jsx";
import user from "../data/user.js";

// pass this data down as props to the child component(s) that need it!
console.log(user);

function App() {
	return (
		<div>
			<NavBar />
			<Home name={user.name} city={user.city} color={user.color} />
			<About bio={user.bio} links={user.links} />
		</div>
	);
}

export default App;
