import nextId,{setPrefix} from 'react-id-generator'
setPrefix("TS-");
const data =[
    {
        id:nextId(),
        description:'description 1',
        isDone:true
    },
    {
        id:nextId(),
        description:'description 2',
        isDone:false
    }
]

const initialState ={tasks:data,filter:"all"}
export default initialState;