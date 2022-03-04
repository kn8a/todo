const log = console.log;


import { makeCards, renderCard } from './tasksRender.js';
import { addTask, taskArray, updateStorage, loadStorage } from './data.js'

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




const showForm = document.getElementById('showForm'); //new book button to variable
showForm.onclick = function() { 
  log(document.getElementById('showForm').getAttribute('data-project'));
  document.getElementById('popupForm').style.display = "block"; //show form
  showForm.style.backgroundColor="transparent";//hide + button
  showForm.style.color="transparent";
  showForm.style.cursor="default"
}

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

  function closeForm() {
    document.getElementById("popupForm").style.display = "none"; //close form
    document.getElementById("entryForm").reset();  //reset form fields
    showForm.style.backgroundColor="lightblue"; //restor + button
    showForm.style.color="#FFFCF2";
    showForm.style.cursor="pointer";
  }


