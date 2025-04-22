const formElement = document.getElementById('form');
const inputToDoElement = document.getElementById('input-to-do');
const todoListElement = document.getElementById('to-do-list');
const filtersElement = document.getElementById('filters');

let allTasks = [
  {
    id: Date.now(),
    taskName: 'Make a todo list',
    completed: false
  }
];

const insertTasks = tasks => {
  todoListElement.textContent = '';
  inputToDoElement.value = '';
  const fragment = document.createDocumentFragment();
  tasks.forEach(task => {
    //el contenedor
    const taskContainerElement = document.createElement('div'); //creo el div
    taskContainerElement.classList.add('task-container');
    taskContainerElement.dataset.id = task.id; // tuve que buscar ? como asignar dataset a un elemento creado? su id searaá el date.now

    //el checlbox
    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox'; //que sea tipo checkbox
    checkboxElement.checked = task.completed; //si la tarea esta completada, el checkbox estara marcado
    checkboxElement.classList.add('checkbox');
    checkboxElement.dataset.id = task.id; //asigno el data a la tarea
    checkboxElement.id = task.id; //necesito tmb este id para el label

    //EVENTO ACTUALIZAR
    checkboxElement.addEventListener('click', () => completeTask(task.id));

    taskContainerElement.append(checkboxElement);

    //el label con texto
    const taskLabelElement = document.createElement('label');
    taskLabelElement.classList.add('label');
    taskLabelElement.htmlFor = task.id; //asigno el id de la tarea
    taskLabelElement.textContent = task.taskName;
    taskContainerElement.append(taskLabelElement);

    //el boton de borrar
    const deleteButtonElement = document.createElement('img');
    deleteButtonElement.classList.add('delete-button');
    deleteButtonElement.src = 'assets/icon-cross.svg';

    //EVENTO ELIMINAR
    deleteButtonElement.addEventListener('click', () => deleteTask(task.id));
    taskContainerElement.append(deleteButtonElement);

    //meto todo al contenedot
    fragment.append(taskContainerElement);
  });

  todoListElement.append(fragment);
};

const filterTasks = () => {
  const filter = filtersElement.querySelector('.filter-active').dataset.filter;
  let tasksToRender = allTasks;

  if (filter === 'completed') {
    tasksToRender = allTasks.filter(task => task.completed);
  } else if (filter === 'active') {
    tasksToRender = allTasks.filter(task => !task.completed);
  }

  insertTasks(tasksToRender);
};

const deleteTask = id => {
  console.log('BORRAR LA TAREA ' + id);
  allTasks = allTasks.filter(task => task.id !== id);
  filterTasks();
};

const completeTask = id => {
  allTasks = allTasks.map(task => {
    if (task.id === id) {
      task.completed = !task.completed;
    }

    return task;
  });

  filterTasks();
};

const createTask = event => {
  event.preventDefault();
  const newTask = {
    id: Date.now(),
    taskName: inputToDoElement.value,
    completed: false
  };

  allTasks.push(newTask);
  filterTasks();
};

const setFilterActive = event => {
  const filter = event.target.dataset.filter;
  if (!filter) return;

  filtersElement.querySelector('.filter-active').classList.remove('filter-active');

  event.target.classList.add('filter-active');

  filterTasks();
};

filterTasks();

formElement.addEventListener('submit', createTask);
filtersElement.addEventListener('click', setFilterActive);
