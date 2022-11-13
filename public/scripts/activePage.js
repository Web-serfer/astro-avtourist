const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.menu--container a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active')
  }
})