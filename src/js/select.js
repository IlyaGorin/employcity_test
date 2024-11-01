export default function initSelect() {
  const select = document.querySelector('.custom-select');
  const selectedItem = document.querySelector('.custom-select__selected');
  const selectedText = document.querySelector('.custom-select__text');
  const hiddenInput = document.getElementById('select-value');
  const options = document.querySelectorAll('.custom-select__option');

  selectedItem.addEventListener('click', function () {
    select.classList.add('custom-select--open');
  });

  options.forEach((option) => {
    option.addEventListener('click', function () {
      const value = option.getAttribute('data-option-value');
      const text = option.textContent;

      hiddenInput.value = value;
      selectedText.textContent = text;
      select.classList.remove('custom-select--open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.custom-select')) {
      select.classList.remove('custom-select--open');
    }
  });
}
