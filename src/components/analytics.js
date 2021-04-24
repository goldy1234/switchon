import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import UserInfo from './userInfo';
import { useHistory } from 'react-router';

export default function Analytics() {
    const toDoData = useSelector(state => state.toDo);
    const inProgressData = useSelector(state => state.inProgress);
    const doneData = useSelector(state => state.done);
    const history = useHistory();
    const handleBackClick = () => {
        history.push("/home");
    }
    return (
        <Grid container>
            <Grid item md={3} xs={3} lg={3}>
                <UserInfo />
            </Grid>
            <Grid item md={9} xs={9} lg={9} container className="newtask-header-container">
                <Grid item md={12} xs={12} lg={12}>
                    <div className="newtask-header-wrapper">
                        <div className="back-arrow" onClick={handleBackClick}>&#8592;</div>
                        <div className="create-task-text">Analytics</div>
                    </div>
                </Grid>
                <Grid item md={12} xs={12} lg={12}>
                    <div className="pie-chart-wrapper">
                        <PieChart
                            data={[
                                { title: 'ToDo', value: toDoData.length, color: '#ffbf00' },
                                { title: 'InProgress', value: inProgressData.length, color: '#33cc33' },
                                { title: 'Done', value: doneData.length, color: '#0080ff' },
                            ]}
                            paddingAngle={3}
                        />
                        <div className="pie-chart-colors">
                            <div className="toDo-color">
                                <span className="dot"></span>
                                <span className="text">To-Do</span>
                            </div>
                            <div className="inProgress-color">
                                <span className="dot"></span>
                                <span className="text">In Progress</span>
                            </div>
                            <div className="done-color">
                                <span className="dot"></span>
                                <span className="text">Done</span>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}