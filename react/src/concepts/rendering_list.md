Create a component called 'Color' that receives an object called 'color' as a prop,
which will have 2 properties, 'id' and 'name,'
and returns an 'li' tag that displays the 'name' property.

Create a second component called 'Colors',
which takes an array of objects as a prop,
where the properties are always 'name' and 'id,' and displays an unordered list of Color components.

```jsx
// Color.jsx

export function Color({ color }) {
  return (
    <div>
      <li>{color.name}</li>
    </div>
  );
}

// Colors.jsx

import { Color } from "./Color";

export function Colors({ colors }) {
  return (
    <div>
      // Usare il metodo 'map', per prendere un array di oggetti, trasfromarlo e renderizzarlo in pagina

      // All'interno delle istruzioni del 'map', al componente assegnerò una prop 'key',
      una chiave univoca e stabile, per ogni elemento dell’array da un rendering all’altro 'key={color.id}'
      <ul>
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    </div>
  );
}

// App.jsx

import { Colors } from "./Colors";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <Colors
        colors={[
          {
            id: 1,
            name: "pink",
          },
          {
            id: 2,
            name: "green",
          },
          {
            id: 3,
            name: "violet",
          },
        ]}
      />
    </div>
  );
}
```