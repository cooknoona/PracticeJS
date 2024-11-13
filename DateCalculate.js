const endDate = new Date("2025/03/24");
const today = new Date();

const endDateCal = endDate.getTime();
const todayCal = today.getTime();

const remainTime = endDateCal - todayCal;
const remainTime2 = Math.round(remainTime / (1000 * 60 * 60 * 24));
console.log(`학원 수료일 까지 ${remainTime2} 일 남았습니다.`);
