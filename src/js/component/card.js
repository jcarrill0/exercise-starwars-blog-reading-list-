import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

const FavoriteIcon = ({ name }) => {
	const { store } = React.useContext(Context);

	const found = store.favoriteList.findIndex(element => element.name === name);
	if (found === -1) {
		return <span className="favorite">&#9872;</span>;
	}
	return <span className="favorite">&#9873;</span>;
};

const Card = ({ people, planet, category }) => {
	const { actions } = React.useContext(Context);

	return (
		<div className="col-md-3">
			<div className="card text-wrap mb-3">
				<img src="http://placehold.it/400x200" className="card-img-top" alt="..." />
				<div className="card-body">
					{category === "people" ? (
						<>
							<h5 className="card-title">{people.name}</h5>
							<p className="card-text">Gender: {people.gender}</p>
							<p className="card-text">Hair Color: {people.hair_color}</p>
							<p className="card-text">Eye-Color: {people.eye_color}</p>
						</>
					) : (
						<>
							<h5 className="card-title">{planet.name}</h5>
							<p className="card-text">Population: {planet.population}</p>
							<p className="card-text">Terrain: {planet.terrain}</p>
						</>
					)}

					<div className="d-grid d-flex justify-content-between">
						<Link
							to={`/detail/${
								category === "people"
									? people.url.substring(people.url.indexOf(category), people.url.length)
									: planet.url.substring(planet.url.indexOf(category), planet.url.length)
							}`}
							className="btn btn-outline-primary">
							Learn more!
						</Link>
						<button
							type="button"
							className="btn btn-outline-warning"
							onClick={() =>
								category === "people"
									? actions.addFavorite(people, true)
									: actions.addFavorite(planet, true)
							}>
							{category === "people" ? (
								<FavoriteIcon name={people.name} />
							) : (
								<FavoriteIcon name={planet.name} />
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	people: PropTypes.object,
	planet: PropTypes.object,
	category: PropTypes.string,
	id: PropTypes.number
};

FavoriteIcon.propTypes = {
	name: PropTypes.string
};
