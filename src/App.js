import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Success from "./Components/Success";
import React,{useState,useEffect} from 'react';
import { auth } from "./Firebase";
import "./App.css"
function App() {
  const [user,setUser] = useState(null)
  const [name,setName] = useState('');
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
          <Route path="/register"><Register name={name} setName={setName}/></Route>
          <Route path="/success"><Success user={user} name={name} setName={setName}/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
