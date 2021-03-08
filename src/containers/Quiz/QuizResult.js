import { connect } from "react-redux";
import QuizResult from "../../components/Quiz/QuizResult";

const mapStateToProps = ({ quiz }) => ({ quiz });

export default connect(mapStateToProps)(QuizResult);
