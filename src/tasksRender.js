import { deleteTask, taskArray, changeStatus } from "./data";

//render all tasks
export function makeCards (task, project) {
    for (let i=0; i < task.length; i++) {
        if (task[i].project == project) {
            renderCard(task[i]);
            projectToCard(project);
        }
    }
    projectToCard(project);
}

//render a single task
export function renderCard(task) {
    const mainDiv = document.getElementById('main')
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.id = task.id;
    mainDiv.appendChild(cardDiv);
            //title
    const cardTitle = document.createElement('h4');
    cardTitle.textContent = task.title;
    cardDiv.appendChild(cardTitle);
            //body cont
    const cardText = document.createElement('p');
    cardText.textContent = task.text;
    cardDiv.appendChild(cardText);
            //due date
    const cardDate = document.createElement('p');
    cardDate.textContent = `Due date: ${task.date}`;
    cardDiv.appendChild(cardDate);
            //card bar
    const cardBarDiv = document.createElement('div');
    cardBarDiv.classList.add('card-bar');
    cardDiv.appendChild(cardBarDiv);
            //priority
    const cardPriority = document.createElement('div')
    cardPriority.classList.add(`priority-${task.priority}`);
    cardPriority.textContent = `${task.priority} priority`;
    cardBarDiv.appendChild(cardPriority);
    cardPriority.id = `priority-${task.id}`;   
            //task actions
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');
    cardBarDiv.appendChild(taskActions);
                //complete button
        const taskDone = document.createElement('div');
        taskDone.classList.add('task-action');
        taskDone.setAttribute('data-done', task.id);
        taskDone.textContent = '✔️';
        taskActions.appendChild(taskDone);
        taskDone.id = `done-${task.id}`;
        taskDone.addEventListener('click', () => {
                cardDone(task.id);
                changeStatus(task.id, 'done');
        })
                //edit button
        const taskEdit = document.createElement('div');
        taskEdit.classList.add('task-action');
        taskEdit.setAttribute('data-edit', task.id);
        taskEdit.textContent = '🖊️';
        taskActions.appendChild(taskEdit);
        taskEdit.id = `edit-${task.id}`;
        taskEdit.addEventListener('click', () => {
                document.getElementById('updateFormDiv').style.display = "block"; //show form
                document.getElementById('update-id').value = task.id;
                document.getElementById('title-update').value = task.title;
                document.getElementById('text-update').textContent = task.text;
                document.getElementById('date-update').value = task.date;
                document.getElementById('update-priority-label').textContent = `Currently set to ${task.priority} priority`;
                document.getElementById('update-project').value = task.project;
        })
                //delete button
        const taskDel = document.createElement('div');
        taskDel.classList.add('task-action');
        taskDel.setAttribute('data-del', task.id);
        taskDel.textContent = '❌';
        taskActions.appendChild(taskDel);
        taskDel.addEventListener('click', () => {
                removeDomTask(task.id);
                deleteTask(task.id);
        })

        if (task.status == 'done') { //if task is already done
                cardDone(task.id);
        }
}

//assign current project name to new task button
export function projectToCard(project) {
    const newCard = document.getElementById('showForm');
    newCard.removeAttribute('data-project');
    newCard.setAttribute('data-project',project);
    document.getElementById('delete-project').value = project;
}

//remove a single task from DOM
export function removeDomTask(taskId) {
        document.getElementById('main').removeChild(document.getElementById(taskId));
}

//task is done
export function cardDone(taskId) {
        document.getElementById(taskId).style.border = '2px lightgreen solid';
        const priority = document.getElementById(`priority-${taskId}`);
        priority.textContent = 'Completed';
        priority.style.color = 'green';
        priority.style.border = '1px green solid';
        document.getElementById(`done-${taskId}`).style.display = 'none';
        document.getElementById(`edit-${taskId}`).style.display = 'none';
        document.getElementById(taskId).style.color = 'grey';
}

//remove children of node
export const removeChilds = (parent) => {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };