import { all } from "redux-saga/effects";
import { loadQuizList } from "../../containers/QuizList/sagas";
import { loadQuizDetail } from "../../containers/Quiz/sagas";

export default function* rootSaga() {
  yield all([loadQuizList(), loadQuizDetail()]);
}
