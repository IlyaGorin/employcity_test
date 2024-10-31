export default function navigation() {
  const burgerButton = document.querySelector('.navigation__burger-button');
  const navigation = document.querySelector('.navigation__list');

  burgerButton.addEventListener('click', (evt) => {
    burgerButton.classList.toggle('open');
    navigation.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });
}
