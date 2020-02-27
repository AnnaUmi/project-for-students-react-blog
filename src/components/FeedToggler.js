import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../context/currentUser";

const FeedToggler = ({ tagName }) => {
  const [currentUserState] = useContext(CurrentUserContext);
  return (
    <div className="feed-toggle">
      <ul>
        {currentUserState.isLoggedIn && (
          <li>
            <NavLink to="/feed">Your feed</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/" exact>
            Global Feed
          </NavLink>
        </li>
        {tagName && (
          <li>
            <NavLink to={`/tags/${tagName}`} exact>
              {tagName}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};
export default FeedToggler;
