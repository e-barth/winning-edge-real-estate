// Header functionality
function handleHeaderScroll() {
  const header = document.querySelector('.site.blank .md-header.layout2');
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
// fix phone button link
function fixPhoneLink() {
  const link = document.querySelector('a[href="/tel:+1410-461-2800"]');  
  if (link) {
    link.href = 'tel:+1410-461-2800';
  }
}
// remove country code
function removeCountryCode() {
  document.querySelectorAll('a[href^="tel:+1"]').forEach(link => {
    link.textContent = link.textContent.replace('+1', '');
  });
}
// add neighborhoods link
function replaceCommunityLink() {
  const link = document.querySelector('header .head-menu .menu-item > .has-child-a[href="/communities/anne-arundel-county"]'); 
  if (link) {
    link.href = '/neighborhoods';
  }
}
window.addEventListener('load', () => {
  handleHeaderScroll();
  fixPhoneLink();
  removeCountryCode();
  replaceCommunityLink();
});