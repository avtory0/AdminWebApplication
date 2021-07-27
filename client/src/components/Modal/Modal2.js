import React, {useState}  from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function Fcomponent() {
   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <div>
             <Button variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>

                  <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                      <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                      <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
        </>
    )
}
