import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Modal() {
  const [show, setShow] = useState(false);
  // when modal is open or closed
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        show
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>OffCanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          This is my first attempt at utilizing bootstrap, and making something that is similar to a
          modal
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
