import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  fetchQuizDetailSuccess,
  fetchQuizDetailError,
  goToNextQuestion,
  submitResponse,
  submitResponseSuccess,
  submitResponseError,
} from "../../containers/Quiz/actions";
import QuizService from "../../services/QuizService";
import {
  CHECK_QUIZ_COMPLETE,
  FETCH_QUIZ_DETAIL,
  SELECT_OPTION,
  SUBMIT_RESPONSE,
} from "./constants";
import { getAnswerMapping } from "./quizUtils";

export function* fetchQuizDetail({ id }) {
  try {
    const quizService = new QuizService();
    const response = yield call(quizService.getQuizDetail, id);
    yield put(fetchQuizDetailSuccess(response.data));
  } catch (e) {
    console.error("Error in fetchQuizList", e);
    yield put(fetchQuizDetailError(["Could not fetch quiz details."]));
  }
}

export function* checkQuizComplete({ quizResponses, questionId, option = "" }) {
  if (quizResponses[quizResponses.length - 1].id === questionId) {
    // last question has been answered
    quizResponses[quizResponses.length - 1].submittedOption = option;
    const quizAnswer = getAnswerMapping(quizResponses[0].quiz, quizResponses);
    yield put(submitResponse(quizAnswer));
  } else {
    // go to next question
    const nextQuesIndex =
      quizResponses.findIndex((qr) => qr.id === questionId) + 1;
    yield put(goToNextQuestion(quizResponses[nextQuesIndex].id));
  }
}

export function* selectOption({ questionId, option }) {
  const state = yield select();
  const { quiz: { quizResponses = [] } = {} } = state;
  yield* checkQuizComplete({ quizResponses, questionId, option });
}

export function* submitQuizResponse({ quizAnswer }) {
  try {
    const quizService = new QuizService();
    const response = yield call(quizService.submitQuiz, quizAnswer);
    yield put(submitResponseSuccess(response.data));
  } catch (e) {
    console.error("Error in submitQuizResponse", e);
    yield put(submitResponseError(["Could not get quiz result."]));
  }
}

export function* loadQuizDetail() {
  yield takeLatest(FETCH_QUIZ_DETAIL, fetchQuizDetail);
  yield takeLatest(SELECT_OPTION, selectOption);
  yield takeLatest(SUBMIT_RESPONSE, submitQuizResponse);
  yield takeLatest(CHECK_QUIZ_COMPLETE, checkQuizComplete);
}
