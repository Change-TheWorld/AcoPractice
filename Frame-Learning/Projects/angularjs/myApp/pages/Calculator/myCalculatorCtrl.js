
app.controller('myCalculatorCtrl', ['$scope','CalcService',function($scope, CalcService) {
    $scope.a = 0;
    $scope.b = 0;
    $scope.mark = '';

    $scope.result = '';
    $scope.errorMsg = '';

    $scope.result = function() {
        alert("$scope.mark");
        switch($scope.mark) {
            case '+': 
                $scope.result = CalcService.add($scope.a, $scope.b);
                break;
            case '-': 
                $scope.result = CalcService.subtract($scope.a, $scope.b);
                break;
            case '*': 
                $scope.result = CalcService.multiply($scope.a, $scope.b);
                break;
            case '/': {
                if($scope.b == 0) {
                    $scope.errorMsg = "错误！分母不能为0";
                    break;
                }
                $scope.result = CalcService.divide($scope.a);
                break;
            }
            case 'x^2': 
                $scope.result = CalcService.square($scope.a);
                break;
            case 'x^3': 
                $scope.result = CalcService.cube($scope.a);
                break;
            case 'x!': 
                $scope.result = CalcService.factorial($scope.a);
                break;
            default: 
                break;
        };
    };
}]);