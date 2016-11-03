var app = angular.module("SampleApp", []);

		app.controller("SampleAppCtrl", function ($scope) {

			$scope.styleObj = {
				color: "red",
				padding: "10px",
				border: "1px solid green",
				marginTop: "50px"
			};

		});