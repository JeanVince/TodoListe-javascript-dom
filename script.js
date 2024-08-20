document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
      addTask(taskText);
      todoInput.value = "";
    }
  });

  function addTask(taskText) {
    const listItem = document.createElement("li");
    listItem.classList.add("flex", "items-center", "justify-between", "py-2");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.classList.add(
      "bg-red-500",
      "text-white",
      "px-3",
      "py-1",
      "rounded-lg",
      "hover:bg-red-600",
      "focus:outline-none"
    );
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  }
});
