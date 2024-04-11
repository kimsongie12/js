// 1.12)함수 표현식과 화살표 함수

/*
function funcA() {
    console.log("funcA");
}

let varA = funcA; // 함수를 선언해서 저장하는게 아닌 함수 자체를 변수에 저장.
console.log(varA);
*/

/*
//문자열 출력
function funcA() {
    console.log("funcA");
}

let varA = funcA; //변수 선언 후
varA(); //funcA 출력 

let varB = function funcB() {  //선언식이 아니다. 선언식이라는 것은 어떤 변수의 값으로써 담기지 않은 상태가 유지가 되어야하는데
    console.log("funcB");
};
varB();
funcB(); //호출 불가능 -> 변수의 이름으로 불러야함

*/

/*
function funcA() {
    console.log("funcA");
} //선언문

let varA = funcA; //변수 선언 후
varA(); //funcA 출력 

let varB = function () {  // 함수 선언 시 이름 생략이 가능 -> 익명함수
        console.log("funcB");
}; // 이렇게 선언된 함수는 호이스팅이 안된다!
varB();
// 이런 함수 표현식은 콜백 함수에서 유용하게 사용됨
*/

//2. 화살표 함수
/*
let varC = function() {
    return 1;
};
*/

/*
//위의 함수를 간단하게 화살표 함수 이용해서 표현
let varC = () => {
    return 1;
};
console.log(varC()); //1 출력. varC()를 출력해야함
*/

/*
// 더 간단하게 표현
let varC = () => 1; //매개변수 아무값도 받지 않고 1을 반환한다

console.log(varC());
*/

/*
//매개변수 넣은 코드
let varC = (vaule) => vaule + 1;  //즉시 값을 반환

console.log(varC(10)); //11출력.
*/


//몇가지 추가적인 작업이 이루어져야한다면 
let varC = (vaule) => {
    console.log(vaule);
    return vaule + 1;
};
console.log(varC(10));
