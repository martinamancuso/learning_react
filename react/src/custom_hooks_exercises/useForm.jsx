export function useForm() {

const [ username, setUsername ] = useState('');
const [ password, setPassword ] = useState('');

function handleUsernameInput(event) {
  setUsername(event.target.value)
}

function handlePasswordInput(event) {
  setPassword(event.target.value)
}

// Ricorda: gli hook personalizzati ritornano sempre un oggetto
  return {
    username,
    password,
    handleUsernameInput,
    handlePasswordInput
  }
}