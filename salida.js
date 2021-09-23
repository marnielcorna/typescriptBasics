console.log("hello world");
//TYPES
//STRING
var myString = "hello World";
myString = 22 + "";
//NUMBER
var myNumber = 22;
//BOOLEAN
var myBool = true || false;
//ANY
var myVar = "hello";
myVar = false;
//ARRAYS
var StringArray = ["item1", "item2", ""];
var NumberArray = [1, 2, 3, 4];
var BooleanArray = [true, true, false];
var AnyArray = [1, 2, true, "Hello", [], {}];
// TUPLE
var strNumTuple;
strNumTuple = ["Hola", 22];
strNumTuple = ["world", 245];
//VOID UNDEFINED NULL
// var myVoid: void = undefined;
// var myNull: null = undefined;
// var myUndefined: undefined = undefined;
//FUNCTIONS
var getSum = function (numb1, numb2) {
    return numb1 + numb2;
};
var mySum = function (numb1, numb2) {
    if (typeof (numb1) === "string") {
        numb1 = parseInt(numb1);
    }
    if (typeof (numb2) === "string") {
        numb2 = parseInt(numb2);
    }
    return numb1 + numb2;
};
document.write(mySum(2, 4));
var getName = function (firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
};
document.write();
