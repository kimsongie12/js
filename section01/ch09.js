//1. if 조건문 (if문)

let num = 10;

if(num >=10) {

// console.log("num은 10 이상이다");

// console.log("조건이 참이다");

}

else {

// console.log("조건이 거짓이다");

}

/* 
let num = 10;

if(num >=10) {

console.log("num은 10 이상이다");

console.log("조건이 참이다");

}

else if(num >= 5){

console.log("num은 5 이상이다");

}

else {

console.log("조건이 거짓이다");

}

//else if 는 개수 제한이 없다

// if로 시작해서 else 로 끝나야만한다

*/
let animal = "cat";

switch (animal) {

case "cat": {

console.log("고양이");

break;

}

case "dog": {

console.log("강아지");

break;

}

case "bear": {

console.log("곰");

break;

}

case "tiger":{

console.log("호랑이");

break;

}

defult: {

console.log("그런 동물은 모른다");

}
}