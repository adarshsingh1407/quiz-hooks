import { connect } from "react-redux";
import QuizList from "../../components/QuizList";
import { fetchQuizList } from "./actions";

const mapStateToProps = ({ quizList }) => ({ quizList });

const mapDispatchToProps = (dispatch) => ({
  fetchQuizList: () => dispatch(fetchQuizList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
