angular.module('inputDropdown',['ngRoute'])

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
.directive('showHideList', function () {
    return {
      scope:{
        countries:'=',
        country:'='
      },
      template:'<div  ng-mouseenter="mouseeneter()" ng-mouseleave="mouseleave()"><input type="text" id="country" name="country" ng-model="country">'+
                '<div ng-show="listShow"><ul ng-repeat="cntry in countries | filter:country">'+
                  '<li class="country" ng-click="select(cntry)">{{cntry}}</li>'+
                '</ul></div></div>',
      controller:function ($scope, $element) {
        $scope.listShow= false;
        $scope.mouseeneter =function(){
          $scope.listShow=true;
        }
        $scope.mouseleave=function(){
          $scope.listShow=false;
        }
        $scope.select=function(cntry){
          $scope.country=cntry
          $scope.listShow=false;
        }
      }
    };
});
