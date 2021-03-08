import { connect } from "react-redux";
import Question from "../../components/Quiz/Question";
import { selectOption, goToNextQuestion } from "./actions";

const mapStateToProps = ({ quiz }) => ({ quiz });

const mapDispatchToProps = (dispatch) => ({
  selectOption: (questionId, option) =>
    dispatch(selectOption(questionId, option)),
  goToNextQuestion: (questionId) => dispatch(goToNextQuestion(questionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
