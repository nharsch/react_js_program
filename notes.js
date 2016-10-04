// var sayName = function(name) {
//   console.log('Hello, ' + name);
// };
// sayName('Nigel');


// var me = {
//   name: 'Tyler',
//   age: 25,
//   sayName: function(){
//     console.log(this.name);
//     // references current object
//   }
// };
//
// me.sayName();
// // Hello, Nigelc

// function takes object and adds method to it
// var sayNameMixin = function(obj) {
//   obj.sayName = function() {
//     console.log(this.name);
//   };
// };
//
// var me = {
//   name: 'Nigel',
//   age: 30
// };
//
// var you = {
//   name: "Tyler",
//   age: 30
// };
//
// // bind function
// sayNameMixin(me);
// sayNameMixin(you);
//
// // call bound function
// me.sayName();
// you.sayName();
//
// var Person = function(name, age){
//   return {
//     name: name,
//     age: age,
//     sayName: function(){
//       console.log(this.name);
//     },
//     mother: {
//       name: 'Stacey',
//       sayName: function(){
//         console.log(this.name);
//       }
//     }
//   };
// };
//
// var jim = Person('Jim', 42);
// jim.sayName();
// jim.mother.sayName();

// var sayName = function(lang1, lang2, lang3) {
//   console.log("My name is " + this.name + lang1 + lang2 + lang3)
// };
//
// var stacey = {
//   name: 'Stacey',
//   age: 34
// };
//
// var languages = ['javascript', 'python', 'ruby']
//
// // sayName.apply(stacey, languages)
//
// var newFn = sayName.bind(stacey);
// newFn();

// object type, Animal is a function that takes properties and sets them
// to instance
// var Animal = function(color, name, type){
//   this.color = color;
//   this.name = name;
//   this.type = type
// }
//
// // new binds
// var zebra = new Animal('black and white', 'Zorro', 'Zebra');
// console.log(zebra.name);
//
// var sayAge = () => {
//   console.log(this.age);
// };
//
// var me = {
//   age: 25
// };
//
// sayAge();
// window.age = 30;
// sayAge();

function condRet (bool) {
  return bool === true ? console.log("true") : console.log("false")
}

condRet(true)
