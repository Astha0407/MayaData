
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,
  Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';


function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/aboutme' component={Aboutme}/>
    </Switch>
     </Router> 
    </div>
  );
}

export default App;
