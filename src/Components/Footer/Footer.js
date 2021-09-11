import React from 'react';
import { Col, FloatingLabel, Form, Nav, Row } from 'react-bootstrap';
import image from '../../Images/footerBanner.PNG';
import fbIcon from '../../Images/002-facebook-logo.png';
import tweetIcon from '../../Images/001-twitter-logo-silhouette.png';
import linkedIcon from '../../Images/004-linkedin-logo.png';
import instaIcon from '../../Images/instagram (1).png';
import youtubeIcon from '../../Images/005-youtube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faPaperPlane, faCameraRetro, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import bkashImg from '../../Images/BKash-bKash-Logo.wine.png'
import rocketImg from '../../Images/ricket.png';
import nagadImage from '../../Images/nagad-logo-7A70CCFEE0-seeklogo.com.png';
import visaImage from '../../Images/visa.png';
import masterImg from '../../Images/Mastercard-logo.png';
import amexImg from '../../Images/amex-logo-png.png';
import serviceImg from '../../Images/customer-service-2-line.png';
import phoneImg from '../../Images/phone-line.png';
import mailImg from '../../Images/mail-send-line.png';
import { Card } from 'react-bootstrap';
import { FormControl, Grid, Input, InputAdornment, InputLabel, TextField } from '@material-ui/core';
const Footer = () => {
    return (
        <Row className="container-lg border container-md mx-auto">
            {/* <div> */}
            <Col className=" mx-auto p-1" sm={12} md={10} lg={3}>

                <Card.Img style={{marginTop:'50px'}} src={image} alt="pic" />
            </Col>
            <Col className="mx-auto " sm={12} md={10} lg={6}>
                <div className="">
                <div className="px-3  my-5 d-flex justify-content-between flex-wrap align-items-center w-50 mx-auto">
                    <div >
                        <Card.Img style={{ maxWidth: '15px' }} src={fbIcon} />
                    </div>
                    <div >
                        <Card.Img style={{ maxWidth: '30px' }} src={tweetIcon} />
                    </div>
                    <div >
                        <Card.Img style={{ maxWidth: '30px' }} src={linkedIcon} />
                    </div>
                    <div >
                        <Card.Img style={{ maxWidth: '30px' }} src={instaIcon} />
                    </div>
                    <div >
                        <Card.Img style={{ maxWidth: '30px' }} src={youtubeIcon} />
                    </div>

                </div>
                <div className="px-5">
                    <Card.Title>SUBSCRIBE</Card.Title>
                    <Card.Text>Get the latest news from zDrop</Card.Text>

                    <FormControl    
                    className=' w-100'>
                        <Input
                        style={{position:'relative'}}
                            id="input-with-icon-adornment"
                            placeholder="Email Adress"
                            startAdornment={
                                <InputAdornment
                                style={{
                                 position:'absolute',
                                 right:'0'
                                }}
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                </div>
                <div className="my-4">
                    <Nav
                    className=""
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="/">About zDrop</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" eventKey="link-1">Faq & Support</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" eventKey="link-2">Terms & Conditions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" eventKey="link-2">Privacy Policy</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="d-flex justify-content-around align-items-center w-75 mx-auto">
                    <div style={{height:'40px',overflow:'hidden'}} className="border">
                    <Card.Img className="p-2" style={{ maxWidth:'65px'}} src={bkashImg}/>
                    </div>
                    <div style={{height:'40px',overflow:'hidden'}} className="border">
                    <Card.Img className="p-2" style={{ maxWidth:'65px'}} src={nagadImage}/>
                    </div>
                    <div style={{height:'40px',overflow:'hidden'}} className="border">
                    <Card.Img className="p-2" style={{ maxWidth:'65px',marginTop:'-17px'}} src={rocketImg}/>
                    </div>
                    <div style={{height:'40px',overflow:'hidden'}} className="border">
                    <Card.Img className="p-2" style={{ maxWidth:'65px'}} src={visaImage}/>
                    </div>
                    <div style={{height:'40px',overflow:'hidden'}} className="border">
                    <Card.Img className="p-2" style={{ maxWidth:'65px'}} src={masterImg} />
                    </div>
                    <div style={{height:'40px',overflow:'hidden'}} className="border">
                    <Card.Img className="p-2" style={{ maxWidth:'65px',marginTop:'-10px'}} src={amexImg} />
                    </div>
                </div>
            </Col>
            <Col className=" p-4 mx-auto " sm={12} md={10} lg={3}>
                <div className="mt-5">
                    <Card.Title className="my-4">CONTACT US</Card.Title>
                    <div>
                        <div>
                            <h6><Card.Img style={{maxWidth:'20px'}} src={serviceImg} /> Hotline :</h6>
                            <p style={{fontSize:'14px'}}>+8801929459195 (10am-10pm/Sat-Thur)</p>
                        </div>
                        <div>
                            <h6><Card.Img style={{maxWidth:'20px'}} src={phoneImg} /> Whole Sales :</h6>
                            <p  style={{fontSize:'14px'}}>01929459195 (10am-12pm)</p>
                        </div>
                        <div>
                            <h6><Card.Img style={{maxWidth:'20px'}} src={mailImg} /> Email :</h6>
                            <p style={{fontSize:'14px'}}>support.example@gmail.com</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Footer;