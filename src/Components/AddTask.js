import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {useDispatch,useSelector} from 'react-redux'
import {addTaskAction,filterTaskAction} from '../actions/actions'

const AddTask = ({view}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const handleClose = () => {
      setTask({id:"",description:"",isDone:false})
      setShow(false)
    };
    const [task,setTask]=useState({id:"",description:"",isDone:false})
    const taskL = useSelector((state) => state.reducer);
    const dispatch=useDispatch();
    
    const handleAddNewTask=(t,tL,v)=>{
        if(t.id==="")
            alert("Tasks must have an ID");
        else{
            dispatch(addTaskAction(t));
            dispatch(filterTaskAction([...tL,t],v));
            handleClose();
            }
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
          <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>ts</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl columns={2} name="id" id="id" placeholder="ID" onChange={(e)=>setTask({...task,id:"ts"+e.target.value})} />
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
                id="formHorizontalRadios1"
                
                onClick={()=>setTask({...task,isDone:true})}
              />
              <Form.Check
                type="radio"
                label="Not Done"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                defaultChecked={true}
                onClick={()=>setTask({...task,isDone:false})}

              />
          </Form.Group>
      </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>handleAddNewTask(task,taskL,view)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
 
};
export default AddTask;
