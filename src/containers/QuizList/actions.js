import {
  FETCH_QUIZ_LIST,
  FETCH_QUIZ_LIST_ERROR,
  FETCH_QUIZ_LIST_SUCCESS,
} from "./constants";

export const fetchQuizList = () => ({
  type: FETCH_QUIZ_LIST,
});

export const fetchQuizListSuccess = (quizzes) => ({
  type: FETCH_QUIZ_LIST_SUCCESS,
  quizzes,
});

export const fetchQuizListError = (errors) => ({
  type: FETCH_QUIZ_LIST_ERROR,
  errors,
});
