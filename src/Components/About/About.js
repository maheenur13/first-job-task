import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faPaperPlane, faCameraRetro, faCommentDots} from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'react-bootstrap';
const aboutData = [
    { icon: faHeart, title: 'Quality and Saving', text: 'Comprhensive quality control affordable prices',
        style:{
            color: '#F40045',
        }
},
// ###00C766
    { icon: faBookmark, title: 'Global Brands', text: 'Buy you favorite items from your favorite global brands',
    style:{
        color: '#157AFF',
    }},
    { icon:faPaperPlane, title: 'Fast Delivery', text: 'Fast and convenient door to door delivery',
    style:{
        color: '#FD6600',
    } },
    { icon: faCameraRetro, title: 'Secure Payment', text: 'Different secure payment methods' },
    { icon: faCommentDots, title: 'Professional Servise', text: 'Efficient customer support from passionate team',
    style:{
        color: '#00C766',
    } },
]
const About = () => {
    return (
        <div  className=" container mx-auto my-5">
            <div  className="d-flex justify-content-between align-items-center flex-wrap ">
                {
                    aboutData.map(data => {
                        return (
                            <div style={{width: '200px'}} className="mx-auto d-flex my-2 flex-column justify-content-center align-items-center">
                                <FontAwesomeIcon style={data.style} className="m-1" size="5x" icon={data?.icon}/>
                                <h5 className=" text-center my-3">{data?.title}</h5>
                                <p className="text-center text-justify m-1">{data.text}</p>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default About;