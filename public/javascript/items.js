function signupFormHandler(event) {
    event.preventDefault();
  
    const itemType = document.querySelector('#item-type').value.trim();
    const itemA = document.querySelector('#item-attack').value.trim();
    const itemD = document.querySelector('#item-deffense').value.trim();
  
    if (itemType && itemA && itemD) {
      fetch('/api/items', {
        method: 'post',
        body: JSON.stringify({
          itemType,
          itemA,
          itemD
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => { console.log(response) })
    }
  
  }
  
  document.querySelector('.login-form').addEventListener('submit', signupFormHandler);