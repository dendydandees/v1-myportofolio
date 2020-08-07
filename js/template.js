const profileTemplate = (data) => {
  let profile = ''

  profile += `
    <div class="card purple hoverable">
      <div class="card-image">
        <img src="${data.avatar_url}" alt="${data.name}" class="responsive-img">
      </div>
      <div class="card-content white-text">
        <p class="card-title">${data.name}</p>
        <p>${data.location}</p>
        <p>${data.bio}</p>
      </div>
    </div>
    `

  document.querySelector('.git-profile').innerHTML = profile
}

const reposTemplate = (data) => {
  let repos = ''
  data.map(repo => {
    repos += `<div class="col s12 m6 l4">
    <div class="section">
      <div class="card purple small">
        <div class="card-content white-text">
          <p class="card-title">${repo.name}</p>
          <p>
            ${repo.description !== null ? repo.description : ''}
          </p>
        </div>
        <div class="card-action">
          <div>
          <a href="${
            repo.html_url
          }" target="blank"><img src="./images/github.svg" alt="repo link"></a>
          ${repo.homepage === '' ? '' : repo.homepage === null ? '' : `<a href="${
            repo.homepage
          }" target="blank"><i class="material-icons white-text">launch</i></a>`}

          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  })

  document.querySelector('.git-repos').innerHTML = repos
}

export default {
  profileTemplate,
  reposTemplate
}
