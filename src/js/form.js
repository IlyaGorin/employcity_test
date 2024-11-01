export default function initForm() {
  const orderForm = document.querySelector('.order-form');
  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      systemType: document.getElementById('select-value').value,
      email: document.getElementById('email').value,
      name: document.getElementById('name').value,
      range: document.getElementById('range').value,
      file: document.getElementById('file-upload').files[0]
        ? document.getElementById('file-upload').files[0].name
        : 'Файл не прикреплен',
    };

    alert(JSON.stringify(formData, null, 2));
  });
}
