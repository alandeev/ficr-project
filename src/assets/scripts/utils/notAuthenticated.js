(() => {
  const profile = localStorage.getItem('profile')
  if(profile) {
    localStorage.removeItem('profile')
  }
})()
