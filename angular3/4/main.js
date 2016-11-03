var app = angular.module("SampleApp", []);

		app.controller("SampleAppCtrl", function ($scope) {

			$scope.selectedClass = "lightGreen";

			$scope.classNames = [{ displayName: "Light Green", value: "lightGreen" },
				{ displayName: "Light Blue", value: "lightBlue" },
				{ displayName: "Light Coral", value: "lightCoral" }];
		});