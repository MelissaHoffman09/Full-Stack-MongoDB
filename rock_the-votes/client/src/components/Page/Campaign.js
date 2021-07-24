import React, { useContext } from "react";
import IssueList from "../Issues/IssueList.js";
import { UserContext } from "../../context/UserProvider.js";

const Campaign = () => {
  const {
    user: { username },
    issues,
  } = useContext(UserContext);

  return (
    <div className="profile">
      <h1>Hello {username}!</h1>
      <h3>Recent Campaigns</h3>   
      <div className="issues">
        <IssueList
          issues={issues}
        />
      </div>
    </div>
  );
}

export default Campaign;