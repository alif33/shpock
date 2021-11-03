import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { toggleModal } from "../../redux/settings/actions";
import { useSelector, useDispatch } from "react-redux";

const AuthModal = ({ children }) => {

  const { users, settings } = useSelector(state => state)
  const dispatch = useDispatch();

  return (
    <>
      <Modal isOpen={settings.modal} toggle={()=>dispatch(toggleModal(settings.modal))}>
        <ModalHeader toggle={()=>dispatch(toggleModal(settings.modal))}></ModalHeader>
        <ModalBody>
         {children}
        </ModalBody>
      </Modal>
    </>
  );
};

export default AuthModal;
