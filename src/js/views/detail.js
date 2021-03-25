import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import FeaturesDetail from "../component/featuresDetail";
import { Context } from "../store/appContext";

const Detail = () => {
	const { store } = useContext(Context);
	const { category, id } = useParams();

	return (
		<div className="container mt-5">
			<div className="row mb-5">
				<div className="col-md-6">
					<img className="img-fluid" src="http://placehold.it/800x600" alt="img" />
				</div>
				<div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
					{store.peopleList.length > 0 &&
						store.planetsList.length > 0 && (
							<h1>
								{category === "people" ? store.peopleList[id - 1].name : store.planetsList[id - 1].name}
							</h1>
						)}
					<p className="description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic illo aperiam corrupti eligendi
						facere! Aperiam excepturi odit quidem esse pariatur commodi recusandae iure numquam libero
						mollitia quaerat dignissimos unde suscipit qui maiores aliquam delectus, earum non fugiat alias
						a quia iusto! Soluta, obcaecati eligendi beatae ducimus voluptates nihil est odit inventore
						excepturi ea incidunt quaerat sequi cum illum? Ratione, veritatis, adipisci voluptatum nesciunt
						obcaecati expedita rem perferendis, officia et ipsa dicta. Sint vel ipsa sapiente quos nesciunt?
						Autem, enim iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, beatae soluta
						hic non illo animi minima maiores unde, voluptas harum officia ratione quo veniam architecto
						voluptatum quidem reprehenderit quibusdam culpa. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Animi cumque quaerat natus unde voluptatem exercitationem est assumenda
						dolorem earum maxime. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, beatae
						soluta hic non illo animi minima maiores unde, voluptas harum officia ratione quo veniam
						architecto voluptatum quidem reprehenderit quibusdam culpa. Lorem ipsum dolor sit amet
						consectetur adipisicing elit.
					</p>
				</div>
			</div>
			<FeaturesDetail category={category} id={id - 1} />
		</div>
	);
};

export default Detail;
