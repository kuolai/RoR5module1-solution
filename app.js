(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.items = "";
  $scope.message = "";

  $scope.judgeLunch = function () {
	var arrayOfStrings = $scope.items.split(',');
	console.log(arrayOfStrings , arrayOfStrings.length);
    if (arrayOfStrings == "")
		$scope.message = "Please enter data first";
	else if (arrayOfStrings.length <= 3)
		$scope.message = "Enjoy!"
	else
		$scope.message = "Too much!"
  };
}
})();