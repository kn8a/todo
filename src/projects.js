import { makeCards, removeChilds } from './tasksRender.js';
import { taskArray } from './data.js';

//render all projects from array
export function projectsList(projects) {
    for (let i=0; i < projects.length; i++) {
        projectItem(projects[i]);
    }
}

//render single project item
export function projectItem(project) {
    const projectsListDiv = document.getElementById('projects-list');
    const projectBtn = document.createElement('button');
    projectBtn.textContent = project;
    projectBtn.value = project;
    projectBtn.id = `project-id-unique-XsTQ-${project}`;
    projectBtn.classList.add('project-item-btn')
    projectsListDiv.appendChild(projectBtn);
    projectBtn.addEventListener('click', () => {
        const projectButtonsArray = document.querySelectorAll('.project-item-btn');
        projectButtonsArray.forEach((btn) => {
            btn.classList.remove('activeProject');
        })
        projectBtn.classList.add('activeProject');
        removeChilds(document.getElementById('main'));
        makeCards(taskArray, project);
        document.getElementById('delete-project').value = '';
        document.getElementById('delete-project').value = project;
        document.getElementById('delete-project').style.display = 'inline';
        document.getElementById('showForm').style.display = 'inline';
    })
}

//new project button
export function newProjectFormBtn() {
    const newProjBtn = document.getElementById('new-project-btn');
    newProjBtn.addEventListener('click', () => {
        document.getElementById('new-project-form').style.display = 'flex';
    })
}

export function closeProjectForm() {
    document.getElementById("new-project-form").style.display = "none"; //close form
    document.getElementById("add-project").reset();  //reset form fields  
}