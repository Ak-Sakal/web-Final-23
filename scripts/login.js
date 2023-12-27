document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.querySelector('input[name="uname"]').value;
      const password = document.querySelector('input[name="psw"]').value;
  
      // Проверяем введенные данные в MockAPI
      authenticateUser(username, password);
    });
  
    function authenticateUser(username, password) {
      // Получаем данные пользователя из MockAPI
      fetch('https://658aef3aba789a9622382f6a.mockapi.io/users')
        .then(response => response.json())
        .then(users => {
          // Проверяем, есть ли совпадение логина и пароля
          const user = users.find(u => u.username === username && u.password === password);
  
          if (user) {
            // Если совпадение есть, пускаем пользователя дальше
            console.log('Успешная аутентификация');
            // Дополнительные действия, например, переадресация на другую страницу
            window.location.href = 'final.html';
          } else {
            // Если совпадения нет, выводим сообщение об ошибке
            alert('Sorry, wrong login or password');
          }
        })
        .catch(error => console.error('Ошибка:', error));
    }
  });
  