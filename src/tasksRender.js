//takes tasks array and project name

export function makeCards (task, project) {
    for (let i=0; i < task.length; i++) {
        if (task[i].project == project) {
            renderCard(task[i]);
        }
    }
}

function renderCard(task) {
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
            //task actions
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');
    cardBarDiv.appendChild(taskActions);
                //complete
        const taskDone = document.createElement('div');
        taskDone.classList.add('task-action');
        taskDone.setAttribute('data-done', task.id);
        taskDone.textContent = '✔️';
        taskActions.appendChild(taskDone);
                //edit
        const taskEdit = document.createElement('div');
        taskEdit.classList.add('task-action');
        taskEdit.setAttribute('data-edit', task.id);
        taskEdit.textContent = '🖊️';
        taskActions.appendChild(taskEdit);
                //delete
        const taskDel = document.createElement('div');
        taskDel.classList.add('task-action');
        taskDel.setAttribute('data-del', task.id);
        taskDel.textContent = '❌';
        taskActions.appendChild(taskDel);
}