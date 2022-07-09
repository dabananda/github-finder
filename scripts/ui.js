class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  showProfile(data) {
    this.profile.innerHTML = `
    <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${data.avatar_url}"
                class="img-fluid rounded-start"
                alt="user-image"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <small class="text-muted">${data.login}</small>
                <p class="card-text">${data.bio}</p>
                <a class="btn btn-primary btn-small" href="${data.html_url}" target="_blank">View Profile</a>
              </div>
            </div>
            <div class="d-flex justify-content-between my-3 px-2">
              <p>
                Followers
                <span class="badge bg-primary">${data.followers}</span>
              </p>
              <p>
                Following
                <span class="badge bg-primary">${data.following}</span>
              </p>
              <p>
                Public gists
                <span class="badge bg-primary">${data.public_gists}</span>
              </p>
              <p>
                Public repos
                <span class="badge bg-primary">${data.public_repos}</span>
              </p>
            </div>
            <div class="card mx-auto">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Company: ${data.company}</li>
                <li class="list-group-item">Website/Blog: ${data.blog}</li>
                <li class="list-group-item">Twitter: ${data.twitter_username}</li>
                <li class="list-group-item">Location: ${data.location}</li>
              </ul>
            </div>
          </div>
        </div>
    `;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const profile = document.querySelector('#profile');
    profile.innerHTML = `
      <div class="${className}">
        <h3>Ops... ${message}</h3>
      </div>
    `;
  }
}
