// Register Service Worker for PWA
const RegisterServiceWorker = () => {
  // Check if service worker supported
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => console.log('Service Worker Registered'))
        .catch(() => console.log('Not Registered'));
    });
  } else {
    console.log('Service Worker Not Supported');
  }
};

export default {
  RegisterServiceWorker,
};
