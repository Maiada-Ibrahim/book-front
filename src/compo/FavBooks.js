import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import BookFormEdite from './BookFormEdite';



class FavBooks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
     
      showeditform:false,
      infofbook:''
      

    }
  }
  handleShow = () =>  this.setState({
    show: this.state.showeditform = true
  });
   handleClose = () =>   this.setState({
    show: this.state.showeditform = false
  });
 removebook=async(bookid)=>{
    let bookInfo = await axios.delete(`${process.env.REACT_APP_PORT}/removebook/${bookid}?user=${this.props.email}`)
    this.props.updatedata(bookInfo.data)
}   
  updateshow=async (bookneededite)=>{
   this.handleShow()
   this.setState({
    infofbook: this.state.infofbook = bookneededite
  })
  }
  
    render() {
        return (
            <>
                
                {   console.log(this.props.booksarr),
                    this.props.booksarr.map((value ,index)=> {
                       let key=value._id
                       let id=value._id
                       let bookneededite=value
                      //  console.log(id)
                        return (

                            <Card  style={{ width: '25rem' },{ width: '15rem' } }>
                            {/* <Card.Img variant="top" onClick={this.increaseNuOfPets} src={this.props.imageUrl} alt='h' title='h'height="150px" width="10rem" /> */}
                            <Card.Body>
                              {/* <Card.Title>{this.props.title}</Card.Title> */}
                              <Card.Text>
                                {value.title} <br></br>
                                {value.description}
                              </Card.Text>
                              <Button onClick={()=>{this.removebook(id)}} variant="primary">delete</Button>
                              <Button onClick={()=>{this.updateshow(bookneededite)}} variant="primary">Update</Button>
                            
                            </Card.Body>
                            
                          </Card>
                          

                        )
                    })

                }
      <BookFormEdite
      handleShow = {this.handleShow}
      showeditform={this.state.showeditform}
      infofbook={this.state.infofbook}
      handleClose = {this.handleClose}
      email={this.props.email}
      updatedata={this.props.updatedata}
     
      />
            </>
        )
    }
}

export default FavBooks