import { useHistory} from 'react-router-dom';
export default function UserInfoMobile() {
    const history = useHistory();
    const goToAnalytics = () => {
        history.push("/analytics");
    }
    const navigateToNewTask = () => {
        history.push("/newTask");
    }
    return (
       <div className="userInfo-mobile-wrapper">
           <div className="userImage"><img src="https://icon-library.com/images/person-icon-svg/person-icon-svg-10.jpg"></img></div>
           <div className="navigation-wrapper">
               <div className="plus-icon" onClick={navigateToNewTask}>+</div>
               <div className="arrow-icon" onClick={goToAnalytics}>&#8623;</div>
           </div>
       </div>
    )
}