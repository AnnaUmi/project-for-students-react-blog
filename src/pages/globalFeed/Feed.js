import React from "react";
import { Link } from "react-router-dom";
import TagList from "../../components/TagList";

const Feed = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <div className="article-meta">
            <Link to={`/profiles/${article.author.username}`}>
              <img src={article.author.image} alt="ures photo" />
            </Link>
            <div className="article-info">
              <Link to={`/profiles/${article.author.username}`}>
                {article.author.username}
              </Link>
              <div className="article-date">{article.createdAt}</div>
            </div>
          </div>
          <Link to={`/articles/${article.slug}`} className="link-preview">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more</span>
            <TagList tags={article.tagList} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Feed;
