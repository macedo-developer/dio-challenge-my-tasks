interface iTask {
  id: number;
  ativa: boolean;
  description: string;
  date: string;
}

interface ArrayTasks extends Array<iTask> {}

var tasks: ArrayTasks = [];

const inputDescritionElement = document.getElementById(
  "descriptionInput"
) as HTMLInputElement;
const inputDateElement = document.getElementById(
  "date-task"
) as HTMLInputElement;
const buttonInsertElement = document.getElementById(
  "buttonInsert"
) as HTMLButtonElement;

inputDateElement.valueAsDate = new Date();

const ulElement = document.getElementById("ulTasks") as HTMLUListElement;

ulElement.innerHTML = "";

function InsertTask(description: string, date: string) {
  if (description && date) {
    const task: iTask = {
      id: Math.random(),
      ativa: false,
      description,
      date,
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

function addTaskList(task: iTask) {
  if (task) {
    ulElement.innerHTML += `
        <li id="${task.id}">
            <div class="task-name-check">
                <input onClick="handleCheckTask(${task.id})" type="checkbox" ${
      task.ativa ? "checked" : ""
    } name="check-task" id="check-task" />
                <p ${
                  task.ativa ? 'style="text-decoration: line-through;"' : ""
                }>${task.description}</p>
            </div>
            <div class="task-date-del">
                <span>${task.date}</span>
                <button class="btn-delete-task" onClick="handleDeleteTask(${
                  task.id
                })">
                <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            </li>        
        `;
  }
}

function handleCheckTask(id: number) {
  const newTasks = tasks.map((item) =>
    item.id == id
      ? {
          ...item,
          ativa: !item.ativa,
        }
      : item
  );

  console.log(newTasks);

  tasks = newTasks;

  handleTasksList(tasks);
}

function handleDeleteTask(id: number) {
  const newTasks = tasks.filter((tasks) => tasks.id != id);

  tasks = newTasks;

  handleTasksList(tasks);
}

function handleTasksList(tasks: ArrayTasks) {
  if (tasks.length > 0) {
    tasks.map((item) => {
      ulElement.innerHTML = `
        <li id="${item.id}">
              <div class="task-name-check">
              <input onClick="handleCheckTask(${item.id})" type="checkbox" ${
        item.ativa ? "checked" : ""
      } name="check-task" id="check-task" />
                  <p ${
                    item.ativa ? 'style="text-decoration: line-through;"' : ""
                  }>${item.description}</p>
              </div>
              <div class="task-date-del">
                  <span>${item.date}</span>
                  <button class="btn-delete-task" onClick="handleDeleteTask(${
                    item.id
                  })">
                  <i class="fas fa-trash-alt"></i>
                  </button>
              </div>
        </li>        
          `;
    });
  } else {
    ulElement.innerHTML = "";
  }
}
