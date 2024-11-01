export default function updateRangeValue() {
  const rangeInput = document.querySelector('.range');
  const rangeValue = document.querySelector('.range-input__value');
  rangeValue.textContent = `${rangeInput.value} %`;
  rangeInput.addEventListener('input', () => {
    rangeValue.textContent = `${rangeInput.value} %`;
  });
}
