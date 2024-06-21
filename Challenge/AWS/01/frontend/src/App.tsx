import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

// const url = 'http://localhost:4000/users'
const url =
  "http://ec2-3-36-63-66.ap-northeast-2.compute.amazonaws.com:4000/users";

interface User {
  userName: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [userName, setUserName] = useState("");

  const loadUsers = async () => {
    try {
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(url, { userName });
      setUserName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">유저 추가</button>
      </form>

      <br />

      <div>
        <button onClick={loadUsers}>유저 가져오기</button>
      </div>

      <br />

      <ul>
        {users.map(({ userName }, i) => (
          <li key={i}>{userName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
