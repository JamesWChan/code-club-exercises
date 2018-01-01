var assert = require('assert');
var counting_to_100 = require('../count100.js');

describe('counting_to_100', function(){

    describe('multiplesOfThreeTest', function(){
        let multiplesOfThree = [
            {int: 3, str: "Fizz"},
            {int: 6, str: "Fizz"},
            {int: 9, str: "Fizz"},
            {int: 12, str: "Fizz"},
            {int: 18, str: "Fizz"},
            {int: 21, str: "Fizz"},
            {int: 24, str: "Fizz"},
            {int: 27, str: "Fizz"},
            {int: 33, str: "Fizz"},
            {int: 36, str: "Fizz"},
            {int: 39, str: "Fizz"},
            {int: 42, str: "Fizz"},
            {int: 48, str: "Fizz"},
            {int: 51, str: "Fizz"},
            {int: 54, str: "Fizz"},
            {int: 57, str: "Fizz"},
            {int: 63, str: "Fizz"},
            {int: 66, str: "Fizz"},
            {int: 69, str: "Fizz"},
            {int: 72, str: "Fizz"},
            {int: 78, str: "Fizz"},
            {int: 81, str: "Fizz"},
            {int: 84, str: "Fizz"},
            {int: 87, str: "Fizz"},
            {int: 93, str: "Fizz"},
            {int: 96, str: "Fizz"},
            {int: 99, str: "Fizz"},
        ];

        multiplesOfThree.forEach(function(i){
            it(`should be '${i.str}' when passed ${i.int}`, function(){
            assert.ok(i.int, i.str);
        });
        });
    });

    describe('multiplesOfFiveTest', function(){
        let multiplesOfFive = [
            {int: 5, str: "Buzz"},
            {int: 10, str: "Buzz"},
            {int: 15, str: "Buzz"},
            {int: 20, str: "Buzz"},
            {int: 25, str: "Buzz"},
            {int: 30, str: "Buzz"},
            {int: 35, str: "Buzz"},
            {int: 40, str: "Buzz"},
            {int: 45, str: "Buzz"},
            {int: 50, str: "Buzz"},
            {int: 55, str: "Buzz"},
            {int: 60, str: "Buzz"},
            {int: 65, str: "Buzz"},
            {int: 70, str: "Buzz"},
            {int: 75, str: "Buzz"},
            {int: 80, str: "Buzz"},
            {int: 85, str: "Buzz"},
            {int: 90, str: "Buzz"},
            {int: 95, str: "Buzz"},
            {int: 100, str: "Buzz"}
        ];

        multiplesOfFive.forEach(function(i){
            it(`should be '${i.str}' when passed '${i.int}'`, function(){
                assert.ok(i.int, i.str);
            });
        });
    });

    describe('multiplesOfBothTest', function(){
        let multiplesOfBoth = [
            {int: 15, str: "FizzBuzz"},
            {int: 30, str: "FizzBuzz"},
            {int: 45, str: "FizzBuzz"},
            {int: 60, str: "FizzBuzz"},
            {int: 75, str: "FizzBuzz"},
            {int: 90, str: "FizzBuzz"}
        ];

        multiplesOfBoth.forEach(function(i){
            it(`should be "${i.str}" when passed ${i.int}`, function () {
                assert.ok(i.int, i.str);
            });
        });
    });
});