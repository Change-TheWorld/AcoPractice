// ********** 完整表单 Controller ***********
var app = angular.module('myApp');
app.controller("myFormCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.username = '';
    $scope.password = '';
    $scope.email = '';
    $scope.errrorMsg = '';

    if (angular.isNumber($scope.password)) {
        $scope.errrorMsg = '密码不能有数字！';
    }
    $scope.userInput = '';

    // 从 json 文件中读取
    /*
    $http({
        method: GET,
        url: 'assets/users.json'
    }).then(function successCallBack(data) {
        $scope.users = data;
    }, function errorCallBack(response) {

    });
    */
    $http.get('assets/users.json').success(function(data) {
        $scope.users = data;
    });
    
    $scope.orderRule = 'year';

}]);