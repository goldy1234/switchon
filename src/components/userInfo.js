import { useHistory, useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
export default function UserInfo() {
    const location = useLocation();
    const history = useHistory();
    const goToAnalytics = () => {
        history.push("/analytics");
    }
    const logout = () => {
        localStorage.removeItem("token");
        history.push("/");
    }
    return (
        <Grid container>
            <Grid item md={2} xs={2} lg={2} className="logout-section">
                <img src="https://cdn0.iconfinder.com/data/icons/housing-interface-1/16/Power-512.png" onClick={logout}></img>
            </Grid>
            <Grid item md={10} xs={10} lg={10}>
                <div className="userInfo-container">
                <div className="userImage"><img src="https://icon-library.com/images/person-icon-svg/person-icon-svg-10.jpg"></img></div>
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