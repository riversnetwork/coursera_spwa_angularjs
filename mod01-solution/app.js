(function (){
    var app = angular.module('LunchCheck', []);
   
    app.controller('LunchCheckController', ['$scope', LunchCheckController]);
    
    function LunchCheckController ($scope){
        
        $scope.message = "";
        
        $scope.checkItems = function (){
            $scope.lunchItems = [];
            if ($scope.itemsEntered){
                $scope.lunchItems.push($scope.itemsEntered.split(','));
                console.log($scope.lunchItems);
            } else {
                $scope.message = "Please enter data first";
            }
        }
    }   
})();