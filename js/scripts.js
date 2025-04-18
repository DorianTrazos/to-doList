
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
      name: 'Comprar pan',
      completed: false
    }
  ];



//FUNCIONES

  const insertTasks = () => {
    allTasks.forEach(task => {
        const newTask = document.createElement('div');
        newTask.classList.add('task-container');
        
        todoListElement.appendChild(taskContainer);//lo agrego como hijo

   
    });
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
   

const createTask = event => {
    event.preventDefault();
    allTasks.push({
        id: Date.now(), //le doy un id a la tarea
        name: inputElement.value, //se lo asigna el input
        completed: false //por defecto la tarea no esta completada
    });
    insertTasks();
    console.log(allTasks[1].name);//es un array asi que tengo que ubicarlo de acuerdo a su indice

};


formElement.addEventListener('submit', createTask);

// // filtersElement.addEventListener('click', event => {
// // });

// deleteCompleteElement.addEventListener('click', deleteAllCompletedTasks);

// switchElement.addEventListener('click', changeTheme);
checkboxElement.addEventListener('click', completeTask);
deleteButtonElement.addEventListener('click', deleteTask);


 
