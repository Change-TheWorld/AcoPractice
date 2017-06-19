app.controller('myTodoListCtrl',[ '$scope', '$interval', function ($scope, $interval) {
    // time
    $scope.tempTime = new Date().toLocaleTimeString();
    // console.log($scope.tempTime);
    $interval(function () {
        $scope.tempTime = new Date().toLocaleTimeString();
    }, 1000);

    // todoList
    $scope.todoList = [{
        todoText: "默认： Hello Aco！",
        tDone: false
    }];

    // doneList
    $scope.doneList = [{
        doneText: "默认已完成",
        cDone: true
    }];
    // 添加任务
    $scope.todoAdd = function () {
        $scope.todoList.push({
            todoText: $scope.todoInput,
            tDone: false
        });
        $scope.todoInput = "";
    };
    // 已完成
    $scope.completed = function () {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function (x) {
            if (!x.tDone) {
                $scope.todoList.push(x);
            } else {
                $scope.doneList.push({
                    doneText: x.todoText,
                    cDone: true
                });
            }
        });
    };
}]);