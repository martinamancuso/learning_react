import { useMemo } from "react";

/* la prop 'people' non la esplicito direttamente all'interno 
delle tonde del function component so solo io al momento che 
conterrà un array di oggetti, le cui proprietà sono 
'name', 'id', 'age' (in base alla consegna dell'esercizio) */
export function FilteredList({ people }) {
  const filteredPeople = useMemo(() => {
    return people.filter((person) => person.age > 18);
  }, [people]);

  return (
    <ul>
      {/* scelgo 'person.id' come valore della prop 'key' 
      in quanto il valore della chiave deve essere UNICO e STABILE */}
      {filteredPeople.map((person) => (
        <li key={person.id}>
          {person.id}, {person.name}, {person.age}
        </li>
      ))}

      {/* {people.map((person) => {
        if (person.age > 18) {
          return (
            <li key={person.id}>
              {person.id}, {person.name}, {person.age}
            </li>
          );
        } else {
          return null;
        }
      })} */}

      {/* {people.map((person) => 
        person.age > 18 ? (
          <li key={person.id}>
            {person.id}, {person.name}, {person.age}
          </li>
        ) : null
      )} */}
    </ul>
  );
}
