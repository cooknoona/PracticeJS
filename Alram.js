/* 시간과 분을 입력 45분 일찍 시간이 설정 되도록 변경하는 프로그램
    시간은 24시간제로 하고, 0시 30분 => 23시 45분
    parseInt() 함수는 문자의 결과값을  정수로 반환 */

let hour = prompt("시간을 입력해 주세요 [예) 19시] :", "");
let mins = prompt("분을 입력 해 주세요[예) 50분] :", "");
hour = parseInt(hour);
mins = parseInt(mins);
let calTime = hour * 60 + mins;

if (calTime < 45) calTime = 24 * 60 + mins;
calTime -= 45;
hour = parseInt(calTime / 60);
mins = calTime % 60;

document.write(`${hour} 시 ${mins} 분`);
