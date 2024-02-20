// Implement an 'UncontrolledLogin' component that implements all the operations of the 'Login' component, but does so using uncontrolled components.
// Attempt to access the values of the form using the DOM API by reading the 'event.target' of the 'onSubmit' event handler.

export function UncontrolledLogin() {
  
  function handleFormSubmit(event) {
    event.preventDefault()

    const username = event.target.elements.namedItem('username').value
    const password = event.target.elements.namedItem('password').value
    const remember = event.target.elements.namedItem('remember').checked

    // Due alternative per estrarre i valori dell'oggetto 'event':

    // #1

    const data1 = {
      username,
      password,
      remember
    }

    console.log(data1);


  // #2

  const formData = new FormData(event.target)

  const data2 = {
    username: formData.get('username'),
    password: formData.get('password'),
    remember: formData.get('remember') === "yes" ? true : false
  }

  console.log(data2)

  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="username"/>
      <input type="password" name="password"/>
      <input type="checkbox" name="remember" value="yes"/>

      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}