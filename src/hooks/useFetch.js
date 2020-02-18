import { useState, useEffect } from "react";
import axios from "axios";
export default url => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };
  useEffect(() => {
    if (!isLoading) {
      return;
    }
    axios(url, options)
      .then(res => {
        console.log("sucess", res);
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch(error => {
        console.log("error", error);
        setIsLoading(false);
        setError(error.response.data);
      });
  }, [isLoading, options, url]);

  return [{ isLoading, response, error }, doFetch];
};