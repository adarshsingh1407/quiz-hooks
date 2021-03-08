import { isEmpty } from "lodash";
import { TIME_LIMIT } from "../../constants";
import {
  FETCH_QUIZ_DETAIL,
  FETCH_QUIZ_DETAIL_ERROR,
  FETCH_QUIZ_DETAIL_SUCCESS,
  GO_TO_NEXT_QUESTION,
  SELECT_OPTION,
  SUBMIT_RESPONSE,
  SUBMIT_RESPONSE_ERROR,
  SUBMIT_RESPONSE_SUCCESS,
} from "./constants";
import { getQuizResponsesFromQuestions } from "./quizUtils";

const DEFAULT_STATE = {
  loading: false,
  errors: [],
  quizDetail: {},
  quizResponses: [],
  activeQuestionId: undefined,
  quizResultLoading: false,
  quizResultErrors: [],
  quizResult: {},
  showResult: false,
};

export default (state = { ...DEFAULT_STATE }, action = {}) => {
  switch (action.type) {
    case FETCH_QUIZ_DETAIL: {
      return {
        ...state,
        ...DEFAULT_STATE,
        loading: true,
      };
    }
    case FETCH_QUIZ_DETAIL_SUCCESS: {
      const { quizDetail = {} } = action;
      const { questions = [] } = quizDetail;
      const quizResponses = getQuizResponsesFromQuestions(questions);
      const activeQuestionId = !isEmpty(questions)
        ? questions[0].id
        : undefined;
      return {
        ...state,
        loading: false,
        quizDetail,
        quizResponses,
        activeQuestionId,
      };
    }
    case FETCH_QUIZ_DETAIL_ERROR: {
      const { errors = [] } = action;
      return { ...state, loading: false, errors };
    }
    case SELECT_OPTION: {
      const { questionId, option } = action;
      const { quizResponses } = state;
      const newQuizResponses = quizResponses.map((qr) => {
        if (qr.id === questionId) {
          return { ...qr, submittedOption: option };
        }
        return qr;
      });
      return { ...state, quizResponses: newQuizResponses };
    }
    case GO_TO_NEXT_QUESTION: {
      const { questionId: activeQuestionId } = action;
      const { quizResponses = [] } = state;
      const currentTS = new Date().getTime();
      const newQuizResponses = quizResponses.map((qr) => {
        if (qr.id === activeQuestionId) {
          return {
            ...qr,
            startTime: currentTS,
            endTime: currentTS + TIME_LIMIT,
          };
        }
        return qr;
      });
      return { ...state, activeQuestionId, quizResponses: newQuizResponses };
    }
    case SUBMIT_RESPONSE: {
      return {
        ...state,
        quizResultErrors: [],
        showResult: true,
        quizResultLoading: true,
      };
    }
    case SUBMIT_RESPONSE_SUCCESS: {
      const { quizResult } = action;
      return { ...state, quizResultLoading: false, quizResult };
    }
    case SUBMIT_RESPONSE_ERROR: {
      const { quizResultErrors = [] } = action;
      return { ...state, quizResultLoading: false, quizResultErrors };
    }
    default:
      return state;
  }
};
