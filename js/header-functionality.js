// Header functionality
function handleHeaderScroll() {
  const header = document.querySelector('.md-header.layout2');
  if (!header) return;

  header.classList.add('transparent');

  let lastScrollY = 0;
  let scrollUpAccum = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY === 0) {
      header.classList.remove('hide');
      header.classList.remove('show');
      header.classList.add('transparent');
      scrollUpAccum = 0;
    } else if (scrollY >= 120 && scrollY > lastScrollY) {
      header.classList.remove('transparent');
      header.classList.add('hide');
      scrollUpAccum = 0;
    } else if (scrollY < lastScrollY) {
      scrollUpAccum += lastScrollY - scrollY;
      if (scrollUpAccum >= 40) {
        header.classList.remove('hide');
        header.classList.add('show');
        scrollUpAccum = 0;
      }
    }

    lastScrollY = scrollY;
  });
}

window.addEventListener('load', () => {
  handleHeaderScroll();
});