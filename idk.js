document.addEventListener('DOMContentLoaded', () => {
  const $body = document.body;
  const loadHandler = () => setTimeout(() => {
    $body.classList.remove('is-loading', 'is-playing');
    $body.classList.add('is-playing', 'is-ready');
  }, 100);

  window.addEventListener('load', loadHandler);
});