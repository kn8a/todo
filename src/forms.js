import { deleteProject } from './data.js';
 
  //close new task form
  export function closeForm() {
    document.getElementById("popupForm").style.display = "none"; //close form
    document.getElementById("entryForm").reset();  //reset form fields
    showForm.style.backgroundColor="#1985A1"; //restor + button
    showForm.style.color="azure";
    showForm.style.cursor="pointer";
  }

  //close task edit form
  export function closeUpdateForm() {
    document.getElementById("updateFormDiv").style.display = "none"; //close form
    document.getElementById("updateForm").reset();  //reset form fields
    showForm.style.backgroundColor="lightblue"; //restor + button
    showForm.style.color="#FFFCF2";
    showForm.style.cursor="pointer";
  }


//delete project confirmation prompt
  export function deleteCurrentProject(project) {
    if (confirm(`This will also delete ALL tasks in ${project}. Are you sure?`)) {
        deleteProject(project);
        return 'yes';
    } else {
        return 'no';
    }
}

//clean storage button
export function cleanStorageBtn() {
    const clearStorageBtn = document.getElementById('clear-storage');
    clearStorageBtn.addEventListener('click', () => {
        clearStorage();
    })
}

//clean storage prompt
export function clearStorage() {
    if (confirm("This will delete ALL projects and tasks. Are you sure?")) {
        localStorage.clear();
        window.location.reload(true);
    } else {
        return;
    }
}