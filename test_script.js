describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

var calulator = {
    multiply: mul 
}
describe("CALCULATE", function() {
    /*it("Sum Num", function() {
        expect(cal(1, 2)).toBe(3);
    });

    it("Multiply", function() {
        expect(mul(1,3)).toBe(3);
    });

    it("Minute", function(){
        expect(minute(5,2)).toBe(3);
    });*/

    it("Cal Number", function(){
        //Arrange
        spyOn(calulator, 'multiply')

        //Action
        cal(1,2,'*')

        //Assert
        expect(calulator.multiply).toHaveBeenCalled();
    });
});


function cal(a, b,  operator){
    if(operator=='+'){
        return plus(a,b);
    }else if(operator=='-'){
        return minute(a,b);
    }else if(operator=='*'){
        return calulator.multiply(a,b);
    }else if(operator=='/'){
        return devide(a,b);
    }
}

function plus(a, b){
    return a+b;
}
function minute(a, b){
    return a-b;
}
function mul(a, b) {
    return a*b;
}
function devide(a, b){
    return a/b;
}
