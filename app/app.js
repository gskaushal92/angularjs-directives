angular.module('inputDropdown',['ngRoute'])

.config(function(  $locationProvider,$routeProvider) {
  $locationProvider.hashPrefix('!')
  $routeProvider.otherwise({
    templateUrl : "index.html"})
  })
.controller("MainCtrl",['$scope',function($scope){
  $scope.countries=["Select","India","UK","US"]
    //
    //
    // let ele=angular.element('#country')
    // ele.on('mouseenter',function(){
    //   $scope.countryList=true;
    // })
    // ele.on('mouseout',function(){
    //   $scope.countryList=false;
    // })
}])
.directive('inputDrpDwn',function(){

})
.directive('showHideList', function () {
    return {
      scope:{
        countries:'=',
        country:'=',
        listShow:'='
      },
      template:'<input type="text" id="country" name="conutries" ng-model="country">'+
                '<ul ng-repeat="cntry in countries" ng-show="listShow">'+
                  '<li class="country">{{cntry}}</li>'+
                '</ul>',
        link: function (scope, element, attrs) {
            element.on('mouseenter', function () {
                //scope.listShow=true
                scope.$apply('listShow = true');
            });
            element.on('mouseout', function () {
                //scope.listShow=false
                scope.$apply('listShow = false');
            });
        }
    };
});
