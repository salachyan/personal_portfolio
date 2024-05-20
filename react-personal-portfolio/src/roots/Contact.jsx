import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {

    const navigate = useNavigate();
  
    const handleGoHome = () => {
      navigate('/');
    };

  return (
  
  <div> 
    {/* <Link to={"/"}> <button>Home</button></Link> */}
    <button onClick = {handleGoHome}> Go home</button>
			<br></br>
    <h2>Contact Information: </h2>
      <div>Phone number: (907) 793 - 0208</div>
      <br></br>
      <div>Email: yyn8nw@virginia.edu</div>
  </div>
);

  
};

export default Contact;
