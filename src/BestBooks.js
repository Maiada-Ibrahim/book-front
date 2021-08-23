import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
import FavBooks from './compo/FavBooks'

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      booksarr: [],
      email: ''
    }
  }
  componentDidMount = async () => {
    const { user } = this.props.auth0;

    await this.setState({
    email: `${user.email}`
    })

    console.log(this.state.email)
    let url =`${process.env.REACT_APP_PORT}/book?email=${this.state.email}`;
    let responseData = await axios.get(url);
    await this.setState({
      booksarr: responseData.data,
    })
    console.log(this.state.booksarr)
    
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
      <FavBooks FavBooks={this.state.booksarr} />
      </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks);