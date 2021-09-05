import React from 'react'
import { Modal, Button } from 'react-bootstrap'


 class ModelUpdate extends React.Component {
    updateshow = async (event) => {
        event.preventDefault();
        this.props.handleShow()
    }
    render() {
        return (
            <div>
            <Modal show={this.props.showmodal} onHide={this.props.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<form onSubmit=''>
<input type="text"name="title" /><br/>
<input type="text"name="alt_description" />
<input type="image"name="thumb" />
<input type="submit" value="submit" />

</form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer> */}
      </Modal>    
            </div>
        )
    }
}

export default ModelUpdate
