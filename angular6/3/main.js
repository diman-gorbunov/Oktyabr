angular.module("exampleApp",[])
.controller("defaultCtrl", function ($scope) {
        $scope.items = [
            { name: "Item 1", price: 10.9, category: "Category 1", count: 10, tax: 1.12, expiration: 10},
            { name: "Item 2", price: 1.1, category: "Category 1", count: 8, tax: 0.55, expiration: 12},
            { name: "Item 3", price: 2.6, category: "Category 2", count: 7, tax: 0.22, expiration: 5},
            { name: "Item 4", price: 17.5, category: "Category 2", count: 33, tax: 2.77, expiration: 10}];

        $scope.getExpiryDate = function (days) {
            var now = new Date();
            return now.setDate(now.getDate() + days);
        }
    });