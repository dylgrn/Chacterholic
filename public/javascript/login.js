
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const user_password = document.querySelector('#password-login').value.trim();

  if (email && user_password) {
      const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
              email,
              user_password
          }),
          headers: { 'Content-Type': 'application/json' }
      });
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

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

