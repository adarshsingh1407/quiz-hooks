import { connect } from "react-redux";
import Quiz from "../../components/Quiz";
import {
  fetchQuizDetail,
  goToNextQuestion,
  submitResponse,
  checkQuizComplete,
} from "./actions";

const mapStateToProps = ({ quiz }) => ({ quiz });

const mapDispatchToProps = (dispatch) => ({
  fetchQuizDetail: (id) => dispatch(fetchQuizDetail(id)),
  goToNextQuestion: () => dispatch(goToNextQuestion()),
  submitResponse: () => dispatch(submitResponse()),
  checkQuizComplete: ({ quizResponses, questionId, option }) =>
    dispatch(checkQuizComplete({ quizResponses, questionId, option })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
