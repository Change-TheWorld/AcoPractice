var app = angular.module('myApp', ['ngAnimate', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/todoList', {
        templateUrl: 'pages/TodoList/myTodoList.html',
        controller: 'myTodoListCtrl'
    }).when('/form', {
        templateUrl: 'pages/Form/myForm.html',
        controller: 'myFormCtrl'
    }).when('/calculator', {
        templateUrl: 'pages/Calculator/myCalculator.html',
        controller: 'myCalculatorCtrl'
    }).otherwise({
        redirectTo: '/todoList'
      });
}]);