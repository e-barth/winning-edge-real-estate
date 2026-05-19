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