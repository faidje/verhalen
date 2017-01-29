var menu = document.querySelector('#menu');

var activate = (e) => {
  document.body.classList.toggle('active');
}

menu.addEventListener('click', activate);

