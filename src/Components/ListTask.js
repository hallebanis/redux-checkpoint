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
  const taskL = useSelector((state) => state.reducer);
  const taskLFiltred=useSelector((state)=>state.reducer2)
  const dispatch=useDispatch();
  const handleFilter=(e)=>{
    dispatch(filterTaskAction(taskL,e.target.id))
    props.onFilter(e.target.id.toString())
  }
  const handleViewChange=(x)=>{
    if(x==="true" || x==="false")
    return(taskLFiltred.map((elm) => (
      <Task task={elm} key={elm.id} view={props.view} />
    )))
   else
   return(taskL.map((elm) => (
    <Task task={elm} key={elm.id} />
  )))
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
                id="All"
                defaultChecked={true}
                onChange={(e)=>handleFilter(e)}
              />
              <Form.Check
                type="radio"
                label="Done"
                name="filter"
                id="true"
                onClick={(e)=>handleFilter(e)}
              />
              <Form.Check
                type="radio"
                label="Not done"
                name="filter"
                id="false"
                onClick={(e)=>handleFilter(e)}
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
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
        {handleViewChange(props.view)}
        </tbody>
      </Table>
    </div>
  );
};

export default ListTask;
