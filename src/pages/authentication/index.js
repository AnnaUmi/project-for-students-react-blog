import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from "../../context/currentUser";
import BackendErrorMessages from "../../components/BackendErrorMessages";

const Authentication = props => {
  const isLogin = props.match.path === "/login";
  const apiUrl = isLogin
    ? "https://conduit.productionready.io/api/users/login"
    : "https://conduit.productionready.io/api/users";
  const pageTititle = isLogin ? "Sign in" : "Sign Up";
  const descriptionLink = isLogin ? "/register" : "/login";
  const desctiptionText = isLogin ? "Need an accont?" : "Have an account?";
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUserState, setCurrentUserState] = useContext(
    CurrentUserContext
  );

  const [{ response, isLoading, errors }, doFetch] = useFetch(apiUrl);
  const [token, setToken] = useLocalStorage("token");
  console.log("currentUserState", currentUserState);
  const handleSubmit = e => {
    e.preventDefault();
    const user = isLogin ? { email, password } : { email, password, username };
    doFetch({
      method: "post",
      data: {
        user
      }
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setToken(response.user.token);
    console.log("response", response);
    setIsSuccessfulSubmit(true);
    setCurrentUserState(state => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user
    }));
  }, [response, setToken]);

  if (isSuccessfulSubmit) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>{pageTititle}</h1>
      <Link to={descriptionLink}> {desctiptionText}</Link>
      <form onSubmit={handleSubmit}>
        {errors && <BackendErrorMessages backendErrors={errors.errors} />}
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={username}
            onChange={e => setUsername(e.target.value)}
          ></input>
        )}
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></input>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        ></input>
        <button type="submit" disabled={isLoading}>
          {pageTititle}
        </button>
      </form>
    </div>
  );
};
export default Authentication;
