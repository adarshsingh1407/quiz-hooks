import { combineReducers } from "redux";
import quizList from "../../containers/QuizList/reducer";
import quiz from "../../containers/Quiz/reducer";

export default combineReducers({ quizList, quiz });
