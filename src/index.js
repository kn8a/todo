const log = console.log;


import { makeCards } from './tasksRender.js';
import { taskArray } from './data.js'
import './style.css';

log(taskArray);

makeCards(taskArray, 'first project');



