let todos = [];

function addTodo() {
  const task = document.getElementById("taskInput").value;
  const date = document.getElementById("dateInput").value;

  if (task === "" || date === "") {
    alert("Please fill all fields");
    return;
  }

  todos.push({
    task,
    date,
    status: "Pending"
  });

  renderTodo();
  document.getElementById("taskInput").value = "";
  document.getElementById("dateInput").value = "";
}

function renderTodo() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  if (todos.length === 0) {
    list.innerHTML = `<tr><td colspan="4">No task found</td></tr>`;
    return;
  }

  todos.forEach((todo, index) => {
    list.innerHTML += `
      <tr>
        <td>${todo.task}</td>
        <td>${todo.date}</td>
        <td>${todo.status}</td>
        <td>
          <button onclick="deleteTodo(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodo();
}

function deleteAll() {
  todos = [];
  renderTodo();
}

function filterTodo() {
  const filtered = todos.filter(todo => todo.status === "Pending");
  alert("Total pending task: " + filtered.length);
}
