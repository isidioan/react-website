import React from 'react'
import {Button, Col, Container, Row} from "reactstrap";


function HomePage() {

    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div id="header" style={{
                backgroundImage:
                    "url(" + require("./../../assets/img/meletes3.jpg") + ")",
            }}
                 className="page-header"
                 data-parallax={true}
                 ref={pageHeader}>
                <div className="filter"/>
                <Container>
                    <div className="motto text-center">
                        <h1 style={{fontStyle: "italic"}}>Κτηματο-μηχανική</h1>
                        <h3>Υπηρεσίες Μηχανικού</h3>
                        <br/>
                        <Button
                            href="#"
                            className="btn-round mr-1"
                            color="neutral"
                            target="_blank"
                            outline
                        >
                            Επικοινωνήστε μαζι μας
                        </Button>
                    </div>
                </Container>
            </div>
            <div id="body" className="section">
                <Container>
                    <div className="title title-blue">
                        <h2>Υπηρεσίες</h2>
                    </div>
                    <Row>
                        <Col md="4" sm="6">
                            <div className="icon">
                                <a href="#">
                                    <i className="fa fa-wrench fa-5x" aria-hidden="true"></i>
                                </a>
                                <h4>Μελέτες - Κατασκευές</h4>
                                <p>Το γραφείο αναλαμβάνει την μελέτη και κατασκευή του συνόλου ενός τεχνικού έργου.</p>
                            </div>
                        </Col>
                        <Col md="4" sm="6">
                            <div className="icon">
                                <a href="#">
                                    <i className="fa fa-paint-brush fa-5x" aria-hidden="true"></i>
                                </a>
                                <h4>Ανακαινίσεις - Επισκευές</h4>
                                <p>Ανάληψη της πλήρη ανακαίνιση/ανακατασκευή της ιδιοκτησίας σας με γνώμονα την απόλυτη
                                    κάλυψη των δικών σας αναγκών.</p>
                            </div>
                        </Col>
                        <Col md="4" sm="6">
                            <div className="icon">
                                <a href="#" style={{paddingRight: "20%"}}>
                                    <i className="fa fa-cogs fa-5x" aria-hidden="true"></i>
                                </a>
                                <h4>Υπηρεσίες Τεχνικού Γραφείου</h4>
                                <p>Η ύπαρξη διαφορετικών ειδικοτήτων μηχανικών στο γραφείο μας, σας εξασφαλίζει την
                                    πολύπλευρη αντιμετώπιση των αναγκών σας.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="section section-blue">
                <Container>
                    <div className="title title-white">
                        <h2>Επικοινωνία</h2>
                    </div>
                    <Row>
                        <Col md="4" sm="6">
                            <div style={{marginBottom: "2%"}}>
                                <i className="fa fa-map-marker"></i>
                                <span style={{fontWeight: "bold", marginLeft: "5%"}}>Διεύθυνση: </span>
                                <span>Η διευθυνση</span>
                            </div>
                            <div style={{marginBottom: "2%"}}>
                                <i className="fa fa-phone"></i>
                                <span style={{fontWeight: "bold", marginLeft: "5%"}}>Τηλέφωνο: </span>
                                <span>(+30) 2422100186</span>
                            </div>
                            <div style={{marginBottom: "2%"}}>
                                <i className="fa fa-envelope"></i>
                                <span style={{fontWeight: "bold", marginLeft: "5%"}}>Email: </span>
                                <span>
                                    <a style={{color: "#FFF"}}
                                       href="mailto:ktm.almyrou@gmail.com">ktm.almyrou@gmail.com</a>
                                </span>
                            </div>
                        </Col>
                        <Col md="4" sm="6">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe width="100%" height="300px" id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=%CE%B2%CE%B1%CF%83%CE%B9%CE%BB%CE%AD%CF%89%CF%82%20%CE%BA%CF%89%CE%BD%CF%83%CF%84%CE%B1%CE%BD%CF%84%CE%AF%CE%BD%CE%BF%CF%85%2027%2C%20%CE%91%CE%BB%CE%BC%CF%85%CF%81%CF%8C%CF%82&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HomePage;