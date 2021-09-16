import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios'


class BookFormModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
        show: this.props.show,
        bookdata:[]
        
      };
  
    }

    addbookfromform=async(e)=>{
        e.preventDefault();
        let title= e.target.title.value;
        // let catBreed= e.target.catBreed.value;
        let bookInfo = {
            title: e.target.title.value,
            description: e.target. description.value,
            email: this.props.email
        }
        // console.log(bookInfo )

        // let catInfoData = await axios.get(`${process.env.REACT_APP_SERVER}/addCat`,{params:catInfo})
        let bookInfoData = await axios.post(`${process.env.REACT_APP_PORT}/addbookfromform`,bookInfo)
        this.setState({
            bookdata: bookInfoData.data
          })
          this.props.updatedata(bookInfoData.data)
          this.props.handleClose()
     
      }
   
      
    
      render() {
    
        return (
          <div>
            {/* <Modal show={this.props.show} onClick={this.props.handleClose} > */}
            <Modal show={this.props.show}  >

              {/* {this.giveMeTunahandleShow} */}
              <Modal.Header closeButton>
                <Modal.Title>enter your new book infrmation</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form onSubmit={this.addbookfromform}>
                <label>Enter your new book</label>
                <input type="text" name='title' />
                <label>Enter your description book</label>
                <input type="text" name='description' />
                <input type="submit" value="add new book" />
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
    export default BookFormModal;