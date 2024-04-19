//dogAPI에서 받을 주소를 상수에 담기
//화면에 띄울 42마리 강아지
const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42"
//셀렉트에 넣을 모든 견종
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"

//dogAPI에 서버 접속 요청할 리퀘스트를 상수에 담기
const request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

//html의 요소 산택하기
const header = document.getElementById("header")
const main = document.getElementById("main")
const input = document.getElementById("filter-text")
const button = document.getElementById("filter-button")
const select = document.getElementById("filter-select")
const more = document.getElementById("more")
const topBtn = document.getElementById("top")
const reset = document.getElementById("reset-button")

//받아온 강아지들 사진을 담을 빈 배열
const currentDogs = []


//반복되는 부분을 함수로 만들어서 코드 간단화 하기!
function displayDogs(item){
    const dogImgDiv = document.createElement("div")
            dogImgDiv.classList.add("flex-item")
            dogImgDiv.innerHTML = `<img src=${item}>`
            main.appendChild(dogImgDiv)
}

//웹 페이지가 최조로 열렸을 때 처음 할 일을 주는 이벤트
window.addEventListener("load", function(){
    //강아지 사진 부르기
    request1.open("GET", apiRandomDogs)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
        })
    })
    request1.send()
    
    //셀렉트에 견종정보들 넣기
    request2.open("GET", apiAllBreeds)
    request2.addEventListener("load", function(){
        const response = JSON.parse(request2.response)
        Object.keys(response.message).forEach(function(item){
            const option = document.createElement("option")
            option.textContent = item
            option.value = item
            select.appendChild(option)
        })
    })
    request2.send()
})

//리셋 버튼을 눌렀을 때 기존 사진 리셋 후 새 사진
reset.addEventListener("click", function(){
    // 화면에 있는 기존 강아지들 이미지 지우기
    main.innerHTML = "";
    //강아지 사진 부르기
    request1.open("get", apiRandomDogs)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            //주석처리한 코드처럼 하면
            //초기화가 되긴 되는데 누를 때 마다 늘어난다,,,
            //처음 누르면 새 이미지가 42 X 2
            //두번째 누르면 새 이미지가 42 X 3 이렇게 늘어난다,,,
            //로드하는 이벤트리스너가 중복되서 문제가 생기는것 같은데,,,
            //반복문 없이는 그럼 어떻게 해결하지??
            //currentDogs.push(item)
            //displayDogs(item)
            
            //more버튼에 적용한 조건문을 똑같이 적용하니까 해결되긴 하였음
            if(!currentDogs.includes(item)){
            currentDogs.push(item)
            displayDogs(item)
            }
        })
    })
    request1.send()
});

//필터링 버튼
//처음 페이지를 로드했을 떄의 사진에 적용이 된다.
//초기화를 누르고 나면 새로 로드 된 사진에 적용이 되야하는데
//자꾸 초기 페이지의 사진들에 적용이 된다.
button.addEventListener("click", function(){
    //커런트 배열에 있는 42강아지들 중 검색한 강아지만 뜨게하기
    //사진이 뜨는 메인을 한번 지우기
    main.innerHTML = ""
    //메인에 검색한 강아지만 띄우기
    let filterDogs = currentDogs.filter(function(item){
        //문자열로된 견종 정보들 중에 인풋에 쓰여진 견종이 포함되어 있으면 필터한다
        //포함하지 않으면 -1 에 !를 붙여저 포함되지 않은것은 제외한다
        return item.indexOf(input.value)!== -1
    })
    
    //검색창에 검색한 후 버튼을 누르면 검색 단어 지우기
    input.value = ""
    
    filterDogs.forEach(function(item){
        // 아래 주석처리한 코드를 간단화 한 함수
        displayDogs(item)
        
        //const dogImgDiv = document.createElement("div")
        //dogImgDiv.classList.add("flex-item")
        //dogImgDiv.innerHTML = `<img src=${item}>`
        //main.appendChild(dogImgDiv)
    })
})

//셀렉트에서 견종을 선택했을 때 선택한 견종만 보여주기
//처음 페이지를 로드했을 떄의 사진에 적용이 된다.
//초기화를 누르고 나면 새로 로드 된 사진에 적용이 되야하는데
//자꾸 초기 페이지의 사진들에 적용이 된다.
select.addEventListener("change", function(){
    //사진이 뜨는 메인을 한번 지우기
    main.innerHTML = ""
    //메인에 검색한 강아지만 띄우기
    let filterDogs = currentDogs.filter(function(item){
        //문자열로된 견종 정보들 중에 셀렉트에 선택된 견종이 포함되어 있으면 필터한다
        //포함하지 않으면 -1 에 !를 붙여 포함되지 않은것은 제외한다
        return item.indexOf(select.value)!== -1
    })
    
    filterDogs.forEach(function(item){
        //간단화 한 함수
        displayDogs(item)
        
        //const dogImgDiv = document.createElement("div")
        //dogImgDiv.classList.add("flex-item")
        //dogImgDiv.innerHTML = `<img src=${item}>`
        //main.appendChild(dogImgDiv)
    })
})

//more를 누르면 기존 사진은 두고 새 사진 더 추가
more.addEventListener("click", function(){
    //api에서 사진 한번 더 불러오기
    request1.open("get", apiRandomDogs)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            //만약 이미 배열에 추가되어있는 사진인지 확인하고 없으면 추가하기
            if(!currentDogs.includes(item)){
                currentDogs.push(item)
                displayDogs(item)
            }
        })
    })
    request1.send()
})

//탑 버튼을 눌렀을때 웹의 최상단으로 이동
topBtn.addEventListener("click", function(){
    //scrollTo - 주어진 위치로 스크롤을 이동하는 윈도우제공 메소드
    window.scrollTo({ top : 0 })
})