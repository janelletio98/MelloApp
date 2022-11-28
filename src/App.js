import './App.css';
import { LeftMenu } from './Components/LeftMenu';
import { MainContainer } from './Components/MainContainer';
import { RightMenu } from './Components/RightMenu';
import { FrontPage } from './Components/FrontPage';
import { Route, Link } from 'react-router-dom';





/*NOTE FOR ROUTES: ANYTHING OUTSIDE THE ROUTE TAGS WILL BE DISPLAYED IN ALL PAGES. 
ANYTHING INSIDE THE ROUTE TAGS WILL BE DISPLAYED FOR A SPECIFIC PAGE */
//INSIDE ALL ROUTES TAG, WE WILL HAVE AN INDIVIDUAL ROUTE

function App() {
  return (


    <div className="App">

      
      

      <LeftMenu/>
      <MainContainer/>
      <RightMenu/>
      
      
      
      
    

      <div className="background"></div>



    </div>
  );
}

export default App;
