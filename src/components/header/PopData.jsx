import { Row, Col, Image } from "react-bootstrap";
import { popImage } from '../atomic/getAllImages/GetImages'

import { useNavigate } from "react-router-dom";

import { dataLogin } from "../../data/orderDataDumies/dataLogin";

//true in prop deactive for logout
export default function PopData(props){
    const navigate=useNavigate();
    function redirectToHome(){
        // dataLogin.isLogin=false;
         navigate("/"); 
    }
    function redirectToProfile(){ navigate("/user");}
    function redirectToProduct(){ navigate("/addproduct");}
    function redirectData(){ navigate("/admindata");}

    return(
        <>
            {/* <Row className="py-4 px-2 mb-2 border-bottom border-2">
                <Col md={4}><Image src={popImage.profileIcon}></Image></Col>
                <Col md={8}><h2 onClick={()=>{ redirectToProfile();props.deactivepop(false); }} className="cursor-p">Profile</h2></Col>
            </Row>
            <Row className='pt-4 px-2 pb-2 mb-2'>
                <Col md={4}><Image src={popImage.logOutIcon}></Image></Col>
                <Col md={8} onClick={()=>{ redirectToHome(); props.deactivepop(true);} } className="cursor-p" ><h2>Logout</h2></Col>
            </Row> */}
            <Row className="py-4 mb-2 d-flex align-items-center border-bottom border-2">
                <Col md={2}><Image src={popImage.addProduct}></Image></Col>
                <Col md={9}><h2 onClick={()=>{ redirectToProduct();props.deactivepop(false);} } className="cursor-p pop-t">Add Product</h2></Col>
            </Row>
            <Row className="py-4 mb-2 border-bottom border-2">
                <Col md={2}><Image src={popImage.addToping}></Image></Col>
                <Col md={9}><h2 onClick={()=>{ redirectData();props.deactivepop(false);}} className="cursor-p pop-t">Add Toping</h2></Col>
            </Row>
            <Row className='pt-4 px-2 pb-2 mb-2'>
                <Col md={2}><Image src={popImage.logOutIcon}></Image></Col>
                <Col md={9} onClick={()=>{ redirectToHome(); props.deactivepop(true);}} className="cursor-p pop-t" ><h2>Logout</h2></Col>
            </Row>
        </>
    );
}