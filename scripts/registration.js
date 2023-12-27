document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.querySelector('form');
  
    registrationForm.addEventListener('submit', async function (event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('psw').value;
      const repeatPassword = document.getElementById('psw-repeat').value;
  
      // Проверяем совпадение паролей
      if (password !== repeatPassword) {
        alert('Entered passwords do not match.');
        return;
      }
  
      // Если все проверки пройдены, отправляем данные в MockAPI
      const userData = {
        username: username,
        password: password,
      };
  
      try {
        const response = await fetch('https://658aef3aba789a9622382f6a.mockapi.io/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to register user.');
        }
  
        const responseData = await response.json();
        console.log('User successfully registered:', responseData);
  
        // Переход на следующую страницу
        window.location.href = 'final.html';
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during registration.');
      }
    });
  });
  