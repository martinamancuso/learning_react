# useMemo

## Definizione

**useMemo** è un custom hook di React che permette di calcolare una nuova variabile, salvarla in memoria e riutilizzarla, senza doverla ricalcolare, finchè le varabili utilizzate nel calcolo non cambiano.

## Utilizzo

**useMemo** accetta due argomenti:
1. una funzione anonima pura (senza argomenti) che ritorna il valore
della nuova variabile calcolata
2. la lista delle dipendenze: le variabili che sono utilizzate per
il calcolo della nuova variabile

## Esempio

In questo esempio la nuova variabile `visibleTodos` conterrà solo
gli elementi della proprietà array `todos` che hanno la proprietà `done`
uguale a `false`.

```js
import { useMemo } from 'react';

/* todos è un array di oggetti, dove ogni oggetto ha la proprietà "done"

  todos = [
    { name: "clean the bath", done: true },
    { name: "cook the chicken", done: false }
  ]
*/
function TodoList({ todos }) {
  /* visibleTodos sarà:

    [
      { name: "cook the chicken", done: false }
    ]
  */
  const visibleTodos = useMemo(
    () => {
      return todos.filter((todo) => todo.done === false)
    },
    [todos]
  );
  // ...
}
```

La variabile `visibleTodos` viene calcolata al primo render del componente
e salvata in memoria. Il suo valore viene riutilizzato e la variabile **NON**
viene ricalcolata finché una delle sue dipendenze (`todos`) non cambia. 