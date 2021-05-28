(() => {
  const profile = localStorage.getItem('profile')
  if(!profile) {
    window.location.replace('/login.html')
  }
})()
