import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const FeaturesDetail = ({ category, id }) => {
	const { store } = React.useContext(Context);

	return (
		<div className="row border-top border-2 border-danger mt-4 pt-4">
			<div className="col-md-10 offset-1">
				<table className="table table-borderless text-center text-danger">
					<thead>
						<tr>
							<th>Name</th>
							<th>{category === "people" ? "Birth Year" : "Climate"}</th>
							<th>{category === "people" ? "Gender" : "Population"}</th>
							<th>{category === "people" ? "Height" : "Orbital Period"}</th>
							<th>{category === "people" ? "Skin Color" : "Rotation Period"}</th>
							<th>{category === "people" ? "Eye Color" : "Diameter"}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							{store.peopleList.length > 0 &&
								store.planetsList.length > 0 && (
									<>
										<td>
											{category === "people"
												? store.peopleList[id].name
												: store.planetsList[id].name}
										</td>
										<td>
											{category === "people"
												? store.peopleList[id].birth_year
												: store.planetsList[id].climate}
										</td>
										<td>
											{category === "people"
												? store.peopleList[id].gender
												: store.planetsList[id].population}
										</td>
										<td>
											{category === "people"
												? store.peopleList[id].height
												: store.planetsList[id].orbital_period}
										</td>
										<td>
											{category === "people"
												? store.peopleList[id].skin_color
												: store.planetsList[id].rotation_period}
										</td>
										<td>
											{category === "people"
												? store.peopleList[id].eye_color
												: store.planetsList[id].diameter}
										</td>
									</>
								)}
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default FeaturesDetail;

FeaturesDetail.propTypes = {
	category: PropTypes.string,
	id: PropTypes.number
};
