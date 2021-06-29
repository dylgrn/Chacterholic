
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      const data = await response.json();

    if (response.ok) {
      console.log(data)
      localStorage.setItem("username", data.username);
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }
}

  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);