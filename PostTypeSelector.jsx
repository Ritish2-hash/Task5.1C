import React from 'react';
import './PostTypeSelector.css';

var postOptions = [
  { key: 'question', text: 'Question', value: 'question' },
  { key: 'article', text: 'Article', value: 'article' },
];

function PostTypeSelector(props) {
  return (
    <div className="posttypeselector">
      <select onChange={props.handlePostTypeChange} value={props.postType}>
        {postOptions.map(function(option) {
          return (
            <option key={option.key} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default PostTypeSelector;
