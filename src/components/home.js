import Grid from '@material-ui/core/Grid';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, removeToDo, addInProgress, removeInProgress,addDone,removeDone } from '../actions';
import UserInfo from './userInfo';
import { useHistory } from 'react-router-dom';

export default function Home() {

    const toDoRef = useRef();
    const inProgressRef = useRef();
    const doneRef = useRef();
    const dispatch = useDispatch();
    const toDoData = useSelector(state => state.toDo);
    const inProgressData = useSelector(state => state.inProgress);
    const doneData = useSelector(state => state.done);
    const history = useHistory();
    const [dataMoved, setDataMoved] = useState(null);
    const [endOfDrag, setEndOfDrag] = useState(false);
    const [moveTo,setMoveTo] = useState("");

    const dragStart = (e, index) => {
        if (toDoRef.current.contains(e.target)) {
            setDataMoved({
                "index": index,
                "from": "toDo"
            });
        }
        else if (inProgressRef.current.contains(e.target)) {
            setDataMoved({
                "index": index,
                "from": "inProgress"
            });
        }
        else if (doneRef.current.contains(e.target)) {
            setDataMoved({
                "index": index,
                "from": "done"
            });
        }
    }

    const dragEnd = (e) => {
        setEndOfDrag(true);
    }

    const getData = () => {
        let temp ={};
        if(dataMoved.from === "toDo"){
            temp = toDoData[dataMoved.index];
            dispatch(removeToDo(dataMoved.index));
        }  
        else if(dataMoved.from === "inProgress") {
            temp = inProgressData[dataMoved.index];
            dispatch(removeInProgress(dataMoved.index));
        }
        else if(dataMoved.from === "done"){
            temp = doneData[dataMoved.index];
            dispatch(removeDone(dataMoved.index));
        }
        return temp;
    }


    
    useEffect(()=>{
        if(endOfDrag && moveTo.length){
            if(moveTo === "toDo"){
                dispatch(addToDo(getData()));
                setEndOfDrag(false);
            }
            else if(moveTo === "inProgress"){
                dispatch(addInProgress(getData()));
                setEndOfDrag(false);
            }
            else if(moveTo === "inDone"){
                dispatch(addDone(getData()));
                setEndOfDrag(false);
            }
        }
    },[endOfDrag])

    const allowDrop = (e) => {
            if (toDoRef.current.contains(e.target)) {
                setMoveTo("toDo");
            }
            else if (inProgressRef.current.contains(e.target)) {
                setMoveTo("inProgress");
            }
            else if (doneRef.current.contains(e.target)) {
                 setMoveTo("inDone");
            }
            else{
                setMoveTo("");
            }
    }

    const allowDropInMobile = (e) => {
        const x = e.targetTouches[0].clientX;
        const y = e.targetTouches[0].clientY;
        const element = document.elementFromPoint(x,y);
        if (toDoRef.current.contains(element)) {
            setMoveTo("toDo");
        }
        else if (inProgressRef.current.contains(element)) {
            setMoveTo("inProgress");
        }
        else if (doneRef.current.contains(element)) {
             setMoveTo("inDone");
        }
        else{
            setMoveTo("");
        }
        
    }
    const navigateToNewTask = () => {
        history.push("/newTask");
    }
    return (
        <Grid container className="home-page-wrapper">
            <Grid item md={3} xs={12} lg={3} sm={12}>
                <UserInfo />
            </Grid>
            <Grid item md={9} xs={12} lg={9} sm={12} container className="home-page-content-wrapper">
                <Grid item md={12} xs={12} lg={12} className="new-task-wrapper">
                    <div className="new-task-button"><div className="new-task-button-text" onClick={navigateToNewTask} >New Task</div></div>
                </Grid>
                <Grid item md={12} xs={12} lg={12} container>
                <Grid item md={4} xs={12} lg={4} sm={12}>
                    <div className="to-do-wrapper" onDragOver={e => allowDrop(e)} ref={toDoRef}>
                        <div className="title">To-Do</div>
                        <div className="content-wrapper">
                            {
                                toDoData.length ?
                                    toDoData.map((item, index) => {
                                        return (
                                            <div className="content" key={index} id={index} draggable="true" onDragStart={(e) => dragStart(e, index)} 
                                            onTouchStart={(e) => dragStart(e, index)}  onDragEnd={e => dragEnd(e)} onTouchEnd={e => dragEnd(e)}
                                             onTouchMove={e => allowDropInMobile(e)}>
                                                <div className="content-title">{item.title}</div>
                                                <div className="content-description">
                                                    {item.description}
                                                </div>
                                            </div>
                                        )
                                    })
                                    : <></>
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} xs={12} lg={4} sm={12}>
                    <div className="in-progress-wrapper" onDragOver={e => allowDrop(e)} ref={inProgressRef}>
                        <div className="title">In-progress</div>
                        <div className="content-wrapper">
                            {
                                inProgressData.length ?
                                    inProgressData.map((item, index) => {
                                        return (
                                            <div className="content" key={index} id={index} draggable="true" onDragStart={(e) => dragStart(e, index)}  onTouchStart={(e) => dragStart(e, index)} 
                                            onDragEnd={e => dragEnd(e)} onTouchEnd={e => dragEnd(e)} onTouchMove={e => allowDropInMobile(e)}>
                                                <div className="content-title">{item.title}</div>
                                                <div className="content-description">
                                                    {item.description}
                                                </div>
                                            </div>
                                        )
                                    })
                                    : <></>
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} xs={12} lg={4} sm={12}>
                    <div className="done-wrapper" onDragOver={e => allowDrop(e)} ref={doneRef}>
                        <div className="title">Done</div>
                        <div className="content-wrapper">
                            {
                                doneData.length ?
                                    doneData.map((item, index) => {
                                        return (
                                            <div className="content" key={index} id={index} draggable="true" onDragStart={(e) => dragStart(e, index)}  onTouchStart={(e) => dragStart(e, index)} 
                                            onDragEnd={e => dragEnd(e)} onTouchEnd={e => dragEnd(e)} onTouchMove={e => allowDropInMobile(e)}>
                                                <div className="content-title">{item.title}</div>
                                                <div className="content-description">
                                                    {item.description}
                                                </div>
                                            </div>
                                        )
                                    })
                                    : <></>
                            }
                        </div>
                    </div>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
    )
}