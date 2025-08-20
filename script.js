var todos = [];
    var editIndex = -1;

    function addTodo() {
      var inputElement = document.getElementById("todo");

      if (inputElement.value === '') {
        alert("Please write something!");
        return;
      }

      todos.push(inputElement.value);
      inputElement.value = "";
      showList();
    }

    function showList() {
      var listItems = document.getElementById("todo-list");
      listItems.innerHTML = "";

      for (var i = 0; i < todos.length; i++) {
        listItems.innerHTML += `
          <li>
            ${todos[i]}
            <div class="icons">
              <button onclick="editTodo(${i})">✏️</button>
              <button onclick="deleteTodo(${i})">🗑️</button>
            </div>
          </li>`;
      }
    }

    function deleteTodo(index) {
      todos.splice(index, 1);
      showList();
    }

    function editTodo(index) {
      var inputElement = document.getElementById("todo");
      inputElement.value = todos[index];
      editIndex = index;

      document.getElementById("add-btn").style.display = "none";
      document.getElementById("update-btn").style.display = "inline-block";
    }

    function updateTodo() {
      var inputElement = document.getElementById("todo");

      if (inputElement.value === '') {
        alert("Please write something!");
        return;
      }

      todos[editIndex] = inputElement.value;
      inputElement.value = "";

      editIndex = -1;
      document.getElementById("add-btn").style.display = "inline-block";
      document.getElementById("update-btn").style.display = "none";

      showList();
    }