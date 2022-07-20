var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    InsertTask(inputDescritionElement.value, inputDateElement.value);
}
function addTaskList(task) {
    if (task) {
        var dateTaskFormatt = onHandleDateFormat(task.date);
        ulElement.innerHTML += "\n        <li id=\"".concat(task.id, "\">\n            <div class=\"task-name-check\">\n                <input onClick=\"handleCheckTask(").concat(task.id, ")\" type=\"checkbox\" ").concat(task.ativa ? "checked" : "", " name=\"check-task\" id=\"check-task\" />\n                <p ").concat(task.ativa ? 'style="text-decoration: line-through;"' : "", ">").concat(task.description, "</p>\n            </div>\n            <div class=\"task-date-del\">\n                <span>").concat(dateTaskFormatt, "</span>\n                <button class=\"btn-delete-task\" onClick=\"handleDeleteTask(").concat(task.id, ")\">\n                <i class=\"fas fa-trash-alt\"></i>\n                </button>\n            </div>\n            </li>        \n        ");
    }
}
function handleCheckTask(id) {
    var newTasks = tasks.map(function (item) {
        return item.id == id
            ? __assign(__assign({}, item), { ativa: !item.ativa }) : item;
    });
    tasks = newTasks;
    handleTasksList(tasks);
}
function handleDeleteTask(id) {
    var newTasks = tasks.filter(function (tasks) { return tasks.id != id; });
    tasks = newTasks;
    handleTasksList(tasks);
}
function handleTasksList(tasks) {
    ulElement.innerHTML = "";
    tasks.map(function (item) {
        var dateTaskFormatt = onHandleDateFormat(item.date);
        ulElement.innerHTML += "\n        <li id=\"".concat(item.id, "\">\n              <div class=\"task-name-check\">\n              <input onClick=\"handleCheckTask(").concat(item.id, ")\" type=\"checkbox\" ").concat(item.ativa ? "checked" : "", " name=\"check-task\" id=\"check-task\" />\n                  <p ").concat(item.ativa ? 'style="text-decoration: line-through;"' : "", ">").concat(item.description, "</p>\n              </div>\n              <div class=\"task-date-del\">\n                  <span>").concat(dateTaskFormatt, "</span>\n                  <button class=\"btn-delete-task\" onClick=\"handleDeleteTask(").concat(item.id, ")\">\n                  <i class=\"fas fa-trash-alt\"></i>\n                  </button>\n              </div>\n        </li>        \n          ");
    });
}
function onHandleDateFormat(dateTask) {
    var date = new Date(dateTask);
    var dia = (date.getDate() + 1).toString();
    var mes = (date.getMonth() + 1).toString().padStart(2, "0");
    var ano = date.getFullYear();
    return "".concat(dia, "/").concat(mes, "/").concat(ano);
}
