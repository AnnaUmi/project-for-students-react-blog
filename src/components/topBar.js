import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../context/currentUser";

const TopBar = () => {
  const [CurrentUserState] = useContext(CurrentUserContext);
  console.log("CurrentUserState", CurrentUserState);
  return (
    <nav className="navbar">
      <NavLink to="/"> Medium</NavLink>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        {!CurrentUserState.isLoggedIn && (
          <>
            <li>
              <NavLink to="/login">Sing in</NavLink>
            </li>
            <li>
              <NavLink to="/register">Sign up</NavLink>
            </li>
          </>
        )}
        {CurrentUserState.isLoggedIn && (
          <>
            <li>
              <NavLink
                to={`/profiles/${CurrentUserState.currentUser.username}`}
              >
                NewPost
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles/new/">
                <img
                  src={CurrentUserState.currentUser.image}
                  alt={CurrentUserState.currentUser.username}
                ></img>
                {CurrentUserState.currentUser.username}
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default TopBar;
