"use strict";

// 문자열 (String)
const a = "";
const b = "";
const c = ``; // 템플릿 리터럴
let myName = "Steve";
let message = `Hello, ${myName}`;
myName.toLocaleLowerCase();
// 문자열로 설정하였기 때문에 넘버타입으로 설정 불가
// message = 123;

// 숫차 (Number)
let n = 100;

// 숫자로 설정하였기 때문에 문자열 타입으로 설정 불가
// n = "100";
// n.toUpperCase();

let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let average = total / 2;
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;

// 불리언 (Boolean)
let isOpen = true;
let isCompleted = false;

if (isOpen) {
  console.log("hello we are open!");
}
if (!isCompleted) {
  console.log("job not complete");
}

// &&  ||
let isAvailable = isOpen && !isCompleted;

// null 널 타입
let user = null; // 한가지 이상의 타입 = 유니언 타입
function login(userName) {
  user = userName;
}

function logout() {
  user = null;
}

login("Joey");
logout();

// any 타입 = 코드의 안정성을 위헤 되도록 사용 않는게 좋다.
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
