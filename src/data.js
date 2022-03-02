export const taskArray = [
    {'id': '1', 'project': 'first project', 'title': `task1`, 'text': `this is some task that needs to be completed`, 'date': `28/02/2022`, 'priority': 'high'},
    {'id': '2', 'project': 'first project', 'title': `task2`, 'text': `this is some task that needs to be completed`, 'date': `30/02/2022`, 'priority': 'high'},
    {'id': '3', 'project': 'first project', 'title': `task2`, 'text': `this is some task that needs to be completed`, 'date': `30/02/2022`, 'priority': 'low'},
    {'id': '2', 'project': 'not project', 'title': `task2`, 'text': `this is some task that needs to be completed`, 'date': `30/02/2022`, 'priority': 'high'},
];

export function addTask(title, text, date, priority, project) { //task object constructor
    this.title = title;
    this.text = text;
    this.date = date;
    this.priority = priority;
    this.project = project;
}