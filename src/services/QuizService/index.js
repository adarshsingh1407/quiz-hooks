import axios from "axios";
import { DEFAULT_AUTH_TOKEN, DEFAULT_AXIOS_TIMEOUT } from "../../constants";

class QuizService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      timeout: DEFAULT_AXIOS_TIMEOUT,
      headers: {
        "auth-token": DEFAULT_AUTH_TOKEN,
        "content-type": "application/json",
      },
    });
  }

  getQuizList = () => this.axiosInstance.get("/api/quiz/all");

  getQuizDetail = (id) =>
    this.axiosInstance.get(`/api/quiz-questions/all/${id}`);

  submitQuiz = (quizResponse) =>
    this.axiosInstance.post("/api/user/quiz-score", quizResponse);
}

export default QuizService;
