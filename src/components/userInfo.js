import { useHistory, useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
export default function UserInfo() {
    const location = useLocation();
    const history = useHistory();
    const goToAnalytics = () => {
        history.push("/analytics");
    }
    return (
        <Grid container>
            <Grid item md={2} xs={2} lg={2} className="logout-section">
                logout
            </Grid>
            <Grid item md={10} xs={10} lg={10}>
                <div className="userInfo-container">
                    userInfo section
                    {
                        location.pathname === "/home" ?
                            <div className="goToAnalytics" onClick={goToAnalytics}>
                                <div>
                                    Analytics
                                </div>
                            </div> : <></>
                    }
                </div>
            </Grid>
        </Grid>
    )
}