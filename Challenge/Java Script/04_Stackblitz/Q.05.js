// 결과를 확인하고 싶으면 터미널에 node test5.js를 입력하세요.

// 다음 while문과 동일한 결과를 출력하는 for문을 작성하세요.
let str = 'ozcoding school';
let num = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'o') {
        num++;
    }
}
console.log(num);

// while문을 작성하세요.
let ii = 0;
num = 0;
while (ii <= str.length) {
    if (str[ii] === `o`) {
        num++;
    }
    
    ii++;
}
console.log(num);