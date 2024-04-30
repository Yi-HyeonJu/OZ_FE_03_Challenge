// TODO1: Node.js의 http 모듈과 querystring 모듈을 불러옵니다.
const http = require('http');
const qs = require('querystring');

// 과제를 옯기는 과정에서 express 사용
const express = require('express');
const app = express();

// 파싱
app.use(express.urlencoded({ extended: false }));

// express로 public 폴더의 정적인 파일(html) 사용
app.use(express.static('public'));

app.post('/', (req, res) => {
  const postData = req.body;

      /* 
        TODO5: 로그인 정보를 검증합니다.
        아이디는 admin, password는 admingogo77인지 확인해야 합니다.
        둘 다 일치할 시 200 코드와 환영한다는 메시지가 나와야 합니다.
        일치하지 않을 시 401 코드와 실패 메시지를 출력합니다.
      */
  if (
    postData.username === 'admin' &&
    postData.password === 'admingogo77'
  ) {
    console.log('환영합니다');
    res.writeHead(200, { 'Content-Type': 'text/html' }); // HTTP 상태 코드 200과 컨텐츠 타입을 설정합니다.
    res.end('<h1>로그인 성공!</h1>'); // 클라이언트에 로그인 성공 메시지를 보냅니다.
  } else {
    console.log('아이디와 비밀번호가 일치하지 않습니다'); // 콘솔에 실패 메시지를 출력합니다.
    res.writeHead(401, { 'Content-Type': 'text/html' }); // HTTP 상태 코드 401과 컨텐츠 타입을 설정합니다.
    res.end('<h1>로그인에 실패하였습니다</h1>'); // 클라이언트에 실패 메시지를 보냅니다.
  }
});

// 서버를 3000번 포트에서 실행합니다.
app.listen(3000, () => {
  console.log(`서버가 http://localhost:3000 에서 실행 중입니다.`);
});