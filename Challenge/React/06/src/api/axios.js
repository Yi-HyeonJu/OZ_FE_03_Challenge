import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "a8ba814d6f4f5548eeee34f389daa56b",
        language: "ko-KR"
    }
})

export default instance;