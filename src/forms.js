  
 
  
  export function closeForm() {
    document.getElementById("popupForm").style.display = "none"; //close form
    document.getElementById("entryForm").reset();  //reset form fields
    showForm.style.backgroundColor="lightblue"; //restor + button
    showForm.style.color="#FFFCF2";
    showForm.style.cursor="pointer";
  }

  export function closeUpdateForm() {
    document.getElementById("updateFormDiv").style.display = "none"; //close form
    document.getElementById("updateForm").reset();  //reset form fields
    showForm.style.backgroundColor="lightblue"; //restor + button
    showForm.style.color="#FFFCF2";
    showForm.style.cursor="pointer";
  }



  export function deleteProjectBtn() {
    const deleteProject = document.getElementById('delete-project');
    const currentProject = deleteProject.value;
    deleteProject.addEventListener('click', () => {
        deleteCurrentProject(currentProject);
    })

}

export function deleteCurrentProject(project) {
    if (confirm(`This will also delete ALL tasks in ${project}. Are you sure?`)) {
        //write function to delete all array items with matching storage name
    } else {
        return;
    }
}








export function cleanStorageBtn() {
    const clearStorageBtn = document.getElementById('clear-storage');
    clearStorageBtn.addEventListener('click', () => {
        clearStorage();
        
    })
}

export function clearStorage() {
    if (confirm("This will delete ALL projects and tasks. Are you sure?")) {
        localStorage.clear();
        window.location.reload(true);
    } else {
        return;
    }
}