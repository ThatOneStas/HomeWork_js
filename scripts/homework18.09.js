//заукруглення до сотих
var rounded = function(number){
    return number.toFixed(2);
}

//заукруглення до цілих
var rounded_2 = function(number){
    return number.toFixed(0);
}

//1
let user_name = prompt("Введіть ваша ім'я: ")
console.log(`Привіт, ${user_name}!`)

//2
let user_birth = prompt('Введіть ваш рік народження: ')
const CURRENT_YEAR = 2023
console.log(`${CURRENT_YEAR-user_birth} - ваш поточний вік`)

//3
let square_side = prompt('Введііть довжину квадрата: ')
console.log(`${square_side*4} - його периметр`)

//4
let circle_radius = prompt('Введіть радіус кола: ')
const PI = 3.14
console.log(`${rounded(2*PI*circle_radius)} - площа кола`)

//5
let distance, time
distance = prompt('Введіть відстань (км): ')
time = prompt('За скільки часу ви хочете туди добратися (год): ')
console.log(`${rounded(distance/time)} км/год - швидкість з якою вам потрібно рухатися`)

//6
let dollars_quant = prompt('Введіть к-сть долларів: ')
const DOLLAR_TO_EURO = 0.94
console.log(`${rounded(dollars_quant*DOLLAR_TO_EURO)} євро`)

//7
let user_gb_quant = prompt('Введіть к-сть гб: ')*1000
const FILES = 820
console.log(`${rounded_2(user_gb_quant/FILES)} - к-сть файлів розміром 820мб які моглиб вміститись на флешці`)