/*
Crea un componente che recupera dati dall'API di ricette 
(https://api.sampleapis.com/recipes/recipes).

L'obiettivo sarà mostrare i nomi delle ricette in una lista, 
al caricamento del componente, quando viene caricata la pagina.

Questo componente utilizzerà ‘useEffect’, 
per eseguire il fetch dei dati al caricamento del componente,
e ‘useState’ per mantenere lo stato dei dati ricevuti.
*/

import { useEffect, useState } from "react";
import styles from "./FetchRecipes.module.css";

export function FetchRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.sampleapis.com/recipes/recipes`
        );
        const data = await response.json();
        if (response.ok) {
          setRecipes(data);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.recipeList}>
        {recipes.map((recipe) => (
          <li key={recipe.id} className={styles.recipeItem}>
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
