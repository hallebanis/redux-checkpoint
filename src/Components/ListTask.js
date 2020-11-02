import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Task from "./Task";
import { useSelector,useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {filterTaskAction} from '../actions/actions'


const ListTask = (props) => {
  var today = new Date(),date =today.getFullYear() +"-" +(today.getMonth() + 1) +"-" +today.getDate();
  const tasks=useSelector(state=>state)
  const dispatch=useDispatch()
  const handleView=(viewType)=>{
    switch (viewType) {
      case "true":
        return(tasks.tasks.map(elm=>{
          if(elm.isDone===true)
          return(<Task task={elm} key={elm.id} />)}
            ))
        case "false":
          return(tasks.tasks.map(elm=>{
            if(elm.isDone===false)
            return(<Task task={elm} key={elm.id} />)}
              ))
    
      default:
        return(tasks.tasks.map(elm=><Task task={elm} key={elm.id} />
        ))
    }
    
  }
  

  return (
    <div>
      <h2>TASK LIST for today : {date}</h2>
      <Form>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Filter Task by :
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="All"
                name="filter"
                id="all"
                defaultChecked={true}
                onClick={(e)=>dispatch(filterTaskAction(e.target.id))}
              />
              <Form.Check
                type="radio"
                label="Done"
                name="filter"
                id="true"
                onChange={(e)=>dispatch(filterTaskAction(e.target.id))}
              />
              <Form.Check
                type="radio"
                label="Not done"
                name="filter"
                id="false"
                onChange={(e)=>dispatch(filterTaskAction(e.target.id))}
              />
            </Col>
          </Form.Group>
        </fieldset>
      </Form>
      

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#Id</th>
            <th>Description</th>
            <th>Done?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {handleView(tasks.filter)}
        </tbody>
      </Table>
    </div>
  );
};

export default ListTask;
