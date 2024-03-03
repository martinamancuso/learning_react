# useCallback

## Definizione

**useCallback** è un custom hook di React che permette di salvare in memoria
una funzione e riutilizzarla, senza doverla ricreare, se le variabili
utilizzate al suo interno non cambiano.

## Esempio

La funzione `handleSubmit()` viene ricreata ogni volta che 
**una qualsiasi prop** del componente viene cambiata, a prescindere 
che la prop venga utilizzata o meno all'interno 
della funzione `handleSubmit()`.

In questo esempio, se la prop `theme` cambia, la funzione `handleSubmit`
viene ricreata anche se la prop non è utilizzata al suo interno.

```js
function ProductPage({ productId, referrer, theme }) {
  function handleSubmit(orderDetails) {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }
  // ...
};
```

Per evitare che questo accada, si usa **useCallback** che ricrea
la funzione **solo** se una delle dipendenze passate come secondo argomento
(`productId` e `referrer`) cambia.

Come secondo parametro di **useCallback** vengono passate le variabili
che vengono utilizzate all'interno della funzione anonima passata
come primo argomento a **useCallback**.

In questo caso, se la prop `theme` cambia, la funzione `handleSubmit`
**non** viene ricreata perché `theme` non è tra le dipendenze
di **useCallback**.

```js
function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
  // ...
};
```

