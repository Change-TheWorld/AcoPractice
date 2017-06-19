app.service('CalcService', function(MathService) {
    // +
    this.add = function(a,b) {
        return MathService.add(a,b);
    };
    // -
    this.subtract = function(a,b) {
        return MathService.subtract(a,b);
    };

    // *
    this.multiply = function(a,b) {
        return MathService.multiply(a,b);
    };

    // /
    this.divide = function(a,b) {
        return MathService.divide(a,b);
    };

    // X^2
    this.square = function(a) {
        return MathService.square(a);
    };

    // X^3
    this.cube = function(a) {
        return MathService.cube(a);
    };

    // X!
    this.factorial = function(a) {
        return MathService.factorial(a);
    };
    
});