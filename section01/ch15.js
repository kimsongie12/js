// 1.15) 객체
/* 객체: 원시 타입이 아닌 객체 타입의 자료형
   : 여러 값을 동시에 저장할 수 있는 자료형
   : 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현
     하기 용이함 */

let obj1 = new Object() // 객체 생성자
let obj2 ={} // 객체 리터럴 (대부분 사용)

// 객체 프로퍼티 ( 객체 속성 ) -> 객체의 실질적인 정보를 담고 있는 역할
// key : vaule
// 프로퍼티는 개수 제한이 없다 . value에 들어오는 자료형의 타입도 제한이 없다
let person = {
    name : "lilly",
    age : 27,
    hobby : "let",
}

//3. 객체 프로퍼티를 다루는 방법
/// 3-1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
let name = person.name; //점 표기법을 이용하면 특정 프로퍼티의 값을 꺼내올 수 있다.
console.log(name); 

/* let age = person["age"]; //무조건 ""을 사용해서 표기해야한다!!
console.log(age); */

/* let property = "hobby";
let hobby =person[property];
console.log(hobby); //let 출력 */

/* //3-2 새로운 프로퍼티를 추가하는 방법
person.job = "fe de"; // 점 표기법
person["food"] = "banana"; // 괄호 표기법
console.log(person); */

/* //3.3 프로퍼티 수정하는 방법
person.job = "sbs"; // 점 표기법
person["food"]="apple"; // 괄호 표기법

console.log(person); */

/* //3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["age"];

console.log(person); */

/* //3.5 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = "name" in person; // "name"이라는 프로퍼티가 person에 존재하느냐는 연산자
// 존재하면 true, false를 나타냄
let result2 = "cat" in person;
console.log(result1);
console.log(result2); */