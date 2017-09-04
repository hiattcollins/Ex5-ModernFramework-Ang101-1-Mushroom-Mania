"use strict";

console.log("MushroomFactory");

app.factory("MushroomFactory", function($q, $http) {

	let getMushrooms = () => {
		let items = [];
		// console.log("getMushrooms triggered");
		return $q ((resolve, reject) => {
			$http.get('./dataloader.json')
			.then((itemObject) => {
				// console.log("itemObject", itemObject);
				let itemCollection = itemObject.data;
				// console.log("itemCollection", itemCollection); 
				// console.log("itemCollection.mushrooms", itemCollection.mushrooms);
				let subObject = itemCollection.mushrooms;
				Object.keys(subObject).forEach((key) => {
                subObject[key].id = key;
                items.push(subObject[key]);
            	});
				resolve(items);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	return {getMushrooms};


});