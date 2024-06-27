// 문자열 (String)
const a: string = "";
const b: string = "";
const c: string = ``; // 템플릿 리터럴

let myName: string = "Steve";
let message: string = `Hello, ${myName}`;

myName.toLocaleLowerCase();

// 문자열로 설정하였기 때문에 넘버타입으로 설정 불가
// message = 123;

// 숫차 (Number)
let n: number = 100;

// 숫자로 설정하였기 때문에 문자열 타입으로 설정 불가
// n = "100";
// n.toUpperCase();

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

// 불리언 (Boolean)
let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
  console.log("hello we are open!");
}
if (!isCompleted) {
  console.log("job not complete");
}

// &&  ||
let isAvailable: boolean = isOpen && !isCompleted;

// null 널 타입
let user: string | null = null; // 한가지 이상의 타입 = 유니언 타입

function login(userName: string) {
  user = userName;
}

function logout() {
  user = null;
}

login("Joey");
logout();

// any 타입 = 코드의 안정성을 위헤 되도록 사용 않는게 좋다.
let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();
