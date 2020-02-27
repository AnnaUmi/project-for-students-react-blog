import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import TagList from "../../components/TagList";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const Article = props => {
  const slug = props.match.params.slug;
  const apiUrl = `https://conduit.productionready.io/api/articles/${slug}`;
  const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl);
  useEffect(() => {
    doFetch();
  }, [doFetch]);
  return (
    <div className="article-page">
      <div className="article-page__bunner">
        {!isLoading && response && (
          <>
            <h1>{response.article.title}</h1>
            <div className="article-page__meta">
              <Link to={`/profile/${response.article.author.username}`}>
                <img src={response.article.author.image} alt="user photo" />
                {response.article.author.username}
              </Link>
              <div className="article-page__date">
                {response.article.createdAt}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="article-page__content">
        {isLoading && <Loading />}
        {error && <ErrorMessage />}
        {!isLoading && response && (
          <div>
            <div>{response.article.body}</div>
            <TagList tags={response.article.tagList} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Article;
