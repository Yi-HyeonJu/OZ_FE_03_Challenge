//폼에 입력한 내용을 받아서 ul안에 li로 넣어야한다
//ul과 form 선택하기
const todoForm = document.getElementById(`todo-form`)
const todoList = document.getElementById(`todo-list`)

//로컬스토리지와 연계 및 할일 목록들을 배열로 관리하기위해 빈 배열 만들기
let todoArr = [];

//할일 배열에 추가하기
//투두 폼의 제출 버튼을 눌렀을 때 실행할 함수 add
todoForm.addEventListener("submit", function(add){
    //추가하기를 눌렀을 때마다 작동하는 새로고침 없애기
    add.preventDefault()
    
    //객체 리터럴을 이용해서 추가할 할일에 키와 밸류 값 주기
    const todoAdd = {
        todoText: todoForm.todo.value, //인풋 텍스트 입력값
        //할일을 제출할 때의 시간`new Date()`을 고유 식별값으로 주어서
        //추후 수정, 선택 삭제할 때 그 고유 식별값으로 구분 가능
        todoId: new Date().getTime(), //getTime() 시간을 숫자(정수)로 반환
        todoDone: false //처음 만들어졌을때는 완료하지 않은 상태이므로 폴스 지정
    }
    
    //아무것도 입력하지 않으면 배열에 추가하지 않고 알러트가 뜨게
    if(todoForm.todo.value !== ``){
        todoArr.push(todoAdd) //객체 리터럴 배열에 푸쉬
        todoForm.todo.value = "" //푸쉬 후에 인풋 텍스트 입력값 삭제해주기
    } else{
        alert("할 일을 입력해 주세요!")
    }
    
    displayTodo() //화면에 할일을 보여주는 함수 추가
    saveTodo() //할일을 스토리지에 저장하기
})

//할일 화면에 보여주기
function displayTodo(){

     //이전에 표시된(앞서 보여준) 화면을 비워 주기
    todoList.innerHTML = ``
    
    //todoArr 배열을 순회하며 aTodo 함수(li 추가)를 함께 이중으로 돈다)
    // 이는 처음 작성한 배열이 화면에 보인 뒤 li를 추가하면
    //처음 작성한 배열에 li가 추가된 배열을 화면에 또 보여준다
    todoArr.forEach(function(aTodo){ 
        
        //li를 html에 추가하며 텍스트 콘텐츠 주기
        const todoLi = document.createElement(`li`)
        todoLi.textContent = aTodo.todoText
        todoLi.title = "할 일 완료하기"
        
        todoList.appendChild(todoLi)
        
        //li에 삭제버튼 추가하기
        const todoDelBtn = document.createElement(`span`)
        todoDelBtn.textContent = `X`
        todoDelBtn.title = "할 일 삭제하기"
        
        todoLi.appendChild(todoDelBtn)
        
        //할일 목록 하나하나의 투두던에 클래스 부여하기
        //클릭시엔 던 클래스를 주어 css적용을 하기 위해 if문으로 구분
        //객채리터럴을 통해 모두 폴스기 때문에 기본적으로 클래스 옛을 가진다
        if(aTodo.todoDone){
            todoLi.classList.add("done") //트루면 던
        } else{
            todoLi.classList.add("yet") //폴스면 옛
        }
        //투두리스트를 클릭 했을때 함수를 실행한다
        //handleTodoItemClick(aTodo.todoId)함수를 실행한다
        todoLi.addEventListener("click", function(){
            handleTodoItemClick(aTodo.todoId)
        })
        
        //삭제버튼을 클릭 했을때 함수를 실행한다
        //handleTodoDelBtnClick(aTodo.todoId)함수를 실행한다
        todoDelBtn.addEventListener("click", function(){
            handleTodoDelBtnClick(aTodo.todoId)
        })
    })
}

//이벤트 핸들러로 클릭된 아이디를 이용해 클릭한 할 일 완료상태로 수정하기
function handleTodoItemClick(clickedId){
    //할 일 목록을 클릭했을 때 배열을 돌며 할일 아이디가 클릭된 아이디를 비교한다
    //같으면 반대의 값을 씌우고 다르면 그대로 반환
    //반환한 것을 배열에 넣기
    todoArr = todoArr.map(function(aTodo){
        if(aTodo.todoId === clickedId){
            return{
                //기존 배열에다가 투두던의 반전을 덮어 쓰느것
                //원래의 값은 폴스니까 트루를 주어서 던 클래스를 가질 수 있도록
                ...aTodo, todoDone: !aTodo.todoDone
            }
        } else{
            //일치하지 않으면 그냥 원래상태를 반롼
            return aTodo
        }
    })
    //반환된것을 배열에 넣은 뒤 화면에 띄우기
    displayTodo()
    saveTodo() //수정된 할일을 스토리지에 저장하기
}

//이벤트 핸들러로 클릭된 아이디를 이용해 클릭한 할 일 삭제하기
function handleTodoDelBtnClick(clickedId){
    //여러개 중에 하나만 지우고 나머지는 남겨야 하기때문에 필터
    //할일 하나하나를 들고 배열을 돌며 클릭된 아이디가 있는지 대조해보고
    //클릭되어있는 할일을 제외하고 반환하여 배열에 저장
    todoArr = todoArr.filter(function(aTodo){
        return aTodo.todoId !== clickedId //클릭된 할 일 말고 나머지 반환
    })
    //반환된것을 배열에 넣은 뒤 화면에 띄우기
    displayTodo()
    saveTodo() //수정된 할일을 스토리지에 저장하기
}

//로컬스토리지에 저장하기
function saveTodo(){
    //로컬스토리지에 배열에 객채가 있는걸저장할 때는 문자열로 변환하여 해야함
    const todoString = JSON.stringify(todoArr)
    localStorage.setItem("myTodos", todoString) //("키", 객체 짝)
}

//로컬스토리지에서 가져오기
function loadTodo(){
    const myTodos = localStorage.getItem("myTodos") //키가 myTodo를 가져온다
    //안전하게 가져오기위해 이프문 추가
    //마이 투두가 비어있으면 아무것도 안가져오도록 설정
    if(myTodos !== null){
        todoArr = JSON.parse(myTodos);
        displayTodo()
    }
}

//가져오는 함수는 창을 열 때 한번만 작동하면되기 때문에 바로 함수호출 가능
loadTodo();