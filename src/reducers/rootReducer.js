import data from '../data/data'


export const reducer=(state=data,action)=>{
    switch (action.type) {
        case 'ADD_TASK':
            let x=state.filter((elm)=>elm.id===action.value.id)
            if(x.length===0)
            return [...state,action.value];
            else{
                alert(`The task with id:${action.value.id} already exist, The 'ID' MUST BE UNIQUE `)
                return state
            }
        
        case 'EDIT_TASK':
            let tab=[]
            tab=state.map(elm=>{
                if(action.task.id===elm.id){ 
                    elm["description"]=action.task.description;
                    elm["isDone"]=action.task.isDone}
                    return elm   
            })
            return tab
        
            
        default:
            return state; 
    }
}
export const reducer2=(state=data,action)=>{
    switch (action.type) {
        case "FILTER_TASKS":
            state=action.list
            switch (action.typeF) {
                case "true":
                    return action.list.filter(elm=>elm.isDone===true)
                    
                case "false":
                    return action.list.filter(elm=>elm.isDone===false)
                   
                default:
                    return action.list
            }
    
        default:
            return state;
    }

}