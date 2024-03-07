import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGitHubUsers2() {

  const { data, error } = useSWR(`https://api.github.com/users`, fetcher);

  // Restituisco un oggetto, con proprietà da me scelte, a cui assegno i valori che ho già e che mi serviranno
  // Gli hook personalizzati restituiscono sempre un oggetto
  return {
    users: data,
    error: error,
    isLoading: !data && !error 
  }
}