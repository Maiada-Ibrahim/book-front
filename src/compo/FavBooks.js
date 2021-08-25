import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import axios from 'axios'



class FavBooks extends React.Component {

  
  removebook=async(bookid)=>{
    // console.log(bookid)
    let bookInfo = await axios.delete(`${process.env.REACT_APP_PORT}/removebook/${bookid}?user=${this.props.email}`)
    this.props.updatedata(bookInfo.data)

}

    
    render() {
        return (
            <>
                
                {   console.log(this.props.booksarr),
                    this.props.booksarr.map((value ,index)=> {
                       let key=value._id
                       let id=value._id
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
                            
                            </Card.Body>
                            
                          </Card>

                        )
                    })
                }
            </>
        )
    }
}

export default FavBooks