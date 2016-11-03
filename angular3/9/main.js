var app = angular.module("SampleApp", []);

		app.controller("SampleAppCtrl", function ($scope) {

			$scope.items = ["item1","item2","item3","item4","item5"];
			$scope.class1 = "green";
			$scope.class2 = "red";
		});