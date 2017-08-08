app.directive('dropDownMenu', function(){
  return{
    scope: {
      val: '=',
      name: '@',
      lists: '='
    },
    templateUrl: "drop-down-menu.html",
    restrict: 'E',
    replace: true,
    controller: function($scope, $element, $attrs){
        //console.log($element);
        //console.log($attrs);
      $scope.selectedItem = function(choice){
        $scope.val = choice;
      }
    }
  }
});

// gulp task