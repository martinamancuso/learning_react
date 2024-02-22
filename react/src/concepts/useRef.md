# ref()

Utilizzo di useRef() per creare una mutable variable.

Esempio di lettura e scrittura:

```js
// mountedRef è una variabile booleana
// con valore iniziale "false"
const mountedRef = useRef(false)

useEffect(() => {
  // qui leggo il valore della variabile
  if(!mountedRef.current) {
    // qui imposto il valore della variabile
    mountedRef.current = true
  }
}, [])
```

Esempio di utilizzo con un elemento del DOM:

```js
// inputRef è una variabile che può essere
// "null" (valore iniziale) o un elemento del DOM
const inputRef = useRef(false)

useEffect(() => {
  // qui, se inputRef non è null (e quindi è
  // l'elemento del DOM) allora chiamo il suo 
  // metodo ".focus()"
  inputRef.current?.focus()
}, [])
```

```jsx
// qui assegno a inputRef l'elemento del DOM
return (
  <input ref={inputRef} name="username" /* ... */ />
)
```


Obiettivi useRef()


//


Obiettivo useRef() #1

- Creare un riferimento ad un elemento DOM

* 2 Macro-Step

1° Macro-Step
  1. useRef(), a cui passiamo 'null' come parametro iniziale
  2. lo importiamo da React
  3. lo inseriamo all'interno di una variabile
  4. lo leghiamo all'elemento DOM di interesse, inserendo la 'prop' con il relativo valore
    (nel nostro caso, l'input per l'username utente)
  5. possiamo stamparlo in console, per vedere cosa contiene

2° Macro-Step
  1. Ricorriamo allo hook useEffect() per compiere un'azione al variare della variabile monitorata
    (nel nostro caso l'array sarà vuoto, perché si tratta della prima renderizzazione del componente).
  2. all'interno del primo parametro dello hook, della funzione, inseriamo l'istruzione per la quale:
    se il valore di 'inputRef' è diverso da 'null', 
    allora esegui l'istruzione descritta
    (usiamo l'operatore di concatenamento facoltativo, 
    che esegue il codice dopo il '?', 
    se la proprietà corrente è diversa da 'null' o 'undefined').
  3. chiamiamo il metodo 'focus()' sul riferimento al nodo DOM, 
    dal momento che la proprietà corrente di 'inputRef' conterrà un riferimento ad un elemento DOM.


//


Obiettivo useRef() #2

- Creare una mutable variable

  - memorizzarne il valore tra un rendering e l'altro
  - senza causare il re-rendering del componente, al loro variare


('MyForm.jsx')