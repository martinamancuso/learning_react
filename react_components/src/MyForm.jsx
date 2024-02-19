import { useState } from "react";

// function createData() {
//   return {
//     username: "",
//     passord: "",
//     session: false
//   }
// }

export function MyForm() {

  // a 'useState' possiamo passare qualunque cosa: stringa, numero, oggetto, funzione...
  // la 'state variable' la potremo chiamare 'data'
  // e la 'update function' 'setData'
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false
  });

  // per non ripetere lo stesso codice per la creazione di oggetti, si può valutare una
  // alternativa: avendo creato la funzione 'createData()', si passa direttamente la funzione a 'useState()'
  // const [data, setData] = useState(createData())

  function handleInputChange(event) {
    const name = event.target.name
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    // passo una callback a 'setData', 
    // in quanto il valore 'successivo' dipende dal valore corrente della 'state variable'
    // 'd' è il valore corrente della 'state variable' che andremo a sostituire con il 'return' dell' 'update function' 'setData()'
    setData((d) => {

      // il valore dell'oggetto è di sola lettura, non possiamo modificarlo
      // possiamo utilizzare lo 'spread operator' per copiare il suo contenuto e poi aggiornare la parte restante dell'oggetto
      const updated = { ...d }
      
      // utilizziamo la 'bracket notation' dal momento che non conosciamo il valore della proprietà 'name' a priori
      // Ricorda: quando lavoriamo con i form e con le checkbox (<input type="checkbox"></input>), 
      // dobbiamo controllare l'attributo 'checked' e non l'attributo 'type', quindi la 'checked' prop.
      updated[name] = (type === 'checkbox') ? checked : value

      // resitituiamo l'oggetto avendo sostituito il valore precedente della 'state variable'
      return updated

      /*

      const updated = { ...d }
      updated[name] = value
      return updated
    
      - Questa porzione di codice potremmo scriverla anche così:
    
      const updated = {
        ...d,
        [name]: value
      }

      - E, per semplificare ulteriormente, potremmo anche scrivere:

      return {
        ...d,
        [name]: value
      }

      */
    })
  }

  function handleResetForm() {
    setData({
      username: "",
      password: "",
      session: false
    });
  }

  return (
    <div>
      <h1>My Form</h1>
      <input name="username" value={data.username} onChange={handleInputChange} />
      <input name="password" type="password" value={data.password} onChange={handleInputChange} />
      <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange}/>
      
      <button disabled={!data.username || !data.password}>Login</button>
      <button onClick={handleResetForm}>Reset</button>

       {/* Possiamo mostrare i dati dell'oggetto 'data'? Sì. 
       Ma dobbiamo convertire l'oggetto JavaScript in striga JSON, per essere leggibile dal browser.
       JSON.stringify() prende 3 parametri: value, replacer, space. */}
      <pre>
      {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}