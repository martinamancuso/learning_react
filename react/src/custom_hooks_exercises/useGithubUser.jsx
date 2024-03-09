import useSWR from "swr";

// const fetcher = url => fetch(url).then(response => response.json())

export function useGitHubUser(githubUser) {

  const { data, error, mutate } = useSWR(`https://api.github.com/users/${githubUser}`)
  // Precedente: const { data, error, mutate } = useSWR(`https://api.github.com/users/${githubUser}`, fetcher)
  // Vedi 'Root.jsx'

  // Creo questa funzione per chiamare nuovamente 'mutate()', che chiamerà nuovamente l'API
  function fetchGitHubUser() {
    mutate()
  }

  return {
    data,
    loading: !data && !error,
    error,
    fetchGitHubUser
  }
}