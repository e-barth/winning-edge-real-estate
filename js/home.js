function replaceBannerBtnLinks() {
  const list = document.querySelector('.tab-header');
  if (!list) {
    return;
  }

  const htmlString = `
    <ul>
      <li>
        <a class="btn" href="/sellers">Sell Your Home</a>
      </li>
      <li>
        <a class="btn" href="/listing">Map Search</a>
      </li>
      <li>
        <a class="btn" href="/instant-cash-offer">Instant Cash Offer</a>
      </li>
    </ul>
  `;
  list.insertAdjacentHTML('beforeend', htmlString);
}

function replaceListingLink() {
  const link = document.querySelector('a[href$="/listing?searchId=xQKAH_2eObMq"]');
  
  if (link) {
    link.href = '/featured';
  }
}

window.addEventListener('load', () => {  
  replaceBannerBtnLinks();
  replaceListingLink();  
});