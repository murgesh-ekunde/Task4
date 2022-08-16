var obj1 = { name: "Person 1", age:5 };
var obj2 = { age :5 , name:"Person 1"};

//first will create empty object
const sort1={};
const sort2={};

//now will sort given json and will run in forEach loop to put values in empty objects

Object.keys(obj1).sort().forEach(key=> {
    sort1[key]=obj1[key];
});

Object.keys(obj2).sort().forEach(key=> {
    sort2[key]=obj2[key];
});


//will use stringify method to compare two objects
console.log(JSON.stringify(sort1) === JSON.stringify(sort2));

