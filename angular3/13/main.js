angular.module("SampleApp",[])
.controller("defaultCtrl", function ($scope) {
	$scope.tasks = [
		{ action: "Task 1", complete: false },
		{ action: "Task 2", complete: true },
		{ action: "Task 3", complete: false },
		{ action: "Task 4", complete: true }
		];
});