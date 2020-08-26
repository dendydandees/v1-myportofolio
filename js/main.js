import api from './api.js';
import pwa from './pwa.js';

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    easing: 'ease-in',
    duration: 700,
  });
  // Side Nav
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav, { edge: 'right' });
  // End Side Nav

  // Floating Button
  var elems = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(elems, { direction: top, hoverEnabled: false });
  // End Floating Button

  // Tooltip
  var elems = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(elems);
  // End Tooltip

  // Hide Navbar on scroll
  let prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector('nav').style.transform = 'translateY(0)';
    } else {
      document.querySelector('nav').style.transform = 'translateY(-100%)';
    }
    prevScrollpos = currentScrollPos;
  });
  // End Hide Navbar on scroll

  // Load more other project
  const load_more = document.querySelector('.load-more');

  let page = 1;
  let per_page = 6;
  load_more.addEventListener('click', () => {
    per_page += 6;

    api.getGithubRepos(page, per_page);
  });
  // End load more other project

  // API FETCH
  api.getGithubProfile();
  api.getGithubRepos(page, per_page);
  // End API FETCH

  // Darkmode on night
  const date = new Date();
  const hours = date.getHours();
  const night = hours > 18 || hours < 6;
  const body = document.querySelector('body');

  if (night) {
    const classRemove = ['white', 'black-text'];
    const classAdd = ['grey', 'darken-4', 'white-text'];

    body.classList.remove(...classRemove);
    body.classList.add(...classAdd);
  }
  // End Darkmode on night

  // PWA
  pwa.RegisterServiceWorker();
  // End PWA
});
