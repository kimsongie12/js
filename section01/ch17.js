//1.17) 배열
// 배열 : 여러개의 값을 순차적으로 담을 수 있는 자료형
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 ( 대부분 사용 )

let arrC = [
    1,
    2,
    3,
    true,
    () => {},
    [],
    "hello"
    ];
console.log(arrC); // 어떤 타입의 값이든 다 저장할 수 있다. 길이 제한도 없다


//2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hi";

console.log(arrC);