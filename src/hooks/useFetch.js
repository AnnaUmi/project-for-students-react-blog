import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";

export default url => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [errors, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage("token");
  console.log("token", token);

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);
  useEffect(() => {
    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : ""
        }
      }
    };
    if (!isLoading) {
      return;
    }
    axios(url, requestOptions)
      .then(res => {
        console.log("sucess", res);
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch(errors => {
        console.log("errors", errors);
        setIsLoading(false);
        setError(errors.response.data);
      });
  }, [isLoading, options, url, token]);

  return [{ isLoading, response, errors }, doFetch];
};
