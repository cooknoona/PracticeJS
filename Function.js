/* 함수는 특정 작업을 반복하거나 재사용 할 수 있도록 작성된 코드 블록
    복잡한 작업을 쉽게 처리 할 수 있고, 코드의 재사용성을 높여 줌 */

// 함수 선언과 호출 : function, 반드시 호출해야 동작,
// 호이스팅 적용(함수의 선언부가 자동으로 최상단으로 이동 함)
// 함수의 이름은 소문자로 작성, 호출시 전달된 인수는 함수의 매개변수로 전달 됨
console.log(sum(100, 200));

function sum(a, b) {
  return a + b;
}

// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식
// 함수 표현식은 익명의 함수와 기명함수 방식이 있음
// 주로 익명의 함수로 사용해야 할 때 사용, 호이스팅 적용 되지 않음
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(100, 200));

// 함수 표현식을 화살표 함수로 만드는 방식 (ES6에서 포함)
// 화살표 함수는 함수 표현식을 간결하게 작성 할 때 사용 하는 방식
// this 바인딩이 함수 선언문과 다르게 동작 함
const divide = (a, b) => a / b;
console.log(divide(10, 2));

function TestFunc() {
  this.value = 10;
  const arrowFunc = () => {
    console.log(this.value);
  };
  const tradFunc = function () {
    console.log(this.value);
  };
  arrowFunc();
  tradFunc();
}

new TestFunc();

// 기본값 할당

function add(a, b = 10, c = 20) {
  return a + b + c;
}

console.log(add());

// 스코프 : 자바스크립트는 함수 스코프와 블록 스코프 방식으로 나누어 짐
// 함수 스코프 : 함수에서 정의한 블록문만 스코프의 유효 범위로 인식하는 방식

function sum2() {
  let a = 10; // 함수 내부에서 사용 되어 있기 때문에 Line 56 ~ 57이 작동하지 않는다.
  console.log(`함수 내부 : ${a}`);
}
sum2();
console.log(`함수 외부 : ${a}`);

// 블록 스코프 : 자바스크립트는 함수 스코프 기반의 언어였지만,
// ES6 let, const 키워드가 추가 되면서 블록 스코프도 지원

let b = 10;
{
  var c = 20;
  console.log(`코드 블록 내부 : ${b}`);
  console.log(`코드 블록 내부 : ${c}`);
}
console.log(`코드 블록 외부 : ${b}`);
console.log(`코드 블록 외부 : ${c}`);

// 참조 우선 순위 : let, const 키워드는 같은 식별자의 중복 선언이 불가능
let d = 10;
const e = 20;
{
  let d = 20;
  const e = 30;

  console.log(`블록 내부 : ${d}`);
  console.log(`블록 내부 : ${e}`);
}
console.log(`블록 외부 : ${d}`);
console.log(`블록 외부 : ${e}`);

// 즉시 실행 함수 : 함수를 정의하자마자 바로 실행하는 함수 ,전역 변수의 오염을 막기 위해서
(function () {
  initScreen();
  console.log("키오스크 동작 준비 완료....");
})();

function initScreen() {
  console.log("화면 초기화 루틴 수행......");
}

// CallBack 함수 : 함수의 인자로 다른 함수를 전달하여, 그 함수가 실행될 때 호출되는 함수
// 주로 비동기 처리나 사용자 이벤트 처리에 사용
// 함수를 매개변수로 넘기기
function birdSing() {
  console.log("🐦 새가 즐겁게 노래합니다!");
}
function catCry() {
  console.log("😿 고양이가 슬프게 웁니다.");
}
function dogDance() {
  console.log("🐶 강아지가 신나게 춤을 춥니다!");
}

// // 일반 함수로 구현하기
// function checkAnimalMood(mood) {
//   if (mood === "happy") {
//     birdSing();
//   } else if (mood === "sad") {
//     catCry();
//   } else {
//     dogDance();
//   }
// }
// checkAnimalMood("happy");

function checkAnimalMoodCallBack(mood, happyAction, sadAction) {
  if (mood === "happy") {
    happyAction();
  } else if (moode === "sad") {
    sadAction();
  }
}
// () => console.log("😭 사람이 웁니다.") 임의 함수를 등록해서 바로 출력 할 수 있다, 재사용성이 없는 함수를 주로 이용
// 등록된 함수는 Line 98 ~ 106 까지와 같다.
checkAnimalMoodCallBack("happy", dogDance, catCry);

// 타이머 설정과 CallBack 함수
const buyToy = (item, price, quantity, callBack) => {
  console.log("🧒 아이가 '" + item + "' 장난감을 " + quantity + "개 골라서 엄마에게 가져갔습니다.");
  setTimeout(() => {
    console.log("💰 계산이 필요합니다.");
    let total = price * quantity;
    callBack(total);
  }, 2000);
};

const pay = (total) => {
  console.log("엄마: '지불할 금액은 " + total + "원입니다.'");
  console.log("🧒 아이: '와! 고마워요, 엄마!' 🎉");
};

buyToy("공룡장난감", 3000, 10, pay);
