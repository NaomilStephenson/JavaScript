'use strict'

for (let n = 1; n <= 100; n++ ){
    let testSet = [
        {number: 3, answer: `Fizz`},
        {number: 5, answer: `Buzz`},
        {number: 7, answer: 'House'}
    ];
    let output = '';
    let result = '';
    for (let t of testSet){
        (n % t.number) ? output = n : result += t.answer;
    }
    result ? console.log(result): console.log(output);
};