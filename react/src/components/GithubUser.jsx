import { useParams } from "react-router-dom";
import { useGitHubUser } from "../custom_hooks_exercises/useGithubUser";

export function GitHubUser() {
  let { username } = useParams() 
  const { data, loading, error, fetchGitHubUser } = useGitHubUser(username);

  function handleGetUserData() {
    fetchGitHubUser();
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Load User Data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}