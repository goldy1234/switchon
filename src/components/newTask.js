import UserInfo from './userInfo';
import Grid from '@material-ui/core/Grid';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToDo, addInProgress, addDone } from '../actions';
export default function NewTask() {

    const [selectedBranch, setSelectedBranch] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dispatch = useDispatch();

    const branchClickHandler = (e, branch) => {
        setSelectedBranch(branch);
    }

    const handleCancel = () => {
        history.push("/home")
    }

    const handleCreate = () => {
        if (titleRef.current.value.length && descriptionRef.current.value.length && selectedBranch.length) {
            let temp = {
                "title": titleRef.current.value,
                "description": descriptionRef.current.value
            }
            if (selectedBranch === "toDo") {
                dispatch(addToDo(temp))
            }
            else if (selectedBranch === "inProgress") {
                dispatch(addInProgress(temp));
            }
            else {
                dispatch(addDone(temp));
            }
            history.push("/home");
        }
        else {
            setError("Please fill and select all the inputs");
        }
    }
    const handleBackClick = () => {
        history.push("/analytics");
    }

    const showUserInfo =  window.innerWidth > 960;
    return (
        <Grid container className="newtask-container">
            {
               showUserInfo ?
                    <Grid item md={3} xs={3} lg={3}>
                        <UserInfo />
                    </Grid>
                    : <></>
            }
            <Grid item md={9} xs={12} lg={9} sm={12} container className="newtask-header-container">
                <Grid item md={12} xs={12} lg={12} sm={12}>
                    <div className="newtask-header-wrapper">
                        <div className="back-arrow" onClick={handleBackClick}>&#8592;</div>
                        <div className="create-task-text">Create Task</div>
                    </div>
                </Grid>
                <Grid item md={12} xs={12} lg={12} sm={12} className="newtask-form-wrapper">
                    {
                        error.length ?
                            <div className="error-message">
                                {error}
                            </div>
                            : <></>
                    }
                    <div className="task-name-wrapper">
                        <div className="task-input-label">Enter Task Name</div>
                        <input type="text" placeholder="Task Name" ref={titleRef} />
                    </div>
                    <div className="task-description-wrapper">
                        <div className="task-input-label">Enter Description</div>
                        <textarea rows={`${showUserInfo ? '10':'4'}`} cols={`${showUserInfo ? '50':'25'}`} placeholder="Description" ref={descriptionRef}></textarea>
                    </div>
                    <div className="newtask-buttons-wrapper">
                        <div className="title">Branch To</div>
                        <div className="buttons">
                            <div onClick={(e) => branchClickHandler(e, "toDo")} className={`${selectedBranch.length && selectedBranch === "toDo" ? 'selected-branch' : ''}`}>To-Do</div>
                            <div onClick={(e) => branchClickHandler(e, "inProgress")} className={`${selectedBranch.length && selectedBranch === "inProgress" ? 'selected-branch' : ''}`}>In-Progress</div>
                            <div onClick={(e) => branchClickHandler(e, "done")} className={`${selectedBranch.length && selectedBranch === "done" ? 'selected-branch' : ''}`}>Done</div>
                        </div>
                    </div>
                    <div className="newtask-form-buttons">
                        <div className="cancel" onClick={handleCancel}>Cancel</div>
                        <div className="create" onClick={handleCreate}>Create</div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}