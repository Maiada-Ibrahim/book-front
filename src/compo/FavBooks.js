import React from 'react'
import Card from 'react-bootstrap/Card';



class Wether extends React.Component {
    render() {
        return (
            <>
                
                {   console.log(this.props.FavBooks),
                    this.props.FavBooks.map(value => {
                        return (
                            <Card  style={{ width: '25rem' },{ width: '15rem' } }>
                            {/* <Card.Img variant="top" onClick={this.increaseNuOfPets} src={this.props.imageUrl} alt='h' title='h'height="150px" width="10rem" /> */}
                            <Card.Body>
                              {/* <Card.Title>{this.props.title}</Card.Title> */}
                              <Card.Text>
                                {value.title} <br></br>
                                {value.description}
                                
                              </Card.Text>
                              {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                          </Card>
                        )
                    })
                }
            </>
        )
    }
}

export default Wether