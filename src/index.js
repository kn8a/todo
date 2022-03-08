import { makeCards, renderCard, removeChilds } from './tasksRender.js';
import { addTask, taskArray, updateStorage, loadStorage, updateTask, projectArray, loadStorageProject, updateStorageProject } from './data.js';
import { closeForm, closeUpdateForm, cleanStorageBtn, deleteCurrentProject,  } from './forms.js';
import { projectsList, projectItem, newProjectFormBtn, closeProjectForm } from './projects.js';

import './style.css';
import './card.css';
import './form.css';

loadStorage(); //load tasks from local storage
loadStorageProject(); //load projects from local storage

projectsList(projectArray); //render projects from array
makeCards(taskArray, projectArray[0]); //render task cards from array

cleanStorageBtn(); //initiate button to clean storage
newProjectFormBtn(); //initiate new project button

//set first project to active
const projectButtonsArray = document.querySelectorAll('.project-item-btn');
        projectButtonsArray[0].classList.add('activeProject');

//new task form
const form = document.getElementById('entryForm');
form.onsubmit = function(form) { 
  let newTitle = document.getElementById('title').value;
  let newText = document.getElementById('text').value;
  let newDate = document.getElementById('date').value;
  let newPriority = document.getElementById('priority').value;
  let newProject = document.getElementById('showForm').getAttribute('data-project');
  let taskObject = new addTask(newTitle, newText, newDate, newPriority, newProject);
  taskArray.push(taskObject);
  updateStorage(taskArray);
  closeForm(); 
  form.preventDefault()
  this.reset(); 
  renderCard(taskArray[taskArray.length-1]);
}
const formCloseBtn = document.getElementById('form-close-btn');
formCloseBtn.addEventListener('click', () => {
  closeForm();
})

//task edit form
const updateForm = document.getElementById('updateForm');
updateForm.onsubmit = function(form) { 
  let newTitle = document.getElementById('title-update').value; 
  let newText = document.getElementById('text-update').value;
  let newDate = document.getElementById('date-update').value;
  let newPriority = document.getElementById('priority-update').value;
  let taskId = document.getElementById('update-id').value;
  let project = document.getElementById('update-project').value;
  updateTask(taskId, newTitle, newText, newDate, newPriority)
  updateStorage(taskArray);
  closeUpdateForm(); 
  form.preventDefault()
  this.reset(); 
  removeChilds(document.getElementById('main')); 
  makeCards(taskArray, project)
}
const formUpdtCloseBtn = document.getElementById('form-update-close-btn');
formUpdtCloseBtn.addEventListener('click', () => {
  closeUpdateForm();
})

//new task button
const showForm = document.getElementById('showForm'); //new book button to variable
  showForm.onclick = function() { 
    document.getElementById('popupForm').style.display = "block"; //show form
    showForm.style.backgroundColor="transparent";//hide + button
    showForm.style.color="transparent";
    showForm.style.cursor="default"
}

//new project cancel button
document.getElementById('project-cancel-button').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('new-project-form').style.display = 'none';
  document.getElementById('new-project-name').value = ''; 
});

//add new project form
const projectForm = document.getElementById('add-project');
projectForm.onsubmit = function(form) { 
    let newProjectName = document.getElementById('new-project-name').value; 
    projectArray.push(newProjectName);
    updateStorageProject(projectArray);
    closeProjectForm();
    form.preventDefault()
    this.reset();
    projectItem(newProjectName);
}

//delete project button
const deleteProject = document.getElementById('delete-project');
deleteProject.onclick = function (e) {
  const currentProject = deleteProject.value;
  console.log(currentProject);
  const deleteConfirm = deleteCurrentProject(currentProject);
  if (deleteConfirm == 'yes') {
    document.getElementById(`project-id-unique-XsTQ-${currentProject}`).remove();
    e.preventDefault()
    showForm.style.display = 'none';
    deleteProject.style.display = 'none';
  }
}