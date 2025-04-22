import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}



// import React, { useRef, useState, useEffect } from "react";
// import { Alert, Col, Container, Row } from "react-bootstrap";
// // …
// import emailjs from '@emailjs/browser';


// export const Contact = () => {
//   const formRef = useRef();
//   const [buttonText, setButtonText] = useState("Send");
//   const [status, setStatus] = useState({});

//   const clearForm = () => formRef.current.reset(); // simple DOM reset :contentReference[oaicite:14]{index=14}

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     emailjs
//       .sendForm(
//         "service_7tc6zrq",    // e.g., service_xxx
//         "template_m9czfwj",   // e.g., template_yyy
//         formRef.current,      // the form DOM node
//         "arDOHSxyygqPj7D4K"     // EmailJS public key
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           setStatus({ success: true, message: "Message sent successfully!" });
//           clearForm();
//           setButtonText("Send");
//         },
//         (error) => {
//           console.log("FAILED...", error);
//           setStatus({ success: false, message: "Failed to send, please try again." });
//           setButtonText("Send");
//         },
//       );
//   };
  
// return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           {/* … image column … */}
//           <Col size={12} md={6}>
//             <form ref={formRef} onSubmit={handleSubmit}>
//               <Row>
//                 {/* Give each input a `name` matching your template variables */}
//                 <Col sm={6}>
//                   <input type="text" name="from_name" placeholder="Your Name" required />
//                 </Col>
//                 <Col sm={6}>
//                   <input type="email" name="from_email" placeholder="Your Email" required />
//                 </Col>
//                 <Col sm={12}>
//                   <textarea name="message" rows="6" placeholder="Message" required />
//                 </Col>
//                 <Col sm={12}>
//                   <button type="submit">{buttonText}</button>
//                 </Col>
//                 {status.message && (
//                   <Col sm={12}>
//                     <Alert variant={status.success ? "success" : "danger"}>
//                       {status.message}
//                     </Alert>
//                   </Col>
//                 )}
//               </Row>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };
