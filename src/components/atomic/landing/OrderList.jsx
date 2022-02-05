import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Form, Button } from 'react-bootstrap';
import { dataLogin } from '../../../data/orderDataDumies/dataLogin';

//destructuring props from data object uknown name in landing.jsx
export default function OrderList( { dataProduct, keyvalue } ){

  const navigate=useNavigate();

  const [showRegister, setShowRegister] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  function getNavigate(getkey){
    if(!dataLogin.isLogin){
      handleShowLogin();
      return;
    }
   navigate(`/detailproduct/${getkey}`)
  }

  return(
    <>
      <div keyvalue={keyvalue} onClick={()=>getNavigate(keyvalue)} className='text-red bg-soft-red order-border'>
        <img src={dataProduct.image} className='w-100'></img>
        <div className='px-4 py-2'>
            <h5 className='fw-bold'>{dataProduct.name}</h5>
            <h6 className='text-soft-red'>Rp.{dataProduct.price}</h6>
        </div>
      </div>

      <Modal show={showLogin} centered onHide={handleCloseLogin} className='rounded order-border'>
          <Modal.Body> 
              <h2 className='text-red py-4 fw-bold'>Login</h2>   
              <Form>
                  <Form.Control type="email" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Email" />
                  <Form.Control type="password" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Password" />
                  <Button className='bg-red mb-2 text-light b-red w-100 py-2 fw-bold'>Login</Button>
              </Form>
              <p className='fw-bold text-center'>Dont have an account ? Klik
                  <button className='modal-next fw-bold' onClick={ ()=>{ handleCloseLogin(); handleShowRegister(); }}> Here</button> 
              </p>
          </Modal.Body>
      </Modal>

      <Modal show={showRegister} centered onHide={handleCloseRegister} className='rounded order-border'>
          <Modal.Body> 
              <h2 className='text-red py-4 fw-bold'>Register</h2>   
              <Form>
                  <Form.Control type="email" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Email" />
                  <Form.Control type="password" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Password" />
                  <Form.Control type="text" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Full Name" />
                  <Button className='bg-red mb-2 text-light b-red w-100 py-2 fw-bold'>Register</Button>
              </Form>
              <p className='fw-bold text-center'>Already have an account ? Klik
                  <button className='modal-next fw-bold' onClick={ ()=>{ handleCloseRegister(); handleShowLogin(); }}> Here</button> 
              </p>
          </Modal.Body>
      </Modal>  
    </>  
  );
}