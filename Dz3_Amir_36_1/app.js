var arr = [34, 54, 1, 23, 678, 72, 9, 10, 5, 89, 900];

var minNum = Math.min(...arr);
console.log("Наименьшее число:", minNum);

var maxNum = Math.max(...arr);
console.log("Наибольшее число:", maxNum);


var num = prompt("Введите число для генерации таблицы умножения:");

num = parseInt(num);

console.log(`Таблица умножения для числа ${num}:`);

for (var i = 1; i <= 10; i++) {
    var result = num * i;
    console.log(`${num} x ${i} = ${result}`);
}

function countVowels(str) {
    str = str.toLowerCase();

    var vowelCount = 0;

    for (var i = 0; i < str.length; i++) {
        var currentChar = str[i];

        if (currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') {
            vowelCount++;
        }
    }

    return vowelCount;
}

var inputString = "Hello World";
var result = countVowels(inputString);
console.log("Количество гласных: " + result);

