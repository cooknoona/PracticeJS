/* 3개의 수를 입력 받아서 가장 큰수와 작은수를 화면에 출력하기
prompt로 입력 받은 값은 문자열 이므로 숫자로 변경하기 위해서는
Number()함수로 형을 변경해야 한다. */

let firstNum = Number(prompt("첫번째 수 입력 : ", ""));
let secondNum = Number(prompt("두번째 수 입력 : ", ""));
let thirdNum = Number(prompt("세번째 수 입력 : ", ""));

let maxNum = Math.max(firstNum, secondNum, thirdNum);
let minNum = Math.min(firstNum, secondNum, thirdNum);
document.write("세가지 숫자중 가장 큰 수는 " + maxNum);
document.write("<br>세가지 숫자중 가장 작은 수는 " + minNum);
