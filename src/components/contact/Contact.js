import React from 'react'
import {Col, Container, Row} from "reactstrap";


function Contact() {

    return (
        <>
            <div id="header" style={{
                backgroundImage:
                    "url(" + require("./../../assets/img/epikoinwnia.jpg") + ")",
            }}
                 className="page-header page-header-small"
                 data-parallax={true}>
                <div className="filter"/>
            </div>
            <div id="body" className="section">
                <Container>
                    <div className="title title-black">
                        <h3>Στοιχεία Επικοινωνίας </h3>
                    </div>
                    <Row>
                        <Col md="6" sm="6">
                            <div className="address-info">
                                <i className="fa fa-map-marker"/>
                                <span className="address-info-label address-info-black">Διεύθυνση: </span>
                                <span className="address-info-black">Μιχοπούλου 8, Αλμυρός, 37100</span>
                            </div>
                            <div className="address-info">
                                <i className="fa fa-phone"/>
                                <span className="address-info-label address-info-black">Τηλέφωνο: </span>
                                <span className="address-info-black">(+30) 2422100186</span>
                            </div>
                            <div className="address-info">
                                <i className="fa fa-envelope"/>
                                <span className="address-info-label address-info-black">Email: </span>
                                <span>
                                    <a className="address-info-black"
                                       href="mailto:ktm.almyrou@gmail.com">ktm.almyrou@gmail.com</a>
                                </span>
                            </div>
                        </Col>
                        <Col md="6" sm="6">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe width="100%" height="300px" id="gmap_canvas" title="smallMap"
                                            src="https://maps.google.com/maps?q=%CE%9C%CE%B9%CF%87%CE%BF%CF%80%CE%BF%CF%8D%CE%BB%CE%BF%CF%85%208%2C%20%CE%91%CE%BB%CE%BC%CF%85%CF%81%CE%BF%CF%82&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    );
}

export default Contact;