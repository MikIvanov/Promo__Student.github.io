const feedbackButton = document.getElementById('feedbackButton');
const feedbackModal = document.getElementById('feedbackModal');
const closeButton = document.querySelector('.close');
const feedbackForm = document.getElementById('feedbackForm');

feedbackButton.addEventListener('click', function() {
  feedbackModal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  feedbackModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === feedbackModal) {
    feedbackModal.style.display = 'none';
  }
});

feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем стандартную отправку формы

  // Собираем данные из формы
  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const message = document.getElementById('message').value;

  // Здесь вы можете добавить код для отправки данных на сервер
  // Например, используя AJAX или Fetch API
  console.log("ФИО:", name);
  console.log("Телефон/Почта:", contact);
  console.log("Сообщение:", message);

  // После отправки данных, очищаем форму и закрываем модальное окно
  feedbackForm.reset();
  feedbackModal.style.display = 'none';
});
