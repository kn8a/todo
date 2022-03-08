export let taskArray = [
    //{'id': '1', 'project': 'Demo project', 'title': `Demo`, 'text': `This is a demo task, it can be chnaged or deleted`, 'date': `anytime`, 'priority': 'low', 'status': 'active'},
];

export let projectArray = []

//object constructor for a task
export function addTask(title, text, date, priority, project) {
    this.id = taskArray.length+1;
    if (title == ''){ this.title = 'untitled';}
    else {this.title = title;}
    this.text = text;
    if (date == ''){ this.date = 'anytime';}
    else {this.date = date;}
    if (priority == ''){ this.priority = 'low';}
    else {this.priority = priority;}
    this.project = project;
    this.status = 'active';
}

//update task from edit from
export function updateTask(taskId, title, text, date, priority){
    const index = taskArray.findIndex(function(o){
        return o.id == taskId;
    })
    taskArray[index].title = title;
    taskArray[index].text = text;
    taskArray[index].date = date;
    taskArray[index].priority = priority;
    updateStorage(taskArray);
}
    
//delete a task - actually setting all values to ''
export function deleteTask(taskId) {
    const index = taskArray.findIndex(function(o){
     return o.id == taskId;
    })
    taskArray[index].id = '';
    taskArray[index].project = '';
    taskArray[index].title = '';
    taskArray[index].text = '';
    taskArray[index].date = '';
    taskArray[index].priority = '';
    taskArray[index].status = '';
    updateStorage(taskArray);
}

//change status of a task (active/done)
export function changeStatus(taskId, newStatus) {
    const index = taskArray.findIndex(function(o){
        return o.id == taskId;
    })
    taskArray[index].status = newStatus;
    updateStorage(taskArray);
} 

//write tasks array to localstorage
export function updateStorage(tasksArray){
    if (typeof(window.localStorage) !== "undefined") {
        // browser supports local storage
        localStorage.setItem('tasks', JSON.stringify(tasksArray));      
      } else {
        // browser does not support local storage
        console.log('localstorage unsupported');
      }
}

//load from localstorage to tasks array
export function loadStorage() {
    if (localStorage.getItem('tasks') != null) {
        let array = localStorage.getItem('tasks');
        if (array != null) {
            array = JSON.parse(array);
            taskArray = array;
        }
    }
    else {
        let demoTask = new addTask('Demo', 'This is a demo task', 'anytime', 'low', 'Demo project');
        taskArray.push(demoTask);
        updateStorage(taskArray);
    }
}

//write projects array to localstorage
export function updateStorageProject(projectArray){
    if (typeof(window.localStorage) !== "undefined") {
        // browser supports local storage
        localStorage.setItem('projects', JSON.stringify(projectArray));
      } else {
        // browser does not support local storage
        console.log('localstorage unsupported');
      }
}

//load from localstorage to projects array
export function loadStorageProject() {
    if ((localStorage.getItem('projects') != null) || (localStorage.getItem('projects') != undefined)) {
        let array = localStorage.getItem('projects');
        if (array != null) {
            array = JSON.parse(array);
            projectArray = array;
        }
    }
    else {
        projectArray.push('Demo project')
        updateStorageProject(projectArray);
    }
}

//delete a single project
export function deleteProject(project) {
    for (let i=0; i < taskArray.length; i++) {
        if (taskArray[i].project == project) {
            deleteTask(taskArray[i].id);
        } 
    }
    updateStorage(taskArray);
    const newArray = projectArray.filter(name => name != project);
    projectArray = newArray;
    updateStorageProject(projectArray)      
}



