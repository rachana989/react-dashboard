// import React, { Component } from 'react'


// class PostDataTable extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       users: [],
//       isLoading: false,
//       isError: false
//     }
//   }

//   async componentDidMount() {
//     this.setState({ isLoading: true })
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     if (response.ok) {
//       const users = await response.json()
//       this.setState({ users, isLoading: false })
//     } else {
//       this.setState({ isError: true, isLoading: false })
//     }
//   }
//   render() {
//     const { users, isLoading, isError } = this.state

//     if (isLoading) {
//       return <div>Loading...</div>
//     }

//     if (isError) {
//       return <div>Error</div>
//     }

//     return users.length > 0
//       ? (
//         <table>
//           <thead>
//             <tr>
//               {this.renderTableHeader()}
//             </tr>
//           </thead>
//           <tbody>
//             {this.renderTableRows()}
//           </tbody>
//         </table>
//       ) : (
//         <div>
//           No users.
//       </div>
//       )
//   }

//   renderTableHeader = () => {
//     return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
//   }

//   renderTableRows = () => {
//     return this.state.users.map(user => {
//       return (
//         <tr key={user.userId}>
//           <td>{user.id}</td>
//           <td>{user.title}</td>
//           <td>{user.body}</td>
//         </tr>
//       )
//     })
//   }
// }

// export default PostDataTable;


import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'


export default class PostDataTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{  
      Header: 'ID',  
      accessor: 'id',
     }
     ,{  
      Header: 'Title',  
      accessor: 'title' ,
      }
     
     ,{  
     Header: 'Body',  
     accessor: 'body' ,
     }
    
  ]
    return (
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
    )
  }
}