const btn = document.querySelector('#button');
const input = document.querySelector('#input');
const ui = new UI();

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
          // Show profile
          input.value = '';
          console.log(data);
          ui.showProfile(data);
        }
      });
  } else {
    // Clear input
    alert('Please enter a username');
    ui.clearProfile();
  }
});
