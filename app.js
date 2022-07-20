var tasks = [];
var inputDescritionElement = document.getElementById("descriptionInput");
var inputDateElement = document.getElementById("date-task");
var buttonInsertElement = document.getElementById("buttonInsert");
inputDateElement.valueAsDate = new Date();
var ulElement = document.getElementById("ulTasks");
ulElement.innerHTML = "";
function InsertTask(description, date) {
    if (description && date) {
        var task = {
            id: Math.random(),
            ativa: false,
            description: description,
            date: date
        };
        tasks.push(task);
        addTaskList(task);
        inputDescritionElement.value = "";
        return console.log("Task Inserida");
    }
    return console.log("Não inserido!");
}
function handleButton() {
    console.log(inputDescritionElement.value);
    console.log(inputDateElement.value);
    InsertTask(inputDescritionElement.value, inputDateElement.value);
}
function addTaskList(task) {
    if (task) {
        ulElement.innerHTML += "\n        <li id=\"".concat(task.id, "\">\n            <div class=\"task-name-check\">\n                <input onClick=\"handleCheckTask(").concat(task.id, ")\" type=\"checkbox\" ").concat(task.ativa ? "checked" : "", " name=\"check-task\" id=\"check-task\" />\n                <p ").concat(task.ativa ? 'style="text-decoration: line-through;"' : "", ">").concat(task.description, "</p>\n            </div>\n            <div class=\"task-date-del\">\n                <span>").concat(task.date, "</span>\n                <button class=\"btn-delete-task\" onClick=\"handleDeleteTask(").concat(task.id, ")\">\n                <i class=\"fas fa-trash-alt\"></i>\n                </button>\n            </div>\n            </li>        \n        ");
    }
}
function handleCheckTask(id) { }
function handleDeleteTask(id) {
    tasks = tasks.filter(function (tasks) { return tasks.id != id; });
    console.log(tasks);
    handleTasksList(tasks);
}
function handleTasksList(tasks) {
    ulElement.innerHTML = "";
    tasks.map(function (item) {
        ulElement.innerHTML = "\n      <li id=\"".concat(item.id, "\">\n              <div class=\"task-name-check\">\n              <input onClick=\"handleCheckTask(").concat(item.id, ")\" type=\"checkbox\" ").concat(item.ativa ? "checked" : "", " name=\"check-task\" id=\"check-task\" />\n                  <p ").concat(item.ativa ? 'style="text-decoration: line-through;"' : "", ">").concat(item.description, "</p>\n              </div>\n              <div class=\"task-date-del\">\n                  <span>").concat(item.date, "</span>\n                  <button class=\"btn-delete-task\" onClick=\"handleDeleteTask(").concat(item.id, ")\">\n                  <i class=\"fas fa-trash-alt\"></i>\n                  </button>\n              </div>\n              </li>        \n          ");
    });
}
