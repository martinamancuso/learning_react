**React Router**
Definire percorsi e rendere componenti diversi, 
in base ai percorsi esplicitati
(e quindi ogni volta che cambia la posizione nella barra degli indirizzi).

//

**Definizione**

Libreria di terze parti che gestisce il routing (protocollo di rete) all'interno della nostra applicazione.

Esistono diversi pacchetti per React Router da utilizzare in diversi contesti.
Installeremo il pacchetto React Router DOM perché lavoreremo all'interno del browser.

//

**1**
Installare il pacchetto React Router DOM
'npm install --save react-router-dom'

**2**
Per utilizzare la libreria appena installata, 
dobbiamo includere il 'root component' 
all'interno del componente 'BrowserRouter'.

**2.1**
Creiamo un nuovo componente chiamato 'Root',
che avvolgerà il componente 'App'
all'interno del componente 'BrowserRouter'.
(Vedi Root.jsx)

*Suggerimento*
Creare due componenti distinti, 'Root' e 'App':
- 'Root' per inserire contesti, fornitori e componenti per avvolgere il componente 'App'
- 'App' in cui scrivere la logica dell'applicazione

**3**
Importiamo e renderizziamo il componente 'Root', al posto del componente 'App', all'interno del file 'index.jsx'.

**4**
- Definiamo le 'radici'
Radice = componente che viene renderizzato 
ogni volta che il pecorso, all'interno della barra degli indirizzi nel nostro browser, 
corrisponde ad una sorta di 'schema'.

- Definiamo i 'percorsi'
Percorso = qualcosa che viene mostrato all'interno della pagina del browser,
ogni volta che la posizione corrisponde ad uno schema.

//

**Passaggi Operativi**
- Componente 'App' > Creiamo e renderizziamo il componente 'Routes'
- All'interno del componente 'Routes', 
creiamo il percorso specifico, con:
  - componente 'Route'
  - attributo 'path', con percorso specifico della barra degli indirizzi
  - attributo 'element', per specificare quale elemento renderizzare, in corrispondenza del path esplicitato.

//

**Come navigare da un percorso all'altro?**
**Come cambiare posizione all'interno della barra degli indirizzi?**

In prima battuta, si potrebbe pensare al tag 'a', tuttavia questo tag ricarica la pagina ogni volta che viene cambiato il percorso.

Dal momento che si lavora ad un'applicazione a pagina unica in React, serve un'alternativa che non preveda questo effetto.

Il componente 'Link' risolve questo problema: cambia il percorso, renderizza il componente inserito all'interno di quel percorso, senza ricaricare la pagina.
('Vedi Welcome.jsx')

- Scriviamo il componente 'Link' + la proprietà 'to' > valore dell'attributo 'to' > il percorso verso il quale si desidera andare.

- Viene gestita correttamente anche la cronologia del browser > i pulsanti 'indietro' e 'avanti' del browser fanno spostare correttamente verso le pagine effettivamente precedenti e successive della cronologia.

//

**Navigare imperativamente da un percorso all'altro**

Usando l'hook *useNavigate*, esportato dalla libreria React Router.

Esempio:
Cambiare il collegamento, inserito all'interno di un componente, con un pulsante.
(Vedi 'Welcome.jsx')

'useNavigate' restituisce una funzione di navigazione.
Tale funzione verrà esplicitata all'interno dell'event handler.
Alla funzione di navigazione passeremo come argomento il percorso verso il quale spostarsi, all'accadere dell'evento di riferimento.
