import axios from 'axios'
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import FavRender from './FavRender';
import ModelUpdate from './ModelUpdate';


class MyFav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: '',
      showmodal:false
    };
  }


  handleClose = () => {
    this.setState({
      showmodal: false
    })
  }
  handleShow = () => {
    this.setState({
      showmodal: true
    })
  };

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    await this.setState({
      email: `${user.email}`
    })
    console.log(this.state.email)
    let data = await axios.get(`http://localhost:3001/getuserdata?email=${this.state.email}`);
    this.setState({
      data: data.data
    })
    console.log(data.data)
  }
  delete = async (id) => {
    let data = await axios.delete(`http://localhost:3001/deletedata/${id}?email=${this.state.email}`);
    await this.setState({
      data: data.data
    })
    console.log(data.data)
  }
  //-----------------------------------------------------------------------------------------------
  update = async (id) => {
    this.handleShow()
    
  }
//    doupdate=async(e,id)=>{
//      console.log(id)
//  let photoinf={
//       title:e.target,
//       thumb:element.thumb,
//       alt_description:element.alt_description,
//       email :this.state.email
//       }
//     let data = await axios.put(`http://localhost:3001/update/${id}`,);
//     await this.setState({
//       data: data.data
//     })
//     console.log(data.data)
//   }
  render() {
    return (

      <div>
        <FavRender
          let delete={this.delete}
          let data={this.state.data}
          let update={this.update}
        />
        
          < ModelUpdate  
          let showmodal={this.state.showmodal}
          let handleClose ={this.handleClose}
        />
          
          


        



      </div>



    )
  }
}

export default withAuth0(MyFav)
