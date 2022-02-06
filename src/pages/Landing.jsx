import {Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalComponent from '../components/atomic/ModalComponent';
import { landingImages, productList, OrderList} from '../containerExport/exportModule';
import { dataLogin } from '../data/orderDataDumies/dataLogin';

export default function Landing(){

    const navigate=useNavigate();

    const [showModal, setModal] = useState(false);
    const [login, setLogin] = useState(false);//pass to props to get modal is login or register
    const handleModal = () => setModal(prevShow => !prevShow);

    const [isLogin,setIsLogin]=useState(dataLogin.isLogin);
    const handleIsLogin =(toLogin)=>{
        if(toLogin){
            dataLogin.forceRerender(true);
            setIsLogin(true);
        } else {
            handleModal();
        }
    }
    const [paramsKey,setparamsKey]=useState(0);
    const getClickKey = (keyval) => {
        setparamsKey(keyval);
    }
    
    useEffect(()=>{
        dataLogin.isLogin=isLogin;
        if(isLogin){
            navigate(`detailproduct/${paramsKey}`);
        }
    },[isLogin]);

    return(
        <Container className='py-5'>
            <Row className='mb-5'>
                <Col xs lg={10}>
                    <div class="jumbotron jumbotron-md bg-red py-5 px-4 d-flex align-items-center order-border">
                        <div class="container text-light px-5">
                            <h1 class="display-5 fw-bold">WAYSBUCKS</h1>
                            <p class="lead">Things are changing, but we re still here for you</p>
                            <p className='w-50 opacity-50'>We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open.<span className='fw-bold opacity-100'>Waysbuck</span> Drivers is also available</p>
                            <p>Let s Order...</p>
                        </div>
                        <img src={landingImages.mainLandingImg} className='main-landing-img'></img>
                    </div>
                </Col>
            </Row>
            <Row className='text-red mb-5'>
                <h1>Lets Order</h1>
            </Row>
            <Row>
                { productList.map((data,i)=>{
                    return(
                        <Col md={3} className='cursor-p' onClick={()=>{handleModal();setLogin(true);}}>
                            <OrderList getclickkey={(keyval)=> getClickKey(keyval)} keyvalue={i} dataProduct={data} />
                        </Col>  
                    );
                    }
                )}
            </Row>
            {showModal && <ModalComponent getLogin={login} deactivemodal={(toLogin)=>{handleIsLogin(toLogin);}}/>}
        </Container>
    );
}