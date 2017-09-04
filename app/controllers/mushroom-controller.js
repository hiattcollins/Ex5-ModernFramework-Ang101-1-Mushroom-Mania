"use strict";
console.log("MushroomCtrl");

app.controller("MushroomCtrl", function($scope, MushroomFactory) {

	console.log("inside MushroomCtrl");

var getAllMushrooms = function() {
	console.log("getAllMushrooms activated");
	MushroomFactory.getMushrooms()
	.then(function(items) {
		console.log("MushroomFactory.getMushrooms", items);
		$scope.mushrooms = items;
		console.log("mushrooms", $scope.mushrooms);
	});
};

getAllMushrooms();

});