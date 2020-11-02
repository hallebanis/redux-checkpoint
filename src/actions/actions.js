export const addTaskAction=(newTask)=>{
return(
    {
        type:"ADD_TASK",
        payload:newTask
    }
)
}
export const editTaskAction=(id)=>{
    return(
        {
            type:"EDIT_TASK",
            payload:id
        }
    )
}
export const filterTaskAction=(filterType)=>{
    return(
        {
            type:"FILTER_TASKS",
            payload:filterType
        }
    )
}

export const deleteTaskAction=(id)=>{
   return(
    {
        type:"DELETE_TASK",
        payload:id
    }
   ) 
}