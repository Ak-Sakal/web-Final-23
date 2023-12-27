// Добавляем обработчик для удаления задания при клике на крестик
document.getElementById("myUL").addEventListener("click", function(ev) {
  if (ev.target.className === "close") {
    var listItem = ev.target.parentElement;
    var taskContent = listItem.textContent.trim();
    
    // Получаем userId и username из MockAPI
    getUserDataFromMockAPI((userId, username) => {
      // Удаляем задание из сервера
      deleteTaskFromMockAPI(taskContent, userId);
    });

    listItem.remove();
  }
});

// Новая функция для удаления задания из MockAPI
function deleteTaskFromMockAPI(taskContent, userId) {
  fetch('https://658aef3aba789a9622382f6a.mockapi.io/tasks', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
      task: taskContent,
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Задание успешно удалено из MockAPI:', data);
    })
    .catch(error => console.error('Ошибка удаления задания из MockAPI:', error));
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);

    // Получаем userId и username из MockAPI
    getUserDataFromMockAPI((userId, username) => {
      // Отправляем данные на сервер
      saveTaskToMockAPI(inputValue, false, userId, username);
    });
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

}

// Новая функция для получения данных пользователя из MockAPI
function getUserDataFromMockAPI(callback) {
  fetch('https://658aef3aba789a9622382f6a.mockapi.io/users')
    .then(response => response.json())
    .then(users => {
      if (users.length > 0) {
        const userId = users[0].id;
        const username = users[0].username;
        callback(userId, username);
      }
    })
    .catch(error => console.error('Ошибка получения данных пользователя из MockAPI:', error));
}

// Новая функция для сохранения задания в MockAPI
function saveTaskToMockAPI(taskContent, status, userId, username) {
  fetch('https://658aef3aba789a9622382f6a.mockapi.io/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId=1,
      task: taskContent,
 
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Задание успешно сохранено в MockAPI:', data);
    })
    .catch(error => console.error('Ошибка сохранения задания в MockAPI:', error));
}
// марка сделано
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

