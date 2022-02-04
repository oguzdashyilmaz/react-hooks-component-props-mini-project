import React from 'react';
import Article from './Article';

const ArticleList = ({posts}) => (
  <main>
    {posts.map(post=>(
      <Article key={post.id} title={post.title} date={post.date} review={post.review}/>
    ))}
  </main>
);

export default ArticleList;