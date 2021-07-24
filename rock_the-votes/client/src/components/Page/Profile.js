import React, { useContext } from "react";
import IssueForm from "../Issues/IssueForm.js";
import IssueList from "../Issues/IssueList.js";
import { UserContext } from "../../context/UserProvider.js";

const Profile = () => {
  const {
    user: { username },
    getIssuesByUser,
    createIssue,
    issueComments,
    issues,
  } = useContext(UserContext);

  return (
    <div className="profile">
      <h1>Welcome {username}</h1>
      <h3>Post an issue</h3>
      <IssueForm createIssue={createIssue} />
      <h3>Recent Issues</h3>
      <div className="issues">
        <IssueList
          issues={issues}
          getIssues={getIssuesByUser}
          issueComments={issueComments}
        />
      </div>
    </div>
  );
}

export default Profile;