//1. null 병합 연산자
let var1; //undefined
let var2=10;
let var3=20;

let var4= var1 ?? var2;
//console.log(var4); //10

let var5 = var1 ?? var3;
//console.log(var5); //20

let var6 = var2 ?? var3;
//console.log(var6);//10 -> undefined값이 아니라면 맨처음 값인 var2가 출력된다

let userName = "고양이";
let userNickName = " cat";
let displayName = userName ?? userNickName;//만약 유저네임이 고양이라면 출력하고 유저네임이 undefined라면 userNickName을 출력하라
//console.log(displayName);

//2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 =1; //숫자값으로 변수를 초기화하여도 나중에 문자로 선언하는게 가능
var7 = "hello";

//현재 저장된 값의 타입이 궁금하다면 아래 코드 typeof

let t1 = typeof var7; //var7저장된 값을 문자열로 반환한다.
//console.log(t1); // string출력 -> var7의 값이 문자열이기 때문에

//3. 삼항 연산자
// -> 항을 3개 이용하는 연산자
let var8 = 10;

//요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수이면 -> "홀"

let res = var8 & 2 ===0? "짝수" : "홀수"; //짝수 출력
//console.log(res); //짝수 출력
//첫번째(조건식) ? (참일 때 반환값) : (거짓일 때 반환값)

//var8의 값이 2로 나눴을 때 **짝수이면 짝수 값을 res에 저장**하고 아**니면 홀수를 res에 저장하라**
