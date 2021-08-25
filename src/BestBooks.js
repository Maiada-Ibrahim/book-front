import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
import FavBooks from './compo/FavBooks'
import BookFormModal from './compo/BookFormModal';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      booksarr: [],
      email: '',
      show:false,
      id:''

    }
  }
  handleClose = () =>   this.setState({
    show: this.state.show = false
  });
  handleShow = () =>  this.setState({
    show: this.state.show = true
  });


  addbook=async (e)=>{
    e.preventDefault();
   this.handleShow()
   console.log('hi');
  }
  
  // addbookfromform=async(e)=>{
  //   e.preventDefault();
  //   // let catName= e.target.catName.value;
  //   // let catBreed= e.target.catBreed.value;
  //   let catInfo = {
  //     catName:e.target.catName.value,
  //     catBreed: e.target.catBreed.value,
  //     email: this.state.email
  //   }

  //   // let catInfoData = await axios.get(`${process.env.REACT_APP_SERVER}/addCat`,{params:catInfo})
  //   let catInfoData = await axios.post(`${process.env.REACT_APP_SERVER}/addCat`,catInfo)
  //   this.setState({
  //     cats: catInfoData.data
  //   })

  // }
    
  
  //-----------------------------------------------
  componentDidMount = async () => {
    const { user } = this.props.auth0;

    await this.setState({
    email: `${user.email}`
    })

    console.log(this.state.email)
    let url =`${process.env.REACT_APP_PORT}/book?email=${this.state.email}`;
    let responseData = await axios.get(url);
    this.updatedata(responseData.data)

  }
updatedata=async(data)=>{
  await this.setState({
    booksarr:data ,
  })


}
  render() {
    return(
      <div>
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>
        <button onClick={this.addbook}>Add book </button>
       <FavBooks booksarr={this.state.booksarr}
                 email={this.state.email}
                 updatedata={this.updatedata}
                 
      
      />

      <BookFormModal
      handleShow = {this.handleShow}
      handleClose = {this.handleClose}
      email={this.state.email}
      show={this.state.show}
      updatedata={this.updatedata}
     
      />
      </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks);