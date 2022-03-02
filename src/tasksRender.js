export function makeCards (task, project) {
    const mainDiv = document.getElementById('main')  
    
    for (let i=0; i < task.length; i++) {
        if (task[i].project == project) {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            cardDiv.id = task[i].id;
            mainDiv.appendChild(cardDiv);
            //title
            const cardTitle = document.createElement('h4');
            cardTitle.textContent = task[i].title;
            cardDiv.appendChild(cardTitle);
            //body cont
            const cardText = document.createElement('p');
            cardText.textContent = task[i].text;
            cardDiv.appendChild(cardText);
            //due date
            const cardDate = document.createElement('p');
            cardDate.textContent = task[i].date;
            cardDiv.appendChild(cardDate);
            //card bar
            const cardBarDiv = document.createElement('div');
            cardBarDiv.classList.add('card-bar');
            cardDiv.appendChild(cardBarDiv);
            //priority
            const cardPriority = document.createElement('div')
            cardPriority.classList.add(`priority-${task[i].priority}`);
            cardPriority.textContent = `${task[i].priority} priority`;
            cardBarDiv.appendChild(cardPriority);   
            //task actions
            const taskActions = document.createElement('div');
            taskActions.classList.add('task-actions');
            cardBarDiv.appendChild(taskActions);
                //complete
                const taskDone = document.createElement('div');
                taskDone.classList.add('task-action');
                taskDone.setAttribute('data-done', task[i].id);
                taskDone.textContent = '✔️';
                taskActions.appendChild(taskDone);

                //edit
                const taskEdit = document.createElement('div');
                taskEdit.classList.add('task-action');
                taskEdit.setAttribute('data-edit', task[i].id);
                taskEdit.textContent = '🖊️';
                taskActions.appendChild(taskEdit);
                //delete
                const taskDel = document.createElement('div');
                taskDel.classList.add('task-action');
                taskDel.setAttribute('data-del', task[i].id);
                taskDel.textContent = '❌';
                taskActions.appendChild(taskDel);
        }
    }
}
