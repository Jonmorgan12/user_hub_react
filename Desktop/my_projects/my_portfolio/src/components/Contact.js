import React from "react";
// import { NavLink } from "react-router-dom";
// import { Form, Button } from "react-bootstrap";
// import { RiMailSendLine } from "react-icons/ri";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact"></div>

      <div>
        <hr id="lineBreak"></hr>
      </div>

      <div id="projectsTitle">
        <p>Contact</p>
      </div>

      <div id="contactSubHeader">
        <h3>I look forward to do buisness with you.</h3>
      </div>

      <div id="contactSubHeader">
        <h5>
          Download my contact information{" "}
          <a href="../resume/resume.pdf" download="Jon Cobb Resume">
            here
          </a>
          .
        </h5>
      </div>

      {/* <div id="contactContainer">
        <Form style={{ minWidth: "700px" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button style={{ float: "right" }} variant="light" type="submit">
            Send <RiMailSendLine />
          </Button>
        </Form>
      </div> */}
    </>
  );
};

export default Contact;
