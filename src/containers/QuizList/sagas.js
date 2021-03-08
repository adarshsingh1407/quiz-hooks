import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchQuizListSuccess,
  fetchQuizListError,
} from "../../containers/QuizList/actions";
import { FETCH_QUIZ_LIST } from "../../containers/QuizList/constants";
import QuizService from "../../services/QuizService";

export function* fetchQuizList() {
  try {
    const quizService = new QuizService();
    const response = yield call(quizService.getQuizList);
    yield put(fetchQuizListSuccess(response.data));
  } catch (e) {
    console.error("Error in fetchQuizList", e);
    yield put(fetchQuizListError(["Could not fetch quiz list."]));
  }
}

export function* loadQuizList() {
  yield takeLatest(FETCH_QUIZ_LIST, fetchQuizList);
}
