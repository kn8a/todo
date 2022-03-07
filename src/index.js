const log = console.log;


import { makeCards, renderCard, removeChilds } from './tasksRender.js';
import { addTask, taskArray, updateStorage, loadStorage, updateTask } from './data.js';
import { closeForm, closeUpdateForm } from './forms.js';

import './style.css';
import './card.css';
import './form.css';

//log(taskArray);
//localStorage.clear();
console.log(localStorage);
console.log(localStorage.getItem('tasks'))

loadStorage();
console.log(taskArray);
makeCards(taskArray, 'Demo project');


let form = document.getElementById('entryForm');
form.onsubmit = function(form) { 
  let newTitle = document.getElementById('title').value; 
  //log(newTitle);
  let newText = document.getElementById('text').value;
  //log(newText);
  let newDate = document.getElementById('date').value;
  //log(newDate);
  let newPriority = document.getElementById('priority').value;
  //log(newPriority);
  let newProject = document.getElementById('showForm').getAttribute('data-project');
  let taskObject = new addTask(newTitle, newText, newDate, newPriority, newProject);
  //log(taskObject);
  taskArray.push(taskObject);
  updateStorage(taskArray);
  closeForm(); 
  form.preventDefault() //prevents from defaulting to original state
  this.reset(); 
  log(taskArray);
  renderCard(taskArray[taskArray.length-1]);
  }

let updateForm = document.getElementById('updateForm');
updateForm.onsubmit = function(form) { 
  let newTitle = document.getElementById('title-update').value; 
    //log(newTitle);
  let newText = document.getElementById('text-update').value;
    //log(newText);
  let newDate = document.getElementById('date-update').value;
    //log(newDate);
  let newPriority = document.getElementById('priority-update').value;
    //log(newPriority);
  let taskId = document.getElementById('update-id').value;
  let project = document.getElementById('update-project').value;
  updateTask(taskId, newTitle, newText, newDate, newPriority)
  updateStorage(taskArray);
  closeUpdateForm(); 
  form.preventDefault() //prevents from defaulting to original state
  this.reset(); 
  removeChilds(document.getElementById('main'));
    
  makeCards(taskArray, project)
  log(taskArray);
    //renderCard(taskArray[taskArray.length-1]);
}

const showForm = document.getElementById('showForm'); //new book button to variable
  showForm.onclick = function() { 
    log('this is the project ',document.getElementById('showForm').getAttribute('data-project'));
    document.getElementById('popupForm').style.display = "block"; //show form
    showForm.style.backgroundColor="transparent";//hide + button
    showForm.style.color="transparent";
    showForm.style.cursor="default"
}