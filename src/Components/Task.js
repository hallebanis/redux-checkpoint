import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import doneIcon from '../res/checked.png'
import notDoneIcon from '../res/cancel.png'
import EditTask from './EditTask'


const Task=(props)=>{

return(
    <>
        <tr key={props.task.id}>
            <td key={props.task.id+"1"}>{props.task.id}</td>
            <td key={props.task.id+"2"}>{props.task.description}</td>
            <td key={props.task.id+"3"}><img style={{width:"40px"}} alt="doneImg" src={props.task.isDone? doneIcon:notDoneIcon}></img></td>
            <td key={props.task.id+"4"}><EditTask task={props.task} view={props.view}/></td>
        </tr>
    </>
);
}
export default Task;