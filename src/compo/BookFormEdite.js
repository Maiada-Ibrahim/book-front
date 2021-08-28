import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios'


class BookFormEdite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
        show: false,
        bookdata:[]
        
      };
  

  updatebookfromform = async (e) => {
    console.log('jjjjjjjjjjjjjj')
    e.preventDefault();

    let title= e.target.title.value;
    console.log(title)
    let bookInformation = {
        title: e.target.title.value,
        description: e.target. description.value,
        email: this.props.email

    }

    updatebookfromform=async(e)=>{
        e.preventDefault();

        // let title= e.target.title.value;
        // let bookInfo = {
        //     title: e.target.title.value,
        //     description: e.target. description.value,
        //     email: this.props.email
        // }
        // let bookInfo = await axios.put(`${process.env.REACT_APP_PORT}/updatebook/${bookid}?user=${this.props.email}`)
        //   this.props.updatedata(bookInfo.data)
        //   this.props.handleClose()
     console.log('jjjjjjjjjjjjjj')
      }
   
      
    
      render() {
    
        return (
          <div>
            {/* <Modal show={this.props.show} onClick={this.props.handleClose} > */}
            <Modal show={this.props.showeditform}  >

              {/* {this.giveMeTunahandleShow} */}
              <Modal.Header closeButton>
                <Modal.Title>update</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form onSubmit={this.updatebookfromform}>
                <label>Enter your new book</label>
                <input type="text" name='title' />
                <label>Enter your description book</label>
                <input type="text" name='description' />
                <input type="submit" value="update" />
            </form>
              </Modal.Body>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal>
           
          </div>
        );
    
      }
    
    }
    export default BookFormEdite;
    