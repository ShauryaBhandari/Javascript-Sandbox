let val;

const today = new Date();
let birthday = new Date("22-04-2000 11:25:00");
// or use
birthday = new Date("April 22 2000");
// or use
birthday = new Date("22/04/2000");

val = today.getMonth(); //0 based so we will get one month lesser than actual is, Jan is [0]
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
// current time stamp, amount of seconds passed
val = today.getTime();

//to change values
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
