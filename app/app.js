angular.module('myApp',['ngRoute','inputDropdown'])

.config(function(  $locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('!')
    $routeProvider.otherwise({
      templateUrl : "index.html"})
  })
.controller("MainCtrl",['$scope',function($scope){
    $scope.countries=["Select","India","UK","US"]

    $scope.addCountry=function(){
      if($scope.countries.indexOf($scope.country)===-1){
        $scope.countries.push($scope.country)
      }
    }

    $scope.countryChange =function(){
      if($scope.country && $scope.country !=='Select'){
        $scope.btnDisable=false;
      }
      else {
        $scope.btnDisable=true;
      }
    }
}])
