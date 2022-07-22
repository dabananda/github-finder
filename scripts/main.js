const btn = document.querySelector('#button');
const input = document.querySelector('#input');
const ui = new UI();
const publicRepos = new UI();

btn.addEventListener('click', e => {
  e.preventDefault();
  const userName = input.value;
  if (userName != '') {
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Not Found') {
          // Not found alert
          input.value = '';
          ui.showAlert('User not found!', 'alert alert-danger');
        } else {
          // Clearing previous data
          ui.clearField();
          input.value = '';
          // Show profile
          ui.showProfile(data);
          ui.publicRepos(data.repos_url);
        }
      });
  } else {
    alert('Please enter a username');
  }
});
