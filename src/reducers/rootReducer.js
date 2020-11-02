import initialState from '../data/data'


export const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'ADD_TASK':
            return {...state,tasks:[...state.tasks,action.payload]}
        
        case 'EDIT_TASK':
            let tab=state.tasks.map(elm=>{
                if(elm.id===action.payload)
                    return{...elm,isDone:!elm.isDone}
                    else
            return elm;
            })
            return {...state,tasks:tab}

        case 'FILTER_TASKS':
            return {...state,filter:action.payload}

        case 'DELETE_TASK':
            return{...state,tasks:state.tasks.filter(elm=>elm.id!==action.payload)}

        default:
            return state; 
    }
}
