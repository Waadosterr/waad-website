// -------- Guessing Game ----------
let secretNumber = Math.floor(Math.random() * 200) + 1;

document.getElementById("guessBtn").addEventListener("click", checkGuess);
document.getElementById("resetBtn").addEventListener("click", resetGame);

function checkGuess() {
  let guess = Number(document.getElementById("guessInput").value);
  let message = document.getElementById("message");
  let diff = Math.abs(secretNumber - guess);

  if (!guess) {
    message.textContent = "Please enter a number.";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = "Correct! You win!";
  } else if (diff <= 5) {
    message.textContent = "Very close!";
  } else if (guess > secretNumber) {
    message.textContent = "Too high!";
  } else {
    message.textContent = "Too low!";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 200) + 1;
  document.getElementById("message").textContent = "Game reset!";
  document.getElementById("guessInput").value = "";
}

// -------- To-Do List ----------
let userName = "";
const namePrompt = document.getElementById("namePrompt");
const todoContent = document.getElementById("todoContent");
const todoListEl = document.getElementById("todoList");
const newTodoInput = document.getElementById("newTodo");

document.getElementById("saveNameBtn").addEventListener("click", () => {
  const nameInput = document.getElementById("userName").value.trim();
  if (!nameInput) return alert("Please enter your name");
  userName = nameInput;
  namePrompt.style.display = "none";
  todoContent.style.display = "block";
  loadTodos();
});

document.getElementById("addTodoBtn").addEventListener("click", () => {
  const todo = newTodoInput.value.trim();
  if (!todo) return;
  addTodo(todo);
  newTodoInput.value = "";
});

document.getElementById("resetTodoBtn").addEventListener("click", () => {
  if (confirm("Are you sure you want to reset your to-do list?")) {
    localStorage.removeItem("todos_" + userName);
    loadTodos();
  }
});

function getTodos() {
  const todos = localStorage.getItem("todos_" + userName);
  return todos ? JSON.parse(todos) : [];
}

function saveTodos(todos) {
  localStorage.setItem("todos_" + userName, JSON.stringify(todos));
}

function loadTodos() {
  const todos = getTodos();
  todoListEl.innerHTML = "";
  if (todos.length === 0) {
    todoListEl.innerHTML = "<li>No to-dos yet.</li>";
  } else {
    todos.forEach(todo => {
      const li = document.createElement("li");
      li.textContent = todo;
      todoListEl.appendChild(li);
    });
  }
}

function addTodo(todo) {
  const todos = getTodos();
  todos.push(todo);
  saveTodos(todos);
  loadTodos();
}
