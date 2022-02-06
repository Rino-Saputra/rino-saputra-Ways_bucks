import { useEffect } from "react";
import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

export default function ModalComponent(props){

    const conditional={login:false,register:false};
    props.getLogin ? conditional.login=true : conditional.register=true;

    const [showRegister, setShowRegister] = useState(conditional.register);
    const handleShowRegister = () => setShowRegister(true);
    const handleCloseRegister = () => setShowRegister(false);

    const [showLogin, setShowLogin] = useState(conditional.login);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseLogin = () => setShowLogin(false);

    //if both of modal is false then close modal and back to header
    useEffect(()=>(!showRegister && !showLogin) && props.deactivemodal(),[showRegister,showLogin])

    const getSubmit = e => {
        e.preventDefault();
        //close modal re render header
        handleCloseLogin();
        handleCloseRegister();
        props.deactivemodal(true);
    }

    return(
        <>
            <Modal show={showRegister} centered onHide={handleCloseRegister} className='rounded order-border'>
                <Modal.Body> 
                    <h2 className='text-red py-4 fw-bold'>Register</h2>   
                    <Form>
                        <Form.Control type="email" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Email" />
                        <Form.Control type="password" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Password" />
                        <Form.Control type="text" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Full Name" />
                        <Button className='bg-red mb-2 text-light b-red w-100 py-2 fw-bold' onClick={getSubmit} >Register</Button>
                    </Form> 
                    <p className='fw-bold text-center'>Already have an account ? Klik
                        <span className='modal-next fw-bold cursor-p' onClick={ ()=>{ handleCloseRegister(); handleShowLogin(); }}> Here</span> 
                    </p>
                </Modal.Body>
            </Modal> 
            <Modal show={showLogin} centered onHide={handleCloseLogin} className='rounded order-border'>
                <Modal.Body> 
                    <h2 className='text-red py-4 fw-bold'>Login</h2>   
                    <Form>
                        <Form.Control type="email" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Email" />
                        <Form.Control type="password" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Password" />
                        <Button type="submit" className='bg-red mb-2 text-light b-red w-100 py-2 fw-bold'onClick={getSubmit} >Login</Button>
                    </Form>
                    <p className='fw-bold text-center'>Dont have an account ? Klik
                        <span className='modal-next fw-bold cursor-p' onClick={()=>{handleCloseLogin(); handleShowRegister(); }}> Here</span> 
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}