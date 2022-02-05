import React,{ useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Popover, OverlayTrigger, Navbar, Nav, Button, Modal, Form, Image } from 'react-bootstrap';
import { landingImages, headerUserImage } from '../atomic/getAllImages/GetImages';
import PopData from './PopData';
import { dataLogin } from '../../data/orderDataDumies/dataLogin';
import { topingOrder } from '../../data/orderDataDumies/topping';
// import { TopingRender } from '../../containerExport/exportModule';
// import { AppContext } from '../../context/countToping';
// import App from '../App';

export default function Header(){

    const [showRegister, setShowRegister] = useState(false);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);


    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const [isLogin,setIsLogin]=useState(dataLogin.isLogin);
    useEffect(()=>{
        dataLogin.isLogin=isLogin;
    },[isLogin])

    const [basket,setBasket]=useState(0);
    useEffect(()=>{
        topingOrder.count=basket;
        topingOrder.getState=setBasket;
    },[])

    const popover = (
        <Popover  id='popover-positioned-bottom'>
          <Popover.Body>
            <PopData />
          </Popover.Body>
        </Popover>
      );

    return(
        <Container>
            <Navbar className='mb-5'>
                <Navbar.Brand href="#home"><Image src={landingImages.navIcon}></Image></Navbar.Brand>
                <Nav className="ms-auto d-flex align-items-center b-soft-blue">
                    {isLogin 
                    ?
                    <>< Nav.Link>
                            <Link to={"userchart"} className='d-flex toping-cnt'>
                                <p className='basket-fill bg-red text-light'>{basket}</p>
                                <Image src={headerUserImage.basket}></Image>
                            </Link>
                        </Nav.Link>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <Nav.Link><Image src={headerUserImage.user}></Image></Nav.Link>
                        </OverlayTrigger></>
                    :
                    <><Nav.Link href="#home"><button type="button" onClick={()=>setIsLogin(true)} className="btn btn-outline-danger rounded fw-bold text-red py-1 border-2 px-4 mx-2">Login</button></Nav.Link>
                    <Nav.Link href="#features"> <button type="button" onClick={handleShowRegister} className="btn bg-red text-light rounded fw-bold py-1 px-4">Register</button></Nav.Link></>
                    }    
                </Nav>
            </Navbar>

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
        </Container>
    );
}