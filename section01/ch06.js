// 1. 묵시적 형 변환 - 알아서 형 변환
let num =10;
let str = "20";

const result = num + str; // num을 묵시적으로 string 으로 변환 후 계산
console.log(result); //1020출력 
//2. 명시적 형 변환
//프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// 문자를 숫자로 변환
let str1 = "10";
//let strToNum1 = Number(str1); //  number 내장함수 사용해  형 변환

let str2 = "10개";
//let strToNum2 = Number(str2); -> NaN 출력됨
let strToNum2 = parseInt(str2); //문자열 값을 숫자 값으로 변환
//console.log(strToNum2);

//숫자에서 문자열로 변환
let num1 = 20;
let numTostr1 = String(num1);
console.log(numTostr1+"입니다"); //20입니다 출력됨