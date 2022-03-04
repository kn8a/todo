export let taskArray = [
    {'id': '1', 'project': 'first project', 'title': `task1`, 'text': `this is some task that needs to be completed`, 'date': `28/02/2022`, 'priority': 'high', 'status': 'active'},
    {'id': '2', 'project': 'first project', 'title': `task2`, 'text': `this is some task that needs to be completed`, 'date': `30/02/2022`, 'priority': 'high', 'status': 'active'},
    {'id': '3', 'project': 'first project', 'title': `task2`, 'text': `this is some task that needs to be completed`, 'date': `30/02/2022`, 'priority': 'low', 'status': 'active'},
    {'id': '4', 'project': 'not project', 'title': `task2`, 'text': `this is some task that needs to be completed`, 'date': `30/02/2022`, 'priority': 'high', 'status': 'active'},
];

export function addTask(title, text, date, priority, project) { //task object constructor
    this.id = taskArray.length+1;
    if (title == ''){ this.title = 'untitled';}
    else {this.title = title;}
    this.text = text;
    if (date == ''){ this.date = 'anytime';}
    else {this.date = date;}
    if (priority == ''){ this.priority = 'low';}
    else {this.priority = priority;}
    this.project = project;
    
    //log(this);
}

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
    //if (index !== -1) taskArray.splice(index, 1);
}



export function updateStorage(tasksArray){
    if (typeof(window.localStorage) !== "undefined") {
        // browser supports local storage
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
        console.log(localStorage);        
      } else {
        // browser does not support local storage
        console.log('localstorage unsupported');
        
      }
    
}







// Code to check browser support



