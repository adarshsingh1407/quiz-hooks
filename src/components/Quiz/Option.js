import React from "react";

export default function Option(props) {
  const { index, questionId, option, selectOption } = props;
  function handleOptionSelect() {
    selectOption(questionId, option);
  }
  return (
    <div className="col-12 my-1">
      <div className={`answer-value-${index} card ml-3 py-2 border-grey`}>
        <input
          className="form-check-input"
          type="radio"
          name="question"
          id={`option-${index}`}
          value={option}
          onChange={handleOptionSelect}
        />
        <label className="form-check-label pl-3" htmlFor={`option-${index}`}>
          {option}
        </label>
      </div>
    </div>
  );
}
