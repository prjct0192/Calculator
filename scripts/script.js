// function Car(name, year) {
//     this.name = name;
//     this.year = year;
// }
//
// Car.prototype.getAge = function () {
//     return new Date().getFullYear() - this.year
// }
//
// Car.prototype.color = 'black'
//
// var ford = new Car('Ford', 2015);
// var bmw = new Car('BMW', 2017);
//
// ford.color = 'red';
// console.log(ford);
// console.log(bmw);

// var ford = Object.create({
//     calculateDistancePerYear: function () {
//         Object.defineProperty(this, 'distancePerYear', {
//             value: Math.ceil(this.distance / this.age),
//             enumerable: true,
//             writable: false,
//             configurable: false
//         })
//         console.log('Calculate', 2018 - this.year);
//     }
// }, {
//     name: {
//         value: 'Ford',
//         enumerable: true,
//         writable: true,
//         configurable: false
//     },
//     model: {
//         value:'Focus',
//         enumerable: true,
//         writable: true,
//         configurable: false
//     },
//     year: {
//         value: 2015,
//         enumerable: true,
//         writable: true,
//         configurable: false
//     },
//     distance: {
//         value: 120500,
//         enumerable: true,
//         writable: true,
//         configurable: false
//     },
//     age: {
//       enumerable: true,
//       get: function () {
//         console.log('Getting age');
//         return new Date().getFullYear() - this.year;
//       },
//       set: function () {
//         console.log('Setting age');
//       }
//
//     }
// })
//
// console.log(ford);
//
// for (var key in ford) {
//     if (ford.hasOwnProperty(key)){
//         console.log(key, ford[key]);
//     }
//
// }

// var person = {
//     name: 'Max',
//     age: 28,
//     job: 'Frontend'
// }
// //
// // for (var key in person) {
// //     if(person.hasOwnProperty(key));
// //     console.log(person[key]);
// // }
//
// // var keys = Object.keys(person);
// //
// // console.log(keys);
//
// Object.keys(person).forEach(function (key) {
//     console.log(person[key]);
// })
//
// var createCounter = function (counterName) {
//     var counter = 0;
//
//
//     return  {
//         increment: function () {
//             counter++;
//         },
//         decrement: function () {
//             counter--;
//         },
//         getCounter: function () {
//             return counter;
//         }
//     }
//
// }
//
// var counterA = createCounter('Counter A');
// var counterB = createCounter('Counter B');
//
// counterA.increment();
// counterA.increment();
// counterA.increment();
//
// counterB.decrement();
// counterB.decrement();

// var person = {
//     age: 28,
//     name: 'Max',
//     job: 'Frontend',
//     displayInfo: function (ms) {
//
//         setTimeout(function () {
//
//             console.log('Name: ', this.name);
//             console.log('Job: ', this.job);
//             console.log('Age: ', this.age);
//         }.bind(this), ms);
//
//     }
//
//
// }
//
// person.displayInfo(5000)

// function printObject(objName) {
//     console.log('Printing object: ', objName);
//     for (var key in this) {
//         if (this.hasOwnProperty(key)) {
//             console.log('[' + key + ']', this[key]);
//         }
//     }
// }
//
//
//
// var person = {
//     firstName: 'Max',
//     job: 'Backend',
//     age: 29,
//     friends: ['Elena', 'Igor'],
// }
//
// var car = {
//     name: 'Ford',
//     model: 'Focus',
//     year: 2017,
// }
//
// var printPerson = printObject.bind(person);
//
// printPerson('Person');
//
//
// printObject.call(car, 'Car');
//
// printObject.apply(person, ['Person']);

// var a = [1, 2, 3];
// var b = [5, 'Hello', 6];
//
// Array.prototype.double = function () {
//     var newArray = this.map()
//
//     return newArray
// }
//
// var newA = a.double();
// var newB = b.double();
//
// console.log('A', newA);
// console.log('B', newB);


//
// function sequence(start, step) {
//
//     var start1 = start;
//     var step1 = step;
//
//
//     return function () {
//
//         resultat = start1 + step1
//         }
//
// }
//
// console.log(resultat + step1)
//
// var generator = sequence(10, 5);
// var generator2 = sequence(2, 2);


// function exuecute() {
//     var a, b, c, result
//     a = document.getElementById('inp-1');
//     b = document.getElementById('inp-2');
//     c = document.getElementById('inp-3');
//     a = parseInt(a);
//     b = parseInt(b);
//     c = parseInt(c);
//     result = a + b + c
//     document.getElementById('result').value = result;
//
//     console.log(a)
// }

// var inp1 = document.getElementById('inp-1');
// var inp2 = document.getElementById('inp-2');
// var inp3 = document.getElementById('inp-3');
// var btn = document.querySelector('#btn');
// var resultInput = document.getElementById('result');
//
//
//
//
// btn.addEventListener('click', function result() {
// console.log('Hello');
//     a = parseInt(inp1.value);
//     b = parseInt(inp2.value);
//     c = parseInt(inp3.value);
//     return resultInput.value =  a + b + c;
//
// });   пример сложения

var inp1 = document.getElementById('inp-1');
var inp2 = document.getElementById('inp-2');

var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');

var resultInput = document.getElementById('result');




btn1.addEventListener('click', function result() {
    console.log('Hello');
    a = parseInt(inp1.value);
    b = parseInt(inp2.value);

    return resultInput.value =  a + b;

});

btn2.addEventListener('click', function result() {
    console.log('Hello');
    a = parseInt(inp1.value);
    b = parseInt(inp2.value);

    return resultInput.value =  a - b;

});

btn3.addEventListener('click', function result() {
    console.log('Hello');
    a = parseInt(inp1.value);
    b = parseInt(inp2.value);

    return resultInput.value =  a * b;

});

btn4.addEventListener('click', function result() {
    console.log('Hello');
    a = parseInt(inp1.value);
    b = parseInt(inp2.value);
    if (a > 0) {
        return resultInput.value =  a / b;
    } else if(b > 0) {
        return resultInput.value =  a / b;
    } else {
        alert('Ноль делить нельзя, как и делить на ноль тоже, ты же не Гепа');
    }
});















