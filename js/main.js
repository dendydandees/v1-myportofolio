import api from './api.js'

document.addEventListener('DOMContentLoaded', function () {
  let sidenav = document.querySelectorAll('.sidenav')
  M.Sidenav.init(sidenav, { edge: 'right' })

  var elems = document.querySelectorAll('.fixed-action-btn')
  M.FloatingActionButton.init(elems, { direction: top, hoverEnabled: false })

  var elems = document.querySelectorAll('.tooltipped')
  M.Tooltip.init(elems)

  api.getGithubProfile()
  api.getGithubRepos()
})
