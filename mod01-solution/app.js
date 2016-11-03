(function (){
    var app = angular.module('LunchCheck', []);
   
    app.controller('LunchCheckController', ['$scope', LunchCheckController]);
    
    function LunchCheckController ($scope){
        
        $scope.message = "";
        
        $scope.checkItems = function (){
            if ($scope.itemsEntered){
                $scope.lunchItems = $scope.itemsEntered.split(',');
                if ($scope.lunchItems.length <= 3){
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too Much!";
                }
            } else {
                $scope.message = "Please enter data first";
            }
        }
    }   
})();