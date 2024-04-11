//콜백 함수
/*
function main(value) {
    console.log(value);
}

main(1); //1출력
*/

/*
function main(value) {
    console.log(value);
}
function sub(){
    console.log("i am sub");
}

main(sub); //sub함수 자체 출력. 함수도 문자열이나 숫자 같은 값으로 취급된다
//메인 함수를 호출하면서 인수로 서브함수를 넘겨줌
*/


/*
function main(value){ //이 함수에는 sub함수가 담겨 있다
    value();
}

function sub(){
    console.log("i am sub");
}
main(sub); // i am sub출력
*/

//콜백 함수 : 어떠한 함수를 다른 함수의 인수로 전달해서 나중에 호출시키도록 해당 함수에서 
// 알아서 호출하도록 설정한 서브와 같은 함수 => 콜백 함수

/*
//sub함수는 당장에 실행되는 것이 아닌 메인함수에 인수로 전달되어서 메인 함수가 알아서 실행하게 된다고 해서 콜백 함수라고 불린다
// 메인 함수에서는 전달된 콜백 함수를 자기가 원하는 타이밍에 실행할 수 있다
function main(value){ //이 함수에는 sub함수가 담겨 있다
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

function sub(){
    console.log("i am sub");
}
main(sub); // i am sub출력
*/

/*
//함수 표현식응용해서 코드를 선언하고 싶으면 함수를 sub함수처럼 선언해 놓고 사용하지 말고
function main(value){
    console.log(1);
    value();
    console.log("end");
}

//선언문 자체를 main(sub)의 sub안에 넣어서 함수 표현식처럼 사용해도된다

main(function (){//익명 함수 처럼 사용해도된다
    console.log("i am sub");
});
*/

/*
//한번 더 단축 할 수 있음
function main(value){
    console.log(1);
    value();
    console.log("end");
}


main(()=>{//익명 함수 처럼 사용해도된다
    console.log("i am sub");
});//화살표의 의미는 메인 함수에 콜랙 함수로서 인수로 전달이 된거다
*/

/*
//2. 콜백 함수 활용 -콜백함수를 활용할 수 있는 예제들
function repeat(count){
    for(let idx =1; idx <=count; idx++){ //idx가 1부터 시작해서 count까지 1씩 증가면서 반복적으로 콘솔에 idx를 출력하는 함수
        console.log(idx);
    }
}
repeat(5); //idx1부터 5까지 반복문이 돌아서 1-5출력
*/

/*
//repeat함수와 동일하지만 다른 함수
function repeat(count){
    for(let idx =1; idx <=count; idx++){ //idx가 1부터 시작해서 count까지 1씩 증가면서 반복적으로 콘솔에 idx를 출력하는 함수
        console.log(idx);
    }
}
function repeatDouble(count){
    for(let idx =1; idx <=count; idx++){ //idx가 1부터 시작해서 count까지 1씩 증가면서 반복적으로 콘솔에 idx를 출력하는 함수
        console.log(idx*2);
    }
}
repeat(5); //1-5출력 
repeatDouble(5); // 2 4 6 8 10출력. idx가 1-5까지 1씩 증가하는데 콘솔로 매 반복마다 2를 곱한 값을 출력하도록 했기 때문에
 //위와 같이 중복 코드로 함수의 이름만 바꿔가면서 같은 코드로 돌리는 건 좋지 않는 방식이다
 // 이러한 경우 콜백 함수를 사용해서 중복 코드를 발생시키지 않으면서 코드를 개선할 수 있다
*/

 // 중복 코드가 발생한 repeatDouble은 지워주고시작한다

function repeat(count, callback){ //'콜백'이라는 새로운 매개변수를 추가한다
    for(let idx =1; idx <=count; idx++){ //idx가 1부터 시작해서 count까지 1씩 증가면서 반복적으로 콘솔에 idx를 출력하는 함수
        callback(idx); //콜백 함수를 호출하고 인수로 idx를 넘겨주도록 설정한다
    }
}
//함수를 전달할건데 매개변수 idx를 받아서 콘솔에 그대로 출력하는 함수를 전달
repeat(5, function(idx){
    console.log(idx);
});

repeat(5, function(idx){
    console.log(idx *2);
});

//장점 : 콜백 함수를 이용하면 중복 코드를 제거하면서 간결하게 코드를 작성할 수 있다

//위의 콜백함수 예제의 함수를 더 간결하게 표현하고 싶다면 화살표 함수를 사용하면된다
function repeat(count, callback){
    for(let idx = 1; idx <=count; idx++){
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});
repeat(5, (idx)=>{
    console.log(idx);
});