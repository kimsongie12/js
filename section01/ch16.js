//1.16) 객체2

/* //1. 상수 객체 : 상수에 저장해 놓은 객체

const animal={
    type : "cat",
    name : "kk",
    color : "black",
}; //힌번 생성되면 고정이다. 추가, 수정, 삭제는 가능하다

animal.age = 2; // 추가
animal.name = "cc"; // 수정 
delete animal.color; // 삭제

animal
console.log(animal); */

//2. 메소드
//-> 값이 함수인 프로퍼티
const person = {
    name: "song",

    //메소드
    sayHi: function(){
        console.log("hi");
    },
};

person.sayHi();

