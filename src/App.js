import "./App.css"
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Success from "./Components/Success";
import React,{useState,useEffect} from 'react';
import { auth } from "./Firebase";
function App() {
  const [user,setUser] = useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user) 
      else setUser(null)
    })
  },[])
  return (
    <div >
      <BrowserRouter>
        <Navbar user={user}/>
        <Switch>
          <Route exact path="/"><Home user={user}/></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register/></Route>
          <Route path="/success"><Success/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
