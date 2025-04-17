
// INSTRUCCIONES
// Crea la interfaz básica
// Pinta la tarea en el HTML a mano para saber cual será la estructura que tendrás que replicar en JS
// Haz que esa tarea se pueda completar / descompletar y eliminar.
// Cuando todo eso funcione, pinta la tarea desde JS, quítala del HTML y comprueba que todo funciona igual
// La mecánica de esta aplicación es trabajar con el array de "tasks" y cada vez que haya un cambio (añadir tarea, modificar tarea, eliminar tarea), repintar todo el array en HTML.
// Cuando lo hagáis correctamente, os daréis cuenta de que las tareas se duplican, eso es porque al repintar se añaden las tareas a las que ya estaban. Para evitar que pase esto hay que vaciar el contenedor donde pintáis. Esto se hace con contenedor.textContent = "", de esta forma eliminais todo lo que hay dentro antes de volver a pintar las tareas.
// Acordaos de que existen los atributos data- son muy útiles en este tipo de ejercicios 

const formElement = document.getElementById('form');
const inputElement = document.getElementById('input-to-do');
const tasksElement = document.querySelector('.todo-list');


//elementos de cada task
const todoListElement = document.getElementById('to-do-list');
const checkboxElement = document.getElementById('checkbox');
const deleteButtonElement=document.getElementById('delete-button');
const taskLabelElement= document.getElementById('task-label');
const taskElement=document.getElementById('task');
const taskContainerElement=document.getElementById('task-container');




const modeChangeElement=document.getElementById('mode-button')



let allTasks = [
    {
      id: Date.now(),
      name: 'Comprar el pan',
      completed: false
    }
  ];

//   const FILTERS = {
//     ALL: 'all',
//     ACTIVE: 'active',
//     COMPLETED: 'completed'
//   };

//   let currentFilter=FILTERS.ALL;

  let darkmMode=false;

  const changeTheme = () => {
  };

  const countItemsLeft = () => {
  };

  const filterTasks=() => {
  };

  const insertTasks = () => {
  };

  const completeTask = () => {
    
    if (checkboxElement.checked) {
      taskLabelElement.classList.add('completed');
    }else
      taskLabelElement.classList.remove('completed');
    };
  

  const deleteTask = () => {
    
    todoListElement.remove(taskContainerElement);
    

    
  };
   

const createTask = task => {
};

const setFilter=filterTarget => {
};

const deleteAllCompletedTasks=() => {
};

insertTasks();

// formElement.addEventListener('submit', event => {
// });

// // filtersElement.addEventListener('click', event => {
// // });

// deleteCompleteElement.addEventListener('click', deleteAllCompletedTasks);

// switchElement.addEventListener('click', changeTheme);
checkboxElement.addEventListener('click', completeTask);
deleteButtonElement.addEventListener('click', deleteTask);


 
