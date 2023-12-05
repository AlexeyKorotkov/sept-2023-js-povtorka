// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a, b) {
    let result = a + b;
    return (result);
}

let a1 = calc(10, 20);
let a2 = calc(5, 15);
console.log(a1, a2);

console.log('_______');
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(radius) {
    let result = radius * radius *Math.PI;
    return (result);
}

let r1 = circle(10);
let r2 = circle(14);
console.log(r1, r2)

console.log('_______');
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(s, r) {
    let res = s * r * Math.PI*2
    console.log(res);
}

cylinder(15, 10)

console.log('_______');
// - створити функцію яка приймає масив та виводить кожен його елемент
function printArray(array) {
    for (let item of array) {
        console.log(item);
    }
}
let arr=[1,5,'hello','okten'];
printArray(arr)

console.log('_______');
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text(text) {
    document.write(`<p>${text}</p>`)
}

text('HELLO WORLD');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function text2(text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
}
text2('HOW ARE YOU');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function text3(text, count) {
    document.write(`<ul>`)

    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);


    }
    document.write(`</ul>`);
}

text3('SOME TEXT', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrCreator(arr) {
    document.write(`<ul>`);
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

arrCreator([1, 2, true, 'word'])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function arrCreator1(arr) {
    for (let item of arr) {
        document.write(`<div>id:${item.id} name:${item.name} age:${item.age}</div>`);
    }
}

let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}
];
arrCreator1(users)
// - створити функцію яка повертає найменьше число з масиву
function minNumber(array) {
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        if (result > array[i]) {
            result = array[i];
        }


    }
    return (result);
}

let min = [1, 2, 0, -7, 5]
console.log(minNumber(min));

console.log('_______');
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (let number of arr) {
        result = result + number
    }
    return (result);
}

console.log(sum([1, 2, 10]));

console.log('_______');
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let value1 = arr[index1];
    let value2 = arr[index2];
    arr[index1] = value2;
    arr[index2] = value1;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

console.log('_______');
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'))