const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    let userId = event.target.id.value
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value
    
    if(userId.length < 6){
        alert("아이디가 너무 짧습니다. 6자리 이상 입력해주세요.")
        return
    }
    
    if(userPw1 !== userPw2){
        alert("비밀번호가 일치하지 않습니다.")
        return
    }
    
    document.body.innerHTML = ""
    
    //컨테이너 생성
    const div = document.createElement("div")
    div.style.width = "450px"
    div.style.height = "300px"
    div.style.margin = "60px auto 0"
    div.style.padding = "25px"
    div.style.borderRadius = "15px"
    div.style.backgroundColor = "rgba(240, 228, 159, 0.479)"
    
    //body 자식으로
    document.body.appendChild(div)
    
    //환영메세지
    const h1 = document.createElement("h1")
    h1.style.fontSize = "30px"
    h1.style.paddingBottom = "20px"
    h1.textContent = `${userId}님 환영합니다.`
    
    //회원가입 정보 메세지
    const p1 = document.createElement("p")
    p1.textContent = `회원가입 시 입력하신 내역은 다음과 같습니다.`
    
    //아이디 정보
    const p2 = document.createElement("p")
    p2.textContent = `아이디 : ${userId}`
        
    //이름 정보
    const p3 = document.createElement("p")
    p3.textContent = `이름 : ${userName} `
        
    //전화번호 정보
    const p4 = document.createElement("p")
    p4.textContent = `휴대폰 번호 : ${userPhone}`
        
    //직무 정보
    const p5 = document.createElement("p")
    p5.textContent = `원하는 직무 : ${userPosition}`
    
    //div 자식으로
    div.append(h1, p1, p2, p3, p4, p5)
})