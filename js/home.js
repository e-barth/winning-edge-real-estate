function addHomeStylesheet() {
  const href = "https://cdn.jsdelivr.net/gh/e-barth/winning-edge-real-estate/css/home.min.css";
  function inject() {
    if (!document.head) {
      return setTimeout(inject, 100);
    }   
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }
  inject();
}
addHomeStylesheet();

function moveContent1() {
  const target = document.querySelector('.banner-button-v2');
  const content = document.querySelector('.md-search-more-center');
  
  if (target && content) {
    target.insertAdjacentElement('afterend', content);
  }
}

function moveContent2() {
  const content = document.querySelector('#reach-out');
  const target = document.querySelector('.md-video.layout1 .title-wrap .site-p');
  
  if (target && content) {
    target.insertAdjacentElement('afterend', content);
  }
}

window.addEventListener('load', () => {
  moveContent1();
  moveContent2();
});
