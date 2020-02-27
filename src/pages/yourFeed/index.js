import React, { useEffect } from "react";
import { stringify } from "query-string";
import useFetch from "../../hooks/useFetch";
import Feed from "./Feed";
import Pagination from "../../components/Pagination";
import { getPaginator, limit } from "../../utils";
import PopularTags from "../../components/PopulatTags";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import FeedToggler from "../../components/FeedToggler";

const YourFeed = ({ location, match }) => {
  const { currentPage, offset } = getPaginator(location.search);
  console.log("currentPage, offset", currentPage, offset);
  const stringifyParam = stringify({ limit, offset });
  const apiUrl = `https://conduit.productionready.io/api/articles/feed/?${stringifyParam}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  const url = match.url;
  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);
  return (
    <div className="home">
      <div className="banner">
        <div className="container">
          <h1>Blog</h1>
        </div>
        <div className="page">
          <FeedToggler />
          {isLoading && <Loading />}
          {error && <ErrorMessage />}
          {!isLoading && response && (
            <>
              <PopularTags />
              <Feed articles={response.articles}></Feed>

              <Pagination
                total={response.articlesCount}
                limit={limit}
                url={url}
                currentPage={currentPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default YourFeed;
