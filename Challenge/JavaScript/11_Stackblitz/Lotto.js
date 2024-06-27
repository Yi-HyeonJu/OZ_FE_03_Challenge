/* 
  아래 코드는 강의 영상에서 완성한 코드입니다.
  다음 기능을 추가한 후 제출하세요.

  요구 사항: '추첨' 버튼을 누른 후, '다시' 버튼을 누르지 않은 채 '추첨' 버튼을 또 눌러도 새롭게 번호가 추가되어야 합니다.
*/

// 요소 선택 및 상수 선언
const todaySpan = document.querySelector('#today');
const numbersDiv = document.querySelector('.numbers');
const drawButton = document.querySelector('#draw');
const resetButton = document.querySelector('#reset');
const lottoNumbers = [];
const colors = ['orange', 'skyblue', 'red', 'purple', 'green'];
const today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
todaySpan.textContent = `${year}년 ${month}월 ${date}일 `;

// paintNumber 함수
function paintNumber(number) {
  const eachNumDiv = document.createElement('div');
  eachNumDiv.classList.add('eachnum');
  let colorIndex = Math.floor(number / 10);
  eachNumDiv.style.backgroundColor = colors[colorIndex];
  eachNumDiv.textContent = number;
  numbersDiv.appendChild(eachNumDiv);
}

//남은 추첨횟수 카운트
const count = document.querySelector("#count")


// 추첨 버튼 클릭 이벤트 핸들링
drawButton.addEventListener('click', function () {
  if (lottoNumbers.length < 6) {

    let ran = Math.floor(Math.random() * 45) + 1;
    if (lottoNumbers.indexOf(ran) === -1) {
      lottoNumbers.push(ran);
      paintNumber(ran);
    }
    
    count.textContent = `남은 번호는 ${6-lottoNumbers.length}개 입니다.`
    if (6-lottoNumbers.length == 0){
      count.textContent = `남은 번호가 없습니다.`
    }
  } else {
    lottoNumbers.splice(0, 6);
    numbersDiv.innerHTML = '';
    count.textContent = `추첨버튼을 눌러 시작하세요.`;
  }
});

// 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener('click', function () {
  lottoNumbers.splice(0, 6);
  numbersDiv.innerHTML = '';
  count.textContent = `추첨버튼을 눌러 시작하세요.`;
});