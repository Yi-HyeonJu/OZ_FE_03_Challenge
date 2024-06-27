/* -----------------------------------------------------------------------------*/
// <요구사항>
// 1. input에 트윗을 입력하고 '게시'버튼을 누르면 트윗이 생성되어야 합니다.
// 2. 생성된 트윗은 게시글, 좋아요 버튼, 좋아요 카운트하는 요소를 포함해야 합니다.
// 3. input에 아무것도 입력되어 있지 않으면 트윗이 생성되지 않아야 합니다. (if문)
// 4. 좋아요 버튼을 클릭하면 좋아요 카운트가 1씩 증가해야 합니다.
// 5. styles.css 파일을 보고 새롭게 생성한 요소에 class를 추가하면 미리 작성해둔 스타일이 적용됩니다.
// 6. 스타일은 마음껏 수정해도 좋습니다.
/* -----------------------------------------------------------------------------*/
// 트윗 게시 버튼 요소
const postTweet = document.querySelector('#postTweet');
postTweet.addEventListener('click', function () {
    // 트윗을 입력할 input 요소
    const tweetInput = document.querySelector('#tweetInput');
    // 트윗이 게시될 컨테이너
    const tweetsContainer = document.querySelector('#tweets_container');
    // 여기에 코드를 입력하세요.
    if( tweetInput.value != '' ){
        // 트윗요소들을 담을 박스 생성 & 기존 css에 연결
        const tweetBox = document.createElement('div');
        tweetBox.classList.add('tweet');

        // 트윗요소중 하나인 텍스트 생성 & 기존 css에 연결 & 텍스트 값 연결
        const tweetText = document.createElement('span');
        tweetText.classList.add('tweet-text');
        tweetText.textContent = tweetInput.value;

        //트윗요소 중 하나인 버튼 생성 & 기존 css에 연결  
        const likeButton  = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.textContent = '👍';

        //버튼의 카운트 셀 텍스트 생성 & 기존 css에 연결 & 초기값은 0
        const likeCounter = document.createElement('span')
        likeCounter.classList.add('like-counter')
        let likeCount = 0
        likeCounter.textContent = likeCount;

        //텍스트, 버튼, 카운터를 부모인 박스 안에 자식으로 넣기
        tweetBox.appendChild(tweetText);
        tweetBox.appendChild(likeButton);
        tweetBox.appendChild(likeCounter);

        //버튼을 눌렀을 때 이벤트 - 카운트숫자 올라가기
        likeButton.addEventListener('click', function() {
            likeCount++;
            likeCounter.textContent = `${likeCount}`
        })

        //텍스트 박스를 부모인 컨테이너 안에 자식으로 넣기
        tweetsContainer.appendChild(tweetBox);
        tweetInput.value = '';
    } else {
        alert("메세지를 입력해 주세요")
    }
});