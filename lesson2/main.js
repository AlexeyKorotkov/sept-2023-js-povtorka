// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2, 3, 4, 5, 6, true, false, 'hello', 'okten'];
console.log(arr)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book = {
    title: 'Avatar',
    pageCount: 550,
    genre: 'fantasy'
}
console.log(book)
let book1 = {
    title: 'Harry Potter',
    pageCount: 600,
    genre: 'fantasy'
}
console.log(book1)
let book2 = {
    title: 'Game of Thrones',
    pageCount: 650,
    genre: 'fantasy'
}
console.log(book2)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book10 = {
    title: 'Avatar',
    pageCount: 550,
    genre: 'fantasy',
    autors: [{name: 'James Cameron', age: 69}]
}
console.log(book10);
let book11 = {
    title: 'Harry Potter',
    pageCount: 600,
    genre: 'fantasy',
    autors: [{name: 'Joanne Kathleen Rowling', age: 58}]
}
console.log(book11)
let book12 = {
    title: 'Game of Thrones',
    pageCount: 650,
    genre: 'fantasy',
    autors: [{name: 'George R. R. Martin', age: 75}]
}
console.log(book12)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'vasya', username: 'vaso', password: 123},
    {name: 'petya', username: 'pet', password: 345},
    {name: 'kolya', username: 'kol', password: 567},
    {name: 'olya', username: 'ol', password: 789},
    {name: 'max', username: 'maxus', password: 910},
    {name: 'anya', username: 'an', password: 112},
    {name: 'oleg', username: 'lego', password: 234},
    {name: 'andrey', username: 'drew', password: 456},
    {name: 'masha', username: 'mriya', password: 678},
    {name: 'olya', username: 'olechka', password: 890},
    {name: 'max', username: 'maximus', password: 1654}
];
console.log(users [0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);

// Логічні розгалуження:

//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Enter');
if (x === 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt('Enter Quarter');
if (time >= 0 && time <=14) {
    console.log('First Quarter');
} else if (time >= 15 && time <= 29) {
    console.log('Second Quarter');
} else if (time >= 30 && time <= 44) {
    console.log('Third Quarter');
} else if (time >= 45 && time <=59) {
    console.log('Fourth Quarter');
}else {
    console.log('Error')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=+prompt('Enter the number')
if(day>=1&&day<=10){
    console.log('Перша декада');
}else if (day>=11&&day<=20){
    console.log('Друга декада');
}else if(day>=21&&day<=31){
    console.log('Третя декада')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).

let plan = +prompt('Your plan')
switch (plan) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Monday');
    default:
        console.log('No plans');
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a=2;
let b=3
if(a<b){
    console.log('a',a);
}else if (b>a){
    console.log('b',b);
}else if (a===b){
    console.log('Эквивалентно')
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let x2=3;
if(x2==='' || x2===null || x2===undefined || x2===3){
    x2='default';
}
console.log(x2);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0]['monthDuration']>5) {
    console.log('Супер');
}else if (coursesAndDurationArray[0]['monthDuration']<=5)  {
    console.log('Не дуже');
}
if(coursesAndDurationArray[1]['monthDuration']>5) {
    console.log('Супер');
}else if (coursesAndDurationArray[1]['monthDuration']<=5){
    console.log('Не дуже');
}
if(coursesAndDurationArray[2]['monthDuration']>5) {
    console.log('Супер');
}else if (coursesAndDurationArray[2]['monthDuration']<=5){
    console.log('Не дуже');
}
if(coursesAndDurationArray[3]['monthDuration']>5) {
    console.log('Супер');
}else if (coursesAndDurationArray[3]['monthDuration']<=5){
    console.log('Не дуже');
}
if(coursesAndDurationArray[4]['monthDuration']>5) {
    console.log('Супер');
}else if (coursesAndDurationArray[4]['monthDuration']<=5){
    console.log('Не дуже');
}
if(coursesAndDurationArray[5]['monthDuration']>5) {
    console.log('Супер');
}else if (coursesAndDurationArray[5]['monthDuration']<=5){
    console.log('Не дуже');
}

