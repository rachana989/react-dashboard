import { Component } from "react";
import "./listcomp.css"
class ListComp extends Component{
    render(){
        let {username,email,address,phone,website,company}=this.props.user;
        return <div className="listdiv">
        <li>
   <span id="liname"> {this.props.user.name}</span>
   <hr />
    <ol>
        <li className="li1"><span className="limark"> UserName </span>: {username} </li>
        <li className="li1"><span className="limark"> email </span>: {email} </li>
        <li className="li1"><span className="limark"> City </span>: {address.city} </li>
        <li className="li1"><span className="limark"> Phone </span>: {phone} </li>
        <li className="li1"><span className="limark"> Website </span>: {website} </li>
        <li className="li1"><span className="limark"> Company Name </span>: {company.name} </li>
    </ol>
     </li>
     </div>
}
}
export default ListComp