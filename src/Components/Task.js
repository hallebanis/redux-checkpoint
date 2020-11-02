import React from 'react'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import doneIcon from '../res/checked.png'
import notDoneIcon from '../res/cancel.png'
import {editTaskAction,deleteTaskAction} from '../actions/actions'
import {useDispatch} from 'react-redux'


const Task=(props)=>{

    const dispatch=useDispatch()
    const dispatch2=useDispatch()

return(
    <>
        <tr key={props.task.id}>
            <td key={props.task.id+"1"}>{props.task.id}</td>
            <td key={props.task.id+"2"}>{props.task.description}</td>
            <td key={props.task.id+"3"}><img style={{width:"40px"}} alt="doneImg" src={props.task.isDone? doneIcon:notDoneIcon}></img></td>
            <td key={props.task.id+"4"}><Button variant="primary" onClick={()=>dispatch(editTaskAction(props.task.id))}>edit</Button>
            <Button style={{marginLeft:"5px"}} variant="secondary" onClick={()=>dispatch2(deleteTaskAction(props.task.id))}>delete</Button>
            </td>
        </tr>
    </>
);
}
export default Task;