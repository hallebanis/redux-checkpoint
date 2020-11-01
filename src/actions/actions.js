export const addTaskAction=(newTask)=>{
return(
    {
        type:"ADD_TASK",
        value:newTask
    }
)
}
export const editTaskAction=(task)=>{
    return(
        {
            type:"EDIT_TASK",
            task:task
        }
    )
}
export const filterTaskAction=(listF,typeF)=>{
    return(
        {
            type:"FILTER_TASKS",
            list:listF,
            typeF:typeF
        }
    )
}