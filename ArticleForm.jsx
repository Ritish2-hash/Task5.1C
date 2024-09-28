import React from 'react';
import './ArticleForm.css';

function ArticleForm() {
  return (
    <form className="articleform">
      <label >Title</label>
      <input id="articletitle" type="text" placeholder="Enter the title of your article" />

      <label >Abstract</label>
      <input id="articleabstract" type="text" placeholder="Provide a summary of your article" />

      <label >Article Text</label>
      <textarea id="articletext" placeholder="Write your article here"></textarea>

      <label >Tags</label>
      <textarea id="articletags" placeholder="Add tags to describe your article"></textarea>

      <button type="submit">Post</button>
    </form>
  );
}

export default ArticleForm;
