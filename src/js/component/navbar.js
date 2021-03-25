import React from "react";
import logoImage from "../../img/logo-starwars.png";
import { Link } from "react-router-dom";
import FavoriteList from "./favoriteList";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" className="navbar-brand" href="#">
					<img src={logoImage} width={75} height={75} className="d-inline-block align-top" />
				</Link>
				<FavoriteList />
			</div>
		</nav>
	);
};
