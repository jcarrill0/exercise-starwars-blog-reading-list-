import FavoriteList from "../component/FavoriteList";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleList: [],
			planetsList: [],
			favoriteList: []
		},
		actions: {
			getPeople: async () => {
				await fetch("https://swapi.dev/api/people")
					.then(res => {
						return res.ok ? res.json() : Promise.reject(res);
					})
					.then(people => setStore({ ...getStore(), peopleList: people.results }))
					.catch(err => console.log("Ocurrio un error"));
			},
			getPlanets: async () => {
				await fetch("https://swapi.dev/api/planets")
					.then(res => {
						return res.ok ? res.json() : Promise.reject(res);
					})
					.then(planets => setStore({ ...getStore(), planetsList: planets.results }))
					.catch(err => console.log("Ocurrio un error"));
			},
			addFavorite: data => {
				const listStore = getStore().favoriteList;
				const found = listStore.findIndex(element => element.name === data.name);

				if (found === -1) {
					setStore({ ...getStore(), favoriteList: [...listStore, data] });
				}
			},
			deleteFavorite: myObj => {
				const listStore = getStore().favoriteList;
				const listUpdate = listStore.filter(element => element.name !== myObj.name);

				setStore({ ...getStore(), favoriteList: listUpdate });
			},
			getFavorite: name => {
				const listStore = getStore().favoriteList;
				const found = listStore.findIndex(element => element.name === myObj.name);
				if (found === -1) {
					return false;
				}
				return true;
			}
		}
	};
};

export default getState;
