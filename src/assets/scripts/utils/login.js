const [ form ] = document.getElementsByTagName('form')

const emailElement = document.getElementById('email')
const passwordElement = document.getElementById('password')

const getUsers = () => {
  const users = localStorage.getItem('users')
  if(users) {
    return JSON.parse(users)
  }

  return []
}

const setProfile = (user) => localStorage.setItem('profile', JSON.stringify(user))

const authenticate = (event) => {
  event.preventDefault();

  const email = emailElement.value;
  const password = passwordElement.value;

  if(!email || !password) {
    return alert('Email ou senha não enviado')
  }

  const users = getUsers();

  const user = users.find(user => user.email === email);
  if(!user) {
    return alert('Email não encontrado')
  }

  if(user.password !== password) {
    return alert("Senha invalida")
  }

  setProfile(user)
  window.location.replace('index.html')
}

form.addEventListener('submit', authenticate)
