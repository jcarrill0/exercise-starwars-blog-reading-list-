import React from "react";

// import StarwarsCard from "../../js/component/Card.js";

const Slider = () => {
	return (
		<div id="media" className="carousel carousel-dark slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<div className="row">
						<div className="col-md-3">
							<a className="thumbnail" href="#">
								<img className="w-100" src="http://placehold.it/150x150" />
							</a>
						</div>
						<div className="col-md-3">
							<a className="thumbnail" href="#">
								<img className="w-100" src="http://placehold.it/150x150" />
							</a>
						</div>
						<div className="col-md-3">
							<a className="thumbnail" href="#">
								<img className="w-100" src="http://placehold.it/150x150" />
							</a>
						</div>
						<div className="col-md-3">
							<a className="thumbnail" href="#">
								<img className="d-block w-100" src="http://placehold.it/150x150" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#media" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#media" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Slider;
