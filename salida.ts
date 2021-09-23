console.log("hello world");
//TYPES
//STRING

var myString: string = "hello World";
myString = 22 + "";
//NUMBER
var myNumber: number = 22;

//BOOLEAN
var myBool: boolean = true || false;

//ANY
var myVar: any = "hello";
myVar = false;

//ARRAYS
var StringArray: string[] = ["item1", "item2", ""];
var NumberArray: number[] = [1, 2, 3, 4];
var BooleanArray: boolean[] = [true, true, false];
var AnyArray: any[] = [1, 2, true, "Hello", [], {}];

// TUPLE
var strNumTuple: [string, number];
strNumTuple = ["Hola", 22];
strNumTuple = ["world", 245];

//VOID UNDEFINED NULL
// var myVoid: void = undefined;
// var myNull: null = undefined;
// var myUndefined: undefined = undefined;

//FUNCTIONS
var getSum = (numb1: number, numb2: number): number => {
    return numb1 + numb2;
}
var mySum = (numb1: number | string, numb2: number | string): number => {
    if (typeof (numb1) === "string") {
        numb1 = parseInt(numb1);
    } if (typeof (numb2) === "string") {
        numb2 = parseInt(numb2);
    }
    return numb1 + numb2;
}
document.write(mySum(2, 4))

var getName = (
    firstName: string,
    lastName?: string): string => {
        if(lastName == undefined){
            return firstName;
        }
    return `${firstName} ${lastName}`;
}
document.write();