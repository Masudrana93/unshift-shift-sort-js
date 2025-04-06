
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
    isSingle: true,
    nextObj:{
        favMovie:"joseph",
        favFruit: "Mango"
    
    }
}
delete myObjOne.location;


console.log(myObjOne);


// data check in object by quarde location []

var myObjOneT = {
    name : "kalom",
    'full name' : 'abul kalom',
    age: 30,
    email: 'kalom45@gmail.com',
    location: "Sylhet",
    height: 5.7,
    isSingle: true,
    nextObj:{
        favMovie:"joseph",
        favFruit: "Mango"
    
    }
}

console.log(myObjOneT['full name']);


var myObjOneTM = {
    name : "bakalom",
    age: 20,
    email: 'bakalom45@gmail.com',
    location: "Sylhet",
    height: 5.7,
    isSingle: true,
    nextObj:{
        favMovie:"joseph",
        favFruit: "Mangos"
    
    }
}

console.log(myObjOneTM.nextObj.favFruit);

// object ke lock kore rakha or kono data change korte na deya

var myObjlock = {
    name : "bgakalom",
    age: 70,
    email: 'bgakalom45@gmail.com',
    location: "Sylhet",
    height: 5.7,
  
}

Object.freeze(myObjlock);

myObjlock.name = "hasan";

console.log(myObjlock);