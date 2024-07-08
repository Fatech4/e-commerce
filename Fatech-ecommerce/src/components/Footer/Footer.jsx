import React from "react";
import "./Footer.css";
import { Row, Container, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
// import logo from "../../assets/images/eco-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white">Fatech</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur velit cum quas corporis ipsum exercitationem, tempore
              illo a nam, sapiente nemo possimus accusamus iusto nostrum,
              obcaecati temporibus ex aut commodi?
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            {" "}
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>Adekola Compound, Oke-Ogba, Ganmo, Kwara State</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+2348107784708</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>adekoladamilola4@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} &copy; developed by Faruk Adekola. All rights
              reserved{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
