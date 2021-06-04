import React, { Component } from 'react'
import "./dashboard.css"
import axios from 'axios';
import ListComp from './components/Listcomp';

class Dashboard extends Component{
  state={
    users:[]
  }
  clickHandler=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        this.setState({
            users:res.data
        })
    }).catch((error)=> console.log("Error:",error))
    document.getElementById("btn2").innerHTML="";
  }
  render(){
    return <div id="dash">
      <div id="btn2">
      <button onClick =  {this.clickHandler} className="button1">Our Users</button>
      </div>
      <ul>
        {this.state.users.map(val => <ListComp key={val.id} user={val}/>)}
      </ul>   
    </div>
  }
}
 export default Dashboard;
       