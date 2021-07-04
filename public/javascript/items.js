const { response } = require('express');
const db = require('../../db/connection');
const router = require('express').Router();

function signupFormHandler(event) {
    event.preventDefault();
  
    const itemType = document.querySelector('#item-type').value.trim();
    const itemA = document.querySelector('#item-attack').value.trim();
    const itemD = document.querySelector('#item-deffense').value.trim();
  
    if (itemType && itemA && itemD) {
      fetch('/api/items', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          itemType,
          itemA,
          itemD
        })
      }).then((results) => {
        return results.json
       }).then((response) => {
         console.log('got results', response)
       })
    }
  
  }
  
  document.querySelector('.login-form').addEventListener('submit', signupFormHandler);

  module.exports = router;