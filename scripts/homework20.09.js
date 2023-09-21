//заукруглення до сотих
var rounded = function(number){
    return number.toFixed(2);
}


//1
let user_age = prompt('Введіть вік:')

if(user_age<=0 || user_age>120){
    console.log(`Error 418`)
}
else if(user_age<=12){
    console.log(`Дитина`)
}
else if(user_age<18 ){
    console.log(`Підліток`)
}
else if(user_age<60){
    console.log(`Дорослий`)
}
else if(user_age>=60 && user_age<=120){
    console.log(`Пенсіонер`)
}

//2

let user_symbolNum = parseInt(prompt(`Введіть число від 0-9:`))
if(user_symbolNum<0 || user_symbolNum>9){
    console.log('Error 418')
}
else{
    // думав прикольно буде но воно біда
    switch(user_symbolNum){
        case 1:
            console.log(`!`)
        case 2:
            console.log(`@`)
        case 3:
            console.log(`#`)
        case 4:
            console.log(`$`)
        case 5:
            console.log(`%`)
        case 6:
            console.log(`^`)
        case 7:
            console.log(`&`)
        case 8:
            console.log(`*`)
        case 9:
            console.log(`(`)
        case 0:
            console.log(`)`)
    }
}
 
//3

let threeDigit_num = prompt('Введіть тризначне число:')
if(threeDigit_num<100 || threeDigit_num>1000){
    console.log('Error 418')
}
else if(threeDigit_num[0] == threeDigit_num[1] || threeDigit_num[0] == threeDigit_num[2] || threeDigit_num[1] == threeDigit_num[2]){
    console.log('Число має одинакові цифри')
}
else{
    console.log('Число не має одинакових цифр')
}

//4

let year = prompt('Введіть рік:')
if(year%4==0 && year%100>0){
    console.log('Це високосний рік')
}
else{
    console.log('Цей рік не є високосним')
}

//5

let fiveDigit_num = prompt('Введіть п`ятизначне число:')
if(fiveDigit_num<10000 || fiveDigit_num>100000){
    console.log('Error 418')
}
else{
    // краще в пайтоні - просто [::-1]
    let str_num = fiveDigit_num.toString(); // робим його стр
    let arr_num = str_num.split(''); // стр перетворюєм в список
    let reversed_arrayNum = arr_num.reverse(); // розвертаємо його
    let reversed_strNum = reversed_arrayNum.join(''); // робим його назад числом
    // лишаєм його стр щоб 0 зараховувся і не пропадав
    console.log(reversed_strNum)
}

//6

let dollars_quant = prompt('Введіть к-сть долларів: ')
const DOLLAR_TO_EURO = 0.94
const DOLLAR_TO_UAN = 36.95
const DOLLAR_TO_AZN = 1.70
if(dollars_quant>0){
    let convert_choice = prompt('виберіть в яку валюту перевести: EURO, UAN, AZN')
    if(convert_choice.toLocaleLowerCase()=='euro')
        console.log(`${rounded(dollars_quant*DOLLAR_TO_EURO)} євро`)
    else if(convert_choice.toLocaleLowerCase()=='uan')
        console.log(`${rounded(dollars_quant*DOLLAR_TO_UAN)} гривень`)
    else if(convert_choice.toLocaleLowerCase()=='azn')
        console.log(`${rounded(dollars_quant*DOLLAR_TO_AZN)} азер. манат`)
}
else{
    console.log('Error 418')
}

//7

let amount = prompt('Введіть сумму для покупки:')
if(amount<=0){
    console.log('Error 418')
}
else if(amount>=200 && amount<=300){
    console.log(`до сплати - ${rounded(amount/100*97)} грн.`)
}
else if(amount>300 && amount<=500){
    console.log(`до сплати - ${rounded(amount/100*95)} грн.`)
}
else if(amount>500){
    console.log(`до сплати - ${rounded(amount/100*93)} грн.`)
}
else{
    console.log(`до сплати - ${rounded(amount)} грн.`)
}