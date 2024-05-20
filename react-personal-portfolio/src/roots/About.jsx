import React from 'react';
import saraHeadshot from '../images/saraHeadshot.jpg';
import {useNavigate} from 'react-router-dom'

export const About = () => {
  
  const navigate = useNavigate();
  
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
        <button onClick = {handleGoHome} className="abouthomebutton"> Go home</button>
        <div className="container">
      <img src={saraHeadshot} alt="saraHeadshot" className="image" />
      <div className="content">
        <h1>About Sara</h1>
        <div className="about-text">
          Building her new personal computer (PC) at the age of 15, Sara wondered about the role of each computer part in creating the overall system. 
          Despite making a few mistakes, her curiosity about the internal components of a PC deepened, leading Sara to pursue a degree in Computer Engineering at UVA. 
          One of her most significant learning moments occurred in her Computer Systems and Organization II class when she grasped the meanings of 'core i5' and 'i7.' 
          This ignited a passion for delving into the complexities of computer architecture and system organization.
          <br /><br />
          Sara aspires to enhance her web development and software engineering skills this summer. 
          She eagerly welcomes challenges to continually elevate her expertise and embraces a commitment to ongoing learning. 
          Sara is excited about the prospect of collaborating with a community of like-minded peers and mentors who share similar interests and goals.
        </div>
        <div className="left-margin"></div>
      </div>
    </div>
    </div>)
};
