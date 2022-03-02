const log = console.log;


import { makeCards } from './tasksRender.js';
import { taskArray } from './data.js'
import './style.css';
import './card.css';
import './form.css';

log(taskArray);

makeCards(taskArray, 'first project');



const showForm = document.getElementById('showForm'); //new book button to variable
showForm.onclick = function() { 
  document.getElementById('popupForm').style.display = "block"; //show form
  showForm.style.backgroundColor="transparent";//hide + button
  showForm.style.color="transparent";
  showForm.style.cursor="default" 
}






//function closeForm() {
//  document.getElementById("popupForm").style.display = "none"; //close form
//  document.getElementById("entryForm").reset();  //reset form fields
//  showForm.style.backgroundColor="#EB5E28"; //restor + button
//  showForm.style.color="#FFFCF2";
//  showForm.style.cursor="pointer";
//}
