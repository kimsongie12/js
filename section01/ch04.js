//1. 변수
let age;
console.log(age);

age =30;
console.log(age);

// let age=40;는 중복이라 다시 선언할 수 없다.

//2.상수 : 변수와는 달리 한번 저장된 값을 다시는 바꿀 수가 없다!!
const birth = "2000.12.20";
//상수는 초기화를 반드시 해줘야한다

//3. 변수 명명규칙(네이밍 규칙)
// $ 나 _ 제외한 기호는 사용할 수 없다
let $_name 

// 변수의 이름은 숫자로 시작할 수 없다.
let name1;

//변수명에는 예약어를 사용할 수 없다. (let, const ,...)

//변수 명명 가이드 - 협업 경우 바로 이해하고 알아볼 수 있는 변수명으로 작성해야한다
let a =1;
let b=1;
let c= a-b;