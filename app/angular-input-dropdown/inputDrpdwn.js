angular.module('inputDropdown',[])
.directive('showHideList', function () {
    return {
      scope:{
        countries:'=',
        country:'='
      },
      template:'<div id="inputDrpdwn"  ng-mouseenter="listShow=true" ng-mouseleave="listShow=false"><input type="text" id="country" name="country" ng-keydown="changed($event)" ng-model="country">'+
                '<div ng-show="listShow"><ul>'+
                  '<li class="country" ng-repeat="cntry in countries | filter:country" ng-click="select(cntry)">{{cntry}}</li>'+
                '</ul></div></div>',
      link:function(){
        let ele = document.getElementById('inputDrpdwn');
        console.log(ele);
      },
      controller:function ($scope, $element) {
        $scope.listShow= false;

        $scope.select=function(cntry){
          $scope.country=cntry
          $scope.listShow=false;
        }

        $scope.changed=function(e){
          if (e.keyCode == 40) {
              this.next().focus();
              return false;
          } else if (e.keyCode == 38) {
              this.prev().focus();
              return false;
          }

          // on('keydown', 'li', function(e) {
          //      $this = $(this);
          //      if (e.keyCode == 40) {
          //          $this.next().focus();
          //          return false;
          //      } else if (e.keyCode == 38) {
          //          $this.prev().focus();
          //          return false;
          //      }
          //  }).find('li').first().focus();
          }
        }
      }
});
