import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const PopularTags = () => {
  const [{ response, isLoading, error }, doFetch] = useFetch(
    "https://conduit.productionready.io/api/tags"
  );
  useEffect(() => {
    doFetch();
  }, [doFetch]);
  if (isLoading || !response) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  return (
    <div className="sodebar">
      <div>Popular Tags</div>
      <ul>
        {response.tags.map(tag => (
          <Link to={`/tags/${tag}`} className="tag-link" key={tag}>
            {tag}
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default PopularTags;
