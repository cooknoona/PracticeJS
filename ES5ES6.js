/* ES5 = (ECMAScript 5) : 2009년에 발표됐음, 리액트의 핵심 문법
    JSON 객체
    Array Method : forEach(), map(), filter(), reduce() 등등이 추가됐음
    - forEach() : 각 요소를 순회하는 메서드 (자동으로 전부 순회, 요소의 값을 변경 할 수 없음)
    - map() : 배열의 모든 요소를 순회해서 가공된 새로운 배열을 만듬
    - filter() : 배열의 모든 요소를 순회해 조건을 만족하는 새로운 배열 생성
    - reduce() : 배열의 모든 요소를 순회해서 누적값을 사용하여 하나의 결과값 반환 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);

/* ES6 = (ECMAScript6) : 2015년에 발표
    let. const
    화살표 함수
    템플릿 리터럴 */
const name = "이국형";
const message = `안녕하세요. ${name}님, 환영합니다.`;
console.log(message);

/* 배열에서 전개 연산자 */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const newArr = [...arr1, ...arr2, ...arr3];
console.log(newArr);

/* 객체에서의 전개 연산자 */
const members = {
  name: "안유진",
  age: 21,
  addr: "서울시 강남구 역삼동",
  position: "리더",
};

const modifiedMembers = { ...members, age: 22 };
console.log(modifiedMembers);
