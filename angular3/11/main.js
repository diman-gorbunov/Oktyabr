var app = angular.module("SampleApp", []);

		app.controller("SampleAppCtrl", function ($scope) {

			$scope.type;

			$scope.handleEvent = function (event) {
				console.log(event);
				$scope.type=event.type;
			}

			$scope.clickHandler = function (color) {
				alert(color);
			}
		});