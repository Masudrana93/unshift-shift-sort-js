
var ranaColor = "black";
var ranaAge = 35;
var ranaHeight = 5.5;
var ranaFriends = ['alom', 'fysal', 'anower'];
var ranaLocation = "Dhaka"


console.log(ranaAge);


// using object{}

var rana = {color: "black", age: 35, height: 5.5, friends: ['alom', 'fysal', 'anower'], location: 'Dhaka'}

console.log(rana);


var ranaM = {
    color: "black",
    age: 35,
    height: 5.5, 
    friends: ['alom', 'fysal', 'anower'], 
    location: 'Dhaka'
}

console.log(ranaM.friends[1]);


// add data in object from outside 

var myObj = {
    name : "alom",
    age: 34,
    email: 'alom12@gmail.com',
    location: "cumilla",
    height: 5.6,
}
myObj.color = "black"
myObj.birthYear = 1988

console.log(myObj);


// change data in object from outside 

var myObjTwo = {
    name : "aklom",
    age: 43,
    email: 'aklom45@gmail.com',
    location: "Sylhet",
    height: 5.4,
}
myObjTwo.location = "rangpur"
myObjTwo.birthYear = 1981

console.log(myObjTwo);


// delete data in object from outside 

var myObjOne = {
    name : "aklom",
    age: 43,
    email: 'aklom45@gmail.com',
    location: "Sylhet",
    height: 5.4,
}
delete myObjOne.location;


console.log(myObjOne);