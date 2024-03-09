import { useEffect } from "react";
import { useGitHubUser } from "../custom_hooks_exercises/useGithubUser";

export function GitHubUser({ username }) {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // async function fetchGitHubUser(githubUser) {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const response = await fetch(
  //       `https://api.github.com/users/${githubUser}`
  //     );
  //     const data = await response.json();

  //     setData(data);
  //   } catch (error) {
  //     setError(error);
  //     setData(null);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  const { data, loading, error, fetchGitHubUser } = useGitHubUser()

  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && (
        <h1>
          {data.name}, {data.login}, {data.avatar_url}
        </h1>
      )}
    </div>
  );
}
