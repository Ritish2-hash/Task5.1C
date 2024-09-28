import React from 'react';
import './QuestionForm.css';

function QuestionForm() {
  return (
    <form className="question-form">
      <label >Title</label>
      <input id="question-title" type="text" placeholder="Enter the title of your question" />

      <label >Describe your problem</label>
      <textarea id="question-description" placeholder="Provide details about your question"></textarea>

      <label >Tags</label>
      <textarea id="question-tags" placeholder="Add tags to describe your question"></textarea>

      <button type="submit">Post</button>
    </form>
  );
}

export default QuestionForm;
