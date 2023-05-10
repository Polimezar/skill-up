const initShowHeader = () => {
  const header = document.querySelector('.header');

  if (!header) {
    return;
  }

  const btnHeader = document.querySelector('.header__toggle');
  const nav = document.querySelector('.main-nav');

  btnHeader.addEventListener('click', function () {
    if (header.classList.contains('is-active')) {
      nav.classList.remove('is-active');
      header.classList.remove('is-active');
    } else {
      header.classList.add('is-active');
      nav.classList.add('is-active');
    }
  });
};

export {initShowHeader};
