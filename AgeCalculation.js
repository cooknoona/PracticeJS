const currentYear = new Date().getFullYear(); // 현재 연도 불러오기
let birthYear;
let age;

// prompt() 함수는 사용자에게 입력창을 띄워 입력 할 수 있도록 함, 문자열로 입력 됨
birthYear = prompt("태어난 연도를 입력 하세요 (YYYY) : ", "");
age = currentYear - birthYear;
// web 화면에 출력
document.write(currentYear + "년 현재 <br>");
document.write(birthYear + "년에 태어난 사람의 나이는<br> " + age + " </b>세 입니다.");
