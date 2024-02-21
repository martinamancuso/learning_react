Differenze tra i tag 'div' e 'form' per realizzare un 'form'


// 'div'

Post inserimento dati nel modulo, premendo 'invio',
l'utente si aspetterebbe l'invio del modulo
(cosa che di solito accade, soprattutto con i moduli di accesso.)

In questo caso, non accadrebbe tutto ciò,
in quanto non staremmo usando il tag 'form',
quindi dovremmo implementare da soli questa funzionalità, 
seguendo questi step:
- creare un gestore di eventi ('onClick' del bottone di login 
  a cui associare il riferimento di una funzione, ad esempio 'handleLoginFormSubmit')
  che ascolti i pulsanti premuti all'interno di ciascuno dei campi 'input'
- verificare se il pulsante premuto è il tasto di invio 
  (precisamente due tasti di invio, tastierino e tastiera)
- reagire di conseguenza, inviando i dati


// 'form'

- 'button type="submit"'
  Post inserimento dati nel modulo, premento il bottone,
  l'evento di invio viene attivato da qualsiasi 'button type="submit"'.

- 'button type="button"'
  Post inserimento dati nel modulo, premendo il bottone,
  non accadrà nulla, A MENO CHE 
  non ci sia un handling event, inserito da noi,
  nella prop 'onClcik' del 'button': verrà eseguita l'azione da noi specificata lì.

- 'button type="reset"'
  Post inserimento dati nel modulo, premendo il bottone,
  cancellerà di default tutti i dati inseriti nei campi 'input' all'interno del form.

Attenzione:
Tutti i bottoni, di default, sono dei 'submit button', 
ragion per cui possiamo anche non specificare il 'type="submit"': 
l'invio dei valori degli input del modulo avverrà lo stesso.
Per cui non abbiamo più bisogno dell'evento onClick sul bottone,
MA possiamo inserire l'evento 'onClick' al tag 'form'.


* 'form' - Comportamento predefinito

'action' e 'method' definiscono il comportamento del 'form'.

Il form tenta di chiamare l'indirizzo web
specificato come valore della proprietà 'action',
utilizzando il metodo specificato dal valore della proprietà 'method'. 

Dal momento che non vogliamo che questo comportamento accada di default 
(che la pagina si ricarichi e inserisca i nostri input all'interno della stringa di query)
possiamo utilizzare il metodo '.preventDefault()'
sull'oggetto che l'handling event porta con sé:

function handleLoginSubmitButton(event) {
  event.preventDefault()
}


* 'form' - Cliccare il bottone di invio = cliccare 'invio' sulla tastiera

Funzionalità molto utile, soprattutto in termini di accessibilità.
Consente di utilizzare direttamente il tasto 'invio'/'enter', 
piuttosto che essere 'obbligati' a cercare il bottone di riferimento 
e cliccarlo, per poter inviare i dati del form.