import {Container, Row, Col } from 'react-bootstrap';
import { landingImages, productList, OrderList} from '../containerExport/exportModule';


export default function Landing(){
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
                        <Col md={3} className='cursor-p' >
                            <OrderList keyvalue={i} dataProduct={data} />
                        </Col>  
                    );
                    }
                )}
            </Row>
        </Container>
    );
}