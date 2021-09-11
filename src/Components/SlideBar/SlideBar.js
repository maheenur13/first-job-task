import React, { Component, useState } from 'react';
import { Icon } from 'react-icons-kit'
import {iosArrowLeft} from 'react-icons-kit/ionicons/iosArrowLeft';
import {iosArrowRight} from 'react-icons-kit/ionicons/iosArrowRight'
import Carousel,{consts} from 'react-elastic-carousel';
import Image1 from '../../Images/hairoil.png';
import Image2 from '../../Images/mask.png';
import Image3 from '../../Images/lady.png';
import Image4 from '../../Images/yoga.png';
import { Card, CardGroup, Row,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import './SlideBar.scss';


const SlideBar = () => {
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]
    const [carouselValue, setCarouselValue] = useState({

        items:
            [
                { id: 1, title: 'News', image: Image1, date: 'Oct 12, 2020', commentCount: '26' },
                { id: 2, title: 'Health', image: Image2, date: 'Oct 12, 2020', commentCount: '26' },
                { id: 3, title: 'Fashion', image: Image3, date: 'Oct 12, 2020', commentCount: '26' },
                { id: 4, title: 'Health', image: Image4, date: 'Oct 12, 2020', commentCount: '26' },
                { id: 5, title: 'News', image: Image1, date: 'Oct 12, 2020', commentCount: '26' },
                { id: 6, title: 'Health', image: Image2, date: 'Oct 12, 2020', commentCount: '26' },
                { id: 7, title: 'Fashion', image: Image3, date: 'Oct 12, 2020', commentCount: '26' },
                { id: 8, title: 'Health', image: Image4, date: 'Oct 12, 2020', commentCount: '26' },
                { id: 9, title: 'News', image: Image1, date: 'Oct 12, 2020', commentCount: '26' },
            ]
    })
    const slideBarButton = ({type, onClick, isEdge})=>{
        const pointer = type === consts.PREV ? <Icon size={32} icon={iosArrowLeft}/> : <Icon size={32}  icon={iosArrowRight}/>;
        console.log(pointer)
        return (
          <Button
          style={{
              height:'35px',
              backgroundColor:'rgb(1, 199, 101)',
              border:'none',
              position: 'absolute',
              left:type=== consts.PREV && '0',
              top: '50%',
              transform: 'translateY('+ -50 +'%)',
            //   transform: 'translateX('+ -50 +'%)',
              right:type!== consts.PREV && '0',
              borderRadius:type=== consts.PREV ? '30px 0px 0px 30px':'0px 30px 30px 0px' ,
              padding:'0px 4px 0px 4px',
              zIndex:'999'
            }}
          onClick={onClick} disabled={isEdge}>
            {pointer}
          </Button>
        )
    }
    const { items } = carouselValue;
    return (
        <Row className="m-3">
            <Carousel 
             breakPoints={breakPoints}
             renderArrow={slideBarButton}
             >
                {items.map(item => <div key={item.id}>
                    {/* <CardGroup > */}
                    <Card
                        style={{
                            overflow: 'hidden',
                            borderRadius: '13px',
                            border: 'none',

                        }}
                        className=" text-white">
                        <div
                            style={{
                                backgroundImage: "url(" + item.image + ")",
                                height: '260px',
                                width: '250px',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                // transform:`scale(1.3)`,



                            }}
                            alt="Card image image-fluid" ></div>
                        <Card.ImgOverlay>
                            <Card.Title
                                style={{
                                    backgroundColor: 'rgb(1, 199, 101)',
                                    fontSize: '15px',
                                    display: 'inline-block',
                                    borderRadius: '3px'
                                }}
                                className="m-2  text-center py-1 px-2">{item.title}</Card.Title>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    position: 'absolute',
                                    bottom: '0',
                                    width: '100%',
                                    left: '0'
                                }}
                                className="py-2 px-4">
                                <Card.Text><FontAwesomeIcon style={{marginRight:'5px'}} icon={faCalendarWeek}/>{item.date}</Card.Text>
                                <Card.Text>{item.commentCount}</Card.Text>
                            </div>
                            {/* <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                        </Card.ImgOverlay>
                    </Card>
                    {/* </CardGroup> */}

                </div>)}
            </Carousel>
        </Row>
    );
};

export default SlideBar;