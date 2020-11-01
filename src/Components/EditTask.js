import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import Form from 'react-bootstrap/Form'
import {editTaskAction, filterTaskAction} from '../actions/actions'
import {useDispatch,useSelector} from 'react-redux'

const EditTask=(props)=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const taskL = useSelector((state) => state.reducer);
    const dispatch=useDispatch()
    const [task,setTask]=useState(props.task)

    const handleEdit=(tL,v)=>{
        dispatch(editTaskAction(task))
        dispatch(filterTaskAction(taskL,props.view))
        handleClose()
    }

    

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>
        
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
    <Modal.Title>Edit TASK ID: {props.task.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e)=>setTask({...task,description:e.target.value}
                                )} defaultValue={props.task.description}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                            type="radio"
                            label="Done"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            checked={task.isDone}
                            onChange={()=>setTask({...task,isDone:true})}
                            onClick={()=>setTask({...task,isDone:true})}
                            />
                            <Form.Check
                                type="radio"
                                label="Not Done"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                checked={!task.isDone}
                                onChange={()=>setTask({...task,isDone:false})}
                                onClick={()=>setTask({...task,isDone:false})}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleEdit}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </>
    );
}
export default EditTask;