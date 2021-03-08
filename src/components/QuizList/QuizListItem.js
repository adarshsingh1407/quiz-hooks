import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { START } from "../../constants/labels";

function QuizListItem(props) {
  const { index, quiz } = props;
  const history = useHistory();
  return (
    <div className="container card">
      <div className="row p-2">
        <div className="col-12 quiz-title">
          <div className="row">
            <div className="col-10">
              <h3 className={`quiz-list-${index}`}>{quiz.name}</h3>
            </div>
            <div className="col-2">
              <button
                className={`start-quiz-${index} btn btn-success float-right`}
                onClick={() => history.push(`/quiz/${quiz.id}`)}
              >
                {START}
              </button>
            </div>
          </div>
        </div>
        <div className="col-12">{quiz.description}</div>
      </div>
    </div>
  );
}

QuizListItem.propTypes = {
  index: PropTypes.number.isRequired,
  quiz: PropTypes.object.isRequired,
};

export default QuizListItem;
