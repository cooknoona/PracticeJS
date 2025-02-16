// 한줄 주석
/* 범위주석 Shift + alt + A 
소스파일 이름은 알파벳 소문자, 하이픈(-), 밑줄(_)로 작성
소스파일 인코딩은 UTF-8
코드줄 바꿈과 세미콜론(;) 사용을 권장
*/

// 식별자는 영문자, _, $로 시작 해야함 (한글 사용 가능)
// 카멜표기법(*)이나 스네이크 표기법 사용 가능

// 변수와 상수
// var, let, const
// let 과 const ES6에서 추가된 변수 선언 방식
let x = "10"; // 변수를 선언하고 데이터의 타입은 10이 대입될때 데이터형이 결정 됨

x = "200";
console.log(typeof x);

// 아래 코드는 상수로 선언이 되어 있기 때문에 값이 정해지면 변경 할 수 없음
/* const y = 10;
y = 20;
console.log(typeof y);
 */

let z = 100;
console.log(z);
