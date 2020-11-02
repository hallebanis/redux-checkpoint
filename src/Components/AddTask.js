import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {useDispatch} from 'react-redux'
import nextId from 'react-id-generator'
import {addTaskAction} from '../actions/actions'


const AddTask = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose=()=>{ 
      setShow(false)
      setTask({...task,description:"",isDone:false})
    }

    const dispatch=useDispatch()

    const [task,setTask]=useState({id:nextId(),description:"",isDone:false})
    const handleSave=()=>{
      dispatch(addTaskAction(task))
      setTask({id:nextId(),description:"",isDone:false})
      setShow(false)
    }
  
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          New Task
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add new task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>ID:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl columns={2} readOnly={true} name="id" id="id" placeholder={task.id} />
      </InputGroup>
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={(e)=>setTask({...task,description:e.target.value})}/>
  </Form.Group>
  <Form.Group>
            
              <Form.Check
                type="radio"
                label="Done"
                name="formHorizontalRadios"
                id="true"
                onChange={(e)=>setTask({...task,isDone:true})}
              />
              <Form.Check
                type="radio"
                label="Not Done"
                name="formHorizontalRadios"
                id="false"
                defaultChecked={true}
                onChange={(e)=>setTask({...task,isDone:false})}
              />
          </Form.Group>
      </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave} >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
 
};
export default AddTask;
