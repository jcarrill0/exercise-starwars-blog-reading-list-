import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const FavoriteList = () => {
	const { store, actions } = React.useContext(Context);
	return (
		<div className="dropdown">
			<button
				className="btn btn-primary dropdown-toggle"
				type="button"
				id="buttonFavorite"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				Favorites
				<span className="badge bg-secondary ms-1">{store.favoriteList.length}</span>
			</button>
			{store.favoriteList.length === 0 ? (
				<ul className="dropdown-menu" aria-labelledby="buttonFavorite">
					<li className="dropdown-item fw-bold text-center">(empty)</li>
				</ul>
			) : (
				<ul className="dropdown-menu" aria-labelledby="buttonFavorite">
					{store.favoriteList.map((item, idx) => (
						<li key={idx} className="dropdown-item d-flex justify-content-between">
							<Link
								to={`/detail/${item.url.substring(21, item.url.length)}`}
								className="text-decoration-none text-dark">
								{item.name}
							</Link>
							<span className="badge bg-danger" onClick={() => actions.deleteFavorite(item)}>
								X
							</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default FavoriteList;
