  
 
  
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


 