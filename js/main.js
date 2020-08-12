import api from './api.js'

document.addEventListener('DOMContentLoaded', function () {
  let sidenav = document.querySelectorAll('.sidenav')
  M.Sidenav.init(sidenav, { edge: 'right' })

  var elems = document.querySelectorAll('.fixed-action-btn')
  M.FloatingActionButton.init(elems, { direction: top, hoverEnabled: false })

  var elems = document.querySelectorAll('.tooltipped')
  M.Tooltip.init(elems)

  const date = new Date()
  const hours = date.getHours()
  const night = hours > 18 || hours < 6
  const body = document.querySelector('body')

  if (night) {
    const classRemove = ['white', 'black-text']
    const classAdd = ['grey', 'darken-4', 'white-text'];

    body.classList.remove(...classRemove)
    body.classList.add(...classAdd)
  }

  const load_more = document.querySelector('.load-more');

  let page = 1;
  let per_page = 6;
  load_more.addEventListener('click', () => {
    per_page += 6;

    api.getGithubRepos(page, per_page);
  });

  api.getGithubProfile()
  api.getGithubRepos(page, per_page)
})
