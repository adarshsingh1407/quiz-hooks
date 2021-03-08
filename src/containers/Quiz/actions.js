import {
  FETCH_QUIZ_DETAIL,
  FETCH_QUIZ_DETAIL_ERROR,
  FETCH_QUIZ_DETAIL_SUCCESS,
  GO_TO_NEXT_QUESTION,
  SELECT_OPTION,
  SUBMIT_RESPONSE,
  SUBMIT_RESPONSE_SUCCESS,
  SUBMIT_RESPONSE_ERROR,
  CHECK_QUIZ_COMPLETE,
} from "./constants";

export const fetchQuizDetail = (id) => {
  return {
    type: FETCH_QUIZ_DETAIL,
    id,
  };
};

export const fetchQuizDetailSuccess = (quizDetail) => ({
  type: FETCH_QUIZ_DETAIL_SUCCESS,
  quizDetail,
});

export const fetchQuizDetailError = (errors) => ({
  type: FETCH_QUIZ_DETAIL_ERROR,
  errors,
});

export const selectOption = (questionId, option) => ({
  type: SELECT_OPTION,
  questionId,
  option,
});

export const goToNextQuestion = (questionId) => ({
  type: GO_TO_NEXT_QUESTION,
  questionId,
});

export const submitResponse = (quizAnswer) => ({
  type: SUBMIT_RESPONSE,
  quizAnswer,
});

export const submitResponseSuccess = (quizResult) => ({
  type: SUBMIT_RESPONSE_SUCCESS,
  quizResult,
});

export const submitResponseError = (quizResultErrors) => ({
  type: SUBMIT_RESPONSE_ERROR,
  quizResultErrors,
});

export const checkQuizComplete = ({ quizResponses, questionId, option }) => ({
  type: CHECK_QUIZ_COMPLETE,
  quizResponses,
  questionId,
  option,
});
