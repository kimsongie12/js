/* scope 스코프 : 변수나 함수에 접근하거나 
호출할 수 있는 범위 */

/* -> 전역(전체 영역) 스코프 and 지역(특정 영역) 스코프
   -> 전역 스코프 : 전체 영역에서 접근 가능
   -> 지역 스코프 : 특정 영역에서만 접근 가능*/

/* let a =1; //전역 스코프

function funcA(){
    let b =2; //블록 내부-> 지역 스코프 (funcA안에서만 접근 할 수 있음)
    console.log(a);
}
funcA();
console.log(b);

 */

let a =1;

function funcA(){
    let b=2;
    console.log(a);
}
funcA();

if(true){
    let c =1;
    console.log(C);

}
