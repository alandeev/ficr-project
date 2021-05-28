const [ form ] = document.getElementsByTagName('form')

const nameElement = document.getElementById('name')
const cnpjElement = document.getElementById('cnpj')
const emailElement = document.getElementById('email')
const passwordElement = document.getElementById('password')

const getUsers = () => {
  const users = localStorage.getItem('users')
  if(users) {
    return JSON.parse(users)
  }

  return []
}

const setUsers = (users) => {
  const convertToString = JSON.stringify(users);

  return localStorage.setItem('users', convertToString)
}

const register = (event) => {
  event.preventDefault();

  const name = nameElement.value;
  const cnpj = cnpjElement.value;
  const email = emailElement.value;
  const password = passwordElement.value;

  if(!name || !cnpj || !email || !password) {
    return alert('Faltam enviar dados para concluir o cadastro')
  }

  const users = getUsers();

  const emailOrCnpjAlreadyExist = users.find((user) => user.cnpj === cnpj || user.email === email)
  if(emailOrCnpjAlreadyExist) {
    return alert('Email ou Cnpj já foi cadastro');
  }

  users.push({
    name,
    cnpj,
    email,
    password
  })

  setUsers(users);
  window.location.replace('login.html')
}

form.addEventListener('submit', register)
