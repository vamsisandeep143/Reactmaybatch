import React,{ useState,Suspense,lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link,useNavigate,NavLink } from 'react-router-dom';
import Sandeep from './Sandeep';
//import Sanvik from './Sanvik'
import Sanviknam from './sanviknam'
import Testing from './Testing';
import NoMatchRoute from './NoMatchRoute';
import Product from './Product';
import Kakinada from './Kakinada';
import Vizag from './Vizag';
import Rushikonda from './Rushikonda';
import Aruku from './Aruku';
import Users from './Users';
import { ProgressSpinner } from 'primereact/progressspinner';
import Userdetails from './Userdetails';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import Kishore from './Kishore';
import Profile from './Profile';
import {Hello} from './Hello'; 
import Minister from './Minister'

const LazyAbout = lazy(() => {return new Promise(resolve => setTimeout(resolve, 5000)).then(
  () => import("./Sanvik")
); } ) // step 1


function App() {

  const [isRed,setRed] = useState(true);
  const [value,setValue] = useState('');


  const handleColor = (event) => {
   setValue(event.target.value);


  }

  const handleSubmit = (event) => {
    event.preventDefault();
  if(value.trim().length === 0 ){
    setRed(false);
    
  }


  }

  const getRandom = () => {
    const k = Math.floor((Math.random()) * 3) +1
    return k;
  }

  const navLinkStyles = ({isActive}) => {


return {

fontWeight:isActive?'bold':'normal',
textDecoration:isActive?"none":"underline"

}



  }
  const getName =  () => {

    let x = "vamsi"
    let y = "sandeep"

    let Sandeep = x + y ;
    const L = getRandom();

    //const color = "red";
    
return Sandeep+L;

  }
  return (
    <Router>
    <div className="App" >
      <ul className="App-header">
              <li>
                <NavLink style= {navLinkStyles} to="/">Sandeep</NavLink >
              </li>
              <li>
                <NavLink style= {navLinkStyles} to="/Sanvik">Sanvik</NavLink >
              </li>
              <li>
                <NavLink style= {navLinkStyles} to="/Sanviknam">Ram Sanvik</NavLink >
              </li>

              <li>
                <NavLink style= {navLinkStyles} to="/Testing">Testing</NavLink>
              </li>
              <li>
                <NavLink style= {navLinkStyles} to="/Products">products</NavLink>
              </li>
              <li>
                <NavLink style= {navLinkStyles} to="/kishore">kishore</NavLink>
              </li>
              <li>
                <NavLink style= {navLinkStyles} to="/hello">Hello</NavLink>
              </li>
              <li>
                <NavLink style= {navLinkStyles} to="/minister">Minister</NavLink>
              </li>
            
            </ul>
         
           <Routes>
                 <Route exact path='/' element={< Sandeep />}></Route>
                 <Route exact path='/Minister' element={< Minister/>}></Route>
                 <Route exact path='/Hello' element={< Hello/>}></Route>
                 <Route exact path='/Sanvik' element={<Suspense fallback= {<><h1>I am loading mr Ram Sanvik</h1><ProgressSpinner style={{width: '50px', height: '50px'}} fill= "blue" strokeWidth="8"  animationDuration=".5s"/></>}><LazyAbout/></Suspense>}></Route>
                 <Route exact path='/Sanviknam' element={< Sanviknam/>}></Route>
                 <Route exact path='/kishore' element={< Kishore/>}></Route>
                 <Route exact path='/Testing' element={< Testing/>}>
                 <Route exact path='profile' element={< Profile/>}/>
                 </Route>
                 <Route path = "user" element = {<Users/>}></Route>
                  <Route path = "user/:id" element = {<Userdetails/>}></Route>
                 <Route path = "/products" element = {<Product/>}>
                  <Route index element = {<Vizag/>}></Route>
                  <Route path = "kkd" element = {<Kakinada/>}></Route>
                
                  <Route path = "vsp" element = {<Vizag/>}>
                  <Route path = "ark" element = {<Aruku/>}></Route> 
                  <Route path = "rushikonda" element = {<Rushikonda/>}></Route>


                  </Route>
                  </Route>
                 
                 <Route path = "*" element = {<NoMatchRoute/>}></Route>
          </Routes>
          
      {/* <form >
        <div className={`divcolor ${ !isRed ? 'invalid': '' }`}>
      <input type = "text" onChange={handleColor} style = {{ backgroundColor:isRed?'green': 'red'}}></input>
      <button onClick={handleSubmit} >click</button></div>
      </form>
    <h1>{getName()}</h1> */}
    </div>
    </Router>
  );
}

export default App;
