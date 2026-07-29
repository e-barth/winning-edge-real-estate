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
    link.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace('+1', '');
      }
    });
  });
}
// add neighborhood link
function replaceCommunityLink() {
  const link = document.querySelector('header .head-menu .menu-item > .has-child-a[href="/communities/anne-arundel-county"]'); 
  if (link) {
    link.href = '/neighborhoods';
  }
}
// add social media links to footer
function addShareLinks() {
  const shareLinksAll = document.querySelectorAll('.share-links');
  if (!shareLinksAll.length) return;

  const links = [
    {
      href: 'https://nextdoor.com/pages/jim-bim-of-winning-edge-real-estate-ellicott-city-md/',
      label: 'NextDoor',
      icon: 'icon-nextdoor custom-icon'
    },
    {
      href: 'https://maps.apple.com/place?place-id=I7145E2AD78681AA5',
      label: 'Apple Maps',
      icon: 'icon-applemaps custom-icon'
    },
    {
      href: 'https://www.realtor.com/realestateagents/5c33eaa3dc95e7001b382497 ',
      label: 'Realtor.com',
      icon: 'icon-realtor custom-icon'
    },
    {
      href: 'https://www.bing.com/maps/search?mkt=en-US&ss=id.ypid%3AYN4E2B398D2B076485&cp=39.221966%7E-76.845383&lvl=16&style=r  ',
      label: 'Bing Maps',
      icon: 'icon-bingmaps custom-icon'
    }
  ];

  shareLinksAll.forEach(shareLinks => {
    links.forEach(({ href, label, icon }) => {
      const a = document.createElement('a');
      a.className = 'share-item iconfont';
      a.href = href;
      a.setAttribute('aria-label', label);
      a.target = '_blank';
      a.rel = 'noopener noreferrer';

      const i = document.createElement('i');
      i.className = icon;

      a.appendChild(i);
      shareLinks.appendChild(a);
    });
  });
}

window.addEventListener('load', () => {
  handleHeaderScroll();
  fixPhoneLink();
  removeCountryCode();
  replaceCommunityLink();
  addShareLinks();
});

