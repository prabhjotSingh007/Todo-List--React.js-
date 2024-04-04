import { useState } from 'react'
import './TaskInput.css'
import { v4 as uuidv4 } from 'uuid';
import TaskList from '../Task-List/TaskList';

export default function TaskInput() {

    let [taskName, SettaskName] = useState('');

    let [taskList, SetTaskList] = useState([])
    console.log(taskList)


    let handelTaskValue = (event) => {
        console.log(event.target.value)
        SettaskName((prev) => {
            return prev = event.target.value
        })
    }
    let handelAddTask = (event) => {
        SetTaskList((prev) => {
            return [...prev, {
                task: taskName, status: '',
                id: uuidv4()
            }]
        })
        SettaskName('')
    }
    let handleTaskDelete = (updatedTaskList) => {
        SetTaskList(updatedTaskList);
    };

    let handelDoneTask = (doneTaskList)=>{
        SetTaskList(doneTaskList    )
    }


    return (
        <div className='Todo-box vh-100 w-100'>
            <div className='container'>
                <div className='todo-box-conatiner'>

                    <h1 className='text-center heading'>Todo <span> List </span></h1>

                    <div className="input-box d-flex justify-content-center aling-item-center">


                        <div className="form-group d-flex justify-content-between aling-item-center w-75">

                            <input type="text" className="form-control w-75 input" id="task" aria-describedby="emailHelp" placeholder="Add task" value={taskName} onChange={handelTaskValue} />
                            <button type="buton" className="btn btn-primary add-btn" onClick={handelAddTask}>Add</button>

                        </div>






                    </div>

                    <div className='list-box'>
                        <div className="scroll-box">
                            <TaskList  taskList={taskList} onDeleteTask={handleTaskDelete} DoneTaskList={handelDoneTask}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}