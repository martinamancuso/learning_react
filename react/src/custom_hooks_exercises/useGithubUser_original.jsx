import { useState } from "react";

export function useGitHubUser() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGitHubUser(githubUser) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${githubUser}`
      );
      const data = await response.json();

      setData(data);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    error,
    fetchGitHubUser
  }
}