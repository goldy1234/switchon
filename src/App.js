import Login from './components/login';
import Home from './components/home';
import NewTask from './components/newTask';
import Analytics from './components/analytics';
import {BrowserRouter,Route, Switch } from 'react-router-dom';

export default function App(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/analytics" component={Analytics}/>
            <Route path="/newTask" component={NewTask}/>
        </Switch>
        </BrowserRouter>
    )
}