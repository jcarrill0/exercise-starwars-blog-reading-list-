import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import Card from "../component/Card";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container mt-3">
			<div className="horizontal-scroll-wrapper">
				<h1 className="mb-4 text-danger">Characters</h1>
				<div className="row mb-5 flex-nowrap">
					{store.peopleList.map((item, idx) => (
						<Card key={idx} people={item} category="people" />
					))}
				</div>
			</div>
			<div className="horizontal-scroll-wrapper">
				<h1 className="mb-4 text-danger">Planets</h1>
				<div className="row mb-5 flex-nowrap">
					{store.planetsList.map((item, idx) => (
						<Card key={idx} planet={item} category="planets" />
					))}
				</div>
			</div>
		</div>
	);
};
