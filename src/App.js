
import React, { useState } from 'react'
import ListTask from './Components/ListTask'
import AddTask from './Components/AddTask'

function App() {
  
  const[viewList,setViewList]=useState("all")
  return (
    <div className="App">
      <ListTask view={viewList} onFilter={setViewList}/>
      <AddTask view={viewList}/>
    </div>
  );
}

export default App;
