import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const CartSidebar = (props) => {
  const { modal, setModal, children } = props;
  const toggle = () => {
    setModal(!modal);
  };


  // const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);

  return (
    <>
      {/* <Button color='danger' onClick={toggle}>
        click
      </Button> */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
         {children}
        </ModalBody>
        {/* <ModalFooter>
          <Button color='primary' onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </>
  );
};

export default CartSidebar;
