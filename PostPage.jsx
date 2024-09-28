import React, { useState } from 'react';
import PostTypeSelector from './PostTypeSelector';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
import './PostPage.css';

function PostPage() {
  var [postType, setPostType] = useState('question');

  function handlePostTypeChange(e) {
    setPostType(e.target.value);
  }

  return (
    <div className="post-page">
      <h1 className="post-page-title">New Post</h1>
      <PostTypeSelector postType={postType} handlePostTypeChange={handlePostTypeChange} />
      <div className="post-form-container">
      {postType === 'question' ? <QuestionForm /> : <ArticleForm />}
      </div>
    </div>
  );
}

export default PostPage;
