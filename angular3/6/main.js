var app = angular.module("SampleApp", []);

		app.controller("SampleAppCtrl", function ($scope) {

			$scope.clickHandler = function () {
				$scope.classNames = ["test-div", "lightGreen"];
			}

		});