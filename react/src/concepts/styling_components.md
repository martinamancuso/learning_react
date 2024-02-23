Componenti React resi come elementi HTML -> sintassi usata in React simile a quella HTML per lo stile
- 'class' attribute -> 'className' prop
- Valore dell'attributo passato come stringa, contenente tutte le classi da applicare ad un elemento, separate da uno spazio

//

- Creare file CSS 'index.css' (es. nella cartella 'src')
- Importare il file CSS (import './index.css')
  - in uno dei file JSX 
  - nel file 'index.jsx' (primo file che viene caricato all'avvio dell'applicazione) -> i file CSS sono globali per definizione

//

SASS -> altro pacchetto/libreria da installare, usando NPM
- npm install sass
- npm i sass

- Una volta installato, si potranno usare i file SCSS, al posto di file CSS
  - Creare file SCSS 'index.scss' (es. nella cartella 'src')
  - Importare il file SCSS (import './index.scss')

- Il pacchetto SAS installato traduce l'SCSS in CSS valido

//

- File CSS/SCSS di piccole dimensioni
Vite aggiungerà le regole CSS in un tag 'style', nel tag 'head', nel file 'index.html'

- File CSS/SCSS di grandi dimensioni
Vite creerà un file CSS separato, lo collegherà tramite un tag 'link', con attributo 'href', nel tag 'head', nel file 'index.html'

//

Tecnologia dei Moduli CSS
- Creare CSS che abbia come ambito un modulo specifico
- Il Modulo CSS/SCSS sarà valido per il file in cui viene importato 
- Sarà possibile usare 'className' uguali in componenti diversi, senza creare interferenze tra loro

1. Creare un Modulo CSS
  - Creare file 
  - 'NomeComponente.module.css/scss'

2. Importare il modulo nel file JSX di interesse
  - 'import "./Counter.module.scss" 
  - importare anche qualcosa di specifico dal Modulo, ad esempio le classi -> 'import classes from "./Counter.module.scss"'

//

Classi = oggetto, all'interno del quale ogni proprietà sarà una delle classi definite all'interno del modulo CSS/SCSS
  - sì interpolazione, no valore come stringa 
  - questo perché verrà passato come valore una proprietà dell'oggetto 'classi' e non un valore come stringa
  - es. <'button className = {classes.button} onClick={handleCounterIncrement}'> <'/button'>

Ricorda
Ogni classe ottiene un nuovo nome, quando viene effettivamente utilizzata all'interno dell'applicazione stessa.
Questo permette di avere più moduli con classi con lo stesso nome.

//

'Inline style' in React, come in HTML 

