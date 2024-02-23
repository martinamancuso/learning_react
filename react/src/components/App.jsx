import { Welcome } from "./Welcome";
import { TodoList } from "./TodoList";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <Welcome name="Martina" />
      <TodoList />
    </div>
  );
}

{
  /* <Colors
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
    </div> */
}
