let num1=27;
let num2=1.5;
let num3=-20;

let Inf = Infinity;
let mInf = -Infinity;

let nan = NaN;
//연산 실패시 반환하는 값

//String Type
let myName = "돼지";
//덧셈 연산을 지원함
let myloco = "전주";
let intro = myName+myloco;


let introText = `${myName}은 ${myloco}에 거주한다`;

//``백틱을 이용해 문자열을 만들면 달러사인과 중괄호를 통해서 변수 값을 동적으로 포함시킬 수 있다-> 탬플릿 리터럴 문법
// 실무에서 유용하게 사용하는 문법

//3. boolean타입
let isSwitchOn = true;
let isEmty = false;

//4. Null Type(아무것도 없다) 할당은 해줘야함, 아무것도 없다는 것을 표현하기 위해서
let empty = null;

//5. Undefined : 변수를 미처 초기화하지 못했거나 아니면 존재하지 않는 어떤 값을 불러오려고 할 때 발생할 수 있음
let none;
console.log(none);