import useSWR from 'swr'

export function GithubUsers2() {

  const fetcher = (url) => fetch(url).then(response => response.json())

  const { data, } = useSWR(`https://api.github.com/users`, fetcher)

  return (
    <div>
    </div>
  )
}



/*
Chiamo useSWR, passando due parametri: URL e funzione fetch
- URL che voglio interrogare, da cui recuperare i dati;
- Funzione fetch, per determinare come recuperare i dati dal server;
  
La chiamata useSWR restituirà un oggetto, da cui estrarrò:
- dati 
*/