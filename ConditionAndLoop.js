/* 자바스크립트의 조건문은 if, if ~ else, if ~ else if ~ else, switch ~ case
    반복문 while, do ~ while, for(초기값; 최종조건; 증감값), for ~ in (객체 반복),
    for ~ of (이터러블 객체를 순회 할 때 사용) */

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

const brands = ["애플", "구글", "엔비디아", "현대자동차", "테슬라", "아마존"];

for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}

for (let e of brands) {
  console.log(e);
}
// let jumin = prompt("주민등록 번호 모든 자리를 입력 하세요 (0000000000000 형식으로) : ");
// const date = new Date();
// let gender = jumin.substring(6, 7);

// let birthYear = "19" + jumin.substring(0, 2);
// let birthMonth = parseInt(jumin.substring(2, 4));
// let birthDay = parseInt(jumin.substring(4, 6));

// let currentYear = date.getFullYear();
// let currentMonth = date.getMonth() + 1;
// let currentDay = date.getDate();

// let age = currentYear - parseInt(birthYear);

// if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
//   age--;
// }

// if (jumin.substring(6) == 1 || 3) {
//   document.write(`당신의 성별은 남자 입니다, 그리고 나이는 ${age} 세 입니다. `);
// } else if (jumin.substring(6) == 2 || 4) {
//   document.write(`당신의 성별은 여자 입니다, 그리고 나이는 ${age} 세 입니다. `);
// } else {
//   ("주민등록 번호를 잘 못 입력 하였 습니다.");
// }
