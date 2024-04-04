import { useState } from 'react'
import './TaskList.css'
import { useEffect } from 'react'

export default function TaskList({ taskList, onDeleteTask,DoneTaskList }) {

    let [getList, SetGetlist] = useState([])
    console.log('getlist', getList)

    useEffect(() => {
        SetGetlist(taskList);
    }, [taskList]);

    let deleteTask = (id) => {

        let updatedTaskList = getList.filter((item) => {
            return item.id != id
        })
        SetGetlist(updatedTaskList)
        onDeleteTask(updatedTaskList)
    }


    let changeStatus = (event, id) => {
    
            let doneList=  getList.map((item) => {
                if (item.id === id) {
                    return { ...item, status: event.target.checked ? 'done' : '' };
                } else {
                    return item;
                }
            });
            SetGetlist(doneList)
            DoneTaskList(doneList)

    };

    return (
        <div className='list-container'>
            <ul className='list-item mb-0'>


                {getList.map((e, index) => {
                    return (<li key={e.id} className='list'>
                        <div className='text-box d-flex align-items-center justify-content-between'>

                            <div className='group  d-flex align-items-center justify-content-start'>

                                <input type="checkbox" className='me-3' name="" id="" title="Mark as complete" onChange={() => {
                                    changeStatus(event, e.id, e)
                                }} />
                                <p className={`task-name mb-0 ${e.status == 'done' ? 'text-decoration-line-through': ''}`}> {e.task} </p>
                            </div>
                            <button className='btn delete-btn p-0 pe-3' onClick={() => {
                                deleteTask(e.id, e.status)
                            }}><i className="fa-solid fa-trash"></i></button>
                        </div>




                    </li>
                    )
                })}

            </ul>
        </div>
    )
}