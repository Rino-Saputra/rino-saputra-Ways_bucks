import React,{ useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Popover, OverlayTrigger, Navbar, Nav, Button, Modal, Form, Image } from 'react-bootstrap';
import { landingImages, headerUserImage } from '../atomic/getAllImages/GetImages';
import PopData from './PopData';
import { dataLogin } from '../../data/orderDataDumies/dataLogin';
import { topingOrder } from '../../data/orderDataDumies/topping';
import ModalComponent from '../atomic/ModalComponent';

export default function Header(){

    const navigate=useNavigate();

    const [showModal, setModal] = useState(false);
    const [login, setLogin] = useState(false);//pass to props to get modal is login or register
    const handleModal = () => setModal(prevShow => !prevShow);


    const [showPop, setPop] = useState(false);
    const toLogout = logout => logout ? setIsLogin(false) : handleShowToolTip();
    const handleShowToolTip = () => setPop(prevShow => !prevShow)


    const [isLogin,setIsLogin]=useState(dataLogin.isLogin);
    const handleIsLogin =(toLogin)=> toLogin ? setIsLogin(toLogin) : handleModal();

    useEffect(()=>dataLogin.isLogin=isLogin,[isLogin]);
    const [basket,setBasket]=useState(0);
    useEffect(()=>{
        topingOrder.count=basket;
        topingOrder.getState=setBasket;
    },[])

    dataLogin.forceRerender=setIsLogin;//to trigger header from landing jsx

    const popover = (
        <Popover id='popover-positioned-bottom'>
          <Popover.Body>
            <PopData deactivepop={(logout)=>toLogout(logout)} />
          </Popover.Body>
        </Popover>
      );

    return(
        <Container>
            <Navbar className='mb-5'>
                <Navbar.Brand><Image onClick={()=>navigate('/')} className='cursor-p' src={landingImages.navIcon}></Image></Navbar.Brand>
                <Nav className="ms-auto d-flex align-items-center b-soft-blue">
                    {isLogin 
                        ?
                        <>< Nav.Link>
                                <Link to={"userchart"} className='d-flex toping-cnt'>
                                    <p className='basket-fill bg-red text-light'>{basket}</p>
                                    <Image src={headerUserImage.basket}></Image>
                                </Link>
                            </Nav.Link>
                            <OverlayTrigger show={showPop} trigger='click' placement="bottom" overlay={popover}>
                                <Nav.Link><Image src={headerUserImage.user} onClick={handleShowToolTip}></Image></Nav.Link>
                            </OverlayTrigger></>
                        :
                        <><Nav.Link><button type="button" onClick={()=>{handleModal();setLogin(true);}} className="btn btn-outline-danger rounded fw-bold text-red py-1 border-2 px-4 mx-2">Login</button></Nav.Link>
                        <Nav.Link> <button type="button" onClick={handleModal} className="btn bg-red text-light rounded fw-bold py-1 px-4">Register</button></Nav.Link></>
                    }    
                </Nav>
            </Navbar>
            {showModal && <ModalComponent getLogin={login} deactivemodal={(toLogin)=>{handleIsLogin(toLogin);}}/>}
        </Container>
    );
}