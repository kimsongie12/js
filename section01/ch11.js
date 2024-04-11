/*
// 함수선언

function greeting() {
    console.log("hi");
} //선언했다고 바로 실행되지 않는다. 함수를 호출해야한 실행이 된다!!

console.log("before");
greeting(); //hi 출력
console.log("after");

// 주의) 반드시 소괄호() 를 사용해서 호출해야한다
*/

/*
function getArea() {
    let width = 10;
    let height = 20;
    let area = width * height;

    console.log(area);
}
getArea(); //고정된 높이와 넓이를 사용중 
*/

/*
//동적으로 getArea함수를 호출할 때마다 함수에 우리가 값을 넘겨주면 출력될 수 있게 코드 수정
function getArea(width, height){
    
    let area = width * height;

    console.log(area);
}
getArea(10,20); //200출력 . function getArea(width, height)에 10과 20이 들어감
getArea(30,20); //600출력
// 호출하면서 전달하는 값들은 인수라고 부름
// 함수 안에 값들은 매개변수
*/

/*
//console에서 불러오는게 아니라 return에서 반환하도록
function getArea(width , height){
    let area = width * height;

    return area; //반환값이라고 부름. 반환값은 getArea(10,20)의 결과값이 되어서 area1이라는 변수값에 활용됨
}
let area1 = getArea(10,20); //반환값을 area1라는 변수에 담아서 활용
console.log(area1); //200출력

let area2 = getArea(30,20);
console.log(area2); //600출력

//-> return문을 이용하면 함수가 어떠한 결과 값을 반환하도록 만들어 줄 수 있다
*/

/*
function getArea(width , height){
    let area = width * height;

    return area; //반환값이라고 부름. 반환값은 getArea(10,20)의 결과값이 되어서 area1이라는 변수값에 활용됨
    console.log("hi"); //수행되지 않는다!!
}
let area1 = getArea(10,20); //반환값을 area1라는 변수에 담아서 활용
console.log(area1); //200출력

let area2 = getArea(30,20);
console.log(area2); //600출력
*/

/*
//함수 내부에 또다른 함수 선언이 가능하다 => 중첩 함수
function getArea(width , height){

    function another() {
        console.log("another");
    }
    another();

    let area = width * height;

    return area; 
}
let area1 = getArea(10,20); 
console.log(area1); //200출력

let area2 = getArea(30,20);
console.log(area2); //600출력
*/

//js 호이스팅 : 끌어올리다
//선언문을 호출문보다 아래에 두어도 호이스팅으로 인해 선언문이 위로 끌어져서 실행된다!!
// 호이스팅 덕분에 함수 선언이 무조건 위에 있지 않아도 된다는 장점이 있다