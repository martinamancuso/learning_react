import { Welcome } from "./Welcome";
import { TodoList } from "./TodoList";
import { Container } from "./Container";

export function App() {
  return (
    <Container title={<h1>My Awesome Application</h1>}>
      <h1>My Awesome Application</h1>
      <hr />
      <Welcome name="Martina" />
      <TodoList />
    </Container>
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
