// dogAPI에서 받을 주소를 상수에 담기

// 1. 화면에 띄울 42마리 강아지
const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42"
// 2. 셀렉트에 넣을 모든 견종
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"


// XMLHttpRequest 객체 생성
const request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

// html의 요소 산택하기
const header = document.getElementById("header")
const main = document.getElementById("main")
const input = document.getElementById("filter-text")
const button = document.getElementById("filter-button")
const select = document.getElementById("filter-select")
const more = document.getElementById("more")
const topBtn = document.getElementById("top")
const reset = document.getElementById("reset-button")

// 받아온 강아지들 사진을 담을 빈 배열
let currentDogs = []


// 반복되는 부분을 함수로 만들어서 코드 간단화 하기!
// 강아지 사진을 화면에 표시하는 함수
function displayDogs(imageURL){
    const dogImgDiv = document.createElement("div")
            dogImgDiv.classList.add("flex-item")
            dogImgDiv.innerHTML = `<img src=${imageURL}>`
            main.appendChild(dogImgDiv)
}

// 웹 페이지 최조 로드 시 실행되는 이벤트 처리
window.addEventListener("load", function(){
    // 강아지 사진 불러오기
    request1.open("GET", apiRandomDogs)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(imageURL){
            currentDogs.push(imageURL)
            displayDogs(imageURL)
        })
    })
    request1.send()
    
    // 셀렉트에 견종 정보 추가
    request2.open("GET", apiAllBreeds)
    request2.addEventListener("load", function(){
        const response = JSON.parse(request2.response)
        Object.keys(response.message).forEach(function(imageURL){
            const option = document.createElement("option")
            option.textContent = imageURL
            option.value = imageURL
            select.appendChild(option)
        })
    })
    request2.send()
})

// 리셋 버튼 클릭 시 실행되는 이벤트 처리
reset.addEventListener("click", function(){
    main.innerHTML = ""; // 이미지 초기화
    
    // currentDogs 배열 초기화 함으로써 필터링과 셀렉트 시 일어난 문제 해결
    currentDogs = []; // 배열 초기화
    
    // 강아지 사진 불러오기
    request1.open("get", apiRandomDogs)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(imageURL){
            /* 생긴 문제
            주석처리한 코드처럼 하면 초기화가 되긴 되는데 누를 때 마다 늘어난다,,,
            처음 누르면 새 이미지가 42 X 2, 2번째 누르면 새 이미지가 42 X 3 이렇게 늘어난다,,,
            로드하는 이벤트리스너가 중복되서 문제가 생기는것 같은 추측이다...
            //currentDogs.push(imageURL)
            //displayDogs(imageURL)
            
            /*해결 방법
            반복문을 사용하여 배열의 수가 42가 될때까지만 사진 푸쉬*/
            let i = currentDogs.length
            while(i < 42){
                currentDogs.push(imageURL)
                isplayDogs(imageURL)
            }
        })
    })
    request1.send()
});


/*생긴 문제
초기화 버튼 클릭 후 필터링 버튼을 눌렀을 때
페이지를 처음 로드했을 떄의 사진 + 초기화 했을 때 보인 사진들이 계속 추가됨

해결하고싶은 방법
초기화를 누르고 나면 필터링 버튼도 새로 초기화 된 사진에 적용이 되야한다

해결 방법
상수로 선언했던 currentDogs 배열을 변수로 바꿔준다
그리고 리셋 이벤트에 배열을 빈 배열로 재선언 해준다
*/

// 필터링 버튼 클릭 시 실행되는 이벤트 처리(검색한 강아지 사진만 불러오기)
button.addEventListener("click", function(){
    main.innerHTML = "" // 이미지 초기화
    let filterDogs = currentDogs.filter(function(imageURL){
        
        //문자열로된 견종 정보들 중에 인풋에 쓰여진 견종이 포함되어 있으면 필터한다
        //포함하지 않으면 -1 에 !를 붙여저 포함되지 않은것은 제외한다
        return imageURL.indexOf(input.value)!== -1
    })
    
    //검색창에 검색한 후 버튼을 누르면 검색 단어 지우기
    input.value = "" // 검색어 초기화
    
    filterDogs.forEach(function(imageURL){
        // 아래 주석처리한 코드를 간단화 한 함수
        displayDogs(imageURL)
        
        //const dogImgDiv = document.createElement("div")
        //dogImgDiv.classList.add("flex-item")
        //dogImgDiv.innerHTML = `<img src=${item}>`
        //main.appendChild(dogImgDiv)
    })
})

/*생긴 문제
초기화 버튼 클릭 후 셀렉트를 사용했을 때
페이지를 처음 로드했을 떄의 42개의 사진에만 적용이된다

해결하고싶은 방법
초기화를 누르고 나면 셀렉트도 새로 초기화 된 사진에 적용이 되야한다

해결 방법
상수로 선언했던 currentDogs 배열을 변수로 바꿔준다
그리고 리셋 이벤트에 배열을 빈 배열로 재선언 해준다
*/

// 셀렉트 박스 변경 시 실행되는 이벤트 처리(선택한 강아지 사진만 불러오기)
select.addEventListener("change", function(){
    main.innerHTML = "" // 이미지 초기화
    //메인에 검색한 강아지만 띄우기
    let filterDogs = currentDogs.filter(function(imageURL){
        
        //문자열로된 견종 정보들 중에 셀렉트에 선택된 견종이 포함되어 있으면 필터한다
        //포함하지 않으면 -1 에 !를 붙여 포함되지 않은것은 제외한다
        return imageURL.indexOf(select.value)!== -1
    })
    
    filterDogs.forEach(function(imageURL){
        
        // 아래 주석처리한 함수를 간단화 한 함수
        displayDogs(imageURL)
        
        //const dogImgDiv = document.createElement("div")
        //dogImgDiv.classList.add("flex-item")
        //dogImgDiv.innerHTML = `<img src=${item}>`
        //main.appendChild(dogImgDiv)
    })
})

// more 버튼 클릭 시 실행되는 이벤트 처리(42개의 사진 추가)
more.addEventListener("click", function(){
    
    // api에서 사진 한번 더 불러오기
    request1.open("get", apiRandomDogs)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(imageURL){
            
            // 만약 이미 배열에 추가되어있는 사진인지 확인하고 없으면 추가하기
            if(!currentDogs.includes(imageURL)){
                currentDogs.push(imageURL)
                displayDogs(imageURL)
            }
        })
    })
    request1.send()
})

// 탑 버튼 클릭 시 실행되는 이벤트 처리
topBtn.addEventListener("click", function(){
    
    // scrollTo - 주어진 위치로 스크롤을 이동하는 윈도우제공 메소드
    window.scrollTo({ top : 0 })
})