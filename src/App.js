import './App.css';
import { LeftMenu } from './Components/LeftMenu';
import { MainContainer } from './Components/MainContainer';
import { RightMenu } from './Components/RightMenu';

//First Page
import {CreateAccount} from './CreateAccountComponents/CreateAccount';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';


//NEW IDEA TO ADD A LOG IN!
//DELETE "CreateAccountComponent" Folder on left
//Move "CreateAccount.js" up to "Components" Folder
//Within the "Components" Folder add sub-folder called "MainComponents"
//Drag "LeftMenu.js , MainContainer.js , & RightMenu.js" inside of "MainComponents"

function App() {
  return (
    <div className="App">

          <Router>
        <Routes>
          <Route exact path='/' element = {<CreateAccount/>} >
            <Navigate to='/CreateAccount' />
          </Route>
          <Route exact path='/CreateAccount' element={<CreateAccount/>} />
        </Routes>
      </Router> 
      

      <LeftMenu/>
      <MainContainer/>
      <RightMenu/>

      <div className="background"></div>
    </div>
  );
}

export default App;
