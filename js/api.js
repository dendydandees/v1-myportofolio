import template from './template.js';

const BASE_API = 'https://api.github.com/users/dendydandees';

const getGithubProfile = async () => {
  try {
    let response = await fetch(BASE_API);
    let data = await response.json();

    return template.profileTemplate(data);
  } catch (err) {
    console.log(err);
  }
};

const getGithubRepos = async (page, per_page) => {
  try {
    let response = await fetch(
      `${BASE_API}/repos?page=${page}&per_page=${per_page}`,
    );
    let data = await response.json();

    return template.reposTemplate(data);
  } catch (err) {
    console.log(err);
  }
};

export default {
  getGithubProfile,
  getGithubRepos,
};
