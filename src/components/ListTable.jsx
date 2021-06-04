import { Component } from "react";

class ListTable extends Component{
    render(){
        let {id,title,body}=this.props.post;
        return <div className="listdiv1">
        <li>
    User ID: {this.props.post.id}
    <ol>

        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Body:{body}</li>
       
    </ol>
     </li>
     </div>
}
}
export default ListTable;