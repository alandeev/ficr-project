const username = document.getElementById('profile-name')

const getProfile = () => JSON.parse(localStorage.getItem('profile') ?? '{}')

const setProfile = () => {
  const profile = getProfile()
  if(!profile) {
    return window.location.replace('login.html')
  }

  const {
    name,
    cnpj,
    email,
  } = profile

  username.textContent = name;
}


setProfile()
