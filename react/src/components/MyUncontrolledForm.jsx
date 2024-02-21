/*
Uncontrolled Form

Componenti che mantengono il proprio stato,
che non si affidano ai genitori,
per sapere cosa dovrebbero mostrare e cosa succede
quando l'utente cerca di interagire con loro.
Svolgono tutto al loro interno.

Il componente genitore,
per poter accedere ai valori di input dell'uncontrolled form,
deve poter accedere direttamente agli elementi del DOM
che compongono l'uncontrolled form e leggerne i valori.
*/

/*
- Non abbiamo bisogno di variabili di stato,
  per memorizzare i dati del modulo.

- Non abbiamo bisogno di gestori di eventi,
  per compiere azioni ogni volta che l'utente 
  digita qualcosa all'interno degli input del form, 
  e quindi gestirne le modifiche.

(Compromesso: Non abbiamo alcun controllo sugli input del form!)

* Cosa facciamo allora? *
Associamo un 'handling event' al tag <form>,
per sapere ogni volta che il modulo verrà inviato dall'utente,
cliccando sul 'login button' o cliccando 'invio' sulla tastiera.
*/

export function MyUncontrolledForm() {
  function handleFormSubmit(event) {
    event.preventDefault();

    /* Stampare il contenuto del modulo, come fare?
    Dobbiamo accedere agli elementi HTML all'interno della pagina 
    ed estrarre il valore che è contenuto al loro interno.
    Due modalità:
    */

    // #1
    // Usare 'event.target', che è un riferimento al form stesso + 'elements.namedItem()', utilizzando l'API DOM,
    // per accedere all'elemento del DOM di cui si desidera accedere al valore,
    // passato tra le () del metodo '.namedItem()'

    // Salvo questo valore all'interno di una variabile:
    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    // Per la 'checkbox' vogliamo sapere se la casella di controllo è stata selezionata o meno dall'utente (no 'value', sì 'checked')
    const checked = event.target.elements.namedItem("session").checked;

    /*
    Alternative con sintassi più snelle e ugualmente leggibili dai browser,
    ma non sono sintassi standard, non è detto che siano supportate da tutti i browser.
    (Per cui la forma più sicura per accedere ai valori degli elementi del modulo, 
    quando si utilizzano 'uncontrolled forms', rimane in metodo '.namedItem()')

    - event.target + 'elements' + nome dell'input di cui si desidera accedere al valore + value/checked

    const username = event.target.elements.username.value
    const password = event.target.elements.password.value
    const session = event.target.elements.session.checked

    - event.target + nome dell'input di cui si desidera accedere al valore + value/checked

    const username = event.target.username.value
    const password = event.target.password.value
    const session = event.target.session.checked

    */

    // Possiamo creare un oggetto 'data', all'interno del quale inserire i valori soprastanti e stamparne i valori in console:
    const data = {
      username,
      password,
      checked,
    };

    console.log(data);

    // #2
    // Usare l'oggetto 'data' del form, da creare con il metodo costruttore,
    // che riceverà 'event.target' come parametro.

    // Da questo oggetto, estrarremo i valori del form in modo diretto con il metodo '.get()'
    // inserendo tra le () una stringa, corrispondente al nome dell'input di interesse

    const formData = new FormData(event.target);

    const dataForm = {
      username: formData.get('username'),
      password: formData.get('password'),

      // Per le checkbox, il comportamento è un po' diverso:
      // - si otterrà il valore 'on', quando la checkbox è selezionata;
      // - si otterrà 'null', quando la checkbox non è selezionata;
      
      // Si può utilizzare un operatore ternario per ottenere i valori 'true' o 'false' in base alla presenza del flag o meno
      checked: formData.get('session') === 'on' ? true : false
    };

    console.log(dataForm);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>My Uncontrolled Form</h1>
      <input name="username" />
      <input name="password" type="password" />
      <input name="session" type="checkbox" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
