const todos = [];
const RENDER_EVENT = 'render-todo';
document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('form');
  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo();
  });
});

function addTodo() {
  const textTodo = document.getElementById('title').value;
  const timestamp = document.getElementById('date').value;

  const generatedID = generateId();
  const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
  todos.push(todoObject);

  document.addEventListener(RENDER_EVENT, function () {
    console.log(todos);
  });
  document.dispatchEvent(new Event(RENDER_EVENT));
}

const generateId = () => {
  return Math.floor(Math.random() * 1000000);
}

const generateTodoObject = (id, text, timestamp, isDone) => {
  return {
    id,
    text,
    timestamp,
    isDone
  }
}