import React, {useState}  from 'react'
import { Button, Modal } from 'react-bootstrap';

const Axios = require('axios');

export default function Fcomponent() {
    
    const [userloginReg, setUserloginReg] = useState('');
    const [useremailReg, setuseremailReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');

  const register = () => {
    Axios.post("http://localhost:3001/register", {
        username: userloginReg,
        email: useremailReg,
        password: passwordReg,
    }).then((response) => {
        console.log(response);
    });
  }

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
                <div className = "container">
                  <form>
                       <div className="form-floating">
                           <input type="text" className="form-control" placeholder="Login" 
                           onChange = {(e) => { setUserloginReg(e.target.value);
                               }}
                           />
                           <label>Login</label>
                       </div>
                       <div className="form-floating">
                           <input type="text" className="form-control" placeholder="name@example.com"
                           onChange = {
                              (e) => {
                                  setuseremailReg(e.target.value);
                              }
                          }/>
                           <label htmlFor="floatingInput">Email address</label>
                       </div>
                       <div className="form-floating">
                           <input type="password" className="form-control" placeholder="Password"
                           onChange = {
                              (e) => {
                                  setpasswordReg(e.target.value);
                              }
                          }/>
                           <label htmlFor="floatingPassword">Password</label>
                       </div>
                       <button className="w-100 btn btn-lg btn-primary" onClick={register}>Sign in</button>
                      </form>
                  </div>
                
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={register}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
        </>
    )
}
