import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogContainer from "./components/Dialogs/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-content'>

                        <Route
                            path='/profile/:userID'
                            render={() =>  <ProfileContainer /> }
                        />
                        <Route
                            path='/dialogs'
                            render={() =>  <DialogContainer /> }
                        />
                        <Route path='/news' render={() =>  <News /> }/>
                        <Route path='/music' render={() => <Music/> }/>
                        <Route
                            path='/users'
                            render={() => <UsersContainer />}
                        />
                        <Route path='/settings' render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
