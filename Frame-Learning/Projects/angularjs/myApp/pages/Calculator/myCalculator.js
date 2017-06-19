app.factory('MathService', function() {
    var factory = {};
    // +
    factory.add = function(a,b) {
        return a + b;
    }
    // -
    factory.subtract = function(a,b) {
        return a - b;
    }
    // *
    factory.multiply = function(a,b) {
        return a * b;
    }
    // /
    factory.divide = function(a,b) {
        return a / b;
    }
    // x^2
    factory.square = function(a) {
        return a * a;
    }
    //x^3
    factory.cube = function(a) {
        return a*a*a;
    }
    // x!
    factory.factorial = function(a) {
        return a > 1 ? a * factorial(a - 1) : 1;
    }

    return factory;
})