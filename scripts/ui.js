class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
    this.repositories = document.querySelector('.repositories');
  }

  showProfile(data) {
    this.profile.innerHTML = `
    <div class="card mb-3 mx-auto" style="max-width: 540px">
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
        <div class="items">
          <p class="item">
            Followers
            <span class="badge bg-primary">${data.followers}</span>
          </p>
          <p class="item">
            Following
            <span class="badge bg-primary">${data.following}</span>
          </p>
          <p class="item">
            Public gists
            <span class="badge bg-primary">${data.public_gists}</span>
          </p>
          <p class="item">
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
    <h2 class="text-center mt-5">Public Repositories</h2>
    <hr>
    `;
  }

  publicRepos(allRepos) {
    let repos;
    fetch(allRepos)
      .then(response => response.json())
      .then(data => (repos = data))
      .then(() => {
        repos.map(repo => {
          const createdDate = new Date(repo.created_at).toLocaleString();
          const pushedDate = new Date(repo.pushed_at).toLocaleString();
          const updatedDate = new Date(repo.updated_at).toLocaleString();
          const {
            ssh_url,
            description,
            name,
            full_name,
            html_url,
            clone_url,
            language,
            license,
          } = repo;
          this.repositories.innerHTML += `
           <div class="col-md-6 col-lg-4 mt-4 mb-5">
            <div class="card mx-auto h-100">
              <div class="card-header">
                ${full_name}
              </div>
              <div class="card-body">
                <h5 class="card-title">Repository name: ${name}</h5>
                <p class="card-text">Description: ${description}</p>
                <a href="${html_url}" class="btn btn-primary">View ${name} on GitHub</a>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Created at: ${createdDate}</li>
                <li class="list-group-item">Pushed at: ${pushedDate}</li>
                <li class="list-group-item">Updated at: ${updatedDate}</li>
                <li class="list-group-item">SSH URl: ${ssh_url}</li>
                <li class="list-group-item">Clone URl: ${clone_url}</li>
                <li class="list-group-item">Language: ${language}</li>
                <li class="list-group-item">License: ${license}</li>
              </ul>
            </div>
          </div>
          `;
        });
      });
  }

  clearField() {
    this.profile.innerHTML = '';
    this.repositories.innerHTML = '';
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
    this.repositories.innerHTML = '';
  }
}
