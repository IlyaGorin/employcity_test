export default function navigation() {
  const burgerButton = document.querySelector('.navigation__burger-button');
  const navigation = document.querySelector('.navigation__list');
  const navigationLinks = document.querySelectorAll('.navigation__link');

  function changeDropdownMenuState() {
    burgerButton.classList.toggle('open');
    navigation.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  }

  burgerButton.addEventListener('click', changeDropdownMenuState);

  navigationLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navigation.classList.contains('open')) {
        changeDropdownMenuState();
      }
    });
  });
}
