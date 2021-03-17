import Modal from 'react-bootstrap/Modal';

function MessageModal(props) {
  return (
    <Modal  show={props.state}
    onHide={props.action}>
      <Modal.Header closeButton>
        <Modal.Title>Success</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Success! Please check your shopping cart.</p>
      </Modal.Body>

    </Modal>
  );
}

export default MessageModal;
