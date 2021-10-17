import './App.css';
import virspitIcon from './assets/ViRSPiT.png'
import { Route } from 'react-router-dom';

import LoginPage from './router/LoginPages/LoginPage';
import Home from './router/HomePages/Home';
import {SubmitSmallBtn} from './components/SubmitBtn'
function App() {
  const handleLogout = () =>{
    window.location.replace('/')
  }
  return (
    <div className="App">
      <header className="app_header">
        <div className="header-logo-txt">
          <img className="header_iconImg" src={virspitIcon} width="200" alt='virspit icon'/>
          <div>ADMIN PAGE</div>
          {
            window.location.pathname==='/'?
            <></>
            :
              <div style={{marginLeft:700, fontSize:18}}>
                관리자님 안녕하세요. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SubmitSmallBtn value={"LOGOUT"} onClick={handleLogout}/>
              </div>
          }
        </div>
        <div className="header_bar"></div>
      </header>

      <div className="app-body">
        <Route exact path="/" component={LoginPage}/>
        <Route path="/home" component={Home}/>
      </div>
    </div>
  );
}

export default App;
