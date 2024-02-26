'Children' prop:
Prop speciale, di cui React imposta il valore atomaticamente,
con qualsiasi cosa venga passata tra il tag di apertura e il tag di chiusura del componente stesso
(Unica differenza rispetto ad una 'classica' prop)

Ricorda:
Ogni volta che si distrugge un componente, si distrugge anche il suo stato interno.

Alternativa:
Nascondere il contenuto tramite CSS: in questo modo non si distrugge il componente all'interno del contenitore né si distrugge il loro stato interno.
^
Metodo più sicuro ma meno efficiente per nascondere i componenti.
- più sicuro, perché non si distrugge lo stato interno del componente; 
- meno efficiente, perché i componenti verranno mantenuti, anche se non verranno mostrati all'interno dell'applicazione.
^
Attenzione sempre al 'montare' e 'smontare' i componenti, in modo che il componente non causi effetti collaterali, nel momomento in cui verrà smontato.